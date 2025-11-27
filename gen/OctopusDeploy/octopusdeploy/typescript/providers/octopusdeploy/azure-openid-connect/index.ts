// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureOpenidConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Keys to include in an account test. Valid options are: `space`, `account`, `type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#account_test_subject_keys AzureOpenidConnect#account_test_subject_keys}
  */
  readonly accountTestSubjectKeys?: string[];
  /**
  * The application ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#application_id AzureOpenidConnect#application_id}
  */
  readonly applicationId: string;
  /**
  * Federated credentials audience, this value is used to establish a connection between external workload identities and Microsoft Entra ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#audience AzureOpenidConnect#audience}
  */
  readonly audience?: string;
  /**
  * The authentication endpoint URI for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#authentication_endpoint AzureOpenidConnect#authentication_endpoint}
  */
  readonly authenticationEndpoint?: string;
  /**
  * The Azure environment associated with this resource. Valid Azure environments are `AzureCloud`, `AzureChinaCloud`, `AzureGermanCloud`, or `AzureUSGovernment`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#azure_environment AzureOpenidConnect#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * The description of this Azure OpenID Connect account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#description AzureOpenidConnect#description}
  */
  readonly description?: string;
  /**
  * A list of environment IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#environments AzureOpenidConnect#environments}
  */
  readonly environments?: string[];
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `environment`, `project`, `tenant`, `runbook`, `account`, `type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#execution_subject_keys AzureOpenidConnect#execution_subject_keys}
  */
  readonly executionSubjectKeys?: string[];
  /**
  * Keys to include in a health check. Valid options are `space`, `account`, `target`, `type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#health_subject_keys AzureOpenidConnect#health_subject_keys}
  */
  readonly healthSubjectKeys?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#id AzureOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#name AzureOpenidConnect#name}
  */
  readonly name: string;
  /**
  * The resource manager endpoint URI for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#resource_manager_endpoint AzureOpenidConnect#resource_manager_endpoint}
  */
  readonly resourceManagerEndpoint?: string;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#space_id AzureOpenidConnect#space_id}
  */
  readonly spaceId?: string;
  /**
  * The subscription ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#subscription_id AzureOpenidConnect#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The tenant ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#tenant_id AzureOpenidConnect#tenant_id}
  */
  readonly tenantId: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#tenant_tags AzureOpenidConnect#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#tenanted_deployment_participation AzureOpenidConnect#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#tenants AzureOpenidConnect#tenants}
  */
  readonly tenants?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect octopusdeploy_azure_openid_connect}
*/
export class AzureOpenidConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_azure_openid_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureOpenidConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureOpenidConnect to import
  * @param importFromId The id of the existing AzureOpenidConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureOpenidConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_azure_openid_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/azure_openid_connect octopusdeploy_azure_openid_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureOpenidConnectConfig
  */
  public constructor(scope: Construct, id: string, config: AzureOpenidConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_azure_openid_connect',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
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
    this._environments = config.environments;
    this._executionSubjectKeys = config.executionSubjectKeys;
    this._healthSubjectKeys = config.healthSubjectKeys;
    this._id = config.id;
    this._name = config.name;
    this._resourceManagerEndpoint = config.resourceManagerEndpoint;
    this._spaceId = config.spaceId;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_test_subject_keys - computed: false, optional: true, required: false
  private _accountTestSubjectKeys?: string[]; 
  public get accountTestSubjectKeys() {
    return this.getListAttribute('account_test_subject_keys');
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

  // audience - computed: false, optional: true, required: false
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

  // authentication_endpoint - computed: false, optional: true, required: false
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

  // execution_subject_keys - computed: false, optional: true, required: false
  private _executionSubjectKeys?: string[]; 
  public get executionSubjectKeys() {
    return this.getListAttribute('execution_subject_keys');
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

  // health_subject_keys - computed: false, optional: true, required: false
  private _healthSubjectKeys?: string[]; 
  public get healthSubjectKeys() {
    return this.getListAttribute('health_subject_keys');
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

  // resource_manager_endpoint - computed: false, optional: true, required: false
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
      account_test_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountTestSubjectKeys),
      application_id: cdktf.stringToTerraform(this._applicationId),
      audience: cdktf.stringToTerraform(this._audience),
      authentication_endpoint: cdktf.stringToTerraform(this._authenticationEndpoint),
      azure_environment: cdktf.stringToTerraform(this._azureEnvironment),
      description: cdktf.stringToTerraform(this._description),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      execution_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._executionSubjectKeys),
      health_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthSubjectKeys),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_manager_endpoint: cdktf.stringToTerraform(this._resourceManagerEndpoint),
      space_id: cdktf.stringToTerraform(this._spaceId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_test_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountTestSubjectKeys),
        isBlock: false,
        type: "list",
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
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      execution_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._executionSubjectKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      health_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthSubjectKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      resource_manager_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceManagerEndpoint),
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
