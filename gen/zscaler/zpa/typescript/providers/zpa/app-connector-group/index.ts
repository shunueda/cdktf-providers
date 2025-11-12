// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConnectorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#city_country AppConnectorGroup#city_country}
  */
  readonly cityCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#country_code AppConnectorGroup#country_code}
  */
  readonly countryCode?: string;
  /**
  * Description of the App Connector Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#description AppConnectorGroup#description}
  */
  readonly description?: string;
  /**
  * Whether to enable IPv4 or IPv6, or both, for DNS resolution of all applications in the App Connector Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#dns_query_type AppConnectorGroup#dns_query_type}
  */
  readonly dnsQueryType?: string;
  /**
  * Whether this App Connector Group is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#enabled AppConnectorGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Latitude of the App Connector Group. Integer or decimal. With values in the range of -90 to 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#latitude AppConnectorGroup#latitude}
  */
  readonly latitude: string;
  /**
  * Location of the App Connector Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#location AppConnectorGroup#location}
  */
  readonly location: string;
  /**
  * Longitude of the App Connector Group. Integer or decimal. With values in the range of -180 to 180
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#longitude AppConnectorGroup#longitude}
  */
  readonly longitude: string;
  /**
  * Whether or not the App Connector Group is configured for the Log Streaming Service (LSS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#lss_app_connector_group AppConnectorGroup#lss_app_connector_group}
  */
  readonly lssAppConnectorGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#microtenant_id AppConnectorGroup#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the App Connector Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#name AppConnectorGroup#name}
  */
  readonly name: string;
  /**
  * Whether the default version profile of the App Connector Group is applied or overridden. Supported values: true, false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#override_version_profile AppConnectorGroup#override_version_profile}
  */
  readonly overrideVersionProfile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#pra_enabled AppConnectorGroup#pra_enabled}
  */
  readonly praEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether TCP Quick Acknowledgement is enabled or disabled for the application. The tcpQuickAckApp, tcpQuickAckAssistant, and tcpQuickAckReadAssistant fields must all share the same value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#tcp_quick_ack_app AppConnectorGroup#tcp_quick_ack_app}
  */
  readonly tcpQuickAckApp?: boolean | cdktf.IResolvable;
  /**
  * Whether TCP Quick Acknowledgement is enabled or disabled for the application. The tcpQuickAckApp, tcpQuickAckAssistant, and tcpQuickAckReadAssistant fields must all share the same value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#tcp_quick_ack_assistant AppConnectorGroup#tcp_quick_ack_assistant}
  */
  readonly tcpQuickAckAssistant?: boolean | cdktf.IResolvable;
  /**
  * Whether TCP Quick Acknowledgement is enabled or disabled for the application. The tcpQuickAckApp, tcpQuickAckAssistant, and tcpQuickAckReadAssistant fields must all share the same value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#tcp_quick_ack_read_assistant AppConnectorGroup#tcp_quick_ack_read_assistant}
  */
  readonly tcpQuickAckReadAssistant?: boolean | cdktf.IResolvable;
  /**
  * App Connectors in this group will attempt to update to a newer version of the software during this specified day. List of valid days (i.e., Sunday, Monday)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#upgrade_day AppConnectorGroup#upgrade_day}
  */
  readonly upgradeDay?: string;
  /**
  * App Connectors in this group will attempt to update to a newer version of the software during this specified time. Integer in seconds (i.e., -66600). The integer should be greater than or equal to 0 and less than 86400, in 15 minute intervals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#upgrade_time_in_secs AppConnectorGroup#upgrade_time_in_secs}
  */
  readonly upgradeTimeInSecs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#use_in_dr_mode AppConnectorGroup#use_in_dr_mode}
  */
  readonly useInDrMode?: boolean | cdktf.IResolvable;
  /**
  * ID of the version profile. To learn more, see Version Profile Use Cases. This value is required, if the value for overrideVersionProfile is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#version_profile_id AppConnectorGroup#version_profile_id}
  */
  readonly versionProfileId?: string;
  /**
  * Name of the version profile. To learn more, see Version Profile Use Cases. This value is required, if the value for overrideVersionProfile is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#version_profile_name AppConnectorGroup#version_profile_name}
  */
  readonly versionProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#waf_disabled AppConnectorGroup#waf_disabled}
  */
  readonly wafDisabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group zpa_app_connector_group}
*/
export class AppConnectorGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_app_connector_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConnectorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConnectorGroup to import
  * @param importFromId The id of the existing AppConnectorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConnectorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_app_connector_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/app_connector_group zpa_app_connector_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConnectorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AppConnectorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_app_connector_group',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cityCountry = config.cityCountry;
    this._countryCode = config.countryCode;
    this._description = config.description;
    this._dnsQueryType = config.dnsQueryType;
    this._enabled = config.enabled;
    this._latitude = config.latitude;
    this._location = config.location;
    this._longitude = config.longitude;
    this._lssAppConnectorGroup = config.lssAppConnectorGroup;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._overrideVersionProfile = config.overrideVersionProfile;
    this._praEnabled = config.praEnabled;
    this._tcpQuickAckApp = config.tcpQuickAckApp;
    this._tcpQuickAckAssistant = config.tcpQuickAckAssistant;
    this._tcpQuickAckReadAssistant = config.tcpQuickAckReadAssistant;
    this._upgradeDay = config.upgradeDay;
    this._upgradeTimeInSecs = config.upgradeTimeInSecs;
    this._useInDrMode = config.useInDrMode;
    this._versionProfileId = config.versionProfileId;
    this._versionProfileName = config.versionProfileName;
    this._wafDisabled = config.wafDisabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city_country - computed: false, optional: true, required: false
  private _cityCountry?: string; 
  public get cityCountry() {
    return this.getStringAttribute('city_country');
  }
  public set cityCountry(value: string) {
    this._cityCountry = value;
  }
  public resetCityCountry() {
    this._cityCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityCountryInput() {
    return this._cityCountry;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dns_query_type - computed: false, optional: true, required: false
  private _dnsQueryType?: string; 
  public get dnsQueryType() {
    return this.getStringAttribute('dns_query_type');
  }
  public set dnsQueryType(value: string) {
    this._dnsQueryType = value;
  }
  public resetDnsQueryType() {
    this._dnsQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeInput() {
    return this._dnsQueryType;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // lss_app_connector_group - computed: false, optional: true, required: false
  private _lssAppConnectorGroup?: boolean | cdktf.IResolvable; 
  public get lssAppConnectorGroup() {
    return this.getBooleanAttribute('lss_app_connector_group');
  }
  public set lssAppConnectorGroup(value: boolean | cdktf.IResolvable) {
    this._lssAppConnectorGroup = value;
  }
  public resetLssAppConnectorGroup() {
    this._lssAppConnectorGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lssAppConnectorGroupInput() {
    return this._lssAppConnectorGroup;
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // override_version_profile - computed: true, optional: true, required: false
  private _overrideVersionProfile?: boolean | cdktf.IResolvable; 
  public get overrideVersionProfile() {
    return this.getBooleanAttribute('override_version_profile');
  }
  public set overrideVersionProfile(value: boolean | cdktf.IResolvable) {
    this._overrideVersionProfile = value;
  }
  public resetOverrideVersionProfile() {
    this._overrideVersionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVersionProfileInput() {
    return this._overrideVersionProfile;
  }

  // pra_enabled - computed: true, optional: true, required: false
  private _praEnabled?: boolean | cdktf.IResolvable; 
  public get praEnabled() {
    return this.getBooleanAttribute('pra_enabled');
  }
  public set praEnabled(value: boolean | cdktf.IResolvable) {
    this._praEnabled = value;
  }
  public resetPraEnabled() {
    this._praEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get praEnabledInput() {
    return this._praEnabled;
  }

  // tcp_quick_ack_app - computed: true, optional: true, required: false
  private _tcpQuickAckApp?: boolean | cdktf.IResolvable; 
  public get tcpQuickAckApp() {
    return this.getBooleanAttribute('tcp_quick_ack_app');
  }
  public set tcpQuickAckApp(value: boolean | cdktf.IResolvable) {
    this._tcpQuickAckApp = value;
  }
  public resetTcpQuickAckApp() {
    this._tcpQuickAckApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpQuickAckAppInput() {
    return this._tcpQuickAckApp;
  }

  // tcp_quick_ack_assistant - computed: true, optional: true, required: false
  private _tcpQuickAckAssistant?: boolean | cdktf.IResolvable; 
  public get tcpQuickAckAssistant() {
    return this.getBooleanAttribute('tcp_quick_ack_assistant');
  }
  public set tcpQuickAckAssistant(value: boolean | cdktf.IResolvable) {
    this._tcpQuickAckAssistant = value;
  }
  public resetTcpQuickAckAssistant() {
    this._tcpQuickAckAssistant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpQuickAckAssistantInput() {
    return this._tcpQuickAckAssistant;
  }

  // tcp_quick_ack_read_assistant - computed: true, optional: true, required: false
  private _tcpQuickAckReadAssistant?: boolean | cdktf.IResolvable; 
  public get tcpQuickAckReadAssistant() {
    return this.getBooleanAttribute('tcp_quick_ack_read_assistant');
  }
  public set tcpQuickAckReadAssistant(value: boolean | cdktf.IResolvable) {
    this._tcpQuickAckReadAssistant = value;
  }
  public resetTcpQuickAckReadAssistant() {
    this._tcpQuickAckReadAssistant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpQuickAckReadAssistantInput() {
    return this._tcpQuickAckReadAssistant;
  }

  // upgrade_day - computed: false, optional: true, required: false
  private _upgradeDay?: string; 
  public get upgradeDay() {
    return this.getStringAttribute('upgrade_day');
  }
  public set upgradeDay(value: string) {
    this._upgradeDay = value;
  }
  public resetUpgradeDay() {
    this._upgradeDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDayInput() {
    return this._upgradeDay;
  }

  // upgrade_time_in_secs - computed: false, optional: true, required: false
  private _upgradeTimeInSecs?: string; 
  public get upgradeTimeInSecs() {
    return this.getStringAttribute('upgrade_time_in_secs');
  }
  public set upgradeTimeInSecs(value: string) {
    this._upgradeTimeInSecs = value;
  }
  public resetUpgradeTimeInSecs() {
    this._upgradeTimeInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInSecsInput() {
    return this._upgradeTimeInSecs;
  }

  // use_in_dr_mode - computed: true, optional: true, required: false
  private _useInDrMode?: boolean | cdktf.IResolvable; 
  public get useInDrMode() {
    return this.getBooleanAttribute('use_in_dr_mode');
  }
  public set useInDrMode(value: boolean | cdktf.IResolvable) {
    this._useInDrMode = value;
  }
  public resetUseInDrMode() {
    this._useInDrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInDrModeInput() {
    return this._useInDrMode;
  }

  // version_profile_id - computed: true, optional: true, required: false
  private _versionProfileId?: string; 
  public get versionProfileId() {
    return this.getStringAttribute('version_profile_id');
  }
  public set versionProfileId(value: string) {
    this._versionProfileId = value;
  }
  public resetVersionProfileId() {
    this._versionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionProfileIdInput() {
    return this._versionProfileId;
  }

  // version_profile_name - computed: true, optional: true, required: false
  private _versionProfileName?: string; 
  public get versionProfileName() {
    return this.getStringAttribute('version_profile_name');
  }
  public set versionProfileName(value: string) {
    this._versionProfileName = value;
  }
  public resetVersionProfileName() {
    this._versionProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionProfileNameInput() {
    return this._versionProfileName;
  }

  // waf_disabled - computed: true, optional: true, required: false
  private _wafDisabled?: boolean | cdktf.IResolvable; 
  public get wafDisabled() {
    return this.getBooleanAttribute('waf_disabled');
  }
  public set wafDisabled(value: boolean | cdktf.IResolvable) {
    this._wafDisabled = value;
  }
  public resetWafDisabled() {
    this._wafDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafDisabledInput() {
    return this._wafDisabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city_country: cdktf.stringToTerraform(this._cityCountry),
      country_code: cdktf.stringToTerraform(this._countryCode),
      description: cdktf.stringToTerraform(this._description),
      dns_query_type: cdktf.stringToTerraform(this._dnsQueryType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      latitude: cdktf.stringToTerraform(this._latitude),
      location: cdktf.stringToTerraform(this._location),
      longitude: cdktf.stringToTerraform(this._longitude),
      lss_app_connector_group: cdktf.booleanToTerraform(this._lssAppConnectorGroup),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      override_version_profile: cdktf.booleanToTerraform(this._overrideVersionProfile),
      pra_enabled: cdktf.booleanToTerraform(this._praEnabled),
      tcp_quick_ack_app: cdktf.booleanToTerraform(this._tcpQuickAckApp),
      tcp_quick_ack_assistant: cdktf.booleanToTerraform(this._tcpQuickAckAssistant),
      tcp_quick_ack_read_assistant: cdktf.booleanToTerraform(this._tcpQuickAckReadAssistant),
      upgrade_day: cdktf.stringToTerraform(this._upgradeDay),
      upgrade_time_in_secs: cdktf.stringToTerraform(this._upgradeTimeInSecs),
      use_in_dr_mode: cdktf.booleanToTerraform(this._useInDrMode),
      version_profile_id: cdktf.stringToTerraform(this._versionProfileId),
      version_profile_name: cdktf.stringToTerraform(this._versionProfileName),
      waf_disabled: cdktf.booleanToTerraform(this._wafDisabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city_country: {
        value: cdktf.stringToHclTerraform(this._cityCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_query_type: {
        value: cdktf.stringToHclTerraform(this._dnsQueryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      latitude: {
        value: cdktf.stringToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude: {
        value: cdktf.stringToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lss_app_connector_group: {
        value: cdktf.booleanToHclTerraform(this._lssAppConnectorGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      override_version_profile: {
        value: cdktf.booleanToHclTerraform(this._overrideVersionProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pra_enabled: {
        value: cdktf.booleanToHclTerraform(this._praEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_quick_ack_app: {
        value: cdktf.booleanToHclTerraform(this._tcpQuickAckApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_quick_ack_assistant: {
        value: cdktf.booleanToHclTerraform(this._tcpQuickAckAssistant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_quick_ack_read_assistant: {
        value: cdktf.booleanToHclTerraform(this._tcpQuickAckReadAssistant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upgrade_day: {
        value: cdktf.stringToHclTerraform(this._upgradeDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time_in_secs: {
        value: cdktf.stringToHclTerraform(this._upgradeTimeInSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_in_dr_mode: {
        value: cdktf.booleanToHclTerraform(this._useInDrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_profile_id: {
        value: cdktf.stringToHclTerraform(this._versionProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_profile_name: {
        value: cdktf.stringToHclTerraform(this._versionProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_disabled: {
        value: cdktf.booleanToHclTerraform(this._wafDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
