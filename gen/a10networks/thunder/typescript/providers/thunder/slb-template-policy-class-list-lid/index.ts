// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyClassListLidConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'forward': Forward the traffic even it exceeds limit; 'reset': Reset the connection when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#action_value SlbTemplatePolicyClassListLid#action_value}
  */
  readonly actionValue?: string;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#bw_per SlbTemplatePolicyClassListLid#bw_per}
  */
  readonly bwPer?: number;
  /**
  * Specify bandwidth rate limit (Bandwidth rate limit in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#bw_rate_limit SlbTemplatePolicyClassListLid#bw_rate_limit}
  */
  readonly bwRateLimit?: number;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#conn_limit SlbTemplatePolicyClassListLid#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#conn_per SlbTemplatePolicyClassListLid#conn_per}
  */
  readonly connPer?: number;
  /**
  * Specify connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#conn_rate_limit SlbTemplatePolicyClassListLid#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Set action when match the lid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_action SlbTemplatePolicyClassListLid#direct_action}
  */
  readonly directAction?: number;
  /**
  * Specify logging interval in minute (default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_action_interval SlbTemplatePolicyClassListLid#direct_action_interval}
  */
  readonly directActionInterval?: number;
  /**
  * 'drop': drop the packet; 'reset': Send reset back;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_action_value SlbTemplatePolicyClassListLid#direct_action_value}
  */
  readonly directActionValue?: string;
  /**
  * Only log unsuccessful connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_fail SlbTemplatePolicyClassListLid#direct_fail}
  */
  readonly directFail?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_logging_drp_rst SlbTemplatePolicyClassListLid#direct_logging_drp_rst}
  */
  readonly directLoggingDrpRst?: number;
  /**
  * Specify logging interval in minutes(default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_pbslb_interval SlbTemplatePolicyClassListLid#direct_pbslb_interval}
  */
  readonly directPbslbInterval?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_pbslb_logging SlbTemplatePolicyClassListLid#direct_pbslb_logging}
  */
  readonly directPbslbLogging?: number;
  /**
  * Specify a service group (Specify the service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#direct_service_group SlbTemplatePolicyClassListLid#direct_service_group}
  */
  readonly directServiceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#id SlbTemplatePolicyClassListLid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify log interval in minutes, by default system will log every over limit instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#interval SlbTemplatePolicyClassListLid#interval}
  */
  readonly interval?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#lidnum SlbTemplatePolicyClassListLid#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#lockout SlbTemplatePolicyClassListLid#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#log SlbTemplatePolicyClassListLid#log}
  */
  readonly log?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#name SlbTemplatePolicyClassListLid#name}
  */
  readonly name: string;
  /**
  * Set action when exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#over_limit_action SlbTemplatePolicyClassListLid#over_limit_action}
  */
  readonly overLimitAction?: number;
  /**
  * Request limit (Specify request limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#request_limit SlbTemplatePolicyClassListLid#request_limit}
  */
  readonly requestLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#request_per SlbTemplatePolicyClassListLid#request_per}
  */
  readonly requestPer?: number;
  /**
  * Request rate limit (Specify request rate limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#request_rate_limit SlbTemplatePolicyClassListLid#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#user_tag SlbTemplatePolicyClassListLid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#uuid SlbTemplatePolicyClassListLid#uuid}
  */
  readonly uuid?: string;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#dns64 SlbTemplatePolicyClassListLid#dns64}
  */
  readonly dns64?: SlbTemplatePolicyClassListLidDns64;
  /**
  * response_code_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#response_code_rate_limit SlbTemplatePolicyClassListLid#response_code_rate_limit}
  */
  readonly responseCodeRateLimit?: SlbTemplatePolicyClassListLidResponseCodeRateLimit[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyClassListLidDns64 {
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#disable SlbTemplatePolicyClassListLid#disable}
  */
  readonly disable?: number;
  /**
  * Exclusive Answer in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#exclusive_answer SlbTemplatePolicyClassListLid#exclusive_answer}
  */
  readonly exclusiveAnswer?: number;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#prefix SlbTemplatePolicyClassListLid#prefix}
  */
  readonly prefix?: string;
}

export function slbTemplatePolicyClassListLidDns64ToTerraform(struct?: SlbTemplatePolicyClassListLidDns64OutputReference | SlbTemplatePolicyClassListLidDns64): any {
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


export function slbTemplatePolicyClassListLidDns64ToHclTerraform(struct?: SlbTemplatePolicyClassListLidDns64OutputReference | SlbTemplatePolicyClassListLidDns64): any {
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

export class SlbTemplatePolicyClassListLidDns64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyClassListLidDns64 | undefined {
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

  public set internalValue(value: SlbTemplatePolicyClassListLidDns64 | undefined) {
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
export interface SlbTemplatePolicyClassListLidResponseCodeRateLimit {
  /**
  * server response code range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#code_range_end SlbTemplatePolicyClassListLid#code_range_end}
  */
  readonly codeRangeEnd?: number;
  /**
  * server response code range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#code_range_start SlbTemplatePolicyClassListLid#code_range_start}
  */
  readonly codeRangeStart?: number;
  /**
  * seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#period SlbTemplatePolicyClassListLid#period}
  */
  readonly period?: number;
  /**
  * the times of getting the response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#threshold SlbTemplatePolicyClassListLid#threshold}
  */
  readonly threshold?: number;
}

export function slbTemplatePolicyClassListLidResponseCodeRateLimitToTerraform(struct?: SlbTemplatePolicyClassListLidResponseCodeRateLimit | cdktf.IResolvable): any {
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


export function slbTemplatePolicyClassListLidResponseCodeRateLimitToHclTerraform(struct?: SlbTemplatePolicyClassListLidResponseCodeRateLimit | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyClassListLidResponseCodeRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyClassListLidResponseCodeRateLimit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyClassListLidResponseCodeRateLimit | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyClassListLidResponseCodeRateLimitList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyClassListLidResponseCodeRateLimit[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyClassListLidResponseCodeRateLimitOutputReference {
    return new SlbTemplatePolicyClassListLidResponseCodeRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid thunder_slb_template_policy_class_list_lid}
*/
export class SlbTemplatePolicyClassListLid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_class_list_lid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyClassListLid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyClassListLid to import
  * @param importFromId The id of the existing SlbTemplatePolicyClassListLid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyClassListLid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_class_list_lid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_policy_class_list_lid thunder_slb_template_policy_class_list_lid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyClassListLidConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyClassListLidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_class_list_lid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._bwPer = config.bwPer;
    this._bwRateLimit = config.bwRateLimit;
    this._connLimit = config.connLimit;
    this._connPer = config.connPer;
    this._connRateLimit = config.connRateLimit;
    this._directAction = config.directAction;
    this._directActionInterval = config.directActionInterval;
    this._directActionValue = config.directActionValue;
    this._directFail = config.directFail;
    this._directLoggingDrpRst = config.directLoggingDrpRst;
    this._directPbslbInterval = config.directPbslbInterval;
    this._directPbslbLogging = config.directPbslbLogging;
    this._directServiceGroup = config.directServiceGroup;
    this._id = config.id;
    this._interval = config.interval;
    this._lidnum = config.lidnum;
    this._lockout = config.lockout;
    this._log = config.log;
    this._name = config.name;
    this._overLimitAction = config.overLimitAction;
    this._requestLimit = config.requestLimit;
    this._requestPer = config.requestPer;
    this._requestRateLimit = config.requestRateLimit;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dns64.internalValue = config.dns64;
    this._responseCodeRateLimit.internalValue = config.responseCodeRateLimit;
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
  private _dns64 = new SlbTemplatePolicyClassListLidDns64OutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: SlbTemplatePolicyClassListLidDns64) {
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
  private _responseCodeRateLimit = new SlbTemplatePolicyClassListLidResponseCodeRateLimitList(this, "response_code_rate_limit", false);
  public get responseCodeRateLimit() {
    return this._responseCodeRateLimit;
  }
  public putResponseCodeRateLimit(value: SlbTemplatePolicyClassListLidResponseCodeRateLimit[] | cdktf.IResolvable) {
    this._responseCodeRateLimit.internalValue = value;
  }
  public resetResponseCodeRateLimit() {
    this._responseCodeRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeRateLimitInput() {
    return this._responseCodeRateLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_value: cdktf.stringToTerraform(this._actionValue),
      bw_per: cdktf.numberToTerraform(this._bwPer),
      bw_rate_limit: cdktf.numberToTerraform(this._bwRateLimit),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_per: cdktf.numberToTerraform(this._connPer),
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      direct_action: cdktf.numberToTerraform(this._directAction),
      direct_action_interval: cdktf.numberToTerraform(this._directActionInterval),
      direct_action_value: cdktf.stringToTerraform(this._directActionValue),
      direct_fail: cdktf.numberToTerraform(this._directFail),
      direct_logging_drp_rst: cdktf.numberToTerraform(this._directLoggingDrpRst),
      direct_pbslb_interval: cdktf.numberToTerraform(this._directPbslbInterval),
      direct_pbslb_logging: cdktf.numberToTerraform(this._directPbslbLogging),
      direct_service_group: cdktf.stringToTerraform(this._directServiceGroup),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      lidnum: cdktf.numberToTerraform(this._lidnum),
      lockout: cdktf.numberToTerraform(this._lockout),
      log: cdktf.numberToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      over_limit_action: cdktf.numberToTerraform(this._overLimitAction),
      request_limit: cdktf.numberToTerraform(this._requestLimit),
      request_per: cdktf.numberToTerraform(this._requestPer),
      request_rate_limit: cdktf.numberToTerraform(this._requestRateLimit),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns64: slbTemplatePolicyClassListLidDns64ToTerraform(this._dns64.internalValue),
      response_code_rate_limit: cdktf.listMapper(slbTemplatePolicyClassListLidResponseCodeRateLimitToTerraform, true)(this._responseCodeRateLimit.internalValue),
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
      bw_per: {
        value: cdktf.numberToHclTerraform(this._bwPer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_rate_limit: {
        value: cdktf.numberToHclTerraform(this._bwRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      direct_action: {
        value: cdktf.numberToHclTerraform(this._directAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direct_action_interval: {
        value: cdktf.numberToHclTerraform(this._directActionInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direct_action_value: {
        value: cdktf.stringToHclTerraform(this._directActionValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_fail: {
        value: cdktf.numberToHclTerraform(this._directFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direct_logging_drp_rst: {
        value: cdktf.numberToHclTerraform(this._directLoggingDrpRst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direct_pbslb_interval: {
        value: cdktf.numberToHclTerraform(this._directPbslbInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direct_pbslb_logging: {
        value: cdktf.numberToHclTerraform(this._directPbslbLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direct_service_group: {
        value: cdktf.stringToHclTerraform(this._directServiceGroup),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      over_limit_action: {
        value: cdktf.numberToHclTerraform(this._overLimitAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: slbTemplatePolicyClassListLidDns64ToHclTerraform(this._dns64.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyClassListLidDns64List",
      },
      response_code_rate_limit: {
        value: cdktf.listMapperHcl(slbTemplatePolicyClassListLidResponseCodeRateLimitToHclTerraform, true)(this._responseCodeRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyClassListLidResponseCodeRateLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
