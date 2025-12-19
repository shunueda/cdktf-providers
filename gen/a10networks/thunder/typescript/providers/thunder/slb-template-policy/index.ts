// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify a blacklist/whitelist name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#bw_list_name SlbTemplatePolicy#bw_list_name}
  */
  readonly bwListName?: string;
  /**
  * Share counters between geo-location and sub regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#full_domain_tree SlbTemplatePolicy#full_domain_tree}
  */
  readonly fullDomainTree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#id SlbTemplatePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log interval (minute)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#interval SlbTemplatePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Policy template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#name SlbTemplatePolicy#name}
  */
  readonly name: string;
  /**
  * Specify operation in case over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#over_limit SlbTemplatePolicy#over_limit}
  */
  readonly overLimit?: number;
  /**
  * Don't accept any new connection for certain time (Lockup duration (minute))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#over_limit_lockup SlbTemplatePolicy#over_limit_lockup}
  */
  readonly overLimitLockup?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#over_limit_logging SlbTemplatePolicy#over_limit_logging}
  */
  readonly overLimitLogging?: number;
  /**
  * Reset the connection when it exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#over_limit_reset SlbTemplatePolicy#over_limit_reset}
  */
  readonly overLimitReset?: number;
  /**
  * Use overlap mode for geo-location to do longest match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#overlap SlbTemplatePolicy#overlap}
  */
  readonly overlap?: number;
  /**
  * Share counters between virtual ports and virtual servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#share SlbTemplatePolicy#share}
  */
  readonly share?: number;
  /**
  * Define timeout value of PBSLB dynamic entry (Timeout value (minute, default is 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#timeout SlbTemplatePolicy#timeout}
  */
  readonly timeout?: number;
  /**
  * Use destination IP to match the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#use_destination_ip SlbTemplatePolicy#use_destination_ip}
  */
  readonly useDestinationIp?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#user_tag SlbTemplatePolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * bw_list_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#bw_list_id SlbTemplatePolicy#bw_list_id}
  */
  readonly bwListId?: SlbTemplatePolicyBwListId[] | cdktf.IResolvable;
  /**
  * class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#class_list SlbTemplatePolicy#class_list}
  */
  readonly classList?: SlbTemplatePolicyClassListStruct;
  /**
  * forward_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#forward_policy SlbTemplatePolicy#forward_policy}
  */
  readonly forwardPolicy?: SlbTemplatePolicyForwardPolicy;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#sampling_enable SlbTemplatePolicy#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicySamplingEnable[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyBwListId {
  /**
  * Specify logging interval in minute (default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action_interval SlbTemplatePolicy#action_interval}
  */
  readonly actionInterval?: number;
  /**
  * 'drop': drop the packet; 'reset': Send reset back;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#bw_list_action SlbTemplatePolicy#bw_list_action}
  */
  readonly bwListAction?: string;
  /**
  * Only log unsuccessful connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#fail SlbTemplatePolicy#fail}
  */
  readonly fail?: number;
  /**
  * Specify id that maps to service group (The id number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#id1 SlbTemplatePolicy#id1}
  */
  readonly id1?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#logging_drp_rst SlbTemplatePolicy#logging_drp_rst}
  */
  readonly loggingDrpRst?: number;
  /**
  * Specify logging interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#pbslb_interval SlbTemplatePolicy#pbslb_interval}
  */
  readonly pbslbInterval?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#pbslb_logging SlbTemplatePolicy#pbslb_logging}
  */
  readonly pbslbLogging?: number;
  /**
  * Specify a service group (Specify the service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#service_group SlbTemplatePolicy#service_group}
  */
  readonly serviceGroup?: string;
}

export function slbTemplatePolicyBwListIdToTerraform(struct?: SlbTemplatePolicyBwListId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_interval: cdktf.numberToTerraform(struct!.actionInterval),
    bw_list_action: cdktf.stringToTerraform(struct!.bwListAction),
    fail: cdktf.numberToTerraform(struct!.fail),
    id1: cdktf.numberToTerraform(struct!.id1),
    logging_drp_rst: cdktf.numberToTerraform(struct!.loggingDrpRst),
    pbslb_interval: cdktf.numberToTerraform(struct!.pbslbInterval),
    pbslb_logging: cdktf.numberToTerraform(struct!.pbslbLogging),
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
  }
}


export function slbTemplatePolicyBwListIdToHclTerraform(struct?: SlbTemplatePolicyBwListId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_interval: {
      value: cdktf.numberToHclTerraform(struct!.actionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_list_action: {
      value: cdktf.stringToHclTerraform(struct!.bwListAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_drp_rst: {
      value: cdktf.numberToHclTerraform(struct!.loggingDrpRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_interval: {
      value: cdktf.numberToHclTerraform(struct!.pbslbInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_logging: {
      value: cdktf.numberToHclTerraform(struct!.pbslbLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyBwListIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyBwListId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionInterval = this._actionInterval;
    }
    if (this._bwListAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwListAction = this._bwListAction;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._loggingDrpRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingDrpRst = this._loggingDrpRst;
    }
    if (this._pbslbInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbInterval = this._pbslbInterval;
    }
    if (this._pbslbLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbLogging = this._pbslbLogging;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyBwListId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionInterval = undefined;
      this._bwListAction = undefined;
      this._fail = undefined;
      this._id1 = undefined;
      this._loggingDrpRst = undefined;
      this._pbslbInterval = undefined;
      this._pbslbLogging = undefined;
      this._serviceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionInterval = value.actionInterval;
      this._bwListAction = value.bwListAction;
      this._fail = value.fail;
      this._id1 = value.id1;
      this._loggingDrpRst = value.loggingDrpRst;
      this._pbslbInterval = value.pbslbInterval;
      this._pbslbLogging = value.pbslbLogging;
      this._serviceGroup = value.serviceGroup;
    }
  }

  // action_interval - computed: false, optional: true, required: false
  private _actionInterval?: number; 
  public get actionInterval() {
    return this.getNumberAttribute('action_interval');
  }
  public set actionInterval(value: number) {
    this._actionInterval = value;
  }
  public resetActionInterval() {
    this._actionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIntervalInput() {
    return this._actionInterval;
  }

  // bw_list_action - computed: false, optional: true, required: false
  private _bwListAction?: string; 
  public get bwListAction() {
    return this.getStringAttribute('bw_list_action');
  }
  public set bwListAction(value: string) {
    this._bwListAction = value;
  }
  public resetBwListAction() {
    this._bwListAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwListActionInput() {
    return this._bwListAction;
  }

  // fail - computed: false, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // logging_drp_rst - computed: false, optional: true, required: false
  private _loggingDrpRst?: number; 
  public get loggingDrpRst() {
    return this.getNumberAttribute('logging_drp_rst');
  }
  public set loggingDrpRst(value: number) {
    this._loggingDrpRst = value;
  }
  public resetLoggingDrpRst() {
    this._loggingDrpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingDrpRstInput() {
    return this._loggingDrpRst;
  }

  // pbslb_interval - computed: false, optional: true, required: false
  private _pbslbInterval?: number; 
  public get pbslbInterval() {
    return this.getNumberAttribute('pbslb_interval');
  }
  public set pbslbInterval(value: number) {
    this._pbslbInterval = value;
  }
  public resetPbslbInterval() {
    this._pbslbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbIntervalInput() {
    return this._pbslbInterval;
  }

  // pbslb_logging - computed: false, optional: true, required: false
  private _pbslbLogging?: number; 
  public get pbslbLogging() {
    return this.getNumberAttribute('pbslb_logging');
  }
  public set pbslbLogging(value: number) {
    this._pbslbLogging = value;
  }
  public resetPbslbLogging() {
    this._pbslbLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbLoggingInput() {
    return this._pbslbLogging;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }
}

export class SlbTemplatePolicyBwListIdList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyBwListId[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyBwListIdOutputReference {
    return new SlbTemplatePolicyBwListIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyClassListLidListDns64 {
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#disable SlbTemplatePolicy#disable}
  */
  readonly disable?: number;
  /**
  * Exclusive Answer in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#exclusive_answer SlbTemplatePolicy#exclusive_answer}
  */
  readonly exclusiveAnswer?: number;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#prefix SlbTemplatePolicy#prefix}
  */
  readonly prefix?: string;
}

export function slbTemplatePolicyClassListLidListDns64ToTerraform(struct?: SlbTemplatePolicyClassListLidListDns64OutputReference | SlbTemplatePolicyClassListLidListDns64): any {
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


export function slbTemplatePolicyClassListLidListDns64ToHclTerraform(struct?: SlbTemplatePolicyClassListLidListDns64OutputReference | SlbTemplatePolicyClassListLidListDns64): any {
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

export class SlbTemplatePolicyClassListLidListDns64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyClassListLidListDns64 | undefined {
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

  public set internalValue(value: SlbTemplatePolicyClassListLidListDns64 | undefined) {
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
export interface SlbTemplatePolicyClassListLidListResponseCodeRateLimit {
  /**
  * server response code range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#code_range_end SlbTemplatePolicy#code_range_end}
  */
  readonly codeRangeEnd?: number;
  /**
  * server response code range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#code_range_start SlbTemplatePolicy#code_range_start}
  */
  readonly codeRangeStart?: number;
  /**
  * seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#period SlbTemplatePolicy#period}
  */
  readonly period?: number;
  /**
  * the times of getting the response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#threshold SlbTemplatePolicy#threshold}
  */
  readonly threshold?: number;
}

export function slbTemplatePolicyClassListLidListResponseCodeRateLimitToTerraform(struct?: SlbTemplatePolicyClassListLidListResponseCodeRateLimit | cdktf.IResolvable): any {
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


export function slbTemplatePolicyClassListLidListResponseCodeRateLimitToHclTerraform(struct?: SlbTemplatePolicyClassListLidListResponseCodeRateLimit | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyClassListLidListResponseCodeRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyClassListLidListResponseCodeRateLimit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyClassListLidListResponseCodeRateLimit | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyClassListLidListResponseCodeRateLimitList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyClassListLidListResponseCodeRateLimit[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyClassListLidListResponseCodeRateLimitOutputReference {
    return new SlbTemplatePolicyClassListLidListResponseCodeRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyClassListLidListStruct {
  /**
  * 'forward': Forward the traffic even it exceeds limit; 'reset': Reset the connection when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action_value SlbTemplatePolicy#action_value}
  */
  readonly actionValue?: string;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#bw_per SlbTemplatePolicy#bw_per}
  */
  readonly bwPer?: number;
  /**
  * Specify bandwidth rate limit (Bandwidth rate limit in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#bw_rate_limit SlbTemplatePolicy#bw_rate_limit}
  */
  readonly bwRateLimit?: number;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#conn_limit SlbTemplatePolicy#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#conn_per SlbTemplatePolicy#conn_per}
  */
  readonly connPer?: number;
  /**
  * Specify connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#conn_rate_limit SlbTemplatePolicy#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Set action when match the lid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_action SlbTemplatePolicy#direct_action}
  */
  readonly directAction?: number;
  /**
  * Specify logging interval in minute (default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_action_interval SlbTemplatePolicy#direct_action_interval}
  */
  readonly directActionInterval?: number;
  /**
  * 'drop': drop the packet; 'reset': Send reset back;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_action_value SlbTemplatePolicy#direct_action_value}
  */
  readonly directActionValue?: string;
  /**
  * Only log unsuccessful connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_fail SlbTemplatePolicy#direct_fail}
  */
  readonly directFail?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_logging_drp_rst SlbTemplatePolicy#direct_logging_drp_rst}
  */
  readonly directLoggingDrpRst?: number;
  /**
  * Specify logging interval in minutes(default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_pbslb_interval SlbTemplatePolicy#direct_pbslb_interval}
  */
  readonly directPbslbInterval?: number;
  /**
  * Configure PBSLB logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_pbslb_logging SlbTemplatePolicy#direct_pbslb_logging}
  */
  readonly directPbslbLogging?: number;
  /**
  * Specify a service group (Specify the service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#direct_service_group SlbTemplatePolicy#direct_service_group}
  */
  readonly directServiceGroup?: string;
  /**
  * Specify log interval in minutes, by default system will log every over limit instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#interval SlbTemplatePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#lidnum SlbTemplatePolicy#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#lockout SlbTemplatePolicy#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#log SlbTemplatePolicy#log}
  */
  readonly log?: number;
  /**
  * Set action when exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#over_limit_action SlbTemplatePolicy#over_limit_action}
  */
  readonly overLimitAction?: number;
  /**
  * Request limit (Specify request limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#request_limit SlbTemplatePolicy#request_limit}
  */
  readonly requestLimit?: number;
  /**
  * Per (Specify interval in number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#request_per SlbTemplatePolicy#request_per}
  */
  readonly requestPer?: number;
  /**
  * Request rate limit (Specify request rate limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#request_rate_limit SlbTemplatePolicy#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#user_tag SlbTemplatePolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dns64 SlbTemplatePolicy#dns64}
  */
  readonly dns64?: SlbTemplatePolicyClassListLidListDns64;
  /**
  * response_code_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#response_code_rate_limit SlbTemplatePolicy#response_code_rate_limit}
  */
  readonly responseCodeRateLimit?: SlbTemplatePolicyClassListLidListResponseCodeRateLimit[] | cdktf.IResolvable;
}

export function slbTemplatePolicyClassListLidListStructToTerraform(struct?: SlbTemplatePolicyClassListLidListStruct | cdktf.IResolvable): any {
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
    dns64: slbTemplatePolicyClassListLidListDns64ToTerraform(struct!.dns64),
    response_code_rate_limit: cdktf.listMapper(slbTemplatePolicyClassListLidListResponseCodeRateLimitToTerraform, true)(struct!.responseCodeRateLimit),
  }
}


export function slbTemplatePolicyClassListLidListStructToHclTerraform(struct?: SlbTemplatePolicyClassListLidListStruct | cdktf.IResolvable): any {
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
      value: slbTemplatePolicyClassListLidListDns64ToHclTerraform(struct!.dns64),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyClassListLidListDns64List",
    },
    response_code_rate_limit: {
      value: cdktf.listMapperHcl(slbTemplatePolicyClassListLidListResponseCodeRateLimitToHclTerraform, true)(struct!.responseCodeRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyClassListLidListResponseCodeRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyClassListLidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyClassListLidListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyClassListLidListStruct | cdktf.IResolvable | undefined) {
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
  private _dns64 = new SlbTemplatePolicyClassListLidListDns64OutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: SlbTemplatePolicyClassListLidListDns64) {
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
  private _responseCodeRateLimit = new SlbTemplatePolicyClassListLidListResponseCodeRateLimitList(this, "response_code_rate_limit", false);
  public get responseCodeRateLimit() {
    return this._responseCodeRateLimit;
  }
  public putResponseCodeRateLimit(value: SlbTemplatePolicyClassListLidListResponseCodeRateLimit[] | cdktf.IResolvable) {
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

export class SlbTemplatePolicyClassListLidListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyClassListLidListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyClassListLidListStructOutputReference {
    return new SlbTemplatePolicyClassListLidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyClassListStruct {
  /**
  * Use destination IP as client IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#client_ip_l3_dest SlbTemplatePolicy#client_ip_l3_dest}
  */
  readonly clientIpL3Dest?: number;
  /**
  * Use extract client IP address from L7 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#client_ip_l7_header SlbTemplatePolicy#client_ip_l7_header}
  */
  readonly clientIpL7Header?: number;
  /**
  * Specify L7 header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#header_name SlbTemplatePolicy#header_name}
  */
  readonly headerName?: string;
  /**
  * Class list name or geo-location-class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#name SlbTemplatePolicy#name}
  */
  readonly name?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#lid_list SlbTemplatePolicy#lid_list}
  */
  readonly lidList?: SlbTemplatePolicyClassListLidListStruct[] | cdktf.IResolvable;
}

export function slbTemplatePolicyClassListStructToTerraform(struct?: SlbTemplatePolicyClassListStructOutputReference | SlbTemplatePolicyClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_l3_dest: cdktf.numberToTerraform(struct!.clientIpL3Dest),
    client_ip_l7_header: cdktf.numberToTerraform(struct!.clientIpL7Header),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lid_list: cdktf.listMapper(slbTemplatePolicyClassListLidListStructToTerraform, true)(struct!.lidList),
  }
}


export function slbTemplatePolicyClassListStructToHclTerraform(struct?: SlbTemplatePolicyClassListStructOutputReference | SlbTemplatePolicyClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_l3_dest: {
      value: cdktf.numberToHclTerraform(struct!.clientIpL3Dest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ip_l7_header: {
      value: cdktf.numberToHclTerraform(struct!.clientIpL7Header),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    lid_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyClassListLidListStructToHclTerraform, true)(struct!.lidList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyClassListLidListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpL3Dest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpL3Dest = this._clientIpL3Dest;
    }
    if (this._clientIpL7Header !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpL7Header = this._clientIpL7Header;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidList = this._lidList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIpL3Dest = undefined;
      this._clientIpL7Header = undefined;
      this._headerName = undefined;
      this._name = undefined;
      this._uuid = undefined;
      this._lidList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIpL3Dest = value.clientIpL3Dest;
      this._clientIpL7Header = value.clientIpL7Header;
      this._headerName = value.headerName;
      this._name = value.name;
      this._uuid = value.uuid;
      this._lidList.internalValue = value.lidList;
    }
  }

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
  private _lidList = new SlbTemplatePolicyClassListLidListStructList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: SlbTemplatePolicyClassListLidListStruct[] | cdktf.IResolvable) {
    this._lidList.internalValue = value;
  }
  public resetLidList() {
    this._lidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidListInput() {
    return this._lidList.internalValue;
  }
}
export interface SlbTemplatePolicyForwardPolicyActionListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests matching this destination rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#counters1 SlbTemplatePolicy#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicyActionListSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicyActionListSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyActionListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyActionListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyActionListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicyActionListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyActionListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyActionListSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicyActionListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyActionListStruct {
  /**
  * 'forward-to-internet': Forward request to Internet; 'forward-to-service-group': Forward request to service group; 'forward-to-proxy': Forward request to HTTP proxy server; 'drop': Drop request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action1 SlbTemplatePolicy#action1}
  */
  readonly action1?: string;
  /**
  * drop-message sent to the client as webpage(html tags are included and quotation marks are required for white spaces)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#drop_message SlbTemplatePolicy#drop_message}
  */
  readonly dropMessage?: string;
  /**
  * Specify URL to which client request is redirected upon being dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#drop_redirect_url SlbTemplatePolicy#drop_redirect_url}
  */
  readonly dropRedirectUrl?: string;
  /**
  * Specify response code for drop action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#drop_response_code SlbTemplatePolicy#drop_response_code}
  */
  readonly dropResponseCode?: number;
  /**
  * service group to forward the packets to Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#fake_sg SlbTemplatePolicy#fake_sg}
  */
  readonly fakeSg?: string;
  /**
  * Fallback service group for Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#fall_back SlbTemplatePolicy#fall_back}
  */
  readonly fallBack?: string;
  /**
  * Source NAT pool or pool group for fallback server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#fall_back_snat SlbTemplatePolicy#fall_back_snat}
  */
  readonly fallBackSnat?: string;
  /**
  * Source port translation only for fallback server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#fall_back_snat_pt_only SlbTemplatePolicy#fall_back_snat_pt_only}
  */
  readonly fallBackSnatPtOnly?: number;
  /**
  * Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#forward_snat SlbTemplatePolicy#forward_snat}
  */
  readonly forwardSnat?: string;
  /**
  * Source port translation only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#forward_snat_pt_only SlbTemplatePolicy#forward_snat_pt_only}
  */
  readonly forwardSnatPtOnly?: number;
  /**
  * '301': Moved permanently; '302': Found;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#http_status_code SlbTemplatePolicy#http_status_code}
  */
  readonly httpStatusCode?: string;
  /**
  * enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#log SlbTemplatePolicy#log}
  */
  readonly log?: number;
  /**
  * Action policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#name SlbTemplatePolicy#name}
  */
  readonly name: string;
  /**
  * Enable proxy chaining feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#proxy_chaining SlbTemplatePolicy#proxy_chaining}
  */
  readonly proxyChaining?: number;
  /**
  * Forward all https packets to upstream proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#proxy_chaining_bypass SlbTemplatePolicy#proxy_chaining_bypass}
  */
  readonly proxyChainingBypass?: number;
  /**
  * service group to forward the packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#real_sg SlbTemplatePolicy#real_sg}
  */
  readonly realSg?: string;
  /**
  * Fetch server certificate by upstream proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#support_cert_fetch SlbTemplatePolicy#support_cert_fetch}
  */
  readonly supportCertFetch?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#user_tag SlbTemplatePolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#sampling_enable SlbTemplatePolicy#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicyActionListSamplingEnable[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicyActionListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action1: cdktf.stringToTerraform(struct!.action1),
    drop_message: cdktf.stringToTerraform(struct!.dropMessage),
    drop_redirect_url: cdktf.stringToTerraform(struct!.dropRedirectUrl),
    drop_response_code: cdktf.numberToTerraform(struct!.dropResponseCode),
    fake_sg: cdktf.stringToTerraform(struct!.fakeSg),
    fall_back: cdktf.stringToTerraform(struct!.fallBack),
    fall_back_snat: cdktf.stringToTerraform(struct!.fallBackSnat),
    fall_back_snat_pt_only: cdktf.numberToTerraform(struct!.fallBackSnatPtOnly),
    forward_snat: cdktf.stringToTerraform(struct!.forwardSnat),
    forward_snat_pt_only: cdktf.numberToTerraform(struct!.forwardSnatPtOnly),
    http_status_code: cdktf.stringToTerraform(struct!.httpStatusCode),
    log: cdktf.numberToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    proxy_chaining: cdktf.numberToTerraform(struct!.proxyChaining),
    proxy_chaining_bypass: cdktf.numberToTerraform(struct!.proxyChainingBypass),
    real_sg: cdktf.stringToTerraform(struct!.realSg),
    support_cert_fetch: cdktf.numberToTerraform(struct!.supportCertFetch),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicyActionListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicyActionListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action1: {
      value: cdktf.stringToHclTerraform(struct!.action1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_message: {
      value: cdktf.stringToHclTerraform(struct!.dropMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.dropRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_response_code: {
      value: cdktf.numberToHclTerraform(struct!.dropResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fake_sg: {
      value: cdktf.stringToHclTerraform(struct!.fakeSg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back: {
      value: cdktf.stringToHclTerraform(struct!.fallBack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back_snat: {
      value: cdktf.stringToHclTerraform(struct!.fallBackSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back_snat_pt_only: {
      value: cdktf.numberToHclTerraform(struct!.fallBackSnatPtOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_snat: {
      value: cdktf.stringToHclTerraform(struct!.forwardSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_snat_pt_only: {
      value: cdktf.numberToHclTerraform(struct!.forwardSnatPtOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_status_code: {
      value: cdktf.stringToHclTerraform(struct!.httpStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_chaining: {
      value: cdktf.numberToHclTerraform(struct!.proxyChaining),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_chaining_bypass: {
      value: cdktf.numberToHclTerraform(struct!.proxyChainingBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_sg: {
      value: cdktf.stringToHclTerraform(struct!.realSg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_cert_fetch: {
      value: cdktf.numberToHclTerraform(struct!.supportCertFetch),
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyActionListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicyActionListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyActionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyActionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action1 = this._action1;
    }
    if (this._dropMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropMessage = this._dropMessage;
    }
    if (this._dropRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRedirectUrl = this._dropRedirectUrl;
    }
    if (this._dropResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropResponseCode = this._dropResponseCode;
    }
    if (this._fakeSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.fakeSg = this._fakeSg;
    }
    if (this._fallBack !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBack = this._fallBack;
    }
    if (this._fallBackSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBackSnat = this._fallBackSnat;
    }
    if (this._fallBackSnatPtOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBackSnatPtOnly = this._fallBackSnatPtOnly;
    }
    if (this._forwardSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardSnat = this._forwardSnat;
    }
    if (this._forwardSnatPtOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardSnatPtOnly = this._forwardSnatPtOnly;
    }
    if (this._httpStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatusCode = this._httpStatusCode;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proxyChaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyChaining = this._proxyChaining;
    }
    if (this._proxyChainingBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyChainingBypass = this._proxyChainingBypass;
    }
    if (this._realSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.realSg = this._realSg;
    }
    if (this._supportCertFetch !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportCertFetch = this._supportCertFetch;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyActionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action1 = undefined;
      this._dropMessage = undefined;
      this._dropRedirectUrl = undefined;
      this._dropResponseCode = undefined;
      this._fakeSg = undefined;
      this._fallBack = undefined;
      this._fallBackSnat = undefined;
      this._fallBackSnatPtOnly = undefined;
      this._forwardSnat = undefined;
      this._forwardSnatPtOnly = undefined;
      this._httpStatusCode = undefined;
      this._log = undefined;
      this._name = undefined;
      this._proxyChaining = undefined;
      this._proxyChainingBypass = undefined;
      this._realSg = undefined;
      this._supportCertFetch = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action1 = value.action1;
      this._dropMessage = value.dropMessage;
      this._dropRedirectUrl = value.dropRedirectUrl;
      this._dropResponseCode = value.dropResponseCode;
      this._fakeSg = value.fakeSg;
      this._fallBack = value.fallBack;
      this._fallBackSnat = value.fallBackSnat;
      this._fallBackSnatPtOnly = value.fallBackSnatPtOnly;
      this._forwardSnat = value.forwardSnat;
      this._forwardSnatPtOnly = value.forwardSnatPtOnly;
      this._httpStatusCode = value.httpStatusCode;
      this._log = value.log;
      this._name = value.name;
      this._proxyChaining = value.proxyChaining;
      this._proxyChainingBypass = value.proxyChainingBypass;
      this._realSg = value.realSg;
      this._supportCertFetch = value.supportCertFetch;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action1 - computed: false, optional: true, required: false
  private _action1?: string; 
  public get action1() {
    return this.getStringAttribute('action1');
  }
  public set action1(value: string) {
    this._action1 = value;
  }
  public resetAction1() {
    this._action1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action1Input() {
    return this._action1;
  }

  // drop_message - computed: false, optional: true, required: false
  private _dropMessage?: string; 
  public get dropMessage() {
    return this.getStringAttribute('drop_message');
  }
  public set dropMessage(value: string) {
    this._dropMessage = value;
  }
  public resetDropMessage() {
    this._dropMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropMessageInput() {
    return this._dropMessage;
  }

  // drop_redirect_url - computed: false, optional: true, required: false
  private _dropRedirectUrl?: string; 
  public get dropRedirectUrl() {
    return this.getStringAttribute('drop_redirect_url');
  }
  public set dropRedirectUrl(value: string) {
    this._dropRedirectUrl = value;
  }
  public resetDropRedirectUrl() {
    this._dropRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRedirectUrlInput() {
    return this._dropRedirectUrl;
  }

  // drop_response_code - computed: false, optional: true, required: false
  private _dropResponseCode?: number; 
  public get dropResponseCode() {
    return this.getNumberAttribute('drop_response_code');
  }
  public set dropResponseCode(value: number) {
    this._dropResponseCode = value;
  }
  public resetDropResponseCode() {
    this._dropResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropResponseCodeInput() {
    return this._dropResponseCode;
  }

  // fake_sg - computed: false, optional: true, required: false
  private _fakeSg?: string; 
  public get fakeSg() {
    return this.getStringAttribute('fake_sg');
  }
  public set fakeSg(value: string) {
    this._fakeSg = value;
  }
  public resetFakeSg() {
    this._fakeSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeSgInput() {
    return this._fakeSg;
  }

  // fall_back - computed: false, optional: true, required: false
  private _fallBack?: string; 
  public get fallBack() {
    return this.getStringAttribute('fall_back');
  }
  public set fallBack(value: string) {
    this._fallBack = value;
  }
  public resetFallBack() {
    this._fallBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackInput() {
    return this._fallBack;
  }

  // fall_back_snat - computed: false, optional: true, required: false
  private _fallBackSnat?: string; 
  public get fallBackSnat() {
    return this.getStringAttribute('fall_back_snat');
  }
  public set fallBackSnat(value: string) {
    this._fallBackSnat = value;
  }
  public resetFallBackSnat() {
    this._fallBackSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackSnatInput() {
    return this._fallBackSnat;
  }

  // fall_back_snat_pt_only - computed: false, optional: true, required: false
  private _fallBackSnatPtOnly?: number; 
  public get fallBackSnatPtOnly() {
    return this.getNumberAttribute('fall_back_snat_pt_only');
  }
  public set fallBackSnatPtOnly(value: number) {
    this._fallBackSnatPtOnly = value;
  }
  public resetFallBackSnatPtOnly() {
    this._fallBackSnatPtOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackSnatPtOnlyInput() {
    return this._fallBackSnatPtOnly;
  }

  // forward_snat - computed: false, optional: true, required: false
  private _forwardSnat?: string; 
  public get forwardSnat() {
    return this.getStringAttribute('forward_snat');
  }
  public set forwardSnat(value: string) {
    this._forwardSnat = value;
  }
  public resetForwardSnat() {
    this._forwardSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSnatInput() {
    return this._forwardSnat;
  }

  // forward_snat_pt_only - computed: false, optional: true, required: false
  private _forwardSnatPtOnly?: number; 
  public get forwardSnatPtOnly() {
    return this.getNumberAttribute('forward_snat_pt_only');
  }
  public set forwardSnatPtOnly(value: number) {
    this._forwardSnatPtOnly = value;
  }
  public resetForwardSnatPtOnly() {
    this._forwardSnatPtOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSnatPtOnlyInput() {
    return this._forwardSnatPtOnly;
  }

  // http_status_code - computed: false, optional: true, required: false
  private _httpStatusCode?: string; 
  public get httpStatusCode() {
    return this.getStringAttribute('http_status_code');
  }
  public set httpStatusCode(value: string) {
    this._httpStatusCode = value;
  }
  public resetHttpStatusCode() {
    this._httpStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusCodeInput() {
    return this._httpStatusCode;
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

  // proxy_chaining - computed: false, optional: true, required: false
  private _proxyChaining?: number; 
  public get proxyChaining() {
    return this.getNumberAttribute('proxy_chaining');
  }
  public set proxyChaining(value: number) {
    this._proxyChaining = value;
  }
  public resetProxyChaining() {
    this._proxyChaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyChainingInput() {
    return this._proxyChaining;
  }

  // proxy_chaining_bypass - computed: false, optional: true, required: false
  private _proxyChainingBypass?: number; 
  public get proxyChainingBypass() {
    return this.getNumberAttribute('proxy_chaining_bypass');
  }
  public set proxyChainingBypass(value: number) {
    this._proxyChainingBypass = value;
  }
  public resetProxyChainingBypass() {
    this._proxyChainingBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyChainingBypassInput() {
    return this._proxyChainingBypass;
  }

  // real_sg - computed: false, optional: true, required: false
  private _realSg?: string; 
  public get realSg() {
    return this.getStringAttribute('real_sg');
  }
  public set realSg(value: string) {
    this._realSg = value;
  }
  public resetRealSg() {
    this._realSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realSgInput() {
    return this._realSg;
  }

  // support_cert_fetch - computed: false, optional: true, required: false
  private _supportCertFetch?: number; 
  public get supportCertFetch() {
    return this.getNumberAttribute('support_cert_fetch');
  }
  public set supportCertFetch(value: number) {
    this._supportCertFetch = value;
  }
  public resetSupportCertFetch() {
    this._supportCertFetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCertFetchInput() {
    return this._supportCertFetch;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicyActionListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicyActionListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicyActionListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyActionListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyActionListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicyActionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests forward by this action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#counters1 SlbTemplatePolicy#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyDualStackActionListStruct {
  /**
  * Fallback service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#fall_back SlbTemplatePolicy#fall_back}
  */
  readonly fallBack?: string;
  /**
  * Source NAT pool or pool group for fallback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#fall_back_snat SlbTemplatePolicy#fall_back_snat}
  */
  readonly fallBackSnat?: string;
  /**
  * IPv4 service group to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#ipv4 SlbTemplatePolicy#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv4 source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#ipv4_snat SlbTemplatePolicy#ipv4_snat}
  */
  readonly ipv4Snat?: string;
  /**
  * IPv6 service group to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#ipv6 SlbTemplatePolicy#ipv6}
  */
  readonly ipv6?: string;
  /**
  * IPv6 source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#ipv6_snat SlbTemplatePolicy#ipv6_snat}
  */
  readonly ipv6Snat?: string;
  /**
  * enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#log SlbTemplatePolicy#log}
  */
  readonly log?: number;
  /**
  * Action name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#name SlbTemplatePolicy#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#user_tag SlbTemplatePolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#sampling_enable SlbTemplatePolicy#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicyDualStackActionListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_back: cdktf.stringToTerraform(struct!.fallBack),
    fall_back_snat: cdktf.stringToTerraform(struct!.fallBackSnat),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv4_snat: cdktf.stringToTerraform(struct!.ipv4Snat),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    ipv6_snat: cdktf.stringToTerraform(struct!.ipv6Snat),
    log: cdktf.numberToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicyDualStackActionListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall_back: {
      value: cdktf.stringToHclTerraform(struct!.fallBack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back_snat: {
      value: cdktf.stringToHclTerraform(struct!.fallBackSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_snat: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Snat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_snat: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Snat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyDualStackActionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallBack !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBack = this._fallBack;
    }
    if (this._fallBackSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBackSnat = this._fallBackSnat;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv4Snat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Snat = this._ipv4Snat;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6Snat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Snat = this._ipv6Snat;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyDualStackActionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallBack = undefined;
      this._fallBackSnat = undefined;
      this._ipv4 = undefined;
      this._ipv4Snat = undefined;
      this._ipv6 = undefined;
      this._ipv6Snat = undefined;
      this._log = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallBack = value.fallBack;
      this._fallBackSnat = value.fallBackSnat;
      this._ipv4 = value.ipv4;
      this._ipv4Snat = value.ipv4Snat;
      this._ipv6 = value.ipv6;
      this._ipv6Snat = value.ipv6Snat;
      this._log = value.log;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // fall_back - computed: false, optional: true, required: false
  private _fallBack?: string; 
  public get fallBack() {
    return this.getStringAttribute('fall_back');
  }
  public set fallBack(value: string) {
    this._fallBack = value;
  }
  public resetFallBack() {
    this._fallBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackInput() {
    return this._fallBack;
  }

  // fall_back_snat - computed: false, optional: true, required: false
  private _fallBackSnat?: string; 
  public get fallBackSnat() {
    return this.getStringAttribute('fall_back_snat');
  }
  public set fallBackSnat(value: string) {
    this._fallBackSnat = value;
  }
  public resetFallBackSnat() {
    this._fallBackSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackSnatInput() {
    return this._fallBackSnat;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv4_snat - computed: false, optional: true, required: false
  private _ipv4Snat?: string; 
  public get ipv4Snat() {
    return this.getStringAttribute('ipv4_snat');
  }
  public set ipv4Snat(value: string) {
    this._ipv4Snat = value;
  }
  public resetIpv4Snat() {
    this._ipv4Snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SnatInput() {
    return this._ipv4Snat;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_snat - computed: false, optional: true, required: false
  private _ipv6Snat?: string; 
  public get ipv6Snat() {
    return this.getStringAttribute('ipv6_snat');
  }
  public set ipv6Snat(value: string) {
    this._ipv6Snat = value;
  }
  public resetIpv6Snat() {
    this._ipv6Snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SnatInput() {
    return this._ipv6Snat;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyDualStackActionListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyDualStackActionListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicyDualStackActionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyFiltering {
  /**
  * 'bypassed-sni-disable': Disable SNI filtering for bypassed URL's(enabled by default); 'intercepted-sni-enable': Enable SNI filtering for intercepted URL's(disabled by default); 'intercepted-http-disable': Disable HTTP(host/URL) filtering for intercepted URL's(enabled by default); 'no-sni-allow': Allow connection if SNI filtering is enabled and SNI header is not present(Drop by default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#ssli_url_filtering SlbTemplatePolicy#ssli_url_filtering}
  */
  readonly ssliUrlFiltering?: string;
}

export function slbTemplatePolicyForwardPolicyFilteringToTerraform(struct?: SlbTemplatePolicyForwardPolicyFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssli_url_filtering: cdktf.stringToTerraform(struct!.ssliUrlFiltering),
  }
}


export function slbTemplatePolicyForwardPolicyFilteringToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssli_url_filtering: {
      value: cdktf.stringToHclTerraform(struct!.ssliUrlFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyFilteringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyFiltering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssliUrlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliUrlFiltering = this._ssliUrlFiltering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyFiltering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssliUrlFiltering = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssliUrlFiltering = value.ssliUrlFiltering;
    }
  }

  // ssli_url_filtering - computed: false, optional: true, required: false
  private _ssliUrlFiltering?: string; 
  public get ssliUrlFiltering() {
    return this.getStringAttribute('ssli_url_filtering');
  }
  public set ssliUrlFiltering(value: string) {
    this._ssliUrlFiltering = value;
  }
  public resetSsliUrlFiltering() {
    this._ssliUrlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliUrlFilteringInput() {
    return this._ssliUrlFiltering;
  }
}

export class SlbTemplatePolicyForwardPolicyFilteringList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyFiltering[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyFilteringOutputReference {
    return new SlbTemplatePolicyForwardPolicyFilteringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySanFiltering {
  /**
  * 'enable-san': Enable SAN filtering(disabled by default); 'bypassed-san-disable': Disable SAN filtering for bypassed URL's(enabled by default); 'intercepted-san-enable': Enable SAN filtering for intercepted URL's(disabled by default); 'no-san-allow': Allow connection if SAN filtering is enabled and SAN field is not present(Drop by default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#ssli_url_filtering_san SlbTemplatePolicy#ssli_url_filtering_san}
  */
  readonly ssliUrlFilteringSan?: string;
}

export function slbTemplatePolicyForwardPolicySanFilteringToTerraform(struct?: SlbTemplatePolicyForwardPolicySanFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssli_url_filtering_san: cdktf.stringToTerraform(struct!.ssliUrlFilteringSan),
  }
}


export function slbTemplatePolicyForwardPolicySanFilteringToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySanFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssli_url_filtering_san: {
      value: cdktf.stringToHclTerraform(struct!.ssliUrlFilteringSan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySanFilteringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySanFiltering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssliUrlFilteringSan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliUrlFilteringSan = this._ssliUrlFilteringSan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySanFiltering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssliUrlFilteringSan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssliUrlFilteringSan = value.ssliUrlFilteringSan;
    }
  }

  // ssli_url_filtering_san - computed: false, optional: true, required: false
  private _ssliUrlFilteringSan?: string; 
  public get ssliUrlFilteringSan() {
    return this.getStringAttribute('ssli_url_filtering_san');
  }
  public set ssliUrlFilteringSan(value: string) {
    this._ssliUrlFilteringSan = value;
  }
  public resetSsliUrlFilteringSan() {
    this._ssliUrlFilteringSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliUrlFilteringSanInput() {
    return this._ssliUrlFilteringSan;
  }
}

export class SlbTemplatePolicyForwardPolicySanFilteringList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySanFiltering[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySanFilteringOutputReference {
    return new SlbTemplatePolicyForwardPolicySanFilteringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests hit this rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#counters1 SlbTemplatePolicy#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct {
  /**
  * Forwading action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action SlbTemplatePolicy#action}
  */
  readonly action?: string;
  /**
  * Disable REQMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#disable_reqmod_icap SlbTemplatePolicy#disable_reqmod_icap}
  */
  readonly disableReqmodIcap?: number;
  /**
  * Disable RESPMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#disable_respmod_icap SlbTemplatePolicy#disable_respmod_icap}
  */
  readonly disableRespmodIcap?: number;
  /**
  * Forwarding action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dual_stack_action SlbTemplatePolicy#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Match request host (HTTP stage) or SNI/SAN (SSL stage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_host SlbTemplatePolicy#match_host}
  */
  readonly matchHost?: string;
  /**
  * Match the value of HTTP header "Content-Encoding"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_content_encoding SlbTemplatePolicy#match_http_content_encoding}
  */
  readonly matchHttpContentEncoding?: string;
  /**
  * Match the value of HTTP header "Content-Length" with an inclusive range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_content_length_range_begin SlbTemplatePolicy#match_http_content_length_range_begin}
  */
  readonly matchHttpContentLengthRangeBegin?: number;
  /**
  * End of the "Content-Length" range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_content_length_range_end SlbTemplatePolicy#match_http_content_length_range_end}
  */
  readonly matchHttpContentLengthRangeEnd?: number;
  /**
  * Match the value of HTTP header "Content-Type"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_content_type SlbTemplatePolicy#match_http_content_type}
  */
  readonly matchHttpContentType?: string;
  /**
  * Matching the name of all request headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_header SlbTemplatePolicy#match_http_header}
  */
  readonly matchHttpHeader?: string;
  /**
  * Match HTTP request method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_connect SlbTemplatePolicy#match_http_method_connect}
  */
  readonly matchHttpMethodConnect?: number;
  /**
  * Match HTTP request method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_delete SlbTemplatePolicy#match_http_method_delete}
  */
  readonly matchHttpMethodDelete?: number;
  /**
  * Match HTTP request method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_get SlbTemplatePolicy#match_http_method_get}
  */
  readonly matchHttpMethodGet?: number;
  /**
  * Match HTTP request method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_head SlbTemplatePolicy#match_http_method_head}
  */
  readonly matchHttpMethodHead?: number;
  /**
  * Match HTTP request method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_options SlbTemplatePolicy#match_http_method_options}
  */
  readonly matchHttpMethodOptions?: number;
  /**
  * Match HTTP request method PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_patch SlbTemplatePolicy#match_http_method_patch}
  */
  readonly matchHttpMethodPatch?: number;
  /**
  * Match HTTP request method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_post SlbTemplatePolicy#match_http_method_post}
  */
  readonly matchHttpMethodPost?: number;
  /**
  * Match HTTP request method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_put SlbTemplatePolicy#match_http_method_put}
  */
  readonly matchHttpMethodPut?: number;
  /**
  * Match HTTP request method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_method_trace SlbTemplatePolicy#match_http_method_trace}
  */
  readonly matchHttpMethodTrace?: number;
  /**
  * Match file extension of URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_request_file_extension SlbTemplatePolicy#match_http_request_file_extension}
  */
  readonly matchHttpRequestFileExtension?: string;
  /**
  * Match URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_url SlbTemplatePolicy#match_http_url}
  */
  readonly matchHttpUrl?: string;
  /**
  * Match URI in HTTP request line by given regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_url_regex SlbTemplatePolicy#match_http_url_regex}
  */
  readonly matchHttpUrlRegex?: string;
  /**
  * Matching the value of HTTP header "User-Agent"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_http_user_agent SlbTemplatePolicy#match_http_user_agent}
  */
  readonly matchHttpUserAgent?: string;
  /**
  * Match target server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_server_address SlbTemplatePolicy#match_server_address}
  */
  readonly matchServerAddress?: string;
  /**
  * Match target server port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_server_port SlbTemplatePolicy#match_server_port}
  */
  readonly matchServerPort?: number;
  /**
  * Math targer server port range inclusively
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_server_port_range_begin SlbTemplatePolicy#match_server_port_range_begin}
  */
  readonly matchServerPortRangeBegin?: number;
  /**
  * End of port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_server_port_range_end SlbTemplatePolicy#match_server_port_range_end}
  */
  readonly matchServerPortRangeEnd?: number;
  /**
  * Enable rule in this time-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_time_range SlbTemplatePolicy#match_time_range}
  */
  readonly matchTimeRange?: string;
  /**
  * Match web-category list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_web_category_list SlbTemplatePolicy#match_web_category_list}
  */
  readonly matchWebCategoryList?: string;
  /**
  * Match web-reputation scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_web_reputation_scope SlbTemplatePolicy#match_web_reputation_scope}
  */
  readonly matchWebReputationScope?: string;
  /**
  * Send notify-page to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#notify_page SlbTemplatePolicy#notify_page}
  */
  readonly notifyPage?: string;
  /**
  * Rule priority (1000 is highest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#priority SlbTemplatePolicy#priority}
  */
  readonly priority: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#user_tag SlbTemplatePolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#sampling_enable SlbTemplatePolicy#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    disable_reqmod_icap: cdktf.numberToTerraform(struct!.disableReqmodIcap),
    disable_respmod_icap: cdktf.numberToTerraform(struct!.disableRespmodIcap),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    match_host: cdktf.stringToTerraform(struct!.matchHost),
    match_http_content_encoding: cdktf.stringToTerraform(struct!.matchHttpContentEncoding),
    match_http_content_length_range_begin: cdktf.numberToTerraform(struct!.matchHttpContentLengthRangeBegin),
    match_http_content_length_range_end: cdktf.numberToTerraform(struct!.matchHttpContentLengthRangeEnd),
    match_http_content_type: cdktf.stringToTerraform(struct!.matchHttpContentType),
    match_http_header: cdktf.stringToTerraform(struct!.matchHttpHeader),
    match_http_method_connect: cdktf.numberToTerraform(struct!.matchHttpMethodConnect),
    match_http_method_delete: cdktf.numberToTerraform(struct!.matchHttpMethodDelete),
    match_http_method_get: cdktf.numberToTerraform(struct!.matchHttpMethodGet),
    match_http_method_head: cdktf.numberToTerraform(struct!.matchHttpMethodHead),
    match_http_method_options: cdktf.numberToTerraform(struct!.matchHttpMethodOptions),
    match_http_method_patch: cdktf.numberToTerraform(struct!.matchHttpMethodPatch),
    match_http_method_post: cdktf.numberToTerraform(struct!.matchHttpMethodPost),
    match_http_method_put: cdktf.numberToTerraform(struct!.matchHttpMethodPut),
    match_http_method_trace: cdktf.numberToTerraform(struct!.matchHttpMethodTrace),
    match_http_request_file_extension: cdktf.stringToTerraform(struct!.matchHttpRequestFileExtension),
    match_http_url: cdktf.stringToTerraform(struct!.matchHttpUrl),
    match_http_url_regex: cdktf.stringToTerraform(struct!.matchHttpUrlRegex),
    match_http_user_agent: cdktf.stringToTerraform(struct!.matchHttpUserAgent),
    match_server_address: cdktf.stringToTerraform(struct!.matchServerAddress),
    match_server_port: cdktf.numberToTerraform(struct!.matchServerPort),
    match_server_port_range_begin: cdktf.numberToTerraform(struct!.matchServerPortRangeBegin),
    match_server_port_range_end: cdktf.numberToTerraform(struct!.matchServerPortRangeEnd),
    match_time_range: cdktf.stringToTerraform(struct!.matchTimeRange),
    match_web_category_list: cdktf.stringToTerraform(struct!.matchWebCategoryList),
    match_web_reputation_scope: cdktf.stringToTerraform(struct!.matchWebReputationScope),
    notify_page: cdktf.stringToTerraform(struct!.notifyPage),
    priority: cdktf.numberToTerraform(struct!.priority),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_reqmod_icap: {
      value: cdktf.numberToHclTerraform(struct!.disableReqmodIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_respmod_icap: {
      value: cdktf.numberToHclTerraform(struct!.disableRespmodIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_host: {
      value: cdktf.stringToHclTerraform(struct!.matchHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpContentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_content_length_range_begin: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpContentLengthRangeBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_content_length_range_end: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpContentLengthRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_content_type: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_header: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_method_connect: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_delete: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_get: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_head: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodHead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_options: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_patch: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodPatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_post: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_put: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_trace: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_request_file_extension: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpRequestFileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_url: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_url_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpUrlRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_user_agent: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpUserAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_server_address: {
      value: cdktf.stringToHclTerraform(struct!.matchServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_server_port: {
      value: cdktf.numberToHclTerraform(struct!.matchServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_server_port_range_begin: {
      value: cdktf.numberToHclTerraform(struct!.matchServerPortRangeBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_server_port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.matchServerPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_time_range: {
      value: cdktf.stringToHclTerraform(struct!.matchTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_web_category_list: {
      value: cdktf.stringToHclTerraform(struct!.matchWebCategoryList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_web_reputation_scope: {
      value: cdktf.stringToHclTerraform(struct!.matchWebReputationScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_page: {
      value: cdktf.stringToHclTerraform(struct!.notifyPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._disableReqmodIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReqmodIcap = this._disableReqmodIcap;
    }
    if (this._disableRespmodIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRespmodIcap = this._disableRespmodIcap;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._matchHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHost = this._matchHost;
    }
    if (this._matchHttpContentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentEncoding = this._matchHttpContentEncoding;
    }
    if (this._matchHttpContentLengthRangeBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentLengthRangeBegin = this._matchHttpContentLengthRangeBegin;
    }
    if (this._matchHttpContentLengthRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentLengthRangeEnd = this._matchHttpContentLengthRangeEnd;
    }
    if (this._matchHttpContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentType = this._matchHttpContentType;
    }
    if (this._matchHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpHeader = this._matchHttpHeader;
    }
    if (this._matchHttpMethodConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodConnect = this._matchHttpMethodConnect;
    }
    if (this._matchHttpMethodDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodDelete = this._matchHttpMethodDelete;
    }
    if (this._matchHttpMethodGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodGet = this._matchHttpMethodGet;
    }
    if (this._matchHttpMethodHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodHead = this._matchHttpMethodHead;
    }
    if (this._matchHttpMethodOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodOptions = this._matchHttpMethodOptions;
    }
    if (this._matchHttpMethodPatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodPatch = this._matchHttpMethodPatch;
    }
    if (this._matchHttpMethodPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodPost = this._matchHttpMethodPost;
    }
    if (this._matchHttpMethodPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodPut = this._matchHttpMethodPut;
    }
    if (this._matchHttpMethodTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodTrace = this._matchHttpMethodTrace;
    }
    if (this._matchHttpRequestFileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpRequestFileExtension = this._matchHttpRequestFileExtension;
    }
    if (this._matchHttpUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpUrl = this._matchHttpUrl;
    }
    if (this._matchHttpUrlRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpUrlRegex = this._matchHttpUrlRegex;
    }
    if (this._matchHttpUserAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpUserAgent = this._matchHttpUserAgent;
    }
    if (this._matchServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerAddress = this._matchServerAddress;
    }
    if (this._matchServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerPort = this._matchServerPort;
    }
    if (this._matchServerPortRangeBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerPortRangeBegin = this._matchServerPortRangeBegin;
    }
    if (this._matchServerPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerPortRangeEnd = this._matchServerPortRangeEnd;
    }
    if (this._matchTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTimeRange = this._matchTimeRange;
    }
    if (this._matchWebCategoryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchWebCategoryList = this._matchWebCategoryList;
    }
    if (this._matchWebReputationScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchWebReputationScope = this._matchWebReputationScope;
    }
    if (this._notifyPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyPage = this._notifyPage;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._disableReqmodIcap = undefined;
      this._disableRespmodIcap = undefined;
      this._dualStackAction = undefined;
      this._matchHost = undefined;
      this._matchHttpContentEncoding = undefined;
      this._matchHttpContentLengthRangeBegin = undefined;
      this._matchHttpContentLengthRangeEnd = undefined;
      this._matchHttpContentType = undefined;
      this._matchHttpHeader = undefined;
      this._matchHttpMethodConnect = undefined;
      this._matchHttpMethodDelete = undefined;
      this._matchHttpMethodGet = undefined;
      this._matchHttpMethodHead = undefined;
      this._matchHttpMethodOptions = undefined;
      this._matchHttpMethodPatch = undefined;
      this._matchHttpMethodPost = undefined;
      this._matchHttpMethodPut = undefined;
      this._matchHttpMethodTrace = undefined;
      this._matchHttpRequestFileExtension = undefined;
      this._matchHttpUrl = undefined;
      this._matchHttpUrlRegex = undefined;
      this._matchHttpUserAgent = undefined;
      this._matchServerAddress = undefined;
      this._matchServerPort = undefined;
      this._matchServerPortRangeBegin = undefined;
      this._matchServerPortRangeEnd = undefined;
      this._matchTimeRange = undefined;
      this._matchWebCategoryList = undefined;
      this._matchWebReputationScope = undefined;
      this._notifyPage = undefined;
      this._priority = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._disableReqmodIcap = value.disableReqmodIcap;
      this._disableRespmodIcap = value.disableRespmodIcap;
      this._dualStackAction = value.dualStackAction;
      this._matchHost = value.matchHost;
      this._matchHttpContentEncoding = value.matchHttpContentEncoding;
      this._matchHttpContentLengthRangeBegin = value.matchHttpContentLengthRangeBegin;
      this._matchHttpContentLengthRangeEnd = value.matchHttpContentLengthRangeEnd;
      this._matchHttpContentType = value.matchHttpContentType;
      this._matchHttpHeader = value.matchHttpHeader;
      this._matchHttpMethodConnect = value.matchHttpMethodConnect;
      this._matchHttpMethodDelete = value.matchHttpMethodDelete;
      this._matchHttpMethodGet = value.matchHttpMethodGet;
      this._matchHttpMethodHead = value.matchHttpMethodHead;
      this._matchHttpMethodOptions = value.matchHttpMethodOptions;
      this._matchHttpMethodPatch = value.matchHttpMethodPatch;
      this._matchHttpMethodPost = value.matchHttpMethodPost;
      this._matchHttpMethodPut = value.matchHttpMethodPut;
      this._matchHttpMethodTrace = value.matchHttpMethodTrace;
      this._matchHttpRequestFileExtension = value.matchHttpRequestFileExtension;
      this._matchHttpUrl = value.matchHttpUrl;
      this._matchHttpUrlRegex = value.matchHttpUrlRegex;
      this._matchHttpUserAgent = value.matchHttpUserAgent;
      this._matchServerAddress = value.matchServerAddress;
      this._matchServerPort = value.matchServerPort;
      this._matchServerPortRangeBegin = value.matchServerPortRangeBegin;
      this._matchServerPortRangeEnd = value.matchServerPortRangeEnd;
      this._matchTimeRange = value.matchTimeRange;
      this._matchWebCategoryList = value.matchWebCategoryList;
      this._matchWebReputationScope = value.matchWebReputationScope;
      this._notifyPage = value.notifyPage;
      this._priority = value.priority;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // disable_reqmod_icap - computed: false, optional: true, required: false
  private _disableReqmodIcap?: number; 
  public get disableReqmodIcap() {
    return this.getNumberAttribute('disable_reqmod_icap');
  }
  public set disableReqmodIcap(value: number) {
    this._disableReqmodIcap = value;
  }
  public resetDisableReqmodIcap() {
    this._disableReqmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReqmodIcapInput() {
    return this._disableReqmodIcap;
  }

  // disable_respmod_icap - computed: false, optional: true, required: false
  private _disableRespmodIcap?: number; 
  public get disableRespmodIcap() {
    return this.getNumberAttribute('disable_respmod_icap');
  }
  public set disableRespmodIcap(value: number) {
    this._disableRespmodIcap = value;
  }
  public resetDisableRespmodIcap() {
    this._disableRespmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRespmodIcapInput() {
    return this._disableRespmodIcap;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // match_host - computed: false, optional: true, required: false
  private _matchHost?: string; 
  public get matchHost() {
    return this.getStringAttribute('match_host');
  }
  public set matchHost(value: string) {
    this._matchHost = value;
  }
  public resetMatchHost() {
    this._matchHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHostInput() {
    return this._matchHost;
  }

  // match_http_content_encoding - computed: false, optional: true, required: false
  private _matchHttpContentEncoding?: string; 
  public get matchHttpContentEncoding() {
    return this.getStringAttribute('match_http_content_encoding');
  }
  public set matchHttpContentEncoding(value: string) {
    this._matchHttpContentEncoding = value;
  }
  public resetMatchHttpContentEncoding() {
    this._matchHttpContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentEncodingInput() {
    return this._matchHttpContentEncoding;
  }

  // match_http_content_length_range_begin - computed: false, optional: true, required: false
  private _matchHttpContentLengthRangeBegin?: number; 
  public get matchHttpContentLengthRangeBegin() {
    return this.getNumberAttribute('match_http_content_length_range_begin');
  }
  public set matchHttpContentLengthRangeBegin(value: number) {
    this._matchHttpContentLengthRangeBegin = value;
  }
  public resetMatchHttpContentLengthRangeBegin() {
    this._matchHttpContentLengthRangeBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentLengthRangeBeginInput() {
    return this._matchHttpContentLengthRangeBegin;
  }

  // match_http_content_length_range_end - computed: false, optional: true, required: false
  private _matchHttpContentLengthRangeEnd?: number; 
  public get matchHttpContentLengthRangeEnd() {
    return this.getNumberAttribute('match_http_content_length_range_end');
  }
  public set matchHttpContentLengthRangeEnd(value: number) {
    this._matchHttpContentLengthRangeEnd = value;
  }
  public resetMatchHttpContentLengthRangeEnd() {
    this._matchHttpContentLengthRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentLengthRangeEndInput() {
    return this._matchHttpContentLengthRangeEnd;
  }

  // match_http_content_type - computed: false, optional: true, required: false
  private _matchHttpContentType?: string; 
  public get matchHttpContentType() {
    return this.getStringAttribute('match_http_content_type');
  }
  public set matchHttpContentType(value: string) {
    this._matchHttpContentType = value;
  }
  public resetMatchHttpContentType() {
    this._matchHttpContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentTypeInput() {
    return this._matchHttpContentType;
  }

  // match_http_header - computed: false, optional: true, required: false
  private _matchHttpHeader?: string; 
  public get matchHttpHeader() {
    return this.getStringAttribute('match_http_header');
  }
  public set matchHttpHeader(value: string) {
    this._matchHttpHeader = value;
  }
  public resetMatchHttpHeader() {
    this._matchHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpHeaderInput() {
    return this._matchHttpHeader;
  }

  // match_http_method_connect - computed: false, optional: true, required: false
  private _matchHttpMethodConnect?: number; 
  public get matchHttpMethodConnect() {
    return this.getNumberAttribute('match_http_method_connect');
  }
  public set matchHttpMethodConnect(value: number) {
    this._matchHttpMethodConnect = value;
  }
  public resetMatchHttpMethodConnect() {
    this._matchHttpMethodConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodConnectInput() {
    return this._matchHttpMethodConnect;
  }

  // match_http_method_delete - computed: false, optional: true, required: false
  private _matchHttpMethodDelete?: number; 
  public get matchHttpMethodDelete() {
    return this.getNumberAttribute('match_http_method_delete');
  }
  public set matchHttpMethodDelete(value: number) {
    this._matchHttpMethodDelete = value;
  }
  public resetMatchHttpMethodDelete() {
    this._matchHttpMethodDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodDeleteInput() {
    return this._matchHttpMethodDelete;
  }

  // match_http_method_get - computed: false, optional: true, required: false
  private _matchHttpMethodGet?: number; 
  public get matchHttpMethodGet() {
    return this.getNumberAttribute('match_http_method_get');
  }
  public set matchHttpMethodGet(value: number) {
    this._matchHttpMethodGet = value;
  }
  public resetMatchHttpMethodGet() {
    this._matchHttpMethodGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodGetInput() {
    return this._matchHttpMethodGet;
  }

  // match_http_method_head - computed: false, optional: true, required: false
  private _matchHttpMethodHead?: number; 
  public get matchHttpMethodHead() {
    return this.getNumberAttribute('match_http_method_head');
  }
  public set matchHttpMethodHead(value: number) {
    this._matchHttpMethodHead = value;
  }
  public resetMatchHttpMethodHead() {
    this._matchHttpMethodHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodHeadInput() {
    return this._matchHttpMethodHead;
  }

  // match_http_method_options - computed: false, optional: true, required: false
  private _matchHttpMethodOptions?: number; 
  public get matchHttpMethodOptions() {
    return this.getNumberAttribute('match_http_method_options');
  }
  public set matchHttpMethodOptions(value: number) {
    this._matchHttpMethodOptions = value;
  }
  public resetMatchHttpMethodOptions() {
    this._matchHttpMethodOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodOptionsInput() {
    return this._matchHttpMethodOptions;
  }

  // match_http_method_patch - computed: false, optional: true, required: false
  private _matchHttpMethodPatch?: number; 
  public get matchHttpMethodPatch() {
    return this.getNumberAttribute('match_http_method_patch');
  }
  public set matchHttpMethodPatch(value: number) {
    this._matchHttpMethodPatch = value;
  }
  public resetMatchHttpMethodPatch() {
    this._matchHttpMethodPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodPatchInput() {
    return this._matchHttpMethodPatch;
  }

  // match_http_method_post - computed: false, optional: true, required: false
  private _matchHttpMethodPost?: number; 
  public get matchHttpMethodPost() {
    return this.getNumberAttribute('match_http_method_post');
  }
  public set matchHttpMethodPost(value: number) {
    this._matchHttpMethodPost = value;
  }
  public resetMatchHttpMethodPost() {
    this._matchHttpMethodPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodPostInput() {
    return this._matchHttpMethodPost;
  }

  // match_http_method_put - computed: false, optional: true, required: false
  private _matchHttpMethodPut?: number; 
  public get matchHttpMethodPut() {
    return this.getNumberAttribute('match_http_method_put');
  }
  public set matchHttpMethodPut(value: number) {
    this._matchHttpMethodPut = value;
  }
  public resetMatchHttpMethodPut() {
    this._matchHttpMethodPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodPutInput() {
    return this._matchHttpMethodPut;
  }

  // match_http_method_trace - computed: false, optional: true, required: false
  private _matchHttpMethodTrace?: number; 
  public get matchHttpMethodTrace() {
    return this.getNumberAttribute('match_http_method_trace');
  }
  public set matchHttpMethodTrace(value: number) {
    this._matchHttpMethodTrace = value;
  }
  public resetMatchHttpMethodTrace() {
    this._matchHttpMethodTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodTraceInput() {
    return this._matchHttpMethodTrace;
  }

  // match_http_request_file_extension - computed: false, optional: true, required: false
  private _matchHttpRequestFileExtension?: string; 
  public get matchHttpRequestFileExtension() {
    return this.getStringAttribute('match_http_request_file_extension');
  }
  public set matchHttpRequestFileExtension(value: string) {
    this._matchHttpRequestFileExtension = value;
  }
  public resetMatchHttpRequestFileExtension() {
    this._matchHttpRequestFileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpRequestFileExtensionInput() {
    return this._matchHttpRequestFileExtension;
  }

  // match_http_url - computed: false, optional: true, required: false
  private _matchHttpUrl?: string; 
  public get matchHttpUrl() {
    return this.getStringAttribute('match_http_url');
  }
  public set matchHttpUrl(value: string) {
    this._matchHttpUrl = value;
  }
  public resetMatchHttpUrl() {
    this._matchHttpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpUrlInput() {
    return this._matchHttpUrl;
  }

  // match_http_url_regex - computed: false, optional: true, required: false
  private _matchHttpUrlRegex?: string; 
  public get matchHttpUrlRegex() {
    return this.getStringAttribute('match_http_url_regex');
  }
  public set matchHttpUrlRegex(value: string) {
    this._matchHttpUrlRegex = value;
  }
  public resetMatchHttpUrlRegex() {
    this._matchHttpUrlRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpUrlRegexInput() {
    return this._matchHttpUrlRegex;
  }

  // match_http_user_agent - computed: false, optional: true, required: false
  private _matchHttpUserAgent?: string; 
  public get matchHttpUserAgent() {
    return this.getStringAttribute('match_http_user_agent');
  }
  public set matchHttpUserAgent(value: string) {
    this._matchHttpUserAgent = value;
  }
  public resetMatchHttpUserAgent() {
    this._matchHttpUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpUserAgentInput() {
    return this._matchHttpUserAgent;
  }

  // match_server_address - computed: false, optional: true, required: false
  private _matchServerAddress?: string; 
  public get matchServerAddress() {
    return this.getStringAttribute('match_server_address');
  }
  public set matchServerAddress(value: string) {
    this._matchServerAddress = value;
  }
  public resetMatchServerAddress() {
    this._matchServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerAddressInput() {
    return this._matchServerAddress;
  }

  // match_server_port - computed: false, optional: true, required: false
  private _matchServerPort?: number; 
  public get matchServerPort() {
    return this.getNumberAttribute('match_server_port');
  }
  public set matchServerPort(value: number) {
    this._matchServerPort = value;
  }
  public resetMatchServerPort() {
    this._matchServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerPortInput() {
    return this._matchServerPort;
  }

  // match_server_port_range_begin - computed: false, optional: true, required: false
  private _matchServerPortRangeBegin?: number; 
  public get matchServerPortRangeBegin() {
    return this.getNumberAttribute('match_server_port_range_begin');
  }
  public set matchServerPortRangeBegin(value: number) {
    this._matchServerPortRangeBegin = value;
  }
  public resetMatchServerPortRangeBegin() {
    this._matchServerPortRangeBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerPortRangeBeginInput() {
    return this._matchServerPortRangeBegin;
  }

  // match_server_port_range_end - computed: false, optional: true, required: false
  private _matchServerPortRangeEnd?: number; 
  public get matchServerPortRangeEnd() {
    return this.getNumberAttribute('match_server_port_range_end');
  }
  public set matchServerPortRangeEnd(value: number) {
    this._matchServerPortRangeEnd = value;
  }
  public resetMatchServerPortRangeEnd() {
    this._matchServerPortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerPortRangeEndInput() {
    return this._matchServerPortRangeEnd;
  }

  // match_time_range - computed: false, optional: true, required: false
  private _matchTimeRange?: string; 
  public get matchTimeRange() {
    return this.getStringAttribute('match_time_range');
  }
  public set matchTimeRange(value: string) {
    this._matchTimeRange = value;
  }
  public resetMatchTimeRange() {
    this._matchTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTimeRangeInput() {
    return this._matchTimeRange;
  }

  // match_web_category_list - computed: false, optional: true, required: false
  private _matchWebCategoryList?: string; 
  public get matchWebCategoryList() {
    return this.getStringAttribute('match_web_category_list');
  }
  public set matchWebCategoryList(value: string) {
    this._matchWebCategoryList = value;
  }
  public resetMatchWebCategoryList() {
    this._matchWebCategoryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchWebCategoryListInput() {
    return this._matchWebCategoryList;
  }

  // match_web_reputation_scope - computed: false, optional: true, required: false
  private _matchWebReputationScope?: string; 
  public get matchWebReputationScope() {
    return this.getStringAttribute('match_web_reputation_scope');
  }
  public set matchWebReputationScope(value: string) {
    this._matchWebReputationScope = value;
  }
  public resetMatchWebReputationScope() {
    this._matchWebReputationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchWebReputationScopeInput() {
    return this._matchWebReputationScope;
  }

  // notify_page - computed: false, optional: true, required: false
  private _notifyPage?: string; 
  public get notifyPage() {
    return this.getStringAttribute('notify_page');
  }
  public set notifyPage(value: string) {
    this._notifyPage = value;
  }
  public resetNotifyPage() {
    this._notifyPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPageInput() {
    return this._notifyPage;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests matching this destination rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#counters1 SlbTemplatePolicy#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAny {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action SlbTemplatePolicy#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dual_stack_action SlbTemplatePolicy#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#sampling_enable SlbTemplatePolicy#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAnyToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnyOutputReference | SlbTemplatePolicyForwardPolicySourceListDestinationAny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAnyToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnyOutputReference | SlbTemplatePolicyForwardPolicySourceListDestinationAny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._dualStackAction = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._dualStackAction = value.dualStackAction;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action SlbTemplatePolicy#action}
  */
  readonly action?: string;
  /**
  * Destination Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dest_class_list SlbTemplatePolicy#dest_class_list}
  */
  readonly destClassList: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dual_stack_action SlbTemplatePolicy#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#priority SlbTemplatePolicy#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': Match URL; 'ip': Match destination IP address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#type SlbTemplatePolicy#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dest_class_list: cdktf.stringToTerraform(struct!.destClassList),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_class_list: {
      value: cdktf.stringToHclTerraform(struct!.destClassList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destClassList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destClassList = this._destClassList;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destClassList = undefined;
      this._dualStackAction = undefined;
      this._priority = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destClassList = value.destClassList;
      this._dualStackAction = value.dualStackAction;
      this._priority = value.priority;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dest_class_list - computed: false, optional: false, required: true
  private _destClassList?: string; 
  public get destClassList() {
    return this.getStringAttribute('dest_class_list');
  }
  public set destClassList(value: string) {
    this._destClassList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destClassListInput() {
    return this._destClassList;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action SlbTemplatePolicy#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dual_stack_action SlbTemplatePolicy#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#priority SlbTemplatePolicy#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': match URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#type SlbTemplatePolicy#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Destination Web Category List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#web_category_list SlbTemplatePolicy#web_category_list}
  */
  readonly webCategoryList: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    web_category_list: cdktf.stringToTerraform(struct!.webCategoryList),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    web_category_list: {
      value: cdktf.stringToHclTerraform(struct!.webCategoryList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._webCategoryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCategoryList = this._webCategoryList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dualStackAction = undefined;
      this._priority = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._webCategoryList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dualStackAction = value.dualStackAction;
      this._priority = value.priority;
      this._type = value.type;
      this._uuid = value.uuid;
      this._webCategoryList = value.webCategoryList;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // web_category_list - computed: false, optional: false, required: true
  private _webCategoryList?: string; 
  public get webCategoryList() {
    return this.getStringAttribute('web_category_list');
  }
  public set webCategoryList(value: string) {
    this._webCategoryList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryListInput() {
    return this._webCategoryList;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action SlbTemplatePolicy#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dual_stack_action SlbTemplatePolicy#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#priority SlbTemplatePolicy#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': match URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#type SlbTemplatePolicy#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Destination Web Reputation Scope Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#web_reputation_scope SlbTemplatePolicy#web_reputation_scope}
  */
  readonly webReputationScope: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    web_reputation_scope: cdktf.stringToTerraform(struct!.webReputationScope),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    web_reputation_scope: {
      value: cdktf.stringToHclTerraform(struct!.webReputationScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._webReputationScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.webReputationScope = this._webReputationScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dualStackAction = undefined;
      this._priority = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._webReputationScope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dualStackAction = value.dualStackAction;
      this._priority = value.priority;
      this._type = value.type;
      this._uuid = value.uuid;
      this._webReputationScope = value.webReputationScope;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // web_reputation_scope - computed: false, optional: false, required: true
  private _webReputationScope?: string; 
  public get webReputationScope() {
    return this.getStringAttribute('web_reputation_scope');
  }
  public set webReputationScope(value: string) {
    this._webReputationScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationScopeInput() {
    return this._webReputationScope;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestination {
  /**
  * adv_match_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#adv_match_list SlbTemplatePolicy#adv_match_list}
  */
  readonly advMatchList?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct[] | cdktf.IResolvable;
  /**
  * any block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#any SlbTemplatePolicy#any}
  */
  readonly any?: SlbTemplatePolicyForwardPolicySourceListDestinationAny;
  /**
  * class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#class_list_list SlbTemplatePolicy#class_list_list}
  */
  readonly classListList?: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct[] | cdktf.IResolvable;
  /**
  * web_category_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#web_category_list_list SlbTemplatePolicy#web_category_list_list}
  */
  readonly webCategoryListList?: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct[] | cdktf.IResolvable;
  /**
  * web_reputation_scope_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#web_reputation_scope_list SlbTemplatePolicy#web_reputation_scope_list}
  */
  readonly webReputationScopeList?: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationOutputReference | SlbTemplatePolicyForwardPolicySourceListDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adv_match_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructToTerraform, true)(struct!.advMatchList),
    any: slbTemplatePolicyForwardPolicySourceListDestinationAnyToTerraform(struct!.any),
    class_list_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructToTerraform, true)(struct!.classListList),
    web_category_list_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructToTerraform, true)(struct!.webCategoryListList),
    web_reputation_scope_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructToTerraform, true)(struct!.webReputationScopeList),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationOutputReference | SlbTemplatePolicyForwardPolicySourceListDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adv_match_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructToHclTerraform, true)(struct!.advMatchList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructList",
    },
    any: {
      value: slbTemplatePolicyForwardPolicySourceListDestinationAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAnyList",
    },
    class_list_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructToHclTerraform, true)(struct!.classListList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructList",
    },
    web_category_list_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructToHclTerraform, true)(struct!.webCategoryListList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructList",
    },
    web_reputation_scope_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructToHclTerraform, true)(struct!.webReputationScopeList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advMatchList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advMatchList = this._advMatchList?.internalValue;
    }
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    if (this._classListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListList = this._classListList?.internalValue;
    }
    if (this._webCategoryListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCategoryListList = this._webCategoryListList?.internalValue;
    }
    if (this._webReputationScopeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webReputationScopeList = this._webReputationScopeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advMatchList.internalValue = undefined;
      this._any.internalValue = undefined;
      this._classListList.internalValue = undefined;
      this._webCategoryListList.internalValue = undefined;
      this._webReputationScopeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advMatchList.internalValue = value.advMatchList;
      this._any.internalValue = value.any;
      this._classListList.internalValue = value.classListList;
      this._webCategoryListList.internalValue = value.webCategoryListList;
      this._webReputationScopeList.internalValue = value.webReputationScopeList;
    }
  }

  // adv_match_list - computed: false, optional: true, required: false
  private _advMatchList = new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructList(this, "adv_match_list", false);
  public get advMatchList() {
    return this._advMatchList;
  }
  public putAdvMatchList(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStruct[] | cdktf.IResolvable) {
    this._advMatchList.internalValue = value;
  }
  public resetAdvMatchList() {
    this._advMatchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advMatchListInput() {
    return this._advMatchList.internalValue;
  }

  // any - computed: false, optional: true, required: false
  private _any = new SlbTemplatePolicyForwardPolicySourceListDestinationAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: SlbTemplatePolicyForwardPolicySourceListDestinationAny) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }

  // class_list_list - computed: false, optional: true, required: false
  private _classListList = new SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructList(this, "class_list_list", false);
  public get classListList() {
    return this._classListList;
  }
  public putClassListList(value: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStruct[] | cdktf.IResolvable) {
    this._classListList.internalValue = value;
  }
  public resetClassListList() {
    this._classListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListListInput() {
    return this._classListList.internalValue;
  }

  // web_category_list_list - computed: false, optional: true, required: false
  private _webCategoryListList = new SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructList(this, "web_category_list_list", false);
  public get webCategoryListList() {
    return this._webCategoryListList;
  }
  public putWebCategoryListList(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStruct[] | cdktf.IResolvable) {
    this._webCategoryListList.internalValue = value;
  }
  public resetWebCategoryListList() {
    this._webCategoryListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryListListInput() {
    return this._webCategoryListList.internalValue;
  }

  // web_reputation_scope_list - computed: false, optional: true, required: false
  private _webReputationScopeList = new SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructList(this, "web_reputation_scope_list", false);
  public get webReputationScopeList() {
    return this._webReputationScopeList;
  }
  public putWebReputationScopeList(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStruct[] | cdktf.IResolvable) {
    this._webReputationScopeList.internalValue = value;
  }
  public resetWebReputationScopeList() {
    this._webReputationScopeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationScopeListInput() {
    return this._webReputationScopeList.internalValue;
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests matching this source rule; 'destination-match-not-found': Number of requests without matching destination rule; 'no-host-info': Failed to parse ip or host information from request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#counters1 SlbTemplatePolicy#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceListSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceListSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListStruct {
  /**
  * Match any source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_any SlbTemplatePolicy#match_any}
  */
  readonly matchAny?: number;
  /**
  * Authorize-policy for user and group based policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_authorize_policy SlbTemplatePolicy#match_authorize_policy}
  */
  readonly matchAuthorizePolicy?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#match_class_list SlbTemplatePolicy#match_class_list}
  */
  readonly matchClassList?: string;
  /**
  * source destination match rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#name SlbTemplatePolicy#name}
  */
  readonly name: string;
  /**
  * Priority of the source(higher the number higher the priority, default 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#priority SlbTemplatePolicy#priority}
  */
  readonly priority?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#user_tag SlbTemplatePolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#destination SlbTemplatePolicy#destination}
  */
  readonly destination?: SlbTemplatePolicyForwardPolicySourceListDestination;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#sampling_enable SlbTemplatePolicy#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceListSamplingEnable[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_any: cdktf.numberToTerraform(struct!.matchAny),
    match_authorize_policy: cdktf.stringToTerraform(struct!.matchAuthorizePolicy),
    match_class_list: cdktf.stringToTerraform(struct!.matchClassList),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    destination: slbTemplatePolicyForwardPolicySourceListDestinationToTerraform(struct!.destination),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_any: {
      value: cdktf.numberToHclTerraform(struct!.matchAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_authorize_policy: {
      value: cdktf.stringToHclTerraform(struct!.matchAuthorizePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_class_list: {
      value: cdktf.stringToHclTerraform(struct!.matchClassList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    destination: {
      value: slbTemplatePolicyForwardPolicySourceListDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAny = this._matchAny;
    }
    if (this._matchAuthorizePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAuthorizePolicy = this._matchAuthorizePolicy;
    }
    if (this._matchClassList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchClassList = this._matchClassList;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchAny = undefined;
      this._matchAuthorizePolicy = undefined;
      this._matchClassList = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._destination.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchAny = value.matchAny;
      this._matchAuthorizePolicy = value.matchAuthorizePolicy;
      this._matchClassList = value.matchClassList;
      this._name = value.name;
      this._priority = value.priority;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._destination.internalValue = value.destination;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // match_any - computed: false, optional: true, required: false
  private _matchAny?: number; 
  public get matchAny() {
    return this.getNumberAttribute('match_any');
  }
  public set matchAny(value: number) {
    this._matchAny = value;
  }
  public resetMatchAny() {
    this._matchAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyInput() {
    return this._matchAny;
  }

  // match_authorize_policy - computed: false, optional: true, required: false
  private _matchAuthorizePolicy?: string; 
  public get matchAuthorizePolicy() {
    return this.getStringAttribute('match_authorize_policy');
  }
  public set matchAuthorizePolicy(value: string) {
    this._matchAuthorizePolicy = value;
  }
  public resetMatchAuthorizePolicy() {
    this._matchAuthorizePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAuthorizePolicyInput() {
    return this._matchAuthorizePolicy;
  }

  // match_class_list - computed: false, optional: true, required: false
  private _matchClassList?: string; 
  public get matchClassList() {
    return this.getStringAttribute('match_class_list');
  }
  public set matchClassList(value: string) {
    this._matchClassList = value;
  }
  public resetMatchClassList() {
    this._matchClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClassListInput() {
    return this._matchClassList;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // destination - computed: false, optional: true, required: false
  private _destination = new SlbTemplatePolicyForwardPolicySourceListDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: SlbTemplatePolicyForwardPolicySourceListDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicy {
  /**
  * Enable acos event logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#acos_event_log SlbTemplatePolicy#acos_event_log}
  */
  readonly acosEventLog?: number;
  /**
  * Enable adv-match rules and deactive all the other kinds of destination rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#enable_adv_match SlbTemplatePolicy#enable_adv_match}
  */
  readonly enableAdvMatch?: number;
  /**
  * Forward HTTP CONNECT request to ICAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#forward_http_connect_to_icap SlbTemplatePolicy#forward_http_connect_to_icap}
  */
  readonly forwardHttpConnectToIcap?: number;
  /**
  * Enable local logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#local_logging SlbTemplatePolicy#local_logging}
  */
  readonly localLogging?: number;
  /**
  * Inspects only first request of a connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#no_client_conn_reuse SlbTemplatePolicy#no_client_conn_reuse}
  */
  readonly noClientConnReuse?: number;
  /**
  * ICAP reqmod template (Reqmod ICAP Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#reqmod_icap SlbTemplatePolicy#reqmod_icap}
  */
  readonly reqmodIcap?: string;
  /**
  * Wait for web category to be resolved before taking proxy decision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#require_web_category SlbTemplatePolicy#require_web_category}
  */
  readonly requireWebCategory?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#uuid SlbTemplatePolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * action_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#action_list SlbTemplatePolicy#action_list}
  */
  readonly actionList?: SlbTemplatePolicyForwardPolicyActionListStruct[] | cdktf.IResolvable;
  /**
  * dual_stack_action_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#dual_stack_action_list SlbTemplatePolicy#dual_stack_action_list}
  */
  readonly dualStackActionList?: SlbTemplatePolicyForwardPolicyDualStackActionListStruct[] | cdktf.IResolvable;
  /**
  * filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#filtering SlbTemplatePolicy#filtering}
  */
  readonly filtering?: SlbTemplatePolicyForwardPolicyFiltering[] | cdktf.IResolvable;
  /**
  * san_filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#san_filtering SlbTemplatePolicy#san_filtering}
  */
  readonly sanFiltering?: SlbTemplatePolicyForwardPolicySanFiltering[] | cdktf.IResolvable;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#source_list SlbTemplatePolicy#source_list}
  */
  readonly sourceList?: SlbTemplatePolicyForwardPolicySourceListStruct[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicyToTerraform(struct?: SlbTemplatePolicyForwardPolicyOutputReference | SlbTemplatePolicyForwardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acos_event_log: cdktf.numberToTerraform(struct!.acosEventLog),
    enable_adv_match: cdktf.numberToTerraform(struct!.enableAdvMatch),
    forward_http_connect_to_icap: cdktf.numberToTerraform(struct!.forwardHttpConnectToIcap),
    local_logging: cdktf.numberToTerraform(struct!.localLogging),
    no_client_conn_reuse: cdktf.numberToTerraform(struct!.noClientConnReuse),
    reqmod_icap: cdktf.stringToTerraform(struct!.reqmodIcap),
    require_web_category: cdktf.numberToTerraform(struct!.requireWebCategory),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    action_list: cdktf.listMapper(slbTemplatePolicyForwardPolicyActionListStructToTerraform, true)(struct!.actionList),
    dual_stack_action_list: cdktf.listMapper(slbTemplatePolicyForwardPolicyDualStackActionListStructToTerraform, true)(struct!.dualStackActionList),
    filtering: cdktf.listMapper(slbTemplatePolicyForwardPolicyFilteringToTerraform, true)(struct!.filtering),
    san_filtering: cdktf.listMapper(slbTemplatePolicyForwardPolicySanFilteringToTerraform, true)(struct!.sanFiltering),
    source_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListStructToTerraform, true)(struct!.sourceList),
  }
}


export function slbTemplatePolicyForwardPolicyToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyOutputReference | SlbTemplatePolicyForwardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acos_event_log: {
      value: cdktf.numberToHclTerraform(struct!.acosEventLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_adv_match: {
      value: cdktf.numberToHclTerraform(struct!.enableAdvMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_http_connect_to_icap: {
      value: cdktf.numberToHclTerraform(struct!.forwardHttpConnectToIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_logging: {
      value: cdktf.numberToHclTerraform(struct!.localLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_client_conn_reuse: {
      value: cdktf.numberToHclTerraform(struct!.noClientConnReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reqmod_icap: {
      value: cdktf.stringToHclTerraform(struct!.reqmodIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_web_category: {
      value: cdktf.numberToHclTerraform(struct!.requireWebCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyActionListStructToHclTerraform, true)(struct!.actionList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicyActionListStructList",
    },
    dual_stack_action_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyDualStackActionListStructToHclTerraform, true)(struct!.dualStackActionList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicyDualStackActionListStructList",
    },
    filtering: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyFilteringToHclTerraform, true)(struct!.filtering),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicyFilteringList",
    },
    san_filtering: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySanFilteringToHclTerraform, true)(struct!.sanFiltering),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySanFilteringList",
    },
    source_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListStructToHclTerraform, true)(struct!.sourceList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyForwardPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acosEventLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.acosEventLog = this._acosEventLog;
    }
    if (this._enableAdvMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdvMatch = this._enableAdvMatch;
    }
    if (this._forwardHttpConnectToIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHttpConnectToIcap = this._forwardHttpConnectToIcap;
    }
    if (this._localLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.localLogging = this._localLogging;
    }
    if (this._noClientConnReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClientConnReuse = this._noClientConnReuse;
    }
    if (this._reqmodIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqmodIcap = this._reqmodIcap;
    }
    if (this._requireWebCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireWebCategory = this._requireWebCategory;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._actionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionList = this._actionList?.internalValue;
    }
    if (this._dualStackActionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackActionList = this._dualStackActionList?.internalValue;
    }
    if (this._filtering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtering = this._filtering?.internalValue;
    }
    if (this._sanFiltering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanFiltering = this._sanFiltering?.internalValue;
    }
    if (this._sourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceList = this._sourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acosEventLog = undefined;
      this._enableAdvMatch = undefined;
      this._forwardHttpConnectToIcap = undefined;
      this._localLogging = undefined;
      this._noClientConnReuse = undefined;
      this._reqmodIcap = undefined;
      this._requireWebCategory = undefined;
      this._uuid = undefined;
      this._actionList.internalValue = undefined;
      this._dualStackActionList.internalValue = undefined;
      this._filtering.internalValue = undefined;
      this._sanFiltering.internalValue = undefined;
      this._sourceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acosEventLog = value.acosEventLog;
      this._enableAdvMatch = value.enableAdvMatch;
      this._forwardHttpConnectToIcap = value.forwardHttpConnectToIcap;
      this._localLogging = value.localLogging;
      this._noClientConnReuse = value.noClientConnReuse;
      this._reqmodIcap = value.reqmodIcap;
      this._requireWebCategory = value.requireWebCategory;
      this._uuid = value.uuid;
      this._actionList.internalValue = value.actionList;
      this._dualStackActionList.internalValue = value.dualStackActionList;
      this._filtering.internalValue = value.filtering;
      this._sanFiltering.internalValue = value.sanFiltering;
      this._sourceList.internalValue = value.sourceList;
    }
  }

  // acos_event_log - computed: false, optional: true, required: false
  private _acosEventLog?: number; 
  public get acosEventLog() {
    return this.getNumberAttribute('acos_event_log');
  }
  public set acosEventLog(value: number) {
    this._acosEventLog = value;
  }
  public resetAcosEventLog() {
    this._acosEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acosEventLogInput() {
    return this._acosEventLog;
  }

  // enable_adv_match - computed: false, optional: true, required: false
  private _enableAdvMatch?: number; 
  public get enableAdvMatch() {
    return this.getNumberAttribute('enable_adv_match');
  }
  public set enableAdvMatch(value: number) {
    this._enableAdvMatch = value;
  }
  public resetEnableAdvMatch() {
    this._enableAdvMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdvMatchInput() {
    return this._enableAdvMatch;
  }

  // forward_http_connect_to_icap - computed: false, optional: true, required: false
  private _forwardHttpConnectToIcap?: number; 
  public get forwardHttpConnectToIcap() {
    return this.getNumberAttribute('forward_http_connect_to_icap');
  }
  public set forwardHttpConnectToIcap(value: number) {
    this._forwardHttpConnectToIcap = value;
  }
  public resetForwardHttpConnectToIcap() {
    this._forwardHttpConnectToIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHttpConnectToIcapInput() {
    return this._forwardHttpConnectToIcap;
  }

  // local_logging - computed: false, optional: true, required: false
  private _localLogging?: number; 
  public get localLogging() {
    return this.getNumberAttribute('local_logging');
  }
  public set localLogging(value: number) {
    this._localLogging = value;
  }
  public resetLocalLogging() {
    this._localLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLoggingInput() {
    return this._localLogging;
  }

  // no_client_conn_reuse - computed: false, optional: true, required: false
  private _noClientConnReuse?: number; 
  public get noClientConnReuse() {
    return this.getNumberAttribute('no_client_conn_reuse');
  }
  public set noClientConnReuse(value: number) {
    this._noClientConnReuse = value;
  }
  public resetNoClientConnReuse() {
    this._noClientConnReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClientConnReuseInput() {
    return this._noClientConnReuse;
  }

  // reqmod_icap - computed: false, optional: true, required: false
  private _reqmodIcap?: string; 
  public get reqmodIcap() {
    return this.getStringAttribute('reqmod_icap');
  }
  public set reqmodIcap(value: string) {
    this._reqmodIcap = value;
  }
  public resetReqmodIcap() {
    this._reqmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqmodIcapInput() {
    return this._reqmodIcap;
  }

  // require_web_category - computed: false, optional: true, required: false
  private _requireWebCategory?: number; 
  public get requireWebCategory() {
    return this.getNumberAttribute('require_web_category');
  }
  public set requireWebCategory(value: number) {
    this._requireWebCategory = value;
  }
  public resetRequireWebCategory() {
    this._requireWebCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireWebCategoryInput() {
    return this._requireWebCategory;
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

  // action_list - computed: false, optional: true, required: false
  private _actionList = new SlbTemplatePolicyForwardPolicyActionListStructList(this, "action_list", false);
  public get actionList() {
    return this._actionList;
  }
  public putActionList(value: SlbTemplatePolicyForwardPolicyActionListStruct[] | cdktf.IResolvable) {
    this._actionList.internalValue = value;
  }
  public resetActionList() {
    this._actionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionListInput() {
    return this._actionList.internalValue;
  }

  // dual_stack_action_list - computed: false, optional: true, required: false
  private _dualStackActionList = new SlbTemplatePolicyForwardPolicyDualStackActionListStructList(this, "dual_stack_action_list", false);
  public get dualStackActionList() {
    return this._dualStackActionList;
  }
  public putDualStackActionList(value: SlbTemplatePolicyForwardPolicyDualStackActionListStruct[] | cdktf.IResolvable) {
    this._dualStackActionList.internalValue = value;
  }
  public resetDualStackActionList() {
    this._dualStackActionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionListInput() {
    return this._dualStackActionList.internalValue;
  }

  // filtering - computed: false, optional: true, required: false
  private _filtering = new SlbTemplatePolicyForwardPolicyFilteringList(this, "filtering", false);
  public get filtering() {
    return this._filtering;
  }
  public putFiltering(value: SlbTemplatePolicyForwardPolicyFiltering[] | cdktf.IResolvable) {
    this._filtering.internalValue = value;
  }
  public resetFiltering() {
    this._filtering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringInput() {
    return this._filtering.internalValue;
  }

  // san_filtering - computed: false, optional: true, required: false
  private _sanFiltering = new SlbTemplatePolicyForwardPolicySanFilteringList(this, "san_filtering", false);
  public get sanFiltering() {
    return this._sanFiltering;
  }
  public putSanFiltering(value: SlbTemplatePolicyForwardPolicySanFiltering[] | cdktf.IResolvable) {
    this._sanFiltering.internalValue = value;
  }
  public resetSanFiltering() {
    this._sanFiltering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanFilteringInput() {
    return this._sanFiltering.internalValue;
  }

  // source_list - computed: false, optional: true, required: false
  private _sourceList = new SlbTemplatePolicyForwardPolicySourceListStructList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: SlbTemplatePolicyForwardPolicySourceListStruct[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  public resetSourceList() {
    this._sourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }
}
export interface SlbTemplatePolicySamplingEnable {
  /**
  * 'all': all; 'fwd-policy-dns-unresolved': Forward-policy unresolved DNS queries; 'fwd-policy-dns-outstanding': Forward-policy current DNS outstanding requests; 'fwd-policy-snat-fail': Forward-policy source-nat translation failure; 'fwd-policy-hits': Number of forward-policy requests for this policy template; 'fwd-policy-forward-to-internet': Number of forward-policy requests forwarded to internet; 'fwd-policy-forward-to-service-group': Number of forward-policy requests forwarded to service group; 'fwd-policy-forward-to-proxy': Number of forward-policy requests forwarded to proxy; 'fwd-policy-policy-drop': Number of forward-policy requests dropped; 'fwd-policy-source-match-not-found': Forward-policy requests without matching source rule; 'exp-client-hello-not-found': Expected Client HELLO requests not found;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#counters1 SlbTemplatePolicy#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicySamplingEnableToTerraform(struct?: SlbTemplatePolicySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicySamplingEnableToHclTerraform(struct?: SlbTemplatePolicySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicySamplingEnableOutputReference {
    return new SlbTemplatePolicySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy thunder_slb_template_policy}
*/
export class SlbTemplatePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicy to import
  * @param importFromId The id of the existing SlbTemplatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy thunder_slb_template_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy',
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
    this._bwListName = config.bwListName;
    this._fullDomainTree = config.fullDomainTree;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._overLimit = config.overLimit;
    this._overLimitLockup = config.overLimitLockup;
    this._overLimitLogging = config.overLimitLogging;
    this._overLimitReset = config.overLimitReset;
    this._overlap = config.overlap;
    this._share = config.share;
    this._timeout = config.timeout;
    this._useDestinationIp = config.useDestinationIp;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._bwListId.internalValue = config.bwListId;
    this._classList.internalValue = config.classList;
    this._forwardPolicy.internalValue = config.forwardPolicy;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bw_list_name - computed: false, optional: true, required: false
  private _bwListName?: string; 
  public get bwListName() {
    return this.getStringAttribute('bw_list_name');
  }
  public set bwListName(value: string) {
    this._bwListName = value;
  }
  public resetBwListName() {
    this._bwListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwListNameInput() {
    return this._bwListName;
  }

  // full_domain_tree - computed: false, optional: true, required: false
  private _fullDomainTree?: number; 
  public get fullDomainTree() {
    return this.getNumberAttribute('full_domain_tree');
  }
  public set fullDomainTree(value: number) {
    this._fullDomainTree = value;
  }
  public resetFullDomainTree() {
    this._fullDomainTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDomainTreeInput() {
    return this._fullDomainTree;
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

  // over_limit - computed: false, optional: true, required: false
  private _overLimit?: number; 
  public get overLimit() {
    return this.getNumberAttribute('over_limit');
  }
  public set overLimit(value: number) {
    this._overLimit = value;
  }
  public resetOverLimit() {
    this._overLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitInput() {
    return this._overLimit;
  }

  // over_limit_lockup - computed: false, optional: true, required: false
  private _overLimitLockup?: number; 
  public get overLimitLockup() {
    return this.getNumberAttribute('over_limit_lockup');
  }
  public set overLimitLockup(value: number) {
    this._overLimitLockup = value;
  }
  public resetOverLimitLockup() {
    this._overLimitLockup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitLockupInput() {
    return this._overLimitLockup;
  }

  // over_limit_logging - computed: false, optional: true, required: false
  private _overLimitLogging?: number; 
  public get overLimitLogging() {
    return this.getNumberAttribute('over_limit_logging');
  }
  public set overLimitLogging(value: number) {
    this._overLimitLogging = value;
  }
  public resetOverLimitLogging() {
    this._overLimitLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitLoggingInput() {
    return this._overLimitLogging;
  }

  // over_limit_reset - computed: false, optional: true, required: false
  private _overLimitReset?: number; 
  public get overLimitReset() {
    return this.getNumberAttribute('over_limit_reset');
  }
  public set overLimitReset(value: number) {
    this._overLimitReset = value;
  }
  public resetOverLimitReset() {
    this._overLimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitResetInput() {
    return this._overLimitReset;
  }

  // overlap - computed: false, optional: true, required: false
  private _overlap?: number; 
  public get overlap() {
    return this.getNumberAttribute('overlap');
  }
  public set overlap(value: number) {
    this._overlap = value;
  }
  public resetOverlap() {
    this._overlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapInput() {
    return this._overlap;
  }

  // share - computed: false, optional: true, required: false
  private _share?: number; 
  public get share() {
    return this.getNumberAttribute('share');
  }
  public set share(value: number) {
    this._share = value;
  }
  public resetShare() {
    this._share = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // use_destination_ip - computed: false, optional: true, required: false
  private _useDestinationIp?: number; 
  public get useDestinationIp() {
    return this.getNumberAttribute('use_destination_ip');
  }
  public set useDestinationIp(value: number) {
    this._useDestinationIp = value;
  }
  public resetUseDestinationIp() {
    this._useDestinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDestinationIpInput() {
    return this._useDestinationIp;
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

  // bw_list_id - computed: false, optional: true, required: false
  private _bwListId = new SlbTemplatePolicyBwListIdList(this, "bw_list_id", false);
  public get bwListId() {
    return this._bwListId;
  }
  public putBwListId(value: SlbTemplatePolicyBwListId[] | cdktf.IResolvable) {
    this._bwListId.internalValue = value;
  }
  public resetBwListId() {
    this._bwListId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwListIdInput() {
    return this._bwListId.internalValue;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList = new SlbTemplatePolicyClassListStructOutputReference(this, "class_list");
  public get classList() {
    return this._classList;
  }
  public putClassList(value: SlbTemplatePolicyClassListStruct) {
    this._classList.internalValue = value;
  }
  public resetClassList() {
    this._classList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList.internalValue;
  }

  // forward_policy - computed: false, optional: true, required: false
  private _forwardPolicy = new SlbTemplatePolicyForwardPolicyOutputReference(this, "forward_policy");
  public get forwardPolicy() {
    return this._forwardPolicy;
  }
  public putForwardPolicy(value: SlbTemplatePolicyForwardPolicy) {
    this._forwardPolicy.internalValue = value;
  }
  public resetForwardPolicy() {
    this._forwardPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPolicyInput() {
    return this._forwardPolicy.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bw_list_name: cdktf.stringToTerraform(this._bwListName),
      full_domain_tree: cdktf.numberToTerraform(this._fullDomainTree),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      over_limit: cdktf.numberToTerraform(this._overLimit),
      over_limit_lockup: cdktf.numberToTerraform(this._overLimitLockup),
      over_limit_logging: cdktf.numberToTerraform(this._overLimitLogging),
      over_limit_reset: cdktf.numberToTerraform(this._overLimitReset),
      overlap: cdktf.numberToTerraform(this._overlap),
      share: cdktf.numberToTerraform(this._share),
      timeout: cdktf.numberToTerraform(this._timeout),
      use_destination_ip: cdktf.numberToTerraform(this._useDestinationIp),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      bw_list_id: cdktf.listMapper(slbTemplatePolicyBwListIdToTerraform, true)(this._bwListId.internalValue),
      class_list: slbTemplatePolicyClassListStructToTerraform(this._classList.internalValue),
      forward_policy: slbTemplatePolicyForwardPolicyToTerraform(this._forwardPolicy.internalValue),
      sampling_enable: cdktf.listMapper(slbTemplatePolicySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bw_list_name: {
        value: cdktf.stringToHclTerraform(this._bwListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_domain_tree: {
        value: cdktf.numberToHclTerraform(this._fullDomainTree),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      over_limit: {
        value: cdktf.numberToHclTerraform(this._overLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      over_limit_lockup: {
        value: cdktf.numberToHclTerraform(this._overLimitLockup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      over_limit_logging: {
        value: cdktf.numberToHclTerraform(this._overLimitLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      over_limit_reset: {
        value: cdktf.numberToHclTerraform(this._overLimitReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overlap: {
        value: cdktf.numberToHclTerraform(this._overlap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      share: {
        value: cdktf.numberToHclTerraform(this._share),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_destination_ip: {
        value: cdktf.numberToHclTerraform(this._useDestinationIp),
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
      bw_list_id: {
        value: cdktf.listMapperHcl(slbTemplatePolicyBwListIdToHclTerraform, true)(this._bwListId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyBwListIdList",
      },
      class_list: {
        value: slbTemplatePolicyClassListStructToHclTerraform(this._classList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyClassListStructList",
      },
      forward_policy: {
        value: slbTemplatePolicyForwardPolicyToHclTerraform(this._forwardPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicyList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbTemplatePolicySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicySamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
