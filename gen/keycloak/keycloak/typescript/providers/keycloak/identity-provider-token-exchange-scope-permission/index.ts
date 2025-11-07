// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderTokenExchangeScopePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ids of the clients for which a policy will be created and set on scope based token exchange permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission#clients IdentityProviderTokenExchangeScopePermission#clients}
  */
  readonly clients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission#id IdentityProviderTokenExchangeScopePermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of policy that is created. At the moment only 'client' type is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission#policy_type IdentityProviderTokenExchangeScopePermission#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission#provider_alias IdentityProviderTokenExchangeScopePermission#provider_alias}
  */
  readonly providerAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission#realm_id IdentityProviderTokenExchangeScopePermission#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission keycloak_identity_provider_token_exchange_scope_permission}
*/
export class IdentityProviderTokenExchangeScopePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_identity_provider_token_exchange_scope_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProviderTokenExchangeScopePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProviderTokenExchangeScopePermission to import
  * @param importFromId The id of the existing IdentityProviderTokenExchangeScopePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProviderTokenExchangeScopePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_identity_provider_token_exchange_scope_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/identity_provider_token_exchange_scope_permission keycloak_identity_provider_token_exchange_scope_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderTokenExchangeScopePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderTokenExchangeScopePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_identity_provider_token_exchange_scope_permission',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clients = config.clients;
    this._id = config.id;
    this._policyType = config.policyType;
    this._providerAlias = config.providerAlias;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_idp_resource_id - computed: true, optional: false, required: false
  public get authorizationIdpResourceId() {
    return this.getStringAttribute('authorization_idp_resource_id');
  }

  // authorization_resource_server_id - computed: true, optional: false, required: false
  public get authorizationResourceServerId() {
    return this.getStringAttribute('authorization_resource_server_id');
  }

  // authorization_token_exchange_scope_permission_id - computed: true, optional: false, required: false
  public get authorizationTokenExchangeScopePermissionId() {
    return this.getStringAttribute('authorization_token_exchange_scope_permission_id');
  }

  // clients - computed: false, optional: false, required: true
  private _clients?: string[]; 
  public get clients() {
    return cdktf.Fn.tolist(this.getListAttribute('clients'));
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
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

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // provider_alias - computed: false, optional: false, required: true
  private _providerAlias?: string; 
  public get providerAlias() {
    return this.getStringAttribute('provider_alias');
  }
  public set providerAlias(value: string) {
    this._providerAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAliasInput() {
    return this._providerAlias;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clients),
      id: cdktf.stringToTerraform(this._id),
      policy_type: cdktf.stringToTerraform(this._policyType),
      provider_alias: cdktf.stringToTerraform(this._providerAlias),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_alias: {
        value: cdktf.stringToHclTerraform(this._providerAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
