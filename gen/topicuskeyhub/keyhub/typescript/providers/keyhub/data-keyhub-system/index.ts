// generated from terraform resource schema

import { DataKeyhubSystemAbstractProvisionedLdapOutputReference, 
DataKeyhubSystemAccountOutputReference, 
DataKeyhubSystemAuditOutputReference, 
DataKeyhubSystemCleanupPeriodOutputReference, 
DataKeyhubSystemContentAdministratorOutputReference, 
DataKeyhubSystemIssuedPermissionsList, 
DataKeyhubSystemLinksList, 
DataKeyhubSystemManagementPermissionsOutputReference, 
DataKeyhubSystemMarkersOutputReference, 
DataKeyhubSystemOrganizationalUnitOutputReference, 
DataKeyhubSystemOwnerOutputReference, 
DataKeyhubSystemPermissionsList, 
DataKeyhubSystemProvisionedADOutputReference, 
DataKeyhubSystemProvisionedAzureOidcDirectoryOutputReference, 
DataKeyhubSystemProvisionedAzureSyncLdapDirectoryOutputReference, 
DataKeyhubSystemProvisionedAzureTenantOutputReference, 
DataKeyhubSystemProvisionedInternalLdapOutputReference, 
DataKeyhubSystemProvisionedLdapOutputReference, 
DataKeyhubSystemProvisionedLdapDirectoryOutputReference, 
DataKeyhubSystemProvisionedNamespaceOutputReference, 
DataKeyhubSystemProvisionedScimOutputReference, 
DataKeyhubSystemStatisticsOutputReference, 
DataKeyhubSystemSupportedGroupTypesOutputReference, 
DataKeyhubSystemTechnicalAdministratorOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataKeyhubSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/system#additional DataKeyhubSystem#additional}
  */
  readonly additional?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/system#uuid DataKeyhubSystem#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/system keyhub_system}
*/
export class DataKeyhubSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyhubSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyhubSystem to import
  * @param importFromId The id of the existing DataKeyhubSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyhubSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.45.0/docs/data-sources/system keyhub_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyhubSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyhubSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'keyhub_system',
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
    this._additional = config.additional;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abstract_provisioned_ldap - computed: true, optional: false, required: false
  private _abstractProvisionedLdap = new DataKeyhubSystemAbstractProvisionedLdapOutputReference(this, "abstract_provisioned_ldap");
  public get abstractProvisionedLdap() {
    return this._abstractProvisionedLdap;
  }

  // account - computed: true, optional: false, required: false
  private _account = new DataKeyhubSystemAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }

  // account_count - computed: true, optional: false, required: false
  public get accountCount() {
    return this.getNumberAttribute('account_count');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
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

  // admin_permissions - computed: true, optional: false, required: false
  public get adminPermissions() {
    return this.getBooleanAttribute('admin_permissions');
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataKeyhubSystemAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // can_write_accounts - computed: true, optional: false, required: false
  public get canWriteAccounts() {
    return this.getBooleanAttribute('can_write_accounts');
  }

  // cleanup_period - computed: true, optional: false, required: false
  private _cleanupPeriod = new DataKeyhubSystemCleanupPeriodOutputReference(this, "cleanup_period");
  public get cleanupPeriod() {
    return this._cleanupPeriod;
  }

  // content_admin_permissions - computed: true, optional: false, required: false
  public get contentAdminPermissions() {
    return this.getBooleanAttribute('content_admin_permissions');
  }

  // content_administrator - computed: true, optional: false, required: false
  private _contentAdministrator = new DataKeyhubSystemContentAdministratorOutputReference(this, "content_administrator");
  public get contentAdministrator() {
    return this._contentAdministrator;
  }

  // external_uuid - computed: true, optional: false, required: false
  public get externalUuid() {
    return this.getStringAttribute('external_uuid');
  }

  // group_on_system_provisioning - computed: true, optional: false, required: false
  public get groupOnSystemProvisioning() {
    return this.getStringAttribute('group_on_system_provisioning');
  }

  // issued_permissions - computed: true, optional: false, required: false
  private _issuedPermissions = new DataKeyhubSystemIssuedPermissionsList(this, "issued_permissions", false);
  public get issuedPermissions() {
    return this._issuedPermissions;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubSystemLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // login_name - computed: true, optional: false, required: false
  public get loginName() {
    return this.getStringAttribute('login_name');
  }

  // management_permissions - computed: true, optional: false, required: false
  private _managementPermissions = new DataKeyhubSystemManagementPermissionsOutputReference(this, "management_permissions");
  public get managementPermissions() {
    return this._managementPermissions;
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataKeyhubSystemMarkersOutputReference(this, "markers");
  public get markers() {
    return this._markers;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit - computed: true, optional: false, required: false
  private _organizationalUnit = new DataKeyhubSystemOrganizationalUnitOutputReference(this, "organizational_unit");
  public get organizationalUnit() {
    return this._organizationalUnit;
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataKeyhubSystemOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // owner_permissions - computed: true, optional: false, required: false
  public get ownerPermissions() {
    return this.getBooleanAttribute('owner_permissions');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubSystemPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // provisioned_a_d - computed: true, optional: false, required: false
  private _provisionedAD = new DataKeyhubSystemProvisionedADOutputReference(this, "provisioned_a_d");
  public get provisionedAD() {
    return this._provisionedAD;
  }

  // provisioned_azure_oidc_directory - computed: true, optional: false, required: false
  private _provisionedAzureOidcDirectory = new DataKeyhubSystemProvisionedAzureOidcDirectoryOutputReference(this, "provisioned_azure_oidc_directory");
  public get provisionedAzureOidcDirectory() {
    return this._provisionedAzureOidcDirectory;
  }

  // provisioned_azure_sync_ldap_directory - computed: true, optional: false, required: false
  private _provisionedAzureSyncLdapDirectory = new DataKeyhubSystemProvisionedAzureSyncLdapDirectoryOutputReference(this, "provisioned_azure_sync_ldap_directory");
  public get provisionedAzureSyncLdapDirectory() {
    return this._provisionedAzureSyncLdapDirectory;
  }

  // provisioned_azure_tenant - computed: true, optional: false, required: false
  private _provisionedAzureTenant = new DataKeyhubSystemProvisionedAzureTenantOutputReference(this, "provisioned_azure_tenant");
  public get provisionedAzureTenant() {
    return this._provisionedAzureTenant;
  }

  // provisioned_internal_ldap - computed: true, optional: false, required: false
  private _provisionedInternalLdap = new DataKeyhubSystemProvisionedInternalLdapOutputReference(this, "provisioned_internal_ldap");
  public get provisionedInternalLdap() {
    return this._provisionedInternalLdap;
  }

  // provisioned_ldap - computed: true, optional: false, required: false
  private _provisionedLdap = new DataKeyhubSystemProvisionedLdapOutputReference(this, "provisioned_ldap");
  public get provisionedLdap() {
    return this._provisionedLdap;
  }

  // provisioned_ldap_directory - computed: true, optional: false, required: false
  private _provisionedLdapDirectory = new DataKeyhubSystemProvisionedLdapDirectoryOutputReference(this, "provisioned_ldap_directory");
  public get provisionedLdapDirectory() {
    return this._provisionedLdapDirectory;
  }

  // provisioned_namespace - computed: true, optional: false, required: false
  private _provisionedNamespace = new DataKeyhubSystemProvisionedNamespaceOutputReference(this, "provisioned_namespace");
  public get provisionedNamespace() {
    return this._provisionedNamespace;
  }

  // provisioned_scim - computed: true, optional: false, required: false
  private _provisionedScim = new DataKeyhubSystemProvisionedScimOutputReference(this, "provisioned_scim");
  public get provisionedScim() {
    return this._provisionedScim;
  }

  // self_service_existing_groups - computed: true, optional: false, required: false
  public get selfServiceExistingGroups() {
    return this.getBooleanAttribute('self_service_existing_groups');
  }

  // self_service_new_groups - computed: true, optional: false, required: false
  public get selfServiceNewGroups() {
    return this.getBooleanAttribute('self_service_new_groups');
  }

  // self_service_new_namespaces - computed: true, optional: false, required: false
  public get selfServiceNewNamespaces() {
    return this.getBooleanAttribute('self_service_new_namespaces');
  }

  // self_service_service_accounts - computed: true, optional: false, required: false
  public get selfServiceServiceAccounts() {
    return this.getBooleanAttribute('self_service_service_accounts');
  }

  // should_destroy_unknown_accounts - computed: true, optional: false, required: false
  public get shouldDestroyUnknownAccounts() {
    return this.getBooleanAttribute('should_destroy_unknown_accounts');
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataKeyhubSystemStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }

  // supported_group_types - computed: true, optional: false, required: false
  private _supportedGroupTypes = new DataKeyhubSystemSupportedGroupTypesOutputReference(this, "supported_group_types");
  public get supportedGroupTypes() {
    return this._supportedGroupTypes;
  }

  // technical_administrator - computed: true, optional: false, required: false
  private _technicalAdministrator = new DataKeyhubSystemTechnicalAdministratorOutputReference(this, "technical_administrator");
  public get technicalAdministrator() {
    return this._technicalAdministrator;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username_prefix - computed: true, optional: false, required: false
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
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
