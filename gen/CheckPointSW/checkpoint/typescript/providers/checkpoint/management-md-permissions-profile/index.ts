// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementMdPermissionsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Permission to read / edit the Cloud Management Extension (CME) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#cme_operations ManagementMdPermissionsProfile#cme_operations}
  */
  readonly cmeOperations?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#color ManagementMdPermissionsProfile#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#comments ManagementMdPermissionsProfile#comments}
  */
  readonly comments?: string;
  /**
  * Name or UID of the required default profile for all global domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#default_profile_global_domains ManagementMdPermissionsProfile#default_profile_global_domains}
  */
  readonly defaultProfileGlobalDomains?: string;
  /**
  * Name or UID of the required default profile for all local domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#default_profile_local_domains ManagementMdPermissionsProfile#default_profile_local_domains}
  */
  readonly defaultProfileLocalDomains?: string;
  /**
  * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#domains_to_process ManagementMdPermissionsProfile#domains_to_process}
  */
  readonly domainsToProcess?: string[];
  /**
  * Enable the option to specify a default profile for all global domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#enable_default_profile_for_global_domains ManagementMdPermissionsProfile#enable_default_profile_for_global_domains}
  */
  readonly enableDefaultProfileForGlobalDomains?: boolean | cdktf.IResolvable;
  /**
  * Enable the option to specify a default profile for all local domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#enable_default_profile_for_local_domains ManagementMdPermissionsProfile#enable_default_profile_for_local_domains}
  */
  readonly enableDefaultProfileForLocalDomains?: boolean | cdktf.IResolvable;
  /**
  * Lets the administrator select Enable global use for a Security Gateway shown in the MDS Gateways & Servers view.<br>Only a 'Manager' permission-level profile can edit this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#global_vpn_management ManagementMdPermissionsProfile#global_vpn_management}
  */
  readonly globalVpnManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#id ManagementMdPermissionsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#ignore_errors ManagementMdPermissionsProfile#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#ignore_warnings ManagementMdPermissionsProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Create and manage Multi-Domain Security Management administrators with the same or lower permission level. For example, a Domain manager cannot create Superusers or global managers.<br>Only a 'Manager' permission-level profile can edit this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#manage_admins ManagementMdPermissionsProfile#manage_admins}
  */
  readonly manageAdmins?: boolean | cdktf.IResolvable;
  /**
  * Controls the ability to create, edit and delete global assignment and not the ability to reassign, which is set according to the specific Domain's permission profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#manage_global_assignments ManagementMdPermissionsProfile#manage_global_assignments}
  */
  readonly manageGlobalAssignments?: boolean | cdktf.IResolvable;
  /**
  * Connect/disconnect Domain sessions, publish changes, and delete other administrator sessions.<br>Only a 'Manager' permission-level profile can edit this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#manage_sessions ManagementMdPermissionsProfile#manage_sessions}
  */
  readonly manageSessions?: boolean | cdktf.IResolvable;
  /**
  * Permission to log in to the Security Management Server and run API commands using these tools: mgmt_cli (Linux and Windows binaries), Gaia CLI (clish) and Web Services (REST). Useful if you want to prevent administrators from running automatic scripts on the Management.<br>Note: This permission is not required to run commands from within the API terminal in SmartConsole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#management_api_login ManagementMdPermissionsProfile#management_api_login}
  */
  readonly managementApiLogin?: boolean | cdktf.IResolvable;
  /**
  * Create and manage Multi-Domain Servers and Multi-Domain Log Servers.<br>Only a "Super User" permission-level profile can select this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#mds_provisioning ManagementMdPermissionsProfile#mds_provisioning}
  */
  readonly mdsProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#name ManagementMdPermissionsProfile#name}
  */
  readonly name: string;
  /**
  * The level of the Multi Domain Permissions Profile.<br>The level cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#permission_level ManagementMdPermissionsProfile#permission_level}
  */
  readonly permissionLevel?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#tags ManagementMdPermissionsProfile#tags}
  */
  readonly tags?: string[];
  /**
  * Lets an administrator with no global objects permissions view the global objects in the domain. This option is required for valid domain management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#view_global_objects_in_domain ManagementMdPermissionsProfile#view_global_objects_in_domain}
  */
  readonly viewGlobalObjectsInDomain?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile checkpoint_management_md_permissions_profile}
*/
export class ManagementMdPermissionsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_md_permissions_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementMdPermissionsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementMdPermissionsProfile to import
  * @param importFromId The id of the existing ManagementMdPermissionsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementMdPermissionsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_md_permissions_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_md_permissions_profile checkpoint_management_md_permissions_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementMdPermissionsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementMdPermissionsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_md_permissions_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cmeOperations = config.cmeOperations;
    this._color = config.color;
    this._comments = config.comments;
    this._defaultProfileGlobalDomains = config.defaultProfileGlobalDomains;
    this._defaultProfileLocalDomains = config.defaultProfileLocalDomains;
    this._domainsToProcess = config.domainsToProcess;
    this._enableDefaultProfileForGlobalDomains = config.enableDefaultProfileForGlobalDomains;
    this._enableDefaultProfileForLocalDomains = config.enableDefaultProfileForLocalDomains;
    this._globalVpnManagement = config.globalVpnManagement;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._manageAdmins = config.manageAdmins;
    this._manageGlobalAssignments = config.manageGlobalAssignments;
    this._manageSessions = config.manageSessions;
    this._managementApiLogin = config.managementApiLogin;
    this._mdsProvisioning = config.mdsProvisioning;
    this._name = config.name;
    this._permissionLevel = config.permissionLevel;
    this._tags = config.tags;
    this._viewGlobalObjectsInDomain = config.viewGlobalObjectsInDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cme_operations - computed: false, optional: true, required: false
  private _cmeOperations?: string; 
  public get cmeOperations() {
    return this.getStringAttribute('cme_operations');
  }
  public set cmeOperations(value: string) {
    this._cmeOperations = value;
  }
  public resetCmeOperations() {
    this._cmeOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmeOperationsInput() {
    return this._cmeOperations;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // default_profile_global_domains - computed: false, optional: true, required: false
  private _defaultProfileGlobalDomains?: string; 
  public get defaultProfileGlobalDomains() {
    return this.getStringAttribute('default_profile_global_domains');
  }
  public set defaultProfileGlobalDomains(value: string) {
    this._defaultProfileGlobalDomains = value;
  }
  public resetDefaultProfileGlobalDomains() {
    this._defaultProfileGlobalDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileGlobalDomainsInput() {
    return this._defaultProfileGlobalDomains;
  }

  // default_profile_local_domains - computed: false, optional: true, required: false
  private _defaultProfileLocalDomains?: string; 
  public get defaultProfileLocalDomains() {
    return this.getStringAttribute('default_profile_local_domains');
  }
  public set defaultProfileLocalDomains(value: string) {
    this._defaultProfileLocalDomains = value;
  }
  public resetDefaultProfileLocalDomains() {
    this._defaultProfileLocalDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileLocalDomainsInput() {
    return this._defaultProfileLocalDomains;
  }

  // domains_to_process - computed: false, optional: true, required: false
  private _domainsToProcess?: string[]; 
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }
  public set domainsToProcess(value: string[]) {
    this._domainsToProcess = value;
  }
  public resetDomainsToProcess() {
    this._domainsToProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsToProcessInput() {
    return this._domainsToProcess;
  }

  // enable_default_profile_for_global_domains - computed: false, optional: true, required: false
  private _enableDefaultProfileForGlobalDomains?: boolean | cdktf.IResolvable; 
  public get enableDefaultProfileForGlobalDomains() {
    return this.getBooleanAttribute('enable_default_profile_for_global_domains');
  }
  public set enableDefaultProfileForGlobalDomains(value: boolean | cdktf.IResolvable) {
    this._enableDefaultProfileForGlobalDomains = value;
  }
  public resetEnableDefaultProfileForGlobalDomains() {
    this._enableDefaultProfileForGlobalDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultProfileForGlobalDomainsInput() {
    return this._enableDefaultProfileForGlobalDomains;
  }

  // enable_default_profile_for_local_domains - computed: false, optional: true, required: false
  private _enableDefaultProfileForLocalDomains?: boolean | cdktf.IResolvable; 
  public get enableDefaultProfileForLocalDomains() {
    return this.getBooleanAttribute('enable_default_profile_for_local_domains');
  }
  public set enableDefaultProfileForLocalDomains(value: boolean | cdktf.IResolvable) {
    this._enableDefaultProfileForLocalDomains = value;
  }
  public resetEnableDefaultProfileForLocalDomains() {
    this._enableDefaultProfileForLocalDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultProfileForLocalDomainsInput() {
    return this._enableDefaultProfileForLocalDomains;
  }

  // global_vpn_management - computed: false, optional: true, required: false
  private _globalVpnManagement?: boolean | cdktf.IResolvable; 
  public get globalVpnManagement() {
    return this.getBooleanAttribute('global_vpn_management');
  }
  public set globalVpnManagement(value: boolean | cdktf.IResolvable) {
    this._globalVpnManagement = value;
  }
  public resetGlobalVpnManagement() {
    this._globalVpnManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVpnManagementInput() {
    return this._globalVpnManagement;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // manage_admins - computed: false, optional: true, required: false
  private _manageAdmins?: boolean | cdktf.IResolvable; 
  public get manageAdmins() {
    return this.getBooleanAttribute('manage_admins');
  }
  public set manageAdmins(value: boolean | cdktf.IResolvable) {
    this._manageAdmins = value;
  }
  public resetManageAdmins() {
    this._manageAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageAdminsInput() {
    return this._manageAdmins;
  }

  // manage_global_assignments - computed: false, optional: true, required: false
  private _manageGlobalAssignments?: boolean | cdktf.IResolvable; 
  public get manageGlobalAssignments() {
    return this.getBooleanAttribute('manage_global_assignments');
  }
  public set manageGlobalAssignments(value: boolean | cdktf.IResolvable) {
    this._manageGlobalAssignments = value;
  }
  public resetManageGlobalAssignments() {
    this._manageGlobalAssignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageGlobalAssignmentsInput() {
    return this._manageGlobalAssignments;
  }

  // manage_sessions - computed: false, optional: true, required: false
  private _manageSessions?: boolean | cdktf.IResolvable; 
  public get manageSessions() {
    return this.getBooleanAttribute('manage_sessions');
  }
  public set manageSessions(value: boolean | cdktf.IResolvable) {
    this._manageSessions = value;
  }
  public resetManageSessions() {
    this._manageSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSessionsInput() {
    return this._manageSessions;
  }

  // management_api_login - computed: false, optional: true, required: false
  private _managementApiLogin?: boolean | cdktf.IResolvable; 
  public get managementApiLogin() {
    return this.getBooleanAttribute('management_api_login');
  }
  public set managementApiLogin(value: boolean | cdktf.IResolvable) {
    this._managementApiLogin = value;
  }
  public resetManagementApiLogin() {
    this._managementApiLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementApiLoginInput() {
    return this._managementApiLogin;
  }

  // mds_provisioning - computed: false, optional: true, required: false
  private _mdsProvisioning?: boolean | cdktf.IResolvable; 
  public get mdsProvisioning() {
    return this.getBooleanAttribute('mds_provisioning');
  }
  public set mdsProvisioning(value: boolean | cdktf.IResolvable) {
    this._mdsProvisioning = value;
  }
  public resetMdsProvisioning() {
    this._mdsProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdsProvisioningInput() {
    return this._mdsProvisioning;
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

  // permission_level - computed: false, optional: true, required: false
  private _permissionLevel?: string; 
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }
  public set permissionLevel(value: string) {
    this._permissionLevel = value;
  }
  public resetPermissionLevel() {
    this._permissionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionLevelInput() {
    return this._permissionLevel;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // view_global_objects_in_domain - computed: false, optional: true, required: false
  private _viewGlobalObjectsInDomain?: boolean | cdktf.IResolvable; 
  public get viewGlobalObjectsInDomain() {
    return this.getBooleanAttribute('view_global_objects_in_domain');
  }
  public set viewGlobalObjectsInDomain(value: boolean | cdktf.IResolvable) {
    this._viewGlobalObjectsInDomain = value;
  }
  public resetViewGlobalObjectsInDomain() {
    this._viewGlobalObjectsInDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewGlobalObjectsInDomainInput() {
    return this._viewGlobalObjectsInDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cme_operations: cdktf.stringToTerraform(this._cmeOperations),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      default_profile_global_domains: cdktf.stringToTerraform(this._defaultProfileGlobalDomains),
      default_profile_local_domains: cdktf.stringToTerraform(this._defaultProfileLocalDomains),
      domains_to_process: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainsToProcess),
      enable_default_profile_for_global_domains: cdktf.booleanToTerraform(this._enableDefaultProfileForGlobalDomains),
      enable_default_profile_for_local_domains: cdktf.booleanToTerraform(this._enableDefaultProfileForLocalDomains),
      global_vpn_management: cdktf.booleanToTerraform(this._globalVpnManagement),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      manage_admins: cdktf.booleanToTerraform(this._manageAdmins),
      manage_global_assignments: cdktf.booleanToTerraform(this._manageGlobalAssignments),
      manage_sessions: cdktf.booleanToTerraform(this._manageSessions),
      management_api_login: cdktf.booleanToTerraform(this._managementApiLogin),
      mds_provisioning: cdktf.booleanToTerraform(this._mdsProvisioning),
      name: cdktf.stringToTerraform(this._name),
      permission_level: cdktf.stringToTerraform(this._permissionLevel),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      view_global_objects_in_domain: cdktf.booleanToTerraform(this._viewGlobalObjectsInDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cme_operations: {
        value: cdktf.stringToHclTerraform(this._cmeOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_profile_global_domains: {
        value: cdktf.stringToHclTerraform(this._defaultProfileGlobalDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_profile_local_domains: {
        value: cdktf.stringToHclTerraform(this._defaultProfileLocalDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains_to_process: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainsToProcess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_default_profile_for_global_domains: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultProfileForGlobalDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_profile_for_local_domains: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultProfileForLocalDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_vpn_management: {
        value: cdktf.booleanToHclTerraform(this._globalVpnManagement),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_admins: {
        value: cdktf.booleanToHclTerraform(this._manageAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_global_assignments: {
        value: cdktf.booleanToHclTerraform(this._manageGlobalAssignments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_sessions: {
        value: cdktf.booleanToHclTerraform(this._manageSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      management_api_login: {
        value: cdktf.booleanToHclTerraform(this._managementApiLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mds_provisioning: {
        value: cdktf.booleanToHclTerraform(this._mdsProvisioning),
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
      permission_level: {
        value: cdktf.stringToHclTerraform(this._permissionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      view_global_objects_in_domain: {
        value: cdktf.booleanToHclTerraform(this._viewGlobalObjectsInDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
