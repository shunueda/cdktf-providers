// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileLogexpressionBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#bot_bind_comment BotprofileLogexpressionBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#bot_log_expression_enabled BotprofileLogexpressionBinding#bot_log_expression_enabled}
  */
  readonly botLogExpressionEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#bot_log_expression_name BotprofileLogexpressionBinding#bot_log_expression_name}
  */
  readonly botLogExpressionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#bot_log_expression_value BotprofileLogexpressionBinding#bot_log_expression_value}
  */
  readonly botLogExpressionValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#id BotprofileLogexpressionBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#logexpression BotprofileLogexpressionBinding#logexpression}
  */
  readonly logexpression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#logmessage BotprofileLogexpressionBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#name BotprofileLogexpressionBinding#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding citrixadc_botprofile_logexpression_binding}
*/
export class BotprofileLogexpressionBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_logexpression_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileLogexpressionBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileLogexpressionBinding to import
  * @param importFromId The id of the existing BotprofileLogexpressionBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileLogexpressionBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_logexpression_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_logexpression_binding citrixadc_botprofile_logexpression_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileLogexpressionBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileLogexpressionBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_logexpression_binding',
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
    this._botLogExpressionEnabled = config.botLogExpressionEnabled;
    this._botLogExpressionName = config.botLogExpressionName;
    this._botLogExpressionValue = config.botLogExpressionValue;
    this._id = config.id;
    this._logexpression = config.logexpression;
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

  // bot_log_expression_enabled - computed: true, optional: true, required: false
  private _botLogExpressionEnabled?: string; 
  public get botLogExpressionEnabled() {
    return this.getStringAttribute('bot_log_expression_enabled');
  }
  public set botLogExpressionEnabled(value: string) {
    this._botLogExpressionEnabled = value;
  }
  public resetBotLogExpressionEnabled() {
    this._botLogExpressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botLogExpressionEnabledInput() {
    return this._botLogExpressionEnabled;
  }

  // bot_log_expression_name - computed: false, optional: false, required: true
  private _botLogExpressionName?: string; 
  public get botLogExpressionName() {
    return this.getStringAttribute('bot_log_expression_name');
  }
  public set botLogExpressionName(value: string) {
    this._botLogExpressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botLogExpressionNameInput() {
    return this._botLogExpressionName;
  }

  // bot_log_expression_value - computed: true, optional: true, required: false
  private _botLogExpressionValue?: string; 
  public get botLogExpressionValue() {
    return this.getStringAttribute('bot_log_expression_value');
  }
  public set botLogExpressionValue(value: string) {
    this._botLogExpressionValue = value;
  }
  public resetBotLogExpressionValue() {
    this._botLogExpressionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botLogExpressionValueInput() {
    return this._botLogExpressionValue;
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

  // logexpression - computed: true, optional: true, required: false
  private _logexpression?: boolean | cdktf.IResolvable; 
  public get logexpression() {
    return this.getBooleanAttribute('logexpression');
  }
  public set logexpression(value: boolean | cdktf.IResolvable) {
    this._logexpression = value;
  }
  public resetLogexpression() {
    this._logexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logexpressionInput() {
    return this._logexpression;
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
      bot_log_expression_enabled: cdktf.stringToTerraform(this._botLogExpressionEnabled),
      bot_log_expression_name: cdktf.stringToTerraform(this._botLogExpressionName),
      bot_log_expression_value: cdktf.stringToTerraform(this._botLogExpressionValue),
      id: cdktf.stringToTerraform(this._id),
      logexpression: cdktf.booleanToTerraform(this._logexpression),
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
      bot_log_expression_enabled: {
        value: cdktf.stringToHclTerraform(this._botLogExpressionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_log_expression_name: {
        value: cdktf.stringToHclTerraform(this._botLogExpressionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_log_expression_value: {
        value: cdktf.stringToHclTerraform(this._botLogExpressionValue),
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
      logexpression: {
        value: cdktf.booleanToHclTerraform(this._logexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
