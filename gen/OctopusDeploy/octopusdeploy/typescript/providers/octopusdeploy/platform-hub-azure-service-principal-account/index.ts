// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformHubAzureServicePrincipalAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure application ID (client ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#application_id PlatformHubAzureServicePrincipalAccount#application_id}
  */
  readonly applicationId: string;
  /**
  * The Active Directory endpoint base URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#authentication_endpoint PlatformHubAzureServicePrincipalAccount#authentication_endpoint}
  */
  readonly authenticationEndpoint?: string;
  /**
  * The Azure environment. Valid values are `AzureCloud`, `AzureChinaCloud`, `AzureGermanCloud`, `AzureUSGovernment`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#azure_environment PlatformHubAzureServicePrincipalAccount#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * The description of this Azure Service Principal account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#description PlatformHubAzureServicePrincipalAccount#description}
  */
  readonly description?: string;
  /**
  * The name of this Azure Service Principal account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#name PlatformHubAzureServicePrincipalAccount#name}
  */
  readonly name: string;
  /**
  * The password for the Azure service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#password PlatformHubAzureServicePrincipalAccount#password}
  */
  readonly password: string;
  /**
  * The Azure Resource Management endpoint base URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#resource_management_endpoint PlatformHubAzureServicePrincipalAccount#resource_management_endpoint}
  */
  readonly resourceManagementEndpoint?: string;
  /**
  * The Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#subscription_id PlatformHubAzureServicePrincipalAccount#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The Azure tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#tenant_id PlatformHubAzureServicePrincipalAccount#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account octopusdeploy_platform_hub_azure_service_principal_account}
*/
export class PlatformHubAzureServicePrincipalAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_platform_hub_azure_service_principal_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformHubAzureServicePrincipalAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformHubAzureServicePrincipalAccount to import
  * @param importFromId The id of the existing PlatformHubAzureServicePrincipalAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformHubAzureServicePrincipalAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_platform_hub_azure_service_principal_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_azure_service_principal_account octopusdeploy_platform_hub_azure_service_principal_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformHubAzureServicePrincipalAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformHubAzureServicePrincipalAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_platform_hub_azure_service_principal_account',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._authenticationEndpoint = config.authenticationEndpoint;
    this._azureEnvironment = config.azureEnvironment;
    this._description = config.description;
    this._name = config.name;
    this._password = config.password;
    this._resourceManagementEndpoint = config.resourceManagementEndpoint;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      authentication_endpoint: cdktf.stringToTerraform(this._authenticationEndpoint),
      azure_environment: cdktf.stringToTerraform(this._azureEnvironment),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      resource_management_endpoint: cdktf.stringToTerraform(this._resourceManagementEndpoint),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
