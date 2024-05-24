// Generated from ./grammar/FHIRPath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TermExpressionContext } from "./FHIRPathParser";
import { InvocationExpressionContext } from "./FHIRPathParser";
import { IndexerExpressionContext } from "./FHIRPathParser";
import { PolarityExpressionContext } from "./FHIRPathParser";
import { MultiplicativeExpressionContext } from "./FHIRPathParser";
import { AdditiveExpressionContext } from "./FHIRPathParser";
import { TypeExpressionContext } from "./FHIRPathParser";
import { UnionExpressionContext } from "./FHIRPathParser";
import { InequalityExpressionContext } from "./FHIRPathParser";
import { EqualityExpressionContext } from "./FHIRPathParser";
import { MembershipExpressionContext } from "./FHIRPathParser";
import { AndExpressionContext } from "./FHIRPathParser";
import { OrExpressionContext } from "./FHIRPathParser";
import { ImpliesExpressionContext } from "./FHIRPathParser";
import { NullLiteralContext } from "./FHIRPathParser";
import { BooleanLiteralContext } from "./FHIRPathParser";
import { StringLiteralContext } from "./FHIRPathParser";
import { UstringLiteralContext } from "./FHIRPathParser";
import { NumberLiteralContext } from "./FHIRPathParser";
import { DateTimeLiteralContext } from "./FHIRPathParser";
import { TimeLiteralContext } from "./FHIRPathParser";
import { DateStartSymbolLiteralContext } from "./FHIRPathParser";
import { QuantityLiteralContext } from "./FHIRPathParser";
import { MemberInvocationContext } from "./FHIRPathParser";
import { FunctionInvocationContext } from "./FHIRPathParser";
import { ThisInvocationContext } from "./FHIRPathParser";
import { IndexInvocationContext } from "./FHIRPathParser";
import { TotalInvocationContext } from "./FHIRPathParser";
import { KeywordInvocationContext } from "./FHIRPathParser";
import { InvocationTermContext } from "./FHIRPathParser";
import { LiteralTermContext } from "./FHIRPathParser";
import { ExternalConstantTermContext } from "./FHIRPathParser";
import { ParenthesizedTermContext } from "./FHIRPathParser";
import { ExpressionContext } from "./FHIRPathParser";
import { TermContext } from "./FHIRPathParser";
import { LiteralContext } from "./FHIRPathParser";
import { ExternalConstantContext } from "./FHIRPathParser";
import { InvocationContext } from "./FHIRPathParser";
import { KeywordContext } from "./FHIRPathParser";
import { ThisKeywordContext } from "./FHIRPathParser";
import { IndexKeywordContext } from "./FHIRPathParser";
import { TotalKeywordContext } from "./FHIRPathParser";
import { FunctionContext } from "./FHIRPathParser";
import { ParamListContext } from "./FHIRPathParser";
import { QuantityContext } from "./FHIRPathParser";
import { UnitContext } from "./FHIRPathParser";
import { DateTimePrecisionContext } from "./FHIRPathParser";
import { PluralDateTimePrecisionContext } from "./FHIRPathParser";
import { TypeSpecifierContext } from "./FHIRPathParser";
import { QualifiedIdentifierContext } from "./FHIRPathParser";
import { IdentifierContext } from "./FHIRPathParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FHIRPathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FHIRPathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `termExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermExpression?: (ctx: TermExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `invocationExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationExpression?: (ctx: InvocationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `indexerExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexerExpression?: (ctx: IndexerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `polarityExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolarityExpression?: (ctx: PolarityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExpression?: (ctx: TypeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `unionExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionExpression?: (ctx: UnionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inequalityExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInequalityExpression?: (ctx: InequalityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `membershipExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMembershipExpression?: (ctx: MembershipExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `impliesExpression`
	 * labeled alternative in `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpliesExpression?: (ctx: ImpliesExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `ustringLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUstringLiteral?: (ctx: UstringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `dateTimeLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeLiteral?: (ctx: DateTimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeLiteral?: (ctx: TimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `dateStartSymbolLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateStartSymbolLiteral?: (ctx: DateStartSymbolLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantityLiteral`
	 * labeled alternative in `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantityLiteral?: (ctx: QuantityLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `memberInvocation`
	 * labeled alternative in `FHIRPathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberInvocation?: (ctx: MemberInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionInvocation`
	 * labeled alternative in `FHIRPathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionInvocation?: (ctx: FunctionInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisInvocation`
	 * labeled alternative in `FHIRPathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisInvocation?: (ctx: ThisInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `indexInvocation`
	 * labeled alternative in `FHIRPathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexInvocation?: (ctx: IndexInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `totalInvocation`
	 * labeled alternative in `FHIRPathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTotalInvocation?: (ctx: TotalInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `keywordInvocation`
	 * labeled alternative in `FHIRPathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordInvocation?: (ctx: KeywordInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `invocationTerm`
	 * labeled alternative in `FHIRPathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationTerm?: (ctx: InvocationTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalTerm`
	 * labeled alternative in `FHIRPathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralTerm?: (ctx: LiteralTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `externalConstantTerm`
	 * labeled alternative in `FHIRPathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalConstantTerm?: (ctx: ExternalConstantTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedTerm`
	 * labeled alternative in `FHIRPathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedTerm?: (ctx: ParenthesizedTermContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.externalConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalConstant?: (ctx: ExternalConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocation?: (ctx: InvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.thisKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisKeyword?: (ctx: ThisKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.indexKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexKeyword?: (ctx: IndexKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.totalKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTotalKeyword?: (ctx: TotalKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.quantity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity?: (ctx: QuantityContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.dateTimePrecision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimePrecision?: (ctx: DateTimePrecisionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.pluralDateTimePrecision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPluralDateTimePrecision?: (ctx: PluralDateTimePrecisionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRPathParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

