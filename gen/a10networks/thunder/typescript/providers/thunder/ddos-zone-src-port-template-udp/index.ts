// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneSrcPortTemplateUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'default': Stop matching on drop/blacklist action; 'stop-on-first-match': Stop matching on first match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#filter_match_type DdosZoneSrcPortTemplateUdp#filter_match_type}
  */
  readonly filterMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#id DdosZoneSrcPortTemplateUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS UDP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#name DdosZoneSrcPortTemplateUdp#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#user_tag DdosZoneSrcPortTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#uuid DdosZoneSrcPortTemplateUdp#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#filter_list DdosZoneSrcPortTemplateUdp#filter_list}
  */
  readonly filterList?: DdosZoneSrcPortTemplateUdpFilterListStruct[] | cdktf.IResolvable;
  /**
  * max_payload_size_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#max_payload_size_cfg DdosZoneSrcPortTemplateUdp#max_payload_size_cfg}
  */
  readonly maxPayloadSizeCfg?: DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfg;
  /**
  * min_payload_size_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#min_payload_size_cfg DdosZoneSrcPortTemplateUdp#min_payload_size_cfg}
  */
  readonly minPayloadSizeCfg?: DdosZoneSrcPortTemplateUdpMinPayloadSizeCfg;
  /**
  * ntp_monlist_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#ntp_monlist_cfg DdosZoneSrcPortTemplateUdp#ntp_monlist_cfg}
  */
  readonly ntpMonlistCfg?: DdosZoneSrcPortTemplateUdpNtpMonlistCfg;
}
export interface DdosZoneSrcPortTemplateUdpFilterListStruct {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#byte_offset_filter DdosZoneSrcPortTemplateUdp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#udp_filter_action DdosZoneSrcPortTemplateUdp#udp_filter_action}
  */
  readonly udpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#udp_filter_action_list_name DdosZoneSrcPortTemplateUdp#udp_filter_action_list_name}
  */
  readonly udpFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#udp_filter_inverse_match DdosZoneSrcPortTemplateUdp#udp_filter_inverse_match}
  */
  readonly udpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#udp_filter_name DdosZoneSrcPortTemplateUdp#udp_filter_name}
  */
  readonly udpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#udp_filter_regex DdosZoneSrcPortTemplateUdp#udp_filter_regex}
  */
  readonly udpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#udp_filter_seq DdosZoneSrcPortTemplateUdp#udp_filter_seq}
  */
  readonly udpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#user_tag DdosZoneSrcPortTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#uuid DdosZoneSrcPortTemplateUdp#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneSrcPortTemplateUdpFilterListStructToTerraform(struct?: DdosZoneSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    udp_filter_action: cdktf.stringToTerraform(struct!.udpFilterAction),
    udp_filter_action_list_name: cdktf.stringToTerraform(struct!.udpFilterActionListName),
    udp_filter_inverse_match: cdktf.numberToTerraform(struct!.udpFilterInverseMatch),
    udp_filter_name: cdktf.stringToTerraform(struct!.udpFilterName),
    udp_filter_regex: cdktf.stringToTerraform(struct!.udpFilterRegex),
    udp_filter_seq: cdktf.numberToTerraform(struct!.udpFilterSeq),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneSrcPortTemplateUdpFilterListStructToHclTerraform(struct?: DdosZoneSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable): any {
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
    udp_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_filter_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.udpFilterInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.udpFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.udpFilterSeq),
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

export class DdosZoneSrcPortTemplateUdpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteOffsetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOffsetFilter = this._byteOffsetFilter;
    }
    if (this._udpFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterAction = this._udpFilterAction;
    }
    if (this._udpFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterActionListName = this._udpFilterActionListName;
    }
    if (this._udpFilterInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterInverseMatch = this._udpFilterInverseMatch;
    }
    if (this._udpFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterName = this._udpFilterName;
    }
    if (this._udpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterRegex = this._udpFilterRegex;
    }
    if (this._udpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterSeq = this._udpFilterSeq;
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

  public set internalValue(value: DdosZoneSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._udpFilterAction = undefined;
      this._udpFilterActionListName = undefined;
      this._udpFilterInverseMatch = undefined;
      this._udpFilterName = undefined;
      this._udpFilterRegex = undefined;
      this._udpFilterSeq = undefined;
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
      this._udpFilterAction = value.udpFilterAction;
      this._udpFilterActionListName = value.udpFilterActionListName;
      this._udpFilterInverseMatch = value.udpFilterInverseMatch;
      this._udpFilterName = value.udpFilterName;
      this._udpFilterRegex = value.udpFilterRegex;
      this._udpFilterSeq = value.udpFilterSeq;
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

  // udp_filter_action - computed: false, optional: true, required: false
  private _udpFilterAction?: string; 
  public get udpFilterAction() {
    return this.getStringAttribute('udp_filter_action');
  }
  public set udpFilterAction(value: string) {
    this._udpFilterAction = value;
  }
  public resetUdpFilterAction() {
    this._udpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterActionInput() {
    return this._udpFilterAction;
  }

  // udp_filter_action_list_name - computed: false, optional: true, required: false
  private _udpFilterActionListName?: string; 
  public get udpFilterActionListName() {
    return this.getStringAttribute('udp_filter_action_list_name');
  }
  public set udpFilterActionListName(value: string) {
    this._udpFilterActionListName = value;
  }
  public resetUdpFilterActionListName() {
    this._udpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterActionListNameInput() {
    return this._udpFilterActionListName;
  }

  // udp_filter_inverse_match - computed: false, optional: true, required: false
  private _udpFilterInverseMatch?: number; 
  public get udpFilterInverseMatch() {
    return this.getNumberAttribute('udp_filter_inverse_match');
  }
  public set udpFilterInverseMatch(value: number) {
    this._udpFilterInverseMatch = value;
  }
  public resetUdpFilterInverseMatch() {
    this._udpFilterInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterInverseMatchInput() {
    return this._udpFilterInverseMatch;
  }

  // udp_filter_name - computed: false, optional: false, required: true
  private _udpFilterName?: string; 
  public get udpFilterName() {
    return this.getStringAttribute('udp_filter_name');
  }
  public set udpFilterName(value: string) {
    this._udpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterNameInput() {
    return this._udpFilterName;
  }

  // udp_filter_regex - computed: false, optional: true, required: false
  private _udpFilterRegex?: string; 
  public get udpFilterRegex() {
    return this.getStringAttribute('udp_filter_regex');
  }
  public set udpFilterRegex(value: string) {
    this._udpFilterRegex = value;
  }
  public resetUdpFilterRegex() {
    this._udpFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterRegexInput() {
    return this._udpFilterRegex;
  }

  // udp_filter_seq - computed: false, optional: true, required: false
  private _udpFilterSeq?: number; 
  public get udpFilterSeq() {
    return this.getNumberAttribute('udp_filter_seq');
  }
  public set udpFilterSeq(value: number) {
    this._udpFilterSeq = value;
  }
  public resetUdpFilterSeq() {
    this._udpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterSeqInput() {
    return this._udpFilterSeq;
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

export class DdosZoneSrcPortTemplateUdpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneSrcPortTemplateUdpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneSrcPortTemplateUdpFilterListStructOutputReference {
    return new DdosZoneSrcPortTemplateUdpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfg {
  /**
  * Maximum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#max_payload_size DdosZoneSrcPortTemplateUdp#max_payload_size}
  */
  readonly maxPayloadSize?: number;
  /**
  * 'drop': Drop packets for max-payload-size exceed (Default); 'blacklist-src': Blacklist-src for max-payload-size exceed; 'ignore': Do nothing for max-payload-size exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#max_payload_size_action DdosZoneSrcPortTemplateUdp#max_payload_size_action}
  */
  readonly maxPayloadSizeAction?: string;
  /**
  * Configure action-list to take for max-payload-size exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#max_payload_size_action_list_name DdosZoneSrcPortTemplateUdp#max_payload_size_action_list_name}
  */
  readonly maxPayloadSizeActionListName?: string;
}

export function ddosZoneSrcPortTemplateUdpMaxPayloadSizeCfgToTerraform(struct?: DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfgOutputReference | DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_payload_size: cdktf.numberToTerraform(struct!.maxPayloadSize),
    max_payload_size_action: cdktf.stringToTerraform(struct!.maxPayloadSizeAction),
    max_payload_size_action_list_name: cdktf.stringToTerraform(struct!.maxPayloadSizeActionListName),
  }
}


export function ddosZoneSrcPortTemplateUdpMaxPayloadSizeCfgToHclTerraform(struct?: DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfgOutputReference | DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.maxPayloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_payload_size_action: {
      value: cdktf.stringToHclTerraform(struct!.maxPayloadSizeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_payload_size_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.maxPayloadSizeActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadSize = this._maxPayloadSize;
    }
    if (this._maxPayloadSizeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadSizeAction = this._maxPayloadSizeAction;
    }
    if (this._maxPayloadSizeActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadSizeActionListName = this._maxPayloadSizeActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPayloadSize = undefined;
      this._maxPayloadSizeAction = undefined;
      this._maxPayloadSizeActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPayloadSize = value.maxPayloadSize;
      this._maxPayloadSizeAction = value.maxPayloadSizeAction;
      this._maxPayloadSizeActionListName = value.maxPayloadSizeActionListName;
    }
  }

  // max_payload_size - computed: false, optional: true, required: false
  private _maxPayloadSize?: number; 
  public get maxPayloadSize() {
    return this.getNumberAttribute('max_payload_size');
  }
  public set maxPayloadSize(value: number) {
    this._maxPayloadSize = value;
  }
  public resetMaxPayloadSize() {
    this._maxPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeInput() {
    return this._maxPayloadSize;
  }

  // max_payload_size_action - computed: false, optional: true, required: false
  private _maxPayloadSizeAction?: string; 
  public get maxPayloadSizeAction() {
    return this.getStringAttribute('max_payload_size_action');
  }
  public set maxPayloadSizeAction(value: string) {
    this._maxPayloadSizeAction = value;
  }
  public resetMaxPayloadSizeAction() {
    this._maxPayloadSizeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeActionInput() {
    return this._maxPayloadSizeAction;
  }

  // max_payload_size_action_list_name - computed: false, optional: true, required: false
  private _maxPayloadSizeActionListName?: string; 
  public get maxPayloadSizeActionListName() {
    return this.getStringAttribute('max_payload_size_action_list_name');
  }
  public set maxPayloadSizeActionListName(value: string) {
    this._maxPayloadSizeActionListName = value;
  }
  public resetMaxPayloadSizeActionListName() {
    this._maxPayloadSizeActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeActionListNameInput() {
    return this._maxPayloadSizeActionListName;
  }
}
export interface DdosZoneSrcPortTemplateUdpMinPayloadSizeCfg {
  /**
  * Minimum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#min_payload_size DdosZoneSrcPortTemplateUdp#min_payload_size}
  */
  readonly minPayloadSize?: number;
  /**
  * 'drop': Drop packets for min-payload-size (Default); 'blacklist-src': Blacklist-src for min-payload-size; 'ignore': Do nothing for min-payload-size exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#min_payload_size_action DdosZoneSrcPortTemplateUdp#min_payload_size_action}
  */
  readonly minPayloadSizeAction?: string;
  /**
  * Configure action-list to take for min-payload-size exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#min_payload_size_action_list_name DdosZoneSrcPortTemplateUdp#min_payload_size_action_list_name}
  */
  readonly minPayloadSizeActionListName?: string;
}

export function ddosZoneSrcPortTemplateUdpMinPayloadSizeCfgToTerraform(struct?: DdosZoneSrcPortTemplateUdpMinPayloadSizeCfgOutputReference | DdosZoneSrcPortTemplateUdpMinPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_payload_size: cdktf.numberToTerraform(struct!.minPayloadSize),
    min_payload_size_action: cdktf.stringToTerraform(struct!.minPayloadSizeAction),
    min_payload_size_action_list_name: cdktf.stringToTerraform(struct!.minPayloadSizeActionListName),
  }
}


export function ddosZoneSrcPortTemplateUdpMinPayloadSizeCfgToHclTerraform(struct?: DdosZoneSrcPortTemplateUdpMinPayloadSizeCfgOutputReference | DdosZoneSrcPortTemplateUdpMinPayloadSizeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.minPayloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_payload_size_action: {
      value: cdktf.stringToHclTerraform(struct!.minPayloadSizeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_payload_size_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.minPayloadSizeActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneSrcPortTemplateUdpMinPayloadSizeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneSrcPortTemplateUdpMinPayloadSizeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPayloadSize = this._minPayloadSize;
    }
    if (this._minPayloadSizeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPayloadSizeAction = this._minPayloadSizeAction;
    }
    if (this._minPayloadSizeActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPayloadSizeActionListName = this._minPayloadSizeActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneSrcPortTemplateUdpMinPayloadSizeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minPayloadSize = undefined;
      this._minPayloadSizeAction = undefined;
      this._minPayloadSizeActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minPayloadSize = value.minPayloadSize;
      this._minPayloadSizeAction = value.minPayloadSizeAction;
      this._minPayloadSizeActionListName = value.minPayloadSizeActionListName;
    }
  }

  // min_payload_size - computed: false, optional: true, required: false
  private _minPayloadSize?: number; 
  public get minPayloadSize() {
    return this.getNumberAttribute('min_payload_size');
  }
  public set minPayloadSize(value: number) {
    this._minPayloadSize = value;
  }
  public resetMinPayloadSize() {
    this._minPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeInput() {
    return this._minPayloadSize;
  }

  // min_payload_size_action - computed: false, optional: true, required: false
  private _minPayloadSizeAction?: string; 
  public get minPayloadSizeAction() {
    return this.getStringAttribute('min_payload_size_action');
  }
  public set minPayloadSizeAction(value: string) {
    this._minPayloadSizeAction = value;
  }
  public resetMinPayloadSizeAction() {
    this._minPayloadSizeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeActionInput() {
    return this._minPayloadSizeAction;
  }

  // min_payload_size_action_list_name - computed: false, optional: true, required: false
  private _minPayloadSizeActionListName?: string; 
  public get minPayloadSizeActionListName() {
    return this.getStringAttribute('min_payload_size_action_list_name');
  }
  public set minPayloadSizeActionListName(value: string) {
    this._minPayloadSizeActionListName = value;
  }
  public resetMinPayloadSizeActionListName() {
    this._minPayloadSizeActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeActionListNameInput() {
    return this._minPayloadSizeActionListName;
  }
}
export interface DdosZoneSrcPortTemplateUdpNtpMonlistCfg {
  /**
  * Take action for ntp monlist request/response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#ntp_monlist DdosZoneSrcPortTemplateUdp#ntp_monlist}
  */
  readonly ntpMonlist?: number;
  /**
  * 'drop': Drop packets for ntp-monlist (Default); 'blacklist-src': Blacklist-src for ntp-monlist; 'ignore': Ignore ntp-monlist;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#ntp_monlist_action DdosZoneSrcPortTemplateUdp#ntp_monlist_action}
  */
  readonly ntpMonlistAction?: string;
  /**
  * Configure action-list to take for ntp-monlist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#ntp_monlist_action_list_name DdosZoneSrcPortTemplateUdp#ntp_monlist_action_list_name}
  */
  readonly ntpMonlistActionListName?: string;
}

export function ddosZoneSrcPortTemplateUdpNtpMonlistCfgToTerraform(struct?: DdosZoneSrcPortTemplateUdpNtpMonlistCfgOutputReference | DdosZoneSrcPortTemplateUdpNtpMonlistCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp_monlist: cdktf.numberToTerraform(struct!.ntpMonlist),
    ntp_monlist_action: cdktf.stringToTerraform(struct!.ntpMonlistAction),
    ntp_monlist_action_list_name: cdktf.stringToTerraform(struct!.ntpMonlistActionListName),
  }
}


export function ddosZoneSrcPortTemplateUdpNtpMonlistCfgToHclTerraform(struct?: DdosZoneSrcPortTemplateUdpNtpMonlistCfgOutputReference | DdosZoneSrcPortTemplateUdpNtpMonlistCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp_monlist: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_action: {
      value: cdktf.stringToHclTerraform(struct!.ntpMonlistAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_monlist_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.ntpMonlistActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneSrcPortTemplateUdpNtpMonlistCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneSrcPortTemplateUdpNtpMonlistCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntpMonlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlist = this._ntpMonlist;
    }
    if (this._ntpMonlistAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistAction = this._ntpMonlistAction;
    }
    if (this._ntpMonlistActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistActionListName = this._ntpMonlistActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneSrcPortTemplateUdpNtpMonlistCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ntpMonlist = undefined;
      this._ntpMonlistAction = undefined;
      this._ntpMonlistActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ntpMonlist = value.ntpMonlist;
      this._ntpMonlistAction = value.ntpMonlistAction;
      this._ntpMonlistActionListName = value.ntpMonlistActionListName;
    }
  }

  // ntp_monlist - computed: false, optional: true, required: false
  private _ntpMonlist?: number; 
  public get ntpMonlist() {
    return this.getNumberAttribute('ntp_monlist');
  }
  public set ntpMonlist(value: number) {
    this._ntpMonlist = value;
  }
  public resetNtpMonlist() {
    this._ntpMonlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistInput() {
    return this._ntpMonlist;
  }

  // ntp_monlist_action - computed: false, optional: true, required: false
  private _ntpMonlistAction?: string; 
  public get ntpMonlistAction() {
    return this.getStringAttribute('ntp_monlist_action');
  }
  public set ntpMonlistAction(value: string) {
    this._ntpMonlistAction = value;
  }
  public resetNtpMonlistAction() {
    this._ntpMonlistAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistActionInput() {
    return this._ntpMonlistAction;
  }

  // ntp_monlist_action_list_name - computed: false, optional: true, required: false
  private _ntpMonlistActionListName?: string; 
  public get ntpMonlistActionListName() {
    return this.getStringAttribute('ntp_monlist_action_list_name');
  }
  public set ntpMonlistActionListName(value: string) {
    this._ntpMonlistActionListName = value;
  }
  public resetNtpMonlistActionListName() {
    this._ntpMonlistActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistActionListNameInput() {
    return this._ntpMonlistActionListName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp thunder_ddos_zone_src_port_template_udp}
*/
export class DdosZoneSrcPortTemplateUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_src_port_template_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneSrcPortTemplateUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneSrcPortTemplateUdp to import
  * @param importFromId The id of the existing DdosZoneSrcPortTemplateUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneSrcPortTemplateUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_src_port_template_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp thunder_ddos_zone_src_port_template_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneSrcPortTemplateUdpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneSrcPortTemplateUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_src_port_template_udp',
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
    this._filterMatchType = config.filterMatchType;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._filterList.internalValue = config.filterList;
    this._maxPayloadSizeCfg.internalValue = config.maxPayloadSizeCfg;
    this._minPayloadSizeCfg.internalValue = config.minPayloadSizeCfg;
    this._ntpMonlistCfg.internalValue = config.ntpMonlistCfg;
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

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DdosZoneSrcPortTemplateUdpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosZoneSrcPortTemplateUdpFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // max_payload_size_cfg - computed: false, optional: true, required: false
  private _maxPayloadSizeCfg = new DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfgOutputReference(this, "max_payload_size_cfg");
  public get maxPayloadSizeCfg() {
    return this._maxPayloadSizeCfg;
  }
  public putMaxPayloadSizeCfg(value: DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfg) {
    this._maxPayloadSizeCfg.internalValue = value;
  }
  public resetMaxPayloadSizeCfg() {
    this._maxPayloadSizeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeCfgInput() {
    return this._maxPayloadSizeCfg.internalValue;
  }

  // min_payload_size_cfg - computed: false, optional: true, required: false
  private _minPayloadSizeCfg = new DdosZoneSrcPortTemplateUdpMinPayloadSizeCfgOutputReference(this, "min_payload_size_cfg");
  public get minPayloadSizeCfg() {
    return this._minPayloadSizeCfg;
  }
  public putMinPayloadSizeCfg(value: DdosZoneSrcPortTemplateUdpMinPayloadSizeCfg) {
    this._minPayloadSizeCfg.internalValue = value;
  }
  public resetMinPayloadSizeCfg() {
    this._minPayloadSizeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeCfgInput() {
    return this._minPayloadSizeCfg.internalValue;
  }

  // ntp_monlist_cfg - computed: false, optional: true, required: false
  private _ntpMonlistCfg = new DdosZoneSrcPortTemplateUdpNtpMonlistCfgOutputReference(this, "ntp_monlist_cfg");
  public get ntpMonlistCfg() {
    return this._ntpMonlistCfg;
  }
  public putNtpMonlistCfg(value: DdosZoneSrcPortTemplateUdpNtpMonlistCfg) {
    this._ntpMonlistCfg.internalValue = value;
  }
  public resetNtpMonlistCfg() {
    this._ntpMonlistCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistCfgInput() {
    return this._ntpMonlistCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_match_type: cdktf.stringToTerraform(this._filterMatchType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_list: cdktf.listMapper(ddosZoneSrcPortTemplateUdpFilterListStructToTerraform, true)(this._filterList.internalValue),
      max_payload_size_cfg: ddosZoneSrcPortTemplateUdpMaxPayloadSizeCfgToTerraform(this._maxPayloadSizeCfg.internalValue),
      min_payload_size_cfg: ddosZoneSrcPortTemplateUdpMinPayloadSizeCfgToTerraform(this._minPayloadSizeCfg.internalValue),
      ntp_monlist_cfg: ddosZoneSrcPortTemplateUdpNtpMonlistCfgToTerraform(this._ntpMonlistCfg.internalValue),
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
      filter_list: {
        value: cdktf.listMapperHcl(ddosZoneSrcPortTemplateUdpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneSrcPortTemplateUdpFilterListStructList",
      },
      max_payload_size_cfg: {
        value: ddosZoneSrcPortTemplateUdpMaxPayloadSizeCfgToHclTerraform(this._maxPayloadSizeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneSrcPortTemplateUdpMaxPayloadSizeCfgList",
      },
      min_payload_size_cfg: {
        value: ddosZoneSrcPortTemplateUdpMinPayloadSizeCfgToHclTerraform(this._minPayloadSizeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneSrcPortTemplateUdpMinPayloadSizeCfgList",
      },
      ntp_monlist_cfg: {
        value: ddosZoneSrcPortTemplateUdpNtpMonlistCfgToHclTerraform(this._ntpMonlistCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneSrcPortTemplateUdpNtpMonlistCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
