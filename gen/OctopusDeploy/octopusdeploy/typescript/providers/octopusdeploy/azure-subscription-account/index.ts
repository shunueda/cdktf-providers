// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSubscriptionAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure environment associated with this Azure subscription account. Valid Azure environments are `AzureCloud`, `AzureChinaCloud`, `AzureGermanCloud`, or `AzureUSGovernment`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#azure_environment AzureSubscriptionAccount#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * The management certificate associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#certificate AzureSubscriptionAccount#certificate}
  */
  readonly certificate?: string;
  /**
  * The thumbprint of the management certificate associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#certificate_thumbprint AzureSubscriptionAccount#certificate_thumbprint}
  */
  readonly certificateThumbprint?: string;
  /**
  * The description of this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#description AzureSubscriptionAccount#description}
  */
  readonly description?: string;
  /**
  * A list of environment IDs associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#environments AzureSubscriptionAccount#environments}
  */
  readonly environments?: string[];
  /**
  * The management endpoint associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#management_endpoint AzureSubscriptionAccount#management_endpoint}
  */
  readonly managementEndpoint?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#name AzureSubscriptionAccount#name}
  */
  readonly name: string;
  /**
  * The space ID associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#space_id AzureSubscriptionAccount#space_id}
  */
  readonly spaceId?: string;
  /**
  * The storage endpoint suffix associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#storage_endpoint_suffix AzureSubscriptionAccount#storage_endpoint_suffix}
  */
  readonly storageEndpointSuffix?: string;
  /**
  * The subscription ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#subscription_id AzureSubscriptionAccount#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * A list of tenant tags associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#tenant_tags AzureSubscriptionAccount#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#tenanted_deployment_participation AzureSubscriptionAccount#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this Azure subscription account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#tenants AzureSubscriptionAccount#tenants}
  */
  readonly tenants?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account octopusdeploy_azure_subscription_account}
*/
export class AzureSubscriptionAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_azure_subscription_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureSubscriptionAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureSubscriptionAccount to import
  * @param importFromId The id of the existing AzureSubscriptionAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureSubscriptionAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_azure_subscription_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_subscription_account octopusdeploy_azure_subscription_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSubscriptionAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSubscriptionAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_azure_subscription_account',
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
    this._azureEnvironment = config.azureEnvironment;
    this._certificate = config.certificate;
    this._certificateThumbprint = config.certificateThumbprint;
    this._description = config.description;
    this._environments = config.environments;
    this._managementEndpoint = config.managementEndpoint;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._storageEndpointSuffix = config.storageEndpointSuffix;
    this._subscriptionId = config.subscriptionId;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_thumbprint - computed: true, optional: true, required: false
  private _certificateThumbprint?: string; 
  public get certificateThumbprint() {
    return this.getStringAttribute('certificate_thumbprint');
  }
  public set certificateThumbprint(value: string) {
    this._certificateThumbprint = value;
  }
  public resetCertificateThumbprint() {
    this._certificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateThumbprintInput() {
    return this._certificateThumbprint;
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_endpoint - computed: false, optional: true, required: false
  private _managementEndpoint?: string; 
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }
  public resetManagementEndpoint() {
    this._managementEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointInput() {
    return this._managementEndpoint;
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // storage_endpoint_suffix - computed: false, optional: true, required: false
  private _storageEndpointSuffix?: string; 
  public get storageEndpointSuffix() {
    return this.getStringAttribute('storage_endpoint_suffix');
  }
  public set storageEndpointSuffix(value: string) {
    this._storageEndpointSuffix = value;
  }
  public resetStorageEndpointSuffix() {
    this._storageEndpointSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointSuffixInput() {
    return this._storageEndpointSuffix;
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

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }

  // tenanted_deployment_participation - computed: true, optional: true, required: false
  private _tenantedDeploymentParticipation?: string; 
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }
  public set tenantedDeploymentParticipation(value: string) {
    this._tenantedDeploymentParticipation = value;
  }
  public resetTenantedDeploymentParticipation() {
    this._tenantedDeploymentParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantedDeploymentParticipationInput() {
    return this._tenantedDeploymentParticipation;
  }

  // tenants - computed: true, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_environment: cdktf.stringToTerraform(this._azureEnvironment),
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_thumbprint: cdktf.stringToTerraform(this._certificateThumbprint),
      description: cdktf.stringToTerraform(this._description),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      management_endpoint: cdktf.stringToTerraform(this._managementEndpoint),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      storage_endpoint_suffix: cdktf.stringToTerraform(this._storageEndpointSuffix),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_environment: {
        value: cdktf.stringToHclTerraform(this._azureEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_thumbprint: {
        value: cdktf.stringToHclTerraform(this._certificateThumbprint),
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
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      management_endpoint: {
        value: cdktf.stringToHclTerraform(this._managementEndpoint),
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
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_endpoint_suffix: {
        value: cdktf.stringToHclTerraform(this._storageEndpointSuffix),
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
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenanted_deployment_participation: {
        value: cdktf.stringToHclTerraform(this._tenantedDeploymentParticipation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
