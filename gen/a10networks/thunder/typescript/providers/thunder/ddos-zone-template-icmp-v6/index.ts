// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateIcmpV6Config extends cdktf.TerraformMetaArguments {
  /**
  * 'default': Stop matching on drop/blacklist action; 'stop-on-first-match': Stop matching on first match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#filter_match_type DdosZoneTemplateIcmpV6#filter_match_type}
  */
  readonly filterMatchType?: string;
  /**
  * DDOS ICMPv6 Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_tmpl_name DdosZoneTemplateIcmpV6#icmp_tmpl_name}
  */
  readonly icmpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#id DdosZoneTemplateIcmpV6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#user_tag DdosZoneTemplateIcmpV6#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#uuid DdosZoneTemplateIcmpV6#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#filter_list DdosZoneTemplateIcmpV6#filter_list}
  */
  readonly filterList?: DdosZoneTemplateIcmpV6FilterListStruct[] | cdktf.IResolvable;
  /**
  * type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#type_list DdosZoneTemplateIcmpV6#type_list}
  */
  readonly typeList?: DdosZoneTemplateIcmpV6TypeListStruct[] | cdktf.IResolvable;
  /**
  * type_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#type_other DdosZoneTemplateIcmpV6#type_other}
  */
  readonly typeOther?: DdosZoneTemplateIcmpV6TypeOther;
}
export interface DdosZoneTemplateIcmpV6FilterListStruct {
  /**
  * filter using Berkeley packet filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#byte_offset_filter DdosZoneTemplateIcmpV6#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_filter_action DdosZoneTemplateIcmpV6#icmp_filter_action}
  */
  readonly icmpFilterAction?: string;
  /**
  * list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_filter_action_list_name DdosZoneTemplateIcmpV6#icmp_filter_action_list_name}
  */
  readonly icmpFilterActionListName?: string;
  /**
  * Inverse the result of matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_filter_inverse_match DdosZoneTemplateIcmpV6#icmp_filter_inverse_match}
  */
  readonly icmpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_filter_name DdosZoneTemplateIcmpV6#icmp_filter_name}
  */
  readonly icmpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_filter_regex DdosZoneTemplateIcmpV6#icmp_filter_regex}
  */
  readonly icmpFilterRegex?: string;
  /**
  * sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_filter_seq DdosZoneTemplateIcmpV6#icmp_filter_seq}
  */
  readonly icmpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#user_tag DdosZoneTemplateIcmpV6#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#uuid DdosZoneTemplateIcmpV6#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateIcmpV6FilterListStructToTerraform(struct?: DdosZoneTemplateIcmpV6FilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    icmp_filter_action: cdktf.stringToTerraform(struct!.icmpFilterAction),
    icmp_filter_action_list_name: cdktf.stringToTerraform(struct!.icmpFilterActionListName),
    icmp_filter_inverse_match: cdktf.numberToTerraform(struct!.icmpFilterInverseMatch),
    icmp_filter_name: cdktf.stringToTerraform(struct!.icmpFilterName),
    icmp_filter_regex: cdktf.stringToTerraform(struct!.icmpFilterRegex),
    icmp_filter_seq: cdktf.numberToTerraform(struct!.icmpFilterSeq),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateIcmpV6FilterListStructToHclTerraform(struct?: DdosZoneTemplateIcmpV6FilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_offset_filter: {
      value: cdktf.stringToHclTerraform(struct!.byteOffsetFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.icmpFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.icmpFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_filter_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.icmpFilterInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.icmpFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.icmpFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.icmpFilterSeq),
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

export class DdosZoneTemplateIcmpV6FilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateIcmpV6FilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteOffsetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOffsetFilter = this._byteOffsetFilter;
    }
    if (this._icmpFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFilterAction = this._icmpFilterAction;
    }
    if (this._icmpFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFilterActionListName = this._icmpFilterActionListName;
    }
    if (this._icmpFilterInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFilterInverseMatch = this._icmpFilterInverseMatch;
    }
    if (this._icmpFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFilterName = this._icmpFilterName;
    }
    if (this._icmpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFilterRegex = this._icmpFilterRegex;
    }
    if (this._icmpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFilterSeq = this._icmpFilterSeq;
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

  public set internalValue(value: DdosZoneTemplateIcmpV6FilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._icmpFilterAction = undefined;
      this._icmpFilterActionListName = undefined;
      this._icmpFilterInverseMatch = undefined;
      this._icmpFilterName = undefined;
      this._icmpFilterRegex = undefined;
      this._icmpFilterSeq = undefined;
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
      this._byteOffsetFilter = value.byteOffsetFilter;
      this._icmpFilterAction = value.icmpFilterAction;
      this._icmpFilterActionListName = value.icmpFilterActionListName;
      this._icmpFilterInverseMatch = value.icmpFilterInverseMatch;
      this._icmpFilterName = value.icmpFilterName;
      this._icmpFilterRegex = value.icmpFilterRegex;
      this._icmpFilterSeq = value.icmpFilterSeq;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // byte_offset_filter - computed: false, optional: true, required: false
  private _byteOffsetFilter?: string; 
  public get byteOffsetFilter() {
    return this.getStringAttribute('byte_offset_filter');
  }
  public set byteOffsetFilter(value: string) {
    this._byteOffsetFilter = value;
  }
  public resetByteOffsetFilter() {
    this._byteOffsetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteOffsetFilterInput() {
    return this._byteOffsetFilter;
  }

  // icmp_filter_action - computed: false, optional: true, required: false
  private _icmpFilterAction?: string; 
  public get icmpFilterAction() {
    return this.getStringAttribute('icmp_filter_action');
  }
  public set icmpFilterAction(value: string) {
    this._icmpFilterAction = value;
  }
  public resetIcmpFilterAction() {
    this._icmpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterActionInput() {
    return this._icmpFilterAction;
  }

  // icmp_filter_action_list_name - computed: false, optional: true, required: false
  private _icmpFilterActionListName?: string; 
  public get icmpFilterActionListName() {
    return this.getStringAttribute('icmp_filter_action_list_name');
  }
  public set icmpFilterActionListName(value: string) {
    this._icmpFilterActionListName = value;
  }
  public resetIcmpFilterActionListName() {
    this._icmpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterActionListNameInput() {
    return this._icmpFilterActionListName;
  }

  // icmp_filter_inverse_match - computed: false, optional: true, required: false
  private _icmpFilterInverseMatch?: number; 
  public get icmpFilterInverseMatch() {
    return this.getNumberAttribute('icmp_filter_inverse_match');
  }
  public set icmpFilterInverseMatch(value: number) {
    this._icmpFilterInverseMatch = value;
  }
  public resetIcmpFilterInverseMatch() {
    this._icmpFilterInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterInverseMatchInput() {
    return this._icmpFilterInverseMatch;
  }

  // icmp_filter_name - computed: false, optional: false, required: true
  private _icmpFilterName?: string; 
  public get icmpFilterName() {
    return this.getStringAttribute('icmp_filter_name');
  }
  public set icmpFilterName(value: string) {
    this._icmpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterNameInput() {
    return this._icmpFilterName;
  }

  // icmp_filter_regex - computed: false, optional: true, required: false
  private _icmpFilterRegex?: string; 
  public get icmpFilterRegex() {
    return this.getStringAttribute('icmp_filter_regex');
  }
  public set icmpFilterRegex(value: string) {
    this._icmpFilterRegex = value;
  }
  public resetIcmpFilterRegex() {
    this._icmpFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterRegexInput() {
    return this._icmpFilterRegex;
  }

  // icmp_filter_seq - computed: false, optional: true, required: false
  private _icmpFilterSeq?: number; 
  public get icmpFilterSeq() {
    return this.getNumberAttribute('icmp_filter_seq');
  }
  public set icmpFilterSeq(value: number) {
    this._icmpFilterSeq = value;
  }
  public resetIcmpFilterSeq() {
    this._icmpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterSeqInput() {
    return this._icmpFilterSeq;
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

export class DdosZoneTemplateIcmpV6FilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateIcmpV6FilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateIcmpV6FilterListStructOutputReference {
    return new DdosZoneTemplateIcmpV6FilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg {
  /**
  * Specify the ICMP code for this dst rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_code_number DdosZoneTemplateIcmpV6#dst_code_number}
  */
  readonly dstCodeNumber?: number;
  /**
  * Specify the rate with the code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_code_rate DdosZoneTemplateIcmpV6#dst_code_rate}
  */
  readonly dstCodeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_code_rate_action DdosZoneTemplateIcmpV6#dst_code_rate_action}
  */
  readonly dstCodeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_code_rate_action_list_name DdosZoneTemplateIcmpV6#dst_code_rate_action_list_name}
  */
  readonly dstCodeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeListV6DstCodeCfgToTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg | cdktf.IResolvable): any {
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


export function ddosZoneTemplateIcmpV6TypeListV6DstCodeCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg | cdktf.IResolvable): any {
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

export class DdosZoneTemplateIcmpV6TypeListV6DstCodeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg | cdktf.IResolvable | undefined) {
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

export class DdosZoneTemplateIcmpV6TypeListV6DstCodeCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateIcmpV6TypeListV6DstCodeCfgOutputReference {
    return new DdosZoneTemplateIcmpV6TypeListV6DstCodeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateIcmpV6TypeListV6DstRateCfg {
  /**
  * Specify the whole dst rate for this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_type_rate DdosZoneTemplateIcmpV6#dst_type_rate}
  */
  readonly dstTypeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_type_rate_action DdosZoneTemplateIcmpV6#dst_type_rate_action}
  */
  readonly dstTypeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_type_rate_action_list_name DdosZoneTemplateIcmpV6#dst_type_rate_action_list_name}
  */
  readonly dstTypeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeListV6DstRateCfgToTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6DstRateCfgOutputReference | DdosZoneTemplateIcmpV6TypeListV6DstRateCfg): any {
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


export function ddosZoneTemplateIcmpV6TypeListV6DstRateCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6DstRateCfgOutputReference | DdosZoneTemplateIcmpV6TypeListV6DstRateCfg): any {
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

export class DdosZoneTemplateIcmpV6TypeListV6DstRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV6TypeListV6DstRateCfg | undefined {
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

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeListV6DstRateCfg | undefined) {
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
export interface DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg {
  /**
  * Specify the ICMP code for this src rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_code_number DdosZoneTemplateIcmpV6#src_code_number}
  */
  readonly srcCodeNumber?: number;
  /**
  * Specify the rate with the code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_code_rate DdosZoneTemplateIcmpV6#src_code_rate}
  */
  readonly srcCodeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_code_rate_action DdosZoneTemplateIcmpV6#src_code_rate_action}
  */
  readonly srcCodeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_code_rate_action_list_name DdosZoneTemplateIcmpV6#src_code_rate_action_list_name}
  */
  readonly srcCodeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeListV6SrcCodeCfgToTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg | cdktf.IResolvable): any {
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


export function ddosZoneTemplateIcmpV6TypeListV6SrcCodeCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg | cdktf.IResolvable): any {
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

export class DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg | cdktf.IResolvable | undefined) {
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

export class DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfgList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfgOutputReference {
    return new DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateIcmpV6TypeListV6SrcRateCfg {
  /**
  * Specify the whole src rate for this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_type_rate DdosZoneTemplateIcmpV6#src_type_rate}
  */
  readonly srcTypeRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_type_rate_action DdosZoneTemplateIcmpV6#src_type_rate_action}
  */
  readonly srcTypeRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_type_rate_action_list_name DdosZoneTemplateIcmpV6#src_type_rate_action_list_name}
  */
  readonly srcTypeRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeListV6SrcRateCfgToTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6SrcRateCfgOutputReference | DdosZoneTemplateIcmpV6TypeListV6SrcRateCfg): any {
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


export function ddosZoneTemplateIcmpV6TypeListV6SrcRateCfgToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeListV6SrcRateCfgOutputReference | DdosZoneTemplateIcmpV6TypeListV6SrcRateCfg): any {
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

export class DdosZoneTemplateIcmpV6TypeListV6SrcRateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV6TypeListV6SrcRateCfg | undefined {
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

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeListV6SrcRateCfg | undefined) {
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
export interface DdosZoneTemplateIcmpV6TypeListStruct {
  /**
  * Specify the rate with other code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_code_other_rate DdosZoneTemplateIcmpV6#dst_code_other_rate}
  */
  readonly dstCodeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_code_other_rate_action DdosZoneTemplateIcmpV6#dst_code_other_rate_action}
  */
  readonly dstCodeOtherRateAction?: string;
  /**
  * Configure action-list to take for  rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_code_other_rate_action_list_name DdosZoneTemplateIcmpV6#dst_code_other_rate_action_list_name}
  */
  readonly dstCodeOtherRateActionListName?: string;
  /**
  * 'drop': Reject this ICMP type; 'blacklist-src': Blacklist-src this ICMP type; 'ignore': Ignore this ICMP type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_type_action DdosZoneTemplateIcmpV6#icmp_type_action}
  */
  readonly icmpTypeAction?: string;
  /**
  * Configure action-list to take for this ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_type_action_list_name DdosZoneTemplateIcmpV6#icmp_type_action_list_name}
  */
  readonly icmpTypeActionListName?: string;
  /**
  * Specify the rate with other code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_code_other_rate DdosZoneTemplateIcmpV6#src_code_other_rate}
  */
  readonly srcCodeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_code_other_rate_action DdosZoneTemplateIcmpV6#src_code_other_rate_action}
  */
  readonly srcCodeOtherRateAction?: string;
  /**
  * Configure action-list to take for  rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_code_other_rate_action_list_name DdosZoneTemplateIcmpV6#src_code_other_rate_action_list_name}
  */
  readonly srcCodeOtherRateActionListName?: string;
  /**
  * Specify ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#type_number DdosZoneTemplateIcmpV6#type_number}
  */
  readonly typeNumber: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#user_tag DdosZoneTemplateIcmpV6#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#uuid DdosZoneTemplateIcmpV6#uuid}
  */
  readonly uuid?: string;
  /**
  * v6_dst_code_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#v6_dst_code_cfg DdosZoneTemplateIcmpV6#v6_dst_code_cfg}
  */
  readonly v6DstCodeCfg?: DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg[] | cdktf.IResolvable;
  /**
  * v6_dst_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#v6_dst_rate_cfg DdosZoneTemplateIcmpV6#v6_dst_rate_cfg}
  */
  readonly v6DstRateCfg?: DdosZoneTemplateIcmpV6TypeListV6DstRateCfg;
  /**
  * v6_src_code_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#v6_src_code_cfg DdosZoneTemplateIcmpV6#v6_src_code_cfg}
  */
  readonly v6SrcCodeCfg?: DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg[] | cdktf.IResolvable;
  /**
  * v6_src_rate_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#v6_src_rate_cfg DdosZoneTemplateIcmpV6#v6_src_rate_cfg}
  */
  readonly v6SrcRateCfg?: DdosZoneTemplateIcmpV6TypeListV6SrcRateCfg;
}

export function ddosZoneTemplateIcmpV6TypeListStructToTerraform(struct?: DdosZoneTemplateIcmpV6TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_code_other_rate: cdktf.numberToTerraform(struct!.dstCodeOtherRate),
    dst_code_other_rate_action: cdktf.stringToTerraform(struct!.dstCodeOtherRateAction),
    dst_code_other_rate_action_list_name: cdktf.stringToTerraform(struct!.dstCodeOtherRateActionListName),
    icmp_type_action: cdktf.stringToTerraform(struct!.icmpTypeAction),
    icmp_type_action_list_name: cdktf.stringToTerraform(struct!.icmpTypeActionListName),
    src_code_other_rate: cdktf.numberToTerraform(struct!.srcCodeOtherRate),
    src_code_other_rate_action: cdktf.stringToTerraform(struct!.srcCodeOtherRateAction),
    src_code_other_rate_action_list_name: cdktf.stringToTerraform(struct!.srcCodeOtherRateActionListName),
    type_number: cdktf.numberToTerraform(struct!.typeNumber),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    v6_dst_code_cfg: cdktf.listMapper(ddosZoneTemplateIcmpV6TypeListV6DstCodeCfgToTerraform, true)(struct!.v6DstCodeCfg),
    v6_dst_rate_cfg: ddosZoneTemplateIcmpV6TypeListV6DstRateCfgToTerraform(struct!.v6DstRateCfg),
    v6_src_code_cfg: cdktf.listMapper(ddosZoneTemplateIcmpV6TypeListV6SrcCodeCfgToTerraform, true)(struct!.v6SrcCodeCfg),
    v6_src_rate_cfg: ddosZoneTemplateIcmpV6TypeListV6SrcRateCfgToTerraform(struct!.v6SrcRateCfg),
  }
}


export function ddosZoneTemplateIcmpV6TypeListStructToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_code_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstCodeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_code_other_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.dstCodeOtherRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_code_other_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstCodeOtherRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type_action: {
      value: cdktf.stringToHclTerraform(struct!.icmpTypeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.icmpTypeActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_code_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcCodeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_code_other_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.srcCodeOtherRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_code_other_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcCodeOtherRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_number: {
      value: cdktf.numberToHclTerraform(struct!.typeNumber),
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
    v6_dst_code_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateIcmpV6TypeListV6DstCodeCfgToHclTerraform, true)(struct!.v6DstCodeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateIcmpV6TypeListV6DstCodeCfgList",
    },
    v6_dst_rate_cfg: {
      value: ddosZoneTemplateIcmpV6TypeListV6DstRateCfgToHclTerraform(struct!.v6DstRateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateIcmpV6TypeListV6DstRateCfgList",
    },
    v6_src_code_cfg: {
      value: cdktf.listMapperHcl(ddosZoneTemplateIcmpV6TypeListV6SrcCodeCfgToHclTerraform, true)(struct!.v6SrcCodeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfgList",
    },
    v6_src_rate_cfg: {
      value: ddosZoneTemplateIcmpV6TypeListV6SrcRateCfgToHclTerraform(struct!.v6SrcRateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateIcmpV6TypeListV6SrcRateCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV6TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateIcmpV6TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstCodeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCodeOtherRate = this._dstCodeOtherRate;
    }
    if (this._dstCodeOtherRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCodeOtherRateAction = this._dstCodeOtherRateAction;
    }
    if (this._dstCodeOtherRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCodeOtherRateActionListName = this._dstCodeOtherRateActionListName;
    }
    if (this._icmpTypeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeAction = this._icmpTypeAction;
    }
    if (this._icmpTypeActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeActionListName = this._icmpTypeActionListName;
    }
    if (this._srcCodeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCodeOtherRate = this._srcCodeOtherRate;
    }
    if (this._srcCodeOtherRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCodeOtherRateAction = this._srcCodeOtherRateAction;
    }
    if (this._srcCodeOtherRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCodeOtherRateActionListName = this._srcCodeOtherRateActionListName;
    }
    if (this._typeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeNumber = this._typeNumber;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._v6DstCodeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6DstCodeCfg = this._v6DstCodeCfg?.internalValue;
    }
    if (this._v6DstRateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6DstRateCfg = this._v6DstRateCfg?.internalValue;
    }
    if (this._v6SrcCodeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6SrcCodeCfg = this._v6SrcCodeCfg?.internalValue;
    }
    if (this._v6SrcRateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6SrcRateCfg = this._v6SrcRateCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstCodeOtherRate = undefined;
      this._dstCodeOtherRateAction = undefined;
      this._dstCodeOtherRateActionListName = undefined;
      this._icmpTypeAction = undefined;
      this._icmpTypeActionListName = undefined;
      this._srcCodeOtherRate = undefined;
      this._srcCodeOtherRateAction = undefined;
      this._srcCodeOtherRateActionListName = undefined;
      this._typeNumber = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._v6DstCodeCfg.internalValue = undefined;
      this._v6DstRateCfg.internalValue = undefined;
      this._v6SrcCodeCfg.internalValue = undefined;
      this._v6SrcRateCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstCodeOtherRate = value.dstCodeOtherRate;
      this._dstCodeOtherRateAction = value.dstCodeOtherRateAction;
      this._dstCodeOtherRateActionListName = value.dstCodeOtherRateActionListName;
      this._icmpTypeAction = value.icmpTypeAction;
      this._icmpTypeActionListName = value.icmpTypeActionListName;
      this._srcCodeOtherRate = value.srcCodeOtherRate;
      this._srcCodeOtherRateAction = value.srcCodeOtherRateAction;
      this._srcCodeOtherRateActionListName = value.srcCodeOtherRateActionListName;
      this._typeNumber = value.typeNumber;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._v6DstCodeCfg.internalValue = value.v6DstCodeCfg;
      this._v6DstRateCfg.internalValue = value.v6DstRateCfg;
      this._v6SrcCodeCfg.internalValue = value.v6SrcCodeCfg;
      this._v6SrcRateCfg.internalValue = value.v6SrcRateCfg;
    }
  }

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

  // v6_dst_code_cfg - computed: false, optional: true, required: false
  private _v6DstCodeCfg = new DdosZoneTemplateIcmpV6TypeListV6DstCodeCfgList(this, "v6_dst_code_cfg", false);
  public get v6DstCodeCfg() {
    return this._v6DstCodeCfg;
  }
  public putV6DstCodeCfg(value: DdosZoneTemplateIcmpV6TypeListV6DstCodeCfg[] | cdktf.IResolvable) {
    this._v6DstCodeCfg.internalValue = value;
  }
  public resetV6DstCodeCfg() {
    this._v6DstCodeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DstCodeCfgInput() {
    return this._v6DstCodeCfg.internalValue;
  }

  // v6_dst_rate_cfg - computed: false, optional: true, required: false
  private _v6DstRateCfg = new DdosZoneTemplateIcmpV6TypeListV6DstRateCfgOutputReference(this, "v6_dst_rate_cfg");
  public get v6DstRateCfg() {
    return this._v6DstRateCfg;
  }
  public putV6DstRateCfg(value: DdosZoneTemplateIcmpV6TypeListV6DstRateCfg) {
    this._v6DstRateCfg.internalValue = value;
  }
  public resetV6DstRateCfg() {
    this._v6DstRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DstRateCfgInput() {
    return this._v6DstRateCfg.internalValue;
  }

  // v6_src_code_cfg - computed: false, optional: true, required: false
  private _v6SrcCodeCfg = new DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfgList(this, "v6_src_code_cfg", false);
  public get v6SrcCodeCfg() {
    return this._v6SrcCodeCfg;
  }
  public putV6SrcCodeCfg(value: DdosZoneTemplateIcmpV6TypeListV6SrcCodeCfg[] | cdktf.IResolvable) {
    this._v6SrcCodeCfg.internalValue = value;
  }
  public resetV6SrcCodeCfg() {
    this._v6SrcCodeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6SrcCodeCfgInput() {
    return this._v6SrcCodeCfg.internalValue;
  }

  // v6_src_rate_cfg - computed: false, optional: true, required: false
  private _v6SrcRateCfg = new DdosZoneTemplateIcmpV6TypeListV6SrcRateCfgOutputReference(this, "v6_src_rate_cfg");
  public get v6SrcRateCfg() {
    return this._v6SrcRateCfg;
  }
  public putV6SrcRateCfg(value: DdosZoneTemplateIcmpV6TypeListV6SrcRateCfg) {
    this._v6SrcRateCfg.internalValue = value;
  }
  public resetV6SrcRateCfg() {
    this._v6SrcRateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6SrcRateCfgInput() {
    return this._v6SrcRateCfg.internalValue;
  }
}

export class DdosZoneTemplateIcmpV6TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateIcmpV6TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateIcmpV6TypeListStructOutputReference {
    return new DdosZoneTemplateIcmpV6TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateIcmpV6TypeOtherDst {
  /**
  * Specify the whole dst rate for wildcard ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_type_other_rate DdosZoneTemplateIcmpV6#dst_type_other_rate}
  */
  readonly dstTypeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_type_other_rate_action DdosZoneTemplateIcmpV6#dst_type_other_rate_action}
  */
  readonly dstTypeOtherRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst_type_other_rate_action_list_name DdosZoneTemplateIcmpV6#dst_type_other_rate_action_list_name}
  */
  readonly dstTypeOtherRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeOtherDstToTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherDstOutputReference | DdosZoneTemplateIcmpV6TypeOtherDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_type_other_rate: cdktf.numberToTerraform(struct!.dstTypeOtherRate),
    dst_type_other_rate_action: cdktf.stringToTerraform(struct!.dstTypeOtherRateAction),
    dst_type_other_rate_action_list_name: cdktf.stringToTerraform(struct!.dstTypeOtherRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV6TypeOtherDstToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherDstOutputReference | DdosZoneTemplateIcmpV6TypeOtherDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_type_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstTypeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_type_other_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.dstTypeOtherRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_type_other_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstTypeOtherRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV6TypeOtherDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV6TypeOtherDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstTypeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeOtherRate = this._dstTypeOtherRate;
    }
    if (this._dstTypeOtherRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeOtherRateAction = this._dstTypeOtherRateAction;
    }
    if (this._dstTypeOtherRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTypeOtherRateActionListName = this._dstTypeOtherRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeOtherDst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstTypeOtherRate = undefined;
      this._dstTypeOtherRateAction = undefined;
      this._dstTypeOtherRateActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstTypeOtherRate = value.dstTypeOtherRate;
      this._dstTypeOtherRateAction = value.dstTypeOtherRateAction;
      this._dstTypeOtherRateActionListName = value.dstTypeOtherRateActionListName;
    }
  }

  // dst_type_other_rate - computed: false, optional: true, required: false
  private _dstTypeOtherRate?: number; 
  public get dstTypeOtherRate() {
    return this.getNumberAttribute('dst_type_other_rate');
  }
  public set dstTypeOtherRate(value: number) {
    this._dstTypeOtherRate = value;
  }
  public resetDstTypeOtherRate() {
    this._dstTypeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeOtherRateInput() {
    return this._dstTypeOtherRate;
  }

  // dst_type_other_rate_action - computed: false, optional: true, required: false
  private _dstTypeOtherRateAction?: string; 
  public get dstTypeOtherRateAction() {
    return this.getStringAttribute('dst_type_other_rate_action');
  }
  public set dstTypeOtherRateAction(value: string) {
    this._dstTypeOtherRateAction = value;
  }
  public resetDstTypeOtherRateAction() {
    this._dstTypeOtherRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeOtherRateActionInput() {
    return this._dstTypeOtherRateAction;
  }

  // dst_type_other_rate_action_list_name - computed: false, optional: true, required: false
  private _dstTypeOtherRateActionListName?: string; 
  public get dstTypeOtherRateActionListName() {
    return this.getStringAttribute('dst_type_other_rate_action_list_name');
  }
  public set dstTypeOtherRateActionListName(value: string) {
    this._dstTypeOtherRateActionListName = value;
  }
  public resetDstTypeOtherRateActionListName() {
    this._dstTypeOtherRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeOtherRateActionListNameInput() {
    return this._dstTypeOtherRateActionListName;
  }
}
export interface DdosZoneTemplateIcmpV6TypeOtherSrc {
  /**
  * Specify the whole src rate for wildcard ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_type_other_rate DdosZoneTemplateIcmpV6#src_type_other_rate}
  */
  readonly srcTypeOtherRate?: number;
  /**
  * 'drop': Drop packets for rate exceed (Default); 'blacklist-src': Blacklist-src for rate exceed; 'ignore': Do nothing for rate exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_type_other_rate_action DdosZoneTemplateIcmpV6#src_type_other_rate_action}
  */
  readonly srcTypeOtherRateAction?: string;
  /**
  * Configure action-list to take for rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src_type_other_rate_action_list_name DdosZoneTemplateIcmpV6#src_type_other_rate_action_list_name}
  */
  readonly srcTypeOtherRateActionListName?: string;
}

export function ddosZoneTemplateIcmpV6TypeOtherSrcToTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherSrcOutputReference | DdosZoneTemplateIcmpV6TypeOtherSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_type_other_rate: cdktf.numberToTerraform(struct!.srcTypeOtherRate),
    src_type_other_rate_action: cdktf.stringToTerraform(struct!.srcTypeOtherRateAction),
    src_type_other_rate_action_list_name: cdktf.stringToTerraform(struct!.srcTypeOtherRateActionListName),
  }
}


export function ddosZoneTemplateIcmpV6TypeOtherSrcToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherSrcOutputReference | DdosZoneTemplateIcmpV6TypeOtherSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_type_other_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcTypeOtherRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_type_other_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.srcTypeOtherRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_type_other_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcTypeOtherRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV6TypeOtherSrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV6TypeOtherSrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcTypeOtherRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeOtherRate = this._srcTypeOtherRate;
    }
    if (this._srcTypeOtherRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeOtherRateAction = this._srcTypeOtherRateAction;
    }
    if (this._srcTypeOtherRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTypeOtherRateActionListName = this._srcTypeOtherRateActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeOtherSrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcTypeOtherRate = undefined;
      this._srcTypeOtherRateAction = undefined;
      this._srcTypeOtherRateActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcTypeOtherRate = value.srcTypeOtherRate;
      this._srcTypeOtherRateAction = value.srcTypeOtherRateAction;
      this._srcTypeOtherRateActionListName = value.srcTypeOtherRateActionListName;
    }
  }

  // src_type_other_rate - computed: false, optional: true, required: false
  private _srcTypeOtherRate?: number; 
  public get srcTypeOtherRate() {
    return this.getNumberAttribute('src_type_other_rate');
  }
  public set srcTypeOtherRate(value: number) {
    this._srcTypeOtherRate = value;
  }
  public resetSrcTypeOtherRate() {
    this._srcTypeOtherRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeOtherRateInput() {
    return this._srcTypeOtherRate;
  }

  // src_type_other_rate_action - computed: false, optional: true, required: false
  private _srcTypeOtherRateAction?: string; 
  public get srcTypeOtherRateAction() {
    return this.getStringAttribute('src_type_other_rate_action');
  }
  public set srcTypeOtherRateAction(value: string) {
    this._srcTypeOtherRateAction = value;
  }
  public resetSrcTypeOtherRateAction() {
    this._srcTypeOtherRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeOtherRateActionInput() {
    return this._srcTypeOtherRateAction;
  }

  // src_type_other_rate_action_list_name - computed: false, optional: true, required: false
  private _srcTypeOtherRateActionListName?: string; 
  public get srcTypeOtherRateActionListName() {
    return this.getStringAttribute('src_type_other_rate_action_list_name');
  }
  public set srcTypeOtherRateActionListName(value: string) {
    this._srcTypeOtherRateActionListName = value;
  }
  public resetSrcTypeOtherRateActionListName() {
    this._srcTypeOtherRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTypeOtherRateActionListNameInput() {
    return this._srcTypeOtherRateActionListName;
  }
}
export interface DdosZoneTemplateIcmpV6TypeOther {
  /**
  * 'drop': Reject wildcard ICMP type; 'blacklist-src': Blacklist-src wildcard ICMP type; 'ignore': Ignore wildcard ICMP type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_type_other_action DdosZoneTemplateIcmpV6#icmp_type_other_action}
  */
  readonly icmpTypeOtherAction?: string;
  /**
  * Configure action-list to take for wildcard ICMP match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#icmp_type_other_action_list_name DdosZoneTemplateIcmpV6#icmp_type_other_action_list_name}
  */
  readonly icmpTypeOtherActionListName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#uuid DdosZoneTemplateIcmpV6#uuid}
  */
  readonly uuid?: string;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#dst DdosZoneTemplateIcmpV6#dst}
  */
  readonly dst?: DdosZoneTemplateIcmpV6TypeOtherDst;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#src DdosZoneTemplateIcmpV6#src}
  */
  readonly src?: DdosZoneTemplateIcmpV6TypeOtherSrc;
}

export function ddosZoneTemplateIcmpV6TypeOtherToTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherOutputReference | DdosZoneTemplateIcmpV6TypeOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_type_other_action: cdktf.stringToTerraform(struct!.icmpTypeOtherAction),
    icmp_type_other_action_list_name: cdktf.stringToTerraform(struct!.icmpTypeOtherActionListName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dst: ddosZoneTemplateIcmpV6TypeOtherDstToTerraform(struct!.dst),
    src: ddosZoneTemplateIcmpV6TypeOtherSrcToTerraform(struct!.src),
  }
}


export function ddosZoneTemplateIcmpV6TypeOtherToHclTerraform(struct?: DdosZoneTemplateIcmpV6TypeOtherOutputReference | DdosZoneTemplateIcmpV6TypeOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_type_other_action: {
      value: cdktf.stringToHclTerraform(struct!.icmpTypeOtherAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type_other_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.icmpTypeOtherActionListName),
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
    dst: {
      value: ddosZoneTemplateIcmpV6TypeOtherDstToHclTerraform(struct!.dst),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateIcmpV6TypeOtherDstList",
    },
    src: {
      value: ddosZoneTemplateIcmpV6TypeOtherSrcToHclTerraform(struct!.src),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateIcmpV6TypeOtherSrcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateIcmpV6TypeOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateIcmpV6TypeOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpTypeOtherAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeOtherAction = this._icmpTypeOtherAction;
    }
    if (this._icmpTypeOtherActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeOtherActionListName = this._icmpTypeOtherActionListName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dst?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst?.internalValue;
    }
    if (this._src?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateIcmpV6TypeOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpTypeOtherAction = undefined;
      this._icmpTypeOtherActionListName = undefined;
      this._uuid = undefined;
      this._dst.internalValue = undefined;
      this._src.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpTypeOtherAction = value.icmpTypeOtherAction;
      this._icmpTypeOtherActionListName = value.icmpTypeOtherActionListName;
      this._uuid = value.uuid;
      this._dst.internalValue = value.dst;
      this._src.internalValue = value.src;
    }
  }

  // icmp_type_other_action - computed: false, optional: true, required: false
  private _icmpTypeOtherAction?: string; 
  public get icmpTypeOtherAction() {
    return this.getStringAttribute('icmp_type_other_action');
  }
  public set icmpTypeOtherAction(value: string) {
    this._icmpTypeOtherAction = value;
  }
  public resetIcmpTypeOtherAction() {
    this._icmpTypeOtherAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeOtherActionInput() {
    return this._icmpTypeOtherAction;
  }

  // icmp_type_other_action_list_name - computed: false, optional: true, required: false
  private _icmpTypeOtherActionListName?: string; 
  public get icmpTypeOtherActionListName() {
    return this.getStringAttribute('icmp_type_other_action_list_name');
  }
  public set icmpTypeOtherActionListName(value: string) {
    this._icmpTypeOtherActionListName = value;
  }
  public resetIcmpTypeOtherActionListName() {
    this._icmpTypeOtherActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeOtherActionListNameInput() {
    return this._icmpTypeOtherActionListName;
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

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateIcmpV6TypeOtherDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateIcmpV6TypeOtherDst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosZoneTemplateIcmpV6TypeOtherSrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosZoneTemplateIcmpV6TypeOtherSrc) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6 thunder_ddos_zone_template_icmp_v6}
*/
export class DdosZoneTemplateIcmpV6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_icmp_v6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateIcmpV6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateIcmpV6 to import
  * @param importFromId The id of the existing DdosZoneTemplateIcmpV6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateIcmpV6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_icmp_v6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_icmp_v6 thunder_ddos_zone_template_icmp_v6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateIcmpV6Config
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateIcmpV6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_icmp_v6',
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
    this._filterMatchType = config.filterMatchType;
    this._icmpTmplName = config.icmpTmplName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._filterList.internalValue = config.filterList;
    this._typeList.internalValue = config.typeList;
    this._typeOther.internalValue = config.typeOther;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_match_type - computed: false, optional: true, required: false
  private _filterMatchType?: string; 
  public get filterMatchType() {
    return this.getStringAttribute('filter_match_type');
  }
  public set filterMatchType(value: string) {
    this._filterMatchType = value;
  }
  public resetFilterMatchType() {
    this._filterMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchTypeInput() {
    return this._filterMatchType;
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

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DdosZoneTemplateIcmpV6FilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosZoneTemplateIcmpV6FilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // type_list - computed: false, optional: true, required: false
  private _typeList = new DdosZoneTemplateIcmpV6TypeListStructList(this, "type_list", false);
  public get typeList() {
    return this._typeList;
  }
  public putTypeList(value: DdosZoneTemplateIcmpV6TypeListStruct[] | cdktf.IResolvable) {
    this._typeList.internalValue = value;
  }
  public resetTypeList() {
    this._typeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeListInput() {
    return this._typeList.internalValue;
  }

  // type_other - computed: false, optional: true, required: false
  private _typeOther = new DdosZoneTemplateIcmpV6TypeOtherOutputReference(this, "type_other");
  public get typeOther() {
    return this._typeOther;
  }
  public putTypeOther(value: DdosZoneTemplateIcmpV6TypeOther) {
    this._typeOther.internalValue = value;
  }
  public resetTypeOther() {
    this._typeOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOtherInput() {
    return this._typeOther.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_match_type: cdktf.stringToTerraform(this._filterMatchType),
      icmp_tmpl_name: cdktf.stringToTerraform(this._icmpTmplName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_list: cdktf.listMapper(ddosZoneTemplateIcmpV6FilterListStructToTerraform, true)(this._filterList.internalValue),
      type_list: cdktf.listMapper(ddosZoneTemplateIcmpV6TypeListStructToTerraform, true)(this._typeList.internalValue),
      type_other: ddosZoneTemplateIcmpV6TypeOtherToTerraform(this._typeOther.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_match_type: {
        value: cdktf.stringToHclTerraform(this._filterMatchType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      filter_list: {
        value: cdktf.listMapperHcl(ddosZoneTemplateIcmpV6FilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV6FilterListStructList",
      },
      type_list: {
        value: cdktf.listMapperHcl(ddosZoneTemplateIcmpV6TypeListStructToHclTerraform, true)(this._typeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV6TypeListStructList",
      },
      type_other: {
        value: ddosZoneTemplateIcmpV6TypeOtherToHclTerraform(this._typeOther.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIcmpV6TypeOtherList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
