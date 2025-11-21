// https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether all users can see the names of OU's in the organization chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#all_users_see_ou_names AppConfig#all_users_see_ou_names}
  */
  readonly allUsersSeeOuNames?: boolean | cdktf.IResolvable;
  /**
  * Indicates if allocation mode is enabled in the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#allocation_mode AppConfig#allocation_mode}
  */
  readonly allocationMode?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether custom permission schemes are allowed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#allow_custom_permission_schemes AppConfig#allow_custom_permission_schemes}
  */
  readonly allowCustomPermissionSchemes?: boolean | cdktf.IResolvable;
  /**
  * Indicates if App API Key creation is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#app_api_key_creation_enabled AppConfig#app_api_key_creation_enabled}
  */
  readonly appApiKeyCreationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the lifespan of App API Keys in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#app_api_key_lifespan AppConfig#app_api_key_lifespan}
  */
  readonly appApiKeyLifespan?: number;
  /**
  * Indicates the max amount of App API Keys per user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#app_api_key_limit AppConfig#app_api_key_limit}
  */
  readonly appApiKeyLimit?: number;
  /**
  * Indicates whether AWS access keys creation is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#aws_access_key_creation_enabled AppConfig#aws_access_key_creation_enabled}
  */
  readonly awsAccessKeyCreationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if budget mode is enabled in the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#budget_mode AppConfig#budget_mode}
  */
  readonly budgetMode?: boolean | cdktf.IResolvable;
  /**
  * Indicates if cloud rules are restricted to User Group ownership only. Setting this to true will remove all users from cloud rules. This cannot be undone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#cloud_rule_group_ownership_only AppConfig#cloud_rule_group_ownership_only}
  */
  readonly cloudRuleGroupOwnershipOnly?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether resource termination is allowed in-app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#cost_savings_allow_terminate AppConfig#cost_savings_allow_terminate}
  */
  readonly costSavingsAllowTerminate?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether Cost Savings is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#cost_savings_enabled AppConfig#cost_savings_enabled}
  */
  readonly costSavingsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Post token life (hours) for Cloud Custodian webhook actions to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#cost_savings_post_token_life_hours AppConfig#cost_savings_post_token_life_hours}
  */
  readonly costSavingsPostTokenLifeHours?: number;
  /**
  * Defines the default organization chart view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#default_org_chart_view AppConfig#default_org_chart_view}
  */
  readonly defaultOrgChartView?: string;
  /**
  * Indicates whether spend plans or budgets must be created on all projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#enforce_funding AppConfig#enforce_funding}
  */
  readonly enforceFunding?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether every project should have a funding source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#enforce_funding_sources AppConfig#enforce_funding_sources}
  */
  readonly enforceFundingSources?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether event driven is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#event_driven_enabled AppConfig#event_driven_enabled}
  */
  readonly eventDrivenEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether forecasting is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#forecasting_enabled AppConfig#forecasting_enabled}
  */
  readonly forecastingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#id AppConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether, when new groups are created via IDMS, the group will be set as a viewer by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#idms_groups_as_viewers_default AppConfig#idms_groups_as_viewers_default}
  */
  readonly idmsGroupsAsViewersDefault?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether reserved instances are enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#reserved_instances_enabled AppConfig#reserved_instances_enabled}
  */
  readonly reservedInstancesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether resource inventory is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#resource_inventory_enabled AppConfig#resource_inventory_enabled}
  */
  readonly resourceInventoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether SAML debugging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#saml_debug AppConfig#saml_debug}
  */
  readonly samlDebug?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether SMTP is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#smtp_enabled AppConfig#smtp_enabled}
  */
  readonly smtpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The SMTP from address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#smtp_from AppConfig#smtp_from}
  */
  readonly smtpFrom?: string;
  /**
  * The SMTP host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#smtp_host AppConfig#smtp_host}
  */
  readonly smtpHost?: string;
  /**
  * The SMTP password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#smtp_password AppConfig#smtp_password}
  */
  readonly smtpPassword?: string;
  /**
  * The SMTP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#smtp_port AppConfig#smtp_port}
  */
  readonly smtpPort?: number;
  /**
  * Indicates if the app should skip SMTP verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#smtp_skip_verify AppConfig#smtp_skip_verify}
  */
  readonly smtpSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The SMTP username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#smtp_username AppConfig#smtp_username}
  */
  readonly smtpUsername?: string;
  /**
  * The list of supported AWS regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#supported_aws_regions AppConfig#supported_aws_regions}
  */
  readonly supportedAwsRegions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config kion_app_config}
*/
export class AppConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_app_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConfig to import
  * @param importFromId The id of the existing AppConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_app_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/app_config kion_app_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kion_app_config',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.30',
        providerVersionConstraint: '0.3.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allUsersSeeOuNames = config.allUsersSeeOuNames;
    this._allocationMode = config.allocationMode;
    this._allowCustomPermissionSchemes = config.allowCustomPermissionSchemes;
    this._appApiKeyCreationEnabled = config.appApiKeyCreationEnabled;
    this._appApiKeyLifespan = config.appApiKeyLifespan;
    this._appApiKeyLimit = config.appApiKeyLimit;
    this._awsAccessKeyCreationEnabled = config.awsAccessKeyCreationEnabled;
    this._budgetMode = config.budgetMode;
    this._cloudRuleGroupOwnershipOnly = config.cloudRuleGroupOwnershipOnly;
    this._costSavingsAllowTerminate = config.costSavingsAllowTerminate;
    this._costSavingsEnabled = config.costSavingsEnabled;
    this._costSavingsPostTokenLifeHours = config.costSavingsPostTokenLifeHours;
    this._defaultOrgChartView = config.defaultOrgChartView;
    this._enforceFunding = config.enforceFunding;
    this._enforceFundingSources = config.enforceFundingSources;
    this._eventDrivenEnabled = config.eventDrivenEnabled;
    this._forecastingEnabled = config.forecastingEnabled;
    this._id = config.id;
    this._idmsGroupsAsViewersDefault = config.idmsGroupsAsViewersDefault;
    this._reservedInstancesEnabled = config.reservedInstancesEnabled;
    this._resourceInventoryEnabled = config.resourceInventoryEnabled;
    this._samlDebug = config.samlDebug;
    this._smtpEnabled = config.smtpEnabled;
    this._smtpFrom = config.smtpFrom;
    this._smtpHost = config.smtpHost;
    this._smtpPassword = config.smtpPassword;
    this._smtpPort = config.smtpPort;
    this._smtpSkipVerify = config.smtpSkipVerify;
    this._smtpUsername = config.smtpUsername;
    this._supportedAwsRegions = config.supportedAwsRegions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_users_see_ou_names - computed: false, optional: true, required: false
  private _allUsersSeeOuNames?: boolean | cdktf.IResolvable; 
  public get allUsersSeeOuNames() {
    return this.getBooleanAttribute('all_users_see_ou_names');
  }
  public set allUsersSeeOuNames(value: boolean | cdktf.IResolvable) {
    this._allUsersSeeOuNames = value;
  }
  public resetAllUsersSeeOuNames() {
    this._allUsersSeeOuNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUsersSeeOuNamesInput() {
    return this._allUsersSeeOuNames;
  }

  // allocation_mode - computed: false, optional: true, required: false
  private _allocationMode?: boolean | cdktf.IResolvable; 
  public get allocationMode() {
    return this.getBooleanAttribute('allocation_mode');
  }
  public set allocationMode(value: boolean | cdktf.IResolvable) {
    this._allocationMode = value;
  }
  public resetAllocationMode() {
    this._allocationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationModeInput() {
    return this._allocationMode;
  }

  // allow_custom_permission_schemes - computed: false, optional: true, required: false
  private _allowCustomPermissionSchemes?: boolean | cdktf.IResolvable; 
  public get allowCustomPermissionSchemes() {
    return this.getBooleanAttribute('allow_custom_permission_schemes');
  }
  public set allowCustomPermissionSchemes(value: boolean | cdktf.IResolvable) {
    this._allowCustomPermissionSchemes = value;
  }
  public resetAllowCustomPermissionSchemes() {
    this._allowCustomPermissionSchemes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomPermissionSchemesInput() {
    return this._allowCustomPermissionSchemes;
  }

  // app_api_key_creation_enabled - computed: false, optional: true, required: false
  private _appApiKeyCreationEnabled?: boolean | cdktf.IResolvable; 
  public get appApiKeyCreationEnabled() {
    return this.getBooleanAttribute('app_api_key_creation_enabled');
  }
  public set appApiKeyCreationEnabled(value: boolean | cdktf.IResolvable) {
    this._appApiKeyCreationEnabled = value;
  }
  public resetAppApiKeyCreationEnabled() {
    this._appApiKeyCreationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appApiKeyCreationEnabledInput() {
    return this._appApiKeyCreationEnabled;
  }

  // app_api_key_lifespan - computed: false, optional: true, required: false
  private _appApiKeyLifespan?: number; 
  public get appApiKeyLifespan() {
    return this.getNumberAttribute('app_api_key_lifespan');
  }
  public set appApiKeyLifespan(value: number) {
    this._appApiKeyLifespan = value;
  }
  public resetAppApiKeyLifespan() {
    this._appApiKeyLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appApiKeyLifespanInput() {
    return this._appApiKeyLifespan;
  }

  // app_api_key_limit - computed: false, optional: true, required: false
  private _appApiKeyLimit?: number; 
  public get appApiKeyLimit() {
    return this.getNumberAttribute('app_api_key_limit');
  }
  public set appApiKeyLimit(value: number) {
    this._appApiKeyLimit = value;
  }
  public resetAppApiKeyLimit() {
    this._appApiKeyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appApiKeyLimitInput() {
    return this._appApiKeyLimit;
  }

  // aws_access_key_creation_enabled - computed: false, optional: true, required: false
  private _awsAccessKeyCreationEnabled?: boolean | cdktf.IResolvable; 
  public get awsAccessKeyCreationEnabled() {
    return this.getBooleanAttribute('aws_access_key_creation_enabled');
  }
  public set awsAccessKeyCreationEnabled(value: boolean | cdktf.IResolvable) {
    this._awsAccessKeyCreationEnabled = value;
  }
  public resetAwsAccessKeyCreationEnabled() {
    this._awsAccessKeyCreationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyCreationEnabledInput() {
    return this._awsAccessKeyCreationEnabled;
  }

  // budget_mode - computed: false, optional: true, required: false
  private _budgetMode?: boolean | cdktf.IResolvable; 
  public get budgetMode() {
    return this.getBooleanAttribute('budget_mode');
  }
  public set budgetMode(value: boolean | cdktf.IResolvable) {
    this._budgetMode = value;
  }
  public resetBudgetMode() {
    this._budgetMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetModeInput() {
    return this._budgetMode;
  }

  // cloud_rule_group_ownership_only - computed: false, optional: true, required: false
  private _cloudRuleGroupOwnershipOnly?: boolean | cdktf.IResolvable; 
  public get cloudRuleGroupOwnershipOnly() {
    return this.getBooleanAttribute('cloud_rule_group_ownership_only');
  }
  public set cloudRuleGroupOwnershipOnly(value: boolean | cdktf.IResolvable) {
    this._cloudRuleGroupOwnershipOnly = value;
  }
  public resetCloudRuleGroupOwnershipOnly() {
    this._cloudRuleGroupOwnershipOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRuleGroupOwnershipOnlyInput() {
    return this._cloudRuleGroupOwnershipOnly;
  }

  // cost_savings_allow_terminate - computed: false, optional: true, required: false
  private _costSavingsAllowTerminate?: boolean | cdktf.IResolvable; 
  public get costSavingsAllowTerminate() {
    return this.getBooleanAttribute('cost_savings_allow_terminate');
  }
  public set costSavingsAllowTerminate(value: boolean | cdktf.IResolvable) {
    this._costSavingsAllowTerminate = value;
  }
  public resetCostSavingsAllowTerminate() {
    this._costSavingsAllowTerminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costSavingsAllowTerminateInput() {
    return this._costSavingsAllowTerminate;
  }

  // cost_savings_enabled - computed: false, optional: true, required: false
  private _costSavingsEnabled?: boolean | cdktf.IResolvable; 
  public get costSavingsEnabled() {
    return this.getBooleanAttribute('cost_savings_enabled');
  }
  public set costSavingsEnabled(value: boolean | cdktf.IResolvable) {
    this._costSavingsEnabled = value;
  }
  public resetCostSavingsEnabled() {
    this._costSavingsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costSavingsEnabledInput() {
    return this._costSavingsEnabled;
  }

  // cost_savings_post_token_life_hours - computed: false, optional: true, required: false
  private _costSavingsPostTokenLifeHours?: number; 
  public get costSavingsPostTokenLifeHours() {
    return this.getNumberAttribute('cost_savings_post_token_life_hours');
  }
  public set costSavingsPostTokenLifeHours(value: number) {
    this._costSavingsPostTokenLifeHours = value;
  }
  public resetCostSavingsPostTokenLifeHours() {
    this._costSavingsPostTokenLifeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costSavingsPostTokenLifeHoursInput() {
    return this._costSavingsPostTokenLifeHours;
  }

  // default_org_chart_view - computed: false, optional: true, required: false
  private _defaultOrgChartView?: string; 
  public get defaultOrgChartView() {
    return this.getStringAttribute('default_org_chart_view');
  }
  public set defaultOrgChartView(value: string) {
    this._defaultOrgChartView = value;
  }
  public resetDefaultOrgChartView() {
    this._defaultOrgChartView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOrgChartViewInput() {
    return this._defaultOrgChartView;
  }

  // enforce_funding - computed: false, optional: true, required: false
  private _enforceFunding?: boolean | cdktf.IResolvable; 
  public get enforceFunding() {
    return this.getBooleanAttribute('enforce_funding');
  }
  public set enforceFunding(value: boolean | cdktf.IResolvable) {
    this._enforceFunding = value;
  }
  public resetEnforceFunding() {
    this._enforceFunding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFundingInput() {
    return this._enforceFunding;
  }

  // enforce_funding_sources - computed: false, optional: true, required: false
  private _enforceFundingSources?: boolean | cdktf.IResolvable; 
  public get enforceFundingSources() {
    return this.getBooleanAttribute('enforce_funding_sources');
  }
  public set enforceFundingSources(value: boolean | cdktf.IResolvable) {
    this._enforceFundingSources = value;
  }
  public resetEnforceFundingSources() {
    this._enforceFundingSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFundingSourcesInput() {
    return this._enforceFundingSources;
  }

  // event_driven_enabled - computed: false, optional: true, required: false
  private _eventDrivenEnabled?: boolean | cdktf.IResolvable; 
  public get eventDrivenEnabled() {
    return this.getBooleanAttribute('event_driven_enabled');
  }
  public set eventDrivenEnabled(value: boolean | cdktf.IResolvable) {
    this._eventDrivenEnabled = value;
  }
  public resetEventDrivenEnabled() {
    this._eventDrivenEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDrivenEnabledInput() {
    return this._eventDrivenEnabled;
  }

  // forecasting_enabled - computed: false, optional: true, required: false
  private _forecastingEnabled?: boolean | cdktf.IResolvable; 
  public get forecastingEnabled() {
    return this.getBooleanAttribute('forecasting_enabled');
  }
  public set forecastingEnabled(value: boolean | cdktf.IResolvable) {
    this._forecastingEnabled = value;
  }
  public resetForecastingEnabled() {
    this._forecastingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastingEnabledInput() {
    return this._forecastingEnabled;
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

  // idms_groups_as_viewers_default - computed: false, optional: true, required: false
  private _idmsGroupsAsViewersDefault?: boolean | cdktf.IResolvable; 
  public get idmsGroupsAsViewersDefault() {
    return this.getBooleanAttribute('idms_groups_as_viewers_default');
  }
  public set idmsGroupsAsViewersDefault(value: boolean | cdktf.IResolvable) {
    this._idmsGroupsAsViewersDefault = value;
  }
  public resetIdmsGroupsAsViewersDefault() {
    this._idmsGroupsAsViewersDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idmsGroupsAsViewersDefaultInput() {
    return this._idmsGroupsAsViewersDefault;
  }

  // reserved_instances_enabled - computed: false, optional: true, required: false
  private _reservedInstancesEnabled?: boolean | cdktf.IResolvable; 
  public get reservedInstancesEnabled() {
    return this.getBooleanAttribute('reserved_instances_enabled');
  }
  public set reservedInstancesEnabled(value: boolean | cdktf.IResolvable) {
    this._reservedInstancesEnabled = value;
  }
  public resetReservedInstancesEnabled() {
    this._reservedInstancesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInstancesEnabledInput() {
    return this._reservedInstancesEnabled;
  }

  // resource_inventory_enabled - computed: false, optional: true, required: false
  private _resourceInventoryEnabled?: boolean | cdktf.IResolvable; 
  public get resourceInventoryEnabled() {
    return this.getBooleanAttribute('resource_inventory_enabled');
  }
  public set resourceInventoryEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceInventoryEnabled = value;
  }
  public resetResourceInventoryEnabled() {
    this._resourceInventoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInventoryEnabledInput() {
    return this._resourceInventoryEnabled;
  }

  // saml_debug - computed: false, optional: true, required: false
  private _samlDebug?: boolean | cdktf.IResolvable; 
  public get samlDebug() {
    return this.getBooleanAttribute('saml_debug');
  }
  public set samlDebug(value: boolean | cdktf.IResolvable) {
    this._samlDebug = value;
  }
  public resetSamlDebug() {
    this._samlDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlDebugInput() {
    return this._samlDebug;
  }

  // smtp_enabled - computed: false, optional: true, required: false
  private _smtpEnabled?: boolean | cdktf.IResolvable; 
  public get smtpEnabled() {
    return this.getBooleanAttribute('smtp_enabled');
  }
  public set smtpEnabled(value: boolean | cdktf.IResolvable) {
    this._smtpEnabled = value;
  }
  public resetSmtpEnabled() {
    this._smtpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpEnabledInput() {
    return this._smtpEnabled;
  }

  // smtp_from - computed: false, optional: true, required: false
  private _smtpFrom?: string; 
  public get smtpFrom() {
    return this.getStringAttribute('smtp_from');
  }
  public set smtpFrom(value: string) {
    this._smtpFrom = value;
  }
  public resetSmtpFrom() {
    this._smtpFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpFromInput() {
    return this._smtpFrom;
  }

  // smtp_host - computed: false, optional: true, required: false
  private _smtpHost?: string; 
  public get smtpHost() {
    return this.getStringAttribute('smtp_host');
  }
  public set smtpHost(value: string) {
    this._smtpHost = value;
  }
  public resetSmtpHost() {
    this._smtpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpHostInput() {
    return this._smtpHost;
  }

  // smtp_password - computed: false, optional: true, required: false
  private _smtpPassword?: string; 
  public get smtpPassword() {
    return this.getStringAttribute('smtp_password');
  }
  public set smtpPassword(value: string) {
    this._smtpPassword = value;
  }
  public resetSmtpPassword() {
    this._smtpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPasswordInput() {
    return this._smtpPassword;
  }

  // smtp_port - computed: false, optional: true, required: false
  private _smtpPort?: number; 
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }
  public set smtpPort(value: number) {
    this._smtpPort = value;
  }
  public resetSmtpPort() {
    this._smtpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPortInput() {
    return this._smtpPort;
  }

  // smtp_skip_verify - computed: false, optional: true, required: false
  private _smtpSkipVerify?: boolean | cdktf.IResolvable; 
  public get smtpSkipVerify() {
    return this.getBooleanAttribute('smtp_skip_verify');
  }
  public set smtpSkipVerify(value: boolean | cdktf.IResolvable) {
    this._smtpSkipVerify = value;
  }
  public resetSmtpSkipVerify() {
    this._smtpSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpSkipVerifyInput() {
    return this._smtpSkipVerify;
  }

  // smtp_username - computed: false, optional: true, required: false
  private _smtpUsername?: string; 
  public get smtpUsername() {
    return this.getStringAttribute('smtp_username');
  }
  public set smtpUsername(value: string) {
    this._smtpUsername = value;
  }
  public resetSmtpUsername() {
    this._smtpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpUsernameInput() {
    return this._smtpUsername;
  }

  // supported_aws_regions - computed: false, optional: true, required: false
  private _supportedAwsRegions?: string[]; 
  public get supportedAwsRegions() {
    return this.getListAttribute('supported_aws_regions');
  }
  public set supportedAwsRegions(value: string[]) {
    this._supportedAwsRegions = value;
  }
  public resetSupportedAwsRegions() {
    this._supportedAwsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedAwsRegionsInput() {
    return this._supportedAwsRegions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_users_see_ou_names: cdktf.booleanToTerraform(this._allUsersSeeOuNames),
      allocation_mode: cdktf.booleanToTerraform(this._allocationMode),
      allow_custom_permission_schemes: cdktf.booleanToTerraform(this._allowCustomPermissionSchemes),
      app_api_key_creation_enabled: cdktf.booleanToTerraform(this._appApiKeyCreationEnabled),
      app_api_key_lifespan: cdktf.numberToTerraform(this._appApiKeyLifespan),
      app_api_key_limit: cdktf.numberToTerraform(this._appApiKeyLimit),
      aws_access_key_creation_enabled: cdktf.booleanToTerraform(this._awsAccessKeyCreationEnabled),
      budget_mode: cdktf.booleanToTerraform(this._budgetMode),
      cloud_rule_group_ownership_only: cdktf.booleanToTerraform(this._cloudRuleGroupOwnershipOnly),
      cost_savings_allow_terminate: cdktf.booleanToTerraform(this._costSavingsAllowTerminate),
      cost_savings_enabled: cdktf.booleanToTerraform(this._costSavingsEnabled),
      cost_savings_post_token_life_hours: cdktf.numberToTerraform(this._costSavingsPostTokenLifeHours),
      default_org_chart_view: cdktf.stringToTerraform(this._defaultOrgChartView),
      enforce_funding: cdktf.booleanToTerraform(this._enforceFunding),
      enforce_funding_sources: cdktf.booleanToTerraform(this._enforceFundingSources),
      event_driven_enabled: cdktf.booleanToTerraform(this._eventDrivenEnabled),
      forecasting_enabled: cdktf.booleanToTerraform(this._forecastingEnabled),
      id: cdktf.stringToTerraform(this._id),
      idms_groups_as_viewers_default: cdktf.booleanToTerraform(this._idmsGroupsAsViewersDefault),
      reserved_instances_enabled: cdktf.booleanToTerraform(this._reservedInstancesEnabled),
      resource_inventory_enabled: cdktf.booleanToTerraform(this._resourceInventoryEnabled),
      saml_debug: cdktf.booleanToTerraform(this._samlDebug),
      smtp_enabled: cdktf.booleanToTerraform(this._smtpEnabled),
      smtp_from: cdktf.stringToTerraform(this._smtpFrom),
      smtp_host: cdktf.stringToTerraform(this._smtpHost),
      smtp_password: cdktf.stringToTerraform(this._smtpPassword),
      smtp_port: cdktf.numberToTerraform(this._smtpPort),
      smtp_skip_verify: cdktf.booleanToTerraform(this._smtpSkipVerify),
      smtp_username: cdktf.stringToTerraform(this._smtpUsername),
      supported_aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedAwsRegions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_users_see_ou_names: {
        value: cdktf.booleanToHclTerraform(this._allUsersSeeOuNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allocation_mode: {
        value: cdktf.booleanToHclTerraform(this._allocationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_custom_permission_schemes: {
        value: cdktf.booleanToHclTerraform(this._allowCustomPermissionSchemes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_api_key_creation_enabled: {
        value: cdktf.booleanToHclTerraform(this._appApiKeyCreationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_api_key_lifespan: {
        value: cdktf.numberToHclTerraform(this._appApiKeyLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      app_api_key_limit: {
        value: cdktf.numberToHclTerraform(this._appApiKeyLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aws_access_key_creation_enabled: {
        value: cdktf.booleanToHclTerraform(this._awsAccessKeyCreationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      budget_mode: {
        value: cdktf.booleanToHclTerraform(this._budgetMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_rule_group_ownership_only: {
        value: cdktf.booleanToHclTerraform(this._cloudRuleGroupOwnershipOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cost_savings_allow_terminate: {
        value: cdktf.booleanToHclTerraform(this._costSavingsAllowTerminate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cost_savings_enabled: {
        value: cdktf.booleanToHclTerraform(this._costSavingsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cost_savings_post_token_life_hours: {
        value: cdktf.numberToHclTerraform(this._costSavingsPostTokenLifeHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_org_chart_view: {
        value: cdktf.stringToHclTerraform(this._defaultOrgChartView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_funding: {
        value: cdktf.booleanToHclTerraform(this._enforceFunding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_funding_sources: {
        value: cdktf.booleanToHclTerraform(this._enforceFundingSources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_driven_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventDrivenEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forecasting_enabled: {
        value: cdktf.booleanToHclTerraform(this._forecastingEnabled),
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
      idms_groups_as_viewers_default: {
        value: cdktf.booleanToHclTerraform(this._idmsGroupsAsViewersDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reserved_instances_enabled: {
        value: cdktf.booleanToHclTerraform(this._reservedInstancesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_inventory_enabled: {
        value: cdktf.booleanToHclTerraform(this._resourceInventoryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml_debug: {
        value: cdktf.booleanToHclTerraform(this._samlDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smtp_enabled: {
        value: cdktf.booleanToHclTerraform(this._smtpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smtp_from: {
        value: cdktf.stringToHclTerraform(this._smtpFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_host: {
        value: cdktf.stringToHclTerraform(this._smtpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_password: {
        value: cdktf.stringToHclTerraform(this._smtpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_port: {
        value: cdktf.numberToHclTerraform(this._smtpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtp_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._smtpSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smtp_username: {
        value: cdktf.stringToHclTerraform(this._smtpUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_aws_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedAwsRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
