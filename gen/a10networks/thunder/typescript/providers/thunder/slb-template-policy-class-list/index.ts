// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use destination IP as client IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#client_ip_l3_dest SlbTemplatePolicyClassList#client_ip_l3_dest}
  */
  readonly clientIpL3Dest?: number;
  /**
  * Use extract client IP address from L7 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#client_ip_l7_header SlbTemplatePolicyClassList#client_ip_l7_header}
  */
  readonly clientIpL7Header?: number;
  /**
  * Specify L7 header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#header_name SlbTemplatePolicyClassList#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#id SlbTemplatePolicyClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Class list name or geo-location-class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#name SlbTemplatePolicyClassList#name}
  */
  readonly name: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#policy_name SlbTemplatePolicyClassList#policy_name}
  */
  readonly policyName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#uuid SlbTemplatePolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#lid_list SlbTemplatePolicyClassList#lid_list}
  */
  readonly lidList?: SlbTemplatePolicyClassListLidListStructA[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyClassListLidListDns64A {
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#disable SlbTemplatePolicyClassList#disable}
  */
  readonly disable?: number;
  /**
  * Exclusive Answer in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#exclusive_answer SlbTemplatePolicyClassList#exclusive_answer}
  */
  readonly exclusiveAnswer?: number;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#prefix SlbTemplatePolicyClassList#prefix}
  */
  readonly prefix?: string;
}

export function slbTemplatePolicyClassListLidListDns64AToTerraform(struct?: SlbTemplatePolicyClassListLidListDns64AOutputReference | SlbTemplatePolicyClassListLidListDns64A): any {
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


export function slbTemplatePolicyClassListLidListDns64AToHclTerraform(struct?: SlbTemplatePolicyClassListLidListDns64AOutputReference | SlbTemplatePolicyClassListLidListDns64A): any {
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

export class SlbTemplatePolicyClassListLidListDns64AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyClassListLidListDns64A | undefined {
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

  public set internalValue(value: SlbTemplatePolicyClassListLidListDns64A | undefined) {
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
export interface SlbTemplatePolicyClassListLidListResponseCodeRateLimitA {
  /**
  * server response code range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#code_range_end SlbTemplatePolicyClassList#code_range_end}
  */
  readonly codeRangeEnd?: number;
  /**
  * server response code range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#code_range_start SlbTemplatePolicyClassList#code_range_start}
  */
  readonly codeRangeStart?: number;
  /**
  * seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#period SlbTemplatePolicyClassList#period}
  */
  readonly period?: number;
  /**
  * the times of getting the response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#threshold SlbTemplatePolicyClassList#threshold}
  */
  readonly threshold?: number;
}

export function slbTemplatePolicyClassListLidListResponseCodeRateLimitAToTerraform(struct?: SlbTemplatePolicyClassListLidListResponseCodeRateLimitA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_range_end: cdktf.numberToTerraform(struct!.codeRangeEnd),
    code_range_start: cdktf.numberToTerraform(struct!.codeRangeStart),
    period: cdktf.numberToTerraform(struct!.period),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function slbTemplatePolicyClassListLidListResponseCodeRateLimitAToHclTerraform(struct?: SlbTemplatePolicyClassListLidListResponseCodeRateLimitA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_range_end: {
      value: cdktf.numberToHclTerraform(struct!.codeRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_range_start: {
      value: cdktf.numberToHclTerraform(struct!.codeRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyClassListLidListResponseCodeRateLimitAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyClassListLidListResponseCodeRateLimitA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRangeEnd = this._codeRangeEnd;
    }
    if (this._codeRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRangeStart = this._codeRangeStart;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyClassListLidListResponseCodeRateLimitA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeRangeEnd = undefined;
      this._codeRangeStart = undefined;
      this._period = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeRangeEnd = value.codeRangeEnd;
      this._codeRangeStart = value.codeRangeStart;
      this._period = value.period;
      this._threshold = value.threshold;
    }
  }

  // code_range_end - computed: false, optional: true, required: false
  private _codeRangeEnd?: number; 
  public get codeRangeEnd() {
    return this.getNumberAttribute('code_range_end');
  }
  public set codeRangeEnd(value: number) {
    this._codeRangeEnd = value;
  }
  public resetCodeRangeEnd() {
    this._codeRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRangeEndInput() {
    return this._codeRangeEnd;
  }

  // code_range_start - computed: false, optional: true, required: false
  private _codeRangeStart?: number; 
  public get codeRangeStart() {
    return this.getNumberAttribute('code_range_start');
  }
  public set codeRangeStart(value: number) {
    this._codeRangeStart = value;
  }
  public resetCodeRangeStart() {
    this._codeRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRangeStartInput() {
    return this._codeRangeStart;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class SlbTemplatePolicyClassListLidListResponseCodeRateLimitAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyClassListLidListResponseCodeRateLimitA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyClassListLidListResponseCodeRateLimitAOutputReference {
    return new SlbTemplatePolicyClassListLidListResponseCodeRateLimitAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyClassListLidListStructA {
  /**
  * 'forward': Forward the traffic even it exceeds limit; 'reset': Reset the connection when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#action_value SlbTemplatePolicyClassList#action_value}
  */
  readonly actionValue?: string;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#bw_per SlbTemplatePolicyClassList#bw_per}
  */
  readonly bwPer?: number;
  /**
  * Specify bandwidth rate limit (Bandwidth rate limit in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#bw_rate_limit SlbTemplatePolicyClassList#bw_rate_limit}
  */
  readonly bwRateLimit?: number;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#conn_limit SlbTemplatePolicyClassList#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#conn_per SlbTemplatePolicyClassList#conn_per}
  */
  readonly connPer?: number;
  /**
  * Specify connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#conn_rate_limit SlbTemplatePolicyClassList#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Set action when match the lid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_action SlbTemplatePolicyClassList#direct_action}
  */
  readonly directAction?: number;
  /**
  * Specify logging interval in minute (default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_action_interval SlbTemplatePolicyClassList#direct_action_interval}
  */
  readonly directActionInterval?: number;
  /**
  * 'drop': drop the packet; 'reset': Send reset back;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_action_value SlbTemplatePolicyClassList#direct_action_value}
  */
  readonly directActionValue?: string;
  /**
  * Only log unsuccessful connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_fail SlbTemplatePolicyClassList#direct_fail}
  */
  readonly directFail?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_logging_drp_rst SlbTemplatePolicyClassList#direct_logging_drp_rst}
  */
  readonly directLoggingDrpRst?: number;
  /**
  * Specify logging interval in minutes(default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_pbslb_interval SlbTemplatePolicyClassList#direct_pbslb_interval}
  */
  readonly directPbslbInterval?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_pbslb_logging SlbTemplatePolicyClassList#direct_pbslb_logging}
  */
  readonly directPbslbLogging?: number;
  /**
  * Specify a service group (Specify the service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#direct_service_group SlbTemplatePolicyClassList#direct_service_group}
  */
  readonly directServiceGroup?: string;
  /**
  * Specify log interval in minutes, by default system will log every over limit instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#interval SlbTemplatePolicyClassList#interval}
  */
  readonly interval?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#lidnum SlbTemplatePolicyClassList#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#lockout SlbTemplatePolicyClassList#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#log SlbTemplatePolicyClassList#log}
  */
  readonly log?: number;
  /**
  * Set action when exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#over_limit_action SlbTemplatePolicyClassList#over_limit_action}
  */
  readonly overLimitAction?: number;
  /**
  * Request limit (Specify request limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#request_limit SlbTemplatePolicyClassList#request_limit}
  */
  readonly requestLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#request_per SlbTemplatePolicyClassList#request_per}
  */
  readonly requestPer?: number;
  /**
  * Request rate limit (Specify request rate limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#request_rate_limit SlbTemplatePolicyClassList#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#user_tag SlbTemplatePolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#uuid SlbTemplatePolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#dns64 SlbTemplatePolicyClassList#dns64}
  */
  readonly dns64?: SlbTemplatePolicyClassListLidListDns64A;
  /**
  * response_code_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#response_code_rate_limit SlbTemplatePolicyClassList#response_code_rate_limit}
  */
  readonly responseCodeRateLimit?: SlbTemplatePolicyClassListLidListResponseCodeRateLimitA[] | cdktf.IResolvable;
}

export function slbTemplatePolicyClassListLidListStructAToTerraform(struct?: SlbTemplatePolicyClassListLidListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    bw_per: cdktf.numberToTerraform(struct!.bwPer),
    bw_rate_limit: cdktf.numberToTerraform(struct!.bwRateLimit),
    conn_limit: cdktf.numberToTerraform(struct!.connLimit),
    conn_per: cdktf.numberToTerraform(struct!.connPer),
    conn_rate_limit: cdktf.numberToTerraform(struct!.connRateLimit),
    direct_action: cdktf.numberToTerraform(struct!.directAction),
    direct_action_interval: cdktf.numberToTerraform(struct!.directActionInterval),
    direct_action_value: cdktf.stringToTerraform(struct!.directActionValue),
    direct_fail: cdktf.numberToTerraform(struct!.directFail),
    direct_logging_drp_rst: cdktf.numberToTerraform(struct!.directLoggingDrpRst),
    direct_pbslb_interval: cdktf.numberToTerraform(struct!.directPbslbInterval),
    direct_pbslb_logging: cdktf.numberToTerraform(struct!.directPbslbLogging),
    direct_service_group: cdktf.stringToTerraform(struct!.directServiceGroup),
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
    dns64: slbTemplatePolicyClassListLidListDns64AToTerraform(struct!.dns64),
    response_code_rate_limit: cdktf.listMapper(slbTemplatePolicyClassListLidListResponseCodeRateLimitAToTerraform, true)(struct!.responseCodeRateLimit),
  }
}


export function slbTemplatePolicyClassListLidListStructAToHclTerraform(struct?: SlbTemplatePolicyClassListLidListStructA | cdktf.IResolvable): any {
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
    bw_per: {
      value: cdktf.numberToHclTerraform(struct!.bwPer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.bwRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    direct_action: {
      value: cdktf.numberToHclTerraform(struct!.directAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_action_interval: {
      value: cdktf.numberToHclTerraform(struct!.directActionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_action_value: {
      value: cdktf.stringToHclTerraform(struct!.directActionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_fail: {
      value: cdktf.numberToHclTerraform(struct!.directFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_logging_drp_rst: {
      value: cdktf.numberToHclTerraform(struct!.directLoggingDrpRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_pbslb_interval: {
      value: cdktf.numberToHclTerraform(struct!.directPbslbInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_pbslb_logging: {
      value: cdktf.numberToHclTerraform(struct!.directPbslbLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_service_group: {
      value: cdktf.stringToHclTerraform(struct!.directServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: slbTemplatePolicyClassListLidListDns64AToHclTerraform(struct!.dns64),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyClassListLidListDns64AList",
    },
    response_code_rate_limit: {
      value: cdktf.listMapperHcl(slbTemplatePolicyClassListLidListResponseCodeRateLimitAToHclTerraform, true)(struct!.responseCodeRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyClassListLidListResponseCodeRateLimitAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyClassListLidListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyClassListLidListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._bwPer !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwPer = this._bwPer;
    }
    if (this._bwRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwRateLimit = this._bwRateLimit;
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
    if (this._directAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.directAction = this._directAction;
    }
    if (this._directActionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.directActionInterval = this._directActionInterval;
    }
    if (this._directActionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directActionValue = this._directActionValue;
    }
    if (this._directFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.directFail = this._directFail;
    }
    if (this._directLoggingDrpRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.directLoggingDrpRst = this._directLoggingDrpRst;
    }
    if (this._directPbslbInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.directPbslbInterval = this._directPbslbInterval;
    }
    if (this._directPbslbLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.directPbslbLogging = this._directPbslbLogging;
    }
    if (this._directServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.directServiceGroup = this._directServiceGroup;
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
    if (this._responseCodeRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodeRateLimit = this._responseCodeRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyClassListLidListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionValue = undefined;
      this._bwPer = undefined;
      this._bwRateLimit = undefined;
      this._connLimit = undefined;
      this._connPer = undefined;
      this._connRateLimit = undefined;
      this._directAction = undefined;
      this._directActionInterval = undefined;
      this._directActionValue = undefined;
      this._directFail = undefined;
      this._directLoggingDrpRst = undefined;
      this._directPbslbInterval = undefined;
      this._directPbslbLogging = undefined;
      this._directServiceGroup = undefined;
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
      this._responseCodeRateLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionValue = value.actionValue;
      this._bwPer = value.bwPer;
      this._bwRateLimit = value.bwRateLimit;
      this._connLimit = value.connLimit;
      this._connPer = value.connPer;
      this._connRateLimit = value.connRateLimit;
      this._directAction = value.directAction;
      this._directActionInterval = value.directActionInterval;
      this._directActionValue = value.directActionValue;
      this._directFail = value.directFail;
      this._directLoggingDrpRst = value.directLoggingDrpRst;
      this._directPbslbInterval = value.directPbslbInterval;
      this._directPbslbLogging = value.directPbslbLogging;
      this._directServiceGroup = value.directServiceGroup;
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
      this._responseCodeRateLimit.internalValue = value.responseCodeRateLimit;
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

  // bw_per - computed: false, optional: true, required: false
  private _bwPer?: number; 
  public get bwPer() {
    return this.getNumberAttribute('bw_per');
  }
  public set bwPer(value: number) {
    this._bwPer = value;
  }
  public resetBwPer() {
    this._bwPer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwPerInput() {
    return this._bwPer;
  }

  // bw_rate_limit - computed: false, optional: true, required: false
  private _bwRateLimit?: number; 
  public get bwRateLimit() {
    return this.getNumberAttribute('bw_rate_limit');
  }
  public set bwRateLimit(value: number) {
    this._bwRateLimit = value;
  }
  public resetBwRateLimit() {
    this._bwRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitInput() {
    return this._bwRateLimit;
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

  // direct_action - computed: false, optional: true, required: false
  private _directAction?: number; 
  public get directAction() {
    return this.getNumberAttribute('direct_action');
  }
  public set directAction(value: number) {
    this._directAction = value;
  }
  public resetDirectAction() {
    this._directAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directActionInput() {
    return this._directAction;
  }

  // direct_action_interval - computed: false, optional: true, required: false
  private _directActionInterval?: number; 
  public get directActionInterval() {
    return this.getNumberAttribute('direct_action_interval');
  }
  public set directActionInterval(value: number) {
    this._directActionInterval = value;
  }
  public resetDirectActionInterval() {
    this._directActionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directActionIntervalInput() {
    return this._directActionInterval;
  }

  // direct_action_value - computed: false, optional: true, required: false
  private _directActionValue?: string; 
  public get directActionValue() {
    return this.getStringAttribute('direct_action_value');
  }
  public set directActionValue(value: string) {
    this._directActionValue = value;
  }
  public resetDirectActionValue() {
    this._directActionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directActionValueInput() {
    return this._directActionValue;
  }

  // direct_fail - computed: false, optional: true, required: false
  private _directFail?: number; 
  public get directFail() {
    return this.getNumberAttribute('direct_fail');
  }
  public set directFail(value: number) {
    this._directFail = value;
  }
  public resetDirectFail() {
    this._directFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directFailInput() {
    return this._directFail;
  }

  // direct_logging_drp_rst - computed: false, optional: true, required: false
  private _directLoggingDrpRst?: number; 
  public get directLoggingDrpRst() {
    return this.getNumberAttribute('direct_logging_drp_rst');
  }
  public set directLoggingDrpRst(value: number) {
    this._directLoggingDrpRst = value;
  }
  public resetDirectLoggingDrpRst() {
    this._directLoggingDrpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directLoggingDrpRstInput() {
    return this._directLoggingDrpRst;
  }

  // direct_pbslb_interval - computed: false, optional: true, required: false
  private _directPbslbInterval?: number; 
  public get directPbslbInterval() {
    return this.getNumberAttribute('direct_pbslb_interval');
  }
  public set directPbslbInterval(value: number) {
    this._directPbslbInterval = value;
  }
  public resetDirectPbslbInterval() {
    this._directPbslbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directPbslbIntervalInput() {
    return this._directPbslbInterval;
  }

  // direct_pbslb_logging - computed: false, optional: true, required: false
  private _directPbslbLogging?: number; 
  public get directPbslbLogging() {
    return this.getNumberAttribute('direct_pbslb_logging');
  }
  public set directPbslbLogging(value: number) {
    this._directPbslbLogging = value;
  }
  public resetDirectPbslbLogging() {
    this._directPbslbLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directPbslbLoggingInput() {
    return this._directPbslbLogging;
  }

  // direct_service_group - computed: false, optional: true, required: false
  private _directServiceGroup?: string; 
  public get directServiceGroup() {
    return this.getStringAttribute('direct_service_group');
  }
  public set directServiceGroup(value: string) {
    this._directServiceGroup = value;
  }
  public resetDirectServiceGroup() {
    this._directServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directServiceGroupInput() {
    return this._directServiceGroup;
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
  private _dns64 = new SlbTemplatePolicyClassListLidListDns64AOutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: SlbTemplatePolicyClassListLidListDns64A) {
    this._dns64.internalValue = value;
  }
  public resetDns64() {
    this._dns64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64Input() {
    return this._dns64.internalValue;
  }

  // response_code_rate_limit - computed: false, optional: true, required: false
  private _responseCodeRateLimit = new SlbTemplatePolicyClassListLidListResponseCodeRateLimitAList(this, "response_code_rate_limit", false);
  public get responseCodeRateLimit() {
    return this._responseCodeRateLimit;
  }
  public putResponseCodeRateLimit(value: SlbTemplatePolicyClassListLidListResponseCodeRateLimitA[] | cdktf.IResolvable) {
    this._responseCodeRateLimit.internalValue = value;
  }
  public resetResponseCodeRateLimit() {
    this._responseCodeRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeRateLimitInput() {
    return this._responseCodeRateLimit.internalValue;
  }
}

export class SlbTemplatePolicyClassListLidListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyClassListLidListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyClassListLidListStructAOutputReference {
    return new SlbTemplatePolicyClassListLidListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list thunder_slb_template_policy_class_list}
*/
export class SlbTemplatePolicyClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyClassList to import
  * @param importFromId The id of the existing SlbTemplatePolicyClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_class_list thunder_slb_template_policy_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyClassListConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_class_list',
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
  private _lidList = new SlbTemplatePolicyClassListLidListStructAList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: SlbTemplatePolicyClassListLidListStructA[] | cdktf.IResolvable) {
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
      lid_list: cdktf.listMapper(slbTemplatePolicyClassListLidListStructAToTerraform, true)(this._lidList.internalValue),
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
        value: cdktf.listMapperHcl(slbTemplatePolicyClassListLidListStructAToHclTerraform, true)(this._lidList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyClassListLidListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
