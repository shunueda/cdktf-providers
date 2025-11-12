// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsResponseRateLimitingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'log-only': Only log rate-limiting, do not actually rate limit. Requires enable-log configuration; 'rate-limit': Rate-Limit based on configuration (Default); 'whitelist': Whitelist, disable rate-limiting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#action SlbTemplateDnsResponseRateLimitingA#action}
  */
  readonly action?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#enable_log SlbTemplateDnsResponseRateLimitingA#enable_log}
  */
  readonly enableLog?: number;
  /**
  * Maximum allowed request rate for the filter. This should match average traffic. (default 10 per seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#filter_response_rate SlbTemplateDnsResponseRateLimitingA#filter_response_rate}
  */
  readonly filterResponseRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#id SlbTemplateDnsResponseRateLimitingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP subnet mask (response rate by IP subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#match_subnet SlbTemplateDnsResponseRateLimitingA#match_subnet}
  */
  readonly matchSubnet?: string;
  /**
  * IPV6 subnet mask (response rate by IPv6 subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#match_subnet_v6 SlbTemplateDnsResponseRateLimitingA#match_subnet_v6}
  */
  readonly matchSubnetV6?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#name SlbTemplateDnsResponseRateLimitingA#name}
  */
  readonly name: string;
  /**
  * Responses exceeding this rate within the window will be dropped (default 5 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#response_rate SlbTemplateDnsResponseRateLimitingA#response_rate}
  */
  readonly responseRate?: number;
  /**
  * Every n'th response that would be rate-limited will be let through instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#slip_rate SlbTemplateDnsResponseRateLimitingA#slip_rate}
  */
  readonly slipRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#src_ip_only SlbTemplateDnsResponseRateLimitingA#src_ip_only}
  */
  readonly srcIpOnly?: number;
  /**
  * Every n'th response that would be rate-limited will respond with TC bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#tc_rate SlbTemplateDnsResponseRateLimitingA#tc_rate}
  */
  readonly tcRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#uuid SlbTemplateDnsResponseRateLimitingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Rate-Limiting Interval in Seconds (default is one)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#window SlbTemplateDnsResponseRateLimitingA#window}
  */
  readonly window?: number;
  /**
  * rrl_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#rrl_class_list_list SlbTemplateDnsResponseRateLimitingA#rrl_class_list_list}
  */
  readonly rrlClassListList?: SlbTemplateDnsResponseRateLimitingRrlClassListListStructA[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA {
  /**
  * 'log-only': Only log rate-limiting, do not actually rate limit. Requires enable-log configuration; 'rate-limit': Rate-Limit based on configuration (Default); 'whitelist': Whitelist, disable rate-limiting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_action SlbTemplateDnsResponseRateLimitingA#lid_action}
  */
  readonly lidAction?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_enable_log SlbTemplateDnsResponseRateLimitingA#lid_enable_log}
  */
  readonly lidEnableLog?: number;
  /**
  * IP subnet mask (response rate by IP subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_match_subnet SlbTemplateDnsResponseRateLimitingA#lid_match_subnet}
  */
  readonly lidMatchSubnet?: string;
  /**
  * IPV6 subnet mask (response rate by IPv6 subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_match_subnet_v6 SlbTemplateDnsResponseRateLimitingA#lid_match_subnet_v6}
  */
  readonly lidMatchSubnetV6?: number;
  /**
  * Responses exceeding this rate within the window will be dropped (default 5 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_response_rate SlbTemplateDnsResponseRateLimitingA#lid_response_rate}
  */
  readonly lidResponseRate?: number;
  /**
  * Every n'th response that would be rate-limited will be let through instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_slip_rate SlbTemplateDnsResponseRateLimitingA#lid_slip_rate}
  */
  readonly lidSlipRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_src_ip_only SlbTemplateDnsResponseRateLimitingA#lid_src_ip_only}
  */
  readonly lidSrcIpOnly?: number;
  /**
  * Every n'th response that would be rate-limited will respond with TC bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_tc_rate SlbTemplateDnsResponseRateLimitingA#lid_tc_rate}
  */
  readonly lidTcRate?: number;
  /**
  * Rate-Limiting Interval in Seconds (default is one)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_window SlbTemplateDnsResponseRateLimitingA#lid_window}
  */
  readonly lidWindow?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lidnum SlbTemplateDnsResponseRateLimitingA#lidnum}
  */
  readonly lidnum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#user_tag SlbTemplateDnsResponseRateLimitingA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#uuid SlbTemplateDnsResponseRateLimitingA#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAToTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lid_action: cdktf.stringToTerraform(struct!.lidAction),
    lid_enable_log: cdktf.numberToTerraform(struct!.lidEnableLog),
    lid_match_subnet: cdktf.stringToTerraform(struct!.lidMatchSubnet),
    lid_match_subnet_v6: cdktf.numberToTerraform(struct!.lidMatchSubnetV6),
    lid_response_rate: cdktf.numberToTerraform(struct!.lidResponseRate),
    lid_slip_rate: cdktf.numberToTerraform(struct!.lidSlipRate),
    lid_src_ip_only: cdktf.numberToTerraform(struct!.lidSrcIpOnly),
    lid_tc_rate: cdktf.numberToTerraform(struct!.lidTcRate),
    lid_window: cdktf.numberToTerraform(struct!.lidWindow),
    lidnum: cdktf.numberToTerraform(struct!.lidnum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAToHclTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lid_action: {
      value: cdktf.stringToHclTerraform(struct!.lidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid_enable_log: {
      value: cdktf.numberToHclTerraform(struct!.lidEnableLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_match_subnet: {
      value: cdktf.stringToHclTerraform(struct!.lidMatchSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid_match_subnet_v6: {
      value: cdktf.numberToHclTerraform(struct!.lidMatchSubnetV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_response_rate: {
      value: cdktf.numberToHclTerraform(struct!.lidResponseRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_slip_rate: {
      value: cdktf.numberToHclTerraform(struct!.lidSlipRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_src_ip_only: {
      value: cdktf.numberToHclTerraform(struct!.lidSrcIpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_tc_rate: {
      value: cdktf.numberToHclTerraform(struct!.lidTcRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_window: {
      value: cdktf.numberToHclTerraform(struct!.lidWindow),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidAction = this._lidAction;
    }
    if (this._lidEnableLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidEnableLog = this._lidEnableLog;
    }
    if (this._lidMatchSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidMatchSubnet = this._lidMatchSubnet;
    }
    if (this._lidMatchSubnetV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidMatchSubnetV6 = this._lidMatchSubnetV6;
    }
    if (this._lidResponseRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidResponseRate = this._lidResponseRate;
    }
    if (this._lidSlipRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidSlipRate = this._lidSlipRate;
    }
    if (this._lidSrcIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidSrcIpOnly = this._lidSrcIpOnly;
    }
    if (this._lidTcRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidTcRate = this._lidTcRate;
    }
    if (this._lidWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidWindow = this._lidWindow;
    }
    if (this._lidnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidnum = this._lidnum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lidAction = undefined;
      this._lidEnableLog = undefined;
      this._lidMatchSubnet = undefined;
      this._lidMatchSubnetV6 = undefined;
      this._lidResponseRate = undefined;
      this._lidSlipRate = undefined;
      this._lidSrcIpOnly = undefined;
      this._lidTcRate = undefined;
      this._lidWindow = undefined;
      this._lidnum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lidAction = value.lidAction;
      this._lidEnableLog = value.lidEnableLog;
      this._lidMatchSubnet = value.lidMatchSubnet;
      this._lidMatchSubnetV6 = value.lidMatchSubnetV6;
      this._lidResponseRate = value.lidResponseRate;
      this._lidSlipRate = value.lidSlipRate;
      this._lidSrcIpOnly = value.lidSrcIpOnly;
      this._lidTcRate = value.lidTcRate;
      this._lidWindow = value.lidWindow;
      this._lidnum = value.lidnum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // lid_action - computed: false, optional: true, required: false
  private _lidAction?: string; 
  public get lidAction() {
    return this.getStringAttribute('lid_action');
  }
  public set lidAction(value: string) {
    this._lidAction = value;
  }
  public resetLidAction() {
    this._lidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidActionInput() {
    return this._lidAction;
  }

  // lid_enable_log - computed: false, optional: true, required: false
  private _lidEnableLog?: number; 
  public get lidEnableLog() {
    return this.getNumberAttribute('lid_enable_log');
  }
  public set lidEnableLog(value: number) {
    this._lidEnableLog = value;
  }
  public resetLidEnableLog() {
    this._lidEnableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidEnableLogInput() {
    return this._lidEnableLog;
  }

  // lid_match_subnet - computed: false, optional: true, required: false
  private _lidMatchSubnet?: string; 
  public get lidMatchSubnet() {
    return this.getStringAttribute('lid_match_subnet');
  }
  public set lidMatchSubnet(value: string) {
    this._lidMatchSubnet = value;
  }
  public resetLidMatchSubnet() {
    this._lidMatchSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidMatchSubnetInput() {
    return this._lidMatchSubnet;
  }

  // lid_match_subnet_v6 - computed: false, optional: true, required: false
  private _lidMatchSubnetV6?: number; 
  public get lidMatchSubnetV6() {
    return this.getNumberAttribute('lid_match_subnet_v6');
  }
  public set lidMatchSubnetV6(value: number) {
    this._lidMatchSubnetV6 = value;
  }
  public resetLidMatchSubnetV6() {
    this._lidMatchSubnetV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidMatchSubnetV6Input() {
    return this._lidMatchSubnetV6;
  }

  // lid_response_rate - computed: false, optional: true, required: false
  private _lidResponseRate?: number; 
  public get lidResponseRate() {
    return this.getNumberAttribute('lid_response_rate');
  }
  public set lidResponseRate(value: number) {
    this._lidResponseRate = value;
  }
  public resetLidResponseRate() {
    this._lidResponseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidResponseRateInput() {
    return this._lidResponseRate;
  }

  // lid_slip_rate - computed: false, optional: true, required: false
  private _lidSlipRate?: number; 
  public get lidSlipRate() {
    return this.getNumberAttribute('lid_slip_rate');
  }
  public set lidSlipRate(value: number) {
    this._lidSlipRate = value;
  }
  public resetLidSlipRate() {
    this._lidSlipRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidSlipRateInput() {
    return this._lidSlipRate;
  }

  // lid_src_ip_only - computed: false, optional: true, required: false
  private _lidSrcIpOnly?: number; 
  public get lidSrcIpOnly() {
    return this.getNumberAttribute('lid_src_ip_only');
  }
  public set lidSrcIpOnly(value: number) {
    this._lidSrcIpOnly = value;
  }
  public resetLidSrcIpOnly() {
    this._lidSrcIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidSrcIpOnlyInput() {
    return this._lidSrcIpOnly;
  }

  // lid_tc_rate - computed: false, optional: true, required: false
  private _lidTcRate?: number; 
  public get lidTcRate() {
    return this.getNumberAttribute('lid_tc_rate');
  }
  public set lidTcRate(value: number) {
    this._lidTcRate = value;
  }
  public resetLidTcRate() {
    this._lidTcRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidTcRateInput() {
    return this._lidTcRate;
  }

  // lid_window - computed: false, optional: true, required: false
  private _lidWindow?: number; 
  public get lidWindow() {
    return this.getNumberAttribute('lid_window');
  }
  public set lidWindow(value: number) {
    this._lidWindow = value;
  }
  public resetLidWindow() {
    this._lidWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidWindowInput() {
    return this._lidWindow;
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
}

export class SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAOutputReference {
    return new SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsResponseRateLimitingRrlClassListListStructA {
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#name SlbTemplateDnsResponseRateLimitingA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#user_tag SlbTemplateDnsResponseRateLimitingA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#uuid SlbTemplateDnsResponseRateLimitingA#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#lid_list SlbTemplateDnsResponseRateLimitingA#lid_list}
  */
  readonly lidList?: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA[] | cdktf.IResolvable;
}

export function slbTemplateDnsResponseRateLimitingRrlClassListListStructAToTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lid_list: cdktf.listMapper(slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAToTerraform, true)(struct!.lidList),
  }
}


export function slbTemplateDnsResponseRateLimitingRrlClassListListStructAToHclTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    lid_list: {
      value: cdktf.listMapperHcl(slbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAToHclTerraform, true)(struct!.lidList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsResponseRateLimitingRrlClassListListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsResponseRateLimitingRrlClassListListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._lidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidList = this._lidList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsResponseRateLimitingRrlClassListListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._lidList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._lidList.internalValue = value.lidList;
    }
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

  // lid_list - computed: false, optional: true, required: false
  private _lidList = new SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructAList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: SlbTemplateDnsResponseRateLimitingRrlClassListListLidListStructA[] | cdktf.IResolvable) {
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

export class SlbTemplateDnsResponseRateLimitingRrlClassListListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsResponseRateLimitingRrlClassListListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsResponseRateLimitingRrlClassListListStructAOutputReference {
    return new SlbTemplateDnsResponseRateLimitingRrlClassListListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting thunder_slb_template_dns_response_rate_limiting}
*/
export class SlbTemplateDnsResponseRateLimitingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_response_rate_limiting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsResponseRateLimitingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsResponseRateLimitingA to import
  * @param importFromId The id of the existing SlbTemplateDnsResponseRateLimitingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsResponseRateLimitingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_response_rate_limiting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_response_rate_limiting thunder_slb_template_dns_response_rate_limiting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsResponseRateLimitingAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsResponseRateLimitingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_response_rate_limiting',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._enableLog = config.enableLog;
    this._filterResponseRate = config.filterResponseRate;
    this._id = config.id;
    this._matchSubnet = config.matchSubnet;
    this._matchSubnetV6 = config.matchSubnetV6;
    this._name = config.name;
    this._responseRate = config.responseRate;
    this._slipRate = config.slipRate;
    this._srcIpOnly = config.srcIpOnly;
    this._tcRate = config.tcRate;
    this._uuid = config.uuid;
    this._window = config.window;
    this._rrlClassListList.internalValue = config.rrlClassListList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_log - computed: false, optional: true, required: false
  private _enableLog?: number; 
  public get enableLog() {
    return this.getNumberAttribute('enable_log');
  }
  public set enableLog(value: number) {
    this._enableLog = value;
  }
  public resetEnableLog() {
    this._enableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogInput() {
    return this._enableLog;
  }

  // filter_response_rate - computed: false, optional: true, required: false
  private _filterResponseRate?: number; 
  public get filterResponseRate() {
    return this.getNumberAttribute('filter_response_rate');
  }
  public set filterResponseRate(value: number) {
    this._filterResponseRate = value;
  }
  public resetFilterResponseRate() {
    this._filterResponseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterResponseRateInput() {
    return this._filterResponseRate;
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

  // match_subnet - computed: false, optional: true, required: false
  private _matchSubnet?: string; 
  public get matchSubnet() {
    return this.getStringAttribute('match_subnet');
  }
  public set matchSubnet(value: string) {
    this._matchSubnet = value;
  }
  public resetMatchSubnet() {
    this._matchSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSubnetInput() {
    return this._matchSubnet;
  }

  // match_subnet_v6 - computed: false, optional: true, required: false
  private _matchSubnetV6?: number; 
  public get matchSubnetV6() {
    return this.getNumberAttribute('match_subnet_v6');
  }
  public set matchSubnetV6(value: number) {
    this._matchSubnetV6 = value;
  }
  public resetMatchSubnetV6() {
    this._matchSubnetV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSubnetV6Input() {
    return this._matchSubnetV6;
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

  // response_rate - computed: false, optional: true, required: false
  private _responseRate?: number; 
  public get responseRate() {
    return this.getNumberAttribute('response_rate');
  }
  public set responseRate(value: number) {
    this._responseRate = value;
  }
  public resetResponseRate() {
    this._responseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRateInput() {
    return this._responseRate;
  }

  // slip_rate - computed: false, optional: true, required: false
  private _slipRate?: number; 
  public get slipRate() {
    return this.getNumberAttribute('slip_rate');
  }
  public set slipRate(value: number) {
    this._slipRate = value;
  }
  public resetSlipRate() {
    this._slipRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slipRateInput() {
    return this._slipRate;
  }

  // src_ip_only - computed: false, optional: true, required: false
  private _srcIpOnly?: number; 
  public get srcIpOnly() {
    return this.getNumberAttribute('src_ip_only');
  }
  public set srcIpOnly(value: number) {
    this._srcIpOnly = value;
  }
  public resetSrcIpOnly() {
    this._srcIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpOnlyInput() {
    return this._srcIpOnly;
  }

  // tc_rate - computed: false, optional: true, required: false
  private _tcRate?: number; 
  public get tcRate() {
    return this.getNumberAttribute('tc_rate');
  }
  public set tcRate(value: number) {
    this._tcRate = value;
  }
  public resetTcRate() {
    this._tcRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcRateInput() {
    return this._tcRate;
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

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // rrl_class_list_list - computed: false, optional: true, required: false
  private _rrlClassListList = new SlbTemplateDnsResponseRateLimitingRrlClassListListStructAList(this, "rrl_class_list_list", false);
  public get rrlClassListList() {
    return this._rrlClassListList;
  }
  public putRrlClassListList(value: SlbTemplateDnsResponseRateLimitingRrlClassListListStructA[] | cdktf.IResolvable) {
    this._rrlClassListList.internalValue = value;
  }
  public resetRrlClassListList() {
    this._rrlClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrlClassListListInput() {
    return this._rrlClassListList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      enable_log: cdktf.numberToTerraform(this._enableLog),
      filter_response_rate: cdktf.numberToTerraform(this._filterResponseRate),
      id: cdktf.stringToTerraform(this._id),
      match_subnet: cdktf.stringToTerraform(this._matchSubnet),
      match_subnet_v6: cdktf.numberToTerraform(this._matchSubnetV6),
      name: cdktf.stringToTerraform(this._name),
      response_rate: cdktf.numberToTerraform(this._responseRate),
      slip_rate: cdktf.numberToTerraform(this._slipRate),
      src_ip_only: cdktf.numberToTerraform(this._srcIpOnly),
      tc_rate: cdktf.numberToTerraform(this._tcRate),
      uuid: cdktf.stringToTerraform(this._uuid),
      window: cdktf.numberToTerraform(this._window),
      rrl_class_list_list: cdktf.listMapper(slbTemplateDnsResponseRateLimitingRrlClassListListStructAToTerraform, true)(this._rrlClassListList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_log: {
        value: cdktf.numberToHclTerraform(this._enableLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_response_rate: {
        value: cdktf.numberToHclTerraform(this._filterResponseRate),
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
      match_subnet: {
        value: cdktf.stringToHclTerraform(this._matchSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_subnet_v6: {
        value: cdktf.numberToHclTerraform(this._matchSubnetV6),
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
      response_rate: {
        value: cdktf.numberToHclTerraform(this._responseRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slip_rate: {
        value: cdktf.numberToHclTerraform(this._slipRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip_only: {
        value: cdktf.numberToHclTerraform(this._srcIpOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tc_rate: {
        value: cdktf.numberToHclTerraform(this._tcRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window: {
        value: cdktf.numberToHclTerraform(this._window),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rrl_class_list_list: {
        value: cdktf.listMapperHcl(slbTemplateDnsResponseRateLimitingRrlClassListListStructAToHclTerraform, true)(this._rrlClassListList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsResponseRateLimitingRrlClassListListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
