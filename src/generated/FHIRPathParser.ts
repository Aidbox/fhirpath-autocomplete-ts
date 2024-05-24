// Generated from ./grammar/FHIRPath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FHIRPathListener } from "./FHIRPathListener";
import { FHIRPathVisitor } from "./FHIRPathVisitor";


export class FHIRPathParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly DATETIME = 66;
	public static readonly TIME = 67;
	public static readonly DATESTARTSYMBOL = 68;
	public static readonly IDENTIFIER = 69;
	public static readonly DELIMITEDIDENTIFIER = 70;
	public static readonly UDELIMITEDIDENTIFIER = 71;
	public static readonly STRING = 72;
	public static readonly USTRING = 73;
	public static readonly NUMBER = 74;
	public static readonly WS = 75;
	public static readonly COMMENT = 76;
	public static readonly LINE_COMMENT = 77;
	public static readonly RULE_expression = 0;
	public static readonly RULE_term = 1;
	public static readonly RULE_literal = 2;
	public static readonly RULE_externalConstant = 3;
	public static readonly RULE_invocation = 4;
	public static readonly RULE_keyword = 5;
	public static readonly RULE_thisKeyword = 6;
	public static readonly RULE_indexKeyword = 7;
	public static readonly RULE_totalKeyword = 8;
	public static readonly RULE_function = 9;
	public static readonly RULE_paramList = 10;
	public static readonly RULE_quantity = 11;
	public static readonly RULE_unit = 12;
	public static readonly RULE_dateTimePrecision = 13;
	public static readonly RULE_pluralDateTimePrecision = 14;
	public static readonly RULE_typeSpecifier = 15;
	public static readonly RULE_qualifiedIdentifier = 16;
	public static readonly RULE_identifier = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "term", "literal", "externalConstant", "invocation", "keyword", 
		"thisKeyword", "indexKeyword", "totalKeyword", "function", "paramList", 
		"quantity", "unit", "dateTimePrecision", "pluralDateTimePrecision", "typeSpecifier", 
		"qualifiedIdentifier", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'['", "']'", "'+'", "'-'", "'*'", "'/'", "'div'", "'mod'", 
		"'&'", "'is'", "'as'", "'|'", "'<='", "'<'", "'>'", "'>='", "'='", "'~'", 
		"'!='", "'!~'", "'in'", "'contains'", "'and'", "'or'", "'xor'", "'implies'", 
		"'('", "')'", "'{'", "'}'", "'true'", "'false'", "'%'", "'$'", "'$t'", 
		"'$th'", "'$thi'", "'$this'", "'$i'", "'$in'", "'$ind'", "'$inde'", "'$index'", 
		"'$to'", "'$tot'", "'$tota'", "'$total'", "','", "'year'", "'month'", 
		"'week'", "'day'", "'hour'", "'minute'", "'second'", "'millisecond'", 
		"'years'", "'months'", "'weeks'", "'days'", "'hours'", "'minutes'", "'seconds'", 
		"'milliseconds'", undefined, undefined, "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "DATETIME", "TIME", "DATESTARTSYMBOL", 
		"IDENTIFIER", "DELIMITEDIDENTIFIER", "UDELIMITEDIDENTIFIER", "STRING", 
		"USTRING", "NUMBER", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FHIRPathParser._LITERAL_NAMES, FHIRPathParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FHIRPathParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FHIRPath.g4"; }

	// @Override
	public get ruleNames(): string[] { return FHIRPathParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FHIRPathParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FHIRPathParser._ATN, this);
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 0;
		this.enterRecursionRule(_localctx, 0, FHIRPathParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FHIRPathParser.T__10:
			case FHIRPathParser.T__11:
			case FHIRPathParser.T__21:
			case FHIRPathParser.T__22:
			case FHIRPathParser.T__27:
			case FHIRPathParser.T__29:
			case FHIRPathParser.T__31:
			case FHIRPathParser.T__32:
			case FHIRPathParser.T__33:
			case FHIRPathParser.T__34:
			case FHIRPathParser.T__35:
			case FHIRPathParser.T__36:
			case FHIRPathParser.T__37:
			case FHIRPathParser.T__38:
			case FHIRPathParser.T__39:
			case FHIRPathParser.T__40:
			case FHIRPathParser.T__41:
			case FHIRPathParser.T__42:
			case FHIRPathParser.T__43:
			case FHIRPathParser.T__44:
			case FHIRPathParser.T__45:
			case FHIRPathParser.T__46:
			case FHIRPathParser.T__47:
			case FHIRPathParser.DATETIME:
			case FHIRPathParser.TIME:
			case FHIRPathParser.DATESTARTSYMBOL:
			case FHIRPathParser.IDENTIFIER:
			case FHIRPathParser.DELIMITEDIDENTIFIER:
			case FHIRPathParser.UDELIMITEDIDENTIFIER:
			case FHIRPathParser.STRING:
			case FHIRPathParser.USTRING:
			case FHIRPathParser.NUMBER:
				{
				_localctx = new TermExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 37;
				this.term();
				}
				break;
			case FHIRPathParser.T__3:
			case FHIRPathParser.T__4:
				{
				_localctx = new PolarityExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 38;
				_la = this._input.LA(1);
				if (!(_la === FHIRPathParser.T__3 || _la === FHIRPathParser.T__4)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 39;
				this.expression(11);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 82;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 80;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 42;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 43;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__5) | (1 << FHIRPathParser.T__6) | (1 << FHIRPathParser.T__7) | (1 << FHIRPathParser.T__8))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 44;
						this.expression(11);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 45;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 46;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__3) | (1 << FHIRPathParser.T__4) | (1 << FHIRPathParser.T__9))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 47;
						this.expression(10);
						}
						break;

					case 3:
						{
						_localctx = new UnionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 48;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 49;
						this.match(FHIRPathParser.T__12);
						this.state = 50;
						this.expression(8);
						}
						break;

					case 4:
						{
						_localctx = new InequalityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 51;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 52;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__13) | (1 << FHIRPathParser.T__14) | (1 << FHIRPathParser.T__15) | (1 << FHIRPathParser.T__16))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 53;
						this.expression(7);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 54;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 55;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__17) | (1 << FHIRPathParser.T__18) | (1 << FHIRPathParser.T__19) | (1 << FHIRPathParser.T__20))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 56;
						this.expression(6);
						}
						break;

					case 6:
						{
						_localctx = new MembershipExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 57;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 58;
						_la = this._input.LA(1);
						if (!(_la === FHIRPathParser.T__21 || _la === FHIRPathParser.T__22)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 59;
						this.expression(5);
						}
						break;

					case 7:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 60;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 61;
						this.match(FHIRPathParser.T__23);
						this.state = 62;
						this.expression(4);
						}
						break;

					case 8:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 63;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 64;
						_la = this._input.LA(1);
						if (!(_la === FHIRPathParser.T__24 || _la === FHIRPathParser.T__25)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 65;
						this.expression(3);
						}
						break;

					case 9:
						{
						_localctx = new ImpliesExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 66;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 67;
						this.match(FHIRPathParser.T__26);
						this.state = 68;
						this.expression(2);
						}
						break;

					case 10:
						{
						_localctx = new InvocationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 69;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 70;
						this.match(FHIRPathParser.T__0);
						this.state = 71;
						this.invocation();
						}
						break;

					case 11:
						{
						_localctx = new IndexerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 72;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 73;
						this.match(FHIRPathParser.T__1);
						this.state = 74;
						this.expression(0);
						this.state = 75;
						this.match(FHIRPathParser.T__2);
						}
						break;

					case 12:
						{
						_localctx = new TypeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
						this.state = 77;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 78;
						_la = this._input.LA(1);
						if (!(_la === FHIRPathParser.T__10 || _la === FHIRPathParser.T__11)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 79;
						this.typeSpecifier();
						}
						break;
					}
					}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FHIRPathParser.RULE_term);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FHIRPathParser.T__10:
			case FHIRPathParser.T__11:
			case FHIRPathParser.T__21:
			case FHIRPathParser.T__22:
			case FHIRPathParser.T__34:
			case FHIRPathParser.T__35:
			case FHIRPathParser.T__36:
			case FHIRPathParser.T__37:
			case FHIRPathParser.T__38:
			case FHIRPathParser.T__39:
			case FHIRPathParser.T__40:
			case FHIRPathParser.T__41:
			case FHIRPathParser.T__42:
			case FHIRPathParser.T__43:
			case FHIRPathParser.T__44:
			case FHIRPathParser.T__45:
			case FHIRPathParser.T__46:
			case FHIRPathParser.T__47:
			case FHIRPathParser.IDENTIFIER:
			case FHIRPathParser.DELIMITEDIDENTIFIER:
			case FHIRPathParser.UDELIMITEDIDENTIFIER:
				_localctx = new InvocationTermContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.invocation();
				}
				break;
			case FHIRPathParser.T__29:
			case FHIRPathParser.T__31:
			case FHIRPathParser.T__32:
			case FHIRPathParser.DATETIME:
			case FHIRPathParser.TIME:
			case FHIRPathParser.DATESTARTSYMBOL:
			case FHIRPathParser.STRING:
			case FHIRPathParser.USTRING:
			case FHIRPathParser.NUMBER:
				_localctx = new LiteralTermContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.literal();
				}
				break;
			case FHIRPathParser.T__33:
				_localctx = new ExternalConstantTermContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
				this.externalConstant();
				}
				break;
			case FHIRPathParser.T__27:
				_localctx = new ParenthesizedTermContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 88;
				this.match(FHIRPathParser.T__27);
				this.state = 89;
				this.expression(0);
				this.state = 90;
				this.match(FHIRPathParser.T__28);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FHIRPathParser.RULE_literal);
		let _la: number;
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.match(FHIRPathParser.T__29);
				this.state = 95;
				this.match(FHIRPathParser.T__30);
				}
				break;

			case 2:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				_la = this._input.LA(1);
				if (!(_la === FHIRPathParser.T__31 || _la === FHIRPathParser.T__32)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 97;
				this.match(FHIRPathParser.STRING);
				}
				break;

			case 4:
				_localctx = new UstringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 98;
				this.match(FHIRPathParser.USTRING);
				}
				break;

			case 5:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 99;
				this.match(FHIRPathParser.NUMBER);
				}
				break;

			case 6:
				_localctx = new DateTimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 100;
				this.match(FHIRPathParser.DATETIME);
				}
				break;

			case 7:
				_localctx = new TimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 101;
				this.match(FHIRPathParser.TIME);
				}
				break;

			case 8:
				_localctx = new DateStartSymbolLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 102;
				this.match(FHIRPathParser.DATESTARTSYMBOL);
				}
				break;

			case 9:
				_localctx = new QuantityLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 103;
				this.quantity();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalConstant(): ExternalConstantContext {
		let _localctx: ExternalConstantContext = new ExternalConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FHIRPathParser.RULE_externalConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(FHIRPathParser.T__33);
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FHIRPathParser.T__10:
			case FHIRPathParser.T__11:
			case FHIRPathParser.T__21:
			case FHIRPathParser.T__22:
			case FHIRPathParser.IDENTIFIER:
			case FHIRPathParser.DELIMITEDIDENTIFIER:
			case FHIRPathParser.UDELIMITEDIDENTIFIER:
				{
				this.state = 107;
				this.identifier();
				}
				break;
			case FHIRPathParser.STRING:
				{
				this.state = 108;
				this.match(FHIRPathParser.STRING);
				}
				break;
			case FHIRPathParser.USTRING:
				{
				this.state = 109;
				this.match(FHIRPathParser.USTRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invocation(): InvocationContext {
		let _localctx: InvocationContext = new InvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FHIRPathParser.RULE_invocation);
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new MemberInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new FunctionInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.function();
				}
				break;

			case 3:
				_localctx = new ThisInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.thisKeyword();
				}
				break;

			case 4:
				_localctx = new IndexInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 115;
				this.indexKeyword();
				}
				break;

			case 5:
				_localctx = new TotalInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 116;
				this.totalKeyword();
				}
				break;

			case 6:
				_localctx = new KeywordInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 117;
				this.keyword();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FHIRPathParser.RULE_keyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(FHIRPathParser.T__34);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thisKeyword(): ThisKeywordContext {
		let _localctx: ThisKeywordContext = new ThisKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FHIRPathParser.RULE_thisKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (FHIRPathParser.T__35 - 36)) | (1 << (FHIRPathParser.T__36 - 36)) | (1 << (FHIRPathParser.T__37 - 36)) | (1 << (FHIRPathParser.T__38 - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexKeyword(): IndexKeywordContext {
		let _localctx: IndexKeywordContext = new IndexKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FHIRPathParser.RULE_indexKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FHIRPathParser.T__39 - 40)) | (1 << (FHIRPathParser.T__40 - 40)) | (1 << (FHIRPathParser.T__41 - 40)) | (1 << (FHIRPathParser.T__42 - 40)) | (1 << (FHIRPathParser.T__43 - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public totalKeyword(): TotalKeywordContext {
		let _localctx: TotalKeywordContext = new TotalKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FHIRPathParser.RULE_totalKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (FHIRPathParser.T__35 - 36)) | (1 << (FHIRPathParser.T__44 - 36)) | (1 << (FHIRPathParser.T__45 - 36)) | (1 << (FHIRPathParser.T__46 - 36)) | (1 << (FHIRPathParser.T__47 - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FHIRPathParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.identifier();
			this.state = 129;
			this.match(FHIRPathParser.T__27);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__3) | (1 << FHIRPathParser.T__4) | (1 << FHIRPathParser.T__10) | (1 << FHIRPathParser.T__11) | (1 << FHIRPathParser.T__21) | (1 << FHIRPathParser.T__22) | (1 << FHIRPathParser.T__27) | (1 << FHIRPathParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FHIRPathParser.T__31 - 32)) | (1 << (FHIRPathParser.T__32 - 32)) | (1 << (FHIRPathParser.T__33 - 32)) | (1 << (FHIRPathParser.T__34 - 32)) | (1 << (FHIRPathParser.T__35 - 32)) | (1 << (FHIRPathParser.T__36 - 32)) | (1 << (FHIRPathParser.T__37 - 32)) | (1 << (FHIRPathParser.T__38 - 32)) | (1 << (FHIRPathParser.T__39 - 32)) | (1 << (FHIRPathParser.T__40 - 32)) | (1 << (FHIRPathParser.T__41 - 32)) | (1 << (FHIRPathParser.T__42 - 32)) | (1 << (FHIRPathParser.T__43 - 32)) | (1 << (FHIRPathParser.T__44 - 32)) | (1 << (FHIRPathParser.T__45 - 32)) | (1 << (FHIRPathParser.T__46 - 32)) | (1 << (FHIRPathParser.T__47 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (FHIRPathParser.DATETIME - 66)) | (1 << (FHIRPathParser.TIME - 66)) | (1 << (FHIRPathParser.DATESTARTSYMBOL - 66)) | (1 << (FHIRPathParser.IDENTIFIER - 66)) | (1 << (FHIRPathParser.DELIMITEDIDENTIFIER - 66)) | (1 << (FHIRPathParser.UDELIMITEDIDENTIFIER - 66)) | (1 << (FHIRPathParser.STRING - 66)) | (1 << (FHIRPathParser.USTRING - 66)) | (1 << (FHIRPathParser.NUMBER - 66)))) !== 0)) {
				{
				this.state = 130;
				this.paramList();
				}
			}

			this.state = 133;
			this.match(FHIRPathParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FHIRPathParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.expression(0);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FHIRPathParser.T__48) {
				{
				{
				this.state = 136;
				this.match(FHIRPathParser.T__48);
				this.state = 137;
				this.expression(0);
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity(): QuantityContext {
		let _localctx: QuantityContext = new QuantityContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FHIRPathParser.RULE_quantity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(FHIRPathParser.NUMBER);
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 144;
				this.unit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FHIRPathParser.RULE_unit);
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FHIRPathParser.T__49:
			case FHIRPathParser.T__50:
			case FHIRPathParser.T__51:
			case FHIRPathParser.T__52:
			case FHIRPathParser.T__53:
			case FHIRPathParser.T__54:
			case FHIRPathParser.T__55:
			case FHIRPathParser.T__56:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.dateTimePrecision();
				}
				break;
			case FHIRPathParser.T__57:
			case FHIRPathParser.T__58:
			case FHIRPathParser.T__59:
			case FHIRPathParser.T__60:
			case FHIRPathParser.T__61:
			case FHIRPathParser.T__62:
			case FHIRPathParser.T__63:
			case FHIRPathParser.T__64:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 148;
				this.pluralDateTimePrecision();
				}
				break;
			case FHIRPathParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 149;
				this.match(FHIRPathParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimePrecision(): DateTimePrecisionContext {
		let _localctx: DateTimePrecisionContext = new DateTimePrecisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FHIRPathParser.RULE_dateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			_la = this._input.LA(1);
			if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (FHIRPathParser.T__49 - 50)) | (1 << (FHIRPathParser.T__50 - 50)) | (1 << (FHIRPathParser.T__51 - 50)) | (1 << (FHIRPathParser.T__52 - 50)) | (1 << (FHIRPathParser.T__53 - 50)) | (1 << (FHIRPathParser.T__54 - 50)) | (1 << (FHIRPathParser.T__55 - 50)) | (1 << (FHIRPathParser.T__56 - 50)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
		let _localctx: PluralDateTimePrecisionContext = new PluralDateTimePrecisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FHIRPathParser.RULE_pluralDateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_la = this._input.LA(1);
			if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (FHIRPathParser.T__57 - 58)) | (1 << (FHIRPathParser.T__58 - 58)) | (1 << (FHIRPathParser.T__59 - 58)) | (1 << (FHIRPathParser.T__60 - 58)) | (1 << (FHIRPathParser.T__61 - 58)) | (1 << (FHIRPathParser.T__62 - 58)) | (1 << (FHIRPathParser.T__63 - 58)) | (1 << (FHIRPathParser.T__64 - 58)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FHIRPathParser.RULE_typeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.qualifiedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		let _localctx: QualifiedIdentifierContext = new QualifiedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FHIRPathParser.RULE_qualifiedIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.identifier();
			this.state = 163;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 159;
					this.match(FHIRPathParser.T__0);
					this.state = 160;
					this.identifier();
					}
					}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FHIRPathParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__10) | (1 << FHIRPathParser.T__11) | (1 << FHIRPathParser.T__21) | (1 << FHIRPathParser.T__22))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (FHIRPathParser.IDENTIFIER - 69)) | (1 << (FHIRPathParser.DELIMITEDIDENTIFIER - 69)) | (1 << (FHIRPathParser.UDELIMITEDIDENTIFIER - 69)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);

		case 8:
			return this.precpred(this._ctx, 1);

		case 9:
			return this.precpred(this._ctx, 13);

		case 10:
			return this.precpred(this._ctx, 12);

		case 11:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\xAB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02+\n\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x07\x02S\n\x02\f\x02\x0E\x02V\v\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03_\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04k\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05q\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06y\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\v\x05\v\x86\n\v\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x07\f\x8D\n\f\f\f\x0E\f\x90\v\f\x03\r\x03\r\x05\r\x94\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\x99\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\xA4\n\x12\f\x12\x0E\x12\xA7" +
		"\v\x12\x03\x13\x03\x13\x03\x13\x02\x02\x03\x02\x14\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x11\x03\x02\x06\x07\x03\x02" +
		"\b\v\x04\x02\x06\x07\f\f\x03\x02\x10\x13\x03\x02\x14\x17\x03\x02\x18\x19" +
		"\x03\x02\x1B\x1C\x03\x02\r\x0E\x03\x02\"#\x03\x02&)\x03\x02*.\x04\x02" +
		"&&/2\x03\x024;\x03\x02<C\x05\x02\r\x0E\x18\x19GI\x02\xBD\x02*\x03\x02" +
		"\x02\x02\x04^\x03\x02\x02\x02\x06j\x03\x02\x02\x02\bl\x03\x02\x02\x02" +
		"\nx\x03\x02\x02\x02\fz\x03\x02\x02\x02\x0E|\x03\x02\x02\x02\x10~\x03\x02" +
		"\x02\x02\x12\x80\x03\x02\x02\x02\x14\x82\x03\x02\x02\x02\x16\x89\x03\x02" +
		"\x02\x02\x18\x91\x03\x02\x02\x02\x1A\x98\x03\x02\x02\x02\x1C\x9A\x03\x02" +
		"\x02\x02\x1E\x9C\x03\x02\x02\x02 \x9E\x03\x02\x02\x02\"\xA0\x03\x02\x02" +
		"\x02$\xA8\x03\x02\x02\x02&\'\b\x02\x01\x02\'+\x05\x04\x03\x02()\t\x02" +
		"\x02\x02)+\x05\x02\x02\r*&\x03\x02\x02\x02*(\x03\x02\x02\x02+T\x03\x02" +
		"\x02\x02,-\f\f\x02\x02-.\t\x03\x02\x02.S\x05\x02\x02\r/0\f\v\x02\x020" +
		"1\t\x04\x02\x021S\x05\x02\x02\f23\f\t\x02\x0234\x07\x0F\x02\x024S\x05" +
		"\x02\x02\n56\f\b\x02\x0267\t\x05\x02\x027S\x05\x02\x02\t89\f\x07\x02\x02" +
		"9:\t\x06\x02\x02:S\x05\x02\x02\b;<\f\x06\x02\x02<=\t\x07\x02\x02=S\x05" +
		"\x02\x02\x07>?\f\x05\x02\x02?@\x07\x1A\x02\x02@S\x05\x02\x02\x06AB\f\x04" +
		"\x02\x02BC\t\b\x02\x02CS\x05\x02\x02\x05DE\f\x03\x02\x02EF\x07\x1D\x02" +
		"\x02FS\x05\x02\x02\x04GH\f\x0F\x02\x02HI\x07\x03\x02\x02IS\x05\n\x06\x02" +
		"JK\f\x0E\x02\x02KL\x07\x04\x02\x02LM\x05\x02\x02\x02MN\x07\x05\x02\x02" +
		"NS\x03\x02\x02\x02OP\f\n\x02\x02PQ\t\t\x02\x02QS\x05 \x11\x02R,\x03\x02" +
		"\x02\x02R/\x03\x02\x02\x02R2\x03\x02\x02\x02R5\x03\x02\x02\x02R8\x03\x02" +
		"\x02\x02R;\x03\x02\x02\x02R>\x03\x02\x02\x02RA\x03\x02\x02\x02RD\x03\x02" +
		"\x02\x02RG\x03\x02\x02\x02RJ\x03\x02\x02\x02RO\x03\x02\x02\x02SV\x03\x02" +
		"\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\x03\x03\x02\x02\x02VT\x03" +
		"\x02\x02\x02W_\x05\n\x06\x02X_\x05\x06\x04\x02Y_\x05\b\x05\x02Z[\x07\x1E" +
		"\x02\x02[\\\x05\x02\x02\x02\\]\x07\x1F\x02\x02]_\x03\x02\x02\x02^W\x03" +
		"\x02\x02\x02^X\x03\x02\x02\x02^Y\x03\x02\x02\x02^Z\x03\x02\x02\x02_\x05" +
		"\x03\x02\x02\x02`a\x07 \x02\x02ak\x07!\x02\x02bk\t\n\x02\x02ck\x07J\x02" +
		"\x02dk\x07K\x02\x02ek\x07L\x02\x02fk\x07D\x02\x02gk\x07E\x02\x02hk\x07" +
		"F\x02\x02ik\x05\x18\r\x02j`\x03\x02\x02\x02jb\x03\x02\x02\x02jc\x03\x02" +
		"\x02\x02jd\x03\x02\x02\x02je\x03\x02\x02\x02jf\x03\x02\x02\x02jg\x03\x02" +
		"\x02\x02jh\x03\x02\x02\x02ji\x03\x02\x02\x02k\x07\x03\x02\x02\x02lp\x07" +
		"$\x02\x02mq\x05$\x13\x02nq\x07J\x02\x02oq\x07K\x02\x02pm\x03\x02\x02\x02" +
		"pn\x03\x02\x02\x02po\x03\x02\x02\x02q\t\x03\x02\x02\x02ry\x05$\x13\x02" +
		"sy\x05\x14\v\x02ty\x05\x0E\b\x02uy\x05\x10\t\x02vy\x05\x12\n\x02wy\x05" +
		"\f\x07\x02xr\x03\x02\x02\x02xs\x03\x02\x02\x02xt\x03\x02\x02\x02xu\x03" +
		"\x02\x02\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\v\x03\x02\x02\x02z{" +
		"\x07%\x02\x02{\r\x03\x02\x02\x02|}\t\v\x02\x02}\x0F\x03\x02\x02\x02~\x7F" +
		"\t\f\x02\x02\x7F\x11\x03\x02\x02\x02\x80\x81\t\r\x02\x02\x81\x13\x03\x02" +
		"\x02\x02\x82\x83\x05$\x13\x02\x83\x85\x07\x1E\x02\x02\x84\x86\x05\x16" +
		"\f\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02" +
		"\x02\x02\x87\x88\x07\x1F\x02\x02\x88\x15\x03\x02\x02\x02\x89\x8E\x05\x02" +
		"\x02\x02\x8A\x8B\x073\x02\x02\x8B\x8D\x05\x02\x02\x02\x8C\x8A\x03\x02" +
		"\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02" +
		"\x02\x02\x8F\x17\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x93\x07L" +
		"\x02\x02\x92\x94\x05\x1A\x0E\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02" +
		"\x02\x02\x94\x19\x03\x02\x02\x02\x95\x99\x05\x1C\x0F\x02\x96\x99\x05\x1E" +
		"\x10\x02\x97\x99\x07J\x02\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02" +
		"\x02\x02\x98\x97\x03\x02\x02\x02\x99\x1B\x03\x02\x02\x02\x9A\x9B\t\x0E" +
		"\x02\x02\x9B\x1D\x03\x02\x02\x02\x9C\x9D\t\x0F\x02\x02\x9D\x1F\x03\x02" +
		"\x02\x02\x9E\x9F\x05\"\x12\x02\x9F!\x03\x02\x02\x02\xA0\xA5\x05$\x13\x02" +
		"\xA1\xA2\x07\x03\x02\x02\xA2\xA4\x05$\x13\x02\xA3\xA1\x03\x02\x02\x02" +
		"\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02" +
		"\xA6#\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\t\x10\x02\x02\xA9" +
		"%\x03\x02\x02\x02\x0E*RT^jpx\x85\x8E\x93\x98\xA5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FHIRPathParser.__ATN) {
			FHIRPathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FHIRPathParser._serializedATN));
		}

		return FHIRPathParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TermExpressionContext extends ExpressionContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterTermExpression) {
			listener.enterTermExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitTermExpression) {
			listener.exitTermExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitTermExpression) {
			return visitor.visitTermExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InvocationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public invocation(): InvocationContext {
		return this.getRuleContext(0, InvocationContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterInvocationExpression) {
			listener.enterInvocationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitInvocationExpression) {
			listener.exitInvocationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitInvocationExpression) {
			return visitor.visitInvocationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexerExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterIndexerExpression) {
			listener.enterIndexerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitIndexerExpression) {
			listener.exitIndexerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitIndexerExpression) {
			return visitor.visitIndexerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PolarityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterPolarityExpression) {
			listener.enterPolarityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitPolarityExpression) {
			listener.exitPolarityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitPolarityExpression) {
			return visitor.visitPolarityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterTypeExpression) {
			listener.enterTypeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitTypeExpression) {
			listener.exitTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitTypeExpression) {
			return visitor.visitTypeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterUnionExpression) {
			listener.enterUnionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitUnionExpression) {
			listener.exitUnionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitUnionExpression) {
			return visitor.visitUnionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InequalityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterInequalityExpression) {
			listener.enterInequalityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitInequalityExpression) {
			listener.exitInequalityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitInequalityExpression) {
			return visitor.visitInequalityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MembershipExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterMembershipExpression) {
			listener.enterMembershipExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitMembershipExpression) {
			listener.exitMembershipExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitMembershipExpression) {
			return visitor.visitMembershipExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImpliesExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterImpliesExpression) {
			listener.enterImpliesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitImpliesExpression) {
			listener.exitImpliesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitImpliesExpression) {
			return visitor.visitImpliesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_term; }
	public copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class InvocationTermContext extends TermContext {
	public invocation(): InvocationContext {
		return this.getRuleContext(0, InvocationContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterInvocationTerm) {
			listener.enterInvocationTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitInvocationTerm) {
			listener.exitInvocationTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitInvocationTerm) {
			return visitor.visitInvocationTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralTermContext extends TermContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterLiteralTerm) {
			listener.enterLiteralTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitLiteralTerm) {
			listener.exitLiteralTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitLiteralTerm) {
			return visitor.visitLiteralTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExternalConstantTermContext extends TermContext {
	public externalConstant(): ExternalConstantContext {
		return this.getRuleContext(0, ExternalConstantContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterExternalConstantTerm) {
			listener.enterExternalConstantTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitExternalConstantTerm) {
			listener.exitExternalConstantTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitExternalConstantTerm) {
			return visitor.visitExternalConstantTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedTermContext extends TermContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterParenthesizedTerm) {
			listener.enterParenthesizedTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitParenthesizedTerm) {
			listener.exitParenthesizedTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitParenthesizedTerm) {
			return visitor.visitParenthesizedTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends LiteralContext {
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends LiteralContext {
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(FHIRPathParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UstringLiteralContext extends LiteralContext {
	public USTRING(): TerminalNode { return this.getToken(FHIRPathParser.USTRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterUstringLiteral) {
			listener.enterUstringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitUstringLiteral) {
			listener.exitUstringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitUstringLiteral) {
			return visitor.visitUstringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberLiteralContext extends LiteralContext {
	public NUMBER(): TerminalNode { return this.getToken(FHIRPathParser.NUMBER, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateTimeLiteralContext extends LiteralContext {
	public DATETIME(): TerminalNode { return this.getToken(FHIRPathParser.DATETIME, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterDateTimeLiteral) {
			listener.enterDateTimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitDateTimeLiteral) {
			listener.exitDateTimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitDateTimeLiteral) {
			return visitor.visitDateTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeLiteralContext extends LiteralContext {
	public TIME(): TerminalNode { return this.getToken(FHIRPathParser.TIME, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterTimeLiteral) {
			listener.enterTimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitTimeLiteral) {
			listener.exitTimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitTimeLiteral) {
			return visitor.visitTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateStartSymbolLiteralContext extends LiteralContext {
	public DATESTARTSYMBOL(): TerminalNode { return this.getToken(FHIRPathParser.DATESTARTSYMBOL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterDateStartSymbolLiteral) {
			listener.enterDateStartSymbolLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitDateStartSymbolLiteral) {
			listener.exitDateStartSymbolLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitDateStartSymbolLiteral) {
			return visitor.visitDateStartSymbolLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantityLiteralContext extends LiteralContext {
	public quantity(): QuantityContext {
		return this.getRuleContext(0, QuantityContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterQuantityLiteral) {
			listener.enterQuantityLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitQuantityLiteral) {
			listener.exitQuantityLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitQuantityLiteral) {
			return visitor.visitQuantityLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalConstantContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FHIRPathParser.STRING, 0); }
	public USTRING(): TerminalNode | undefined { return this.tryGetToken(FHIRPathParser.USTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_externalConstant; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterExternalConstant) {
			listener.enterExternalConstant(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitExternalConstant) {
			listener.exitExternalConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitExternalConstant) {
			return visitor.visitExternalConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_invocation; }
	public copyFrom(ctx: InvocationContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberInvocationContext extends InvocationContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterMemberInvocation) {
			listener.enterMemberInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitMemberInvocation) {
			listener.exitMemberInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitMemberInvocation) {
			return visitor.visitMemberInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionInvocationContext extends InvocationContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterFunctionInvocation) {
			listener.enterFunctionInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitFunctionInvocation) {
			listener.exitFunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitFunctionInvocation) {
			return visitor.visitFunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisInvocationContext extends InvocationContext {
	public thisKeyword(): ThisKeywordContext {
		return this.getRuleContext(0, ThisKeywordContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterThisInvocation) {
			listener.enterThisInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitThisInvocation) {
			listener.exitThisInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitThisInvocation) {
			return visitor.visitThisInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexInvocationContext extends InvocationContext {
	public indexKeyword(): IndexKeywordContext {
		return this.getRuleContext(0, IndexKeywordContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterIndexInvocation) {
			listener.enterIndexInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitIndexInvocation) {
			listener.exitIndexInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitIndexInvocation) {
			return visitor.visitIndexInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TotalInvocationContext extends InvocationContext {
	public totalKeyword(): TotalKeywordContext {
		return this.getRuleContext(0, TotalKeywordContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterTotalInvocation) {
			listener.enterTotalInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitTotalInvocation) {
			listener.exitTotalInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitTotalInvocation) {
			return visitor.visitTotalInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class KeywordInvocationContext extends InvocationContext {
	public keyword(): KeywordContext {
		return this.getRuleContext(0, KeywordContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterKeywordInvocation) {
			listener.enterKeywordInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitKeywordInvocation) {
			listener.exitKeywordInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitKeywordInvocation) {
			return visitor.visitKeywordInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_keyword; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThisKeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_thisKeyword; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterThisKeyword) {
			listener.enterThisKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitThisKeyword) {
			listener.exitThisKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitThisKeyword) {
			return visitor.visitThisKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexKeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_indexKeyword; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterIndexKeyword) {
			listener.enterIndexKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitIndexKeyword) {
			listener.exitIndexKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitIndexKeyword) {
			return visitor.visitIndexKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TotalKeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_totalKeyword; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterTotalKeyword) {
			listener.enterTotalKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitTotalKeyword) {
			listener.exitTotalKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitTotalKeyword) {
			return visitor.visitTotalKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_function; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_paramList; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantityContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(FHIRPathParser.NUMBER, 0); }
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_quantity; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterQuantity) {
			listener.enterQuantity(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitQuantity) {
			listener.exitQuantity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitQuantity) {
			return visitor.visitQuantity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	public dateTimePrecision(): DateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionContext);
	}
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, PluralDateTimePrecisionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FHIRPathParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_unit; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimePrecisionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_dateTimePrecision; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterDateTimePrecision) {
			listener.enterDateTimePrecision(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitDateTimePrecision) {
			listener.exitDateTimePrecision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitDateTimePrecision) {
			return visitor.visitDateTimePrecision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PluralDateTimePrecisionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_pluralDateTimePrecision; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterPluralDateTimePrecision) {
			listener.enterPluralDateTimePrecision(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitPluralDateTimePrecision) {
			listener.exitPluralDateTimePrecision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitPluralDateTimePrecision) {
			return visitor.visitPluralDateTimePrecision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_qualifiedIdentifier; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterQualifiedIdentifier) {
			listener.enterQualifiedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitQualifiedIdentifier) {
			listener.exitQualifiedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitQualifiedIdentifier) {
			return visitor.visitQualifiedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FHIRPathParser.IDENTIFIER, 0); }
	public DELIMITEDIDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FHIRPathParser.DELIMITEDIDENTIFIER, 0); }
	public UDELIMITEDIDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FHIRPathParser.UDELIMITEDIDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRPathParser.RULE_identifier; }
	// @Override
	public enterRule(listener: FHIRPathListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRPathListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRPathVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


