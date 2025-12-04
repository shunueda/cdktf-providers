// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafCcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule Action, 20 means observation, 21 means human-machine identification, 22 means interception, 23 means precise interception, 26 means precise human-machine identification, and 27 means JS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#action_type WafCc#action_type}
  */
  readonly actionType: string;
  /**
  * Advanced mode (whether to use session detection). 0(disabled) 1(enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#advance WafCc#advance}
  */
  readonly advance: string;
  /**
  * Cel expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#cel_rule WafCc#cel_rule}
  */
  readonly celRule?: string;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#domain WafCc#domain}
  */
  readonly domain: string;
  /**
  * WAF edition. clb-waf means clb-waf, sparta-waf means saas-waf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#edition WafCc#edition}
  */
  readonly edition: string;
  /**
  * Event ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#event_id WafCc#event_id}
  */
  readonly eventId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#id WafCc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CC detection cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#interval WafCc#interval}
  */
  readonly interval: string;
  /**
  * CC detection threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#limit WafCc#limit}
  */
  readonly limit: string;
  /**
  * Frequency limiting method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#limit_method WafCc#limit_method}
  */
  readonly limitMethod?: string;
  /**
  * Logical operator of configuration mode, and/or.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#logical_op WafCc#logical_op}
  */
  readonly logicalOp?: string;
  /**
  * Match method, 0(equal), 1(prefix), 2(contains), 3(not equal), 6(suffix), 7(not contains).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#match_func WafCc#match_func}
  */
  readonly matchFunc: number;
  /**
  * Rule Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#name WafCc#name}
  */
  readonly name: string;
  /**
  * CC matching conditions JSON serialized string, example: [{"key":"Method","args":["=R0VU"],"match":"0","encodeflag":true}] 
  * 
  * 				Available key values: Method, Post, Referer, Cookie, User-Agent, CustomHeader, CaptchaRisk, CaptchaDeviceRisk, CaptchaScore
  * 
  * 				Available match values:
  * 				- When Key is Method: 0 (equal to), 3 (not equal to)
  * 				- When Key is Post: 0 (equal to), 3 (not equal to)
  * 				- When Key is Cookie: 0 (equal to), 2 (contains), 3 (not equal to), 7 (does not contain)
  * 				- When Key is Referer: 0 (equal to), 3 (not equal to), 1 (prefix match), 6 (suffix match), 2 (contains), 7 (does not contain), 12 (exists), 5 (does not exist), 4 (content is empty)
  * 				- When Key is Cookie: 0 (equal to), 3 (not equal to), 2 (contains), 7 (does not contain), 12 (exists), 5 (does not exist), 4 (content is empty)
  * 				- When Key is User-Agent: 0 (equal to), 3 (not equal to), 1 (prefix match), 6 (suffix match), 2 (contains), 7 (does not contain), 12 (exists), 5 (does not exist), 4 (content is empty)
  * 				- When Key is CustomHeader: 0 (equal to), 3 (not equal to), 2 (contains), 7 (does not contain), 12 (exists), 5 (does not exist), 4 (content is empty)
  * 				- When Key is IPLocation: 13 (belongs to), 14 (does not belong to)
  * 				- When Key is CaptchaRisk: 0 (equal to), 3 (not equal to), 13 (belongs to), 14 (does not belong to), 12 (exists), 5 (does not exist)
  * 				- When Key is CaptchaDeviceRisk: 0 (equal to), 3 (not equal to), 13 (belongs to), 14 (does not belong to), 12 (exists), 5 (does not exist)
  * 				- When Key is CaptchaScore: 15 (numerically equal to), 16 (numerically not equal to), 17 (numerically greater than), 18 (numerically less than), 19 (numerically greater than or equal to), 20 (numerically less than or equal to), 12 (exists), 5 (does not exist)
  * 
  * 				The args parameter represents matching content and requires encodeflag to be set to true. When Key is Post, Cookie, or CustomHeader, use equals sign = to concatenate Key and Value separately, and encode both with Base64, similar to YWJj=YWJj. When Key is Referer or User-Agent, use equals sign = to concatenate Value, similar to =YWJj.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#options_arr WafCc#options_arr}
  */
  readonly optionsArr?: string;
  /**
  * Rule Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#priority WafCc#priority}
  */
  readonly priority: number;
  /**
  * Session ID that needs to be enabled for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#session_applied WafCc#session_applied}
  */
  readonly sessionApplied?: number[];
  /**
  * Rule Status, 0 rule close, 1 rule open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#status WafCc#status}
  */
  readonly status: number;
  /**
  * Operate Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#type WafCc#type}
  */
  readonly type?: number;
  /**
  * Detection URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#url WafCc#url}
  */
  readonly url: string;
  /**
  * Action ValidTime, minute unit. Min: 60, Max: 604800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#valid_time WafCc#valid_time}
  */
  readonly validTime: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc tencentcloud_waf_cc}
*/
export class WafCc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_cc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafCc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafCc to import
  * @param importFromId The id of the existing WafCc that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafCc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_cc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/waf_cc tencentcloud_waf_cc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafCcConfig
  */
  public constructor(scope: Construct, id: string, config: WafCcConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_cc',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._advance = config.advance;
    this._celRule = config.celRule;
    this._domain = config.domain;
    this._edition = config.edition;
    this._eventId = config.eventId;
    this._id = config.id;
    this._interval = config.interval;
    this._limit = config.limit;
    this._limitMethod = config.limitMethod;
    this._logicalOp = config.logicalOp;
    this._matchFunc = config.matchFunc;
    this._name = config.name;
    this._optionsArr = config.optionsArr;
    this._priority = config.priority;
    this._sessionApplied = config.sessionApplied;
    this._status = config.status;
    this._type = config.type;
    this._url = config.url;
    this._validTime = config.validTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // advance - computed: false, optional: false, required: true
  private _advance?: string; 
  public get advance() {
    return this.getStringAttribute('advance');
  }
  public set advance(value: string) {
    this._advance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advanceInput() {
    return this._advance;
  }

  // cel_rule - computed: false, optional: true, required: false
  private _celRule?: string; 
  public get celRule() {
    return this.getStringAttribute('cel_rule');
  }
  public set celRule(value: string) {
    this._celRule = value;
  }
  public resetCelRule() {
    this._celRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celRuleInput() {
    return this._celRule;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // edition - computed: false, optional: false, required: true
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // event_id - computed: false, optional: true, required: false
  private _eventId?: string; 
  public get eventId() {
    return this.getStringAttribute('event_id');
  }
  public set eventId(value: string) {
    this._eventId = value;
  }
  public resetEventId() {
    this._eventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdInput() {
    return this._eventId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_method - computed: true, optional: true, required: false
  private _limitMethod?: string; 
  public get limitMethod() {
    return this.getStringAttribute('limit_method');
  }
  public set limitMethod(value: string) {
    this._limitMethod = value;
  }
  public resetLimitMethod() {
    this._limitMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMethodInput() {
    return this._limitMethod;
  }

  // logical_op - computed: true, optional: true, required: false
  private _logicalOp?: string; 
  public get logicalOp() {
    return this.getStringAttribute('logical_op');
  }
  public set logicalOp(value: string) {
    this._logicalOp = value;
  }
  public resetLogicalOp() {
    this._logicalOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOpInput() {
    return this._logicalOp;
  }

  // match_func - computed: false, optional: false, required: true
  private _matchFunc?: number; 
  public get matchFunc() {
    return this.getNumberAttribute('match_func');
  }
  public set matchFunc(value: number) {
    this._matchFunc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFuncInput() {
    return this._matchFunc;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // options_arr - computed: false, optional: true, required: false
  private _optionsArr?: string; 
  public get optionsArr() {
    return this.getStringAttribute('options_arr');
  }
  public set optionsArr(value: string) {
    this._optionsArr = value;
  }
  public resetOptionsArr() {
    this._optionsArr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsArrInput() {
    return this._optionsArr;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // session_applied - computed: false, optional: true, required: false
  private _sessionApplied?: number[]; 
  public get sessionApplied() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('session_applied')));
  }
  public set sessionApplied(value: number[]) {
    this._sessionApplied = value;
  }
  public resetSessionApplied() {
    this._sessionApplied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAppliedInput() {
    return this._sessionApplied;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // valid_time - computed: false, optional: false, required: true
  private _validTime?: number; 
  public get validTime() {
    return this.getNumberAttribute('valid_time');
  }
  public set validTime(value: number) {
    this._validTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validTimeInput() {
    return this._validTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.stringToTerraform(this._actionType),
      advance: cdktf.stringToTerraform(this._advance),
      cel_rule: cdktf.stringToTerraform(this._celRule),
      domain: cdktf.stringToTerraform(this._domain),
      edition: cdktf.stringToTerraform(this._edition),
      event_id: cdktf.stringToTerraform(this._eventId),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      limit: cdktf.stringToTerraform(this._limit),
      limit_method: cdktf.stringToTerraform(this._limitMethod),
      logical_op: cdktf.stringToTerraform(this._logicalOp),
      match_func: cdktf.numberToTerraform(this._matchFunc),
      name: cdktf.stringToTerraform(this._name),
      options_arr: cdktf.stringToTerraform(this._optionsArr),
      priority: cdktf.numberToTerraform(this._priority),
      session_applied: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sessionApplied),
      status: cdktf.numberToTerraform(this._status),
      type: cdktf.numberToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      valid_time: cdktf.numberToTerraform(this._validTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advance: {
        value: cdktf.stringToHclTerraform(this._advance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cel_rule: {
        value: cdktf.stringToHclTerraform(this._celRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_id: {
        value: cdktf.stringToHclTerraform(this._eventId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.stringToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_method: {
        value: cdktf.stringToHclTerraform(this._limitMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_op: {
        value: cdktf.stringToHclTerraform(this._logicalOp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_func: {
        value: cdktf.numberToHclTerraform(this._matchFunc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options_arr: {
        value: cdktf.stringToHclTerraform(this._optionsArr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_applied: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sessionApplied),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_time: {
        value: cdktf.numberToHclTerraform(this._validTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
