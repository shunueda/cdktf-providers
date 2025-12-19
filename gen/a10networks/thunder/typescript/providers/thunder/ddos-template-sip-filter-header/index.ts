// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateSipFilterHeaderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#id DdosTemplateSipFilterHeader#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Also blacklist the source when action is taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#sip_filter_header_blacklist DdosTemplateSipFilterHeader#sip_filter_header_blacklist}
  */
  readonly sipFilterHeaderBlacklist?: number;
  /**
  * Take no action and continue processing the next filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#sip_filter_header_count_only DdosTemplateSipFilterHeader#sip_filter_header_count_only}
  */
  readonly sipFilterHeaderCountOnly?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#sip_filter_header_regex DdosTemplateSipFilterHeader#sip_filter_header_regex}
  */
  readonly sipFilterHeaderRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#sip_filter_header_seq DdosTemplateSipFilterHeader#sip_filter_header_seq}
  */
  readonly sipFilterHeaderSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#sip_filter_header_unmatched DdosTemplateSipFilterHeader#sip_filter_header_unmatched}
  */
  readonly sipFilterHeaderUnmatched?: number;
  /**
  * Whitelist the source after filter passes, packets are dropped until then
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#sip_filter_header_whitelist DdosTemplateSipFilterHeader#sip_filter_header_whitelist}
  */
  readonly sipFilterHeaderWhitelist?: number;
  /**
  * SipTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#sip_tmpl_name DdosTemplateSipFilterHeader#sip_tmpl_name}
  */
  readonly sipTmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#user_tag DdosTemplateSipFilterHeader#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#uuid DdosTemplateSipFilterHeader#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header thunder_ddos_template_sip_filter_header}
*/
export class DdosTemplateSipFilterHeader extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_sip_filter_header";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateSipFilterHeader resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateSipFilterHeader to import
  * @param importFromId The id of the existing DdosTemplateSipFilterHeader that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateSipFilterHeader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_sip_filter_header", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_sip_filter_header thunder_ddos_template_sip_filter_header} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateSipFilterHeaderConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateSipFilterHeaderConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_sip_filter_header',
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
    this._id = config.id;
    this._sipFilterHeaderBlacklist = config.sipFilterHeaderBlacklist;
    this._sipFilterHeaderCountOnly = config.sipFilterHeaderCountOnly;
    this._sipFilterHeaderRegex = config.sipFilterHeaderRegex;
    this._sipFilterHeaderSeq = config.sipFilterHeaderSeq;
    this._sipFilterHeaderUnmatched = config.sipFilterHeaderUnmatched;
    this._sipFilterHeaderWhitelist = config.sipFilterHeaderWhitelist;
    this._sipTmplName = config.sipTmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sip_filter_header_blacklist - computed: false, optional: true, required: false
  private _sipFilterHeaderBlacklist?: number; 
  public get sipFilterHeaderBlacklist() {
    return this.getNumberAttribute('sip_filter_header_blacklist');
  }
  public set sipFilterHeaderBlacklist(value: number) {
    this._sipFilterHeaderBlacklist = value;
  }
  public resetSipFilterHeaderBlacklist() {
    this._sipFilterHeaderBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderBlacklistInput() {
    return this._sipFilterHeaderBlacklist;
  }

  // sip_filter_header_count_only - computed: false, optional: true, required: false
  private _sipFilterHeaderCountOnly?: number; 
  public get sipFilterHeaderCountOnly() {
    return this.getNumberAttribute('sip_filter_header_count_only');
  }
  public set sipFilterHeaderCountOnly(value: number) {
    this._sipFilterHeaderCountOnly = value;
  }
  public resetSipFilterHeaderCountOnly() {
    this._sipFilterHeaderCountOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderCountOnlyInput() {
    return this._sipFilterHeaderCountOnly;
  }

  // sip_filter_header_regex - computed: false, optional: true, required: false
  private _sipFilterHeaderRegex?: string; 
  public get sipFilterHeaderRegex() {
    return this.getStringAttribute('sip_filter_header_regex');
  }
  public set sipFilterHeaderRegex(value: string) {
    this._sipFilterHeaderRegex = value;
  }
  public resetSipFilterHeaderRegex() {
    this._sipFilterHeaderRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderRegexInput() {
    return this._sipFilterHeaderRegex;
  }

  // sip_filter_header_seq - computed: false, optional: false, required: true
  private _sipFilterHeaderSeq?: number; 
  public get sipFilterHeaderSeq() {
    return this.getNumberAttribute('sip_filter_header_seq');
  }
  public set sipFilterHeaderSeq(value: number) {
    this._sipFilterHeaderSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderSeqInput() {
    return this._sipFilterHeaderSeq;
  }

  // sip_filter_header_unmatched - computed: false, optional: true, required: false
  private _sipFilterHeaderUnmatched?: number; 
  public get sipFilterHeaderUnmatched() {
    return this.getNumberAttribute('sip_filter_header_unmatched');
  }
  public set sipFilterHeaderUnmatched(value: number) {
    this._sipFilterHeaderUnmatched = value;
  }
  public resetSipFilterHeaderUnmatched() {
    this._sipFilterHeaderUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderUnmatchedInput() {
    return this._sipFilterHeaderUnmatched;
  }

  // sip_filter_header_whitelist - computed: false, optional: true, required: false
  private _sipFilterHeaderWhitelist?: number; 
  public get sipFilterHeaderWhitelist() {
    return this.getNumberAttribute('sip_filter_header_whitelist');
  }
  public set sipFilterHeaderWhitelist(value: number) {
    this._sipFilterHeaderWhitelist = value;
  }
  public resetSipFilterHeaderWhitelist() {
    this._sipFilterHeaderWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderWhitelistInput() {
    return this._sipFilterHeaderWhitelist;
  }

  // sip_tmpl_name - computed: false, optional: false, required: true
  private _sipTmplName?: string; 
  public get sipTmplName() {
    return this.getStringAttribute('sip_tmpl_name');
  }
  public set sipTmplName(value: string) {
    this._sipTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTmplNameInput() {
    return this._sipTmplName;
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
      id: cdktf.stringToTerraform(this._id),
      sip_filter_header_blacklist: cdktf.numberToTerraform(this._sipFilterHeaderBlacklist),
      sip_filter_header_count_only: cdktf.numberToTerraform(this._sipFilterHeaderCountOnly),
      sip_filter_header_regex: cdktf.stringToTerraform(this._sipFilterHeaderRegex),
      sip_filter_header_seq: cdktf.numberToTerraform(this._sipFilterHeaderSeq),
      sip_filter_header_unmatched: cdktf.numberToTerraform(this._sipFilterHeaderUnmatched),
      sip_filter_header_whitelist: cdktf.numberToTerraform(this._sipFilterHeaderWhitelist),
      sip_tmpl_name: cdktf.stringToTerraform(this._sipTmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_filter_header_blacklist: {
        value: cdktf.numberToHclTerraform(this._sipFilterHeaderBlacklist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_filter_header_count_only: {
        value: cdktf.numberToHclTerraform(this._sipFilterHeaderCountOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_filter_header_regex: {
        value: cdktf.stringToHclTerraform(this._sipFilterHeaderRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_filter_header_seq: {
        value: cdktf.numberToHclTerraform(this._sipFilterHeaderSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_filter_header_unmatched: {
        value: cdktf.numberToHclTerraform(this._sipFilterHeaderUnmatched),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_filter_header_whitelist: {
        value: cdktf.numberToHclTerraform(this._sipFilterHeaderWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sipTmplName),
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
