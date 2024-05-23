import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree';
import { FHIRPathLexer } from './generated/FHIRPathLexer';
import { FHIRPathParser } from './generated/FHIRPathParser';
export var ScopeType;
(function (ScopeType) {
    ScopeType[ScopeType["None"] = 0] = "None";
    ScopeType[ScopeType["ForEach"] = 1] = "ForEach";
    ScopeType[ScopeType["Function"] = 2] = "Function";
    ScopeType[ScopeType["Invocation"] = 3] = "Invocation";
    ScopeType[ScopeType["Literal"] = 4] = "Literal";
})(ScopeType || (ScopeType = {}));
export class Scope {
    constructor(type, token) {
        this.type = type;
        this.token = token;
    }
}
export var FHIRTokenType;
(function (FHIRTokenType) {
    FHIRTokenType[FHIRTokenType["Empty"] = 0] = "Empty";
    FHIRTokenType[FHIRTokenType["Identifier"] = 1] = "Identifier";
    FHIRTokenType[FHIRTokenType["FunctionIdentifier"] = 2] = "FunctionIdentifier";
    FHIRTokenType[FHIRTokenType["Keyword"] = 3] = "Keyword";
    FHIRTokenType[FHIRTokenType["Type"] = 4] = "Type";
    FHIRTokenType[FHIRTokenType["Literal"] = 5] = "Literal";
    FHIRTokenType[FHIRTokenType["ExternalConstant"] = 6] = "ExternalConstant";
    FHIRTokenType[FHIRTokenType["NonTriggeringCharacter"] = 7] = "NonTriggeringCharacter";
})(FHIRTokenType || (FHIRTokenType = {}));
export class Position {
    constructor(line, character) {
        this.line = line;
        this.character = character;
    }
}
export class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
export class FHIRToken {
    constructor(type, value, range = null) {
        this.type = type;
        this.value = value;
        this.range = range;
    }
}
export class AutocompleteContext {
    constructor(params) {
        this.schemaPath = [];
        this.scope = undefined;
        Object.assign(this, params);
    }
}
class FHIRPathAutocompleteVisitor extends AbstractParseTreeVisitor {
    constructor(cursor) {
        super();
        this.visitThisInvocation = (ctx) => {
            return new FHIRToken(FHIRTokenType.Keyword, ctx.text, this.rangeFromRule(ctx));
        };
        this.visitIndexInvocation = (ctx) => {
            return new FHIRToken(FHIRTokenType.Keyword, ctx.text, this.rangeFromRule(ctx));
        };
        this.visitTotalInvocation = (ctx) => {
            return new FHIRToken(FHIRTokenType.Keyword, ctx.text, this.rangeFromRule(ctx));
        };
        this.visitInvocationExpression = (ctx) => {
            // console.log(ctx.text)
            let leftNode = ctx.getChild(0);
            let left = this.visit(leftNode);
            if (this.inRange(leftNode)) {
                return left;
            }
            if (left != null) {
                this.processFHIRToken(left);
            }
            let rightNode = ctx.getChild(2);
            if (this.inRange(rightNode)) {
                this.scope.type = ScopeType.Invocation;
                if (left !== null && left !== undefined) {
                    this.scope.token = left;
                }
                else if (this.schemaPath.length > 0) {
                    this.scope.token = this.schemaPath[this.schemaPath.length - 1];
                }
                else {
                    this.scope.token = new FHIRToken(FHIRTokenType.Empty, "");
                }
            }
            return this.visit(rightNode);
        };
        this.visitIndexerExpression = (ctx) => {
            let expressionTree = ctx.getChild(0);
            let expressionResult = this.visit(expressionTree);
            if (this.inRange(expressionTree)) {
                return expressionResult;
            }
            this.processFHIRToken(expressionResult);
            if (ctx.childCount > 3) {
                if (this.inRange(ctx.getChild(2))) {
                    return this.visit(ctx.getChild(2));
                }
                else if (this.inRange(ctx.getChild(3))) {
                    return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, "]", this.rangeFromCursor());
                }
                else if (this.inRange(ctx.getChild(1))) {
                    return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
                }
            }
            else if (ctx.childCount > 2) {
                // Can be a closed paren or expression
                let thirdChild = ctx.getChild(2);
                if (this.inRange(thirdChild)) {
                    if (thirdChild.text == "]") {
                        return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, "]", this.rangeFromCursor());
                    }
                    return this.visit(thirdChild);
                }
                else if (this.inRange(ctx.getChild(1))) {
                    return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
                }
            }
            if (this.inRange(ctx.getChild(1))) {
                return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
            }
            return null;
        };
        this.binaryExpression = (ctx) => {
            let leftTree = ctx.getChild(0);
            if (this.inRange(leftTree)) {
                return this.visit(leftTree);
            }
            if (ctx.childCount > 2) {
                let rightTree = ctx.getChild(2);
                if (this.inRange(rightTree)) {
                    return this.visit(rightTree);
                }
            }
            return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
        };
        this.visitAdditiveExpression = this.binaryExpression;
        this.visitMultiplicativeExpression = this.binaryExpression;
        this.visitUnionExpression = this.binaryExpression;
        this.visitInequalityExpression = this.binaryExpression;
        this.visitEqualityExpression = this.binaryExpression;
        this.visitMembershipExpression = this.binaryExpression;
        this.visitAndExpression = this.binaryExpression;
        this.visitOrExpression = this.binaryExpression;
        this.visitImpliesExpression = this.visitImpliesExpression;
        this.visitTypeExpression = (ctx) => {
            let typeSpecifierTree = ctx.getChild(2);
            let typeSpecifier = this.visit(typeSpecifierTree);
            if (this.inRange(ctx)) {
                let expressionTree = ctx.getChild(0);
                if (this.inRange(expressionTree)) {
                    return this.visit(expressionTree);
                }
                if (ctx.childCount > 2) {
                    let operatorTree = ctx.getChild(1);
                    if (this.inRange(operatorTree)) {
                        return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, operatorTree.text, this.endRangeFromCtx(operatorTree));
                    }
                    return typeSpecifier;
                }
            }
            else if (this.inRange(typeSpecifierTree)) {
                if (typeSpecifier.type === FHIRTokenType.Empty) {
                    return new FHIRToken(FHIRTokenType.Type, "", this.rangeFromCursor());
                }
                else {
                    typeSpecifier.type = FHIRTokenType.Type;
                    return typeSpecifier;
                }
            }
            else {
                let operatorTree = ctx.getChild(1);
                if (operatorTree.text == 'is') {
                    this.schemaPath = [new FHIRToken(FHIRTokenType.Type, "Boolean", null)];
                }
                else if (operatorTree.text == 'as') {
                    this.schemaPath = [typeSpecifier];
                }
                // Block or not when 'as' has no type specifier
                //  else if (secondChild.text == 'as') {
                //     this.schemaPath = []
                // }
            }
            return null;
        };
        this.visitTypeSpecifier = (ctx) => {
            if (ctx.text.length === 0) {
                return new FHIRToken(FHIRTokenType.Empty, "", this.endRangeFromCtx(ctx));
            }
            else {
                return new FHIRToken(FHIRTokenType.Type, ctx.text, this.rangeFromCtx(ctx));
            }
        };
        this.visitParenthesizedTerm = (ctx) => {
            if (ctx.childCount > 2) {
                let innerExpression = ctx.getChild(1);
                if (this.inRange(innerExpression)) {
                    return this.visit(innerExpression);
                }
                else if (this.exact(ctx.getChild(2))) {
                    return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.rangeFromCursor());
                }
                else if (this.exact(ctx.getChild(0))) {
                    return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
                }
                this.processFHIRToken(this.visit(innerExpression));
            }
            else if (ctx.childCount > 1) {
                let secondChild = ctx.getChild(1);
                if (this.inRange(secondChild)) {
                    if (secondChild.text == ")") {
                        return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.rangeFromCursor());
                    }
                    return this.visit(secondChild);
                }
                else if (this.inRange(ctx.getChild(0))) {
                    return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
                }
                this.processFHIRToken(this.visit(secondChild));
            }
            if (this.inRange(ctx.getChild(0))) {
                return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
            }
            return null;
        };
        this.visitFunction = (ctx) => {
            let functionNameNodeTree = ctx.getChild(0);
            let functionName = this.visit(functionNameNodeTree);
            functionName.type = FHIRTokenType.FunctionIdentifier;
            if (this.inRange(functionNameNodeTree)) {
                return functionName;
            }
            let openParen = ctx.getChild(1);
            if (ctx.childCount > 3) {
                let expressionNode = ctx.getChild(2);
                let closeParen = ctx.getChild(3);
                if ((this.rightFrom(openParen) && this.leftFrom(closeParen)) || this.inRange(expressionNode)) {
                    this.scope.type = ScopeType.Function;
                    this.scope.token = functionName;
                    return this.visit(expressionNode);
                }
                else if (functionName.value === "select") {
                    let result = this.visit(expressionNode);
                    if (result !== null) {
                        this.schemaPath.push(result);
                    }
                }
                if (this.inRange(closeParen)) {
                    return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.endRangeFromCtx(closeParen));
                }
            }
            else if (ctx.childCount > 2) {
                let thirdChild = ctx.getChild(2);
                if (thirdChild.text === ")") {
                    let openParen = ctx.getChild(1);
                    if (this.inRange(openParen)) {
                        this.scope.type = ScopeType.Function;
                        this.scope.token = functionName;
                        return new FHIRToken(FHIRTokenType.Empty, "", this.endRangeFromCtx(openParen));
                    }
                    return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.endRangeFromCtx(thirdChild));
                }
                else if (this.inRange(thirdChild)) {
                    this.scope.type = ScopeType.Function;
                    this.scope.token = functionName;
                    return this.visit(thirdChild);
                }
            }
            else {
                if (this.inRange(openParen)) {
                    this.scope.type = ScopeType.Function;
                    this.scope.token = functionName;
                    return new FHIRToken(FHIRTokenType.Empty, "", this.endRangeFromCtx(openParen));
                }
            }
            return functionName;
        };
        this.visitStringLiteral = (ctx) => {
            return new FHIRToken(FHIRTokenType.Literal, ctx.text, this.rangeFromCtx(ctx));
        };
        this.visitLiteralTerm = (ctx) => {
            return new FHIRToken(FHIRTokenType.Literal, ctx.text, this.rangeFromCtx(ctx));
        };
        this.visitExternalConstantTerm = (ctx) => {
            let text = ctx.text;
            return new FHIRToken(FHIRTokenType.ExternalConstant, text.substring(1), this.rangeFromCtx(ctx));
        };
        this.visitParamList = (ctx) => {
            var _a;
            let child = ((_a = ctx.children) !== null && _a !== void 0 ? _a : []).find(c => {
                // console.log(this.rangeFromCtx(c))
                return this.inRange(c);
            });
            if (child) {
                return this.visit(child);
            }
            return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor());
        };
        this.visitIdentifier = (ctx) => {
            let identifier = ctx.text;
            let startSymbolIndex = 0;
            if (identifier.charCodeAt(startSymbolIndex) >= 'A'.charCodeAt(0) && identifier.charCodeAt(startSymbolIndex) <= 'Z'.charCodeAt(0)) {
                return new FHIRToken(FHIRTokenType.Type, identifier, this.rangeFromCtx(ctx));
            }
            return new FHIRToken(FHIRTokenType.Identifier, identifier, this.rangeFromCtx(ctx));
        };
        this.cursor = cursor;
        this.scope = new Scope(ScopeType.None, null);
        this.schemaPath = [];
    }
    visit(tree) {
        this.parentTree = tree;
        return super.visit(tree);
    }
    rangeFromRule(ctx) {
        if (ctx.stop !== undefined && ctx.stop !== null) {
            return new Range(new Position(ctx.start.line - 1, ctx.start.startIndex), new Position(ctx.stop.line - 1, ctx.stop.stopIndex + 1));
        }
        return null;
    }
    rangeFromNode(ctx) {
        let symbol = ctx.symbol;
        return new Range(new Position(symbol.line - 1, symbol.charPositionInLine), new Position(symbol.line - 1, symbol.charPositionInLine + (symbol.stopIndex - symbol.startIndex + 1)));
    }
    rangeFromCtx(root) {
        if (root instanceof TerminalNode) {
            return this.rangeFromNode(root);
        }
        return this.rangeFromRule(root);
    }
    endRangeFromRule(ctx) {
        if (ctx.stop !== undefined && ctx.stop !== null) {
            return new Range(new Position(ctx.start.line - 1, ctx.stop.stopIndex + 1), new Position(ctx.stop.line - 1, ctx.stop.stopIndex + 1));
        }
        return null;
    }
    endRangeFromNode(ctx) {
        let symbol = ctx.symbol;
        let end = symbol.charPositionInLine + (symbol.stopIndex - symbol.startIndex + 1);
        return new Range(new Position(symbol.line - 1, end), new Position(symbol.line - 1, end));
    }
    endRangeFromCtx(root) {
        if (root instanceof TerminalNode) {
            return this.endRangeFromNode(root);
        }
        return this.endRangeFromRule(root);
    }
    inRange(root) {
        if (root instanceof TerminalNode) {
            let terminal = root;
            let token = terminal.symbol;
            let tokenStop = token.charPositionInLine + (token.stopIndex - token.startIndex + 1);
            return token.charPositionInLine <= this.cursor && tokenStop >= this.cursor;
        }
        else {
            let context = root;
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }
            return (context.start.startIndex <= this.cursor && context.stop.stopIndex + 1 >= this.cursor) ||
                (context.stop.stopIndex + 1 <= this.cursor && context.start.startIndex >= this.cursor);
        }
    }
    leftFrom(root) {
        if (root instanceof TerminalNode) {
            let terminal = root;
            let token = terminal.symbol;
            return token.charPositionInLine >= this.cursor;
        }
        else {
            let context = root;
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }
            let start = Math.min(context.start.startIndex, context.stop.stopIndex + 1);
            return start >= this.cursor;
        }
    }
    rightFrom(root) {
        if (root instanceof TerminalNode) {
            let terminal = root;
            let token = terminal.symbol;
            let tokenStop = token.charPositionInLine + (token.stopIndex - token.startIndex + 1);
            return tokenStop <= this.cursor;
        }
        else {
            let context = root;
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }
            let stop = Math.max(context.start.startIndex, context.stop.stopIndex + 1);
            return stop <= this.cursor;
        }
    }
    exact(root) {
        if (root instanceof TerminalNode) {
            let terminal = root;
            let token = terminal.symbol;
            let tokenStop = token.charPositionInLine + (token.stopIndex - token.startIndex + 1);
            return token.charPositionInLine == this.cursor || tokenStop === this.cursor;
        }
        else {
            let context = root;
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }
            return context.start.startIndex === this.cursor ||
                context.stop.stopIndex + 1 === this.cursor;
        }
    }
    defaultResult() {
        let range;
        if (this.parentTree !== undefined && this.parentTree !== null) {
            range = this.endRangeFromCtx(this.parentTree);
        }
        if (range === null) {
            range = new Range(new Position(0, 0), new Position(0, 0));
        }
        return new FHIRToken(FHIRTokenType.Empty, "", range);
    }
    rangeFromCursor() {
        return new Range(new Position(0, this.cursor), new Position(0, this.cursor));
    }
    // visitChildren(node: RuleNode): FHIRToken {
    //     this.parentTree = node
    //     return super.visitChildren(node)
    // }
    processFHIRToken(token) {
        if (token !== null) {
            switch (token.type) {
                case FHIRTokenType.Identifier:
                    this.schemaPath.push(token);
                    break;
                case FHIRTokenType.Keyword:
                    this.schemaPath.push(token);
                    break;
                case FHIRTokenType.Type:
                    this.schemaPath = [token];
                    break;
                case FHIRTokenType.NonTriggeringCharacter:
                    break;
                default:
                    break;
            }
        }
    }
}
function prettyTree(tree, parser, depth = 0) {
    var _a, _b;
    if (tree instanceof TerminalNode) {
        return "'" + tree.text + "'";
    }
    else {
        let rule = tree;
        let ruleName = parser.ruleNames[rule.ruleIndex];
        let children = (_b = (_a = rule.children) === null || _a === void 0 ? void 0 : _a.map(child => prettyTree(child, parser, depth + 1))) !== null && _b !== void 0 ? _b : [];
        let childrenStr = children.join("\n" + (".".repeat(depth + 1)));
        return "(" + ruleName + "\n" + ".".repeat(depth + 1) + childrenStr + "\n" + (".".repeat(depth)) + ")";
    }
}
class Lexer extends FHIRPathLexer {
    emit(token) {
        switch (this.type) {
            case FHIRPathLexer.USTRING:
                this.type = FHIRPathLexer.STRING;
                let stringToken = super.emit();
                return stringToken;
            case FHIRPathLexer.UDELIMITEDIDENTIFIER:
                this.type = FHIRPathLexer.DELIMITEDIDENTIFIER;
                let delimitedIdentifierToken = super.emit();
                return delimitedIdentifierToken;
            case FHIRPathLexer.DATESTARTSYMBOL:
                this.type = FHIRPathLexer.DATETIME;
                let dateTime = super.emit();
                return dateTime;
            default:
                return super.emit();
        }
    }
}
export function reduce(fhirpath, cursor) {
    let inputStream = CharStreams.fromString(fhirpath);
    let lexer = new Lexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new FHIRPathParser(tokenStream);
    let visitor = new FHIRPathAutocompleteVisitor(cursor);
    let tree = parser.expression();
    let visitResult = visitor.visit(tree);
    // console.log(prettyTree(tree, parser))
    return new AutocompleteContext({
        token: visitResult,
        schemaPath: visitor.schemaPath,
        scope: visitor.scope
    });
}
//# sourceMappingURL=treeReducer.js.map