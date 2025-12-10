// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextEmbeddedProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls the settings of the connected agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#additional_settings InextEmbeddedProfile#additional_settings}
  */
  readonly additionalSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#defined_applications_only InextEmbeddedProfile#defined_applications_only}
  */
  readonly definedApplicationsOnly?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of agents that can be connected to this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#max_number_of_agents InextEmbeddedProfile#max_number_of_agents}
  */
  readonly maxNumberOfAgents?: number;
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#name InextEmbeddedProfile#name}
  */
  readonly name: string;
  /**
  * The upgrade mode of the profile: Automatic, Manual or Scheduled.
  * The default is Automatic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#upgrade_mode InextEmbeddedProfile#upgrade_mode}
  */
  readonly upgradeMode?: string;
  /**
  * The days of the month of the upgrade time schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#upgrade_time_days InextEmbeddedProfile#upgrade_time_days}
  */
  readonly upgradeTimeDays?: number[];
  /**
  * The duration of the upgrade in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#upgrade_time_duration InextEmbeddedProfile#upgrade_time_duration}
  */
  readonly upgradeTimeDuration?: number;
  /**
  * The hour of the upgrade time start, for example: 10:00 or 20:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#upgrade_time_hour InextEmbeddedProfile#upgrade_time_hour}
  */
  readonly upgradeTimeHour?: string;
  /**
  * The schedule type in case upgrade mode is scheduled: DaysInWeek, DaysInMonth or Daily
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#upgrade_time_schedule_type InextEmbeddedProfile#upgrade_time_schedule_type}
  */
  readonly upgradeTimeScheduleType?: string;
  /**
  * The week days of the upgrade time schedule: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#upgrade_time_week_days InextEmbeddedProfile#upgrade_time_week_days}
  */
  readonly upgradeTimeWeekDays?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile inext_embedded_profile}
*/
export class InextEmbeddedProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_embedded_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextEmbeddedProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextEmbeddedProfile to import
  * @param importFromId The id of the existing InextEmbeddedProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextEmbeddedProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_embedded_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_embedded_profile inext_embedded_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextEmbeddedProfileConfig
  */
  public constructor(scope: Construct, id: string, config: InextEmbeddedProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_embedded_profile',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalSettings = config.additionalSettings;
    this._definedApplicationsOnly = config.definedApplicationsOnly;
    this._maxNumberOfAgents = config.maxNumberOfAgents;
    this._name = config.name;
    this._upgradeMode = config.upgradeMode;
    this._upgradeTimeDays = config.upgradeTimeDays;
    this._upgradeTimeDuration = config.upgradeTimeDuration;
    this._upgradeTimeHour = config.upgradeTimeHour;
    this._upgradeTimeScheduleType = config.upgradeTimeScheduleType;
    this._upgradeTimeWeekDays = config.upgradeTimeWeekDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_settings - computed: false, optional: true, required: false
  private _additionalSettings?: { [key: string]: string }; 
  public get additionalSettings() {
    return this.getStringMapAttribute('additional_settings');
  }
  public set additionalSettings(value: { [key: string]: string }) {
    this._additionalSettings = value;
  }
  public resetAdditionalSettings() {
    this._additionalSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSettingsInput() {
    return this._additionalSettings;
  }

  // additional_settings_ids - computed: true, optional: false, required: false
  public get additionalSettingsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_settings_ids'));
  }

  // authentication_token - computed: true, optional: false, required: false
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }

  // defined_applications_only - computed: true, optional: true, required: false
  private _definedApplicationsOnly?: boolean | cdktf.IResolvable; 
  public get definedApplicationsOnly() {
    return this.getBooleanAttribute('defined_applications_only');
  }
  public set definedApplicationsOnly(value: boolean | cdktf.IResolvable) {
    this._definedApplicationsOnly = value;
  }
  public resetDefinedApplicationsOnly() {
    this._definedApplicationsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedApplicationsOnlyInput() {
    return this._definedApplicationsOnly;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_number_of_agents - computed: false, optional: true, required: false
  private _maxNumberOfAgents?: number; 
  public get maxNumberOfAgents() {
    return this.getNumberAttribute('max_number_of_agents');
  }
  public set maxNumberOfAgents(value: number) {
    this._maxNumberOfAgents = value;
  }
  public resetMaxNumberOfAgents() {
    this._maxNumberOfAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfAgentsInput() {
    return this._maxNumberOfAgents;
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

  // profile_type - computed: true, optional: false, required: false
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }

  // upgrade_time_days - computed: false, optional: true, required: false
  private _upgradeTimeDays?: number[]; 
  public get upgradeTimeDays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('upgrade_time_days')));
  }
  public set upgradeTimeDays(value: number[]) {
    this._upgradeTimeDays = value;
  }
  public resetUpgradeTimeDays() {
    this._upgradeTimeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeDaysInput() {
    return this._upgradeTimeDays;
  }

  // upgrade_time_duration - computed: false, optional: true, required: false
  private _upgradeTimeDuration?: number; 
  public get upgradeTimeDuration() {
    return this.getNumberAttribute('upgrade_time_duration');
  }
  public set upgradeTimeDuration(value: number) {
    this._upgradeTimeDuration = value;
  }
  public resetUpgradeTimeDuration() {
    this._upgradeTimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeDurationInput() {
    return this._upgradeTimeDuration;
  }

  // upgrade_time_hour - computed: false, optional: true, required: false
  private _upgradeTimeHour?: string; 
  public get upgradeTimeHour() {
    return this.getStringAttribute('upgrade_time_hour');
  }
  public set upgradeTimeHour(value: string) {
    this._upgradeTimeHour = value;
  }
  public resetUpgradeTimeHour() {
    this._upgradeTimeHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeHourInput() {
    return this._upgradeTimeHour;
  }

  // upgrade_time_schedule_type - computed: false, optional: true, required: false
  private _upgradeTimeScheduleType?: string; 
  public get upgradeTimeScheduleType() {
    return this.getStringAttribute('upgrade_time_schedule_type');
  }
  public set upgradeTimeScheduleType(value: string) {
    this._upgradeTimeScheduleType = value;
  }
  public resetUpgradeTimeScheduleType() {
    this._upgradeTimeScheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeScheduleTypeInput() {
    return this._upgradeTimeScheduleType;
  }

  // upgrade_time_week_days - computed: false, optional: true, required: false
  private _upgradeTimeWeekDays?: string[]; 
  public get upgradeTimeWeekDays() {
    return cdktf.Fn.tolist(this.getListAttribute('upgrade_time_week_days'));
  }
  public set upgradeTimeWeekDays(value: string[]) {
    this._upgradeTimeWeekDays = value;
  }
  public resetUpgradeTimeWeekDays() {
    this._upgradeTimeWeekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeWeekDaysInput() {
    return this._upgradeTimeWeekDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalSettings),
      defined_applications_only: cdktf.booleanToTerraform(this._definedApplicationsOnly),
      max_number_of_agents: cdktf.numberToTerraform(this._maxNumberOfAgents),
      name: cdktf.stringToTerraform(this._name),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      upgrade_time_days: cdktf.listMapper(cdktf.numberToTerraform, false)(this._upgradeTimeDays),
      upgrade_time_duration: cdktf.numberToTerraform(this._upgradeTimeDuration),
      upgrade_time_hour: cdktf.stringToTerraform(this._upgradeTimeHour),
      upgrade_time_schedule_type: cdktf.stringToTerraform(this._upgradeTimeScheduleType),
      upgrade_time_week_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._upgradeTimeWeekDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      defined_applications_only: {
        value: cdktf.booleanToHclTerraform(this._definedApplicationsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_number_of_agents: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfAgents),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._upgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time_days: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._upgradeTimeDays),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      upgrade_time_duration: {
        value: cdktf.numberToHclTerraform(this._upgradeTimeDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_time_hour: {
        value: cdktf.stringToHclTerraform(this._upgradeTimeHour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time_schedule_type: {
        value: cdktf.stringToHclTerraform(this._upgradeTimeScheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time_week_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._upgradeTimeWeekDays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
