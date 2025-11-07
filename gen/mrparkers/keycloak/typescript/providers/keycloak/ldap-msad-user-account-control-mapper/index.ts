// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapMsadUserAccountControlMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper#id LdapMsadUserAccountControlMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper#ldap_password_policy_hints_enabled LdapMsadUserAccountControlMapper#ldap_password_policy_hints_enabled}
  */
  readonly ldapPasswordPolicyHintsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ldap user federation provider to attach this mapper to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper#ldap_user_federation_id LdapMsadUserAccountControlMapper#ldap_user_federation_id}
  */
  readonly ldapUserFederationId: string;
  /**
  * Display name of the mapper when displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper#name LdapMsadUserAccountControlMapper#name}
  */
  readonly name: string;
  /**
  * The realm in which the ldap user federation provider exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper#realm_id LdapMsadUserAccountControlMapper#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper keycloak_ldap_msad_user_account_control_mapper}
*/
export class LdapMsadUserAccountControlMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_ldap_msad_user_account_control_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapMsadUserAccountControlMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapMsadUserAccountControlMapper to import
  * @param importFromId The id of the existing LdapMsadUserAccountControlMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapMsadUserAccountControlMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_ldap_msad_user_account_control_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_msad_user_account_control_mapper keycloak_ldap_msad_user_account_control_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapMsadUserAccountControlMapperConfig
  */
  public constructor(scope: Construct, id: string, config: LdapMsadUserAccountControlMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_ldap_msad_user_account_control_mapper',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
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
    this._ldapPasswordPolicyHintsEnabled = config.ldapPasswordPolicyHintsEnabled;
    this._ldapUserFederationId = config.ldapUserFederationId;
    this._name = config.name;
    this._realmId = config.realmId;
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

  // ldap_password_policy_hints_enabled - computed: false, optional: true, required: false
  private _ldapPasswordPolicyHintsEnabled?: boolean | cdktf.IResolvable; 
  public get ldapPasswordPolicyHintsEnabled() {
    return this.getBooleanAttribute('ldap_password_policy_hints_enabled');
  }
  public set ldapPasswordPolicyHintsEnabled(value: boolean | cdktf.IResolvable) {
    this._ldapPasswordPolicyHintsEnabled = value;
  }
  public resetLdapPasswordPolicyHintsEnabled() {
    this._ldapPasswordPolicyHintsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordPolicyHintsEnabledInput() {
    return this._ldapPasswordPolicyHintsEnabled;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ldap_password_policy_hints_enabled: cdktf.booleanToTerraform(this._ldapPasswordPolicyHintsEnabled),
      ldap_user_federation_id: cdktf.stringToTerraform(this._ldapUserFederationId),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
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
      ldap_password_policy_hints_enabled: {
        value: cdktf.booleanToHclTerraform(this._ldapPasswordPolicyHintsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
