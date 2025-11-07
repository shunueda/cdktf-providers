// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapUserAttributeMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, the value fetched from LDAP will override the value stored in Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#always_read_value_from_ldap LdapUserAttributeMapper#always_read_value_from_ldap}
  */
  readonly alwaysReadValueFromLdap?: boolean | cdktf.IResolvable;
  /**
  * Default value to set in LDAP if is_mandatory_in_ldap and the value is empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#attribute_default_value LdapUserAttributeMapper#attribute_default_value}
  */
  readonly attributeDefaultValue?: string;
  /**
  * When true, an empty default value is forced for mandatory attributes even when a default value is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#attribute_force_default LdapUserAttributeMapper#attribute_force_default}
  */
  readonly attributeForceDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#id LdapUserAttributeMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Should be true for binary LDAP attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#is_binary_attribute LdapUserAttributeMapper#is_binary_attribute}
  */
  readonly isBinaryAttribute?: boolean | cdktf.IResolvable;
  /**
  * When true, this attribute must exist in LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#is_mandatory_in_ldap LdapUserAttributeMapper#is_mandatory_in_ldap}
  */
  readonly isMandatoryInLdap?: boolean | cdktf.IResolvable;
  /**
  * Name of the mapped attribute on LDAP object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#ldap_attribute LdapUserAttributeMapper#ldap_attribute}
  */
  readonly ldapAttribute: string;
  /**
  * The ldap user federation provider to attach this mapper to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#ldap_user_federation_id LdapUserAttributeMapper#ldap_user_federation_id}
  */
  readonly ldapUserFederationId: string;
  /**
  * Display name of the mapper when displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#name LdapUserAttributeMapper#name}
  */
  readonly name: string;
  /**
  * When true, this attribute is not saved back to LDAP when the user attribute is updated in Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#read_only LdapUserAttributeMapper#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The realm in which the ldap user federation provider exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#realm_id LdapUserAttributeMapper#realm_id}
  */
  readonly realmId: string;
  /**
  * Name of the UserModel property or attribute you want to map the LDAP attribute into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#user_model_attribute LdapUserAttributeMapper#user_model_attribute}
  */
  readonly userModelAttribute: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper keycloak_ldap_user_attribute_mapper}
*/
export class LdapUserAttributeMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_ldap_user_attribute_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapUserAttributeMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapUserAttributeMapper to import
  * @param importFromId The id of the existing LdapUserAttributeMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapUserAttributeMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_ldap_user_attribute_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/ldap_user_attribute_mapper keycloak_ldap_user_attribute_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapUserAttributeMapperConfig
  */
  public constructor(scope: Construct, id: string, config: LdapUserAttributeMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_ldap_user_attribute_mapper',
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
    this._alwaysReadValueFromLdap = config.alwaysReadValueFromLdap;
    this._attributeDefaultValue = config.attributeDefaultValue;
    this._attributeForceDefault = config.attributeForceDefault;
    this._id = config.id;
    this._isBinaryAttribute = config.isBinaryAttribute;
    this._isMandatoryInLdap = config.isMandatoryInLdap;
    this._ldapAttribute = config.ldapAttribute;
    this._ldapUserFederationId = config.ldapUserFederationId;
    this._name = config.name;
    this._readOnly = config.readOnly;
    this._realmId = config.realmId;
    this._userModelAttribute = config.userModelAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_read_value_from_ldap - computed: false, optional: true, required: false
  private _alwaysReadValueFromLdap?: boolean | cdktf.IResolvable; 
  public get alwaysReadValueFromLdap() {
    return this.getBooleanAttribute('always_read_value_from_ldap');
  }
  public set alwaysReadValueFromLdap(value: boolean | cdktf.IResolvable) {
    this._alwaysReadValueFromLdap = value;
  }
  public resetAlwaysReadValueFromLdap() {
    this._alwaysReadValueFromLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysReadValueFromLdapInput() {
    return this._alwaysReadValueFromLdap;
  }

  // attribute_default_value - computed: false, optional: true, required: false
  private _attributeDefaultValue?: string; 
  public get attributeDefaultValue() {
    return this.getStringAttribute('attribute_default_value');
  }
  public set attributeDefaultValue(value: string) {
    this._attributeDefaultValue = value;
  }
  public resetAttributeDefaultValue() {
    this._attributeDefaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefaultValueInput() {
    return this._attributeDefaultValue;
  }

  // attribute_force_default - computed: false, optional: true, required: false
  private _attributeForceDefault?: boolean | cdktf.IResolvable; 
  public get attributeForceDefault() {
    return this.getBooleanAttribute('attribute_force_default');
  }
  public set attributeForceDefault(value: boolean | cdktf.IResolvable) {
    this._attributeForceDefault = value;
  }
  public resetAttributeForceDefault() {
    this._attributeForceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeForceDefaultInput() {
    return this._attributeForceDefault;
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

  // is_binary_attribute - computed: false, optional: true, required: false
  private _isBinaryAttribute?: boolean | cdktf.IResolvable; 
  public get isBinaryAttribute() {
    return this.getBooleanAttribute('is_binary_attribute');
  }
  public set isBinaryAttribute(value: boolean | cdktf.IResolvable) {
    this._isBinaryAttribute = value;
  }
  public resetIsBinaryAttribute() {
    this._isBinaryAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBinaryAttributeInput() {
    return this._isBinaryAttribute;
  }

  // is_mandatory_in_ldap - computed: false, optional: true, required: false
  private _isMandatoryInLdap?: boolean | cdktf.IResolvable; 
  public get isMandatoryInLdap() {
    return this.getBooleanAttribute('is_mandatory_in_ldap');
  }
  public set isMandatoryInLdap(value: boolean | cdktf.IResolvable) {
    this._isMandatoryInLdap = value;
  }
  public resetIsMandatoryInLdap() {
    this._isMandatoryInLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMandatoryInLdapInput() {
    return this._isMandatoryInLdap;
  }

  // ldap_attribute - computed: false, optional: false, required: true
  private _ldapAttribute?: string; 
  public get ldapAttribute() {
    return this.getStringAttribute('ldap_attribute');
  }
  public set ldapAttribute(value: string) {
    this._ldapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributeInput() {
    return this._ldapAttribute;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
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

  // user_model_attribute - computed: false, optional: false, required: true
  private _userModelAttribute?: string; 
  public get userModelAttribute() {
    return this.getStringAttribute('user_model_attribute');
  }
  public set userModelAttribute(value: string) {
    this._userModelAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userModelAttributeInput() {
    return this._userModelAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_read_value_from_ldap: cdktf.booleanToTerraform(this._alwaysReadValueFromLdap),
      attribute_default_value: cdktf.stringToTerraform(this._attributeDefaultValue),
      attribute_force_default: cdktf.booleanToTerraform(this._attributeForceDefault),
      id: cdktf.stringToTerraform(this._id),
      is_binary_attribute: cdktf.booleanToTerraform(this._isBinaryAttribute),
      is_mandatory_in_ldap: cdktf.booleanToTerraform(this._isMandatoryInLdap),
      ldap_attribute: cdktf.stringToTerraform(this._ldapAttribute),
      ldap_user_federation_id: cdktf.stringToTerraform(this._ldapUserFederationId),
      name: cdktf.stringToTerraform(this._name),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      realm_id: cdktf.stringToTerraform(this._realmId),
      user_model_attribute: cdktf.stringToTerraform(this._userModelAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_read_value_from_ldap: {
        value: cdktf.booleanToHclTerraform(this._alwaysReadValueFromLdap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attribute_default_value: {
        value: cdktf.stringToHclTerraform(this._attributeDefaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_force_default: {
        value: cdktf.booleanToHclTerraform(this._attributeForceDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_binary_attribute: {
        value: cdktf.booleanToHclTerraform(this._isBinaryAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mandatory_in_ldap: {
        value: cdktf.booleanToHclTerraform(this._isMandatoryInLdap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._ldapAttribute),
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
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_model_attribute: {
        value: cdktf.stringToHclTerraform(this._userModelAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
