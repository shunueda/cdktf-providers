// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileTpsBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#bot_bind_comment BotprofileTpsBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#bot_tps BotprofileTpsBinding#bot_tps}
  */
  readonly botTps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#bot_tps_action BotprofileTpsBinding#bot_tps_action}
  */
  readonly botTpsAction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#bot_tps_enabled BotprofileTpsBinding#bot_tps_enabled}
  */
  readonly botTpsEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#bot_tps_type BotprofileTpsBinding#bot_tps_type}
  */
  readonly botTpsType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#id BotprofileTpsBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#logmessage BotprofileTpsBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#name BotprofileTpsBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#percentage BotprofileTpsBinding#percentage}
  */
  readonly percentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#threshold BotprofileTpsBinding#threshold}
  */
  readonly threshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding citrixadc_botprofile_tps_binding}
*/
export class BotprofileTpsBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_tps_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileTpsBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileTpsBinding to import
  * @param importFromId The id of the existing BotprofileTpsBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileTpsBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_tps_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/botprofile_tps_binding citrixadc_botprofile_tps_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileTpsBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileTpsBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_tps_binding',
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
    this._botTps = config.botTps;
    this._botTpsAction = config.botTpsAction;
    this._botTpsEnabled = config.botTpsEnabled;
    this._botTpsType = config.botTpsType;
    this._id = config.id;
    this._logmessage = config.logmessage;
    this._name = config.name;
    this._percentage = config.percentage;
    this._threshold = config.threshold;
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

  // bot_tps - computed: true, optional: true, required: false
  private _botTps?: boolean | cdktf.IResolvable; 
  public get botTps() {
    return this.getBooleanAttribute('bot_tps');
  }
  public set botTps(value: boolean | cdktf.IResolvable) {
    this._botTps = value;
  }
  public resetBotTps() {
    this._botTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botTpsInput() {
    return this._botTps;
  }

  // bot_tps_action - computed: true, optional: true, required: false
  private _botTpsAction?: string[]; 
  public get botTpsAction() {
    return this.getListAttribute('bot_tps_action');
  }
  public set botTpsAction(value: string[]) {
    this._botTpsAction = value;
  }
  public resetBotTpsAction() {
    this._botTpsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botTpsActionInput() {
    return this._botTpsAction;
  }

  // bot_tps_enabled - computed: true, optional: true, required: false
  private _botTpsEnabled?: string; 
  public get botTpsEnabled() {
    return this.getStringAttribute('bot_tps_enabled');
  }
  public set botTpsEnabled(value: string) {
    this._botTpsEnabled = value;
  }
  public resetBotTpsEnabled() {
    this._botTpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botTpsEnabledInput() {
    return this._botTpsEnabled;
  }

  // bot_tps_type - computed: false, optional: false, required: true
  private _botTpsType?: string; 
  public get botTpsType() {
    return this.getStringAttribute('bot_tps_type');
  }
  public set botTpsType(value: string) {
    this._botTpsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botTpsTypeInput() {
    return this._botTpsType;
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

  // percentage - computed: true, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_bind_comment: cdktf.stringToTerraform(this._botBindComment),
      bot_tps: cdktf.booleanToTerraform(this._botTps),
      bot_tps_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._botTpsAction),
      bot_tps_enabled: cdktf.stringToTerraform(this._botTpsEnabled),
      bot_tps_type: cdktf.stringToTerraform(this._botTpsType),
      id: cdktf.stringToTerraform(this._id),
      logmessage: cdktf.stringToTerraform(this._logmessage),
      name: cdktf.stringToTerraform(this._name),
      percentage: cdktf.numberToTerraform(this._percentage),
      threshold: cdktf.numberToTerraform(this._threshold),
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
      bot_tps: {
        value: cdktf.booleanToHclTerraform(this._botTps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bot_tps_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._botTpsAction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bot_tps_enabled: {
        value: cdktf.stringToHclTerraform(this._botTpsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_tps_type: {
        value: cdktf.stringToHclTerraform(this._botTpsType),
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
      percentage: {
        value: cdktf.numberToHclTerraform(this._percentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
