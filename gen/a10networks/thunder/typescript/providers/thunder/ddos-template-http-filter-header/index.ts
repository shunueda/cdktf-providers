// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateHttpFilterHeaderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Also blacklist the source when action is taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#http_filter_header_blacklist DdosTemplateHttpFilterHeader#http_filter_header_blacklist}
  */
  readonly httpFilterHeaderBlacklist?: number;
  /**
  * Take no action and continue processing the next filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#http_filter_header_count_only DdosTemplateHttpFilterHeader#http_filter_header_count_only}
  */
  readonly httpFilterHeaderCountOnly?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#http_filter_header_regex DdosTemplateHttpFilterHeader#http_filter_header_regex}
  */
  readonly httpFilterHeaderRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#http_filter_header_seq DdosTemplateHttpFilterHeader#http_filter_header_seq}
  */
  readonly httpFilterHeaderSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#http_filter_header_unmatched DdosTemplateHttpFilterHeader#http_filter_header_unmatched}
  */
  readonly httpFilterHeaderUnmatched?: number;
  /**
  * Whitelist the source after filter passes, packets are dropped until then
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#http_filter_header_whitelist DdosTemplateHttpFilterHeader#http_filter_header_whitelist}
  */
  readonly httpFilterHeaderWhitelist?: number;
  /**
  * HttpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#http_tmpl_name DdosTemplateHttpFilterHeader#http_tmpl_name}
  */
  readonly httpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#id DdosTemplateHttpFilterHeader#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#user_tag DdosTemplateHttpFilterHeader#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#uuid DdosTemplateHttpFilterHeader#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header thunder_ddos_template_http_filter_header}
*/
export class DdosTemplateHttpFilterHeader extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_http_filter_header";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateHttpFilterHeader resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateHttpFilterHeader to import
  * @param importFromId The id of the existing DdosTemplateHttpFilterHeader that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateHttpFilterHeader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_http_filter_header", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_http_filter_header thunder_ddos_template_http_filter_header} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateHttpFilterHeaderConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateHttpFilterHeaderConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_http_filter_header',
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
    this._httpFilterHeaderBlacklist = config.httpFilterHeaderBlacklist;
    this._httpFilterHeaderCountOnly = config.httpFilterHeaderCountOnly;
    this._httpFilterHeaderRegex = config.httpFilterHeaderRegex;
    this._httpFilterHeaderSeq = config.httpFilterHeaderSeq;
    this._httpFilterHeaderUnmatched = config.httpFilterHeaderUnmatched;
    this._httpFilterHeaderWhitelist = config.httpFilterHeaderWhitelist;
    this._httpTmplName = config.httpTmplName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_filter_header_blacklist - computed: false, optional: true, required: false
  private _httpFilterHeaderBlacklist?: number; 
  public get httpFilterHeaderBlacklist() {
    return this.getNumberAttribute('http_filter_header_blacklist');
  }
  public set httpFilterHeaderBlacklist(value: number) {
    this._httpFilterHeaderBlacklist = value;
  }
  public resetHttpFilterHeaderBlacklist() {
    this._httpFilterHeaderBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderBlacklistInput() {
    return this._httpFilterHeaderBlacklist;
  }

  // http_filter_header_count_only - computed: false, optional: true, required: false
  private _httpFilterHeaderCountOnly?: number; 
  public get httpFilterHeaderCountOnly() {
    return this.getNumberAttribute('http_filter_header_count_only');
  }
  public set httpFilterHeaderCountOnly(value: number) {
    this._httpFilterHeaderCountOnly = value;
  }
  public resetHttpFilterHeaderCountOnly() {
    this._httpFilterHeaderCountOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderCountOnlyInput() {
    return this._httpFilterHeaderCountOnly;
  }

  // http_filter_header_regex - computed: false, optional: true, required: false
  private _httpFilterHeaderRegex?: string; 
  public get httpFilterHeaderRegex() {
    return this.getStringAttribute('http_filter_header_regex');
  }
  public set httpFilterHeaderRegex(value: string) {
    this._httpFilterHeaderRegex = value;
  }
  public resetHttpFilterHeaderRegex() {
    this._httpFilterHeaderRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderRegexInput() {
    return this._httpFilterHeaderRegex;
  }

  // http_filter_header_seq - computed: false, optional: false, required: true
  private _httpFilterHeaderSeq?: number; 
  public get httpFilterHeaderSeq() {
    return this.getNumberAttribute('http_filter_header_seq');
  }
  public set httpFilterHeaderSeq(value: number) {
    this._httpFilterHeaderSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderSeqInput() {
    return this._httpFilterHeaderSeq;
  }

  // http_filter_header_unmatched - computed: false, optional: true, required: false
  private _httpFilterHeaderUnmatched?: number; 
  public get httpFilterHeaderUnmatched() {
    return this.getNumberAttribute('http_filter_header_unmatched');
  }
  public set httpFilterHeaderUnmatched(value: number) {
    this._httpFilterHeaderUnmatched = value;
  }
  public resetHttpFilterHeaderUnmatched() {
    this._httpFilterHeaderUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderUnmatchedInput() {
    return this._httpFilterHeaderUnmatched;
  }

  // http_filter_header_whitelist - computed: false, optional: true, required: false
  private _httpFilterHeaderWhitelist?: number; 
  public get httpFilterHeaderWhitelist() {
    return this.getNumberAttribute('http_filter_header_whitelist');
  }
  public set httpFilterHeaderWhitelist(value: number) {
    this._httpFilterHeaderWhitelist = value;
  }
  public resetHttpFilterHeaderWhitelist() {
    this._httpFilterHeaderWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterHeaderWhitelistInput() {
    return this._httpFilterHeaderWhitelist;
  }

  // http_tmpl_name - computed: false, optional: false, required: true
  private _httpTmplName?: string; 
  public get httpTmplName() {
    return this.getStringAttribute('http_tmpl_name');
  }
  public set httpTmplName(value: string) {
    this._httpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTmplNameInput() {
    return this._httpTmplName;
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
      http_filter_header_blacklist: cdktf.numberToTerraform(this._httpFilterHeaderBlacklist),
      http_filter_header_count_only: cdktf.numberToTerraform(this._httpFilterHeaderCountOnly),
      http_filter_header_regex: cdktf.stringToTerraform(this._httpFilterHeaderRegex),
      http_filter_header_seq: cdktf.numberToTerraform(this._httpFilterHeaderSeq),
      http_filter_header_unmatched: cdktf.numberToTerraform(this._httpFilterHeaderUnmatched),
      http_filter_header_whitelist: cdktf.numberToTerraform(this._httpFilterHeaderWhitelist),
      http_tmpl_name: cdktf.stringToTerraform(this._httpTmplName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_filter_header_blacklist: {
        value: cdktf.numberToHclTerraform(this._httpFilterHeaderBlacklist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_filter_header_count_only: {
        value: cdktf.numberToHclTerraform(this._httpFilterHeaderCountOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_filter_header_regex: {
        value: cdktf.stringToHclTerraform(this._httpFilterHeaderRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_filter_header_seq: {
        value: cdktf.numberToHclTerraform(this._httpFilterHeaderSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_filter_header_unmatched: {
        value: cdktf.numberToHclTerraform(this._httpFilterHeaderUnmatched),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_filter_header_whitelist: {
        value: cdktf.numberToHclTerraform(this._httpFilterHeaderWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._httpTmplName),
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
