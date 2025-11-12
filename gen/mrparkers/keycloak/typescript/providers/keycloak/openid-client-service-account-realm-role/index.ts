// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientServiceAccountRealmRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role#id OpenidClientServiceAccountRealmRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role#realm_id OpenidClientServiceAccountRealmRole#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role#role OpenidClientServiceAccountRealmRole#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role#service_account_user_id OpenidClientServiceAccountRealmRole#service_account_user_id}
  */
  readonly serviceAccountUserId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role keycloak_openid_client_service_account_realm_role}
*/
export class OpenidClientServiceAccountRealmRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_service_account_realm_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientServiceAccountRealmRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientServiceAccountRealmRole to import
  * @param importFromId The id of the existing OpenidClientServiceAccountRealmRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientServiceAccountRealmRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_service_account_realm_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_service_account_realm_role keycloak_openid_client_service_account_realm_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientServiceAccountRealmRoleConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientServiceAccountRealmRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_service_account_realm_role',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
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
    this._realmId = config.realmId;
    this._role = config.role;
    this._serviceAccountUserId = config.serviceAccountUserId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // service_account_user_id - computed: false, optional: false, required: true
  private _serviceAccountUserId?: string; 
  public get serviceAccountUserId() {
    return this.getStringAttribute('service_account_user_id');
  }
  public set serviceAccountUserId(value: string) {
    this._serviceAccountUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUserIdInput() {
    return this._serviceAccountUserId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
      role: cdktf.stringToTerraform(this._role),
      service_account_user_id: cdktf.stringToTerraform(this._serviceAccountUserId),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_user_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
