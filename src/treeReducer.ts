import { CharStreams, CommonTokenStream, ParserRuleContext, RuleContext, Token } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ParseTree, TerminalNode } from 'antlr4ts/tree'
import { FHIRPathLexer } from './generated/FHIRPathLexer';
import { AdditiveExpressionContext, AndExpressionContext, EqualityExpressionContext, ExternalConstantTermContext, FHIRPathParser, FunctionContext, IdentifierContext, ImpliesExpressionContext, IndexInvocationContext, IndexerExpressionContext, InequalityExpressionContext, InvocationExpressionContext, LiteralTermContext, MembershipExpressionContext, MultiplicativeExpressionContext, OrExpressionContext, ParamListContext, ParenthesizedTermContext, StringLiteralContext, TermContext, ThisInvocationContext, TotalInvocationContext, TypeExpressionContext, TypeSpecifierContext, UnionExpressionContext } from './generated/FHIRPathParser';
import { FHIRPathVisitor } from './generated/FHIRPathVisitor';

export enum ScopeType {
    None,
    ForEach,
    Function,
    Invocation,
    Literal
}

export class Scope {
    type: ScopeType
    token: FHIRToken

    constructor(type: ScopeType, token: FHIRToken | null) {
        this.type = type
        this.token = token
    }
}

export enum FHIRTokenType {
    Empty,
    Identifier,
    FunctionIdentifier,
    Keyword,
    Type,
    Literal,
    ExternalConstant,
    NonTriggeringCharacter
}

export class Position {
    line: number
    character: number

    constructor(line: number, character: number) {
        this.line = line
        this.character = character
    }
}

export class Range {
    start: Position
    end: Position

    constructor(start: Position, end: Position) {
        this.start = start
        this.end = end
    }
}

export class FHIRToken {
    type: FHIRTokenType
    value: string
    range: Range | null

    constructor(type: FHIRTokenType, value: string | null, range: Range | null = null) {
        this.type = type
        this.value = value
        this.range = range
    }
}


export class AutocompleteContext {
    public schemaPath: Array<FHIRToken>
    public token: FHIRToken | null
    public scope: Scope;

    constructor(params: Partial<AutocompleteContext>) {
        this.schemaPath = []
        this.scope = undefined
        Object.assign(this, params)
    }
}


class FHIRPathAutocompleteVisitor extends AbstractParseTreeVisitor<FHIRToken | null> implements FHIRPathVisitor<FHIRToken> {

    cursor: number

    scope: Scope
    schemaPath: Array<FHIRToken>

    parentTree: ParseTree

    constructor(cursor: number) {
        super()
        this.cursor = cursor
        this.scope = new Scope(ScopeType.None, null)
        this.schemaPath = []
    }

    visit(tree: ParseTree): FHIRToken {
        this.parentTree = tree
        return super.visit(tree)
    }

    rangeFromRule(ctx: ParserRuleContext): Range {
        if (ctx.stop !== undefined && ctx.stop !== null) {
            return new Range(
                new Position(ctx.start.line - 1, ctx.start.startIndex),
                new Position(ctx.stop.line - 1, ctx.stop.stopIndex + 1),
            )
        }
        return null
    }

    rangeFromNode(ctx: TerminalNode): Range {
        let symbol = ctx.symbol
        return new Range(
            new Position(symbol.line - 1, symbol.charPositionInLine),
            new Position(symbol.line - 1, symbol.charPositionInLine + (symbol.stopIndex - symbol.startIndex + 1)),
        )
    }

    rangeFromCtx(root: ParseTree): Range {
        if (root instanceof TerminalNode) {
            return this.rangeFromNode(root)
        }
        return this.rangeFromRule(root as ParserRuleContext)
    }

    endRangeFromRule(ctx: ParserRuleContext): Range {
        if (ctx.stop !== undefined && ctx.stop !== null) {
            return new Range(
                new Position(ctx.start.line - 1, ctx.stop.stopIndex + 1),
                new Position(ctx.stop.line - 1, ctx.stop.stopIndex + 1),
            )
        }
        return null
    }

    endRangeFromNode(ctx: TerminalNode): Range {
        let symbol = ctx.symbol
        let end = symbol.charPositionInLine + (symbol.stopIndex - symbol.startIndex + 1)
        return new Range(
            new Position(symbol.line - 1, end),
            new Position(symbol.line - 1, end),
        )
    }

    endRangeFromCtx(root: ParseTree): Range {
        if (root instanceof TerminalNode) {
            return this.endRangeFromNode(root)
        }
        return this.endRangeFromRule(root as ParserRuleContext)
    }

    inRange(root: ParseTree): boolean | undefined {
        if (root instanceof TerminalNode) {
            let terminal = (root as TerminalNode);
            let token = terminal.symbol;

            let tokenStop = token.charPositionInLine + (token.stopIndex - token.startIndex + 1);

            return token.charPositionInLine <= this.cursor && tokenStop >= this.cursor;
        } else {
            let context = (root as ParserRuleContext);
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }

            return (context.start.startIndex <= this.cursor && context.stop.stopIndex + 1 >= this.cursor) ||
                (context.stop.stopIndex + 1 <= this.cursor && context.start.startIndex >= this.cursor);
        }
    }

    leftFrom(root: ParseTree): boolean | undefined {
        if (root instanceof TerminalNode) {
            let terminal = (root as TerminalNode);
            let token = terminal.symbol;

            return token.charPositionInLine >= this.cursor;
        } else {
            let context = (root as ParserRuleContext);
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }

            let start = Math.min(context.start.startIndex, context.stop.stopIndex + 1)

            return start >= this.cursor;
        }
    }

    rightFrom(root: ParseTree): boolean | undefined {
        if (root instanceof TerminalNode) {
            let terminal = (root as TerminalNode);
            let token = terminal.symbol;

            let tokenStop = token.charPositionInLine + (token.stopIndex - token.startIndex + 1);

            return tokenStop <= this.cursor;
        } else {
            let context = (root as ParserRuleContext);
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }

            let stop = Math.max(context.start.startIndex, context.stop.stopIndex + 1)

            return stop <= this.cursor;
        }
    }

    exact(root: ParseTree): boolean | undefined {
        if (root instanceof TerminalNode) {
            let terminal = (root as TerminalNode);
            let token = terminal.symbol;

            let tokenStop = token.charPositionInLine + (token.stopIndex - token.startIndex + 1);

            return token.charPositionInLine == this.cursor || tokenStop === this.cursor;
        } else {
            let context = (root as ParserRuleContext);
            if (!context.start || !context.stop) { // Invalid tree?
                return undefined;
            }

            return context.start.startIndex === this.cursor ||
                context.stop.stopIndex + 1 === this.cursor;
        }
    }

    defaultResult() {
        let range: Range
        if (this.parentTree !== undefined && this.parentTree !== null) {
            range = this.endRangeFromCtx(this.parentTree)
        }
        if (range === null) {
            range = new Range(
                new Position(0, 0),
                new Position(0, 0)
            )
        }
        return new FHIRToken(FHIRTokenType.Empty, "", range);
    }

    rangeFromCursor(): Range {
        return new Range(new Position(0, this.cursor), new Position(0, this.cursor))
    }

    // visitChildren(node: RuleNode): FHIRToken {
    //     this.parentTree = node
    //     return super.visitChildren(node)
    // }

    processFHIRToken(token: FHIRToken | null) {
        if (token !== null) {
            switch (token.type) {
                case FHIRTokenType.Identifier:
                    this.schemaPath.push(token)
                    break
                case FHIRTokenType.Keyword:
                    this.schemaPath.push(token)
                    break
                case FHIRTokenType.Type:
                    this.schemaPath = [token]
                    break
                case FHIRTokenType.NonTriggeringCharacter:
                    break
                default:
                    break
            }
        }
    }

    visitThisInvocation?: (ctx: ThisInvocationContext) => FHIRToken = (ctx: ThisInvocationContext) => {
        return new FHIRToken(FHIRTokenType.Keyword, ctx.text, this.rangeFromRule(ctx))
    }

    visitIndexInvocation?: (ctx: IndexInvocationContext) => FHIRToken = (ctx: IndexInvocationContext) => {
        return new FHIRToken(FHIRTokenType.Keyword, ctx.text, this.rangeFromRule(ctx))
    }

    visitTotalInvocation?: (ctx: TotalInvocationContext) => FHIRToken = (ctx: TotalInvocationContext) => {
        return new FHIRToken(FHIRTokenType.Keyword, ctx.text, this.rangeFromRule(ctx))
    }

    visitInvocationExpression?: (ctx: InvocationExpressionContext) => FHIRToken | null = (ctx: InvocationExpressionContext) => {
        // console.log(ctx.text)
        let leftNode = ctx.getChild(0)
        let left = this.visit(leftNode)
        if (this.inRange(leftNode)) {
            return left;
        }
        if (left != null) {
            this.processFHIRToken(left)
        }
        let rightNode = ctx.getChild(2)
        if (this.inRange(rightNode)) {
            this.scope.type = ScopeType.Invocation
            if (left !== null && left !== undefined) {
                this.scope.token = left
            } else if (this.schemaPath.length > 0) {
                this.scope.token = this.schemaPath[this.schemaPath.length - 1]
            } else {
                this.scope.token = new FHIRToken(FHIRTokenType.Empty, "")
            }
        }
        return this.visit(rightNode)
    }

    visitIndexerExpression?: (ctx: IndexerExpressionContext) => FHIRToken | null = (ctx: IndexerExpressionContext) => {
        let expressionTree = ctx.getChild(0)
        let expressionResult = this.visit(expressionTree)
        if (this.inRange(expressionTree)) {
            return expressionResult
        }
        this.processFHIRToken(expressionResult)
        if (ctx.childCount > 3) {
            if (this.inRange(ctx.getChild(2))) {
                return this.visit(ctx.getChild(2))
            } else if (this.inRange(ctx.getChild(3))) {
                return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, "]", this.rangeFromCursor())
            } else if (this.inRange(ctx.getChild(1))) {
                return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
            }
        } else if (ctx.childCount > 2) {
            // Can be a closed paren or expression
            let thirdChild = ctx.getChild(2)
            if (this.inRange(thirdChild)) {
                if (thirdChild.text == "]") {
                    return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, "]", this.rangeFromCursor())
                }
                return this.visit(thirdChild)
            } else if (this.inRange(ctx.getChild(1))) {
                return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
            }
        }
        if (this.inRange(ctx.getChild(1))) {
            return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
        }
        return null
    }

    binaryExpression: (ctx: RuleContext) => FHIRToken | null = (ctx: RuleContext) => {
        let leftTree = ctx.getChild(0)
        if (this.inRange(leftTree)) {
            return this.visit(leftTree)
        }
        if (ctx.childCount > 2) {
            let rightTree = ctx.getChild(2)
            if (this.inRange(rightTree)) {
                return this.visit(rightTree)
            }
        }
        return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
    }

    visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => FHIRToken | null = this.binaryExpression
    visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => FHIRToken | null = this.binaryExpression
    visitUnionExpression?: (ctx: UnionExpressionContext) => FHIRToken | null = this.binaryExpression
    visitInequalityExpression?: (ctx: InequalityExpressionContext) => FHIRToken | null = this.binaryExpression
    visitEqualityExpression?: (ctx: EqualityExpressionContext) => FHIRToken | null = this.binaryExpression
    visitMembershipExpression?: (ctx: MembershipExpressionContext) => FHIRToken | null = this.binaryExpression
    visitAndExpression?: (ctx: AndExpressionContext) => FHIRToken | null = this.binaryExpression
    visitOrExpression?: (ctx: OrExpressionContext) => FHIRToken | null = this.binaryExpression
    visitImpliesExpression?: (ctx: ImpliesExpressionContext) => FHIRToken | null = this.visitImpliesExpression

    visitTypeExpression?: (ctx: TypeExpressionContext) => FHIRToken | null = (ctx: TypeExpressionContext) => {
        let typeSpecifierTree = ctx.getChild(2) as ParserRuleContext
        let typeSpecifier = this.visit(typeSpecifierTree)
        console.log("inneras")
        if (this.inRange(ctx)) {
            console.log("innerasas")
            let expressionTree = ctx.getChild(0) as ParserRuleContext
            if (this.inRange(expressionTree)) {
                return this.visit(expressionTree)
            }
            if (ctx.childCount > 2) {
                let operatorTree = ctx.getChild(1)
                if (this.inRange(operatorTree)) {
                    return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, operatorTree.text, this.endRangeFromCtx(operatorTree))
                }
                return typeSpecifier
            }
        } else if (this.inRange(typeSpecifierTree)) {
            console.log("innerin")
            typeSpecifier.type = FHIRTokenType.Type
            return typeSpecifier
        } else {
            console.log("innerelse")
            let operatorTree = ctx.getChild(1)
            if (operatorTree.text == 'is') {
                this.schemaPath = [new FHIRToken(FHIRTokenType.Type, "Boolean", null)]
            } else if (operatorTree.text == 'as') {
                this.schemaPath = [typeSpecifier]
            }
            // Block or not when 'as' has no type specifier
            //  else if (secondChild.text == 'as') {
            //     this.schemaPath = []
            // }
        }
        return null

    }

    visitTypeSpecifier?: (ctx: TypeSpecifierContext) => FHIRToken | null = (ctx: TypeSpecifierContext) => {
        if (ctx.text.length === 0) {
            return new FHIRToken(FHIRTokenType.Empty, "", this.endRangeFromCtx(ctx))
        } else {
            return new FHIRToken(FHIRTokenType.Type, ctx.text, this.rangeFromCtx(ctx))
        }
    }

    visitParenthesizedTerm?: (ctx: ParenthesizedTermContext) => FHIRToken | null = (ctx: ParenthesizedTermContext) => {
        if (ctx.childCount > 2) {
            let innerExpression = ctx.getChild(1)
            if (this.inRange(innerExpression)) {
                return this.visit(innerExpression)
            } else if (this.exact(ctx.getChild(2))) {
                return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.rangeFromCursor())
            } else if (this.exact(ctx.getChild(0))) {
                return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
            }
            this.processFHIRToken(this.visit(innerExpression))
        } else if (ctx.childCount > 1) {
            let secondChild = ctx.getChild(1)
            if (this.inRange(secondChild)) {
                if (secondChild.text == ")") {
                    return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.rangeFromCursor())
                }
                return this.visit(secondChild)
            } else if (this.inRange(ctx.getChild(0))) {
                return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
            }
            this.processFHIRToken(this.visit(secondChild))
        }
        if (this.inRange(ctx.getChild(0))) {
            return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
        }
        return null
    }

    visitFunction?: (ctx: FunctionContext) => FHIRToken | null = (ctx: FunctionContext) => {
        let functionNameNodeTree = ctx.getChild(0)
        let functionName = this.visit(functionNameNodeTree)
        functionName.type = FHIRTokenType.FunctionIdentifier
        if (this.inRange(functionNameNodeTree)) {
            return functionName
        }
        let openParen = ctx.getChild(1)
        if (ctx.childCount > 3) {
            let expressionNode = ctx.getChild(2)
            let closeParen = ctx.getChild(3)
            if ((this.rightFrom(openParen) && this.leftFrom(closeParen)) || this.inRange(expressionNode)) {
                this.scope.type = ScopeType.Function
                this.scope.token = functionName
                return this.visit(expressionNode)
            } else if (functionName.value === "select") {
                let result = this.visit(expressionNode)
                if (result !== null) {
                    this.schemaPath.push(result)
                }
            }
            if (this.inRange(closeParen)) {
                return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.endRangeFromCtx(closeParen))
            }
        } else if (ctx.childCount > 2) {
            let thirdChild = ctx.getChild(2)
            if (thirdChild.text === ")") {
                let openParen = ctx.getChild(1)
                if (this.inRange(openParen)) {
                    this.scope.type = ScopeType.Function
                    this.scope.token = functionName
                    return new FHIRToken(FHIRTokenType.Empty, "", this.endRangeFromCtx(openParen))
                }
                return new FHIRToken(FHIRTokenType.NonTriggeringCharacter, ")", this.endRangeFromCtx(thirdChild))
            } else if (this.inRange(thirdChild)) {
                this.scope.type = ScopeType.Function
                this.scope.token = functionName
                return this.visit(thirdChild)
            }
        } else {
            if (this.inRange(openParen)) {
                this.scope.type = ScopeType.Function
                this.scope.token = functionName
                return new FHIRToken(FHIRTokenType.Empty, "", this.endRangeFromCtx(openParen))
            }
        }
        return functionName
    }

    visitStringLiteral?: (ctx: StringLiteralContext) => FHIRToken = (ctx: StringLiteralContext) => {
        return new FHIRToken(FHIRTokenType.Literal, ctx.text, this.rangeFromCtx(ctx))
    }

    visitLiteralTerm?: (ctx: LiteralTermContext) => FHIRToken | null = (ctx: LiteralTermContext) => {
        return new FHIRToken(FHIRTokenType.Literal, ctx.text, this.rangeFromCtx(ctx))
    }

    visitExternalConstantTerm?: (ctx: ExternalConstantTermContext) => FHIRToken = (ctx: ExternalConstantTermContext) => {
        let text = ctx.text
        return new FHIRToken(FHIRTokenType.ExternalConstant, text.substring(1), this.rangeFromCtx(ctx))
    }

    visitParamList?: (ctx: ParamListContext) => FHIRToken | null = (ctx: ParamListContext) => {
        let child = (ctx.children ?? []).find(c => {
            // console.log(this.rangeFromCtx(c))
            return this.inRange(c)
        })
        if (child) {
            return this.visit(child)
        }
        return new FHIRToken(FHIRTokenType.Empty, "", this.rangeFromCursor())
    }

    visitIdentifier?: (ctx: IdentifierContext) => FHIRToken | null = (ctx: IdentifierContext) => {
        let identifier = ctx.text
        let startSymbolIndex = 0
        if (identifier.charCodeAt(startSymbolIndex) >= 'A'.charCodeAt(0) && identifier.charCodeAt(startSymbolIndex) <= 'Z'.charCodeAt(0)) {
            return new FHIRToken(FHIRTokenType.Type, identifier, this.rangeFromCtx(ctx))
        }
        return new FHIRToken(FHIRTokenType.Identifier, identifier, this.rangeFromCtx(ctx))
    }
}

function prettyTree(tree: ParseTree, parser: FHIRPathParser, depth: number = 0): string {
    if (tree instanceof TerminalNode) {
        return "'" + tree.text + "'"
    } else {
        let rule = (tree as ParserRuleContext)
        let ruleName = parser.ruleNames[rule.ruleIndex]
        let children = rule.children?.map(child => prettyTree(child, parser, depth + 1)) ?? []
        let childrenStr = children.join("\n" + (".".repeat(depth + 1)))
        return "(" + ruleName + "\n" + ".".repeat(depth + 1) + childrenStr + "\n" + (".".repeat(depth)) + ")"
    }
}

class Lexer extends FHIRPathLexer {
    emit(token?: unknown): Token {
        switch (this.type) {
            case FHIRPathLexer.USTRING:
                this.type = FHIRPathLexer.STRING
                let stringToken = super.emit()
                return stringToken
            case FHIRPathLexer.UDELIMITEDIDENTIFIER:
                this.type = FHIRPathLexer.DELIMITEDIDENTIFIER
                let delimitedIdentifierToken = super.emit()
                return delimitedIdentifierToken
            case FHIRPathLexer.DATESTARTSYMBOL:
                this.type = FHIRPathLexer.DATETIME
                let dateTime = super.emit()
                return dateTime
            default:
                return super.emit()
        }
    }
}

export function reduce(fhirpath: string, cursor: number): AutocompleteContext {
    let inputStream = CharStreams.fromString(fhirpath);
    let lexer = new Lexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new FHIRPathParser(tokenStream);
    let visitor = new FHIRPathAutocompleteVisitor(cursor);
    let tree = parser.expression();
    let visitResult = visitor.visit(tree)
    // console.log(prettyTree(tree, parser))
    return new AutocompleteContext({
        token: visitResult,
        schemaPath: visitor.schemaPath,
        scope: visitor.scope
    });
}
