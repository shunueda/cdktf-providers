// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneSrcPortTemplateTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'default': Stop matching on drop/blacklist action; 'stop-on-first-match': Stop matching on first match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#filter_match_type DdosZoneSrcPortTemplateTcp#filter_match_type}
  */
  readonly filterMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#id DdosZoneSrcPortTemplateTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#name DdosZoneSrcPortTemplateTcp#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#user_tag DdosZoneSrcPortTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#uuid DdosZoneSrcPortTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#filter_list DdosZoneSrcPortTemplateTcp#filter_list}
  */
  readonly filterList?: DdosZoneSrcPortTemplateTcpFilterListStruct[] | cdktf.IResolvable;
}
export interface DdosZoneSrcPortTemplateTcpFilterListStruct {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#byte_offset_filter DdosZoneSrcPortTemplateTcp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#tcp_filter_action DdosZoneSrcPortTemplateTcp#tcp_filter_action}
  */
  readonly tcpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#tcp_filter_action_list_name DdosZoneSrcPortTemplateTcp#tcp_filter_action_list_name}
  */
  readonly tcpFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#tcp_filter_inverse_match DdosZoneSrcPortTemplateTcp#tcp_filter_inverse_match}
  */
  readonly tcpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#tcp_filter_name DdosZoneSrcPortTemplateTcp#tcp_filter_name}
  */
  readonly tcpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#tcp_filter_regex DdosZoneSrcPortTemplateTcp#tcp_filter_regex}
  */
  readonly tcpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#tcp_filter_seq DdosZoneSrcPortTemplateTcp#tcp_filter_seq}
  */
  readonly tcpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#user_tag DdosZoneSrcPortTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#uuid DdosZoneSrcPortTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneSrcPortTemplateTcpFilterListStructToTerraform(struct?: DdosZoneSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    tcp_filter_action: cdktf.stringToTerraform(struct!.tcpFilterAction),
    tcp_filter_action_list_name: cdktf.stringToTerraform(struct!.tcpFilterActionListName),
    tcp_filter_inverse_match: cdktf.numberToTerraform(struct!.tcpFilterInverseMatch),
    tcp_filter_name: cdktf.stringToTerraform(struct!.tcpFilterName),
    tcp_filter_regex: cdktf.stringToTerraform(struct!.tcpFilterRegex),
    tcp_filter_seq: cdktf.numberToTerraform(struct!.tcpFilterSeq),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneSrcPortTemplateTcpFilterListStructToHclTerraform(struct?: DdosZoneSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable): any {
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
    tcp_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterSeq),
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

export class DdosZoneSrcPortTemplateTcpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteOffsetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOffsetFilter = this._byteOffsetFilter;
    }
    if (this._tcpFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterAction = this._tcpFilterAction;
    }
    if (this._tcpFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterActionListName = this._tcpFilterActionListName;
    }
    if (this._tcpFilterInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterInverseMatch = this._tcpFilterInverseMatch;
    }
    if (this._tcpFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterName = this._tcpFilterName;
    }
    if (this._tcpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterRegex = this._tcpFilterRegex;
    }
    if (this._tcpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterSeq = this._tcpFilterSeq;
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

  public set internalValue(value: DdosZoneSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._tcpFilterAction = undefined;
      this._tcpFilterActionListName = undefined;
      this._tcpFilterInverseMatch = undefined;
      this._tcpFilterName = undefined;
      this._tcpFilterRegex = undefined;
      this._tcpFilterSeq = undefined;
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
      this._tcpFilterAction = value.tcpFilterAction;
      this._tcpFilterActionListName = value.tcpFilterActionListName;
      this._tcpFilterInverseMatch = value.tcpFilterInverseMatch;
      this._tcpFilterName = value.tcpFilterName;
      this._tcpFilterRegex = value.tcpFilterRegex;
      this._tcpFilterSeq = value.tcpFilterSeq;
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

  // tcp_filter_action - computed: false, optional: true, required: false
  private _tcpFilterAction?: string; 
  public get tcpFilterAction() {
    return this.getStringAttribute('tcp_filter_action');
  }
  public set tcpFilterAction(value: string) {
    this._tcpFilterAction = value;
  }
  public resetTcpFilterAction() {
    this._tcpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionInput() {
    return this._tcpFilterAction;
  }

  // tcp_filter_action_list_name - computed: false, optional: true, required: false
  private _tcpFilterActionListName?: string; 
  public get tcpFilterActionListName() {
    return this.getStringAttribute('tcp_filter_action_list_name');
  }
  public set tcpFilterActionListName(value: string) {
    this._tcpFilterActionListName = value;
  }
  public resetTcpFilterActionListName() {
    this._tcpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionListNameInput() {
    return this._tcpFilterActionListName;
  }

  // tcp_filter_inverse_match - computed: false, optional: true, required: false
  private _tcpFilterInverseMatch?: number; 
  public get tcpFilterInverseMatch() {
    return this.getNumberAttribute('tcp_filter_inverse_match');
  }
  public set tcpFilterInverseMatch(value: number) {
    this._tcpFilterInverseMatch = value;
  }
  public resetTcpFilterInverseMatch() {
    this._tcpFilterInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterInverseMatchInput() {
    return this._tcpFilterInverseMatch;
  }

  // tcp_filter_name - computed: false, optional: false, required: true
  private _tcpFilterName?: string; 
  public get tcpFilterName() {
    return this.getStringAttribute('tcp_filter_name');
  }
  public set tcpFilterName(value: string) {
    this._tcpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterNameInput() {
    return this._tcpFilterName;
  }

  // tcp_filter_regex - computed: false, optional: true, required: false
  private _tcpFilterRegex?: string; 
  public get tcpFilterRegex() {
    return this.getStringAttribute('tcp_filter_regex');
  }
  public set tcpFilterRegex(value: string) {
    this._tcpFilterRegex = value;
  }
  public resetTcpFilterRegex() {
    this._tcpFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterRegexInput() {
    return this._tcpFilterRegex;
  }

  // tcp_filter_seq - computed: false, optional: true, required: false
  private _tcpFilterSeq?: number; 
  public get tcpFilterSeq() {
    return this.getNumberAttribute('tcp_filter_seq');
  }
  public set tcpFilterSeq(value: number) {
    this._tcpFilterSeq = value;
  }
  public resetTcpFilterSeq() {
    this._tcpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterSeqInput() {
    return this._tcpFilterSeq;
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

export class DdosZoneSrcPortTemplateTcpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneSrcPortTemplateTcpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneSrcPortTemplateTcpFilterListStructOutputReference {
    return new DdosZoneSrcPortTemplateTcpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp thunder_ddos_zone_src_port_template_tcp}
*/
export class DdosZoneSrcPortTemplateTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_src_port_template_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneSrcPortTemplateTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneSrcPortTemplateTcp to import
  * @param importFromId The id of the existing DdosZoneSrcPortTemplateTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneSrcPortTemplateTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_src_port_template_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp thunder_ddos_zone_src_port_template_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneSrcPortTemplateTcpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneSrcPortTemplateTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_src_port_template_tcp',
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
  private _filterList = new DdosZoneSrcPortTemplateTcpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosZoneSrcPortTemplateTcpFilterListStruct[] | cdktf.IResolvable) {
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
      filter_match_type: cdktf.stringToTerraform(this._filterMatchType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_list: cdktf.listMapper(ddosZoneSrcPortTemplateTcpFilterListStructToTerraform, true)(this._filterList.internalValue),
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
        value: cdktf.listMapperHcl(ddosZoneSrcPortTemplateTcpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneSrcPortTemplateTcpFilterListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
