// generated from terraform resource schema

import { GroupAccounts, 
groupAccountsToTerraform, 
groupAccountsToHclTerraform, 
GroupAccountsList, 
GroupAdministeredClientsList, 
GroupAdministeredSystemsList, 
GroupAdmins, 
groupAdminsToTerraform, 
groupAdminsToHclTerraform, 
GroupAdminsList, 
GroupAuditOutputReference, 
GroupAuditConfig, 
groupAuditConfigToTerraform, 
groupAuditConfigToHclTerraform, 
GroupAuditConfigOutputReference, 
GroupAuthorizedGroupsList, 
GroupClientPermissions, 
groupClientPermissionsToTerraform, 
groupClientPermissionsToHclTerraform, 
GroupClientPermissionsList, 
GroupClientsList, 
GroupContentAdministeredSystemsList, 
GroupGlobalRolesOutputReference, 
GroupGroupAccessInfoOutputReference, 
GroupGroupauditinginfoOutputReference, 
GroupGroupinfoOutputReference, 
GroupHelpdeskList, 
GroupLinksList, 
GroupMarkersOutputReference, 
GroupMyaccountOutputReference, 
GroupMydelegatedaccountOutputReference, 
GroupNestedGroupsList, 
GroupOwnedAccessProfilesList, 
GroupOwnedClientsList, 
GroupOwnedDirectoriesList, 
GroupOwnedGroupsOnSystemOutputReference, 
GroupOwnedOrganizationalUnitsList, 
GroupOwnedSystemsList, 
GroupPermissionsList, 
GroupRecentAuditsList, 
GroupServiceAccountsList, 
GroupSystemsList, 
GroupVaultOutputReference, 
GroupWebhooksList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#accounts Group#accounts}
  */
  readonly accounts?: GroupAccounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#additional Group#additional}
  */
  readonly additional?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#admins Group#admins}
  */
  readonly admins?: GroupAdmins[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#application_administration Group#application_administration}
  */
  readonly applicationAdministration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#audit_config Group#audit_config}
  */
  readonly auditConfig?: GroupAuditConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#authorizing_group_auditing_uuid Group#authorizing_group_auditing_uuid}
  */
  readonly authorizingGroupAuditingUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#authorizing_group_delegation_uuid Group#authorizing_group_delegation_uuid}
  */
  readonly authorizingGroupDelegationUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#authorizing_group_membership_uuid Group#authorizing_group_membership_uuid}
  */
  readonly authorizingGroupMembershipUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#authorizing_group_provisioning_uuid Group#authorizing_group_provisioning_uuid}
  */
  readonly authorizingGroupProvisioningUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#classification_uuid Group#classification_uuid}
  */
  readonly classificationUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#client_permissions Group#client_permissions}
  */
  readonly clientPermissions?: GroupClientPermissions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#extended_access Group#extended_access}
  */
  readonly extendedAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#hide_audit_trail Group#hide_audit_trail}
  */
  readonly hideAuditTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#nested_under_uuid Group#nested_under_uuid}
  */
  readonly nestedUnderUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#organizational_unit_uuid Group#organizational_unit_uuid}
  */
  readonly organizationalUnitUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#private_group Group#private_group}
  */
  readonly privateGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#profile_administration Group#profile_administration}
  */
  readonly profileAdministration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#record_trail Group#record_trail}
  */
  readonly recordTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#rotating_password_required Group#rotating_password_required}
  */
  readonly rotatingPasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#single_managed Group#single_managed}
  */
  readonly singleManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#vault_recovery Group#vault_recovery}
  */
  readonly vaultRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#vault_requires_activation Group#vault_requires_activation}
  */
  readonly vaultRequiresActivation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group keyhub_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/resources/group keyhub_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'keyhub_group',
      terraformGeneratorMetadata: {
        providerName: 'keyhub',
        providerVersion: '2.45.0',
        providerVersionConstraint: '2.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accounts.internalValue = config.accounts;
    this._additional = config.additional;
    this._admins.internalValue = config.admins;
    this._applicationAdministration = config.applicationAdministration;
    this._auditConfig.internalValue = config.auditConfig;
    this._authorizingGroupAuditingUuid = config.authorizingGroupAuditingUuid;
    this._authorizingGroupDelegationUuid = config.authorizingGroupDelegationUuid;
    this._authorizingGroupMembershipUuid = config.authorizingGroupMembershipUuid;
    this._authorizingGroupProvisioningUuid = config.authorizingGroupProvisioningUuid;
    this._classificationUuid = config.classificationUuid;
    this._clientPermissions.internalValue = config.clientPermissions;
    this._description = config.description;
    this._extendedAccess = config.extendedAccess;
    this._hideAuditTrail = config.hideAuditTrail;
    this._name = config.name;
    this._nestedUnderUuid = config.nestedUnderUuid;
    this._organizationalUnitUuid = config.organizationalUnitUuid;
    this._privateGroup = config.privateGroup;
    this._profileAdministration = config.profileAdministration;
    this._recordTrail = config.recordTrail;
    this._rotatingPasswordRequired = config.rotatingPasswordRequired;
    this._singleManaged = config.singleManaged;
    this._vaultRecovery = config.vaultRecovery;
    this._vaultRequiresActivation = config.vaultRequiresActivation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: false, optional: true, required: false
  private _accounts = new GroupAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: GroupAccounts[] | cdktf.IResolvable) {
    this._accounts.internalValue = value;
  }
  public resetAccounts() {
    this._accounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // additional - computed: false, optional: true, required: false
  private _additional?: string[]; 
  public get additional() {
    return this.getListAttribute('additional');
  }
  public set additional(value: string[]) {
    this._additional = value;
  }
  public resetAdditional() {
    this._additional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInput() {
    return this._additional;
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // administered_clients - computed: true, optional: false, required: false
  private _administeredClients = new GroupAdministeredClientsList(this, "administered_clients", false);
  public get administeredClients() {
    return this._administeredClients;
  }

  // administered_systems - computed: true, optional: false, required: false
  private _administeredSystems = new GroupAdministeredSystemsList(this, "administered_systems", false);
  public get administeredSystems() {
    return this._administeredSystems;
  }

  // admins - computed: false, optional: true, required: false
  private _admins = new GroupAdminsList(this, "admins", false);
  public get admins() {
    return this._admins;
  }
  public putAdmins(value: GroupAdmins[] | cdktf.IResolvable) {
    this._admins.internalValue = value;
  }
  public resetAdmins() {
    this._admins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins.internalValue;
  }

  // application_administration - computed: true, optional: true, required: false
  private _applicationAdministration?: boolean | cdktf.IResolvable; 
  public get applicationAdministration() {
    return this.getBooleanAttribute('application_administration');
  }
  public set applicationAdministration(value: boolean | cdktf.IResolvable) {
    this._applicationAdministration = value;
  }
  public resetApplicationAdministration() {
    this._applicationAdministration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationAdministrationInput() {
    return this._applicationAdministration;
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new GroupAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // audit_config - computed: true, optional: true, required: false
  private _auditConfig = new GroupAuditConfigOutputReference(this, "audit_config");
  public get auditConfig() {
    return this._auditConfig;
  }
  public putAuditConfig(value: GroupAuditConfig) {
    this._auditConfig.internalValue = value;
  }
  public resetAuditConfig() {
    this._auditConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditConfigInput() {
    return this._auditConfig.internalValue;
  }

  // audit_requested - computed: true, optional: false, required: false
  public get auditRequested() {
    return this.getBooleanAttribute('audit_requested');
  }

  // authorized_groups - computed: true, optional: false, required: false
  private _authorizedGroups = new GroupAuthorizedGroupsList(this, "authorized_groups", false);
  public get authorizedGroups() {
    return this._authorizedGroups;
  }

  // authorizing_group_auditing_uuid - computed: false, optional: true, required: false
  private _authorizingGroupAuditingUuid?: string; 
  public get authorizingGroupAuditingUuid() {
    return this.getStringAttribute('authorizing_group_auditing_uuid');
  }
  public set authorizingGroupAuditingUuid(value: string) {
    this._authorizingGroupAuditingUuid = value;
  }
  public resetAuthorizingGroupAuditingUuid() {
    this._authorizingGroupAuditingUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupAuditingUuidInput() {
    return this._authorizingGroupAuditingUuid;
  }

  // authorizing_group_delegation_uuid - computed: false, optional: true, required: false
  private _authorizingGroupDelegationUuid?: string; 
  public get authorizingGroupDelegationUuid() {
    return this.getStringAttribute('authorizing_group_delegation_uuid');
  }
  public set authorizingGroupDelegationUuid(value: string) {
    this._authorizingGroupDelegationUuid = value;
  }
  public resetAuthorizingGroupDelegationUuid() {
    this._authorizingGroupDelegationUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupDelegationUuidInput() {
    return this._authorizingGroupDelegationUuid;
  }

  // authorizing_group_membership_uuid - computed: false, optional: true, required: false
  private _authorizingGroupMembershipUuid?: string; 
  public get authorizingGroupMembershipUuid() {
    return this.getStringAttribute('authorizing_group_membership_uuid');
  }
  public set authorizingGroupMembershipUuid(value: string) {
    this._authorizingGroupMembershipUuid = value;
  }
  public resetAuthorizingGroupMembershipUuid() {
    this._authorizingGroupMembershipUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupMembershipUuidInput() {
    return this._authorizingGroupMembershipUuid;
  }

  // authorizing_group_provisioning_uuid - computed: false, optional: true, required: false
  private _authorizingGroupProvisioningUuid?: string; 
  public get authorizingGroupProvisioningUuid() {
    return this.getStringAttribute('authorizing_group_provisioning_uuid');
  }
  public set authorizingGroupProvisioningUuid(value: string) {
    this._authorizingGroupProvisioningUuid = value;
  }
  public resetAuthorizingGroupProvisioningUuid() {
    this._authorizingGroupProvisioningUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingGroupProvisioningUuidInput() {
    return this._authorizingGroupProvisioningUuid;
  }

  // authorizing_group_types - computed: true, optional: false, required: false
  public get authorizingGroupTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authorizing_group_types'));
  }

  // classification_uuid - computed: true, optional: true, required: false
  private _classificationUuid?: string; 
  public get classificationUuid() {
    return this.getStringAttribute('classification_uuid');
  }
  public set classificationUuid(value: string) {
    this._classificationUuid = value;
  }
  public resetClassificationUuid() {
    this._classificationUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationUuidInput() {
    return this._classificationUuid;
  }

  // client_permissions - computed: false, optional: true, required: false
  private _clientPermissions = new GroupClientPermissionsList(this, "client_permissions", false);
  public get clientPermissions() {
    return this._clientPermissions;
  }
  public putClientPermissions(value: GroupClientPermissions[] | cdktf.IResolvable) {
    this._clientPermissions.internalValue = value;
  }
  public resetClientPermissions() {
    this._clientPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPermissionsInput() {
    return this._clientPermissions.internalValue;
  }

  // clients - computed: true, optional: false, required: false
  private _clients = new GroupClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }

  // content_administered_systems - computed: true, optional: false, required: false
  private _contentAdministeredSystems = new GroupContentAdministeredSystemsList(this, "content_administered_systems", false);
  public get contentAdministeredSystems() {
    return this._contentAdministeredSystems;
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

  // extended_access - computed: true, optional: true, required: false
  private _extendedAccess?: string; 
  public get extendedAccess() {
    return this.getStringAttribute('extended_access');
  }
  public set extendedAccess(value: string) {
    this._extendedAccess = value;
  }
  public resetExtendedAccess() {
    this._extendedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAccessInput() {
    return this._extendedAccess;
  }

  // global_roles - computed: true, optional: false, required: false
  private _globalRoles = new GroupGlobalRolesOutputReference(this, "global_roles");
  public get globalRoles() {
    return this._globalRoles;
  }

  // group_access_info - computed: true, optional: false, required: false
  private _groupAccessInfo = new GroupGroupAccessInfoOutputReference(this, "group_access_info");
  public get groupAccessInfo() {
    return this._groupAccessInfo;
  }

  // groupauditinginfo - computed: true, optional: false, required: false
  private _groupauditinginfo = new GroupGroupauditinginfoOutputReference(this, "groupauditinginfo");
  public get groupauditinginfo() {
    return this._groupauditinginfo;
  }

  // groupinfo - computed: true, optional: false, required: false
  private _groupinfo = new GroupGroupinfoOutputReference(this, "groupinfo");
  public get groupinfo() {
    return this._groupinfo;
  }

  // helpdesk - computed: true, optional: false, required: false
  private _helpdesk = new GroupHelpdeskList(this, "helpdesk", false);
  public get helpdesk() {
    return this._helpdesk;
  }

  // hide_audit_trail - computed: true, optional: true, required: false
  private _hideAuditTrail?: boolean | cdktf.IResolvable; 
  public get hideAuditTrail() {
    return this.getBooleanAttribute('hide_audit_trail');
  }
  public set hideAuditTrail(value: boolean | cdktf.IResolvable) {
    this._hideAuditTrail = value;
  }
  public resetHideAuditTrail() {
    this._hideAuditTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideAuditTrailInput() {
    return this._hideAuditTrail;
  }

  // links - computed: true, optional: false, required: false
  private _links = new GroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new GroupMarkersOutputReference(this, "markers");
  public get markers() {
    return this._markers;
  }

  // myaccount - computed: true, optional: false, required: false
  private _myaccount = new GroupMyaccountOutputReference(this, "myaccount");
  public get myaccount() {
    return this._myaccount;
  }

  // mydelegatedaccount - computed: true, optional: false, required: false
  private _mydelegatedaccount = new GroupMydelegatedaccountOutputReference(this, "mydelegatedaccount");
  public get mydelegatedaccount() {
    return this._mydelegatedaccount;
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

  // nested_groups - computed: true, optional: false, required: false
  private _nestedGroups = new GroupNestedGroupsList(this, "nested_groups", false);
  public get nestedGroups() {
    return this._nestedGroups;
  }

  // nested_under_uuid - computed: false, optional: true, required: false
  private _nestedUnderUuid?: string; 
  public get nestedUnderUuid() {
    return this.getStringAttribute('nested_under_uuid');
  }
  public set nestedUnderUuid(value: string) {
    this._nestedUnderUuid = value;
  }
  public resetNestedUnderUuid() {
    this._nestedUnderUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedUnderUuidInput() {
    return this._nestedUnderUuid;
  }

  // organizational_unit_uuid - computed: true, optional: true, required: false
  private _organizationalUnitUuid?: string; 
  public get organizationalUnitUuid() {
    return this.getStringAttribute('organizational_unit_uuid');
  }
  public set organizationalUnitUuid(value: string) {
    this._organizationalUnitUuid = value;
  }
  public resetOrganizationalUnitUuid() {
    this._organizationalUnitUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitUuidInput() {
    return this._organizationalUnitUuid;
  }

  // owned_access_profiles - computed: true, optional: false, required: false
  private _ownedAccessProfiles = new GroupOwnedAccessProfilesList(this, "owned_access_profiles", false);
  public get ownedAccessProfiles() {
    return this._ownedAccessProfiles;
  }

  // owned_clients - computed: true, optional: false, required: false
  private _ownedClients = new GroupOwnedClientsList(this, "owned_clients", false);
  public get ownedClients() {
    return this._ownedClients;
  }

  // owned_directories - computed: true, optional: false, required: false
  private _ownedDirectories = new GroupOwnedDirectoriesList(this, "owned_directories", false);
  public get ownedDirectories() {
    return this._ownedDirectories;
  }

  // owned_groups_on_system - computed: true, optional: false, required: false
  private _ownedGroupsOnSystem = new GroupOwnedGroupsOnSystemOutputReference(this, "owned_groups_on_system");
  public get ownedGroupsOnSystem() {
    return this._ownedGroupsOnSystem;
  }

  // owned_organizational_units - computed: true, optional: false, required: false
  private _ownedOrganizationalUnits = new GroupOwnedOrganizationalUnitsList(this, "owned_organizational_units", false);
  public get ownedOrganizationalUnits() {
    return this._ownedOrganizationalUnits;
  }

  // owned_systems - computed: true, optional: false, required: false
  private _ownedSystems = new GroupOwnedSystemsList(this, "owned_systems", false);
  public get ownedSystems() {
    return this._ownedSystems;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new GroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // private_group - computed: true, optional: true, required: false
  private _privateGroup?: boolean | cdktf.IResolvable; 
  public get privateGroup() {
    return this.getBooleanAttribute('private_group');
  }
  public set privateGroup(value: boolean | cdktf.IResolvable) {
    this._privateGroup = value;
  }
  public resetPrivateGroup() {
    this._privateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateGroupInput() {
    return this._privateGroup;
  }

  // profile_administration - computed: true, optional: true, required: false
  private _profileAdministration?: boolean | cdktf.IResolvable; 
  public get profileAdministration() {
    return this.getBooleanAttribute('profile_administration');
  }
  public set profileAdministration(value: boolean | cdktf.IResolvable) {
    this._profileAdministration = value;
  }
  public resetProfileAdministration() {
    this._profileAdministration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAdministrationInput() {
    return this._profileAdministration;
  }

  // recent_audits - computed: true, optional: false, required: false
  private _recentAudits = new GroupRecentAuditsList(this, "recent_audits", false);
  public get recentAudits() {
    return this._recentAudits;
  }

  // record_trail - computed: true, optional: true, required: false
  private _recordTrail?: boolean | cdktf.IResolvable; 
  public get recordTrail() {
    return this.getBooleanAttribute('record_trail');
  }
  public set recordTrail(value: boolean | cdktf.IResolvable) {
    this._recordTrail = value;
  }
  public resetRecordTrail() {
    this._recordTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTrailInput() {
    return this._recordTrail;
  }

  // requeststatus - computed: true, optional: false, required: false
  public get requeststatus() {
    return this.getStringAttribute('requeststatus');
  }

  // rotating_password_required - computed: true, optional: true, required: false
  private _rotatingPasswordRequired?: boolean | cdktf.IResolvable; 
  public get rotatingPasswordRequired() {
    return this.getBooleanAttribute('rotating_password_required');
  }
  public set rotatingPasswordRequired(value: boolean | cdktf.IResolvable) {
    this._rotatingPasswordRequired = value;
  }
  public resetRotatingPasswordRequired() {
    this._rotatingPasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatingPasswordRequiredInput() {
    return this._rotatingPasswordRequired;
  }

  // service_accounts - computed: true, optional: false, required: false
  private _serviceAccounts = new GroupServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }

  // single_managed - computed: true, optional: true, required: false
  private _singleManaged?: boolean | cdktf.IResolvable; 
  public get singleManaged() {
    return this.getBooleanAttribute('single_managed');
  }
  public set singleManaged(value: boolean | cdktf.IResolvable) {
    this._singleManaged = value;
  }
  public resetSingleManaged() {
    this._singleManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleManagedInput() {
    return this._singleManaged;
  }

  // systems - computed: true, optional: false, required: false
  private _systems = new GroupSystemsList(this, "systems", false);
  public get systems() {
    return this._systems;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vault - computed: true, optional: false, required: false
  private _vault = new GroupVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }

  // vault_recovery - computed: true, optional: true, required: false
  private _vaultRecovery?: string; 
  public get vaultRecovery() {
    return this.getStringAttribute('vault_recovery');
  }
  public set vaultRecovery(value: string) {
    this._vaultRecovery = value;
  }
  public resetVaultRecovery() {
    this._vaultRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRecoveryInput() {
    return this._vaultRecovery;
  }

  // vault_requires_activation - computed: true, optional: true, required: false
  private _vaultRequiresActivation?: boolean | cdktf.IResolvable; 
  public get vaultRequiresActivation() {
    return this.getBooleanAttribute('vault_requires_activation');
  }
  public set vaultRequiresActivation(value: boolean | cdktf.IResolvable) {
    this._vaultRequiresActivation = value;
  }
  public resetVaultRequiresActivation() {
    this._vaultRequiresActivation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRequiresActivationInput() {
    return this._vaultRequiresActivation;
  }

  // webhooks - computed: true, optional: false, required: false
  private _webhooks = new GroupWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounts: cdktf.listMapper(groupAccountsToTerraform, false)(this._accounts.internalValue),
      additional: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additional),
      admins: cdktf.listMapper(groupAdminsToTerraform, false)(this._admins.internalValue),
      application_administration: cdktf.booleanToTerraform(this._applicationAdministration),
      audit_config: groupAuditConfigToTerraform(this._auditConfig.internalValue),
      authorizing_group_auditing_uuid: cdktf.stringToTerraform(this._authorizingGroupAuditingUuid),
      authorizing_group_delegation_uuid: cdktf.stringToTerraform(this._authorizingGroupDelegationUuid),
      authorizing_group_membership_uuid: cdktf.stringToTerraform(this._authorizingGroupMembershipUuid),
      authorizing_group_provisioning_uuid: cdktf.stringToTerraform(this._authorizingGroupProvisioningUuid),
      classification_uuid: cdktf.stringToTerraform(this._classificationUuid),
      client_permissions: cdktf.listMapper(groupClientPermissionsToTerraform, false)(this._clientPermissions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      extended_access: cdktf.stringToTerraform(this._extendedAccess),
      hide_audit_trail: cdktf.booleanToTerraform(this._hideAuditTrail),
      name: cdktf.stringToTerraform(this._name),
      nested_under_uuid: cdktf.stringToTerraform(this._nestedUnderUuid),
      organizational_unit_uuid: cdktf.stringToTerraform(this._organizationalUnitUuid),
      private_group: cdktf.booleanToTerraform(this._privateGroup),
      profile_administration: cdktf.booleanToTerraform(this._profileAdministration),
      record_trail: cdktf.booleanToTerraform(this._recordTrail),
      rotating_password_required: cdktf.booleanToTerraform(this._rotatingPasswordRequired),
      single_managed: cdktf.booleanToTerraform(this._singleManaged),
      vault_recovery: cdktf.stringToTerraform(this._vaultRecovery),
      vault_requires_activation: cdktf.booleanToTerraform(this._vaultRequiresActivation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounts: {
        value: cdktf.listMapperHcl(groupAccountsToHclTerraform, false)(this._accounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupAccountsList",
      },
      additional: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additional),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admins: {
        value: cdktf.listMapperHcl(groupAdminsToHclTerraform, false)(this._admins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupAdminsList",
      },
      application_administration: {
        value: cdktf.booleanToHclTerraform(this._applicationAdministration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_config: {
        value: groupAuditConfigToHclTerraform(this._auditConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupAuditConfig",
      },
      authorizing_group_auditing_uuid: {
        value: cdktf.stringToHclTerraform(this._authorizingGroupAuditingUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizing_group_delegation_uuid: {
        value: cdktf.stringToHclTerraform(this._authorizingGroupDelegationUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizing_group_membership_uuid: {
        value: cdktf.stringToHclTerraform(this._authorizingGroupMembershipUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizing_group_provisioning_uuid: {
        value: cdktf.stringToHclTerraform(this._authorizingGroupProvisioningUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      classification_uuid: {
        value: cdktf.stringToHclTerraform(this._classificationUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_permissions: {
        value: cdktf.listMapperHcl(groupClientPermissionsToHclTerraform, false)(this._clientPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupClientPermissionsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_access: {
        value: cdktf.stringToHclTerraform(this._extendedAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_audit_trail: {
        value: cdktf.booleanToHclTerraform(this._hideAuditTrail),
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
      nested_under_uuid: {
        value: cdktf.stringToHclTerraform(this._nestedUnderUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit_uuid: {
        value: cdktf.stringToHclTerraform(this._organizationalUnitUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_group: {
        value: cdktf.booleanToHclTerraform(this._privateGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_administration: {
        value: cdktf.booleanToHclTerraform(this._profileAdministration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_trail: {
        value: cdktf.booleanToHclTerraform(this._recordTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rotating_password_required: {
        value: cdktf.booleanToHclTerraform(this._rotatingPasswordRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      single_managed: {
        value: cdktf.booleanToHclTerraform(this._singleManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vault_recovery: {
        value: cdktf.stringToHclTerraform(this._vaultRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_requires_activation: {
        value: cdktf.booleanToHclTerraform(this._vaultRequiresActivation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
