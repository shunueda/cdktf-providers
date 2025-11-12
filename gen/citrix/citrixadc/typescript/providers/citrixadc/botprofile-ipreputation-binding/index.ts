// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileIpreputationBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#bot_bind_comment BotprofileIpreputationBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#bot_iprep_action BotprofileIpreputationBinding#bot_iprep_action}
  */
  readonly botIprepAction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#bot_iprep_enabled BotprofileIpreputationBinding#bot_iprep_enabled}
  */
  readonly botIprepEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#bot_ipreputation BotprofileIpreputationBinding#bot_ipreputation}
  */
  readonly botIpreputation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#category BotprofileIpreputationBinding#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#id BotprofileIpreputationBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#logmessage BotprofileIpreputationBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#name BotprofileIpreputationBinding#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding citrixadc_botprofile_ipreputation_binding}
*/
export class BotprofileIpreputationBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_ipreputation_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileIpreputationBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileIpreputationBinding to import
  * @param importFromId The id of the existing BotprofileIpreputationBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileIpreputationBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_ipreputation_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ipreputation_binding citrixadc_botprofile_ipreputation_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileIpreputationBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileIpreputationBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_ipreputation_binding',
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
    this._botIprepAction = config.botIprepAction;
    this._botIprepEnabled = config.botIprepEnabled;
    this._botIpreputation = config.botIpreputation;
    this._category = config.category;
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

  // bot_iprep_action - computed: true, optional: true, required: false
  private _botIprepAction?: string[]; 
  public get botIprepAction() {
    return this.getListAttribute('bot_iprep_action');
  }
  public set botIprepAction(value: string[]) {
    this._botIprepAction = value;
  }
  public resetBotIprepAction() {
    this._botIprepAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botIprepActionInput() {
    return this._botIprepAction;
  }

  // bot_iprep_enabled - computed: true, optional: true, required: false
  private _botIprepEnabled?: string; 
  public get botIprepEnabled() {
    return this.getStringAttribute('bot_iprep_enabled');
  }
  public set botIprepEnabled(value: string) {
    this._botIprepEnabled = value;
  }
  public resetBotIprepEnabled() {
    this._botIprepEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botIprepEnabledInput() {
    return this._botIprepEnabled;
  }

  // bot_ipreputation - computed: true, optional: true, required: false
  private _botIpreputation?: boolean | cdktf.IResolvable; 
  public get botIpreputation() {
    return this.getBooleanAttribute('bot_ipreputation');
  }
  public set botIpreputation(value: boolean | cdktf.IResolvable) {
    this._botIpreputation = value;
  }
  public resetBotIpreputation() {
    this._botIpreputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botIpreputationInput() {
    return this._botIpreputation;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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
      bot_iprep_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._botIprepAction),
      bot_iprep_enabled: cdktf.stringToTerraform(this._botIprepEnabled),
      bot_ipreputation: cdktf.booleanToTerraform(this._botIpreputation),
      category: cdktf.stringToTerraform(this._category),
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
      bot_iprep_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._botIprepAction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bot_iprep_enabled: {
        value: cdktf.stringToHclTerraform(this._botIprepEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_ipreputation: {
        value: cdktf.booleanToHclTerraform(this._botIpreputation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
