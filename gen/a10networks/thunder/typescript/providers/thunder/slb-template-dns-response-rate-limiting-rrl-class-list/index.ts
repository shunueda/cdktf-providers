// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsResponseRateLimitingRrlClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#dns_name SlbTemplateDnsResponseRateLimitingRrlClassList#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#id SlbTemplateDnsResponseRateLimitingRrlClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#name SlbTemplateDnsResponseRateLimitingRrlClassList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#user_tag SlbTemplateDnsResponseRateLimitingRrlClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#uuid SlbTemplateDnsResponseRateLimitingRrlClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_list SlbTemplateDnsResponseRateLimitingRrlClassList#lid_list}
  */
  readonly lidList?: SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct {
  /**
  * 'log-only': Only log rate-limiting, do not actually rate limit. Requires enable-log configuration; 'rate-limit': Rate-Limit based on configuration (Default); 'whitelist': Whitelist, disable rate-limiting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_action SlbTemplateDnsResponseRateLimitingRrlClassList#lid_action}
  */
  readonly lidAction?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_enable_log SlbTemplateDnsResponseRateLimitingRrlClassList#lid_enable_log}
  */
  readonly lidEnableLog?: number;
  /**
  * IP subnet mask (response rate by IP subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_match_subnet SlbTemplateDnsResponseRateLimitingRrlClassList#lid_match_subnet}
  */
  readonly lidMatchSubnet?: string;
  /**
  * IPV6 subnet mask (response rate by IPv6 subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_match_subnet_v6 SlbTemplateDnsResponseRateLimitingRrlClassList#lid_match_subnet_v6}
  */
  readonly lidMatchSubnetV6?: number;
  /**
  * Queries from entries whose NX Responses exceeding this rate within the window will be dropped (default 5 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_nx_response_rate SlbTemplateDnsResponseRateLimitingRrlClassList#lid_nx_response_rate}
  */
  readonly lidNxResponseRate?: number;
  /**
  * Responses exceeding this rate within the window will be dropped (default 5 per second), 0 for unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_response_rate SlbTemplateDnsResponseRateLimitingRrlClassList#lid_response_rate}
  */
  readonly lidResponseRate?: number;
  /**
  * Every n'th response that would be rate-limited will be let through instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_slip_rate SlbTemplateDnsResponseRateLimitingRrlClassList#lid_slip_rate}
  */
  readonly lidSlipRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_src_ip_only SlbTemplateDnsResponseRateLimitingRrlClassList#lid_src_ip_only}
  */
  readonly lidSrcIpOnly?: number;
  /**
  * Every n'th response that would be rate-limited will respond with TC bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_tc_rate SlbTemplateDnsResponseRateLimitingRrlClassList#lid_tc_rate}
  */
  readonly lidTcRate?: number;
  /**
  * Rate-Limiting Interval in Seconds (default is one)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lid_window SlbTemplateDnsResponseRateLimitingRrlClassList#lid_window}
  */
  readonly lidWindow?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#lidnum SlbTemplateDnsResponseRateLimitingRrlClassList#lidnum}
  */
  readonly lidnum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#user_tag SlbTemplateDnsResponseRateLimitingRrlClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#uuid SlbTemplateDnsResponseRateLimitingRrlClassList#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDnsResponseRateLimitingRrlClassListLidListStructToTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lid_action: cdktf.stringToTerraform(struct!.lidAction),
    lid_enable_log: cdktf.numberToTerraform(struct!.lidEnableLog),
    lid_match_subnet: cdktf.stringToTerraform(struct!.lidMatchSubnet),
    lid_match_subnet_v6: cdktf.numberToTerraform(struct!.lidMatchSubnetV6),
    lid_nx_response_rate: cdktf.numberToTerraform(struct!.lidNxResponseRate),
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


export function slbTemplateDnsResponseRateLimitingRrlClassListLidListStructToHclTerraform(struct?: SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct | cdktf.IResolvable): any {
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
    lid_nx_response_rate: {
      value: cdktf.numberToHclTerraform(struct!.lidNxResponseRate),
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

export class SlbTemplateDnsResponseRateLimitingRrlClassListLidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct | cdktf.IResolvable | undefined {
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
    if (this._lidNxResponseRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidNxResponseRate = this._lidNxResponseRate;
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

  public set internalValue(value: SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lidAction = undefined;
      this._lidEnableLog = undefined;
      this._lidMatchSubnet = undefined;
      this._lidMatchSubnetV6 = undefined;
      this._lidNxResponseRate = undefined;
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
      this._lidNxResponseRate = value.lidNxResponseRate;
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

  // lid_nx_response_rate - computed: false, optional: true, required: false
  private _lidNxResponseRate?: number; 
  public get lidNxResponseRate() {
    return this.getNumberAttribute('lid_nx_response_rate');
  }
  public set lidNxResponseRate(value: number) {
    this._lidNxResponseRate = value;
  }
  public resetLidNxResponseRate() {
    this._lidNxResponseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidNxResponseRateInput() {
    return this._lidNxResponseRate;
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

export class SlbTemplateDnsResponseRateLimitingRrlClassListLidListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsResponseRateLimitingRrlClassListLidListStructOutputReference {
    return new SlbTemplateDnsResponseRateLimitingRrlClassListLidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list thunder_slb_template_dns_response_rate_limiting_rrl_class_list}
*/
export class SlbTemplateDnsResponseRateLimitingRrlClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_response_rate_limiting_rrl_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsResponseRateLimitingRrlClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsResponseRateLimitingRrlClassList to import
  * @param importFromId The id of the existing SlbTemplateDnsResponseRateLimitingRrlClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsResponseRateLimitingRrlClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_response_rate_limiting_rrl_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list thunder_slb_template_dns_response_rate_limiting_rrl_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsResponseRateLimitingRrlClassListConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsResponseRateLimitingRrlClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_response_rate_limiting_rrl_class_list',
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
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._lidList.internalValue = config.lidList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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
  private _lidList = new SlbTemplateDnsResponseRateLimitingRrlClassListLidListStructList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: SlbTemplateDnsResponseRateLimitingRrlClassListLidListStruct[] | cdktf.IResolvable) {
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
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      lid_list: cdktf.listMapper(slbTemplateDnsResponseRateLimitingRrlClassListLidListStructToTerraform, true)(this._lidList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      lid_list: {
        value: cdktf.listMapperHcl(slbTemplateDnsResponseRateLimitingRrlClassListLidListStructToHclTerraform, true)(this._lidList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsResponseRateLimitingRrlClassListLidListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
