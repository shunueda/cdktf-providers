// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configures if the API token is allowed to configure agent run mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_agent_run_mode ApiToken#can_configure_agent_run_mode}
  */
  readonly canConfigureAgentRunMode?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_agents ApiToken#can_configure_agents}
  */
  readonly canConfigureAgents?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure API tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_api_tokens ApiToken#can_configure_api_tokens}
  */
  readonly canConfigureApiTokens?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_applications ApiToken#can_configure_applications}
  */
  readonly canConfigureApplications?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure authentication methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_authentication_methods ApiToken#can_configure_authentication_methods}
  */
  readonly canConfigureAuthenticationMethods?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure custom alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_custom_alerts ApiToken#can_configure_custom_alerts}
  */
  readonly canConfigureCustomAlerts?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure End User Monitoring applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_eum_applications ApiToken#can_configure_eum_applications}
  */
  readonly canConfigureEumApplications?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure global alert configs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_global_alert_configs ApiToken#can_configure_global_alert_configs}
  */
  readonly canConfigureGlobalAlertConfigs?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure global alert payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_global_alert_payload ApiToken#can_configure_global_alert_payload}
  */
  readonly canConfigureGlobalAlertPayload?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure integrations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_integrations ApiToken#can_configure_integrations}
  */
  readonly canConfigureIntegrations?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure log management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_log_management ApiToken#can_configure_log_management}
  */
  readonly canConfigureLogManagement?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure Mobile App Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_mobile_app_monitoring ApiToken#can_configure_mobile_app_monitoring}
  */
  readonly canConfigureMobileAppMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure releases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_releases ApiToken#can_configure_releases}
  */
  readonly canConfigureReleases?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure service level indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_service_level_indicators ApiToken#can_configure_service_level_indicators}
  */
  readonly canConfigureServiceLevelIndicators?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure service mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_service_mapping ApiToken#can_configure_service_mapping}
  */
  readonly canConfigureServiceMapping?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure session settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_session_settings ApiToken#can_configure_session_settings}
  */
  readonly canConfigureSessionSettings?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure teams (Groups)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_teams ApiToken#can_configure_teams}
  */
  readonly canConfigureTeams?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to configure users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_configure_users ApiToken#can_configure_users}
  */
  readonly canConfigureUsers?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to create public custom dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_create_public_custom_dashboards ApiToken#can_create_public_custom_dashboards}
  */
  readonly canCreatePublicCustomDashboards?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to edit all accessible custom dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_edit_all_accessible_custom_dashboards ApiToken#can_edit_all_accessible_custom_dashboards}
  */
  readonly canEditAllAccessibleCustomDashboards?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to install new agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_install_new_agents ApiToken#can_install_new_agents}
  */
  readonly canInstallNewAgents?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to see onPremise license information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_see_on_premise_license_information ApiToken#can_see_on_premise_license_information}
  */
  readonly canSeeOnPremiseLicenseInformation?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to see usage information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_see_usage_information ApiToken#can_see_usage_information}
  */
  readonly canSeeUsageInformation?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to view account and billing information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_view_account_and_billing_information ApiToken#can_view_account_and_billing_information}
  */
  readonly canViewAccountAndBillingInformation?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to view the audit log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_view_audit_log ApiToken#can_view_audit_log}
  */
  readonly canViewAuditLog?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to view logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_view_logs ApiToken#can_view_logs}
  */
  readonly canViewLogs?: boolean | cdktf.IResolvable;
  /**
  * Configures if the API token is allowed to view trace details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#can_view_trace_details ApiToken#can_view_trace_details}
  */
  readonly canViewTraceDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#id ApiToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#name ApiToken#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token instana_api_token}
*/
export class ApiToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_api_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiToken to import
  * @param importFromId The id of the existing ApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_api_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/api_token instana_api_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ApiTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_api_token',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canConfigureAgentRunMode = config.canConfigureAgentRunMode;
    this._canConfigureAgents = config.canConfigureAgents;
    this._canConfigureApiTokens = config.canConfigureApiTokens;
    this._canConfigureApplications = config.canConfigureApplications;
    this._canConfigureAuthenticationMethods = config.canConfigureAuthenticationMethods;
    this._canConfigureCustomAlerts = config.canConfigureCustomAlerts;
    this._canConfigureEumApplications = config.canConfigureEumApplications;
    this._canConfigureGlobalAlertConfigs = config.canConfigureGlobalAlertConfigs;
    this._canConfigureGlobalAlertPayload = config.canConfigureGlobalAlertPayload;
    this._canConfigureIntegrations = config.canConfigureIntegrations;
    this._canConfigureLogManagement = config.canConfigureLogManagement;
    this._canConfigureMobileAppMonitoring = config.canConfigureMobileAppMonitoring;
    this._canConfigureReleases = config.canConfigureReleases;
    this._canConfigureServiceLevelIndicators = config.canConfigureServiceLevelIndicators;
    this._canConfigureServiceMapping = config.canConfigureServiceMapping;
    this._canConfigureSessionSettings = config.canConfigureSessionSettings;
    this._canConfigureTeams = config.canConfigureTeams;
    this._canConfigureUsers = config.canConfigureUsers;
    this._canCreatePublicCustomDashboards = config.canCreatePublicCustomDashboards;
    this._canEditAllAccessibleCustomDashboards = config.canEditAllAccessibleCustomDashboards;
    this._canInstallNewAgents = config.canInstallNewAgents;
    this._canSeeOnPremiseLicenseInformation = config.canSeeOnPremiseLicenseInformation;
    this._canSeeUsageInformation = config.canSeeUsageInformation;
    this._canViewAccountAndBillingInformation = config.canViewAccountAndBillingInformation;
    this._canViewAuditLog = config.canViewAuditLog;
    this._canViewLogs = config.canViewLogs;
    this._canViewTraceDetails = config.canViewTraceDetails;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_granting_token - computed: true, optional: false, required: false
  public get accessGrantingToken() {
    return this.getStringAttribute('access_granting_token');
  }

  // can_configure_agent_run_mode - computed: false, optional: true, required: false
  private _canConfigureAgentRunMode?: boolean | cdktf.IResolvable; 
  public get canConfigureAgentRunMode() {
    return this.getBooleanAttribute('can_configure_agent_run_mode');
  }
  public set canConfigureAgentRunMode(value: boolean | cdktf.IResolvable) {
    this._canConfigureAgentRunMode = value;
  }
  public resetCanConfigureAgentRunMode() {
    this._canConfigureAgentRunMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureAgentRunModeInput() {
    return this._canConfigureAgentRunMode;
  }

  // can_configure_agents - computed: false, optional: true, required: false
  private _canConfigureAgents?: boolean | cdktf.IResolvable; 
  public get canConfigureAgents() {
    return this.getBooleanAttribute('can_configure_agents');
  }
  public set canConfigureAgents(value: boolean | cdktf.IResolvable) {
    this._canConfigureAgents = value;
  }
  public resetCanConfigureAgents() {
    this._canConfigureAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureAgentsInput() {
    return this._canConfigureAgents;
  }

  // can_configure_api_tokens - computed: false, optional: true, required: false
  private _canConfigureApiTokens?: boolean | cdktf.IResolvable; 
  public get canConfigureApiTokens() {
    return this.getBooleanAttribute('can_configure_api_tokens');
  }
  public set canConfigureApiTokens(value: boolean | cdktf.IResolvable) {
    this._canConfigureApiTokens = value;
  }
  public resetCanConfigureApiTokens() {
    this._canConfigureApiTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureApiTokensInput() {
    return this._canConfigureApiTokens;
  }

  // can_configure_applications - computed: false, optional: true, required: false
  private _canConfigureApplications?: boolean | cdktf.IResolvable; 
  public get canConfigureApplications() {
    return this.getBooleanAttribute('can_configure_applications');
  }
  public set canConfigureApplications(value: boolean | cdktf.IResolvable) {
    this._canConfigureApplications = value;
  }
  public resetCanConfigureApplications() {
    this._canConfigureApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureApplicationsInput() {
    return this._canConfigureApplications;
  }

  // can_configure_authentication_methods - computed: false, optional: true, required: false
  private _canConfigureAuthenticationMethods?: boolean | cdktf.IResolvable; 
  public get canConfigureAuthenticationMethods() {
    return this.getBooleanAttribute('can_configure_authentication_methods');
  }
  public set canConfigureAuthenticationMethods(value: boolean | cdktf.IResolvable) {
    this._canConfigureAuthenticationMethods = value;
  }
  public resetCanConfigureAuthenticationMethods() {
    this._canConfigureAuthenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureAuthenticationMethodsInput() {
    return this._canConfigureAuthenticationMethods;
  }

  // can_configure_custom_alerts - computed: false, optional: true, required: false
  private _canConfigureCustomAlerts?: boolean | cdktf.IResolvable; 
  public get canConfigureCustomAlerts() {
    return this.getBooleanAttribute('can_configure_custom_alerts');
  }
  public set canConfigureCustomAlerts(value: boolean | cdktf.IResolvable) {
    this._canConfigureCustomAlerts = value;
  }
  public resetCanConfigureCustomAlerts() {
    this._canConfigureCustomAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureCustomAlertsInput() {
    return this._canConfigureCustomAlerts;
  }

  // can_configure_eum_applications - computed: false, optional: true, required: false
  private _canConfigureEumApplications?: boolean | cdktf.IResolvable; 
  public get canConfigureEumApplications() {
    return this.getBooleanAttribute('can_configure_eum_applications');
  }
  public set canConfigureEumApplications(value: boolean | cdktf.IResolvable) {
    this._canConfigureEumApplications = value;
  }
  public resetCanConfigureEumApplications() {
    this._canConfigureEumApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureEumApplicationsInput() {
    return this._canConfigureEumApplications;
  }

  // can_configure_global_alert_configs - computed: false, optional: true, required: false
  private _canConfigureGlobalAlertConfigs?: boolean | cdktf.IResolvable; 
  public get canConfigureGlobalAlertConfigs() {
    return this.getBooleanAttribute('can_configure_global_alert_configs');
  }
  public set canConfigureGlobalAlertConfigs(value: boolean | cdktf.IResolvable) {
    this._canConfigureGlobalAlertConfigs = value;
  }
  public resetCanConfigureGlobalAlertConfigs() {
    this._canConfigureGlobalAlertConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureGlobalAlertConfigsInput() {
    return this._canConfigureGlobalAlertConfigs;
  }

  // can_configure_global_alert_payload - computed: false, optional: true, required: false
  private _canConfigureGlobalAlertPayload?: boolean | cdktf.IResolvable; 
  public get canConfigureGlobalAlertPayload() {
    return this.getBooleanAttribute('can_configure_global_alert_payload');
  }
  public set canConfigureGlobalAlertPayload(value: boolean | cdktf.IResolvable) {
    this._canConfigureGlobalAlertPayload = value;
  }
  public resetCanConfigureGlobalAlertPayload() {
    this._canConfigureGlobalAlertPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureGlobalAlertPayloadInput() {
    return this._canConfigureGlobalAlertPayload;
  }

  // can_configure_integrations - computed: false, optional: true, required: false
  private _canConfigureIntegrations?: boolean | cdktf.IResolvable; 
  public get canConfigureIntegrations() {
    return this.getBooleanAttribute('can_configure_integrations');
  }
  public set canConfigureIntegrations(value: boolean | cdktf.IResolvable) {
    this._canConfigureIntegrations = value;
  }
  public resetCanConfigureIntegrations() {
    this._canConfigureIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureIntegrationsInput() {
    return this._canConfigureIntegrations;
  }

  // can_configure_log_management - computed: false, optional: true, required: false
  private _canConfigureLogManagement?: boolean | cdktf.IResolvable; 
  public get canConfigureLogManagement() {
    return this.getBooleanAttribute('can_configure_log_management');
  }
  public set canConfigureLogManagement(value: boolean | cdktf.IResolvable) {
    this._canConfigureLogManagement = value;
  }
  public resetCanConfigureLogManagement() {
    this._canConfigureLogManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureLogManagementInput() {
    return this._canConfigureLogManagement;
  }

  // can_configure_mobile_app_monitoring - computed: false, optional: true, required: false
  private _canConfigureMobileAppMonitoring?: boolean | cdktf.IResolvable; 
  public get canConfigureMobileAppMonitoring() {
    return this.getBooleanAttribute('can_configure_mobile_app_monitoring');
  }
  public set canConfigureMobileAppMonitoring(value: boolean | cdktf.IResolvable) {
    this._canConfigureMobileAppMonitoring = value;
  }
  public resetCanConfigureMobileAppMonitoring() {
    this._canConfigureMobileAppMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureMobileAppMonitoringInput() {
    return this._canConfigureMobileAppMonitoring;
  }

  // can_configure_releases - computed: false, optional: true, required: false
  private _canConfigureReleases?: boolean | cdktf.IResolvable; 
  public get canConfigureReleases() {
    return this.getBooleanAttribute('can_configure_releases');
  }
  public set canConfigureReleases(value: boolean | cdktf.IResolvable) {
    this._canConfigureReleases = value;
  }
  public resetCanConfigureReleases() {
    this._canConfigureReleases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureReleasesInput() {
    return this._canConfigureReleases;
  }

  // can_configure_service_level_indicators - computed: false, optional: true, required: false
  private _canConfigureServiceLevelIndicators?: boolean | cdktf.IResolvable; 
  public get canConfigureServiceLevelIndicators() {
    return this.getBooleanAttribute('can_configure_service_level_indicators');
  }
  public set canConfigureServiceLevelIndicators(value: boolean | cdktf.IResolvable) {
    this._canConfigureServiceLevelIndicators = value;
  }
  public resetCanConfigureServiceLevelIndicators() {
    this._canConfigureServiceLevelIndicators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureServiceLevelIndicatorsInput() {
    return this._canConfigureServiceLevelIndicators;
  }

  // can_configure_service_mapping - computed: false, optional: true, required: false
  private _canConfigureServiceMapping?: boolean | cdktf.IResolvable; 
  public get canConfigureServiceMapping() {
    return this.getBooleanAttribute('can_configure_service_mapping');
  }
  public set canConfigureServiceMapping(value: boolean | cdktf.IResolvable) {
    this._canConfigureServiceMapping = value;
  }
  public resetCanConfigureServiceMapping() {
    this._canConfigureServiceMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureServiceMappingInput() {
    return this._canConfigureServiceMapping;
  }

  // can_configure_session_settings - computed: false, optional: true, required: false
  private _canConfigureSessionSettings?: boolean | cdktf.IResolvable; 
  public get canConfigureSessionSettings() {
    return this.getBooleanAttribute('can_configure_session_settings');
  }
  public set canConfigureSessionSettings(value: boolean | cdktf.IResolvable) {
    this._canConfigureSessionSettings = value;
  }
  public resetCanConfigureSessionSettings() {
    this._canConfigureSessionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureSessionSettingsInput() {
    return this._canConfigureSessionSettings;
  }

  // can_configure_teams - computed: false, optional: true, required: false
  private _canConfigureTeams?: boolean | cdktf.IResolvable; 
  public get canConfigureTeams() {
    return this.getBooleanAttribute('can_configure_teams');
  }
  public set canConfigureTeams(value: boolean | cdktf.IResolvable) {
    this._canConfigureTeams = value;
  }
  public resetCanConfigureTeams() {
    this._canConfigureTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureTeamsInput() {
    return this._canConfigureTeams;
  }

  // can_configure_users - computed: false, optional: true, required: false
  private _canConfigureUsers?: boolean | cdktf.IResolvable; 
  public get canConfigureUsers() {
    return this.getBooleanAttribute('can_configure_users');
  }
  public set canConfigureUsers(value: boolean | cdktf.IResolvable) {
    this._canConfigureUsers = value;
  }
  public resetCanConfigureUsers() {
    this._canConfigureUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canConfigureUsersInput() {
    return this._canConfigureUsers;
  }

  // can_create_public_custom_dashboards - computed: false, optional: true, required: false
  private _canCreatePublicCustomDashboards?: boolean | cdktf.IResolvable; 
  public get canCreatePublicCustomDashboards() {
    return this.getBooleanAttribute('can_create_public_custom_dashboards');
  }
  public set canCreatePublicCustomDashboards(value: boolean | cdktf.IResolvable) {
    this._canCreatePublicCustomDashboards = value;
  }
  public resetCanCreatePublicCustomDashboards() {
    this._canCreatePublicCustomDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreatePublicCustomDashboardsInput() {
    return this._canCreatePublicCustomDashboards;
  }

  // can_edit_all_accessible_custom_dashboards - computed: false, optional: true, required: false
  private _canEditAllAccessibleCustomDashboards?: boolean | cdktf.IResolvable; 
  public get canEditAllAccessibleCustomDashboards() {
    return this.getBooleanAttribute('can_edit_all_accessible_custom_dashboards');
  }
  public set canEditAllAccessibleCustomDashboards(value: boolean | cdktf.IResolvable) {
    this._canEditAllAccessibleCustomDashboards = value;
  }
  public resetCanEditAllAccessibleCustomDashboards() {
    this._canEditAllAccessibleCustomDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canEditAllAccessibleCustomDashboardsInput() {
    return this._canEditAllAccessibleCustomDashboards;
  }

  // can_install_new_agents - computed: false, optional: true, required: false
  private _canInstallNewAgents?: boolean | cdktf.IResolvable; 
  public get canInstallNewAgents() {
    return this.getBooleanAttribute('can_install_new_agents');
  }
  public set canInstallNewAgents(value: boolean | cdktf.IResolvable) {
    this._canInstallNewAgents = value;
  }
  public resetCanInstallNewAgents() {
    this._canInstallNewAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canInstallNewAgentsInput() {
    return this._canInstallNewAgents;
  }

  // can_see_on_premise_license_information - computed: false, optional: true, required: false
  private _canSeeOnPremiseLicenseInformation?: boolean | cdktf.IResolvable; 
  public get canSeeOnPremiseLicenseInformation() {
    return this.getBooleanAttribute('can_see_on_premise_license_information');
  }
  public set canSeeOnPremiseLicenseInformation(value: boolean | cdktf.IResolvable) {
    this._canSeeOnPremiseLicenseInformation = value;
  }
  public resetCanSeeOnPremiseLicenseInformation() {
    this._canSeeOnPremiseLicenseInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canSeeOnPremiseLicenseInformationInput() {
    return this._canSeeOnPremiseLicenseInformation;
  }

  // can_see_usage_information - computed: false, optional: true, required: false
  private _canSeeUsageInformation?: boolean | cdktf.IResolvable; 
  public get canSeeUsageInformation() {
    return this.getBooleanAttribute('can_see_usage_information');
  }
  public set canSeeUsageInformation(value: boolean | cdktf.IResolvable) {
    this._canSeeUsageInformation = value;
  }
  public resetCanSeeUsageInformation() {
    this._canSeeUsageInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canSeeUsageInformationInput() {
    return this._canSeeUsageInformation;
  }

  // can_view_account_and_billing_information - computed: false, optional: true, required: false
  private _canViewAccountAndBillingInformation?: boolean | cdktf.IResolvable; 
  public get canViewAccountAndBillingInformation() {
    return this.getBooleanAttribute('can_view_account_and_billing_information');
  }
  public set canViewAccountAndBillingInformation(value: boolean | cdktf.IResolvable) {
    this._canViewAccountAndBillingInformation = value;
  }
  public resetCanViewAccountAndBillingInformation() {
    this._canViewAccountAndBillingInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewAccountAndBillingInformationInput() {
    return this._canViewAccountAndBillingInformation;
  }

  // can_view_audit_log - computed: false, optional: true, required: false
  private _canViewAuditLog?: boolean | cdktf.IResolvable; 
  public get canViewAuditLog() {
    return this.getBooleanAttribute('can_view_audit_log');
  }
  public set canViewAuditLog(value: boolean | cdktf.IResolvable) {
    this._canViewAuditLog = value;
  }
  public resetCanViewAuditLog() {
    this._canViewAuditLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewAuditLogInput() {
    return this._canViewAuditLog;
  }

  // can_view_logs - computed: false, optional: true, required: false
  private _canViewLogs?: boolean | cdktf.IResolvable; 
  public get canViewLogs() {
    return this.getBooleanAttribute('can_view_logs');
  }
  public set canViewLogs(value: boolean | cdktf.IResolvable) {
    this._canViewLogs = value;
  }
  public resetCanViewLogs() {
    this._canViewLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewLogsInput() {
    return this._canViewLogs;
  }

  // can_view_trace_details - computed: false, optional: true, required: false
  private _canViewTraceDetails?: boolean | cdktf.IResolvable; 
  public get canViewTraceDetails() {
    return this.getBooleanAttribute('can_view_trace_details');
  }
  public set canViewTraceDetails(value: boolean | cdktf.IResolvable) {
    this._canViewTraceDetails = value;
  }
  public resetCanViewTraceDetails() {
    this._canViewTraceDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewTraceDetailsInput() {
    return this._canViewTraceDetails;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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
      can_configure_agent_run_mode: cdktf.booleanToTerraform(this._canConfigureAgentRunMode),
      can_configure_agents: cdktf.booleanToTerraform(this._canConfigureAgents),
      can_configure_api_tokens: cdktf.booleanToTerraform(this._canConfigureApiTokens),
      can_configure_applications: cdktf.booleanToTerraform(this._canConfigureApplications),
      can_configure_authentication_methods: cdktf.booleanToTerraform(this._canConfigureAuthenticationMethods),
      can_configure_custom_alerts: cdktf.booleanToTerraform(this._canConfigureCustomAlerts),
      can_configure_eum_applications: cdktf.booleanToTerraform(this._canConfigureEumApplications),
      can_configure_global_alert_configs: cdktf.booleanToTerraform(this._canConfigureGlobalAlertConfigs),
      can_configure_global_alert_payload: cdktf.booleanToTerraform(this._canConfigureGlobalAlertPayload),
      can_configure_integrations: cdktf.booleanToTerraform(this._canConfigureIntegrations),
      can_configure_log_management: cdktf.booleanToTerraform(this._canConfigureLogManagement),
      can_configure_mobile_app_monitoring: cdktf.booleanToTerraform(this._canConfigureMobileAppMonitoring),
      can_configure_releases: cdktf.booleanToTerraform(this._canConfigureReleases),
      can_configure_service_level_indicators: cdktf.booleanToTerraform(this._canConfigureServiceLevelIndicators),
      can_configure_service_mapping: cdktf.booleanToTerraform(this._canConfigureServiceMapping),
      can_configure_session_settings: cdktf.booleanToTerraform(this._canConfigureSessionSettings),
      can_configure_teams: cdktf.booleanToTerraform(this._canConfigureTeams),
      can_configure_users: cdktf.booleanToTerraform(this._canConfigureUsers),
      can_create_public_custom_dashboards: cdktf.booleanToTerraform(this._canCreatePublicCustomDashboards),
      can_edit_all_accessible_custom_dashboards: cdktf.booleanToTerraform(this._canEditAllAccessibleCustomDashboards),
      can_install_new_agents: cdktf.booleanToTerraform(this._canInstallNewAgents),
      can_see_on_premise_license_information: cdktf.booleanToTerraform(this._canSeeOnPremiseLicenseInformation),
      can_see_usage_information: cdktf.booleanToTerraform(this._canSeeUsageInformation),
      can_view_account_and_billing_information: cdktf.booleanToTerraform(this._canViewAccountAndBillingInformation),
      can_view_audit_log: cdktf.booleanToTerraform(this._canViewAuditLog),
      can_view_logs: cdktf.booleanToTerraform(this._canViewLogs),
      can_view_trace_details: cdktf.booleanToTerraform(this._canViewTraceDetails),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_configure_agent_run_mode: {
        value: cdktf.booleanToHclTerraform(this._canConfigureAgentRunMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_agents: {
        value: cdktf.booleanToHclTerraform(this._canConfigureAgents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_api_tokens: {
        value: cdktf.booleanToHclTerraform(this._canConfigureApiTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_applications: {
        value: cdktf.booleanToHclTerraform(this._canConfigureApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_authentication_methods: {
        value: cdktf.booleanToHclTerraform(this._canConfigureAuthenticationMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_custom_alerts: {
        value: cdktf.booleanToHclTerraform(this._canConfigureCustomAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_eum_applications: {
        value: cdktf.booleanToHclTerraform(this._canConfigureEumApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_global_alert_configs: {
        value: cdktf.booleanToHclTerraform(this._canConfigureGlobalAlertConfigs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_global_alert_payload: {
        value: cdktf.booleanToHclTerraform(this._canConfigureGlobalAlertPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_integrations: {
        value: cdktf.booleanToHclTerraform(this._canConfigureIntegrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_log_management: {
        value: cdktf.booleanToHclTerraform(this._canConfigureLogManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_mobile_app_monitoring: {
        value: cdktf.booleanToHclTerraform(this._canConfigureMobileAppMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_releases: {
        value: cdktf.booleanToHclTerraform(this._canConfigureReleases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_service_level_indicators: {
        value: cdktf.booleanToHclTerraform(this._canConfigureServiceLevelIndicators),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_service_mapping: {
        value: cdktf.booleanToHclTerraform(this._canConfigureServiceMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_session_settings: {
        value: cdktf.booleanToHclTerraform(this._canConfigureSessionSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_teams: {
        value: cdktf.booleanToHclTerraform(this._canConfigureTeams),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_configure_users: {
        value: cdktf.booleanToHclTerraform(this._canConfigureUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_create_public_custom_dashboards: {
        value: cdktf.booleanToHclTerraform(this._canCreatePublicCustomDashboards),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_edit_all_accessible_custom_dashboards: {
        value: cdktf.booleanToHclTerraform(this._canEditAllAccessibleCustomDashboards),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_install_new_agents: {
        value: cdktf.booleanToHclTerraform(this._canInstallNewAgents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_see_on_premise_license_information: {
        value: cdktf.booleanToHclTerraform(this._canSeeOnPremiseLicenseInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_see_usage_information: {
        value: cdktf.booleanToHclTerraform(this._canSeeUsageInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_view_account_and_billing_information: {
        value: cdktf.booleanToHclTerraform(this._canViewAccountAndBillingInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_view_audit_log: {
        value: cdktf.booleanToHclTerraform(this._canViewAuditLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_view_logs: {
        value: cdktf.booleanToHclTerraform(this._canViewLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_view_trace_details: {
        value: cdktf.booleanToHclTerraform(this._canViewTraceDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
