// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplatePolicyClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use destination IP as client IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#client_ip_l3_dest Cgnv6TemplatePolicyClassList#client_ip_l3_dest}
  */
  readonly clientIpL3Dest?: number;
  /**
  * Use extract client IP address from L7 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#client_ip_l7_header Cgnv6TemplatePolicyClassList#client_ip_l7_header}
  */
  readonly clientIpL7Header?: number;
  /**
  * Specify L7 header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#header_name Cgnv6TemplatePolicyClassList#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#id Cgnv6TemplatePolicyClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Class list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#name Cgnv6TemplatePolicyClassList#name}
  */
  readonly name: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#policy_name Cgnv6TemplatePolicyClassList#policy_name}
  */
  readonly policyName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#uuid Cgnv6TemplatePolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#lid_list Cgnv6TemplatePolicyClassList#lid_list}
  */
  readonly lidList?: Cgnv6TemplatePolicyClassListLidListStructA[] | cdktf.IResolvable;
}
export interface Cgnv6TemplatePolicyClassListLidListDns64A {
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#disable Cgnv6TemplatePolicyClassList#disable}
  */
  readonly disable?: number;
  /**
  * Exclusive Answer in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#exclusive_answer Cgnv6TemplatePolicyClassList#exclusive_answer}
  */
  readonly exclusiveAnswer?: number;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#prefix Cgnv6TemplatePolicyClassList#prefix}
  */
  readonly prefix?: string;
}

export function cgnv6TemplatePolicyClassListLidListDns64AToTerraform(struct?: Cgnv6TemplatePolicyClassListLidListDns64AOutputReference | Cgnv6TemplatePolicyClassListLidListDns64A): any {
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


export function cgnv6TemplatePolicyClassListLidListDns64AToHclTerraform(struct?: Cgnv6TemplatePolicyClassListLidListDns64AOutputReference | Cgnv6TemplatePolicyClassListLidListDns64A): any {
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

export class Cgnv6TemplatePolicyClassListLidListDns64AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplatePolicyClassListLidListDns64A | undefined {
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

  public set internalValue(value: Cgnv6TemplatePolicyClassListLidListDns64A | undefined) {
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
export interface Cgnv6TemplatePolicyClassListLidListStructA {
  /**
  * 'forward': Forward the traffic even it exceeds limit; 'reset': Reset the connection when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#action_value Cgnv6TemplatePolicyClassList#action_value}
  */
  readonly actionValue?: string;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#conn_limit Cgnv6TemplatePolicyClassList#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#conn_per Cgnv6TemplatePolicyClassList#conn_per}
  */
  readonly connPer?: number;
  /**
  * Specify connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#conn_rate_limit Cgnv6TemplatePolicyClassList#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Specify log interval in minutes, by default system will log every over limit instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#interval Cgnv6TemplatePolicyClassList#interval}
  */
  readonly interval?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#lidnum Cgnv6TemplatePolicyClassList#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#lockout Cgnv6TemplatePolicyClassList#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#log Cgnv6TemplatePolicyClassList#log}
  */
  readonly log?: number;
  /**
  * Set action when exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#over_limit_action Cgnv6TemplatePolicyClassList#over_limit_action}
  */
  readonly overLimitAction?: number;
  /**
  * Request limit (Specify request limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#request_limit Cgnv6TemplatePolicyClassList#request_limit}
  */
  readonly requestLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#request_per Cgnv6TemplatePolicyClassList#request_per}
  */
  readonly requestPer?: number;
  /**
  * Request rate limit (Specify request rate limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#request_rate_limit Cgnv6TemplatePolicyClassList#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#user_tag Cgnv6TemplatePolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#uuid Cgnv6TemplatePolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#dns64 Cgnv6TemplatePolicyClassList#dns64}
  */
  readonly dns64?: Cgnv6TemplatePolicyClassListLidListDns64A;
}

export function cgnv6TemplatePolicyClassListLidListStructAToTerraform(struct?: Cgnv6TemplatePolicyClassListLidListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    conn_limit: cdktf.numberToTerraform(struct!.connLimit),
    conn_per: cdktf.numberToTerraform(struct!.connPer),
    conn_rate_limit: cdktf.numberToTerraform(struct!.connRateLimit),
    interval: cdktf.numberToTerraform(struct!.interval),
    lidnum: cdktf.numberToTerraform(struct!.lidnum),
    lockout: cdktf.numberToTerraform(struct!.lockout),
    log: cdktf.numberToTerraform(struct!.log),
    over_limit_action: cdktf.numberToTerraform(struct!.overLimitAction),
    request_limit: cdktf.numberToTerraform(struct!.requestLimit),
    request_per: cdktf.numberToTerraform(struct!.requestPer),
    request_rate_limit: cdktf.numberToTerraform(struct!.requestRateLimit),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns64: cgnv6TemplatePolicyClassListLidListDns64AToTerraform(struct!.dns64),
  }
}


export function cgnv6TemplatePolicyClassListLidListStructAToHclTerraform(struct?: Cgnv6TemplatePolicyClassListLidListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.connLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_per: {
      value: cdktf.numberToHclTerraform(struct!.connPer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lidnum: {
      value: cdktf.numberToHclTerraform(struct!.lidnum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout: {
      value: cdktf.numberToHclTerraform(struct!.lockout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_limit_action: {
      value: cdktf.numberToHclTerraform(struct!.overLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_limit: {
      value: cdktf.numberToHclTerraform(struct!.requestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_per: {
      value: cdktf.numberToHclTerraform(struct!.requestPer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.requestRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns64: {
      value: cgnv6TemplatePolicyClassListLidListDns64AToHclTerraform(struct!.dns64),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplatePolicyClassListLidListDns64AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplatePolicyClassListLidListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Cgnv6TemplatePolicyClassListLidListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._connLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connLimit = this._connLimit;
    }
    if (this._connPer !== undefined) {
      hasAnyValues = true;
      internalValueResult.connPer = this._connPer;
    }
    if (this._connRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimit = this._connRateLimit;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._lidnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidnum = this._lidnum;
    }
    if (this._lockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockout = this._lockout;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._overLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.overLimitAction = this._overLimitAction;
    }
    if (this._requestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLimit = this._requestLimit;
    }
    if (this._requestPer !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPer = this._requestPer;
    }
    if (this._requestRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRateLimit = this._requestRateLimit;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dns64?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns64 = this._dns64?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplatePolicyClassListLidListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionValue = undefined;
      this._connLimit = undefined;
      this._connPer = undefined;
      this._connRateLimit = undefined;
      this._interval = undefined;
      this._lidnum = undefined;
      this._lockout = undefined;
      this._log = undefined;
      this._overLimitAction = undefined;
      this._requestLimit = undefined;
      this._requestPer = undefined;
      this._requestRateLimit = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dns64.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionValue = value.actionValue;
      this._connLimit = value.connLimit;
      this._connPer = value.connPer;
      this._connRateLimit = value.connRateLimit;
      this._interval = value.interval;
      this._lidnum = value.lidnum;
      this._lockout = value.lockout;
      this._log = value.log;
      this._overLimitAction = value.overLimitAction;
      this._requestLimit = value.requestLimit;
      this._requestPer = value.requestPer;
      this._requestRateLimit = value.requestRateLimit;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dns64.internalValue = value.dns64;
    }
  }

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
  private _dns64 = new Cgnv6TemplatePolicyClassListLidListDns64AOutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: Cgnv6TemplatePolicyClassListLidListDns64A) {
    this._dns64.internalValue = value;
  }
  public resetDns64() {
    this._dns64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64Input() {
    return this._dns64.internalValue;
  }
}

export class Cgnv6TemplatePolicyClassListLidListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplatePolicyClassListLidListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Cgnv6TemplatePolicyClassListLidListStructAOutputReference {
    return new Cgnv6TemplatePolicyClassListLidListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list thunder_cgnv6_template_policy_class_list}
*/
export class Cgnv6TemplatePolicyClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_policy_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplatePolicyClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplatePolicyClassList to import
  * @param importFromId The id of the existing Cgnv6TemplatePolicyClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplatePolicyClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_policy_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_policy_class_list thunder_cgnv6_template_policy_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplatePolicyClassListConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplatePolicyClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_policy_class_list',
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
    this._clientIpL3Dest = config.clientIpL3Dest;
    this._clientIpL7Header = config.clientIpL7Header;
    this._headerName = config.headerName;
    this._id = config.id;
    this._name = config.name;
    this._policyName = config.policyName;
    this._uuid = config.uuid;
    this._lidList.internalValue = config.lidList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ip_l3_dest - computed: false, optional: true, required: false
  private _clientIpL3Dest?: number; 
  public get clientIpL3Dest() {
    return this.getNumberAttribute('client_ip_l3_dest');
  }
  public set clientIpL3Dest(value: number) {
    this._clientIpL3Dest = value;
  }
  public resetClientIpL3Dest() {
    this._clientIpL3Dest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpL3DestInput() {
    return this._clientIpL3Dest;
  }

  // client_ip_l7_header - computed: false, optional: true, required: false
  private _clientIpL7Header?: number; 
  public get clientIpL7Header() {
    return this.getNumberAttribute('client_ip_l7_header');
  }
  public set clientIpL7Header(value: number) {
    this._clientIpL7Header = value;
  }
  public resetClientIpL7Header() {
    this._clientIpL7Header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpL7HeaderInput() {
    return this._clientIpL7Header;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
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

  // lid_list - computed: false, optional: true, required: false
  private _lidList = new Cgnv6TemplatePolicyClassListLidListStructAList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: Cgnv6TemplatePolicyClassListLidListStructA[] | cdktf.IResolvable) {
    this._lidList.internalValue = value;
  }
  public resetLidList() {
    this._lidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidListInput() {
    return this._lidList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_ip_l3_dest: cdktf.numberToTerraform(this._clientIpL3Dest),
      client_ip_l7_header: cdktf.numberToTerraform(this._clientIpL7Header),
      header_name: cdktf.stringToTerraform(this._headerName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_name: cdktf.stringToTerraform(this._policyName),
      uuid: cdktf.stringToTerraform(this._uuid),
      lid_list: cdktf.listMapper(cgnv6TemplatePolicyClassListLidListStructAToTerraform, true)(this._lidList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ip_l3_dest: {
        value: cdktf.numberToHclTerraform(this._clientIpL3Dest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_ip_l7_header: {
        value: cdktf.numberToHclTerraform(this._clientIpL7Header),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
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
      lid_list: {
        value: cdktf.listMapperHcl(cgnv6TemplatePolicyClassListLidListStructAToHclTerraform, true)(this._lidList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplatePolicyClassListLidListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
