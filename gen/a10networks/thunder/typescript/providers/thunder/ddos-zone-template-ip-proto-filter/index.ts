// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateIpProtoFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#byte_offset_filter DdosZoneTemplateIpProtoFilter#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#id DdosZoneTemplateIpProtoFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#name DdosZoneTemplateIpProtoFilter#name}
  */
  readonly name: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#other_filter_action DdosZoneTemplateIpProtoFilter#other_filter_action}
  */
  readonly otherFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#other_filter_action_list_name DdosZoneTemplateIpProtoFilter#other_filter_action_list_name}
  */
  readonly otherFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#other_filter_inverse_match DdosZoneTemplateIpProtoFilter#other_filter_inverse_match}
  */
  readonly otherFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#other_filter_name DdosZoneTemplateIpProtoFilter#other_filter_name}
  */
  readonly otherFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#other_filter_regex DdosZoneTemplateIpProtoFilter#other_filter_regex}
  */
  readonly otherFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#other_filter_seq DdosZoneTemplateIpProtoFilter#other_filter_seq}
  */
  readonly otherFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#user_tag DdosZoneTemplateIpProtoFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#uuid DdosZoneTemplateIpProtoFilter#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter thunder_ddos_zone_template_ip_proto_filter}
*/
export class DdosZoneTemplateIpProtoFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_ip_proto_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateIpProtoFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateIpProtoFilter to import
  * @param importFromId The id of the existing DdosZoneTemplateIpProtoFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateIpProtoFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_ip_proto_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ip_proto_filter thunder_ddos_zone_template_ip_proto_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateIpProtoFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateIpProtoFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_ip_proto_filter',
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
    this._byteOffsetFilter = config.byteOffsetFilter;
    this._id = config.id;
    this._name = config.name;
    this._otherFilterAction = config.otherFilterAction;
    this._otherFilterActionListName = config.otherFilterActionListName;
    this._otherFilterInverseMatch = config.otherFilterInverseMatch;
    this._otherFilterName = config.otherFilterName;
    this._otherFilterRegex = config.otherFilterRegex;
    this._otherFilterSeq = config.otherFilterSeq;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byte_offset_filter: cdktf.stringToTerraform(this._byteOffsetFilter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      other_filter_action: cdktf.stringToTerraform(this._otherFilterAction),
      other_filter_action_list_name: cdktf.stringToTerraform(this._otherFilterActionListName),
      other_filter_inverse_match: cdktf.numberToTerraform(this._otherFilterInverseMatch),
      other_filter_name: cdktf.stringToTerraform(this._otherFilterName),
      other_filter_regex: cdktf.stringToTerraform(this._otherFilterRegex),
      other_filter_seq: cdktf.numberToTerraform(this._otherFilterSeq),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byte_offset_filter: {
        value: cdktf.stringToHclTerraform(this._byteOffsetFilter),
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
      other_filter_action: {
        value: cdktf.stringToHclTerraform(this._otherFilterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_filter_action_list_name: {
        value: cdktf.stringToHclTerraform(this._otherFilterActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_filter_inverse_match: {
        value: cdktf.numberToHclTerraform(this._otherFilterInverseMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      other_filter_name: {
        value: cdktf.stringToHclTerraform(this._otherFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_filter_regex: {
        value: cdktf.stringToHclTerraform(this._otherFilterRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_filter_seq: {
        value: cdktf.numberToHclTerraform(this._otherFilterSeq),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
