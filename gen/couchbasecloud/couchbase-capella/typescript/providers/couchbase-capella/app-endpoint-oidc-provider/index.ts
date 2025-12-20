// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEndpointOidcProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#app_endpoint_name AppEndpointOidcProvider#app_endpoint_name}
  */
  readonly appEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#app_service_id AppEndpointOidcProvider#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#client_id AppEndpointOidcProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#cluster_id AppEndpointOidcProvider#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#discovery_url AppEndpointOidcProvider#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#issuer AppEndpointOidcProvider#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#organization_id AppEndpointOidcProvider#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#project_id AppEndpointOidcProvider#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#register AppEndpointOidcProvider#register}
  */
  readonly register?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#roles_claim AppEndpointOidcProvider#roles_claim}
  */
  readonly rolesClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#user_prefix AppEndpointOidcProvider#user_prefix}
  */
  readonly userPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#username_claim AppEndpointOidcProvider#username_claim}
  */
  readonly usernameClaim?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider couchbase-capella_app_endpoint_oidc_provider}
*/
export class AppEndpointOidcProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_app_endpoint_oidc_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppEndpointOidcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppEndpointOidcProvider to import
  * @param importFromId The id of the existing AppEndpointOidcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppEndpointOidcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_app_endpoint_oidc_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_oidc_provider couchbase-capella_app_endpoint_oidc_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEndpointOidcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AppEndpointOidcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_app_endpoint_oidc_provider',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
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
    this._appEndpointName = config.appEndpointName;
    this._appServiceId = config.appServiceId;
    this._clientId = config.clientId;
    this._clusterId = config.clusterId;
    this._discoveryUrl = config.discoveryUrl;
    this._issuer = config.issuer;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._register = config.register;
    this._rolesClaim = config.rolesClaim;
    this._userPrefix = config.userPrefix;
    this._usernameClaim = config.usernameClaim;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_endpoint_name - computed: false, optional: false, required: true
  private _appEndpointName?: string; 
  public get appEndpointName() {
    return this.getStringAttribute('app_endpoint_name');
  }
  public set appEndpointName(value: string) {
    this._appEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appEndpointNameInput() {
    return this._appEndpointName;
  }

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId?: string; 
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId;
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

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // discovery_url - computed: true, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // register - computed: true, optional: true, required: false
  private _register?: boolean | cdktf.IResolvable; 
  public get register() {
    return this.getBooleanAttribute('register');
  }
  public set register(value: boolean | cdktf.IResolvable) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // roles_claim - computed: true, optional: true, required: false
  private _rolesClaim?: string; 
  public get rolesClaim() {
    return this.getStringAttribute('roles_claim');
  }
  public set rolesClaim(value: string) {
    this._rolesClaim = value;
  }
  public resetRolesClaim() {
    this._rolesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesClaimInput() {
    return this._rolesClaim;
  }

  // user_prefix - computed: true, optional: true, required: false
  private _userPrefix?: string; 
  public get userPrefix() {
    return this.getStringAttribute('user_prefix');
  }
  public set userPrefix(value: string) {
    this._userPrefix = value;
  }
  public resetUserPrefix() {
    this._userPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrefixInput() {
    return this._userPrefix;
  }

  // username_claim - computed: true, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_endpoint_name: cdktf.stringToTerraform(this._appEndpointName),
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      client_id: cdktf.stringToTerraform(this._clientId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      discovery_url: cdktf.stringToTerraform(this._discoveryUrl),
      issuer: cdktf.stringToTerraform(this._issuer),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      register: cdktf.booleanToTerraform(this._register),
      roles_claim: cdktf.stringToTerraform(this._rolesClaim),
      user_prefix: cdktf.stringToTerraform(this._userPrefix),
      username_claim: cdktf.stringToTerraform(this._usernameClaim),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._appEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service_id: {
        value: cdktf.stringToHclTerraform(this._appServiceId),
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
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_url: {
        value: cdktf.stringToHclTerraform(this._discoveryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
      register: {
        value: cdktf.booleanToHclTerraform(this._register),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      roles_claim: {
        value: cdktf.stringToHclTerraform(this._rolesClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_prefix: {
        value: cdktf.stringToHclTerraform(this._userPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_claim: {
        value: cdktf.stringToHclTerraform(this._usernameClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
