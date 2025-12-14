// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextAppsecGatewayProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls the settings of the connected agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#additional_settings InextAppsecGatewayProfile#additional_settings}
  */
  readonly additionalSettings?: { [key: string]: string };
  /**
  * The type of the certificate used for the profile: Vault or Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#certificate_type InextAppsecGatewayProfile#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Allow traffic upon internal failures or high CPU utilization: true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#fail_open_inspection InextAppsecGatewayProfile#fail_open_inspection}
  */
  readonly failOpenInspection?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of agents that can be connected to this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#max_number_of_agents InextAppsecGatewayProfile#max_number_of_agents}
  */
  readonly maxNumberOfAgents?: number;
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#name InextAppsecGatewayProfile#name}
  */
  readonly name: string;
  /**
  * The environment of deployment for the AppSec VM: Aws, Azure, VMware or HyperV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#profile_sub_type InextAppsecGatewayProfile#profile_sub_type}
  */
  readonly profileSubType: string;
  /**
  * Sets the reverse proxy settings of linked assets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#reverseproxy_additional_settings InextAppsecGatewayProfile#reverseproxy_additional_settings}
  */
  readonly reverseproxyAdditionalSettings?: { [key: string]: string };
  /**
  * Sets the reverse proxy upstream timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#reverseproxy_upstream_timeout InextAppsecGatewayProfile#reverseproxy_upstream_timeout}
  */
  readonly reverseproxyUpstreamTimeout?: number;
  /**
  * The upgrade mode of the profile: Automatic, Manual or Scheduled.
  * The default is Automatic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#upgrade_mode InextAppsecGatewayProfile#upgrade_mode}
  */
  readonly upgradeMode?: string;
  /**
  * The days of the month of the upgrade time schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#upgrade_time_days InextAppsecGatewayProfile#upgrade_time_days}
  */
  readonly upgradeTimeDays?: number[];
  /**
  * The duration of the upgrade in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#upgrade_time_duration InextAppsecGatewayProfile#upgrade_time_duration}
  */
  readonly upgradeTimeDuration?: number;
  /**
  * The hour of the upgrade time start, for example: 10:00 or 20:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#upgrade_time_hour InextAppsecGatewayProfile#upgrade_time_hour}
  */
  readonly upgradeTimeHour?: string;
  /**
  * The schedule type in case upgrade mode is scheduled: DaysInWeek, DaysInMonth or Daily
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#upgrade_time_schedule_type InextAppsecGatewayProfile#upgrade_time_schedule_type}
  */
  readonly upgradeTimeScheduleType?: string;
  /**
  * The week days of the upgrade time schedule: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#upgrade_time_week_days InextAppsecGatewayProfile#upgrade_time_week_days}
  */
  readonly upgradeTimeWeekDays?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile inext_appsec_gateway_profile}
*/
export class InextAppsecGatewayProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_appsec_gateway_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextAppsecGatewayProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextAppsecGatewayProfile to import
  * @param importFromId The id of the existing InextAppsecGatewayProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextAppsecGatewayProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_appsec_gateway_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.1/docs/resources/inext_appsec_gateway_profile inext_appsec_gateway_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextAppsecGatewayProfileConfig
  */
  public constructor(scope: Construct, id: string, config: InextAppsecGatewayProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_appsec_gateway_profile',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
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
    this._certificateType = config.certificateType;
    this._failOpenInspection = config.failOpenInspection;
    this._maxNumberOfAgents = config.maxNumberOfAgents;
    this._name = config.name;
    this._profileSubType = config.profileSubType;
    this._reverseproxyAdditionalSettings = config.reverseproxyAdditionalSettings;
    this._reverseproxyUpstreamTimeout = config.reverseproxyUpstreamTimeout;
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

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // fail_open_inspection - computed: false, optional: true, required: false
  private _failOpenInspection?: boolean | cdktf.IResolvable; 
  public get failOpenInspection() {
    return this.getBooleanAttribute('fail_open_inspection');
  }
  public set failOpenInspection(value: boolean | cdktf.IResolvable) {
    this._failOpenInspection = value;
  }
  public resetFailOpenInspection() {
    this._failOpenInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInspectionInput() {
    return this._failOpenInspection;
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

  // profile_sub_type - computed: false, optional: false, required: true
  private _profileSubType?: string; 
  public get profileSubType() {
    return this.getStringAttribute('profile_sub_type');
  }
  public set profileSubType(value: string) {
    this._profileSubType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileSubTypeInput() {
    return this._profileSubType;
  }

  // profile_type - computed: true, optional: false, required: false
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }

  // reverseproxy_additional_settings - computed: false, optional: true, required: false
  private _reverseproxyAdditionalSettings?: { [key: string]: string }; 
  public get reverseproxyAdditionalSettings() {
    return this.getStringMapAttribute('reverseproxy_additional_settings');
  }
  public set reverseproxyAdditionalSettings(value: { [key: string]: string }) {
    this._reverseproxyAdditionalSettings = value;
  }
  public resetReverseproxyAdditionalSettings() {
    this._reverseproxyAdditionalSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseproxyAdditionalSettingsInput() {
    return this._reverseproxyAdditionalSettings;
  }

  // reverseproxy_additional_settings_ids - computed: true, optional: false, required: false
  public get reverseproxyAdditionalSettingsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('reverseproxy_additional_settings_ids'));
  }

  // reverseproxy_upstream_timeout - computed: false, optional: true, required: false
  private _reverseproxyUpstreamTimeout?: number; 
  public get reverseproxyUpstreamTimeout() {
    return this.getNumberAttribute('reverseproxy_upstream_timeout');
  }
  public set reverseproxyUpstreamTimeout(value: number) {
    this._reverseproxyUpstreamTimeout = value;
  }
  public resetReverseproxyUpstreamTimeout() {
    this._reverseproxyUpstreamTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseproxyUpstreamTimeoutInput() {
    return this._reverseproxyUpstreamTimeout;
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
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      fail_open_inspection: cdktf.booleanToTerraform(this._failOpenInspection),
      max_number_of_agents: cdktf.numberToTerraform(this._maxNumberOfAgents),
      name: cdktf.stringToTerraform(this._name),
      profile_sub_type: cdktf.stringToTerraform(this._profileSubType),
      reverseproxy_additional_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._reverseproxyAdditionalSettings),
      reverseproxy_upstream_timeout: cdktf.numberToTerraform(this._reverseproxyUpstreamTimeout),
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
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_open_inspection: {
        value: cdktf.booleanToHclTerraform(this._failOpenInspection),
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
      profile_sub_type: {
        value: cdktf.stringToHclTerraform(this._profileSubType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverseproxy_additional_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._reverseproxyAdditionalSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      reverseproxy_upstream_timeout: {
        value: cdktf.numberToHclTerraform(this._reverseproxyUpstreamTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
