// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateIpProtoConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'default': Stop matching on drop/blacklist action; 'stop-on-first-match': Stop matching on first match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#filter_match_type DdosZoneTemplateIpProto#filter_match_type}
  */
  readonly filterMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#id DdosZoneTemplateIpProto#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS Ip-proto Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#name DdosZoneTemplateIpProto#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#user_tag DdosZoneTemplateIpProto#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#uuid DdosZoneTemplateIpProto#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#filter_list DdosZoneTemplateIpProto#filter_list}
  */
  readonly filterList?: DdosZoneTemplateIpProtoFilterListStruct[] | cdktf.IResolvable;
}
export interface DdosZoneTemplateIpProtoFilterListStruct {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#byte_offset_filter DdosZoneTemplateIpProto#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#other_filter_action DdosZoneTemplateIpProto#other_filter_action}
  */
  readonly otherFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#other_filter_action_list_name DdosZoneTemplateIpProto#other_filter_action_list_name}
  */
  readonly otherFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#other_filter_inverse_match DdosZoneTemplateIpProto#other_filter_inverse_match}
  */
  readonly otherFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#other_filter_name DdosZoneTemplateIpProto#other_filter_name}
  */
  readonly otherFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#other_filter_regex DdosZoneTemplateIpProto#other_filter_regex}
  */
  readonly otherFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#other_filter_seq DdosZoneTemplateIpProto#other_filter_seq}
  */
  readonly otherFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#user_tag DdosZoneTemplateIpProto#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#uuid DdosZoneTemplateIpProto#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateIpProtoFilterListStructToTerraform(struct?: DdosZoneTemplateIpProtoFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    other_filter_action: cdktf.stringToTerraform(struct!.otherFilterAction),
    other_filter_action_list_name: cdktf.stringToTerraform(struct!.otherFilterActionListName),
    other_filter_inverse_match: cdktf.numberToTerraform(struct!.otherFilterInverseMatch),
    other_filter_name: cdktf.stringToTerraform(struct!.otherFilterName),
    other_filter_regex: cdktf.stringToTerraform(struct!.otherFilterRegex),
    other_filter_seq: cdktf.numberToTerraform(struct!.otherFilterSeq),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateIpProtoFilterListStructToHclTerraform(struct?: DdosZoneTemplateIpProtoFilterListStruct | cdktf.IResolvable): any {
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
    other_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.otherFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.otherFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_filter_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.otherFilterInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.otherFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.otherFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.otherFilterSeq),
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

export class DdosZoneTemplateIpProtoFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateIpProtoFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteOffsetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOffsetFilter = this._byteOffsetFilter;
    }
    if (this._otherFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFilterAction = this._otherFilterAction;
    }
    if (this._otherFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFilterActionListName = this._otherFilterActionListName;
    }
    if (this._otherFilterInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFilterInverseMatch = this._otherFilterInverseMatch;
    }
    if (this._otherFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFilterName = this._otherFilterName;
    }
    if (this._otherFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFilterRegex = this._otherFilterRegex;
    }
    if (this._otherFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFilterSeq = this._otherFilterSeq;
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

  public set internalValue(value: DdosZoneTemplateIpProtoFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._otherFilterAction = undefined;
      this._otherFilterActionListName = undefined;
      this._otherFilterInverseMatch = undefined;
      this._otherFilterName = undefined;
      this._otherFilterRegex = undefined;
      this._otherFilterSeq = undefined;
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
      this._otherFilterAction = value.otherFilterAction;
      this._otherFilterActionListName = value.otherFilterActionListName;
      this._otherFilterInverseMatch = value.otherFilterInverseMatch;
      this._otherFilterName = value.otherFilterName;
      this._otherFilterRegex = value.otherFilterRegex;
      this._otherFilterSeq = value.otherFilterSeq;
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

  // other_filter_action - computed: false, optional: true, required: false
  private _otherFilterAction?: string; 
  public get otherFilterAction() {
    return this.getStringAttribute('other_filter_action');
  }
  public set otherFilterAction(value: string) {
    this._otherFilterAction = value;
  }
  public resetOtherFilterAction() {
    this._otherFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterActionInput() {
    return this._otherFilterAction;
  }

  // other_filter_action_list_name - computed: false, optional: true, required: false
  private _otherFilterActionListName?: string; 
  public get otherFilterActionListName() {
    return this.getStringAttribute('other_filter_action_list_name');
  }
  public set otherFilterActionListName(value: string) {
    this._otherFilterActionListName = value;
  }
  public resetOtherFilterActionListName() {
    this._otherFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterActionListNameInput() {
    return this._otherFilterActionListName;
  }

  // other_filter_inverse_match - computed: false, optional: true, required: false
  private _otherFilterInverseMatch?: number; 
  public get otherFilterInverseMatch() {
    return this.getNumberAttribute('other_filter_inverse_match');
  }
  public set otherFilterInverseMatch(value: number) {
    this._otherFilterInverseMatch = value;
  }
  public resetOtherFilterInverseMatch() {
    this._otherFilterInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterInverseMatchInput() {
    return this._otherFilterInverseMatch;
  }

  // other_filter_name - computed: false, optional: false, required: true
  private _otherFilterName?: string; 
  public get otherFilterName() {
    return this.getStringAttribute('other_filter_name');
  }
  public set otherFilterName(value: string) {
    this._otherFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterNameInput() {
    return this._otherFilterName;
  }

  // other_filter_regex - computed: false, optional: true, required: false
  private _otherFilterRegex?: string; 
  public get otherFilterRegex() {
    return this.getStringAttribute('other_filter_regex');
  }
  public set otherFilterRegex(value: string) {
    this._otherFilterRegex = value;
  }
  public resetOtherFilterRegex() {
    this._otherFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterRegexInput() {
    return this._otherFilterRegex;
  }

  // other_filter_seq - computed: false, optional: true, required: false
  private _otherFilterSeq?: number; 
  public get otherFilterSeq() {
    return this.getNumberAttribute('other_filter_seq');
  }
  public set otherFilterSeq(value: number) {
    this._otherFilterSeq = value;
  }
  public resetOtherFilterSeq() {
    this._otherFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterSeqInput() {
    return this._otherFilterSeq;
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

export class DdosZoneTemplateIpProtoFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateIpProtoFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateIpProtoFilterListStructOutputReference {
    return new DdosZoneTemplateIpProtoFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto thunder_ddos_zone_template_ip_proto}
*/
export class DdosZoneTemplateIpProto extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_ip_proto";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateIpProto resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateIpProto to import
  * @param importFromId The id of the existing DdosZoneTemplateIpProto that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateIpProto to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_ip_proto", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto thunder_ddos_zone_template_ip_proto} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateIpProtoConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateIpProtoConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_ip_proto',
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
  private _filterList = new DdosZoneTemplateIpProtoFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosZoneTemplateIpProtoFilterListStruct[] | cdktf.IResolvable) {
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
      filter_list: cdktf.listMapper(ddosZoneTemplateIpProtoFilterListStructToTerraform, true)(this._filterList.internalValue),
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
        value: cdktf.listMapperHcl(ddosZoneTemplateIpProtoFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateIpProtoFilterListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
