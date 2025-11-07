// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformConnectorVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault#id DataHarnessPlatformConnectorVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault#identifier DataHarnessPlatformConnectorVault#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault#name DataHarnessPlatformConnectorVault#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault#org_id DataHarnessPlatformConnectorVault#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault#project_id DataHarnessPlatformConnectorVault#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault harness_platform_connector_vault}
*/
export class DataHarnessPlatformConnectorVault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformConnectorVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformConnectorVault to import
  * @param importFromId The id of the existing DataHarnessPlatformConnectorVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformConnectorVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_vault harness_platform_connector_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformConnectorVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformConnectorVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_vault',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
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
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // app_role_id - computed: true, optional: false, required: false
  public get appRoleId() {
    return this.getStringAttribute('app_role_id');
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // delegate_selectors - computed: true, optional: false, required: false
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execute_on_delegate - computed: true, optional: false, required: false
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_read_only - computed: true, optional: false, required: false
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // k8s_auth_endpoint - computed: true, optional: false, required: false
  public get k8SAuthEndpoint() {
    return this.getStringAttribute('k8s_auth_endpoint');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // renew_app_role_token - computed: true, optional: false, required: false
  public get renewAppRoleToken() {
    return this.getBooleanAttribute('renew_app_role_token');
  }

  // renewal_interval_minutes - computed: true, optional: false, required: false
  public get renewalIntervalMinutes() {
    return this.getNumberAttribute('renewal_interval_minutes');
  }

  // secret_engine_manually_configured - computed: true, optional: false, required: false
  public get secretEngineManuallyConfigured() {
    return this.getBooleanAttribute('secret_engine_manually_configured');
  }

  // secret_engine_name - computed: true, optional: false, required: false
  public get secretEngineName() {
    return this.getStringAttribute('secret_engine_name');
  }

  // secret_engine_version - computed: true, optional: false, required: false
  public get secretEngineVersion() {
    return this.getNumberAttribute('secret_engine_version');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // service_account_token_path - computed: true, optional: false, required: false
  public get serviceAccountTokenPath() {
    return this.getStringAttribute('service_account_token_path');
  }

  // sink_path - computed: true, optional: false, required: false
  public get sinkPath() {
    return this.getStringAttribute('sink_path');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // use_aws_iam - computed: true, optional: false, required: false
  public get useAwsIam() {
    return this.getBooleanAttribute('use_aws_iam');
  }

  // use_jwt_auth - computed: true, optional: false, required: false
  public get useJwtAuth() {
    return this.getBooleanAttribute('use_jwt_auth');
  }

  // use_k8s_auth - computed: true, optional: false, required: false
  public get useK8SAuth() {
    return this.getBooleanAttribute('use_k8s_auth');
  }

  // use_vault_agent - computed: true, optional: false, required: false
  public get useVaultAgent() {
    return this.getBooleanAttribute('use_vault_agent');
  }

  // vault_aws_iam_role - computed: true, optional: false, required: false
  public get vaultAwsIamRole() {
    return this.getStringAttribute('vault_aws_iam_role');
  }

  // vault_jwt_auth_path - computed: true, optional: false, required: false
  public get vaultJwtAuthPath() {
    return this.getStringAttribute('vault_jwt_auth_path');
  }

  // vault_jwt_auth_role - computed: true, optional: false, required: false
  public get vaultJwtAuthRole() {
    return this.getStringAttribute('vault_jwt_auth_role');
  }

  // vault_k8s_auth_role - computed: true, optional: false, required: false
  public get vaultK8SAuthRole() {
    return this.getStringAttribute('vault_k8s_auth_role');
  }

  // vault_url - computed: true, optional: false, required: false
  public get vaultUrl() {
    return this.getStringAttribute('vault_url');
  }

  // xvault_aws_iam_server_id - computed: true, optional: false, required: false
  public get xvaultAwsIamServerId() {
    return this.getStringAttribute('xvault_aws_iam_server_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
