// Generated from ./grammar/FHIRPath.g4 by ANTLR 4.9.0-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Token } from "antlr4ts/Token";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
var FHIRPathParser = /** @class */ (function (_super) {
    __extends(FHIRPathParser, _super);
    function FHIRPathParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator(FHIRPathParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(FHIRPathParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return FHIRPathParser.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FHIRPathParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "FHIRPath.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FHIRPathParser.prototype, "ruleNames", {
        // @Override
        get: function () { return FHIRPathParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FHIRPathParser.prototype, "serializedATN", {
        // @Override
        get: function () { return FHIRPathParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    FHIRPathParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 0;
        this.enterRecursionRule(_localctx, 0, FHIRPathParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
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
                    case FHIRPathParser.DATETIME:
                    case FHIRPathParser.TIME:
                    case FHIRPathParser.IDENTIFIER:
                    case FHIRPathParser.DELIMITEDIDENTIFIER:
                    case FHIRPathParser.STRING:
                    case FHIRPathParser.NUMBER:
                        {
                            _localctx = new TermExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 29;
                            this.term();
                        }
                        break;
                    case FHIRPathParser.T__3:
                    case FHIRPathParser.T__4:
                        {
                            _localctx = new PolarityExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 30;
                            _la = this._input.LA(1);
                            if (!(_la === FHIRPathParser.T__3 || _la === FHIRPathParser.T__4)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 31;
                            this.expression(11);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 74;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 72;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 34;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 35;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__5) | (1 << FHIRPathParser.T__6) | (1 << FHIRPathParser.T__7) | (1 << FHIRPathParser.T__8))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 36;
                                        this.expression(11);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 37;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 38;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__3) | (1 << FHIRPathParser.T__4) | (1 << FHIRPathParser.T__9))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 39;
                                        this.expression(10);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new UnionExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 40;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 41;
                                        this.match(FHIRPathParser.T__12);
                                        this.state = 42;
                                        this.expression(8);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InequalityExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 43;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 44;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__13) | (1 << FHIRPathParser.T__14) | (1 << FHIRPathParser.T__15) | (1 << FHIRPathParser.T__16))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 45;
                                        this.expression(7);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 46;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 47;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__17) | (1 << FHIRPathParser.T__18) | (1 << FHIRPathParser.T__19) | (1 << FHIRPathParser.T__20))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 48;
                                        this.expression(6);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new MembershipExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 49;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 50;
                                        _la = this._input.LA(1);
                                        if (!(_la === FHIRPathParser.T__21 || _la === FHIRPathParser.T__22)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 51;
                                        this.expression(5);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 52;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 53;
                                        this.match(FHIRPathParser.T__23);
                                        this.state = 54;
                                        this.expression(4);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 55;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 56;
                                        _la = this._input.LA(1);
                                        if (!(_la === FHIRPathParser.T__24 || _la === FHIRPathParser.T__25)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 57;
                                        this.expression(3);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ImpliesExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 58;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 59;
                                        this.match(FHIRPathParser.T__26);
                                        this.state = 60;
                                        this.expression(2);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new InvocationExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 61;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 62;
                                        this.match(FHIRPathParser.T__0);
                                        this.state = 63;
                                        this.invocation();
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new IndexerExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 64;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 65;
                                        this.match(FHIRPathParser.T__1);
                                        this.state = 66;
                                        this.expression(0);
                                        this.state = 67;
                                        this.match(FHIRPathParser.T__2);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new TypeExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 69;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 70;
                                        _la = this._input.LA(1);
                                        if (!(_la === FHIRPathParser.T__10 || _la === FHIRPathParser.T__11)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 71;
                                        this.typeSpecifier();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 76;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, FHIRPathParser.RULE_term);
        try {
            this.state = 84;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FHIRPathParser.T__10:
                case FHIRPathParser.T__11:
                case FHIRPathParser.T__21:
                case FHIRPathParser.T__22:
                case FHIRPathParser.T__34:
                case FHIRPathParser.T__35:
                case FHIRPathParser.T__36:
                case FHIRPathParser.IDENTIFIER:
                case FHIRPathParser.DELIMITEDIDENTIFIER:
                    _localctx = new InvocationTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 77;
                        this.invocation();
                    }
                    break;
                case FHIRPathParser.T__29:
                case FHIRPathParser.T__31:
                case FHIRPathParser.T__32:
                case FHIRPathParser.DATETIME:
                case FHIRPathParser.TIME:
                case FHIRPathParser.STRING:
                case FHIRPathParser.NUMBER:
                    _localctx = new LiteralTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 78;
                        this.literal();
                    }
                    break;
                case FHIRPathParser.T__33:
                    _localctx = new ExternalConstantTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 79;
                        this.externalConstant();
                    }
                    break;
                case FHIRPathParser.T__27:
                    _localctx = new ParenthesizedTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 80;
                        this.match(FHIRPathParser.T__27);
                        this.state = 81;
                        this.expression(0);
                        this.state = 82;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FHIRPathParser.RULE_literal);
        var _la;
        try {
            this.state = 94;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    _localctx = new NullLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 86;
                        this.match(FHIRPathParser.T__29);
                        this.state = 87;
                        this.match(FHIRPathParser.T__30);
                    }
                    break;
                case 2:
                    _localctx = new BooleanLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 88;
                        _la = this._input.LA(1);
                        if (!(_la === FHIRPathParser.T__31 || _la === FHIRPathParser.T__32)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
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
                        this.state = 89;
                        this.match(FHIRPathParser.STRING);
                    }
                    break;
                case 4:
                    _localctx = new NumberLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 90;
                        this.match(FHIRPathParser.NUMBER);
                    }
                    break;
                case 5:
                    _localctx = new DateTimeLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 91;
                        this.match(FHIRPathParser.DATETIME);
                    }
                    break;
                case 6:
                    _localctx = new TimeLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 92;
                        this.match(FHIRPathParser.TIME);
                    }
                    break;
                case 7:
                    _localctx = new QuantityLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 93;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.externalConstant = function () {
        var _localctx = new ExternalConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, FHIRPathParser.RULE_externalConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.match(FHIRPathParser.T__33);
                this.state = 99;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FHIRPathParser.T__10:
                    case FHIRPathParser.T__11:
                    case FHIRPathParser.T__21:
                    case FHIRPathParser.T__22:
                    case FHIRPathParser.IDENTIFIER:
                    case FHIRPathParser.DELIMITEDIDENTIFIER:
                        {
                            this.state = 97;
                            this.identifier();
                        }
                        break;
                    case FHIRPathParser.STRING:
                        {
                            this.state = 98;
                            this.match(FHIRPathParser.STRING);
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.invocation = function () {
        var _localctx = new InvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FHIRPathParser.RULE_invocation);
        try {
            this.state = 106;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    _localctx = new MemberInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 101;
                        this.identifier();
                    }
                    break;
                case 2:
                    _localctx = new FunctionInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 102;
                        this.function();
                    }
                    break;
                case 3:
                    _localctx = new ThisInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 103;
                        this.match(FHIRPathParser.T__34);
                    }
                    break;
                case 4:
                    _localctx = new IndexInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 104;
                        this.match(FHIRPathParser.T__35);
                    }
                    break;
                case 5:
                    _localctx = new TotalInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 105;
                        this.match(FHIRPathParser.T__36);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, FHIRPathParser.RULE_function);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this.identifier();
                this.state = 109;
                this.match(FHIRPathParser.T__27);
                this.state = 111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__3) | (1 << FHIRPathParser.T__4) | (1 << FHIRPathParser.T__10) | (1 << FHIRPathParser.T__11) | (1 << FHIRPathParser.T__21) | (1 << FHIRPathParser.T__22) | (1 << FHIRPathParser.T__27) | (1 << FHIRPathParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FHIRPathParser.T__31 - 32)) | (1 << (FHIRPathParser.T__32 - 32)) | (1 << (FHIRPathParser.T__33 - 32)) | (1 << (FHIRPathParser.T__34 - 32)) | (1 << (FHIRPathParser.T__35 - 32)) | (1 << (FHIRPathParser.T__36 - 32)) | (1 << (FHIRPathParser.DATETIME - 32)) | (1 << (FHIRPathParser.TIME - 32)) | (1 << (FHIRPathParser.IDENTIFIER - 32)) | (1 << (FHIRPathParser.DELIMITEDIDENTIFIER - 32)) | (1 << (FHIRPathParser.STRING - 32)) | (1 << (FHIRPathParser.NUMBER - 32)))) !== 0)) {
                    {
                        this.state = 110;
                        this.paramList();
                    }
                }
                this.state = 113;
                this.match(FHIRPathParser.T__28);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.paramList = function () {
        var _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, FHIRPathParser.RULE_paramList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.expression(0);
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FHIRPathParser.T__37) {
                    {
                        {
                            this.state = 116;
                            this.match(FHIRPathParser.T__37);
                            this.state = 117;
                            this.expression(0);
                        }
                    }
                    this.state = 122;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.quantity = function () {
        var _localctx = new QuantityContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FHIRPathParser.RULE_quantity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                this.match(FHIRPathParser.NUMBER);
                this.state = 125;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 124;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.unit = function () {
        var _localctx = new UnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FHIRPathParser.RULE_unit);
        try {
            this.state = 130;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FHIRPathParser.T__38:
                case FHIRPathParser.T__39:
                case FHIRPathParser.T__40:
                case FHIRPathParser.T__41:
                case FHIRPathParser.T__42:
                case FHIRPathParser.T__43:
                case FHIRPathParser.T__44:
                case FHIRPathParser.T__45:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 127;
                        this.dateTimePrecision();
                    }
                    break;
                case FHIRPathParser.T__46:
                case FHIRPathParser.T__47:
                case FHIRPathParser.T__48:
                case FHIRPathParser.T__49:
                case FHIRPathParser.T__50:
                case FHIRPathParser.T__51:
                case FHIRPathParser.T__52:
                case FHIRPathParser.T__53:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 128;
                        this.pluralDateTimePrecision();
                    }
                    break;
                case FHIRPathParser.STRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 129;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.dateTimePrecision = function () {
        var _localctx = new DateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, FHIRPathParser.RULE_dateTimePrecision);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                _la = this._input.LA(1);
                if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (FHIRPathParser.T__38 - 39)) | (1 << (FHIRPathParser.T__39 - 39)) | (1 << (FHIRPathParser.T__40 - 39)) | (1 << (FHIRPathParser.T__41 - 39)) | (1 << (FHIRPathParser.T__42 - 39)) | (1 << (FHIRPathParser.T__43 - 39)) | (1 << (FHIRPathParser.T__44 - 39)) | (1 << (FHIRPathParser.T__45 - 39)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.pluralDateTimePrecision = function () {
        var _localctx = new PluralDateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FHIRPathParser.RULE_pluralDateTimePrecision);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                _la = this._input.LA(1);
                if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (FHIRPathParser.T__46 - 47)) | (1 << (FHIRPathParser.T__47 - 47)) | (1 << (FHIRPathParser.T__48 - 47)) | (1 << (FHIRPathParser.T__49 - 47)) | (1 << (FHIRPathParser.T__50 - 47)) | (1 << (FHIRPathParser.T__51 - 47)) | (1 << (FHIRPathParser.T__52 - 47)) | (1 << (FHIRPathParser.T__53 - 47)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.typeSpecifier = function () {
        var _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FHIRPathParser.RULE_typeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                this.qualifiedIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
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
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.qualifiedIdentifier = function () {
        var _localctx = new QualifiedIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, FHIRPathParser.RULE_qualifiedIdentifier);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.identifier();
                this.state = 143;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 139;
                                this.match(FHIRPathParser.T__0);
                                this.state = 140;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 145;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FHIRPathParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, FHIRPathParser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 146;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__10) | (1 << FHIRPathParser.T__11) | (1 << FHIRPathParser.T__21) | (1 << FHIRPathParser.T__22))) !== 0) || _la === FHIRPathParser.IDENTIFIER || _la === FHIRPathParser.DELIMITEDIDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    FHIRPathParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 0:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    FHIRPathParser.prototype.expression_sempred = function (_localctx, predIndex) {
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
    };
    Object.defineProperty(FHIRPathParser, "_ATN", {
        get: function () {
            if (!FHIRPathParser.__ATN) {
                FHIRPathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FHIRPathParser._serializedATN));
            }
            return FHIRPathParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
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
    FHIRPathParser.DATETIME = 55;
    FHIRPathParser.TIME = 56;
    FHIRPathParser.IDENTIFIER = 57;
    FHIRPathParser.DELIMITEDIDENTIFIER = 58;
    FHIRPathParser.STRING = 59;
    FHIRPathParser.NUMBER = 60;
    FHIRPathParser.WS = 61;
    FHIRPathParser.COMMENT = 62;
    FHIRPathParser.LINE_COMMENT = 63;
    FHIRPathParser.RULE_expression = 0;
    FHIRPathParser.RULE_term = 1;
    FHIRPathParser.RULE_literal = 2;
    FHIRPathParser.RULE_externalConstant = 3;
    FHIRPathParser.RULE_invocation = 4;
    FHIRPathParser.RULE_function = 5;
    FHIRPathParser.RULE_paramList = 6;
    FHIRPathParser.RULE_quantity = 7;
    FHIRPathParser.RULE_unit = 8;
    FHIRPathParser.RULE_dateTimePrecision = 9;
    FHIRPathParser.RULE_pluralDateTimePrecision = 10;
    FHIRPathParser.RULE_typeSpecifier = 11;
    FHIRPathParser.RULE_qualifiedIdentifier = 12;
    FHIRPathParser.RULE_identifier = 13;
    // tslint:disable:no-trailing-whitespace
    FHIRPathParser.ruleNames = [
        "expression", "term", "literal", "externalConstant", "invocation", "function",
        "paramList", "quantity", "unit", "dateTimePrecision", "pluralDateTimePrecision",
        "typeSpecifier", "qualifiedIdentifier", "identifier",
    ];
    FHIRPathParser._LITERAL_NAMES = [
        undefined, "'.'", "'['", "']'", "'+'", "'-'", "'*'", "'/'", "'div'", "'mod'",
        "'&'", "'is'", "'as'", "'|'", "'<='", "'<'", "'>'", "'>='", "'='", "'~'",
        "'!='", "'!~'", "'in'", "'contains'", "'and'", "'or'", "'xor'", "'implies'",
        "'('", "')'", "'{'", "'}'", "'true'", "'false'", "'%'", "'$this'", "'$index'",
        "'$total'", "','", "'year'", "'month'", "'week'", "'day'", "'hour'", "'minute'",
        "'second'", "'millisecond'", "'years'", "'months'", "'weeks'", "'days'",
        "'hours'", "'minutes'", "'seconds'", "'milliseconds'",
    ];
    FHIRPathParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "DATETIME",
        "TIME", "IDENTIFIER", "DELIMITEDIDENTIFIER", "STRING", "NUMBER", "WS",
        "COMMENT", "LINE_COMMENT",
    ];
    FHIRPathParser.VOCABULARY = new VocabularyImpl(FHIRPathParser._LITERAL_NAMES, FHIRPathParser._SYMBOLIC_NAMES, []);
    FHIRPathParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\x97\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02#\n\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x07\x02K\n\x02\f\x02\x0E\x02N\v\x02\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03W\n\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04a\n\x04\x03\x05\x03" +
        "\x05\x03\x05\x05\x05f\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
        "\x06m\n\x06\x03\x07\x03\x07\x03\x07\x05\x07r\n\x07\x03\x07\x03\x07\x03" +
        "\b\x03\b\x03\b\x07\by\n\b\f\b\x0E\b|\v\b\x03\t\x03\t\x05\t\x80\n\t\x03" +
        "\n\x03\n\x03\n\x05\n\x85\n\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E" +
        "\x03\x0E\x03\x0E\x07\x0E\x90\n\x0E\f\x0E\x0E\x0E\x93\v\x0E\x03\x0F\x03" +
        "\x0F\x03\x0F\x02\x02\x03\x02\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
        "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02" +
        "\x0E\x03\x02\x06\x07\x03\x02\b\v\x04\x02\x06\x07\f\f\x03\x02\x10\x13\x03" +
        "\x02\x14\x17\x03\x02\x18\x19\x03\x02\x1B\x1C\x03\x02\r\x0E\x03\x02\"#" +
        "\x03\x02)0\x03\x0218\x05\x02\r\x0E\x18\x19;<\x02\xA9\x02\"\x03\x02\x02" +
        "\x02\x04V\x03\x02\x02\x02\x06`\x03\x02\x02\x02\bb\x03\x02\x02\x02\nl\x03" +
        "\x02\x02\x02\fn\x03\x02\x02\x02\x0Eu\x03\x02\x02\x02\x10}\x03\x02\x02" +
        "\x02\x12\x84\x03\x02\x02\x02\x14\x86\x03\x02\x02\x02\x16\x88\x03\x02\x02" +
        "\x02\x18\x8A\x03\x02\x02\x02\x1A\x8C\x03\x02\x02\x02\x1C\x94\x03\x02\x02" +
        "\x02\x1E\x1F\b\x02\x01\x02\x1F#\x05\x04\x03\x02 !\t\x02\x02\x02!#\x05" +
        "\x02\x02\r\"\x1E\x03\x02\x02\x02\" \x03\x02\x02\x02#L\x03\x02\x02\x02" +
        "$%\f\f\x02\x02%&\t\x03\x02\x02&K\x05\x02\x02\r\'(\f\v\x02\x02()\t\x04" +
        "\x02\x02)K\x05\x02\x02\f*+\f\t\x02\x02+,\x07\x0F\x02\x02,K\x05\x02\x02" +
        "\n-.\f\b\x02\x02./\t\x05\x02\x02/K\x05\x02\x02\t01\f\x07\x02\x0212\t\x06" +
        "\x02\x022K\x05\x02\x02\b34\f\x06\x02\x0245\t\x07\x02\x025K\x05\x02\x02" +
        "\x0767\f\x05\x02\x0278\x07\x1A\x02\x028K\x05\x02\x02\x069:\f\x04\x02\x02" +
        ":;\t\b\x02\x02;K\x05\x02\x02\x05<=\f\x03\x02\x02=>\x07\x1D\x02\x02>K\x05" +
        "\x02\x02\x04?@\f\x0F\x02\x02@A\x07\x03\x02\x02AK\x05\n\x06\x02BC\f\x0E" +
        "\x02\x02CD\x07\x04\x02\x02DE\x05\x02\x02\x02EF\x07\x05\x02\x02FK\x03\x02" +
        "\x02\x02GH\f\n\x02\x02HI\t\t\x02\x02IK\x05\x18\r\x02J$\x03\x02\x02\x02" +
        "J\'\x03\x02\x02\x02J*\x03\x02\x02\x02J-\x03\x02\x02\x02J0\x03\x02\x02" +
        "\x02J3\x03\x02\x02\x02J6\x03\x02\x02\x02J9\x03\x02\x02\x02J<\x03\x02\x02" +
        "\x02J?\x03\x02\x02\x02JB\x03\x02\x02\x02JG\x03\x02\x02\x02KN\x03\x02\x02" +
        "\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02M\x03\x03\x02\x02\x02NL\x03\x02" +
        "\x02\x02OW\x05\n\x06\x02PW\x05\x06\x04\x02QW\x05\b\x05\x02RS\x07\x1E\x02" +
        "\x02ST\x05\x02\x02\x02TU\x07\x1F\x02\x02UW\x03\x02\x02\x02VO\x03\x02\x02" +
        "\x02VP\x03\x02\x02\x02VQ\x03\x02\x02\x02VR\x03\x02\x02\x02W\x05\x03\x02" +
        "\x02\x02XY\x07 \x02\x02Ya\x07!\x02\x02Za\t\n\x02\x02[a\x07=\x02\x02\\" +
        "a\x07>\x02\x02]a\x079\x02\x02^a\x07:\x02\x02_a\x05\x10\t\x02`X\x03\x02" +
        "\x02\x02`Z\x03\x02\x02\x02`[\x03\x02\x02\x02`\\\x03\x02\x02\x02`]\x03" +
        "\x02\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02a\x07\x03\x02\x02\x02" +
        "be\x07$\x02\x02cf\x05\x1C\x0F\x02df\x07=\x02\x02ec\x03\x02\x02\x02ed\x03" +
        "\x02\x02\x02f\t\x03\x02\x02\x02gm\x05\x1C\x0F\x02hm\x05\f\x07\x02im\x07" +
        "%\x02\x02jm\x07&\x02\x02km\x07\'\x02\x02lg\x03\x02\x02\x02lh\x03\x02\x02" +
        "\x02li\x03\x02\x02\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02m\v\x03\x02" +
        "\x02\x02no\x05\x1C\x0F\x02oq\x07\x1E\x02\x02pr\x05\x0E\b\x02qp\x03\x02" +
        "\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x07\x1F\x02\x02t\r\x03" +
        "\x02\x02\x02uz\x05\x02\x02\x02vw\x07(\x02\x02wy\x05\x02\x02\x02xv\x03" +
        "\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{\x0F" +
        "\x03\x02\x02\x02|z\x03\x02\x02\x02}\x7F\x07>\x02\x02~\x80\x05\x12\n\x02" +
        "\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x11\x03\x02\x02\x02" +
        "\x81\x85\x05\x14\v\x02\x82\x85\x05\x16\f\x02\x83\x85\x07=\x02\x02\x84" +
        "\x81\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85" +
        "\x13\x03\x02\x02\x02\x86\x87\t\v\x02\x02\x87\x15\x03\x02\x02\x02\x88\x89" +
        "\t\f\x02\x02\x89\x17\x03\x02\x02\x02\x8A\x8B\x05\x1A\x0E\x02\x8B\x19\x03" +
        "\x02\x02\x02\x8C\x91\x05\x1C\x0F\x02\x8D\x8E\x07\x03\x02\x02\x8E\x90\x05" +
        "\x1C\x0F\x02\x8F\x8D\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03" +
        "\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x1B\x03\x02\x02\x02\x93\x91\x03" +
        "\x02\x02\x02\x94\x95\t\r\x02\x02\x95\x1D\x03\x02\x02\x02\x0E\"JLV`elq" +
        "z\x7F\x84\x91";
    return FHIRPathParser;
}(Parser));
export { FHIRPathParser };
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_expression; },
        enumerable: false,
        configurable: true
    });
    ExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExpressionContext;
}(ParserRuleContext));
export { ExpressionContext };
var TermExpressionContext = /** @class */ (function (_super) {
    __extends(TermExpressionContext, _super);
    function TermExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TermExpressionContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    // @Override
    TermExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTermExpression) {
            listener.enterTermExpression(this);
        }
    };
    // @Override
    TermExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTermExpression) {
            listener.exitTermExpression(this);
        }
    };
    // @Override
    TermExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTermExpression) {
            return visitor.visitTermExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermExpressionContext;
}(ExpressionContext));
export { TermExpressionContext };
var InvocationExpressionContext = /** @class */ (function (_super) {
    __extends(InvocationExpressionContext, _super);
    function InvocationExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InvocationExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    InvocationExpressionContext.prototype.invocation = function () {
        return this.getRuleContext(0, InvocationContext);
    };
    // @Override
    InvocationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInvocationExpression) {
            listener.enterInvocationExpression(this);
        }
    };
    // @Override
    InvocationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInvocationExpression) {
            listener.exitInvocationExpression(this);
        }
    };
    // @Override
    InvocationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInvocationExpression) {
            return visitor.visitInvocationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InvocationExpressionContext;
}(ExpressionContext));
export { InvocationExpressionContext };
var IndexerExpressionContext = /** @class */ (function (_super) {
    __extends(IndexerExpressionContext, _super);
    function IndexerExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IndexerExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    IndexerExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexerExpression) {
            listener.enterIndexerExpression(this);
        }
    };
    // @Override
    IndexerExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexerExpression) {
            listener.exitIndexerExpression(this);
        }
    };
    // @Override
    IndexerExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexerExpression) {
            return visitor.visitIndexerExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexerExpressionContext;
}(ExpressionContext));
export { IndexerExpressionContext };
var PolarityExpressionContext = /** @class */ (function (_super) {
    __extends(PolarityExpressionContext, _super);
    function PolarityExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PolarityExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    PolarityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPolarityExpression) {
            listener.enterPolarityExpression(this);
        }
    };
    // @Override
    PolarityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPolarityExpression) {
            listener.exitPolarityExpression(this);
        }
    };
    // @Override
    PolarityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPolarityExpression) {
            return visitor.visitPolarityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PolarityExpressionContext;
}(ExpressionContext));
export { PolarityExpressionContext };
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MultiplicativeExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExpressionContext;
}(ExpressionContext));
export { MultiplicativeExpressionContext };
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AdditiveExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExpressionContext;
}(ExpressionContext));
export { AdditiveExpressionContext };
var TypeExpressionContext = /** @class */ (function (_super) {
    __extends(TypeExpressionContext, _super);
    function TypeExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TypeExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TypeExpressionContext.prototype.typeSpecifier = function () {
        return this.getRuleContext(0, TypeSpecifierContext);
    };
    // @Override
    TypeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeExpression) {
            listener.enterTypeExpression(this);
        }
    };
    // @Override
    TypeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeExpression) {
            listener.exitTypeExpression(this);
        }
    };
    // @Override
    TypeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeExpression) {
            return visitor.visitTypeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeExpressionContext;
}(ExpressionContext));
export { TypeExpressionContext };
var UnionExpressionContext = /** @class */ (function (_super) {
    __extends(UnionExpressionContext, _super);
    function UnionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnionExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    UnionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionExpression) {
            listener.enterUnionExpression(this);
        }
    };
    // @Override
    UnionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionExpression) {
            listener.exitUnionExpression(this);
        }
    };
    // @Override
    UnionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionExpression) {
            return visitor.visitUnionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionExpressionContext;
}(ExpressionContext));
export { UnionExpressionContext };
var InequalityExpressionContext = /** @class */ (function (_super) {
    __extends(InequalityExpressionContext, _super);
    function InequalityExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InequalityExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    InequalityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInequalityExpression) {
            listener.enterInequalityExpression(this);
        }
    };
    // @Override
    InequalityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInequalityExpression) {
            listener.exitInequalityExpression(this);
        }
    };
    // @Override
    InequalityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInequalityExpression) {
            return visitor.visitInequalityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InequalityExpressionContext;
}(ExpressionContext));
export { InequalityExpressionContext };
var EqualityExpressionContext = /** @class */ (function (_super) {
    __extends(EqualityExpressionContext, _super);
    function EqualityExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EqualityExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityExpressionContext;
}(ExpressionContext));
export { EqualityExpressionContext };
var MembershipExpressionContext = /** @class */ (function (_super) {
    __extends(MembershipExpressionContext, _super);
    function MembershipExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MembershipExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    MembershipExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMembershipExpression) {
            listener.enterMembershipExpression(this);
        }
    };
    // @Override
    MembershipExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMembershipExpression) {
            listener.exitMembershipExpression(this);
        }
    };
    // @Override
    MembershipExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMembershipExpression) {
            return visitor.visitMembershipExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MembershipExpressionContext;
}(ExpressionContext));
export { MembershipExpressionContext };
var AndExpressionContext = /** @class */ (function (_super) {
    __extends(AndExpressionContext, _super);
    function AndExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AndExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    AndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAndExpression) {
            listener.enterAndExpression(this);
        }
    };
    // @Override
    AndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAndExpression) {
            listener.exitAndExpression(this);
        }
    };
    // @Override
    AndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AndExpressionContext;
}(ExpressionContext));
export { AndExpressionContext };
var OrExpressionContext = /** @class */ (function (_super) {
    __extends(OrExpressionContext, _super);
    function OrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OrExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    OrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterOrExpression) {
            listener.enterOrExpression(this);
        }
    };
    // @Override
    OrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitOrExpression) {
            listener.exitOrExpression(this);
        }
    };
    // @Override
    OrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrExpressionContext;
}(ExpressionContext));
export { OrExpressionContext };
var ImpliesExpressionContext = /** @class */ (function (_super) {
    __extends(ImpliesExpressionContext, _super);
    function ImpliesExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ImpliesExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    ImpliesExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterImpliesExpression) {
            listener.enterImpliesExpression(this);
        }
    };
    // @Override
    ImpliesExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitImpliesExpression) {
            listener.exitImpliesExpression(this);
        }
    };
    // @Override
    ImpliesExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitImpliesExpression) {
            return visitor.visitImpliesExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImpliesExpressionContext;
}(ExpressionContext));
export { ImpliesExpressionContext };
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_term; },
        enumerable: false,
        configurable: true
    });
    TermContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return TermContext;
}(ParserRuleContext));
export { TermContext };
var InvocationTermContext = /** @class */ (function (_super) {
    __extends(InvocationTermContext, _super);
    function InvocationTermContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InvocationTermContext.prototype.invocation = function () {
        return this.getRuleContext(0, InvocationContext);
    };
    // @Override
    InvocationTermContext.prototype.enterRule = function (listener) {
        if (listener.enterInvocationTerm) {
            listener.enterInvocationTerm(this);
        }
    };
    // @Override
    InvocationTermContext.prototype.exitRule = function (listener) {
        if (listener.exitInvocationTerm) {
            listener.exitInvocationTerm(this);
        }
    };
    // @Override
    InvocationTermContext.prototype.accept = function (visitor) {
        if (visitor.visitInvocationTerm) {
            return visitor.visitInvocationTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InvocationTermContext;
}(TermContext));
export { InvocationTermContext };
var LiteralTermContext = /** @class */ (function (_super) {
    __extends(LiteralTermContext, _super);
    function LiteralTermContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LiteralTermContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    // @Override
    LiteralTermContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralTerm) {
            listener.enterLiteralTerm(this);
        }
    };
    // @Override
    LiteralTermContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralTerm) {
            listener.exitLiteralTerm(this);
        }
    };
    // @Override
    LiteralTermContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralTerm) {
            return visitor.visitLiteralTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralTermContext;
}(TermContext));
export { LiteralTermContext };
var ExternalConstantTermContext = /** @class */ (function (_super) {
    __extends(ExternalConstantTermContext, _super);
    function ExternalConstantTermContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExternalConstantTermContext.prototype.externalConstant = function () {
        return this.getRuleContext(0, ExternalConstantContext);
    };
    // @Override
    ExternalConstantTermContext.prototype.enterRule = function (listener) {
        if (listener.enterExternalConstantTerm) {
            listener.enterExternalConstantTerm(this);
        }
    };
    // @Override
    ExternalConstantTermContext.prototype.exitRule = function (listener) {
        if (listener.exitExternalConstantTerm) {
            listener.exitExternalConstantTerm(this);
        }
    };
    // @Override
    ExternalConstantTermContext.prototype.accept = function (visitor) {
        if (visitor.visitExternalConstantTerm) {
            return visitor.visitExternalConstantTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExternalConstantTermContext;
}(TermContext));
export { ExternalConstantTermContext };
var ParenthesizedTermContext = /** @class */ (function (_super) {
    __extends(ParenthesizedTermContext, _super);
    function ParenthesizedTermContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesizedTermContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    ParenthesizedTermContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesizedTerm) {
            listener.enterParenthesizedTerm(this);
        }
    };
    // @Override
    ParenthesizedTermContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesizedTerm) {
            listener.exitParenthesizedTerm(this);
        }
    };
    // @Override
    ParenthesizedTermContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesizedTerm) {
            return visitor.visitParenthesizedTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesizedTermContext;
}(TermContext));
export { ParenthesizedTermContext };
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_literal; },
        enumerable: false,
        configurable: true
    });
    LiteralContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return LiteralContext;
}(ParserRuleContext));
export { LiteralContext };
var NullLiteralContext = /** @class */ (function (_super) {
    __extends(NullLiteralContext, _super);
    function NullLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    NullLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNullLiteral) {
            listener.enterNullLiteral(this);
        }
    };
    // @Override
    NullLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNullLiteral) {
            listener.exitNullLiteral(this);
        }
    };
    // @Override
    NullLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NullLiteralContext;
}(LiteralContext));
export { NullLiteralContext };
var BooleanLiteralContext = /** @class */ (function (_super) {
    __extends(BooleanLiteralContext, _super);
    function BooleanLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    BooleanLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanLiteralContext;
}(LiteralContext));
export { BooleanLiteralContext };
var StringLiteralContext = /** @class */ (function (_super) {
    __extends(StringLiteralContext, _super);
    function StringLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StringLiteralContext.prototype.STRING = function () { return this.getToken(FHIRPathParser.STRING, 0); };
    // @Override
    StringLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    };
    // @Override
    StringLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    };
    // @Override
    StringLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringLiteralContext;
}(LiteralContext));
export { StringLiteralContext };
var NumberLiteralContext = /** @class */ (function (_super) {
    __extends(NumberLiteralContext, _super);
    function NumberLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NumberLiteralContext.prototype.NUMBER = function () { return this.getToken(FHIRPathParser.NUMBER, 0); };
    // @Override
    NumberLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNumberLiteral) {
            listener.enterNumberLiteral(this);
        }
    };
    // @Override
    NumberLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNumberLiteral) {
            listener.exitNumberLiteral(this);
        }
    };
    // @Override
    NumberLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberLiteralContext;
}(LiteralContext));
export { NumberLiteralContext };
var DateTimeLiteralContext = /** @class */ (function (_super) {
    __extends(DateTimeLiteralContext, _super);
    function DateTimeLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DateTimeLiteralContext.prototype.DATETIME = function () { return this.getToken(FHIRPathParser.DATETIME, 0); };
    // @Override
    DateTimeLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterDateTimeLiteral) {
            listener.enterDateTimeLiteral(this);
        }
    };
    // @Override
    DateTimeLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitDateTimeLiteral) {
            listener.exitDateTimeLiteral(this);
        }
    };
    // @Override
    DateTimeLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitDateTimeLiteral) {
            return visitor.visitDateTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DateTimeLiteralContext;
}(LiteralContext));
export { DateTimeLiteralContext };
var TimeLiteralContext = /** @class */ (function (_super) {
    __extends(TimeLiteralContext, _super);
    function TimeLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TimeLiteralContext.prototype.TIME = function () { return this.getToken(FHIRPathParser.TIME, 0); };
    // @Override
    TimeLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterTimeLiteral) {
            listener.enterTimeLiteral(this);
        }
    };
    // @Override
    TimeLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitTimeLiteral) {
            listener.exitTimeLiteral(this);
        }
    };
    // @Override
    TimeLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitTimeLiteral) {
            return visitor.visitTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeLiteralContext;
}(LiteralContext));
export { TimeLiteralContext };
var QuantityLiteralContext = /** @class */ (function (_super) {
    __extends(QuantityLiteralContext, _super);
    function QuantityLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    QuantityLiteralContext.prototype.quantity = function () {
        return this.getRuleContext(0, QuantityContext);
    };
    // @Override
    QuantityLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterQuantityLiteral) {
            listener.enterQuantityLiteral(this);
        }
    };
    // @Override
    QuantityLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitQuantityLiteral) {
            listener.exitQuantityLiteral(this);
        }
    };
    // @Override
    QuantityLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitQuantityLiteral) {
            return visitor.visitQuantityLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuantityLiteralContext;
}(LiteralContext));
export { QuantityLiteralContext };
var ExternalConstantContext = /** @class */ (function (_super) {
    __extends(ExternalConstantContext, _super);
    function ExternalConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExternalConstantContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ExternalConstantContext.prototype.STRING = function () { return this.tryGetToken(FHIRPathParser.STRING, 0); };
    Object.defineProperty(ExternalConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_externalConstant; },
        enumerable: false,
        configurable: true
    });
    // @Override
    ExternalConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterExternalConstant) {
            listener.enterExternalConstant(this);
        }
    };
    // @Override
    ExternalConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitExternalConstant) {
            listener.exitExternalConstant(this);
        }
    };
    // @Override
    ExternalConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitExternalConstant) {
            return visitor.visitExternalConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExternalConstantContext;
}(ParserRuleContext));
export { ExternalConstantContext };
var InvocationContext = /** @class */ (function (_super) {
    __extends(InvocationContext, _super);
    function InvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(InvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_invocation; },
        enumerable: false,
        configurable: true
    });
    InvocationContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return InvocationContext;
}(ParserRuleContext));
export { InvocationContext };
var MemberInvocationContext = /** @class */ (function (_super) {
    __extends(MemberInvocationContext, _super);
    function MemberInvocationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MemberInvocationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    // @Override
    MemberInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberInvocation) {
            listener.enterMemberInvocation(this);
        }
    };
    // @Override
    MemberInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberInvocation) {
            listener.exitMemberInvocation(this);
        }
    };
    // @Override
    MemberInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberInvocation) {
            return visitor.visitMemberInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberInvocationContext;
}(InvocationContext));
export { MemberInvocationContext };
var FunctionInvocationContext = /** @class */ (function (_super) {
    __extends(FunctionInvocationContext, _super);
    function FunctionInvocationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionInvocationContext.prototype.function = function () {
        return this.getRuleContext(0, FunctionContext);
    };
    // @Override
    FunctionInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionInvocation) {
            listener.enterFunctionInvocation(this);
        }
    };
    // @Override
    FunctionInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionInvocation) {
            listener.exitFunctionInvocation(this);
        }
    };
    // @Override
    FunctionInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionInvocation) {
            return visitor.visitFunctionInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionInvocationContext;
}(InvocationContext));
export { FunctionInvocationContext };
var ThisInvocationContext = /** @class */ (function (_super) {
    __extends(ThisInvocationContext, _super);
    function ThisInvocationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    ThisInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterThisInvocation) {
            listener.enterThisInvocation(this);
        }
    };
    // @Override
    ThisInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitThisInvocation) {
            listener.exitThisInvocation(this);
        }
    };
    // @Override
    ThisInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitThisInvocation) {
            return visitor.visitThisInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThisInvocationContext;
}(InvocationContext));
export { ThisInvocationContext };
var IndexInvocationContext = /** @class */ (function (_super) {
    __extends(IndexInvocationContext, _super);
    function IndexInvocationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    IndexInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexInvocation) {
            listener.enterIndexInvocation(this);
        }
    };
    // @Override
    IndexInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexInvocation) {
            listener.exitIndexInvocation(this);
        }
    };
    // @Override
    IndexInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexInvocation) {
            return visitor.visitIndexInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexInvocationContext;
}(InvocationContext));
export { IndexInvocationContext };
var TotalInvocationContext = /** @class */ (function (_super) {
    __extends(TotalInvocationContext, _super);
    function TotalInvocationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    TotalInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterTotalInvocation) {
            listener.enterTotalInvocation(this);
        }
    };
    // @Override
    TotalInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitTotalInvocation) {
            listener.exitTotalInvocation(this);
        }
    };
    // @Override
    TotalInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitTotalInvocation) {
            return visitor.visitTotalInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TotalInvocationContext;
}(InvocationContext));
export { TotalInvocationContext };
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionContext.prototype.paramList = function () {
        return this.tryGetRuleContext(0, ParamListContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_function; },
        enumerable: false,
        configurable: true
    });
    // @Override
    FunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionContext;
}(ParserRuleContext));
export { FunctionContext };
var ParamListContext = /** @class */ (function (_super) {
    __extends(ParamListContext, _super);
    function ParamListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamListContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ParamListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_paramList; },
        enumerable: false,
        configurable: true
    });
    // @Override
    ParamListContext.prototype.enterRule = function (listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    };
    // @Override
    ParamListContext.prototype.exitRule = function (listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    };
    // @Override
    ParamListContext.prototype.accept = function (visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamListContext;
}(ParserRuleContext));
export { ParamListContext };
var QuantityContext = /** @class */ (function (_super) {
    __extends(QuantityContext, _super);
    function QuantityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuantityContext.prototype.NUMBER = function () { return this.getToken(FHIRPathParser.NUMBER, 0); };
    QuantityContext.prototype.unit = function () {
        return this.tryGetRuleContext(0, UnitContext);
    };
    Object.defineProperty(QuantityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_quantity; },
        enumerable: false,
        configurable: true
    });
    // @Override
    QuantityContext.prototype.enterRule = function (listener) {
        if (listener.enterQuantity) {
            listener.enterQuantity(this);
        }
    };
    // @Override
    QuantityContext.prototype.exitRule = function (listener) {
        if (listener.exitQuantity) {
            listener.exitQuantity(this);
        }
    };
    // @Override
    QuantityContext.prototype.accept = function (visitor) {
        if (visitor.visitQuantity) {
            return visitor.visitQuantity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuantityContext;
}(ParserRuleContext));
export { QuantityContext };
var UnitContext = /** @class */ (function (_super) {
    __extends(UnitContext, _super);
    function UnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnitContext.prototype.dateTimePrecision = function () {
        return this.tryGetRuleContext(0, DateTimePrecisionContext);
    };
    UnitContext.prototype.pluralDateTimePrecision = function () {
        return this.tryGetRuleContext(0, PluralDateTimePrecisionContext);
    };
    UnitContext.prototype.STRING = function () { return this.tryGetToken(FHIRPathParser.STRING, 0); };
    Object.defineProperty(UnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_unit; },
        enumerable: false,
        configurable: true
    });
    // @Override
    UnitContext.prototype.enterRule = function (listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    };
    // @Override
    UnitContext.prototype.exitRule = function (listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    };
    // @Override
    UnitContext.prototype.accept = function (visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnitContext;
}(ParserRuleContext));
export { UnitContext };
var DateTimePrecisionContext = /** @class */ (function (_super) {
    __extends(DateTimePrecisionContext, _super);
    function DateTimePrecisionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DateTimePrecisionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_dateTimePrecision; },
        enumerable: false,
        configurable: true
    });
    // @Override
    DateTimePrecisionContext.prototype.enterRule = function (listener) {
        if (listener.enterDateTimePrecision) {
            listener.enterDateTimePrecision(this);
        }
    };
    // @Override
    DateTimePrecisionContext.prototype.exitRule = function (listener) {
        if (listener.exitDateTimePrecision) {
            listener.exitDateTimePrecision(this);
        }
    };
    // @Override
    DateTimePrecisionContext.prototype.accept = function (visitor) {
        if (visitor.visitDateTimePrecision) {
            return visitor.visitDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DateTimePrecisionContext;
}(ParserRuleContext));
export { DateTimePrecisionContext };
var PluralDateTimePrecisionContext = /** @class */ (function (_super) {
    __extends(PluralDateTimePrecisionContext, _super);
    function PluralDateTimePrecisionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PluralDateTimePrecisionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_pluralDateTimePrecision; },
        enumerable: false,
        configurable: true
    });
    // @Override
    PluralDateTimePrecisionContext.prototype.enterRule = function (listener) {
        if (listener.enterPluralDateTimePrecision) {
            listener.enterPluralDateTimePrecision(this);
        }
    };
    // @Override
    PluralDateTimePrecisionContext.prototype.exitRule = function (listener) {
        if (listener.exitPluralDateTimePrecision) {
            listener.exitPluralDateTimePrecision(this);
        }
    };
    // @Override
    PluralDateTimePrecisionContext.prototype.accept = function (visitor) {
        if (visitor.visitPluralDateTimePrecision) {
            return visitor.visitPluralDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PluralDateTimePrecisionContext;
}(ParserRuleContext));
export { PluralDateTimePrecisionContext };
var TypeSpecifierContext = /** @class */ (function (_super) {
    __extends(TypeSpecifierContext, _super);
    function TypeSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSpecifierContext.prototype.qualifiedIdentifier = function () {
        return this.getRuleContext(0, QualifiedIdentifierContext);
    };
    Object.defineProperty(TypeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_typeSpecifier; },
        enumerable: false,
        configurable: true
    });
    // @Override
    TypeSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    };
    // @Override
    TypeSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    };
    // @Override
    TypeSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSpecifierContext;
}(ParserRuleContext));
export { TypeSpecifierContext };
var QualifiedIdentifierContext = /** @class */ (function (_super) {
    __extends(QualifiedIdentifierContext, _super);
    function QualifiedIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedIdentifierContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(QualifiedIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_qualifiedIdentifier; },
        enumerable: false,
        configurable: true
    });
    // @Override
    QualifiedIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedIdentifier) {
            listener.enterQualifiedIdentifier(this);
        }
    };
    // @Override
    QualifiedIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedIdentifier) {
            listener.exitQualifiedIdentifier(this);
        }
    };
    // @Override
    QualifiedIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedIdentifier) {
            return visitor.visitQualifiedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedIdentifierContext;
}(ParserRuleContext));
export { QualifiedIdentifierContext };
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.IDENTIFIER = function () { return this.tryGetToken(FHIRPathParser.IDENTIFIER, 0); };
    IdentifierContext.prototype.DELIMITEDIDENTIFIER = function () { return this.tryGetToken(FHIRPathParser.DELIMITEDIDENTIFIER, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FHIRPathParser.RULE_identifier; },
        enumerable: false,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext));
export { IdentifierContext };
//# sourceMappingURL=FHIRPathParser.js.map