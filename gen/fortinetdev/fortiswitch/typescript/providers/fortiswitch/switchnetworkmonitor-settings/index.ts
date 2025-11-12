// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchnetworkmonitorSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings#db_aging_interval SwitchnetworkmonitorSettings#db_aging_interval}
  */
  readonly dbAgingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings#id SwitchnetworkmonitorSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings#status SwitchnetworkmonitorSettings#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings#survey_mode SwitchnetworkmonitorSettings#survey_mode}
  */
  readonly surveyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings#survey_mode_interval SwitchnetworkmonitorSettings#survey_mode_interval}
  */
  readonly surveyModeInterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings fortiswitch_switchnetworkmonitor_settings}
*/
export class SwitchnetworkmonitorSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchnetworkmonitor_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchnetworkmonitorSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchnetworkmonitorSettings to import
  * @param importFromId The id of the existing SwitchnetworkmonitorSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchnetworkmonitorSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchnetworkmonitor_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_settings fortiswitch_switchnetworkmonitor_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchnetworkmonitorSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchnetworkmonitorSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchnetworkmonitor_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbAgingInterval = config.dbAgingInterval;
    this._id = config.id;
    this._status = config.status;
    this._surveyMode = config.surveyMode;
    this._surveyModeInterval = config.surveyModeInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_aging_interval - computed: true, optional: true, required: false
  private _dbAgingInterval?: number; 
  public get dbAgingInterval() {
    return this.getNumberAttribute('db_aging_interval');
  }
  public set dbAgingInterval(value: number) {
    this._dbAgingInterval = value;
  }
  public resetDbAgingInterval() {
    this._dbAgingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAgingIntervalInput() {
    return this._dbAgingInterval;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // survey_mode - computed: true, optional: true, required: false
  private _surveyMode?: string; 
  public get surveyMode() {
    return this.getStringAttribute('survey_mode');
  }
  public set surveyMode(value: string) {
    this._surveyMode = value;
  }
  public resetSurveyMode() {
    this._surveyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyModeInput() {
    return this._surveyMode;
  }

  // survey_mode_interval - computed: true, optional: true, required: false
  private _surveyModeInterval?: number; 
  public get surveyModeInterval() {
    return this.getNumberAttribute('survey_mode_interval');
  }
  public set surveyModeInterval(value: number) {
    this._surveyModeInterval = value;
  }
  public resetSurveyModeInterval() {
    this._surveyModeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyModeIntervalInput() {
    return this._surveyModeInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_aging_interval: cdktf.numberToTerraform(this._dbAgingInterval),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      survey_mode: cdktf.stringToTerraform(this._surveyMode),
      survey_mode_interval: cdktf.numberToTerraform(this._surveyModeInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_aging_interval: {
        value: cdktf.numberToHclTerraform(this._dbAgingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      survey_mode: {
        value: cdktf.stringToHclTerraform(this._surveyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      survey_mode_interval: {
        value: cdktf.numberToHclTerraform(this._surveyModeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
