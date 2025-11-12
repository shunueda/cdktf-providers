// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapHardcodedRoleMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper#id LdapHardcodedRoleMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ldap user federation provider to attach this mapper to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper#ldap_user_federation_id LdapHardcodedRoleMapper#ldap_user_federation_id}
  */
  readonly ldapUserFederationId: string;
  /**
  * Display name of the mapper when displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper#name LdapHardcodedRoleMapper#name}
  */
  readonly name: string;
  /**
  * The realm in which the ldap user federation provider exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper#realm_id LdapHardcodedRoleMapper#realm_id}
  */
  readonly realmId: string;
  /**
  * Role to grant to user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper#role LdapHardcodedRoleMapper#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper keycloak_ldap_hardcoded_role_mapper}
*/
export class LdapHardcodedRoleMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_ldap_hardcoded_role_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapHardcodedRoleMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapHardcodedRoleMapper to import
  * @param importFromId The id of the existing LdapHardcodedRoleMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapHardcodedRoleMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_ldap_hardcoded_role_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_hardcoded_role_mapper keycloak_ldap_hardcoded_role_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapHardcodedRoleMapperConfig
  */
  public constructor(scope: Construct, id: string, config: LdapHardcodedRoleMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_ldap_hardcoded_role_mapper',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0',
        providerVersionConstraint: '5.5.0'
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
    this._ldapUserFederationId = config.ldapUserFederationId;
    this._name = config.name;
    this._realmId = config.realmId;
    this._role = config.role;
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

  // ldap_user_federation_id - computed: false, optional: false, required: true
  private _ldapUserFederationId?: string; 
  public get ldapUserFederationId() {
    return this.getStringAttribute('ldap_user_federation_id');
  }
  public set ldapUserFederationId(value: string) {
    this._ldapUserFederationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUserFederationIdInput() {
    return this._ldapUserFederationId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ldap_user_federation_id: cdktf.stringToTerraform(this._ldapUserFederationId),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      role: cdktf.stringToTerraform(this._role),
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
      ldap_user_federation_id: {
        value: cdktf.stringToHclTerraform(this._ldapUserFederationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
