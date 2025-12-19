// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplatePolicyClassListLidConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'forward': Forward the traffic even it exceeds limit; 'reset': Reset the connection when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#action_value Cgnv6TemplatePolicyClassListLid#action_value}
  */
  readonly actionValue?: string;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#conn_limit Cgnv6TemplatePolicyClassListLid#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#conn_per Cgnv6TemplatePolicyClassListLid#conn_per}
  */
  readonly connPer?: number;
  /**
  * Specify connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#conn_rate_limit Cgnv6TemplatePolicyClassListLid#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#id Cgnv6TemplatePolicyClassListLid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify log interval in minutes, by default system will log every over limit instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#interval Cgnv6TemplatePolicyClassListLid#interval}
  */
  readonly interval?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#lidnum Cgnv6TemplatePolicyClassListLid#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#lockout Cgnv6TemplatePolicyClassListLid#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#log Cgnv6TemplatePolicyClassListLid#log}
  */
  readonly log?: number;
  /**
  * Set action when exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#over_limit_action Cgnv6TemplatePolicyClassListLid#over_limit_action}
  */
  readonly overLimitAction?: number;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#policy_name Cgnv6TemplatePolicyClassListLid#policy_name}
  */
  readonly policyName: string;
  /**
  * Request limit (Specify request limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#request_limit Cgnv6TemplatePolicyClassListLid#request_limit}
  */
  readonly requestLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#request_per Cgnv6TemplatePolicyClassListLid#request_per}
  */
  readonly requestPer?: number;
  /**
  * Request rate limit (Specify request rate limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#request_rate_limit Cgnv6TemplatePolicyClassListLid#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#user_tag Cgnv6TemplatePolicyClassListLid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#uuid Cgnv6TemplatePolicyClassListLid#uuid}
  */
  readonly uuid?: string;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#dns64 Cgnv6TemplatePolicyClassListLid#dns64}
  */
  readonly dns64?: Cgnv6TemplatePolicyClassListLidDns64;
}
export interface Cgnv6TemplatePolicyClassListLidDns64 {
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#disable Cgnv6TemplatePolicyClassListLid#disable}
  */
  readonly disable?: number;
  /**
  * Exclusive Answer in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#exclusive_answer Cgnv6TemplatePolicyClassListLid#exclusive_answer}
  */
  readonly exclusiveAnswer?: number;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#prefix Cgnv6TemplatePolicyClassListLid#prefix}
  */
  readonly prefix?: string;
}

export function cgnv6TemplatePolicyClassListLidDns64ToTerraform(struct?: Cgnv6TemplatePolicyClassListLidDns64OutputReference | Cgnv6TemplatePolicyClassListLidDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    exclusive_answer: cdktf.numberToTerraform(struct!.exclusiveAnswer),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function cgnv6TemplatePolicyClassListLidDns64ToHclTerraform(struct?: Cgnv6TemplatePolicyClassListLidDns64OutputReference | Cgnv6TemplatePolicyClassListLidDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclusive_answer: {
      value: cdktf.numberToHclTerraform(struct!.exclusiveAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplatePolicyClassListLidDns64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplatePolicyClassListLidDns64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._exclusiveAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveAnswer = this._exclusiveAnswer;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplatePolicyClassListLidDns64 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._exclusiveAnswer = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._exclusiveAnswer = value.exclusiveAnswer;
      this._prefix = value.prefix;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // exclusive_answer - computed: false, optional: true, required: false
  private _exclusiveAnswer?: number; 
  public get exclusiveAnswer() {
    return this.getNumberAttribute('exclusive_answer');
  }
  public set exclusiveAnswer(value: number) {
    this._exclusiveAnswer = value;
  }
  public resetExclusiveAnswer() {
    this._exclusiveAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveAnswerInput() {
    return this._exclusiveAnswer;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid thunder_cgnv6_template_policy_class_list_lid}
*/
export class Cgnv6TemplatePolicyClassListLid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_policy_class_list_lid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplatePolicyClassListLid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplatePolicyClassListLid to import
  * @param importFromId The id of the existing Cgnv6TemplatePolicyClassListLid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplatePolicyClassListLid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_policy_class_list_lid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list_lid thunder_cgnv6_template_policy_class_list_lid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplatePolicyClassListLidConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplatePolicyClassListLidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_policy_class_list_lid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionValue = config.actionValue;
    this._connLimit = config.connLimit;
    this._connPer = config.connPer;
    this._connRateLimit = config.connRateLimit;
    this._id = config.id;
    this._interval = config.interval;
    this._lidnum = config.lidnum;
    this._lockout = config.lockout;
    this._log = config.log;
    this._overLimitAction = config.overLimitAction;
    this._policyName = config.policyName;
    this._requestLimit = config.requestLimit;
    this._requestPer = config.requestPer;
    this._requestRateLimit = config.requestRateLimit;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dns64.internalValue = config.dns64;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // conn_per - computed: false, optional: true, required: false
  private _connPer?: number; 
  public get connPer() {
    return this.getNumberAttribute('conn_per');
  }
  public set connPer(value: number) {
    this._connPer = value;
  }
  public resetConnPer() {
    this._connPer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connPerInput() {
    return this._connPer;
  }

  // conn_rate_limit - computed: false, optional: true, required: false
  private _connRateLimit?: number; 
  public get connRateLimit() {
    return this.getNumberAttribute('conn_rate_limit');
  }
  public set connRateLimit(value: number) {
    this._connRateLimit = value;
  }
  public resetConnRateLimit() {
    this._connRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitInput() {
    return this._connRateLimit;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // lidnum - computed: false, optional: false, required: true
  private _lidnum?: number; 
  public get lidnum() {
    return this.getNumberAttribute('lidnum');
  }
  public set lidnum(value: number) {
    this._lidnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidnumInput() {
    return this._lidnum;
  }

  // lockout - computed: false, optional: true, required: false
  private _lockout?: number; 
  public get lockout() {
    return this.getNumberAttribute('lockout');
  }
  public set lockout(value: number) {
    this._lockout = value;
  }
  public resetLockout() {
    this._lockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // over_limit_action - computed: false, optional: true, required: false
  private _overLimitAction?: number; 
  public get overLimitAction() {
    return this.getNumberAttribute('over_limit_action');
  }
  public set overLimitAction(value: number) {
    this._overLimitAction = value;
  }
  public resetOverLimitAction() {
    this._overLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitActionInput() {
    return this._overLimitAction;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // request_limit - computed: false, optional: true, required: false
  private _requestLimit?: number; 
  public get requestLimit() {
    return this.getNumberAttribute('request_limit');
  }
  public set requestLimit(value: number) {
    this._requestLimit = value;
  }
  public resetRequestLimit() {
    this._requestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLimitInput() {
    return this._requestLimit;
  }

  // request_per - computed: false, optional: true, required: false
  private _requestPer?: number; 
  public get requestPer() {
    return this.getNumberAttribute('request_per');
  }
  public set requestPer(value: number) {
    this._requestPer = value;
  }
  public resetRequestPer() {
    this._requestPer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPerInput() {
    return this._requestPer;
  }

  // request_rate_limit - computed: false, optional: true, required: false
  private _requestRateLimit?: number; 
  public get requestRateLimit() {
    return this.getNumberAttribute('request_rate_limit');
  }
  public set requestRateLimit(value: number) {
    this._requestRateLimit = value;
  }
  public resetRequestRateLimit() {
    this._requestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateLimitInput() {
    return this._requestRateLimit;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dns64 - computed: false, optional: true, required: false
  private _dns64 = new Cgnv6TemplatePolicyClassListLidDns64OutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: Cgnv6TemplatePolicyClassListLidDns64) {
    this._dns64.internalValue = value;
  }
  public resetDns64() {
    this._dns64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64Input() {
    return this._dns64.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_value: cdktf.stringToTerraform(this._actionValue),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_per: cdktf.numberToTerraform(this._connPer),
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      lidnum: cdktf.numberToTerraform(this._lidnum),
      lockout: cdktf.numberToTerraform(this._lockout),
      log: cdktf.numberToTerraform(this._log),
      over_limit_action: cdktf.numberToTerraform(this._overLimitAction),
      policy_name: cdktf.stringToTerraform(this._policyName),
      request_limit: cdktf.numberToTerraform(this._requestLimit),
      request_per: cdktf.numberToTerraform(this._requestPer),
      request_rate_limit: cdktf.numberToTerraform(this._requestRateLimit),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns64: cgnv6TemplatePolicyClassListLidDns64ToTerraform(this._dns64.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_value: {
        value: cdktf.stringToHclTerraform(this._actionValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_per: {
        value: cdktf.numberToHclTerraform(this._connPer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit: {
        value: cdktf.numberToHclTerraform(this._connRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lidnum: {
        value: cdktf.numberToHclTerraform(this._lidnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lockout: {
        value: cdktf.numberToHclTerraform(this._lockout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      over_limit_action: {
        value: cdktf.numberToHclTerraform(this._overLimitAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_limit: {
        value: cdktf.numberToHclTerraform(this._requestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_per: {
        value: cdktf.numberToHclTerraform(this._requestPer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_rate_limit: {
        value: cdktf.numberToHclTerraform(this._requestRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns64: {
        value: cgnv6TemplatePolicyClassListLidDns64ToHclTerraform(this._dns64.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplatePolicyClassListLidDns64List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
