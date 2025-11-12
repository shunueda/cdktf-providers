// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneSrcPortTemplateTcpFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#byte_offset_filter DdosZoneSrcPortTemplateTcpFilter#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#id DdosZoneSrcPortTemplateTcpFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#name DdosZoneSrcPortTemplateTcpFilter#name}
  */
  readonly name: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#tcp_filter_action DdosZoneSrcPortTemplateTcpFilter#tcp_filter_action}
  */
  readonly tcpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#tcp_filter_action_list_name DdosZoneSrcPortTemplateTcpFilter#tcp_filter_action_list_name}
  */
  readonly tcpFilterActionListName?: string;
  /**
  * Inverse the result of the matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#tcp_filter_inverse_match DdosZoneSrcPortTemplateTcpFilter#tcp_filter_inverse_match}
  */
  readonly tcpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#tcp_filter_name DdosZoneSrcPortTemplateTcpFilter#tcp_filter_name}
  */
  readonly tcpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#tcp_filter_regex DdosZoneSrcPortTemplateTcpFilter#tcp_filter_regex}
  */
  readonly tcpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#tcp_filter_seq DdosZoneSrcPortTemplateTcpFilter#tcp_filter_seq}
  */
  readonly tcpFilterSeq?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#user_tag DdosZoneSrcPortTemplateTcpFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#uuid DdosZoneSrcPortTemplateTcpFilter#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter thunder_ddos_zone_src_port_template_tcp_filter}
*/
export class DdosZoneSrcPortTemplateTcpFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_src_port_template_tcp_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneSrcPortTemplateTcpFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneSrcPortTemplateTcpFilter to import
  * @param importFromId The id of the existing DdosZoneSrcPortTemplateTcpFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneSrcPortTemplateTcpFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_src_port_template_tcp_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_tcp_filter thunder_ddos_zone_src_port_template_tcp_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneSrcPortTemplateTcpFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneSrcPortTemplateTcpFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_src_port_template_tcp_filter',
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
    this._byteOffsetFilter = config.byteOffsetFilter;
    this._id = config.id;
    this._name = config.name;
    this._tcpFilterAction = config.tcpFilterAction;
    this._tcpFilterActionListName = config.tcpFilterActionListName;
    this._tcpFilterInverseMatch = config.tcpFilterInverseMatch;
    this._tcpFilterName = config.tcpFilterName;
    this._tcpFilterRegex = config.tcpFilterRegex;
    this._tcpFilterSeq = config.tcpFilterSeq;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byte_offset_filter: cdktf.stringToTerraform(this._byteOffsetFilter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tcp_filter_action: cdktf.stringToTerraform(this._tcpFilterAction),
      tcp_filter_action_list_name: cdktf.stringToTerraform(this._tcpFilterActionListName),
      tcp_filter_inverse_match: cdktf.numberToTerraform(this._tcpFilterInverseMatch),
      tcp_filter_name: cdktf.stringToTerraform(this._tcpFilterName),
      tcp_filter_regex: cdktf.stringToTerraform(this._tcpFilterRegex),
      tcp_filter_seq: cdktf.numberToTerraform(this._tcpFilterSeq),
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
      tcp_filter_action: {
        value: cdktf.stringToHclTerraform(this._tcpFilterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_filter_action_list_name: {
        value: cdktf.stringToHclTerraform(this._tcpFilterActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_filter_inverse_match: {
        value: cdktf.numberToHclTerraform(this._tcpFilterInverseMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_filter_name: {
        value: cdktf.stringToHclTerraform(this._tcpFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_filter_regex: {
        value: cdktf.stringToHclTerraform(this._tcpFilterRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_filter_seq: {
        value: cdktf.numberToHclTerraform(this._tcpFilterSeq),
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
