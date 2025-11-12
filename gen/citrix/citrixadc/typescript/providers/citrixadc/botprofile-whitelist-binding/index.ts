// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileWhitelistBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#bot_bind_comment BotprofileWhitelistBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#bot_whitelist BotprofileWhitelistBinding#bot_whitelist}
  */
  readonly botWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#bot_whitelist_enabled BotprofileWhitelistBinding#bot_whitelist_enabled}
  */
  readonly botWhitelistEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#bot_whitelist_type BotprofileWhitelistBinding#bot_whitelist_type}
  */
  readonly botWhitelistType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#bot_whitelist_value BotprofileWhitelistBinding#bot_whitelist_value}
  */
  readonly botWhitelistValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#id BotprofileWhitelistBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#log BotprofileWhitelistBinding#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#logmessage BotprofileWhitelistBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#name BotprofileWhitelistBinding#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding citrixadc_botprofile_whitelist_binding}
*/
export class BotprofileWhitelistBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_whitelist_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileWhitelistBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileWhitelistBinding to import
  * @param importFromId The id of the existing BotprofileWhitelistBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileWhitelistBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_whitelist_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_whitelist_binding citrixadc_botprofile_whitelist_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileWhitelistBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileWhitelistBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_whitelist_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._botBindComment = config.botBindComment;
    this._botWhitelist = config.botWhitelist;
    this._botWhitelistEnabled = config.botWhitelistEnabled;
    this._botWhitelistType = config.botWhitelistType;
    this._botWhitelistValue = config.botWhitelistValue;
    this._id = config.id;
    this._log = config.log;
    this._logmessage = config.logmessage;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_bind_comment - computed: true, optional: true, required: false
  private _botBindComment?: string; 
  public get botBindComment() {
    return this.getStringAttribute('bot_bind_comment');
  }
  public set botBindComment(value: string) {
    this._botBindComment = value;
  }
  public resetBotBindComment() {
    this._botBindComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botBindCommentInput() {
    return this._botBindComment;
  }

  // bot_whitelist - computed: true, optional: true, required: false
  private _botWhitelist?: boolean | cdktf.IResolvable; 
  public get botWhitelist() {
    return this.getBooleanAttribute('bot_whitelist');
  }
  public set botWhitelist(value: boolean | cdktf.IResolvable) {
    this._botWhitelist = value;
  }
  public resetBotWhitelist() {
    this._botWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botWhitelistInput() {
    return this._botWhitelist;
  }

  // bot_whitelist_enabled - computed: true, optional: true, required: false
  private _botWhitelistEnabled?: string; 
  public get botWhitelistEnabled() {
    return this.getStringAttribute('bot_whitelist_enabled');
  }
  public set botWhitelistEnabled(value: string) {
    this._botWhitelistEnabled = value;
  }
  public resetBotWhitelistEnabled() {
    this._botWhitelistEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botWhitelistEnabledInput() {
    return this._botWhitelistEnabled;
  }

  // bot_whitelist_type - computed: true, optional: true, required: false
  private _botWhitelistType?: string; 
  public get botWhitelistType() {
    return this.getStringAttribute('bot_whitelist_type');
  }
  public set botWhitelistType(value: string) {
    this._botWhitelistType = value;
  }
  public resetBotWhitelistType() {
    this._botWhitelistType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botWhitelistTypeInput() {
    return this._botWhitelistType;
  }

  // bot_whitelist_value - computed: false, optional: false, required: true
  private _botWhitelistValue?: string; 
  public get botWhitelistValue() {
    return this.getStringAttribute('bot_whitelist_value');
  }
  public set botWhitelistValue(value: string) {
    this._botWhitelistValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botWhitelistValueInput() {
    return this._botWhitelistValue;
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // logmessage - computed: true, optional: true, required: false
  private _logmessage?: string; 
  public get logmessage() {
    return this.getStringAttribute('logmessage');
  }
  public set logmessage(value: string) {
    this._logmessage = value;
  }
  public resetLogmessage() {
    this._logmessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logmessageInput() {
    return this._logmessage;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_bind_comment: cdktf.stringToTerraform(this._botBindComment),
      bot_whitelist: cdktf.booleanToTerraform(this._botWhitelist),
      bot_whitelist_enabled: cdktf.stringToTerraform(this._botWhitelistEnabled),
      bot_whitelist_type: cdktf.stringToTerraform(this._botWhitelistType),
      bot_whitelist_value: cdktf.stringToTerraform(this._botWhitelistValue),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.stringToTerraform(this._log),
      logmessage: cdktf.stringToTerraform(this._logmessage),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_bind_comment: {
        value: cdktf.stringToHclTerraform(this._botBindComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_whitelist: {
        value: cdktf.booleanToHclTerraform(this._botWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bot_whitelist_enabled: {
        value: cdktf.stringToHclTerraform(this._botWhitelistEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_whitelist_type: {
        value: cdktf.stringToHclTerraform(this._botWhitelistType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_whitelist_value: {
        value: cdktf.stringToHclTerraform(this._botWhitelistValue),
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
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logmessage: {
        value: cdktf.stringToHclTerraform(this._logmessage),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
