// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileBlacklistBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#bot_bind_comment BotprofileBlacklistBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#bot_blacklist BotprofileBlacklistBinding#bot_blacklist}
  */
  readonly botBlacklist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#bot_blacklist_action BotprofileBlacklistBinding#bot_blacklist_action}
  */
  readonly botBlacklistAction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#bot_blacklist_enabled BotprofileBlacklistBinding#bot_blacklist_enabled}
  */
  readonly botBlacklistEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#bot_blacklist_type BotprofileBlacklistBinding#bot_blacklist_type}
  */
  readonly botBlacklistType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#bot_blacklist_value BotprofileBlacklistBinding#bot_blacklist_value}
  */
  readonly botBlacklistValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#id BotprofileBlacklistBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#logmessage BotprofileBlacklistBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#name BotprofileBlacklistBinding#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding citrixadc_botprofile_blacklist_binding}
*/
export class BotprofileBlacklistBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_blacklist_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileBlacklistBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileBlacklistBinding to import
  * @param importFromId The id of the existing BotprofileBlacklistBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileBlacklistBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_blacklist_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_blacklist_binding citrixadc_botprofile_blacklist_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileBlacklistBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileBlacklistBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_blacklist_binding',
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
    this._botBlacklist = config.botBlacklist;
    this._botBlacklistAction = config.botBlacklistAction;
    this._botBlacklistEnabled = config.botBlacklistEnabled;
    this._botBlacklistType = config.botBlacklistType;
    this._botBlacklistValue = config.botBlacklistValue;
    this._id = config.id;
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

  // bot_blacklist - computed: true, optional: true, required: false
  private _botBlacklist?: boolean | cdktf.IResolvable; 
  public get botBlacklist() {
    return this.getBooleanAttribute('bot_blacklist');
  }
  public set botBlacklist(value: boolean | cdktf.IResolvable) {
    this._botBlacklist = value;
  }
  public resetBotBlacklist() {
    this._botBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botBlacklistInput() {
    return this._botBlacklist;
  }

  // bot_blacklist_action - computed: true, optional: true, required: false
  private _botBlacklistAction?: string[]; 
  public get botBlacklistAction() {
    return this.getListAttribute('bot_blacklist_action');
  }
  public set botBlacklistAction(value: string[]) {
    this._botBlacklistAction = value;
  }
  public resetBotBlacklistAction() {
    this._botBlacklistAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botBlacklistActionInput() {
    return this._botBlacklistAction;
  }

  // bot_blacklist_enabled - computed: true, optional: true, required: false
  private _botBlacklistEnabled?: string; 
  public get botBlacklistEnabled() {
    return this.getStringAttribute('bot_blacklist_enabled');
  }
  public set botBlacklistEnabled(value: string) {
    this._botBlacklistEnabled = value;
  }
  public resetBotBlacklistEnabled() {
    this._botBlacklistEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botBlacklistEnabledInput() {
    return this._botBlacklistEnabled;
  }

  // bot_blacklist_type - computed: true, optional: true, required: false
  private _botBlacklistType?: string; 
  public get botBlacklistType() {
    return this.getStringAttribute('bot_blacklist_type');
  }
  public set botBlacklistType(value: string) {
    this._botBlacklistType = value;
  }
  public resetBotBlacklistType() {
    this._botBlacklistType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botBlacklistTypeInput() {
    return this._botBlacklistType;
  }

  // bot_blacklist_value - computed: false, optional: false, required: true
  private _botBlacklistValue?: string; 
  public get botBlacklistValue() {
    return this.getStringAttribute('bot_blacklist_value');
  }
  public set botBlacklistValue(value: string) {
    this._botBlacklistValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botBlacklistValueInput() {
    return this._botBlacklistValue;
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
      bot_blacklist: cdktf.booleanToTerraform(this._botBlacklist),
      bot_blacklist_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._botBlacklistAction),
      bot_blacklist_enabled: cdktf.stringToTerraform(this._botBlacklistEnabled),
      bot_blacklist_type: cdktf.stringToTerraform(this._botBlacklistType),
      bot_blacklist_value: cdktf.stringToTerraform(this._botBlacklistValue),
      id: cdktf.stringToTerraform(this._id),
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
      bot_blacklist: {
        value: cdktf.booleanToHclTerraform(this._botBlacklist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bot_blacklist_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._botBlacklistAction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bot_blacklist_enabled: {
        value: cdktf.stringToHclTerraform(this._botBlacklistEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_blacklist_type: {
        value: cdktf.stringToHclTerraform(this._botBlacklistType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_blacklist_value: {
        value: cdktf.stringToHclTerraform(this._botBlacklistValue),
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
