// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapRoleMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#client_id LdapRoleMapper#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#id LdapRoleMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#ldap_roles_dn LdapRoleMapper#ldap_roles_dn}
  */
  readonly ldapRolesDn: string;
  /**
  * The ldap user federation provider to attach this mapper to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#ldap_user_federation_id LdapRoleMapper#ldap_user_federation_id}
  */
  readonly ldapUserFederationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#memberof_ldap_attribute LdapRoleMapper#memberof_ldap_attribute}
  */
  readonly memberofLdapAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#membership_attribute_type LdapRoleMapper#membership_attribute_type}
  */
  readonly membershipAttributeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#membership_ldap_attribute LdapRoleMapper#membership_ldap_attribute}
  */
  readonly membershipLdapAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#membership_user_ldap_attribute LdapRoleMapper#membership_user_ldap_attribute}
  */
  readonly membershipUserLdapAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#mode LdapRoleMapper#mode}
  */
  readonly mode?: string;
  /**
  * Display name of the mapper when displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#name LdapRoleMapper#name}
  */
  readonly name: string;
  /**
  * The realm in which the ldap user federation provider exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#realm_id LdapRoleMapper#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#role_name_ldap_attribute LdapRoleMapper#role_name_ldap_attribute}
  */
  readonly roleNameLdapAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#role_object_classes LdapRoleMapper#role_object_classes}
  */
  readonly roleObjectClasses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#roles_ldap_filter LdapRoleMapper#roles_ldap_filter}
  */
  readonly rolesLdapFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#use_realm_roles_mapping LdapRoleMapper#use_realm_roles_mapping}
  */
  readonly useRealmRolesMapping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#user_roles_retrieve_strategy LdapRoleMapper#user_roles_retrieve_strategy}
  */
  readonly userRolesRetrieveStrategy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper keycloak_ldap_role_mapper}
*/
export class LdapRoleMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_ldap_role_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapRoleMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapRoleMapper to import
  * @param importFromId The id of the existing LdapRoleMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapRoleMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_ldap_role_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_role_mapper keycloak_ldap_role_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapRoleMapperConfig
  */
  public constructor(scope: Construct, id: string, config: LdapRoleMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_ldap_role_mapper',
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
    this._clientId = config.clientId;
    this._id = config.id;
    this._ldapRolesDn = config.ldapRolesDn;
    this._ldapUserFederationId = config.ldapUserFederationId;
    this._memberofLdapAttribute = config.memberofLdapAttribute;
    this._membershipAttributeType = config.membershipAttributeType;
    this._membershipLdapAttribute = config.membershipLdapAttribute;
    this._membershipUserLdapAttribute = config.membershipUserLdapAttribute;
    this._mode = config.mode;
    this._name = config.name;
    this._realmId = config.realmId;
    this._roleNameLdapAttribute = config.roleNameLdapAttribute;
    this._roleObjectClasses = config.roleObjectClasses;
    this._rolesLdapFilter = config.rolesLdapFilter;
    this._useRealmRolesMapping = config.useRealmRolesMapping;
    this._userRolesRetrieveStrategy = config.userRolesRetrieveStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // ldap_roles_dn - computed: false, optional: false, required: true
  private _ldapRolesDn?: string; 
  public get ldapRolesDn() {
    return this.getStringAttribute('ldap_roles_dn');
  }
  public set ldapRolesDn(value: string) {
    this._ldapRolesDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapRolesDnInput() {
    return this._ldapRolesDn;
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

  // memberof_ldap_attribute - computed: false, optional: true, required: false
  private _memberofLdapAttribute?: string; 
  public get memberofLdapAttribute() {
    return this.getStringAttribute('memberof_ldap_attribute');
  }
  public set memberofLdapAttribute(value: string) {
    this._memberofLdapAttribute = value;
  }
  public resetMemberofLdapAttribute() {
    this._memberofLdapAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberofLdapAttributeInput() {
    return this._memberofLdapAttribute;
  }

  // membership_attribute_type - computed: false, optional: true, required: false
  private _membershipAttributeType?: string; 
  public get membershipAttributeType() {
    return this.getStringAttribute('membership_attribute_type');
  }
  public set membershipAttributeType(value: string) {
    this._membershipAttributeType = value;
  }
  public resetMembershipAttributeType() {
    this._membershipAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipAttributeTypeInput() {
    return this._membershipAttributeType;
  }

  // membership_ldap_attribute - computed: false, optional: false, required: true
  private _membershipLdapAttribute?: string; 
  public get membershipLdapAttribute() {
    return this.getStringAttribute('membership_ldap_attribute');
  }
  public set membershipLdapAttribute(value: string) {
    this._membershipLdapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipLdapAttributeInput() {
    return this._membershipLdapAttribute;
  }

  // membership_user_ldap_attribute - computed: false, optional: false, required: true
  private _membershipUserLdapAttribute?: string; 
  public get membershipUserLdapAttribute() {
    return this.getStringAttribute('membership_user_ldap_attribute');
  }
  public set membershipUserLdapAttribute(value: string) {
    this._membershipUserLdapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipUserLdapAttributeInput() {
    return this._membershipUserLdapAttribute;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // role_name_ldap_attribute - computed: false, optional: false, required: true
  private _roleNameLdapAttribute?: string; 
  public get roleNameLdapAttribute() {
    return this.getStringAttribute('role_name_ldap_attribute');
  }
  public set roleNameLdapAttribute(value: string) {
    this._roleNameLdapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameLdapAttributeInput() {
    return this._roleNameLdapAttribute;
  }

  // role_object_classes - computed: false, optional: false, required: true
  private _roleObjectClasses?: string[]; 
  public get roleObjectClasses() {
    return this.getListAttribute('role_object_classes');
  }
  public set roleObjectClasses(value: string[]) {
    this._roleObjectClasses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleObjectClassesInput() {
    return this._roleObjectClasses;
  }

  // roles_ldap_filter - computed: false, optional: true, required: false
  private _rolesLdapFilter?: string; 
  public get rolesLdapFilter() {
    return this.getStringAttribute('roles_ldap_filter');
  }
  public set rolesLdapFilter(value: string) {
    this._rolesLdapFilter = value;
  }
  public resetRolesLdapFilter() {
    this._rolesLdapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesLdapFilterInput() {
    return this._rolesLdapFilter;
  }

  // use_realm_roles_mapping - computed: false, optional: true, required: false
  private _useRealmRolesMapping?: boolean | cdktf.IResolvable; 
  public get useRealmRolesMapping() {
    return this.getBooleanAttribute('use_realm_roles_mapping');
  }
  public set useRealmRolesMapping(value: boolean | cdktf.IResolvable) {
    this._useRealmRolesMapping = value;
  }
  public resetUseRealmRolesMapping() {
    this._useRealmRolesMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRealmRolesMappingInput() {
    return this._useRealmRolesMapping;
  }

  // user_roles_retrieve_strategy - computed: false, optional: true, required: false
  private _userRolesRetrieveStrategy?: string; 
  public get userRolesRetrieveStrategy() {
    return this.getStringAttribute('user_roles_retrieve_strategy');
  }
  public set userRolesRetrieveStrategy(value: string) {
    this._userRolesRetrieveStrategy = value;
  }
  public resetUserRolesRetrieveStrategy() {
    this._userRolesRetrieveStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRolesRetrieveStrategyInput() {
    return this._userRolesRetrieveStrategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      ldap_roles_dn: cdktf.stringToTerraform(this._ldapRolesDn),
      ldap_user_federation_id: cdktf.stringToTerraform(this._ldapUserFederationId),
      memberof_ldap_attribute: cdktf.stringToTerraform(this._memberofLdapAttribute),
      membership_attribute_type: cdktf.stringToTerraform(this._membershipAttributeType),
      membership_ldap_attribute: cdktf.stringToTerraform(this._membershipLdapAttribute),
      membership_user_ldap_attribute: cdktf.stringToTerraform(this._membershipUserLdapAttribute),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      role_name_ldap_attribute: cdktf.stringToTerraform(this._roleNameLdapAttribute),
      role_object_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleObjectClasses),
      roles_ldap_filter: cdktf.stringToTerraform(this._rolesLdapFilter),
      use_realm_roles_mapping: cdktf.booleanToTerraform(this._useRealmRolesMapping),
      user_roles_retrieve_strategy: cdktf.stringToTerraform(this._userRolesRetrieveStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_roles_dn: {
        value: cdktf.stringToHclTerraform(this._ldapRolesDn),
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
      memberof_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._memberofLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_attribute_type: {
        value: cdktf.stringToHclTerraform(this._membershipAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._membershipLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_user_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._membershipUserLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      role_name_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._roleNameLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_object_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleObjectClasses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      roles_ldap_filter: {
        value: cdktf.stringToHclTerraform(this._rolesLdapFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_realm_roles_mapping: {
        value: cdktf.booleanToHclTerraform(this._useRealmRolesMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_roles_retrieve_strategy: {
        value: cdktf.stringToHclTerraform(this._userRolesRetrieveStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
