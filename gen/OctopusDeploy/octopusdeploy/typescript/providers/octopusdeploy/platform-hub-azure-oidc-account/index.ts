// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformHubAzureOidcAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Keys to include in an account test. Valid options are `space`, `account`, `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#account_test_subject_keys PlatformHubAzureOidcAccount#account_test_subject_keys}
  */
  readonly accountTestSubjectKeys?: string[];
  /**
  * The Azure application ID (client ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#application_id PlatformHubAzureOidcAccount#application_id}
  */
  readonly applicationId: string;
  /**
  * The audience for the Azure OIDC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#audience PlatformHubAzureOidcAccount#audience}
  */
  readonly audience?: string;
  /**
  * The Active Directory endpoint base URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#authentication_endpoint PlatformHubAzureOidcAccount#authentication_endpoint}
  */
  readonly authenticationEndpoint?: string;
  /**
  * The Azure environment. Valid values are `AzureCloud`, `AzureChinaCloud`, `AzureGermanCloud`, `AzureUSGovernment`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#azure_environment PlatformHubAzureOidcAccount#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * The description of this Azure OpenID Connect account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#description PlatformHubAzureOidcAccount#description}
  */
  readonly description?: string;
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `environment`, `project`, `tenant`, `runbook`, `account`, `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#execution_subject_keys PlatformHubAzureOidcAccount#execution_subject_keys}
  */
  readonly executionSubjectKeys?: string[];
  /**
  * Keys to include in a health check. Valid options are `space`, `account`, `target`, `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#health_subject_keys PlatformHubAzureOidcAccount#health_subject_keys}
  */
  readonly healthSubjectKeys?: string[];
  /**
  * The name of this Azure OpenID Connect account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#name PlatformHubAzureOidcAccount#name}
  */
  readonly name: string;
  /**
  * The Azure Resource Management endpoint base URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#resource_management_endpoint PlatformHubAzureOidcAccount#resource_management_endpoint}
  */
  readonly resourceManagementEndpoint?: string;
  /**
  * The Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#subscription_id PlatformHubAzureOidcAccount#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The Azure tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#tenant_id PlatformHubAzureOidcAccount#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account octopusdeploy_platform_hub_azure_oidc_account}
*/
export class PlatformHubAzureOidcAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_platform_hub_azure_oidc_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformHubAzureOidcAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformHubAzureOidcAccount to import
  * @param importFromId The id of the existing PlatformHubAzureOidcAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformHubAzureOidcAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_platform_hub_azure_oidc_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_azure_oidc_account octopusdeploy_platform_hub_azure_oidc_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformHubAzureOidcAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformHubAzureOidcAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_platform_hub_azure_oidc_account',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountTestSubjectKeys = config.accountTestSubjectKeys;
    this._applicationId = config.applicationId;
    this._audience = config.audience;
    this._authenticationEndpoint = config.authenticationEndpoint;
    this._azureEnvironment = config.azureEnvironment;
    this._description = config.description;
    this._executionSubjectKeys = config.executionSubjectKeys;
    this._healthSubjectKeys = config.healthSubjectKeys;
    this._name = config.name;
    this._resourceManagementEndpoint = config.resourceManagementEndpoint;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_test_subject_keys - computed: true, optional: true, required: false
  private _accountTestSubjectKeys?: string[]; 
  public get accountTestSubjectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('account_test_subject_keys'));
  }
  public set accountTestSubjectKeys(value: string[]) {
    this._accountTestSubjectKeys = value;
  }
  public resetAccountTestSubjectKeys() {
    this._accountTestSubjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTestSubjectKeysInput() {
    return this._accountTestSubjectKeys;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authentication_endpoint - computed: true, optional: true, required: false
  private _authenticationEndpoint?: string; 
  public get authenticationEndpoint() {
    return this.getStringAttribute('authentication_endpoint');
  }
  public set authenticationEndpoint(value: string) {
    this._authenticationEndpoint = value;
  }
  public resetAuthenticationEndpoint() {
    this._authenticationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEndpointInput() {
    return this._authenticationEndpoint;
  }

  // azure_environment - computed: true, optional: true, required: false
  private _azureEnvironment?: string; 
  public get azureEnvironment() {
    return this.getStringAttribute('azure_environment');
  }
  public set azureEnvironment(value: string) {
    this._azureEnvironment = value;
  }
  public resetAzureEnvironment() {
    this._azureEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentInput() {
    return this._azureEnvironment;
  }

  // description - computed: true, optional: true, required: false
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

  // execution_subject_keys - computed: true, optional: true, required: false
  private _executionSubjectKeys?: string[]; 
  public get executionSubjectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('execution_subject_keys'));
  }
  public set executionSubjectKeys(value: string[]) {
    this._executionSubjectKeys = value;
  }
  public resetExecutionSubjectKeys() {
    this._executionSubjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSubjectKeysInput() {
    return this._executionSubjectKeys;
  }

  // health_subject_keys - computed: true, optional: true, required: false
  private _healthSubjectKeys?: string[]; 
  public get healthSubjectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('health_subject_keys'));
  }
  public set healthSubjectKeys(value: string[]) {
    this._healthSubjectKeys = value;
  }
  public resetHealthSubjectKeys() {
    this._healthSubjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthSubjectKeysInput() {
    return this._healthSubjectKeys;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_management_endpoint - computed: true, optional: true, required: false
  private _resourceManagementEndpoint?: string; 
  public get resourceManagementEndpoint() {
    return this.getStringAttribute('resource_management_endpoint');
  }
  public set resourceManagementEndpoint(value: string) {
    this._resourceManagementEndpoint = value;
  }
  public resetResourceManagementEndpoint() {
    this._resourceManagementEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagementEndpointInput() {
    return this._resourceManagementEndpoint;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_test_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountTestSubjectKeys),
      application_id: cdktf.stringToTerraform(this._applicationId),
      audience: cdktf.stringToTerraform(this._audience),
      authentication_endpoint: cdktf.stringToTerraform(this._authenticationEndpoint),
      azure_environment: cdktf.stringToTerraform(this._azureEnvironment),
      description: cdktf.stringToTerraform(this._description),
      execution_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._executionSubjectKeys),
      health_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthSubjectKeys),
      name: cdktf.stringToTerraform(this._name),
      resource_management_endpoint: cdktf.stringToTerraform(this._resourceManagementEndpoint),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_test_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountTestSubjectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_endpoint: {
        value: cdktf.stringToHclTerraform(this._authenticationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_environment: {
        value: cdktf.stringToHclTerraform(this._azureEnvironment),
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
      execution_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._executionSubjectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      health_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthSubjectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_management_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceManagementEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
