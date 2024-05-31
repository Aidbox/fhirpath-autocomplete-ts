"use strict";
// Generated from ./grammar/FHIRPath.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSpecifierContext = exports.PluralDateTimePrecisionContext = exports.DateTimePrecisionContext = exports.UnitContext = exports.QuantityContext = exports.ParamListContext = exports.FunctionContext = exports.TotalKeywordContext = exports.IndexKeywordContext = exports.ThisKeywordContext = exports.KeywordContext = exports.KeywordInvocationContext = exports.TotalInvocationContext = exports.IndexInvocationContext = exports.ThisInvocationContext = exports.FunctionInvocationContext = exports.MemberInvocationContext = exports.InvocationContext = exports.ExternalConstantContext = exports.QuantityLiteralContext = exports.DateStartSymbolLiteralContext = exports.TimeLiteralContext = exports.DateTimeLiteralContext = exports.NumberLiteralContext = exports.UstringLiteralContext = exports.StringLiteralContext = exports.BooleanLiteralContext = exports.NullLiteralContext = exports.LiteralContext = exports.ParenthesizedTermContext = exports.ExternalConstantTermContext = exports.LiteralTermContext = exports.InvocationTermContext = exports.TermContext = exports.ImpliesExpressionContext = exports.OrExpressionContext = exports.AndExpressionContext = exports.MembershipExpressionContext = exports.EqualityExpressionContext = exports.InequalityExpressionContext = exports.UnionExpressionContext = exports.TypeExpressionContext = exports.AdditiveExpressionContext = exports.MultiplicativeExpressionContext = exports.PolarityExpressionContext = exports.IndexerExpressionContext = exports.InvocationExpressionContext = exports.TermExpressionContext = exports.ExpressionContext = exports.FHIRPathParser = void 0;
exports.IdentifierContext = exports.QualifiedIdentifierContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class FHIRPathParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return FHIRPathParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "FHIRPath.g4"; }
    // @Override
    get ruleNames() { return FHIRPathParser.ruleNames; }
    // @Override
    get serializedATN() { return FHIRPathParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(FHIRPathParser._ATN, this);
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 0;
        this.enterRecursionRule(_localctx, 0, FHIRPathParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
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
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 82;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 80;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
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
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FHIRPathParser.RULE_literal);
        let _la;
        try {
            this.state = 104;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
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
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    externalConstant() {
        let _localctx = new ExternalConstantContext(this._ctx, this.state);
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    invocation() {
        let _localctx = new InvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FHIRPathParser.RULE_invocation);
        try {
            this.state = 118;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    keyword() {
        let _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, FHIRPathParser.RULE_keyword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this.match(FHIRPathParser.T__34);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    thisKeyword() {
        let _localctx = new ThisKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, FHIRPathParser.RULE_thisKeyword);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                _la = this._input.LA(1);
                if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (FHIRPathParser.T__35 - 36)) | (1 << (FHIRPathParser.T__36 - 36)) | (1 << (FHIRPathParser.T__37 - 36)) | (1 << (FHIRPathParser.T__38 - 36)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    indexKeyword() {
        let _localctx = new IndexKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FHIRPathParser.RULE_indexKeyword);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FHIRPathParser.T__39 - 40)) | (1 << (FHIRPathParser.T__40 - 40)) | (1 << (FHIRPathParser.T__41 - 40)) | (1 << (FHIRPathParser.T__42 - 40)) | (1 << (FHIRPathParser.T__43 - 40)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    totalKeyword() {
        let _localctx = new TotalKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FHIRPathParser.RULE_totalKeyword);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                _la = this._input.LA(1);
                if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (FHIRPathParser.T__35 - 36)) | (1 << (FHIRPathParser.T__44 - 36)) | (1 << (FHIRPathParser.T__45 - 36)) | (1 << (FHIRPathParser.T__46 - 36)) | (1 << (FHIRPathParser.T__47 - 36)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function() {
        let _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, FHIRPathParser.RULE_function);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paramList() {
        let _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FHIRPathParser.RULE_paramList);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantity() {
        let _localctx = new QuantityContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FHIRPathParser.RULE_quantity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(FHIRPathParser.NUMBER);
                this.state = 145;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unit() {
        let _localctx = new UnitContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dateTimePrecision() {
        let _localctx = new DateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, FHIRPathParser.RULE_dateTimePrecision);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                _la = this._input.LA(1);
                if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (FHIRPathParser.T__49 - 50)) | (1 << (FHIRPathParser.T__50 - 50)) | (1 << (FHIRPathParser.T__51 - 50)) | (1 << (FHIRPathParser.T__52 - 50)) | (1 << (FHIRPathParser.T__53 - 50)) | (1 << (FHIRPathParser.T__54 - 50)) | (1 << (FHIRPathParser.T__55 - 50)) | (1 << (FHIRPathParser.T__56 - 50)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pluralDateTimePrecision() {
        let _localctx = new PluralDateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, FHIRPathParser.RULE_pluralDateTimePrecision);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                _la = this._input.LA(1);
                if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (FHIRPathParser.T__57 - 58)) | (1 << (FHIRPathParser.T__58 - 58)) | (1 << (FHIRPathParser.T__59 - 58)) | (1 << (FHIRPathParser.T__60 - 58)) | (1 << (FHIRPathParser.T__61 - 58)) | (1 << (FHIRPathParser.T__62 - 58)) | (1 << (FHIRPathParser.T__63 - 58)) | (1 << (FHIRPathParser.T__64 - 58)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeSpecifier() {
        let _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, FHIRPathParser.RULE_typeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this.qualifiedIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedIdentifier() {
        let _localctx = new QualifiedIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, FHIRPathParser.RULE_qualifiedIdentifier);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.identifier();
                this.state = 163;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, FHIRPathParser.RULE_identifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__10) | (1 << FHIRPathParser.T__11) | (1 << FHIRPathParser.T__21) | (1 << FHIRPathParser.T__22))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (FHIRPathParser.IDENTIFIER - 69)) | (1 << (FHIRPathParser.DELIMITEDIDENTIFIER - 69)) | (1 << (FHIRPathParser.UDELIMITEDIDENTIFIER - 69)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 0:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
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
    static get _ATN() {
        if (!FHIRPathParser.__ATN) {
            FHIRPathParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(FHIRPathParser._serializedATN));
        }
        return FHIRPathParser.__ATN;
    }
}
exports.FHIRPathParser = FHIRPathParser;
FHIRPathParser.T__0 = 1;
FHIRPathParser.T__1 = 2;
FHIRPathParser.T__2 = 3;
FHIRPathParser.T__3 = 4;
FHIRPathParser.T__4 = 5;
FHIRPathParser.T__5 = 6;
FHIRPathParser.T__6 = 7;
FHIRPathParser.T__7 = 8;
FHIRPathParser.T__8 = 9;
FHIRPathParser.T__9 = 10;
FHIRPathParser.T__10 = 11;
FHIRPathParser.T__11 = 12;
FHIRPathParser.T__12 = 13;
FHIRPathParser.T__13 = 14;
FHIRPathParser.T__14 = 15;
FHIRPathParser.T__15 = 16;
FHIRPathParser.T__16 = 17;
FHIRPathParser.T__17 = 18;
FHIRPathParser.T__18 = 19;
FHIRPathParser.T__19 = 20;
FHIRPathParser.T__20 = 21;
FHIRPathParser.T__21 = 22;
FHIRPathParser.T__22 = 23;
FHIRPathParser.T__23 = 24;
FHIRPathParser.T__24 = 25;
FHIRPathParser.T__25 = 26;
FHIRPathParser.T__26 = 27;
FHIRPathParser.T__27 = 28;
FHIRPathParser.T__28 = 29;
FHIRPathParser.T__29 = 30;
FHIRPathParser.T__30 = 31;
FHIRPathParser.T__31 = 32;
FHIRPathParser.T__32 = 33;
FHIRPathParser.T__33 = 34;
FHIRPathParser.T__34 = 35;
FHIRPathParser.T__35 = 36;
FHIRPathParser.T__36 = 37;
FHIRPathParser.T__37 = 38;
FHIRPathParser.T__38 = 39;
FHIRPathParser.T__39 = 40;
FHIRPathParser.T__40 = 41;
FHIRPathParser.T__41 = 42;
FHIRPathParser.T__42 = 43;
FHIRPathParser.T__43 = 44;
FHIRPathParser.T__44 = 45;
FHIRPathParser.T__45 = 46;
FHIRPathParser.T__46 = 47;
FHIRPathParser.T__47 = 48;
FHIRPathParser.T__48 = 49;
FHIRPathParser.T__49 = 50;
FHIRPathParser.T__50 = 51;
FHIRPathParser.T__51 = 52;
FHIRPathParser.T__52 = 53;
FHIRPathParser.T__53 = 54;
FHIRPathParser.T__54 = 55;
FHIRPathParser.T__55 = 56;
FHIRPathParser.T__56 = 57;
FHIRPathParser.T__57 = 58;
FHIRPathParser.T__58 = 59;
FHIRPathParser.T__59 = 60;
FHIRPathParser.T__60 = 61;
FHIRPathParser.T__61 = 62;
FHIRPathParser.T__62 = 63;
FHIRPathParser.T__63 = 64;
FHIRPathParser.T__64 = 65;
FHIRPathParser.DATETIME = 66;
FHIRPathParser.TIME = 67;
FHIRPathParser.DATESTARTSYMBOL = 68;
FHIRPathParser.IDENTIFIER = 69;
FHIRPathParser.DELIMITEDIDENTIFIER = 70;
FHIRPathParser.UDELIMITEDIDENTIFIER = 71;
FHIRPathParser.STRING = 72;
FHIRPathParser.USTRING = 73;
FHIRPathParser.NUMBER = 74;
FHIRPathParser.WS = 75;
FHIRPathParser.COMMENT = 76;
FHIRPathParser.LINE_COMMENT = 77;
FHIRPathParser.RULE_expression = 0;
FHIRPathParser.RULE_term = 1;
FHIRPathParser.RULE_literal = 2;
FHIRPathParser.RULE_externalConstant = 3;
FHIRPathParser.RULE_invocation = 4;
FHIRPathParser.RULE_keyword = 5;
FHIRPathParser.RULE_thisKeyword = 6;
FHIRPathParser.RULE_indexKeyword = 7;
FHIRPathParser.RULE_totalKeyword = 8;
FHIRPathParser.RULE_function = 9;
FHIRPathParser.RULE_paramList = 10;
FHIRPathParser.RULE_quantity = 11;
FHIRPathParser.RULE_unit = 12;
FHIRPathParser.RULE_dateTimePrecision = 13;
FHIRPathParser.RULE_pluralDateTimePrecision = 14;
FHIRPathParser.RULE_typeSpecifier = 15;
FHIRPathParser.RULE_qualifiedIdentifier = 16;
FHIRPathParser.RULE_identifier = 17;
// tslint:disable:no-trailing-whitespace
FHIRPathParser.ruleNames = [
    "expression", "term", "literal", "externalConstant", "invocation", "keyword",
    "thisKeyword", "indexKeyword", "totalKeyword", "function", "paramList",
    "quantity", "unit", "dateTimePrecision", "pluralDateTimePrecision", "typeSpecifier",
    "qualifiedIdentifier", "identifier",
];
FHIRPathParser._LITERAL_NAMES = [
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
FHIRPathParser._SYMBOLIC_NAMES = [
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
FHIRPathParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(FHIRPathParser._LITERAL_NAMES, FHIRPathParser._SYMBOLIC_NAMES, []);
FHIRPathParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\xAB\x04\x02" +
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
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionContext = ExpressionContext;
class TermExpressionContext extends ExpressionContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTermExpression) {
            listener.enterTermExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTermExpression) {
            listener.exitTermExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTermExpression) {
            return visitor.visitTermExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TermExpressionContext = TermExpressionContext;
class InvocationExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    invocation() {
        return this.getRuleContext(0, InvocationContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInvocationExpression) {
            listener.enterInvocationExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInvocationExpression) {
            listener.exitInvocationExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInvocationExpression) {
            return visitor.visitInvocationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InvocationExpressionContext = InvocationExpressionContext;
class IndexerExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexerExpression) {
            listener.enterIndexerExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexerExpression) {
            listener.exitIndexerExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexerExpression) {
            return visitor.visitIndexerExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexerExpressionContext = IndexerExpressionContext;
class PolarityExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPolarityExpression) {
            listener.enterPolarityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPolarityExpression) {
            listener.exitPolarityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPolarityExpression) {
            return visitor.visitPolarityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PolarityExpressionContext = PolarityExpressionContext;
class MultiplicativeExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
class AdditiveExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveExpressionContext = AdditiveExpressionContext;
class TypeExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeExpression) {
            listener.enterTypeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeExpression) {
            listener.exitTypeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeExpression) {
            return visitor.visitTypeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeExpressionContext = TypeExpressionContext;
class UnionExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnionExpression) {
            listener.enterUnionExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnionExpression) {
            listener.exitUnionExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnionExpression) {
            return visitor.visitUnionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnionExpressionContext = UnionExpressionContext;
class InequalityExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInequalityExpression) {
            listener.enterInequalityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInequalityExpression) {
            listener.exitInequalityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInequalityExpression) {
            return visitor.visitInequalityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InequalityExpressionContext = InequalityExpressionContext;
class EqualityExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualityExpressionContext = EqualityExpressionContext;
class MembershipExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMembershipExpression) {
            listener.enterMembershipExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMembershipExpression) {
            listener.exitMembershipExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMembershipExpression) {
            return visitor.visitMembershipExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MembershipExpressionContext = MembershipExpressionContext;
class AndExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAndExpression) {
            listener.enterAndExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAndExpression) {
            listener.exitAndExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AndExpressionContext = AndExpressionContext;
class OrExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrExpression) {
            listener.enterOrExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrExpression) {
            listener.exitOrExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrExpressionContext = OrExpressionContext;
class ImpliesExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterImpliesExpression) {
            listener.enterImpliesExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImpliesExpression) {
            listener.exitImpliesExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImpliesExpression) {
            return visitor.visitImpliesExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImpliesExpressionContext = ImpliesExpressionContext;
class TermContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_term; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TermContext = TermContext;
class InvocationTermContext extends TermContext {
    invocation() {
        return this.getRuleContext(0, InvocationContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInvocationTerm) {
            listener.enterInvocationTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInvocationTerm) {
            listener.exitInvocationTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInvocationTerm) {
            return visitor.visitInvocationTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InvocationTermContext = InvocationTermContext;
class LiteralTermContext extends TermContext {
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteralTerm) {
            listener.enterLiteralTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteralTerm) {
            listener.exitLiteralTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralTerm) {
            return visitor.visitLiteralTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralTermContext = LiteralTermContext;
class ExternalConstantTermContext extends TermContext {
    externalConstant() {
        return this.getRuleContext(0, ExternalConstantContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExternalConstantTerm) {
            listener.enterExternalConstantTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExternalConstantTerm) {
            listener.exitExternalConstantTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalConstantTerm) {
            return visitor.visitExternalConstantTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExternalConstantTermContext = ExternalConstantTermContext;
class ParenthesizedTermContext extends TermContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesizedTerm) {
            listener.enterParenthesizedTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesizedTerm) {
            listener.exitParenthesizedTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedTerm) {
            return visitor.visitParenthesizedTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesizedTermContext = ParenthesizedTermContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_literal; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.LiteralContext = LiteralContext;
class NullLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNullLiteral) {
            listener.enterNullLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNullLiteral) {
            listener.exitNullLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NullLiteralContext = NullLiteralContext;
class BooleanLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanLiteralContext = BooleanLiteralContext;
class StringLiteralContext extends LiteralContext {
    STRING() { return this.getToken(FHIRPathParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringLiteralContext = StringLiteralContext;
class UstringLiteralContext extends LiteralContext {
    USTRING() { return this.getToken(FHIRPathParser.USTRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUstringLiteral) {
            listener.enterUstringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUstringLiteral) {
            listener.exitUstringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUstringLiteral) {
            return visitor.visitUstringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UstringLiteralContext = UstringLiteralContext;
class NumberLiteralContext extends LiteralContext {
    NUMBER() { return this.getToken(FHIRPathParser.NUMBER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNumberLiteral) {
            listener.enterNumberLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumberLiteral) {
            listener.exitNumberLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberLiteralContext = NumberLiteralContext;
class DateTimeLiteralContext extends LiteralContext {
    DATETIME() { return this.getToken(FHIRPathParser.DATETIME, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimeLiteral) {
            listener.enterDateTimeLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimeLiteral) {
            listener.exitDateTimeLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimeLiteral) {
            return visitor.visitDateTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateTimeLiteralContext = DateTimeLiteralContext;
class TimeLiteralContext extends LiteralContext {
    TIME() { return this.getToken(FHIRPathParser.TIME, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTimeLiteral) {
            listener.enterTimeLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTimeLiteral) {
            listener.exitTimeLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTimeLiteral) {
            return visitor.visitTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimeLiteralContext = TimeLiteralContext;
class DateStartSymbolLiteralContext extends LiteralContext {
    DATESTARTSYMBOL() { return this.getToken(FHIRPathParser.DATESTARTSYMBOL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDateStartSymbolLiteral) {
            listener.enterDateStartSymbolLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateStartSymbolLiteral) {
            listener.exitDateStartSymbolLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateStartSymbolLiteral) {
            return visitor.visitDateStartSymbolLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateStartSymbolLiteralContext = DateStartSymbolLiteralContext;
class QuantityLiteralContext extends LiteralContext {
    quantity() {
        return this.getRuleContext(0, QuantityContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantityLiteral) {
            listener.enterQuantityLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantityLiteral) {
            listener.exitQuantityLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantityLiteral) {
            return visitor.visitQuantityLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuantityLiteralContext = QuantityLiteralContext;
class ExternalConstantContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    STRING() { return this.tryGetToken(FHIRPathParser.STRING, 0); }
    USTRING() { return this.tryGetToken(FHIRPathParser.USTRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_externalConstant; }
    // @Override
    enterRule(listener) {
        if (listener.enterExternalConstant) {
            listener.enterExternalConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExternalConstant) {
            listener.exitExternalConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalConstant) {
            return visitor.visitExternalConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExternalConstantContext = ExternalConstantContext;
class InvocationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_invocation; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.InvocationContext = InvocationContext;
class MemberInvocationContext extends InvocationContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberInvocation) {
            listener.enterMemberInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberInvocation) {
            listener.exitMemberInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberInvocation) {
            return visitor.visitMemberInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberInvocationContext = MemberInvocationContext;
class FunctionInvocationContext extends InvocationContext {
    function() {
        return this.getRuleContext(0, FunctionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionInvocation) {
            listener.enterFunctionInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionInvocation) {
            listener.exitFunctionInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionInvocation) {
            return visitor.visitFunctionInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionInvocationContext = FunctionInvocationContext;
class ThisInvocationContext extends InvocationContext {
    thisKeyword() {
        return this.getRuleContext(0, ThisKeywordContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterThisInvocation) {
            listener.enterThisInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitThisInvocation) {
            listener.exitThisInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThisInvocation) {
            return visitor.visitThisInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ThisInvocationContext = ThisInvocationContext;
class IndexInvocationContext extends InvocationContext {
    indexKeyword() {
        return this.getRuleContext(0, IndexKeywordContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexInvocation) {
            listener.enterIndexInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexInvocation) {
            listener.exitIndexInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexInvocation) {
            return visitor.visitIndexInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexInvocationContext = IndexInvocationContext;
class TotalInvocationContext extends InvocationContext {
    totalKeyword() {
        return this.getRuleContext(0, TotalKeywordContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTotalInvocation) {
            listener.enterTotalInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTotalInvocation) {
            listener.exitTotalInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTotalInvocation) {
            return visitor.visitTotalInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TotalInvocationContext = TotalInvocationContext;
class KeywordInvocationContext extends InvocationContext {
    keyword() {
        return this.getRuleContext(0, KeywordContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterKeywordInvocation) {
            listener.enterKeywordInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKeywordInvocation) {
            listener.exitKeywordInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKeywordInvocation) {
            return visitor.visitKeywordInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KeywordInvocationContext = KeywordInvocationContext;
class KeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_keyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KeywordContext = KeywordContext;
class ThisKeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_thisKeyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterThisKeyword) {
            listener.enterThisKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitThisKeyword) {
            listener.exitThisKeyword(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThisKeyword) {
            return visitor.visitThisKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ThisKeywordContext = ThisKeywordContext;
class IndexKeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_indexKeyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexKeyword) {
            listener.enterIndexKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexKeyword) {
            listener.exitIndexKeyword(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexKeyword) {
            return visitor.visitIndexKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexKeywordContext = IndexKeywordContext;
class TotalKeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_totalKeyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterTotalKeyword) {
            listener.enterTotalKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTotalKeyword) {
            listener.exitTotalKeyword(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTotalKeyword) {
            return visitor.visitTotalKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TotalKeywordContext = TotalKeywordContext;
class FunctionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_function; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionContext = FunctionContext;
class ParamListContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_paramList; }
    // @Override
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamListContext = ParamListContext;
class QuantityContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(FHIRPathParser.NUMBER, 0); }
    unit() {
        return this.tryGetRuleContext(0, UnitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_quantity; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantity) {
            listener.enterQuantity(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantity) {
            listener.exitQuantity(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantity) {
            return visitor.visitQuantity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuantityContext = QuantityContext;
class UnitContext extends ParserRuleContext_1.ParserRuleContext {
    dateTimePrecision() {
        return this.tryGetRuleContext(0, DateTimePrecisionContext);
    }
    pluralDateTimePrecision() {
        return this.tryGetRuleContext(0, PluralDateTimePrecisionContext);
    }
    STRING() { return this.tryGetToken(FHIRPathParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_unit; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitContext = UnitContext;
class DateTimePrecisionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_dateTimePrecision; }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimePrecision) {
            listener.enterDateTimePrecision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimePrecision) {
            listener.exitDateTimePrecision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimePrecision) {
            return visitor.visitDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateTimePrecisionContext = DateTimePrecisionContext;
class PluralDateTimePrecisionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_pluralDateTimePrecision; }
    // @Override
    enterRule(listener) {
        if (listener.enterPluralDateTimePrecision) {
            listener.enterPluralDateTimePrecision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPluralDateTimePrecision) {
            listener.exitPluralDateTimePrecision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPluralDateTimePrecision) {
            return visitor.visitPluralDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PluralDateTimePrecisionContext = PluralDateTimePrecisionContext;
class TypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_typeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeSpecifierContext = TypeSpecifierContext;
class QualifiedIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_qualifiedIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedIdentifier) {
            listener.enterQualifiedIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedIdentifier) {
            listener.exitQualifiedIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedIdentifier) {
            return visitor.visitQualifiedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedIdentifierContext = QualifiedIdentifierContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(FHIRPathParser.IDENTIFIER, 0); }
    DELIMITEDIDENTIFIER() { return this.tryGetToken(FHIRPathParser.DELIMITEDIDENTIFIER, 0); }
    UDELIMITEDIDENTIFIER() { return this.tryGetToken(FHIRPathParser.UDELIMITEDIDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
//# sourceMappingURL=FHIRPathParser.js.map