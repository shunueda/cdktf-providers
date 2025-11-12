// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateIcmpV4TypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the rate with other code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_code_other_rate DdosZoneTemplateIcmpV4Type#dst_code_other_rate}
  */
  readonly dstCodeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_code_other_rate_action DdosZoneTemplateIcmpV4Type#dst_code_other_rate_action}
  */
  readonly dstCodeOtherRateAction?: string;
  /**
  * Configure action-list to take for  rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_code_other_rate_action_list_name DdosZoneTemplateIcmpV4Type#dst_code_other_rate_action_list_name}
  */
  readonly dstCodeOtherRateActionListName?: string;
  /**
  * IcmpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#icmp_tmpl_name DdosZoneTemplateIcmpV4Type#icmp_tmpl_name}
  */
  readonly icmpTmplName: string;
  /**
  * 'drop': Reject this ICMP type; 'blacklist-src': Blacklist-src this ICMP type; 'ignore': Ignore this ICMP type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#icmp_type_action DdosZoneTemplateIcmpV4Type#icmp_type_action}
  */
  readonly icmpTypeAction?: string;
  /**
  * Configure action-list to take for this ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#icmp_type_action_list_name DdosZoneTemplateIcmpV4Type#icmp_type_action_list_name}
  */
  readonly icmpTypeActionListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#id DdosZoneTemplateIcmpV4Type#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the rate with other code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_code_other_rate DdosZoneTemplateIcmpV4Type#src_code_other_rate}
  */
  readonly srcCodeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_code_other_rate_action DdosZoneTemplateIcmpV4Type#src_code_other_rate_action}
  */
  readonly srcCodeOtherRateAction?: string;
  /**
  * Configure action-list to take for  rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_code_other_rate_action_list_name DdosZoneTemplateIcmpV4Type#src_code_other_rate_action_list_name}
  */
  readonly srcCodeOtherRateActionListName?: string;
  /**
  * Specify ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#type_number DdosZoneTemplateIcmpV4Type#type_number}
  */
  readonly typeNumber: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#user_tag DdosZoneTemplateIcmpV4Type#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#uuid DdosZoneTemplateIcmpV4Type#uuid}
  */
  readonly uuid?: string;
  /**
  * v4_dst_code_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#v4_dst_code_cfg DdosZoneTemplateIcmpV4Type#v4_dst_code_cfg}
  */
  readonly v4DstCodeCfg?: DdosZoneTemplateIcmpV4TypeV4DstCodeCfg[] | cdktf.IResolvable;
  /**
  * v4_dst_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#v4_dst_rate_cfg DdosZoneTemplateIcmpV4Type#v4_dst_rate_cfg}
  */
  readonly v4DstRateCfg?: DdosZoneTemplateIcmpV4TypeV4DstRateCfg;
  /**
  * v4_src_code_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#v4_src_code_cfg DdosZoneTemplateIcmpV4Type#v4_src_code_cfg}
  */
  readonly v4SrcCodeCfg?: DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg[] | cdktf.IResolvable;
  /**
  * v4_src_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#v4_src_rate_cfg DdosZoneTemplateIcmpV4Type#v4_src_rate_cfg}
  */
  readonly v4SrcRateCfg?: DdosZoneTemplateIcmpV4TypeV4SrcRateCfg;
}
export interface DdosZoneTemplateIcmpV4TypeV4DstCodeCfg {
  /**
  * Specify the ICMP code for this dst rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_code_number DdosZoneTemplateIcmpV4Type#dst_code_number}
  */
  readonly dstCodeNumber?: number;
  /**
  * Specify the rate with the code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_code_rate DdosZoneTemplateIcmpV4Type#dst_code_rate}
  */
  readonly dstCodeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_code_rate_action DdosZoneTemplateIcmpV4Type#dst_code_rate_action}
  */
  readonly dstCodeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_code_rate_action_list_name DdosZoneTemplateIcmpV4Type#dst_code_rate_action_list_name}
  */
  readonly dstCodeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV4TypeV4DstCodeCfgToTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4DstCodeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_code_number: cdktf.numberToTerraform(struct!.dstCodeNumber),
    dst_code_rate: cdktf.numberToTerraform(struct!.dstCodeRate),
    dst_code_rate_action: cdktf.stringToTerraform(struct!.dstCodeRateAction),
    dst_code_rate_action_list_name: cdktf.stringToTerraform(struct!.dstCodeRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV4TypeV4DstCodeCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4DstCodeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_code_number: {
      value: cdktf.numberToHclTerraform(struct!.dstCodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_code_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstCodeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_code_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.dstCodeRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_code_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstCodeRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV4TypeV4DstCodeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateIcmpV4TypeV4DstCodeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstCodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCodeNumber = this._dstCodeNumber;
    }
    if (this._dstCodeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCodeRate = this._dstCodeRate;
    }
    if (this._dstCodeRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCodeRateAction = this._dstCodeRateAction;
    }
    if (this._dstCodeRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCodeRateActionListName = this._dstCodeRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV4TypeV4DstCodeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstCodeNumber = undefined;
      this._dstCodeRate = undefined;
      this._dstCodeRateAction = undefined;
      this._dstCodeRateActionListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstCodeNumber = value.dstCodeNumber;
      this._dstCodeRate = value.dstCodeRate;
      this._dstCodeRateAction = value.dstCodeRateAction;
      this._dstCodeRateActionListName = value.dstCodeRateActionListName;
    }
  }

  // dst_code_number - computed: false, optional: true, required: false
  private _dstCodeNumber?: number; 
  public get dstCodeNumber() {
    return this.getNumberAttribute('dst_code_number');
  }
  public set dstCodeNumber(value: number) {
    this._dstCodeNumber = value;
  }
  public resetDstCodeNumber() {
    this._dstCodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCodeNumberInput() {
    return this._dstCodeNumber;
  }

  // dst_code_rate - computed: false, optional: true, required: false
  private _dstCodeRate?: number; 
  public get dstCodeRate() {
    return this.getNumberAttribute('dst_code_rate');
  }
  public set dstCodeRate(value: number) {
    this._dstCodeRate = value;
  }
  public resetDstCodeRate() {
    this._dstCodeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCodeRateInput() {
    return this._dstCodeRate;
  }

  // dst_code_rate_action - computed: false, optional: true, required: false
  private _dstCodeRateAction?: string; 
  public get dstCodeRateAction() {
    return this.getStringAttribute('dst_code_rate_action');
  }
  public set dstCodeRateAction(value: string) {
    this._dstCodeRateAction = value;
  }
  public resetDstCodeRateAction() {
    this._dstCodeRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCodeRateActionInput() {
    return this._dstCodeRateAction;
  }

  // dst_code_rate_action_list_name - computed: false, optional: true, required: false
  private _dstCodeRateActionListName?: string; 
  public get dstCodeRateActionListName() {
    return this.getStringAttribute('dst_code_rate_action_list_name');
  }
  public set dstCodeRateActionListName(value: string) {
    this._dstCodeRateActionListName = value;
  }
  public resetDstCodeRateActionListName() {
    this._dstCodeRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCodeRateActionListNameInput() {
    return this._dstCodeRateActionListName;
  }
}

export class DdosZoneTemplateIcmpV4TypeV4DstCodeCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateIcmpV4TypeV4DstCodeCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateIcmpV4TypeV4DstCodeCfgOutputReference {
    return new DdosZoneTemplateIcmpV4TypeV4DstCodeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateIcmpV4TypeV4DstRateCfg {
  /**
  * Specify the whole dst rate for this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_type_rate DdosZoneTemplateIcmpV4Type#dst_type_rate}
  */
  readonly dstTypeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_type_rate_action DdosZoneTemplateIcmpV4Type#dst_type_rate_action}
  */
  readonly dstTypeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#dst_type_rate_action_list_name DdosZoneTemplateIcmpV4Type#dst_type_rate_action_list_name}
  */
  readonly dstTypeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV4TypeV4DstRateCfgToTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4DstRateCfgOutputReference | DdosZoneTemplateIcmpV4TypeV4DstRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_type_rate: cdktf.numberToTerraform(struct!.dstTypeRate),
    dst_type_rate_action: cdktf.stringToTerraform(struct!.dstTypeRateAction),
    dst_type_rate_action_list_name: cdktf.stringToTerraform(struct!.dstTypeRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV4TypeV4DstRateCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4DstRateCfgOutputReference | DdosZoneTemplateIcmpV4TypeV4DstRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_type_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstTypeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_type_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.dstTypeRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_type_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstTypeRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV4TypeV4DstRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV4TypeV4DstRateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstTypeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeRate = this._dstTypeRate;
    }
    if (this._dstTypeRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeRateAction = this._dstTypeRateAction;
    }
    if (this._dstTypeRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeRateActionListName = this._dstTypeRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV4TypeV4DstRateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstTypeRate = undefined;
      this._dstTypeRateAction = undefined;
      this._dstTypeRateActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstTypeRate = value.dstTypeRate;
      this._dstTypeRateAction = value.dstTypeRateAction;
      this._dstTypeRateActionListName = value.dstTypeRateActionListName;
    }
  }

  // dst_type_rate - computed: false, optional: true, required: false
  private _dstTypeRate?: number; 
  public get dstTypeRate() {
    return this.getNumberAttribute('dst_type_rate');
  }
  public set dstTypeRate(value: number) {
    this._dstTypeRate = value;
  }
  public resetDstTypeRate() {
    this._dstTypeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeRateInput() {
    return this._dstTypeRate;
  }

  // dst_type_rate_action - computed: false, optional: true, required: false
  private _dstTypeRateAction?: string; 
  public get dstTypeRateAction() {
    return this.getStringAttribute('dst_type_rate_action');
  }
  public set dstTypeRateAction(value: string) {
    this._dstTypeRateAction = value;
  }
  public resetDstTypeRateAction() {
    this._dstTypeRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeRateActionInput() {
    return this._dstTypeRateAction;
  }

  // dst_type_rate_action_list_name - computed: false, optional: true, required: false
  private _dstTypeRateActionListName?: string; 
  public get dstTypeRateActionListName() {
    return this.getStringAttribute('dst_type_rate_action_list_name');
  }
  public set dstTypeRateActionListName(value: string) {
    this._dstTypeRateActionListName = value;
  }
  public resetDstTypeRateActionListName() {
    this._dstTypeRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeRateActionListNameInput() {
    return this._dstTypeRateActionListName;
  }
}
export interface DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg {
  /**
  * Specify the ICMP code for this src rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_code_number DdosZoneTemplateIcmpV4Type#src_code_number}
  */
  readonly srcCodeNumber?: number;
  /**
  * Specify the rate with the code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_code_rate DdosZoneTemplateIcmpV4Type#src_code_rate}
  */
  readonly srcCodeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_code_rate_action DdosZoneTemplateIcmpV4Type#src_code_rate_action}
  */
  readonly srcCodeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_code_rate_action_list_name DdosZoneTemplateIcmpV4Type#src_code_rate_action_list_name}
  */
  readonly srcCodeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV4TypeV4SrcCodeCfgToTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_code_number: cdktf.numberToTerraform(struct!.srcCodeNumber),
    src_code_rate: cdktf.numberToTerraform(struct!.srcCodeRate),
    src_code_rate_action: cdktf.stringToTerraform(struct!.srcCodeRateAction),
    src_code_rate_action_list_name: cdktf.stringToTerraform(struct!.srcCodeRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV4TypeV4SrcCodeCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_code_number: {
      value: cdktf.numberToHclTerraform(struct!.srcCodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_code_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcCodeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_code_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.srcCodeRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_code_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcCodeRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV4TypeV4SrcCodeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcCodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCodeNumber = this._srcCodeNumber;
    }
    if (this._srcCodeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCodeRate = this._srcCodeRate;
    }
    if (this._srcCodeRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCodeRateAction = this._srcCodeRateAction;
    }
    if (this._srcCodeRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCodeRateActionListName = this._srcCodeRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcCodeNumber = undefined;
      this._srcCodeRate = undefined;
      this._srcCodeRateAction = undefined;
      this._srcCodeRateActionListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcCodeNumber = value.srcCodeNumber;
      this._srcCodeRate = value.srcCodeRate;
      this._srcCodeRateAction = value.srcCodeRateAction;
      this._srcCodeRateActionListName = value.srcCodeRateActionListName;
    }
  }

  // src_code_number - computed: false, optional: true, required: false
  private _srcCodeNumber?: number; 
  public get srcCodeNumber() {
    return this.getNumberAttribute('src_code_number');
  }
  public set srcCodeNumber(value: number) {
    this._srcCodeNumber = value;
  }
  public resetSrcCodeNumber() {
    this._srcCodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCodeNumberInput() {
    return this._srcCodeNumber;
  }

  // src_code_rate - computed: false, optional: true, required: false
  private _srcCodeRate?: number; 
  public get srcCodeRate() {
    return this.getNumberAttribute('src_code_rate');
  }
  public set srcCodeRate(value: number) {
    this._srcCodeRate = value;
  }
  public resetSrcCodeRate() {
    this._srcCodeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCodeRateInput() {
    return this._srcCodeRate;
  }

  // src_code_rate_action - computed: false, optional: true, required: false
  private _srcCodeRateAction?: string; 
  public get srcCodeRateAction() {
    return this.getStringAttribute('src_code_rate_action');
  }
  public set srcCodeRateAction(value: string) {
    this._srcCodeRateAction = value;
  }
  public resetSrcCodeRateAction() {
    this._srcCodeRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCodeRateActionInput() {
    return this._srcCodeRateAction;
  }

  // src_code_rate_action_list_name - computed: false, optional: true, required: false
  private _srcCodeRateActionListName?: string; 
  public get srcCodeRateActionListName() {
    return this.getStringAttribute('src_code_rate_action_list_name');
  }
  public set srcCodeRateActionListName(value: string) {
    this._srcCodeRateActionListName = value;
  }
  public resetSrcCodeRateActionListName() {
    this._srcCodeRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCodeRateActionListNameInput() {
    return this._srcCodeRateActionListName;
  }
}

export class DdosZoneTemplateIcmpV4TypeV4SrcCodeCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateIcmpV4TypeV4SrcCodeCfgOutputReference {
    return new DdosZoneTemplateIcmpV4TypeV4SrcCodeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateIcmpV4TypeV4SrcRateCfg {
  /**
  * Specify the whole src rate for this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_type_rate DdosZoneTemplateIcmpV4Type#src_type_rate}
  */
  readonly srcTypeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_type_rate_action DdosZoneTemplateIcmpV4Type#src_type_rate_action}
  */
  readonly srcTypeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#src_type_rate_action_list_name DdosZoneTemplateIcmpV4Type#src_type_rate_action_list_name}
  */
  readonly srcTypeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV4TypeV4SrcRateCfgToTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4SrcRateCfgOutputReference | DdosZoneTemplateIcmpV4TypeV4SrcRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_type_rate: cdktf.numberToTerraform(struct!.srcTypeRate),
    src_type_rate_action: cdktf.stringToTerraform(struct!.srcTypeRateAction),
    src_type_rate_action_list_name: cdktf.stringToTerraform(struct!.srcTypeRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV4TypeV4SrcRateCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV4TypeV4SrcRateCfgOutputReference | DdosZoneTemplateIcmpV4TypeV4SrcRateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_type_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcTypeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_type_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.srcTypeRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_type_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcTypeRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV4TypeV4SrcRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV4TypeV4SrcRateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcTypeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeRate = this._srcTypeRate;
    }
    if (this._srcTypeRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeRateAction = this._srcTypeRateAction;
    }
    if (this._srcTypeRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeRateActionListName = this._srcTypeRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV4TypeV4SrcRateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcTypeRate = undefined;
      this._srcTypeRateAction = undefined;
      this._srcTypeRateActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcTypeRate = value.srcTypeRate;
      this._srcTypeRateAction = value.srcTypeRateAction;
      this._srcTypeRateActionListName = value.srcTypeRateActionListName;
    }
  }

  // src_type_rate - computed: false, optional: true, required: false
  private _srcTypeRate?: number; 
  public get srcTypeRate() {
    return this.getNumberAttribute('src_type_rate');
  }
  public set srcTypeRate(value: number) {
    this._srcTypeRate = value;
  }
  public resetSrcTypeRate() {
    this._srcTypeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeRateInput() {
    return this._srcTypeRate;
  }

  // src_type_rate_action - computed: false, optional: true, required: false
  private _srcTypeRateAction?: string; 
  public get srcTypeRateAction() {
    return this.getStringAttribute('src_type_rate_action');
  }
  public set srcTypeRateAction(value: string) {
    this._srcTypeRateAction = value;
  }
  public resetSrcTypeRateAction() {
    this._srcTypeRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeRateActionInput() {
    return this._srcTypeRateAction;
  }

  // src_type_rate_action_list_name - computed: false, optional: true, required: false
  private _srcTypeRateActionListName?: string; 
  public get srcTypeRateActionListName() {
    return this.getStringAttribute('src_type_rate_action_list_name');
  }
  public set srcTypeRateActionListName(value: string) {
    this._srcTypeRateActionListName = value;
  }
  public resetSrcTypeRateActionListName() {
    this._srcTypeRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeRateActionListNameInput() {
    return this._srcTypeRateActionListName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type thunder_ddos_zone_template_icmp_v4_type}
*/
export class DdosZoneTemplateIcmpV4Type extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_icmp_v4_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateIcmpV4Type resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateIcmpV4Type to import
  * @param importFromId The id of the existing DdosZoneTemplateIcmpV4Type that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateIcmpV4Type to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_icmp_v4_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v4_type thunder_ddos_zone_template_icmp_v4_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateIcmpV4TypeConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateIcmpV4TypeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_icmp_v4_type',
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
    this._dstCodeOtherRate = config.dstCodeOtherRate;
    this._dstCodeOtherRateAction = config.dstCodeOtherRateAction;
    this._dstCodeOtherRateActionListName = config.dstCodeOtherRateActionListName;
    this._icmpTmplName = config.icmpTmplName;
    this._icmpTypeAction = config.icmpTypeAction;
    this._icmpTypeActionListName = config.icmpTypeActionListName;
    this._id = config.id;
    this._srcCodeOtherRate = config.srcCodeOtherRate;
    this._srcCodeOtherRateAction = config.srcCodeOtherRateAction;
    this._srcCodeOtherRateActionListName = config.srcCodeOtherRateActionListName;
    this._typeNumber = config.typeNumber;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._v4DstCodeCfg.internalValue = config.v4DstCodeCfg;
    this._v4DstRateCfg.internalValue = config.v4DstRateCfg;
    this._v4SrcCodeCfg.internalValue = config.v4SrcCodeCfg;
    this._v4SrcRateCfg.internalValue = config.v4SrcRateCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_code_other_rate - computed: false, optional: true, required: false
  private _dstCodeOtherRate?: number; 
  public get dstCodeOtherRate() {
    return this.getNumberAttribute('dst_code_other_rate');
  }
  public set dstCodeOtherRate(value: number) {
    this._dstCodeOtherRate = value;
  }
  public resetDstCodeOtherRate() {
    this._dstCodeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCodeOtherRateInput() {
    return this._dstCodeOtherRate;
  }

  // dst_code_other_rate_action - computed: false, optional: true, required: false
  private _dstCodeOtherRateAction?: string; 
  public get dstCodeOtherRateAction() {
    return this.getStringAttribute('dst_code_other_rate_action');
  }
  public set dstCodeOtherRateAction(value: string) {
    this._dstCodeOtherRateAction = value;
  }
  public resetDstCodeOtherRateAction() {
    this._dstCodeOtherRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCodeOtherRateActionInput() {
    return this._dstCodeOtherRateAction;
  }

  // dst_code_other_rate_action_list_name - computed: false, optional: true, required: false
  private _dstCodeOtherRateActionListName?: string; 
  public get dstCodeOtherRateActionListName() {
    return this.getStringAttribute('dst_code_other_rate_action_list_name');
  }
  public set dstCodeOtherRateActionListName(value: string) {
    this._dstCodeOtherRateActionListName = value;
  }
  public resetDstCodeOtherRateActionListName() {
    this._dstCodeOtherRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCodeOtherRateActionListNameInput() {
    return this._dstCodeOtherRateActionListName;
  }

  // icmp_tmpl_name - computed: false, optional: false, required: true
  private _icmpTmplName?: string; 
  public get icmpTmplName() {
    return this.getStringAttribute('icmp_tmpl_name');
  }
  public set icmpTmplName(value: string) {
    this._icmpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTmplNameInput() {
    return this._icmpTmplName;
  }

  // icmp_type_action - computed: false, optional: true, required: false
  private _icmpTypeAction?: string; 
  public get icmpTypeAction() {
    return this.getStringAttribute('icmp_type_action');
  }
  public set icmpTypeAction(value: string) {
    this._icmpTypeAction = value;
  }
  public resetIcmpTypeAction() {
    this._icmpTypeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeActionInput() {
    return this._icmpTypeAction;
  }

  // icmp_type_action_list_name - computed: false, optional: true, required: false
  private _icmpTypeActionListName?: string; 
  public get icmpTypeActionListName() {
    return this.getStringAttribute('icmp_type_action_list_name');
  }
  public set icmpTypeActionListName(value: string) {
    this._icmpTypeActionListName = value;
  }
  public resetIcmpTypeActionListName() {
    this._icmpTypeActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeActionListNameInput() {
    return this._icmpTypeActionListName;
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

  // src_code_other_rate - computed: false, optional: true, required: false
  private _srcCodeOtherRate?: number; 
  public get srcCodeOtherRate() {
    return this.getNumberAttribute('src_code_other_rate');
  }
  public set srcCodeOtherRate(value: number) {
    this._srcCodeOtherRate = value;
  }
  public resetSrcCodeOtherRate() {
    this._srcCodeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCodeOtherRateInput() {
    return this._srcCodeOtherRate;
  }

  // src_code_other_rate_action - computed: false, optional: true, required: false
  private _srcCodeOtherRateAction?: string; 
  public get srcCodeOtherRateAction() {
    return this.getStringAttribute('src_code_other_rate_action');
  }
  public set srcCodeOtherRateAction(value: string) {
    this._srcCodeOtherRateAction = value;
  }
  public resetSrcCodeOtherRateAction() {
    this._srcCodeOtherRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCodeOtherRateActionInput() {
    return this._srcCodeOtherRateAction;
  }

  // src_code_other_rate_action_list_name - computed: false, optional: true, required: false
  private _srcCodeOtherRateActionListName?: string; 
  public get srcCodeOtherRateActionListName() {
    return this.getStringAttribute('src_code_other_rate_action_list_name');
  }
  public set srcCodeOtherRateActionListName(value: string) {
    this._srcCodeOtherRateActionListName = value;
  }
  public resetSrcCodeOtherRateActionListName() {
    this._srcCodeOtherRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCodeOtherRateActionListNameInput() {
    return this._srcCodeOtherRateActionListName;
  }

  // type_number - computed: false, optional: false, required: true
  private _typeNumber?: number; 
  public get typeNumber() {
    return this.getNumberAttribute('type_number');
  }
  public set typeNumber(value: number) {
    this._typeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNumberInput() {
    return this._typeNumber;
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

  // v4_dst_code_cfg - computed: false, optional: true, required: false
  private _v4DstCodeCfg = new DdosZoneTemplateIcmpV4TypeV4DstCodeCfgList(this, "v4_dst_code_cfg", false);
  public get v4DstCodeCfg() {
    return this._v4DstCodeCfg;
  }
  public putV4DstCodeCfg(value: DdosZoneTemplateIcmpV4TypeV4DstCodeCfg[] | cdktf.IResolvable) {
    this._v4DstCodeCfg.internalValue = value;
  }
  public resetV4DstCodeCfg() {
    this._v4DstCodeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4DstCodeCfgInput() {
    return this._v4DstCodeCfg.internalValue;
  }

  // v4_dst_rate_cfg - computed: false, optional: true, required: false
  private _v4DstRateCfg = new DdosZoneTemplateIcmpV4TypeV4DstRateCfgOutputReference(this, "v4_dst_rate_cfg");
  public get v4DstRateCfg() {
    return this._v4DstRateCfg;
  }
  public putV4DstRateCfg(value: DdosZoneTemplateIcmpV4TypeV4DstRateCfg) {
    this._v4DstRateCfg.internalValue = value;
  }
  public resetV4DstRateCfg() {
    this._v4DstRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4DstRateCfgInput() {
    return this._v4DstRateCfg.internalValue;
  }

  // v4_src_code_cfg - computed: false, optional: true, required: false
  private _v4SrcCodeCfg = new DdosZoneTemplateIcmpV4TypeV4SrcCodeCfgList(this, "v4_src_code_cfg", false);
  public get v4SrcCodeCfg() {
    return this._v4SrcCodeCfg;
  }
  public putV4SrcCodeCfg(value: DdosZoneTemplateIcmpV4TypeV4SrcCodeCfg[] | cdktf.IResolvable) {
    this._v4SrcCodeCfg.internalValue = value;
  }
  public resetV4SrcCodeCfg() {
    this._v4SrcCodeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4SrcCodeCfgInput() {
    return this._v4SrcCodeCfg.internalValue;
  }

  // v4_src_rate_cfg - computed: false, optional: true, required: false
  private _v4SrcRateCfg = new DdosZoneTemplateIcmpV4TypeV4SrcRateCfgOutputReference(this, "v4_src_rate_cfg");
  public get v4SrcRateCfg() {
    return this._v4SrcRateCfg;
  }
  public putV4SrcRateCfg(value: DdosZoneTemplateIcmpV4TypeV4SrcRateCfg) {
    this._v4SrcRateCfg.internalValue = value;
  }
  public resetV4SrcRateCfg() {
    this._v4SrcRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4SrcRateCfgInput() {
    return this._v4SrcRateCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_code_other_rate: cdktf.numberToTerraform(this._dstCodeOtherRate),
      dst_code_other_rate_action: cdktf.stringToTerraform(this._dstCodeOtherRateAction),
      dst_code_other_rate_action_list_name: cdktf.stringToTerraform(this._dstCodeOtherRateActionListName),
      icmp_tmpl_name: cdktf.stringToTerraform(this._icmpTmplName),
      icmp_type_action: cdktf.stringToTerraform(this._icmpTypeAction),
      icmp_type_action_list_name: cdktf.stringToTerraform(this._icmpTypeActionListName),
      id: cdktf.stringToTerraform(this._id),
      src_code_other_rate: cdktf.numberToTerraform(this._srcCodeOtherRate),
      src_code_other_rate_action: cdktf.stringToTerraform(this._srcCodeOtherRateAction),
      src_code_other_rate_action_list_name: cdktf.stringToTerraform(this._srcCodeOtherRateActionListName),
      type_number: cdktf.numberToTerraform(this._typeNumber),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_dst_code_cfg: cdktf.listMapper(ddosZoneTemplateIcmpV4TypeV4DstCodeCfgToTerraform, true)(this._v4DstCodeCfg.internalValue),
      v4_dst_rate_cfg: ddosZoneTemplateIcmpV4TypeV4DstRateCfgToTerraform(this._v4DstRateCfg.internalValue),
      v4_src_code_cfg: cdktf.listMapper(ddosZoneTemplateIcmpV4TypeV4SrcCodeCfgToTerraform, true)(this._v4SrcCodeCfg.internalValue),
      v4_src_rate_cfg: ddosZoneTemplateIcmpV4TypeV4SrcRateCfgToTerraform(this._v4SrcRateCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_code_other_rate: {
        value: cdktf.numberToHclTerraform(this._dstCodeOtherRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_code_other_rate_action: {
        value: cdktf.stringToHclTerraform(this._dstCodeOtherRateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_code_other_rate_action_list_name: {
        value: cdktf.stringToHclTerraform(this._dstCodeOtherRateActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._icmpTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_type_action: {
        value: cdktf.stringToHclTerraform(this._icmpTypeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_type_action_list_name: {
        value: cdktf.stringToHclTerraform(this._icmpTypeActionListName),
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
      src_code_other_rate: {
        value: cdktf.numberToHclTerraform(this._srcCodeOtherRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_code_other_rate_action: {
        value: cdktf.stringToHclTerraform(this._srcCodeOtherRateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_code_other_rate_action_list_name: {
        value: cdktf.stringToHclTerraform(this._srcCodeOtherRateActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_number: {
        value: cdktf.numberToHclTerraform(this._typeNumber),
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
      v4_dst_code_cfg: {
        value: cdktf.listMapperHcl(ddosZoneTemplateIcmpV4TypeV4DstCodeCfgToHclTerraform, true)(this._v4DstCodeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV4TypeV4DstCodeCfgList",
      },
      v4_dst_rate_cfg: {
        value: ddosZoneTemplateIcmpV4TypeV4DstRateCfgToHclTerraform(this._v4DstRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV4TypeV4DstRateCfgList",
      },
      v4_src_code_cfg: {
        value: cdktf.listMapperHcl(ddosZoneTemplateIcmpV4TypeV4SrcCodeCfgToHclTerraform, true)(this._v4SrcCodeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV4TypeV4SrcCodeCfgList",
      },
      v4_src_rate_cfg: {
        value: ddosZoneTemplateIcmpV4TypeV4SrcRateCfgToHclTerraform(this._v4SrcRateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV4TypeV4SrcRateCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
