// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneSrcPortTemplateUdpFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#byte_offset_filter DdosZoneSrcPortTemplateUdpFilter#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#id DdosZoneSrcPortTemplateUdpFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#name DdosZoneSrcPortTemplateUdpFilter#name}
  */
  readonly name: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#udp_filter_action DdosZoneSrcPortTemplateUdpFilter#udp_filter_action}
  */
  readonly udpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#udp_filter_action_list_name DdosZoneSrcPortTemplateUdpFilter#udp_filter_action_list_name}
  */
  readonly udpFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#udp_filter_inverse_match DdosZoneSrcPortTemplateUdpFilter#udp_filter_inverse_match}
  */
  readonly udpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#udp_filter_name DdosZoneSrcPortTemplateUdpFilter#udp_filter_name}
  */
  readonly udpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#udp_filter_regex DdosZoneSrcPortTemplateUdpFilter#udp_filter_regex}
  */
  readonly udpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#udp_filter_seq DdosZoneSrcPortTemplateUdpFilter#udp_filter_seq}
  */
  readonly udpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#user_tag DdosZoneSrcPortTemplateUdpFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#uuid DdosZoneSrcPortTemplateUdpFilter#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter thunder_ddos_zone_src_port_template_udp_filter}
*/
export class DdosZoneSrcPortTemplateUdpFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_src_port_template_udp_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneSrcPortTemplateUdpFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneSrcPortTemplateUdpFilter to import
  * @param importFromId The id of the existing DdosZoneSrcPortTemplateUdpFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneSrcPortTemplateUdpFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_src_port_template_udp_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_udp_filter thunder_ddos_zone_src_port_template_udp_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneSrcPortTemplateUdpFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneSrcPortTemplateUdpFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_src_port_template_udp_filter',
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
    this._udpFilterAction = config.udpFilterAction;
    this._udpFilterActionListName = config.udpFilterActionListName;
    this._udpFilterInverseMatch = config.udpFilterInverseMatch;
    this._udpFilterName = config.udpFilterName;
    this._udpFilterRegex = config.udpFilterRegex;
    this._udpFilterSeq = config.udpFilterSeq;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byte_offset_filter: cdktf.stringToTerraform(this._byteOffsetFilter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      udp_filter_action: cdktf.stringToTerraform(this._udpFilterAction),
      udp_filter_action_list_name: cdktf.stringToTerraform(this._udpFilterActionListName),
      udp_filter_inverse_match: cdktf.numberToTerraform(this._udpFilterInverseMatch),
      udp_filter_name: cdktf.stringToTerraform(this._udpFilterName),
      udp_filter_regex: cdktf.stringToTerraform(this._udpFilterRegex),
      udp_filter_seq: cdktf.numberToTerraform(this._udpFilterSeq),
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
      udp_filter_action: {
        value: cdktf.stringToHclTerraform(this._udpFilterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_filter_action_list_name: {
        value: cdktf.stringToHclTerraform(this._udpFilterActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_filter_inverse_match: {
        value: cdktf.numberToHclTerraform(this._udpFilterInverseMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_filter_name: {
        value: cdktf.stringToHclTerraform(this._udpFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_filter_regex: {
        value: cdktf.stringToHclTerraform(this._udpFilterRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_filter_seq: {
        value: cdktf.numberToHclTerraform(this._udpFilterSeq),
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
