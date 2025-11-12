// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapGroupMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#drop_non_existing_groups_during_sync LdapGroupMapper#drop_non_existing_groups_during_sync}
  */
  readonly dropNonExistingGroupsDuringSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#group_name_ldap_attribute LdapGroupMapper#group_name_ldap_attribute}
  */
  readonly groupNameLdapAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#group_object_classes LdapGroupMapper#group_object_classes}
  */
  readonly groupObjectClasses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#groups_ldap_filter LdapGroupMapper#groups_ldap_filter}
  */
  readonly groupsLdapFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#groups_path LdapGroupMapper#groups_path}
  */
  readonly groupsPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#id LdapGroupMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#ignore_missing_groups LdapGroupMapper#ignore_missing_groups}
  */
  readonly ignoreMissingGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#ldap_groups_dn LdapGroupMapper#ldap_groups_dn}
  */
  readonly ldapGroupsDn: string;
  /**
  * The ldap user federation provider to attach this mapper to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#ldap_user_federation_id LdapGroupMapper#ldap_user_federation_id}
  */
  readonly ldapUserFederationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#mapped_group_attributes LdapGroupMapper#mapped_group_attributes}
  */
  readonly mappedGroupAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#memberof_ldap_attribute LdapGroupMapper#memberof_ldap_attribute}
  */
  readonly memberofLdapAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#membership_attribute_type LdapGroupMapper#membership_attribute_type}
  */
  readonly membershipAttributeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#membership_ldap_attribute LdapGroupMapper#membership_ldap_attribute}
  */
  readonly membershipLdapAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#membership_user_ldap_attribute LdapGroupMapper#membership_user_ldap_attribute}
  */
  readonly membershipUserLdapAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#mode LdapGroupMapper#mode}
  */
  readonly mode?: string;
  /**
  * Display name of the mapper when displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#name LdapGroupMapper#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#preserve_group_inheritance LdapGroupMapper#preserve_group_inheritance}
  */
  readonly preserveGroupInheritance?: boolean | cdktf.IResolvable;
  /**
  * The realm in which the ldap user federation provider exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#realm_id LdapGroupMapper#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#user_roles_retrieve_strategy LdapGroupMapper#user_roles_retrieve_strategy}
  */
  readonly userRolesRetrieveStrategy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper keycloak_ldap_group_mapper}
*/
export class LdapGroupMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_ldap_group_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapGroupMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapGroupMapper to import
  * @param importFromId The id of the existing LdapGroupMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapGroupMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_ldap_group_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/ldap_group_mapper keycloak_ldap_group_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapGroupMapperConfig
  */
  public constructor(scope: Construct, id: string, config: LdapGroupMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_ldap_group_mapper',
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
    this._dropNonExistingGroupsDuringSync = config.dropNonExistingGroupsDuringSync;
    this._groupNameLdapAttribute = config.groupNameLdapAttribute;
    this._groupObjectClasses = config.groupObjectClasses;
    this._groupsLdapFilter = config.groupsLdapFilter;
    this._groupsPath = config.groupsPath;
    this._id = config.id;
    this._ignoreMissingGroups = config.ignoreMissingGroups;
    this._ldapGroupsDn = config.ldapGroupsDn;
    this._ldapUserFederationId = config.ldapUserFederationId;
    this._mappedGroupAttributes = config.mappedGroupAttributes;
    this._memberofLdapAttribute = config.memberofLdapAttribute;
    this._membershipAttributeType = config.membershipAttributeType;
    this._membershipLdapAttribute = config.membershipLdapAttribute;
    this._membershipUserLdapAttribute = config.membershipUserLdapAttribute;
    this._mode = config.mode;
    this._name = config.name;
    this._preserveGroupInheritance = config.preserveGroupInheritance;
    this._realmId = config.realmId;
    this._userRolesRetrieveStrategy = config.userRolesRetrieveStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drop_non_existing_groups_during_sync - computed: false, optional: true, required: false
  private _dropNonExistingGroupsDuringSync?: boolean | cdktf.IResolvable; 
  public get dropNonExistingGroupsDuringSync() {
    return this.getBooleanAttribute('drop_non_existing_groups_during_sync');
  }
  public set dropNonExistingGroupsDuringSync(value: boolean | cdktf.IResolvable) {
    this._dropNonExistingGroupsDuringSync = value;
  }
  public resetDropNonExistingGroupsDuringSync() {
    this._dropNonExistingGroupsDuringSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropNonExistingGroupsDuringSyncInput() {
    return this._dropNonExistingGroupsDuringSync;
  }

  // group_name_ldap_attribute - computed: false, optional: false, required: true
  private _groupNameLdapAttribute?: string; 
  public get groupNameLdapAttribute() {
    return this.getStringAttribute('group_name_ldap_attribute');
  }
  public set groupNameLdapAttribute(value: string) {
    this._groupNameLdapAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameLdapAttributeInput() {
    return this._groupNameLdapAttribute;
  }

  // group_object_classes - computed: false, optional: false, required: true
  private _groupObjectClasses?: string[]; 
  public get groupObjectClasses() {
    return this.getListAttribute('group_object_classes');
  }
  public set groupObjectClasses(value: string[]) {
    this._groupObjectClasses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectClassesInput() {
    return this._groupObjectClasses;
  }

  // groups_ldap_filter - computed: false, optional: true, required: false
  private _groupsLdapFilter?: string; 
  public get groupsLdapFilter() {
    return this.getStringAttribute('groups_ldap_filter');
  }
  public set groupsLdapFilter(value: string) {
    this._groupsLdapFilter = value;
  }
  public resetGroupsLdapFilter() {
    this._groupsLdapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsLdapFilterInput() {
    return this._groupsLdapFilter;
  }

  // groups_path - computed: true, optional: true, required: false
  private _groupsPath?: string; 
  public get groupsPath() {
    return this.getStringAttribute('groups_path');
  }
  public set groupsPath(value: string) {
    this._groupsPath = value;
  }
  public resetGroupsPath() {
    this._groupsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPathInput() {
    return this._groupsPath;
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

  // ignore_missing_groups - computed: false, optional: true, required: false
  private _ignoreMissingGroups?: boolean | cdktf.IResolvable; 
  public get ignoreMissingGroups() {
    return this.getBooleanAttribute('ignore_missing_groups');
  }
  public set ignoreMissingGroups(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingGroups = value;
  }
  public resetIgnoreMissingGroups() {
    this._ignoreMissingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingGroupsInput() {
    return this._ignoreMissingGroups;
  }

  // ldap_groups_dn - computed: false, optional: false, required: true
  private _ldapGroupsDn?: string; 
  public get ldapGroupsDn() {
    return this.getStringAttribute('ldap_groups_dn');
  }
  public set ldapGroupsDn(value: string) {
    this._ldapGroupsDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupsDnInput() {
    return this._ldapGroupsDn;
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

  // mapped_group_attributes - computed: false, optional: true, required: false
  private _mappedGroupAttributes?: string[]; 
  public get mappedGroupAttributes() {
    return this.getListAttribute('mapped_group_attributes');
  }
  public set mappedGroupAttributes(value: string[]) {
    this._mappedGroupAttributes = value;
  }
  public resetMappedGroupAttributes() {
    this._mappedGroupAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedGroupAttributesInput() {
    return this._mappedGroupAttributes;
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

  // preserve_group_inheritance - computed: false, optional: true, required: false
  private _preserveGroupInheritance?: boolean | cdktf.IResolvable; 
  public get preserveGroupInheritance() {
    return this.getBooleanAttribute('preserve_group_inheritance');
  }
  public set preserveGroupInheritance(value: boolean | cdktf.IResolvable) {
    this._preserveGroupInheritance = value;
  }
  public resetPreserveGroupInheritance() {
    this._preserveGroupInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveGroupInheritanceInput() {
    return this._preserveGroupInheritance;
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
      drop_non_existing_groups_during_sync: cdktf.booleanToTerraform(this._dropNonExistingGroupsDuringSync),
      group_name_ldap_attribute: cdktf.stringToTerraform(this._groupNameLdapAttribute),
      group_object_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupObjectClasses),
      groups_ldap_filter: cdktf.stringToTerraform(this._groupsLdapFilter),
      groups_path: cdktf.stringToTerraform(this._groupsPath),
      id: cdktf.stringToTerraform(this._id),
      ignore_missing_groups: cdktf.booleanToTerraform(this._ignoreMissingGroups),
      ldap_groups_dn: cdktf.stringToTerraform(this._ldapGroupsDn),
      ldap_user_federation_id: cdktf.stringToTerraform(this._ldapUserFederationId),
      mapped_group_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mappedGroupAttributes),
      memberof_ldap_attribute: cdktf.stringToTerraform(this._memberofLdapAttribute),
      membership_attribute_type: cdktf.stringToTerraform(this._membershipAttributeType),
      membership_ldap_attribute: cdktf.stringToTerraform(this._membershipLdapAttribute),
      membership_user_ldap_attribute: cdktf.stringToTerraform(this._membershipUserLdapAttribute),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      preserve_group_inheritance: cdktf.booleanToTerraform(this._preserveGroupInheritance),
      realm_id: cdktf.stringToTerraform(this._realmId),
      user_roles_retrieve_strategy: cdktf.stringToTerraform(this._userRolesRetrieveStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drop_non_existing_groups_during_sync: {
        value: cdktf.booleanToHclTerraform(this._dropNonExistingGroupsDuringSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_name_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._groupNameLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupObjectClasses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      groups_ldap_filter: {
        value: cdktf.stringToHclTerraform(this._groupsLdapFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_path: {
        value: cdktf.stringToHclTerraform(this._groupsPath),
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
      ignore_missing_groups: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissingGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_groups_dn: {
        value: cdktf.stringToHclTerraform(this._ldapGroupsDn),
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
      mapped_group_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mappedGroupAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      preserve_group_inheritance: {
        value: cdktf.booleanToHclTerraform(this._preserveGroupInheritance),
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
