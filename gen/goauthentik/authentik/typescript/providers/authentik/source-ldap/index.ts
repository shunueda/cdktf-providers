// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#additional_group_dn SourceLdap#additional_group_dn}
  */
  readonly additionalGroupDn?: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#additional_user_dn SourceLdap#additional_user_dn}
  */
  readonly additionalUserDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#base_dn SourceLdap#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#bind_cn SourceLdap#bind_cn}
  */
  readonly bindCn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#bind_password SourceLdap#bind_password}
  */
  readonly bindPassword: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#delete_not_found_objects SourceLdap#delete_not_found_objects}
  */
  readonly deleteNotFoundObjects?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#enabled SourceLdap#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `member`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#group_membership_field SourceLdap#group_membership_field}
  */
  readonly groupMembershipField?: string;
  /**
  * Defaults to `(objectClass=group)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#group_object_filter SourceLdap#group_object_filter}
  */
  readonly groupObjectFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#id SourceLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#lookup_groups_from_user SourceLdap#lookup_groups_from_user}
  */
  readonly lookupGroupsFromUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#name SourceLdap#name}
  */
  readonly name: string;
  /**
  * Defaults to `objectSid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#object_uniqueness_field SourceLdap#object_uniqueness_field}
  */
  readonly objectUniquenessField?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#password_login_update_internal_password SourceLdap#password_login_update_internal_password}
  */
  readonly passwordLoginUpdateInternalPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#property_mappings SourceLdap#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#property_mappings_group SourceLdap#property_mappings_group}
  */
  readonly propertyMappingsGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#server_uri SourceLdap#server_uri}
  */
  readonly serverUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#slug SourceLdap#slug}
  */
  readonly slug: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#sni SourceLdap#sni}
  */
  readonly sni?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#start_tls SourceLdap#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#sync_groups SourceLdap#sync_groups}
  */
  readonly syncGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#sync_parent_group SourceLdap#sync_parent_group}
  */
  readonly syncParentGroup?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#sync_users SourceLdap#sync_users}
  */
  readonly syncUsers?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#sync_users_password SourceLdap#sync_users_password}
  */
  readonly syncUsersPassword?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `distinguishedName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#user_membership_attribute SourceLdap#user_membership_attribute}
  */
  readonly userMembershipAttribute?: string;
  /**
  * Defaults to `(objectClass=person)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#user_object_filter SourceLdap#user_object_filter}
  */
  readonly userObjectFilter?: string;
  /**
  * Defaults to `goauthentik.io/sources/%(slug)s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#user_path_template SourceLdap#user_path_template}
  */
  readonly userPathTemplate?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#uuid SourceLdap#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap authentik_source_ldap}
*/
export class SourceLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_source_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceLdap to import
  * @param importFromId The id of the existing SourceLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_source_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_ldap authentik_source_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceLdapConfig
  */
  public constructor(scope: Construct, id: string, config: SourceLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_source_ldap',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalGroupDn = config.additionalGroupDn;
    this._additionalUserDn = config.additionalUserDn;
    this._baseDn = config.baseDn;
    this._bindCn = config.bindCn;
    this._bindPassword = config.bindPassword;
    this._deleteNotFoundObjects = config.deleteNotFoundObjects;
    this._enabled = config.enabled;
    this._groupMembershipField = config.groupMembershipField;
    this._groupObjectFilter = config.groupObjectFilter;
    this._id = config.id;
    this._lookupGroupsFromUser = config.lookupGroupsFromUser;
    this._name = config.name;
    this._objectUniquenessField = config.objectUniquenessField;
    this._passwordLoginUpdateInternalPassword = config.passwordLoginUpdateInternalPassword;
    this._propertyMappings = config.propertyMappings;
    this._propertyMappingsGroup = config.propertyMappingsGroup;
    this._serverUri = config.serverUri;
    this._slug = config.slug;
    this._sni = config.sni;
    this._startTls = config.startTls;
    this._syncGroups = config.syncGroups;
    this._syncParentGroup = config.syncParentGroup;
    this._syncUsers = config.syncUsers;
    this._syncUsersPassword = config.syncUsersPassword;
    this._userMembershipAttribute = config.userMembershipAttribute;
    this._userObjectFilter = config.userObjectFilter;
    this._userPathTemplate = config.userPathTemplate;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_group_dn - computed: false, optional: true, required: false
  private _additionalGroupDn?: string; 
  public get additionalGroupDn() {
    return this.getStringAttribute('additional_group_dn');
  }
  public set additionalGroupDn(value: string) {
    this._additionalGroupDn = value;
  }
  public resetAdditionalGroupDn() {
    this._additionalGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalGroupDnInput() {
    return this._additionalGroupDn;
  }

  // additional_user_dn - computed: false, optional: true, required: false
  private _additionalUserDn?: string; 
  public get additionalUserDn() {
    return this.getStringAttribute('additional_user_dn');
  }
  public set additionalUserDn(value: string) {
    this._additionalUserDn = value;
  }
  public resetAdditionalUserDn() {
    this._additionalUserDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUserDnInput() {
    return this._additionalUserDn;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_cn - computed: false, optional: false, required: true
  private _bindCn?: string; 
  public get bindCn() {
    return this.getStringAttribute('bind_cn');
  }
  public set bindCn(value: string) {
    this._bindCn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindCnInput() {
    return this._bindCn;
  }

  // bind_password - computed: false, optional: false, required: true
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // delete_not_found_objects - computed: false, optional: true, required: false
  private _deleteNotFoundObjects?: boolean | cdktf.IResolvable; 
  public get deleteNotFoundObjects() {
    return this.getBooleanAttribute('delete_not_found_objects');
  }
  public set deleteNotFoundObjects(value: boolean | cdktf.IResolvable) {
    this._deleteNotFoundObjects = value;
  }
  public resetDeleteNotFoundObjects() {
    this._deleteNotFoundObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNotFoundObjectsInput() {
    return this._deleteNotFoundObjects;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_membership_field - computed: false, optional: true, required: false
  private _groupMembershipField?: string; 
  public get groupMembershipField() {
    return this.getStringAttribute('group_membership_field');
  }
  public set groupMembershipField(value: string) {
    this._groupMembershipField = value;
  }
  public resetGroupMembershipField() {
    this._groupMembershipField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipFieldInput() {
    return this._groupMembershipField;
  }

  // group_object_filter - computed: false, optional: true, required: false
  private _groupObjectFilter?: string; 
  public get groupObjectFilter() {
    return this.getStringAttribute('group_object_filter');
  }
  public set groupObjectFilter(value: string) {
    this._groupObjectFilter = value;
  }
  public resetGroupObjectFilter() {
    this._groupObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectFilterInput() {
    return this._groupObjectFilter;
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

  // lookup_groups_from_user - computed: false, optional: true, required: false
  private _lookupGroupsFromUser?: boolean | cdktf.IResolvable; 
  public get lookupGroupsFromUser() {
    return this.getBooleanAttribute('lookup_groups_from_user');
  }
  public set lookupGroupsFromUser(value: boolean | cdktf.IResolvable) {
    this._lookupGroupsFromUser = value;
  }
  public resetLookupGroupsFromUser() {
    this._lookupGroupsFromUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupGroupsFromUserInput() {
    return this._lookupGroupsFromUser;
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

  // object_uniqueness_field - computed: false, optional: true, required: false
  private _objectUniquenessField?: string; 
  public get objectUniquenessField() {
    return this.getStringAttribute('object_uniqueness_field');
  }
  public set objectUniquenessField(value: string) {
    this._objectUniquenessField = value;
  }
  public resetObjectUniquenessField() {
    this._objectUniquenessField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectUniquenessFieldInput() {
    return this._objectUniquenessField;
  }

  // password_login_update_internal_password - computed: false, optional: true, required: false
  private _passwordLoginUpdateInternalPassword?: boolean | cdktf.IResolvable; 
  public get passwordLoginUpdateInternalPassword() {
    return this.getBooleanAttribute('password_login_update_internal_password');
  }
  public set passwordLoginUpdateInternalPassword(value: boolean | cdktf.IResolvable) {
    this._passwordLoginUpdateInternalPassword = value;
  }
  public resetPasswordLoginUpdateInternalPassword() {
    this._passwordLoginUpdateInternalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLoginUpdateInternalPasswordInput() {
    return this._passwordLoginUpdateInternalPassword;
  }

  // property_mappings - computed: false, optional: true, required: false
  private _propertyMappings?: string[]; 
  public get propertyMappings() {
    return this.getListAttribute('property_mappings');
  }
  public set propertyMappings(value: string[]) {
    this._propertyMappings = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings;
  }

  // property_mappings_group - computed: false, optional: true, required: false
  private _propertyMappingsGroup?: string[]; 
  public get propertyMappingsGroup() {
    return this.getListAttribute('property_mappings_group');
  }
  public set propertyMappingsGroup(value: string[]) {
    this._propertyMappingsGroup = value;
  }
  public resetPropertyMappingsGroup() {
    this._propertyMappingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsGroupInput() {
    return this._propertyMappingsGroup;
  }

  // server_uri - computed: false, optional: false, required: true
  private _serverUri?: string; 
  public get serverUri() {
    return this.getStringAttribute('server_uri');
  }
  public set serverUri(value: string) {
    this._serverUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUriInput() {
    return this._serverUri;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: boolean | cdktf.IResolvable; 
  public get sni() {
    return this.getBooleanAttribute('sni');
  }
  public set sni(value: boolean | cdktf.IResolvable) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // sync_groups - computed: false, optional: true, required: false
  private _syncGroups?: boolean | cdktf.IResolvable; 
  public get syncGroups() {
    return this.getBooleanAttribute('sync_groups');
  }
  public set syncGroups(value: boolean | cdktf.IResolvable) {
    this._syncGroups = value;
  }
  public resetSyncGroups() {
    this._syncGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGroupsInput() {
    return this._syncGroups;
  }

  // sync_parent_group - computed: false, optional: true, required: false
  private _syncParentGroup?: string; 
  public get syncParentGroup() {
    return this.getStringAttribute('sync_parent_group');
  }
  public set syncParentGroup(value: string) {
    this._syncParentGroup = value;
  }
  public resetSyncParentGroup() {
    this._syncParentGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncParentGroupInput() {
    return this._syncParentGroup;
  }

  // sync_users - computed: false, optional: true, required: false
  private _syncUsers?: boolean | cdktf.IResolvable; 
  public get syncUsers() {
    return this.getBooleanAttribute('sync_users');
  }
  public set syncUsers(value: boolean | cdktf.IResolvable) {
    this._syncUsers = value;
  }
  public resetSyncUsers() {
    this._syncUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUsersInput() {
    return this._syncUsers;
  }

  // sync_users_password - computed: false, optional: true, required: false
  private _syncUsersPassword?: boolean | cdktf.IResolvable; 
  public get syncUsersPassword() {
    return this.getBooleanAttribute('sync_users_password');
  }
  public set syncUsersPassword(value: boolean | cdktf.IResolvable) {
    this._syncUsersPassword = value;
  }
  public resetSyncUsersPassword() {
    this._syncUsersPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUsersPasswordInput() {
    return this._syncUsersPassword;
  }

  // user_membership_attribute - computed: false, optional: true, required: false
  private _userMembershipAttribute?: string; 
  public get userMembershipAttribute() {
    return this.getStringAttribute('user_membership_attribute');
  }
  public set userMembershipAttribute(value: string) {
    this._userMembershipAttribute = value;
  }
  public resetUserMembershipAttribute() {
    this._userMembershipAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMembershipAttributeInput() {
    return this._userMembershipAttribute;
  }

  // user_object_filter - computed: false, optional: true, required: false
  private _userObjectFilter?: string; 
  public get userObjectFilter() {
    return this.getStringAttribute('user_object_filter');
  }
  public set userObjectFilter(value: string) {
    this._userObjectFilter = value;
  }
  public resetUserObjectFilter() {
    this._userObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectFilterInput() {
    return this._userObjectFilter;
  }

  // user_path_template - computed: false, optional: true, required: false
  private _userPathTemplate?: string; 
  public get userPathTemplate() {
    return this.getStringAttribute('user_path_template');
  }
  public set userPathTemplate(value: string) {
    this._userPathTemplate = value;
  }
  public resetUserPathTemplate() {
    this._userPathTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPathTemplateInput() {
    return this._userPathTemplate;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_group_dn: cdktf.stringToTerraform(this._additionalGroupDn),
      additional_user_dn: cdktf.stringToTerraform(this._additionalUserDn),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      bind_cn: cdktf.stringToTerraform(this._bindCn),
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      delete_not_found_objects: cdktf.booleanToTerraform(this._deleteNotFoundObjects),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_membership_field: cdktf.stringToTerraform(this._groupMembershipField),
      group_object_filter: cdktf.stringToTerraform(this._groupObjectFilter),
      id: cdktf.stringToTerraform(this._id),
      lookup_groups_from_user: cdktf.booleanToTerraform(this._lookupGroupsFromUser),
      name: cdktf.stringToTerraform(this._name),
      object_uniqueness_field: cdktf.stringToTerraform(this._objectUniquenessField),
      password_login_update_internal_password: cdktf.booleanToTerraform(this._passwordLoginUpdateInternalPassword),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      property_mappings_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappingsGroup),
      server_uri: cdktf.stringToTerraform(this._serverUri),
      slug: cdktf.stringToTerraform(this._slug),
      sni: cdktf.booleanToTerraform(this._sni),
      start_tls: cdktf.booleanToTerraform(this._startTls),
      sync_groups: cdktf.booleanToTerraform(this._syncGroups),
      sync_parent_group: cdktf.stringToTerraform(this._syncParentGroup),
      sync_users: cdktf.booleanToTerraform(this._syncUsers),
      sync_users_password: cdktf.booleanToTerraform(this._syncUsersPassword),
      user_membership_attribute: cdktf.stringToTerraform(this._userMembershipAttribute),
      user_object_filter: cdktf.stringToTerraform(this._userObjectFilter),
      user_path_template: cdktf.stringToTerraform(this._userPathTemplate),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_group_dn: {
        value: cdktf.stringToHclTerraform(this._additionalGroupDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_user_dn: {
        value: cdktf.stringToHclTerraform(this._additionalUserDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_cn: {
        value: cdktf.stringToHclTerraform(this._bindCn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_password: {
        value: cdktf.stringToHclTerraform(this._bindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_not_found_objects: {
        value: cdktf.booleanToHclTerraform(this._deleteNotFoundObjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_membership_field: {
        value: cdktf.stringToHclTerraform(this._groupMembershipField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_filter: {
        value: cdktf.stringToHclTerraform(this._groupObjectFilter),
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
      lookup_groups_from_user: {
        value: cdktf.booleanToHclTerraform(this._lookupGroupsFromUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_uniqueness_field: {
        value: cdktf.stringToHclTerraform(this._objectUniquenessField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_login_update_internal_password: {
        value: cdktf.booleanToHclTerraform(this._passwordLoginUpdateInternalPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      property_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      property_mappings_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappingsGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_uri: {
        value: cdktf.stringToHclTerraform(this._serverUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni: {
        value: cdktf.booleanToHclTerraform(this._sni),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_tls: {
        value: cdktf.booleanToHclTerraform(this._startTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_groups: {
        value: cdktf.booleanToHclTerraform(this._syncGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_parent_group: {
        value: cdktf.stringToHclTerraform(this._syncParentGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_users: {
        value: cdktf.booleanToHclTerraform(this._syncUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_users_password: {
        value: cdktf.booleanToHclTerraform(this._syncUsersPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_membership_attribute: {
        value: cdktf.stringToHclTerraform(this._userMembershipAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_object_filter: {
        value: cdktf.stringToHclTerraform(this._userObjectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_path_template: {
        value: cdktf.stringToHclTerraform(this._userPathTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
