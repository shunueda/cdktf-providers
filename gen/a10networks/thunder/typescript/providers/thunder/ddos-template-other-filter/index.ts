// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateOtherFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter Expression using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#byte_offset_filter DdosTemplateOtherFilter#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#id DdosTemplateOtherFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#name DdosTemplateOtherFilter#name}
  */
  readonly name: string;
  /**
  * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#other_filter_action DdosTemplateOtherFilter#other_filter_action}
  */
  readonly otherFilterAction?: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#other_filter_regex DdosTemplateOtherFilter#other_filter_regex}
  */
  readonly otherFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#other_filter_seq DdosTemplateOtherFilter#other_filter_seq}
  */
  readonly otherFilterSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#other_filter_unmatched DdosTemplateOtherFilter#other_filter_unmatched}
  */
  readonly otherFilterUnmatched?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#user_tag DdosTemplateOtherFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#uuid DdosTemplateOtherFilter#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter thunder_ddos_template_other_filter}
*/
export class DdosTemplateOtherFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_other_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateOtherFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateOtherFilter to import
  * @param importFromId The id of the existing DdosTemplateOtherFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateOtherFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_other_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_other_filter thunder_ddos_template_other_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateOtherFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateOtherFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_other_filter',
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
    this._otherFilterRegex = config.otherFilterRegex;
    this._otherFilterSeq = config.otherFilterSeq;
    this._otherFilterUnmatched = config.otherFilterUnmatched;
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

  // other_filter_seq - computed: false, optional: false, required: true
  private _otherFilterSeq?: number; 
  public get otherFilterSeq() {
    return this.getNumberAttribute('other_filter_seq');
  }
  public set otherFilterSeq(value: number) {
    this._otherFilterSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterSeqInput() {
    return this._otherFilterSeq;
  }

  // other_filter_unmatched - computed: false, optional: true, required: false
  private _otherFilterUnmatched?: number; 
  public get otherFilterUnmatched() {
    return this.getNumberAttribute('other_filter_unmatched');
  }
  public set otherFilterUnmatched(value: number) {
    this._otherFilterUnmatched = value;
  }
  public resetOtherFilterUnmatched() {
    this._otherFilterUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFilterUnmatchedInput() {
    return this._otherFilterUnmatched;
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
      other_filter_regex: cdktf.stringToTerraform(this._otherFilterRegex),
      other_filter_seq: cdktf.numberToTerraform(this._otherFilterSeq),
      other_filter_unmatched: cdktf.numberToTerraform(this._otherFilterUnmatched),
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
      other_filter_unmatched: {
        value: cdktf.numberToHclTerraform(this._otherFilterUnmatched),
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
