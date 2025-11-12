// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/app_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKionAppConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/app_config#id DataKionAppConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/app_config kion_app_config}
*/
export class DataKionAppConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_app_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKionAppConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKionAppConfig to import
  * @param importFromId The id of the existing DataKionAppConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/app_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKionAppConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_app_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/app_config kion_app_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKionAppConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKionAppConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kion_app_config',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29',
        providerVersionConstraint: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_users_see_ou_names - computed: true, optional: false, required: false
  public get allUsersSeeOuNames() {
    return this.getBooleanAttribute('all_users_see_ou_names');
  }

  // allocation_mode - computed: true, optional: false, required: false
  public get allocationMode() {
    return this.getBooleanAttribute('allocation_mode');
  }

  // allow_custom_permission_schemes - computed: true, optional: false, required: false
  public get allowCustomPermissionSchemes() {
    return this.getBooleanAttribute('allow_custom_permission_schemes');
  }

  // app_api_key_creation_enabled - computed: true, optional: false, required: false
  public get appApiKeyCreationEnabled() {
    return this.getBooleanAttribute('app_api_key_creation_enabled');
  }

  // app_api_key_lifespan - computed: true, optional: false, required: false
  public get appApiKeyLifespan() {
    return this.getNumberAttribute('app_api_key_lifespan');
  }

  // app_api_key_limit - computed: true, optional: false, required: false
  public get appApiKeyLimit() {
    return this.getNumberAttribute('app_api_key_limit');
  }

  // aws_access_key_creation_enabled - computed: true, optional: false, required: false
  public get awsAccessKeyCreationEnabled() {
    return this.getBooleanAttribute('aws_access_key_creation_enabled');
  }

  // budget_mode - computed: true, optional: false, required: false
  public get budgetMode() {
    return this.getBooleanAttribute('budget_mode');
  }

  // cloud_rule_group_ownership_only - computed: true, optional: false, required: false
  public get cloudRuleGroupOwnershipOnly() {
    return this.getBooleanAttribute('cloud_rule_group_ownership_only');
  }

  // cost_savings_allow_terminate - computed: true, optional: false, required: false
  public get costSavingsAllowTerminate() {
    return this.getBooleanAttribute('cost_savings_allow_terminate');
  }

  // cost_savings_enabled - computed: true, optional: false, required: false
  public get costSavingsEnabled() {
    return this.getBooleanAttribute('cost_savings_enabled');
  }

  // cost_savings_post_token_life_hours - computed: true, optional: false, required: false
  public get costSavingsPostTokenLifeHours() {
    return this.getNumberAttribute('cost_savings_post_token_life_hours');
  }

  // default_org_chart_view - computed: true, optional: false, required: false
  public get defaultOrgChartView() {
    return this.getStringAttribute('default_org_chart_view');
  }

  // enforce_funding - computed: true, optional: false, required: false
  public get enforceFunding() {
    return this.getBooleanAttribute('enforce_funding');
  }

  // enforce_funding_sources - computed: true, optional: false, required: false
  public get enforceFundingSources() {
    return this.getBooleanAttribute('enforce_funding_sources');
  }

  // event_driven_enabled - computed: true, optional: false, required: false
  public get eventDrivenEnabled() {
    return this.getBooleanAttribute('event_driven_enabled');
  }

  // forecasting_enabled - computed: true, optional: false, required: false
  public get forecastingEnabled() {
    return this.getBooleanAttribute('forecasting_enabled');
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

  // idms_groups_as_viewers_default - computed: true, optional: false, required: false
  public get idmsGroupsAsViewersDefault() {
    return this.getBooleanAttribute('idms_groups_as_viewers_default');
  }

  // reserved_instances_enabled - computed: true, optional: false, required: false
  public get reservedInstancesEnabled() {
    return this.getBooleanAttribute('reserved_instances_enabled');
  }

  // resource_inventory_enabled - computed: true, optional: false, required: false
  public get resourceInventoryEnabled() {
    return this.getBooleanAttribute('resource_inventory_enabled');
  }

  // saml_debug - computed: true, optional: false, required: false
  public get samlDebug() {
    return this.getBooleanAttribute('saml_debug');
  }

  // smtp_enabled - computed: true, optional: false, required: false
  public get smtpEnabled() {
    return this.getBooleanAttribute('smtp_enabled');
  }

  // smtp_from - computed: true, optional: false, required: false
  public get smtpFrom() {
    return this.getStringAttribute('smtp_from');
  }

  // smtp_host - computed: true, optional: false, required: false
  public get smtpHost() {
    return this.getStringAttribute('smtp_host');
  }

  // smtp_password - computed: true, optional: false, required: false
  public get smtpPassword() {
    return this.getStringAttribute('smtp_password');
  }

  // smtp_port - computed: true, optional: false, required: false
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }

  // smtp_skip_verify - computed: true, optional: false, required: false
  public get smtpSkipVerify() {
    return this.getBooleanAttribute('smtp_skip_verify');
  }

  // smtp_username - computed: true, optional: false, required: false
  public get smtpUsername() {
    return this.getStringAttribute('smtp_username');
  }

  // supported_aws_regions - computed: true, optional: false, required: false
  public get supportedAwsRegions() {
    return this.getListAttribute('supported_aws_regions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
