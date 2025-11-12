// https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialAzureServicePrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Override the Azure Active Directory endpoint for the selected Azure environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#authentication_endpoint CredentialAzureServicePrincipal#authentication_endpoint}
  */
  readonly authenticationEndpoint?: string;
  /**
  * The Azure Cloud enviroment name. Allowed values are "Azure", "Azure China", "Azure Germany", "Azure US Government".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#azure_environment_name CredentialAzureServicePrincipal#azure_environment_name}
  */
  readonly azureEnvironmentName?: string;
  /**
  * The certificate reference of the Azure Service Principal, pointing to a Jenkins certificate credential. Cannot be used with `client_secret`. Has to be specified, if `client_secret` is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#certificate_id CredentialAzureServicePrincipal#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The client id (application id) of the Azure Service Principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#client_id CredentialAzureServicePrincipal#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret of the Azure Service Principal. Cannot be used with `certificate_id`. Has to be specified, if `certificate_id` is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#client_secret CredentialAzureServicePrincipal#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A human readable description of the credentials being stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#description CredentialAzureServicePrincipal#description}
  */
  readonly description?: string;
  /**
  * The domain store to place the credentials into. If not set will default to the global credentials store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#domain CredentialAzureServicePrincipal#domain}
  */
  readonly domain?: string;
  /**
  * The folder namespace to store the resource in. If not set will default to global Jenkins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#folder CredentialAzureServicePrincipal#folder}
  */
  readonly folder?: string;
  /**
  * Override the Azure graph endpoint URL for the selected Azure environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#graph_endpoint CredentialAzureServicePrincipal#graph_endpoint}
  */
  readonly graphEndpoint?: string;
  /**
  * The name of the resource being created. This maps to the ID property within Jenkins, and cannot be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#name CredentialAzureServicePrincipal#name}
  */
  readonly name: string;
  /**
  * Override the Azure resource manager endpoint URL for the selected Azure environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#resource_manager_endpoint CredentialAzureServicePrincipal#resource_manager_endpoint}
  */
  readonly resourceManagerEndpoint?: string;
  /**
  * The visibility of the credentials to Jenkins agents. This must be set to either "GLOBAL" or "SYSTEM". If not set will default to "GLOBAL".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#scope CredentialAzureServicePrincipal#scope}
  */
  readonly scope?: string;
  /**
  * Override the Azure management endpoint URL for the selected Azure environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#service_management_url CredentialAzureServicePrincipal#service_management_url}
  */
  readonly serviceManagementUrl?: string;
  /**
  * The Azure subscription id mapped to the Azure Service Principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#subscription_id CredentialAzureServicePrincipal#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The Azure Tenant ID of the Azure Service Principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#tenant CredentialAzureServicePrincipal#tenant}
  */
  readonly tenant: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal jenkins_credential_azure_service_principal}
*/
export class CredentialAzureServicePrincipal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jenkins_credential_azure_service_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialAzureServicePrincipal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialAzureServicePrincipal to import
  * @param importFromId The id of the existing CredentialAzureServicePrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialAzureServicePrincipal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jenkins_credential_azure_service_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_azure_service_principal jenkins_credential_azure_service_principal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialAzureServicePrincipalConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialAzureServicePrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'jenkins_credential_azure_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'jenkins',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationEndpoint = config.authenticationEndpoint;
    this._azureEnvironmentName = config.azureEnvironmentName;
    this._certificateId = config.certificateId;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._domain = config.domain;
    this._folder = config.folder;
    this._graphEndpoint = config.graphEndpoint;
    this._name = config.name;
    this._resourceManagerEndpoint = config.resourceManagerEndpoint;
    this._scope = config.scope;
    this._serviceManagementUrl = config.serviceManagementUrl;
    this._subscriptionId = config.subscriptionId;
    this._tenant = config.tenant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // azure_environment_name - computed: true, optional: true, required: false
  private _azureEnvironmentName?: string; 
  public get azureEnvironmentName() {
    return this.getStringAttribute('azure_environment_name');
  }
  public set azureEnvironmentName(value: string) {
    this._azureEnvironmentName = value;
  }
  public resetAzureEnvironmentName() {
    this._azureEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentNameInput() {
    return this._azureEnvironmentName;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // graph_endpoint - computed: true, optional: true, required: false
  private _graphEndpoint?: string; 
  public get graphEndpoint() {
    return this.getStringAttribute('graph_endpoint');
  }
  public set graphEndpoint(value: string) {
    this._graphEndpoint = value;
  }
  public resetGraphEndpoint() {
    this._graphEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphEndpointInput() {
    return this._graphEndpoint;
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

  // resource_manager_endpoint - computed: true, optional: true, required: false
  private _resourceManagerEndpoint?: string; 
  public get resourceManagerEndpoint() {
    return this.getStringAttribute('resource_manager_endpoint');
  }
  public set resourceManagerEndpoint(value: string) {
    this._resourceManagerEndpoint = value;
  }
  public resetResourceManagerEndpoint() {
    this._resourceManagerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerEndpointInput() {
    return this._resourceManagerEndpoint;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_management_url - computed: true, optional: true, required: false
  private _serviceManagementUrl?: string; 
  public get serviceManagementUrl() {
    return this.getStringAttribute('service_management_url');
  }
  public set serviceManagementUrl(value: string) {
    this._serviceManagementUrl = value;
  }
  public resetServiceManagementUrl() {
    this._serviceManagementUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagementUrlInput() {
    return this._serviceManagementUrl;
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

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_endpoint: cdktf.stringToTerraform(this._authenticationEndpoint),
      azure_environment_name: cdktf.stringToTerraform(this._azureEnvironmentName),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      folder: cdktf.stringToTerraform(this._folder),
      graph_endpoint: cdktf.stringToTerraform(this._graphEndpoint),
      name: cdktf.stringToTerraform(this._name),
      resource_manager_endpoint: cdktf.stringToTerraform(this._resourceManagerEndpoint),
      scope: cdktf.stringToTerraform(this._scope),
      service_management_url: cdktf.stringToTerraform(this._serviceManagementUrl),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant: cdktf.stringToTerraform(this._tenant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_endpoint: {
        value: cdktf.stringToHclTerraform(this._authenticationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_environment_name: {
        value: cdktf.stringToHclTerraform(this._azureEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_endpoint: {
        value: cdktf.stringToHclTerraform(this._graphEndpoint),
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
      resource_manager_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceManagerEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_management_url: {
        value: cdktf.stringToHclTerraform(this._serviceManagementUrl),
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
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
