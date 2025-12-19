// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSrcPortTemplateTcpFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter Expression using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#byte_offset_filter DdosSrcPortTemplateTcpFilter#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#id DdosSrcPortTemplateTcpFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#tcp_filter_action DdosSrcPortTemplateTcpFilter#tcp_filter_action}
  */
  readonly tcpFilterAction?: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#tcp_filter_regex DdosSrcPortTemplateTcpFilter#tcp_filter_regex}
  */
  readonly tcpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#tcp_filter_seq DdosSrcPortTemplateTcpFilter#tcp_filter_seq}
  */
  readonly tcpFilterSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#tcp_filter_unmatched DdosSrcPortTemplateTcpFilter#tcp_filter_unmatched}
  */
  readonly tcpFilterUnmatched?: number;
  /**
  * Tcp_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#tcp_name DdosSrcPortTemplateTcpFilter#tcp_name}
  */
  readonly tcpName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#user_tag DdosSrcPortTemplateTcpFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#uuid DdosSrcPortTemplateTcpFilter#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter thunder_ddos_src_port_template_tcp_filter}
*/
export class DdosSrcPortTemplateTcpFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_port_template_tcp_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSrcPortTemplateTcpFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSrcPortTemplateTcpFilter to import
  * @param importFromId The id of the existing DdosSrcPortTemplateTcpFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSrcPortTemplateTcpFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_port_template_tcp_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_tcp_filter thunder_ddos_src_port_template_tcp_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSrcPortTemplateTcpFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSrcPortTemplateTcpFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_port_template_tcp_filter',
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
    this._byteOffsetFilter = config.byteOffsetFilter;
    this._id = config.id;
    this._tcpFilterAction = config.tcpFilterAction;
    this._tcpFilterRegex = config.tcpFilterRegex;
    this._tcpFilterSeq = config.tcpFilterSeq;
    this._tcpFilterUnmatched = config.tcpFilterUnmatched;
    this._tcpName = config.tcpName;
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

  // tcp_filter_seq - computed: false, optional: false, required: true
  private _tcpFilterSeq?: number; 
  public get tcpFilterSeq() {
    return this.getNumberAttribute('tcp_filter_seq');
  }
  public set tcpFilterSeq(value: number) {
    this._tcpFilterSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterSeqInput() {
    return this._tcpFilterSeq;
  }

  // tcp_filter_unmatched - computed: false, optional: true, required: false
  private _tcpFilterUnmatched?: number; 
  public get tcpFilterUnmatched() {
    return this.getNumberAttribute('tcp_filter_unmatched');
  }
  public set tcpFilterUnmatched(value: number) {
    this._tcpFilterUnmatched = value;
  }
  public resetTcpFilterUnmatched() {
    this._tcpFilterUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterUnmatchedInput() {
    return this._tcpFilterUnmatched;
  }

  // tcp_name - computed: false, optional: false, required: true
  private _tcpName?: string; 
  public get tcpName() {
    return this.getStringAttribute('tcp_name');
  }
  public set tcpName(value: string) {
    this._tcpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNameInput() {
    return this._tcpName;
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
      tcp_filter_action: cdktf.stringToTerraform(this._tcpFilterAction),
      tcp_filter_regex: cdktf.stringToTerraform(this._tcpFilterRegex),
      tcp_filter_seq: cdktf.numberToTerraform(this._tcpFilterSeq),
      tcp_filter_unmatched: cdktf.numberToTerraform(this._tcpFilterUnmatched),
      tcp_name: cdktf.stringToTerraform(this._tcpName),
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
      tcp_filter_action: {
        value: cdktf.stringToHclTerraform(this._tcpFilterAction),
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
      tcp_filter_unmatched: {
        value: cdktf.numberToHclTerraform(this._tcpFilterUnmatched),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_name: {
        value: cdktf.stringToHclTerraform(this._tcpName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
