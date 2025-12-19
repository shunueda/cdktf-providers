// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSrcPortTemplateUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Drop NTP monlist request/response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#drop_ntp_monlist DdosSrcPortTemplateUdp#drop_ntp_monlist}
  */
  readonly dropNtpMonlist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#id DdosSrcPortTemplateUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#max_payload_size DdosSrcPortTemplateUdp#max_payload_size}
  */
  readonly maxPayloadSize?: number;
  /**
  * Minimum UDP payload size for each single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#min_payload_size DdosSrcPortTemplateUdp#min_payload_size}
  */
  readonly minPayloadSize?: number;
  /**
  * DDOS UDP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#name DdosSrcPortTemplateUdp#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#user_tag DdosSrcPortTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#uuid DdosSrcPortTemplateUdp#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#filter_list DdosSrcPortTemplateUdp#filter_list}
  */
  readonly filterList?: DdosSrcPortTemplateUdpFilterListStruct[] | cdktf.IResolvable;
}
export interface DdosSrcPortTemplateUdpFilterListStruct {
  /**
  * Filter Expression using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#byte_offset_filter DdosSrcPortTemplateUdp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#udp_filter_action DdosSrcPortTemplateUdp#udp_filter_action}
  */
  readonly udpFilterAction?: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#udp_filter_regex DdosSrcPortTemplateUdp#udp_filter_regex}
  */
  readonly udpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#udp_filter_seq DdosSrcPortTemplateUdp#udp_filter_seq}
  */
  readonly udpFilterSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#udp_filter_unmatched DdosSrcPortTemplateUdp#udp_filter_unmatched}
  */
  readonly udpFilterUnmatched?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#user_tag DdosSrcPortTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#uuid DdosSrcPortTemplateUdp#uuid}
  */
  readonly uuid?: string;
}

export function ddosSrcPortTemplateUdpFilterListStructToTerraform(struct?: DdosSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    udp_filter_action: cdktf.stringToTerraform(struct!.udpFilterAction),
    udp_filter_regex: cdktf.stringToTerraform(struct!.udpFilterRegex),
    udp_filter_seq: cdktf.numberToTerraform(struct!.udpFilterSeq),
    udp_filter_unmatched: cdktf.numberToTerraform(struct!.udpFilterUnmatched),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosSrcPortTemplateUdpFilterListStructToHclTerraform(struct?: DdosSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable): any {
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
    udp_filter_unmatched: {
      value: cdktf.numberToHclTerraform(struct!.udpFilterUnmatched),
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

export class DdosSrcPortTemplateUdpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable | undefined {
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
    if (this._udpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterRegex = this._udpFilterRegex;
    }
    if (this._udpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterSeq = this._udpFilterSeq;
    }
    if (this._udpFilterUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFilterUnmatched = this._udpFilterUnmatched;
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

  public set internalValue(value: DdosSrcPortTemplateUdpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._udpFilterAction = undefined;
      this._udpFilterRegex = undefined;
      this._udpFilterSeq = undefined;
      this._udpFilterUnmatched = undefined;
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
      this._udpFilterRegex = value.udpFilterRegex;
      this._udpFilterSeq = value.udpFilterSeq;
      this._udpFilterUnmatched = value.udpFilterUnmatched;
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

  // udp_filter_seq - computed: false, optional: false, required: true
  private _udpFilterSeq?: number; 
  public get udpFilterSeq() {
    return this.getNumberAttribute('udp_filter_seq');
  }
  public set udpFilterSeq(value: number) {
    this._udpFilterSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterSeqInput() {
    return this._udpFilterSeq;
  }

  // udp_filter_unmatched - computed: false, optional: true, required: false
  private _udpFilterUnmatched?: number; 
  public get udpFilterUnmatched() {
    return this.getNumberAttribute('udp_filter_unmatched');
  }
  public set udpFilterUnmatched(value: number) {
    this._udpFilterUnmatched = value;
  }
  public resetUdpFilterUnmatched() {
    this._udpFilterUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFilterUnmatchedInput() {
    return this._udpFilterUnmatched;
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

export class DdosSrcPortTemplateUdpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosSrcPortTemplateUdpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosSrcPortTemplateUdpFilterListStructOutputReference {
    return new DdosSrcPortTemplateUdpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp thunder_ddos_src_port_template_udp}
*/
export class DdosSrcPortTemplateUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_port_template_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSrcPortTemplateUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSrcPortTemplateUdp to import
  * @param importFromId The id of the existing DdosSrcPortTemplateUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSrcPortTemplateUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_port_template_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_udp thunder_ddos_src_port_template_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSrcPortTemplateUdpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSrcPortTemplateUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_port_template_udp',
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
    this._dropNtpMonlist = config.dropNtpMonlist;
    this._id = config.id;
    this._maxPayloadSize = config.maxPayloadSize;
    this._minPayloadSize = config.minPayloadSize;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._filterList.internalValue = config.filterList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drop_ntp_monlist - computed: false, optional: true, required: false
  private _dropNtpMonlist?: number; 
  public get dropNtpMonlist() {
    return this.getNumberAttribute('drop_ntp_monlist');
  }
  public set dropNtpMonlist(value: number) {
    this._dropNtpMonlist = value;
  }
  public resetDropNtpMonlist() {
    this._dropNtpMonlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropNtpMonlistInput() {
    return this._dropNtpMonlist;
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
  private _filterList = new DdosSrcPortTemplateUdpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosSrcPortTemplateUdpFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drop_ntp_monlist: cdktf.numberToTerraform(this._dropNtpMonlist),
      id: cdktf.stringToTerraform(this._id),
      max_payload_size: cdktf.numberToTerraform(this._maxPayloadSize),
      min_payload_size: cdktf.numberToTerraform(this._minPayloadSize),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_list: cdktf.listMapper(ddosSrcPortTemplateUdpFilterListStructToTerraform, true)(this._filterList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drop_ntp_monlist: {
        value: cdktf.numberToHclTerraform(this._dropNtpMonlist),
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
      max_payload_size: {
        value: cdktf.numberToHclTerraform(this._maxPayloadSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_payload_size: {
        value: cdktf.numberToHclTerraform(this._minPayloadSize),
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
        value: cdktf.listMapperHcl(ddosSrcPortTemplateUdpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcPortTemplateUdpFilterListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
