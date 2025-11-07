// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop the request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#action_value SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#action_value}
  */
  readonly actionValue?: string;
  /**
  * Header name value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#header_name_value SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#header_name_value}
  */
  readonly headerNameValue?: string;
  /**
  * Header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#header_value_value SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#header_value_value}
  */
  readonly headerValueValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#id SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'full-text': Full text match; 'pcre': PCRE match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#match_type_value SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#match_type_value}
  */
  readonly matchTypeValue?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#name SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#name}
  */
  readonly name: string;
  /**
  * Specify a sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#seq_num SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#seq_num}
  */
  readonly seqNum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#user_tag SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#uuid SlbTemplateHttpHttpProtocolCheckHeaderFilterRule#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule thunder_slb_template_http_http_protocol_check_header_filter_rule}
*/
export class SlbTemplateHttpHttpProtocolCheckHeaderFilterRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_http_http_protocol_check_header_filter_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateHttpHttpProtocolCheckHeaderFilterRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateHttpHttpProtocolCheckHeaderFilterRule to import
  * @param importFromId The id of the existing SlbTemplateHttpHttpProtocolCheckHeaderFilterRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateHttpHttpProtocolCheckHeaderFilterRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_http_http_protocol_check_header_filter_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check_header_filter_rule thunder_slb_template_http_http_protocol_check_header_filter_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_http_http_protocol_check_header_filter_rule',
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
    this._actionValue = config.actionValue;
    this._headerNameValue = config.headerNameValue;
    this._headerValueValue = config.headerValueValue;
    this._id = config.id;
    this._matchTypeValue = config.matchTypeValue;
    this._name = config.name;
    this._seqNum = config.seqNum;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
  }

  // header_name_value - computed: false, optional: true, required: false
  private _headerNameValue?: string; 
  public get headerNameValue() {
    return this.getStringAttribute('header_name_value');
  }
  public set headerNameValue(value: string) {
    this._headerNameValue = value;
  }
  public resetHeaderNameValue() {
    this._headerNameValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameValueInput() {
    return this._headerNameValue;
  }

  // header_value_value - computed: false, optional: true, required: false
  private _headerValueValue?: string; 
  public get headerValueValue() {
    return this.getStringAttribute('header_value_value');
  }
  public set headerValueValue(value: string) {
    this._headerValueValue = value;
  }
  public resetHeaderValueValue() {
    this._headerValueValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueValueInput() {
    return this._headerValueValue;
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

  // match_type_value - computed: false, optional: true, required: false
  private _matchTypeValue?: string; 
  public get matchTypeValue() {
    return this.getStringAttribute('match_type_value');
  }
  public set matchTypeValue(value: string) {
    this._matchTypeValue = value;
  }
  public resetMatchTypeValue() {
    this._matchTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeValueInput() {
    return this._matchTypeValue;
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

  // seq_num - computed: false, optional: false, required: true
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
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
      action_value: cdktf.stringToTerraform(this._actionValue),
      header_name_value: cdktf.stringToTerraform(this._headerNameValue),
      header_value_value: cdktf.stringToTerraform(this._headerValueValue),
      id: cdktf.stringToTerraform(this._id),
      match_type_value: cdktf.stringToTerraform(this._matchTypeValue),
      name: cdktf.stringToTerraform(this._name),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_value: {
        value: cdktf.stringToHclTerraform(this._actionValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_value: {
        value: cdktf.stringToHclTerraform(this._headerNameValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_value: {
        value: cdktf.stringToHclTerraform(this._headerValueValue),
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
      match_type_value: {
        value: cdktf.stringToHclTerraform(this._matchTypeValue),
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
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
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
