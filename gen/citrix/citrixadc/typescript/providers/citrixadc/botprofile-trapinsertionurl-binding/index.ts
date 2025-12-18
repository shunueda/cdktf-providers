// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileTrapinsertionurlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#bot_bind_comment BotprofileTrapinsertionurlBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#bot_trap_url BotprofileTrapinsertionurlBinding#bot_trap_url}
  */
  readonly botTrapUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#bot_trap_url_insertion_enabled BotprofileTrapinsertionurlBinding#bot_trap_url_insertion_enabled}
  */
  readonly botTrapUrlInsertionEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#id BotprofileTrapinsertionurlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#logmessage BotprofileTrapinsertionurlBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#name BotprofileTrapinsertionurlBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#trapinsertionurl BotprofileTrapinsertionurlBinding#trapinsertionurl}
  */
  readonly trapinsertionurl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding citrixadc_botprofile_trapinsertionurl_binding}
*/
export class BotprofileTrapinsertionurlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_trapinsertionurl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileTrapinsertionurlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileTrapinsertionurlBinding to import
  * @param importFromId The id of the existing BotprofileTrapinsertionurlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileTrapinsertionurlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_trapinsertionurl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_trapinsertionurl_binding citrixadc_botprofile_trapinsertionurl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileTrapinsertionurlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileTrapinsertionurlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_trapinsertionurl_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._botTrapUrl = config.botTrapUrl;
    this._botTrapUrlInsertionEnabled = config.botTrapUrlInsertionEnabled;
    this._id = config.id;
    this._logmessage = config.logmessage;
    this._name = config.name;
    this._trapinsertionurl = config.trapinsertionurl;
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

  // bot_trap_url - computed: false, optional: false, required: true
  private _botTrapUrl?: string; 
  public get botTrapUrl() {
    return this.getStringAttribute('bot_trap_url');
  }
  public set botTrapUrl(value: string) {
    this._botTrapUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botTrapUrlInput() {
    return this._botTrapUrl;
  }

  // bot_trap_url_insertion_enabled - computed: true, optional: true, required: false
  private _botTrapUrlInsertionEnabled?: string; 
  public get botTrapUrlInsertionEnabled() {
    return this.getStringAttribute('bot_trap_url_insertion_enabled');
  }
  public set botTrapUrlInsertionEnabled(value: string) {
    this._botTrapUrlInsertionEnabled = value;
  }
  public resetBotTrapUrlInsertionEnabled() {
    this._botTrapUrlInsertionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botTrapUrlInsertionEnabledInput() {
    return this._botTrapUrlInsertionEnabled;
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

  // trapinsertionurl - computed: true, optional: true, required: false
  private _trapinsertionurl?: boolean | cdktf.IResolvable; 
  public get trapinsertionurl() {
    return this.getBooleanAttribute('trapinsertionurl');
  }
  public set trapinsertionurl(value: boolean | cdktf.IResolvable) {
    this._trapinsertionurl = value;
  }
  public resetTrapinsertionurl() {
    this._trapinsertionurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapinsertionurlInput() {
    return this._trapinsertionurl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_bind_comment: cdktf.stringToTerraform(this._botBindComment),
      bot_trap_url: cdktf.stringToTerraform(this._botTrapUrl),
      bot_trap_url_insertion_enabled: cdktf.stringToTerraform(this._botTrapUrlInsertionEnabled),
      id: cdktf.stringToTerraform(this._id),
      logmessage: cdktf.stringToTerraform(this._logmessage),
      name: cdktf.stringToTerraform(this._name),
      trapinsertionurl: cdktf.booleanToTerraform(this._trapinsertionurl),
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
      bot_trap_url: {
        value: cdktf.stringToHclTerraform(this._botTrapUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_trap_url_insertion_enabled: {
        value: cdktf.stringToHclTerraform(this._botTrapUrlInsertionEnabled),
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
      trapinsertionurl: {
        value: cdktf.booleanToHclTerraform(this._trapinsertionurl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
