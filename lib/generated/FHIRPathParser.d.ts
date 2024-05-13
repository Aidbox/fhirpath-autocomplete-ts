import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { FHIRPathListener } from "./FHIRPathListener";
import { FHIRPathVisitor } from "./FHIRPathVisitor";
export declare class FHIRPathParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly T__9 = 10;
    static readonly T__10 = 11;
    static readonly T__11 = 12;
    static readonly T__12 = 13;
    static readonly T__13 = 14;
    static readonly T__14 = 15;
    static readonly T__15 = 16;
    static readonly T__16 = 17;
    static readonly T__17 = 18;
    static readonly T__18 = 19;
    static readonly T__19 = 20;
    static readonly T__20 = 21;
    static readonly T__21 = 22;
    static readonly T__22 = 23;
    static readonly T__23 = 24;
    static readonly T__24 = 25;
    static readonly T__25 = 26;
    static readonly T__26 = 27;
    static readonly T__27 = 28;
    static readonly T__28 = 29;
    static readonly T__29 = 30;
    static readonly T__30 = 31;
    static readonly T__31 = 32;
    static readonly T__32 = 33;
    static readonly T__33 = 34;
    static readonly T__34 = 35;
    static readonly T__35 = 36;
    static readonly T__36 = 37;
    static readonly T__37 = 38;
    static readonly T__38 = 39;
    static readonly T__39 = 40;
    static readonly T__40 = 41;
    static readonly T__41 = 42;
    static readonly T__42 = 43;
    static readonly T__43 = 44;
    static readonly T__44 = 45;
    static readonly T__45 = 46;
    static readonly T__46 = 47;
    static readonly T__47 = 48;
    static readonly T__48 = 49;
    static readonly T__49 = 50;
    static readonly T__50 = 51;
    static readonly T__51 = 52;
    static readonly T__52 = 53;
    static readonly T__53 = 54;
    static readonly DATETIME = 55;
    static readonly TIME = 56;
    static readonly IDENTIFIER = 57;
    static readonly DELIMITEDIDENTIFIER = 58;
    static readonly STRING = 59;
    static readonly NUMBER = 60;
    static readonly WS = 61;
    static readonly COMMENT = 62;
    static readonly LINE_COMMENT = 63;
    static readonly RULE_expression = 0;
    static readonly RULE_term = 1;
    static readonly RULE_literal = 2;
    static readonly RULE_externalConstant = 3;
    static readonly RULE_invocation = 4;
    static readonly RULE_function = 5;
    static readonly RULE_paramList = 6;
    static readonly RULE_quantity = 7;
    static readonly RULE_unit = 8;
    static readonly RULE_dateTimePrecision = 9;
    static readonly RULE_pluralDateTimePrecision = 10;
    static readonly RULE_typeSpecifier = 11;
    static readonly RULE_qualifiedIdentifier = 12;
    static readonly RULE_identifier = 13;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    term(): TermContext;
    literal(): LiteralContext;
    externalConstant(): ExternalConstantContext;
    invocation(): InvocationContext;
    function(): FunctionContext;
    paramList(): ParamListContext;
    quantity(): QuantityContext;
    unit(): UnitContext;
    dateTimePrecision(): DateTimePrecisionContext;
    pluralDateTimePrecision(): PluralDateTimePrecisionContext;
    typeSpecifier(): TypeSpecifierContext;
    qualifiedIdentifier(): QualifiedIdentifierContext;
    identifier(): IdentifierContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class TermExpressionContext extends ExpressionContext {
    term(): TermContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class InvocationExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    invocation(): InvocationContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class IndexerExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class PolarityExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class MultiplicativeExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class AdditiveExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class TypeExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    typeSpecifier(): TypeSpecifierContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class UnionExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class InequalityExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class EqualityExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class MembershipExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class AndExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class OrExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class ImpliesExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class TermContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TermContext): void;
}
export declare class InvocationTermContext extends TermContext {
    invocation(): InvocationContext;
    constructor(ctx: TermContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class LiteralTermContext extends TermContext {
    literal(): LiteralContext;
    constructor(ctx: TermContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class ExternalConstantTermContext extends TermContext {
    externalConstant(): ExternalConstantContext;
    constructor(ctx: TermContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class ParenthesizedTermContext extends TermContext {
    expression(): ExpressionContext;
    constructor(ctx: TermContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: LiteralContext): void;
}
export declare class NullLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class BooleanLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class StringLiteralContext extends LiteralContext {
    STRING(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class NumberLiteralContext extends LiteralContext {
    NUMBER(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class DateTimeLiteralContext extends LiteralContext {
    DATETIME(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class TimeLiteralContext extends LiteralContext {
    TIME(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class QuantityLiteralContext extends LiteralContext {
    quantity(): QuantityContext;
    constructor(ctx: LiteralContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class ExternalConstantContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class InvocationContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: InvocationContext): void;
}
export declare class MemberInvocationContext extends InvocationContext {
    identifier(): IdentifierContext;
    constructor(ctx: InvocationContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class FunctionInvocationContext extends InvocationContext {
    function(): FunctionContext;
    constructor(ctx: InvocationContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class ThisInvocationContext extends InvocationContext {
    constructor(ctx: InvocationContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class IndexInvocationContext extends InvocationContext {
    constructor(ctx: InvocationContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class TotalInvocationContext extends InvocationContext {
    constructor(ctx: InvocationContext);
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class FunctionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    paramList(): ParamListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class ParamListContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class QuantityContext extends ParserRuleContext {
    NUMBER(): TerminalNode;
    unit(): UnitContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class UnitContext extends ParserRuleContext {
    dateTimePrecision(): DateTimePrecisionContext | undefined;
    pluralDateTimePrecision(): PluralDateTimePrecisionContext | undefined;
    STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class DateTimePrecisionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class PluralDateTimePrecisionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class TypeSpecifierContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class QualifiedIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
export declare class IdentifierContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    DELIMITEDIDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FHIRPathListener): void;
    exitRule(listener: FHIRPathListener): void;
    accept<Result>(visitor: FHIRPathVisitor<Result>): Result;
}
//# sourceMappingURL=FHIRPathParser.d.ts.map