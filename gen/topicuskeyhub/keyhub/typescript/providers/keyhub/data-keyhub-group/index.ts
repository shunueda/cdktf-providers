// generated from terraform resource schema

import { DataKeyhubGroupAccountsList, 
DataKeyhubGroupAdministeredClientsList, 
DataKeyhubGroupAdministeredSystemsList, 
DataKeyhubGroupAdminsList, 
DataKeyhubGroupAuditOutputReference, 
DataKeyhubGroupAuditConfigOutputReference, 
DataKeyhubGroupAuthorizedGroupsList, 
DataKeyhubGroupAuthorizingGroupAuditingOutputReference, 
DataKeyhubGroupAuthorizingGroupDelegationOutputReference, 
DataKeyhubGroupAuthorizingGroupMembershipOutputReference, 
DataKeyhubGroupAuthorizingGroupProvisioningOutputReference, 
DataKeyhubGroupClassificationOutputReference, 
DataKeyhubGroupClientPermissionsList, 
DataKeyhubGroupClientsList, 
DataKeyhubGroupContentAdministeredSystemsList, 
DataKeyhubGroupGlobalRolesOutputReference, 
DataKeyhubGroupGroupAccessInfoOutputReference, 
DataKeyhubGroupGroupauditinginfoOutputReference, 
DataKeyhubGroupGroupinfoOutputReference, 
DataKeyhubGroupHelpdeskList, 
DataKeyhubGroupLinksList, 
DataKeyhubGroupMarkersOutputReference, 
DataKeyhubGroupMyaccountOutputReference, 
DataKeyhubGroupMydelegatedaccountOutputReference, 
DataKeyhubGroupNestedGroupsList, 
DataKeyhubGroupNestedUnderOutputReference, 
DataKeyhubGroupOrganizationalUnitOutputReference, 
DataKeyhubGroupOwnedAccessProfilesList, 
DataKeyhubGroupOwnedClientsList, 
DataKeyhubGroupOwnedDirectoriesList, 
DataKeyhubGroupOwnedGroupsOnSystemOutputReference, 
DataKeyhubGroupOwnedOrganizationalUnitsList, 
DataKeyhubGroupOwnedSystemsList, 
DataKeyhubGroupPermissionsList, 
DataKeyhubGroupRecentAuditsList, 
DataKeyhubGroupServiceAccountsList, 
DataKeyhubGroupSystemsList, 
DataKeyhubGroupVaultOutputReference, 
DataKeyhubGroupWebhooksList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataKeyhubGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/group#additional DataKeyhubGroup#additional}
  */
  readonly additional?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/group#uuid DataKeyhubGroup#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/group keyhub_group}
*/
export class DataKeyhubGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyhubGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyhubGroup to import
  * @param importFromId The id of the existing DataKeyhubGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyhubGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/group keyhub_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyhubGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyhubGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'keyhub_group',
      terraformGeneratorMetadata: {
        providerName: 'keyhub',
        providerVersion: '2.44.0',
        providerVersionConstraint: '2.44.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additional = config.additional;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataKeyhubGroupAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
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
  private _administeredClients = new DataKeyhubGroupAdministeredClientsList(this, "administered_clients", false);
  public get administeredClients() {
    return this._administeredClients;
  }

  // administered_systems - computed: true, optional: false, required: false
  private _administeredSystems = new DataKeyhubGroupAdministeredSystemsList(this, "administered_systems", false);
  public get administeredSystems() {
    return this._administeredSystems;
  }

  // admins - computed: true, optional: false, required: false
  private _admins = new DataKeyhubGroupAdminsList(this, "admins", false);
  public get admins() {
    return this._admins;
  }

  // application_administration - computed: true, optional: false, required: false
  public get applicationAdministration() {
    return this.getBooleanAttribute('application_administration');
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataKeyhubGroupAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // audit_config - computed: true, optional: false, required: false
  private _auditConfig = new DataKeyhubGroupAuditConfigOutputReference(this, "audit_config");
  public get auditConfig() {
    return this._auditConfig;
  }

  // audit_requested - computed: true, optional: false, required: false
  public get auditRequested() {
    return this.getBooleanAttribute('audit_requested');
  }

  // authorized_groups - computed: true, optional: false, required: false
  private _authorizedGroups = new DataKeyhubGroupAuthorizedGroupsList(this, "authorized_groups", false);
  public get authorizedGroups() {
    return this._authorizedGroups;
  }

  // authorizing_group_auditing - computed: true, optional: false, required: false
  private _authorizingGroupAuditing = new DataKeyhubGroupAuthorizingGroupAuditingOutputReference(this, "authorizing_group_auditing");
  public get authorizingGroupAuditing() {
    return this._authorizingGroupAuditing;
  }

  // authorizing_group_delegation - computed: true, optional: false, required: false
  private _authorizingGroupDelegation = new DataKeyhubGroupAuthorizingGroupDelegationOutputReference(this, "authorizing_group_delegation");
  public get authorizingGroupDelegation() {
    return this._authorizingGroupDelegation;
  }

  // authorizing_group_membership - computed: true, optional: false, required: false
  private _authorizingGroupMembership = new DataKeyhubGroupAuthorizingGroupMembershipOutputReference(this, "authorizing_group_membership");
  public get authorizingGroupMembership() {
    return this._authorizingGroupMembership;
  }

  // authorizing_group_provisioning - computed: true, optional: false, required: false
  private _authorizingGroupProvisioning = new DataKeyhubGroupAuthorizingGroupProvisioningOutputReference(this, "authorizing_group_provisioning");
  public get authorizingGroupProvisioning() {
    return this._authorizingGroupProvisioning;
  }

  // authorizing_group_types - computed: true, optional: false, required: false
  public get authorizingGroupTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authorizing_group_types'));
  }

  // classification - computed: true, optional: false, required: false
  private _classification = new DataKeyhubGroupClassificationOutputReference(this, "classification");
  public get classification() {
    return this._classification;
  }

  // client_permissions - computed: true, optional: false, required: false
  private _clientPermissions = new DataKeyhubGroupClientPermissionsList(this, "client_permissions", false);
  public get clientPermissions() {
    return this._clientPermissions;
  }

  // clients - computed: true, optional: false, required: false
  private _clients = new DataKeyhubGroupClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }

  // content_administered_systems - computed: true, optional: false, required: false
  private _contentAdministeredSystems = new DataKeyhubGroupContentAdministeredSystemsList(this, "content_administered_systems", false);
  public get contentAdministeredSystems() {
    return this._contentAdministeredSystems;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extended_access - computed: true, optional: false, required: false
  public get extendedAccess() {
    return this.getStringAttribute('extended_access');
  }

  // global_roles - computed: true, optional: false, required: false
  private _globalRoles = new DataKeyhubGroupGlobalRolesOutputReference(this, "global_roles");
  public get globalRoles() {
    return this._globalRoles;
  }

  // group_access_info - computed: true, optional: false, required: false
  private _groupAccessInfo = new DataKeyhubGroupGroupAccessInfoOutputReference(this, "group_access_info");
  public get groupAccessInfo() {
    return this._groupAccessInfo;
  }

  // groupauditinginfo - computed: true, optional: false, required: false
  private _groupauditinginfo = new DataKeyhubGroupGroupauditinginfoOutputReference(this, "groupauditinginfo");
  public get groupauditinginfo() {
    return this._groupauditinginfo;
  }

  // groupinfo - computed: true, optional: false, required: false
  private _groupinfo = new DataKeyhubGroupGroupinfoOutputReference(this, "groupinfo");
  public get groupinfo() {
    return this._groupinfo;
  }

  // helpdesk - computed: true, optional: false, required: false
  private _helpdesk = new DataKeyhubGroupHelpdeskList(this, "helpdesk", false);
  public get helpdesk() {
    return this._helpdesk;
  }

  // hide_audit_trail - computed: true, optional: false, required: false
  public get hideAuditTrail() {
    return this.getBooleanAttribute('hide_audit_trail');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataKeyhubGroupMarkersOutputReference(this, "markers");
  public get markers() {
    return this._markers;
  }

  // myaccount - computed: true, optional: false, required: false
  private _myaccount = new DataKeyhubGroupMyaccountOutputReference(this, "myaccount");
  public get myaccount() {
    return this._myaccount;
  }

  // mydelegatedaccount - computed: true, optional: false, required: false
  private _mydelegatedaccount = new DataKeyhubGroupMydelegatedaccountOutputReference(this, "mydelegatedaccount");
  public get mydelegatedaccount() {
    return this._mydelegatedaccount;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nested_groups - computed: true, optional: false, required: false
  private _nestedGroups = new DataKeyhubGroupNestedGroupsList(this, "nested_groups", false);
  public get nestedGroups() {
    return this._nestedGroups;
  }

  // nested_under - computed: true, optional: false, required: false
  private _nestedUnder = new DataKeyhubGroupNestedUnderOutputReference(this, "nested_under");
  public get nestedUnder() {
    return this._nestedUnder;
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubGroupOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // owned_access_profiles - computed: true, optional: false, required: false
  private _ownedAccessProfiles = new DataKeyhubGroupOwnedAccessProfilesList(this, "owned_access_profiles", false);
  public get ownedAccessProfiles() {
    return this._ownedAccessProfiles;
  }

  // owned_clients - computed: true, optional: false, required: false
  private _ownedClients = new DataKeyhubGroupOwnedClientsList(this, "owned_clients", false);
  public get ownedClients() {
    return this._ownedClients;
  }

  // owned_directories - computed: true, optional: false, required: false
  private _ownedDirectories = new DataKeyhubGroupOwnedDirectoriesList(this, "owned_directories", false);
  public get ownedDirectories() {
    return this._ownedDirectories;
  }

  // owned_groups_on_system - computed: true, optional: false, required: false
  private _ownedGroupsOnSystem = new DataKeyhubGroupOwnedGroupsOnSystemOutputReference(this, "owned_groups_on_system");
  public get ownedGroupsOnSystem() {
    return this._ownedGroupsOnSystem;
  }

  // owned_organizational_units - computed: true, optional: false, required: false
  private _ownedOrganizationalUnits = new DataKeyhubGroupOwnedOrganizationalUnitsList(this, "owned_organizational_units", false);
  public get ownedOrganizationalUnits() {
    return this._ownedOrganizationalUnits;
  }

  // owned_systems - computed: true, optional: false, required: false
  private _ownedSystems = new DataKeyhubGroupOwnedSystemsList(this, "owned_systems", false);
  public get ownedSystems() {
    return this._ownedSystems;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // private_group - computed: true, optional: false, required: false
  public get privateGroup() {
    return this.getBooleanAttribute('private_group');
  }

  // profile_administration - computed: true, optional: false, required: false
  public get profileAdministration() {
    return this.getBooleanAttribute('profile_administration');
  }

  // recent_audits - computed: true, optional: false, required: false
  private _recentAudits = new DataKeyhubGroupRecentAuditsList(this, "recent_audits", false);
  public get recentAudits() {
    return this._recentAudits;
  }

  // record_trail - computed: true, optional: false, required: false
  public get recordTrail() {
    return this.getBooleanAttribute('record_trail');
  }

  // requeststatus - computed: true, optional: false, required: false
  public get requeststatus() {
    return this.getStringAttribute('requeststatus');
  }

  // rotating_password_required - computed: true, optional: false, required: false
  public get rotatingPasswordRequired() {
    return this.getBooleanAttribute('rotating_password_required');
  }

  // service_accounts - computed: true, optional: false, required: false
  private _serviceAccounts = new DataKeyhubGroupServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }

  // single_managed - computed: true, optional: false, required: false
  public get singleManaged() {
    return this.getBooleanAttribute('single_managed');
  }

  // systems - computed: true, optional: false, required: false
  private _systems = new DataKeyhubGroupSystemsList(this, "systems", false);
  public get systems() {
    return this._systems;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vault - computed: true, optional: false, required: false
  private _vault = new DataKeyhubGroupVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }

  // vault_recovery - computed: true, optional: false, required: false
  public get vaultRecovery() {
    return this.getStringAttribute('vault_recovery');
  }

  // vault_requires_activation - computed: true, optional: false, required: false
  public get vaultRequiresActivation() {
    return this.getBooleanAttribute('vault_requires_activation');
  }

  // webhooks - computed: true, optional: false, required: false
  private _webhooks = new DataKeyhubGroupWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additional),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additional),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
