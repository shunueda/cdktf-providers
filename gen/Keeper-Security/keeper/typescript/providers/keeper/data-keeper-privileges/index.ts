// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperPrivilegesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Perform Device Approvals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#device_approval DataKeeperPrivileges#device_approval}
  */
  readonly deviceApproval?: boolean | cdktf.IResolvable;
  /**
  * Manage Companies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_companies DataKeeperPrivileges#manage_companies}
  */
  readonly manageCompanies?: boolean | cdktf.IResolvable;
  /**
  * Manage Nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_nodes DataKeeperPrivileges#manage_nodes}
  */
  readonly manageNodes?: boolean | cdktf.IResolvable;
  /**
  * This permission allows the admin rights to create, edit, or delete Record Types which have pre-defined fields. Record Types appear during creation of records in the user's vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_record_types DataKeeperPrivileges#manage_record_types}
  */
  readonly manageRecordTypes?: boolean | cdktf.IResolvable;
  /**
  * Manage Reporting and Alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_reports DataKeeperPrivileges#manage_reports}
  */
  readonly manageReports?: boolean | cdktf.IResolvable;
  /**
  * Manage Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_roles DataKeeperPrivileges#manage_roles}
  */
  readonly manageRoles?: boolean | cdktf.IResolvable;
  /**
  * Manage Bridge/SSO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_sso DataKeeperPrivileges#manage_sso}
  */
  readonly manageSso?: boolean | cdktf.IResolvable;
  /**
  * Manage Teams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_teams DataKeeperPrivileges#manage_teams}
  */
  readonly manageTeams?: boolean | cdktf.IResolvable;
  /**
  * Manage Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#manage_users DataKeeperPrivileges#manage_users}
  */
  readonly manageUsers?: boolean | cdktf.IResolvable;
  /**
  * Run Compliance Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#run_compliance_reports DataKeeperPrivileges#run_compliance_reports}
  */
  readonly runComplianceReports?: boolean | cdktf.IResolvable;
  /**
  * Share Admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#share_admin DataKeeperPrivileges#share_admin}
  */
  readonly shareAdmin?: boolean | cdktf.IResolvable;
  /**
  * Transfer Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#transfer_account DataKeeperPrivileges#transfer_account}
  */
  readonly transferAccount?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges keeper_privileges}
*/
export class DataKeeperPrivileges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_privileges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperPrivileges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperPrivileges to import
  * @param importFromId The id of the existing DataKeeperPrivileges that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperPrivileges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_privileges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/privileges keeper_privileges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperPrivilegesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperPrivilegesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_privileges',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceApproval = config.deviceApproval;
    this._manageCompanies = config.manageCompanies;
    this._manageNodes = config.manageNodes;
    this._manageRecordTypes = config.manageRecordTypes;
    this._manageReports = config.manageReports;
    this._manageRoles = config.manageRoles;
    this._manageSso = config.manageSso;
    this._manageTeams = config.manageTeams;
    this._manageUsers = config.manageUsers;
    this._runComplianceReports = config.runComplianceReports;
    this._shareAdmin = config.shareAdmin;
    this._transferAccount = config.transferAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_approval - computed: true, optional: true, required: false
  private _deviceApproval?: boolean | cdktf.IResolvable; 
  public get deviceApproval() {
    return this.getBooleanAttribute('device_approval');
  }
  public set deviceApproval(value: boolean | cdktf.IResolvable) {
    this._deviceApproval = value;
  }
  public resetDeviceApproval() {
    this._deviceApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceApprovalInput() {
    return this._deviceApproval;
  }

  // manage_companies - computed: true, optional: true, required: false
  private _manageCompanies?: boolean | cdktf.IResolvable; 
  public get manageCompanies() {
    return this.getBooleanAttribute('manage_companies');
  }
  public set manageCompanies(value: boolean | cdktf.IResolvable) {
    this._manageCompanies = value;
  }
  public resetManageCompanies() {
    this._manageCompanies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageCompaniesInput() {
    return this._manageCompanies;
  }

  // manage_nodes - computed: true, optional: true, required: false
  private _manageNodes?: boolean | cdktf.IResolvable; 
  public get manageNodes() {
    return this.getBooleanAttribute('manage_nodes');
  }
  public set manageNodes(value: boolean | cdktf.IResolvable) {
    this._manageNodes = value;
  }
  public resetManageNodes() {
    this._manageNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageNodesInput() {
    return this._manageNodes;
  }

  // manage_record_types - computed: true, optional: true, required: false
  private _manageRecordTypes?: boolean | cdktf.IResolvable; 
  public get manageRecordTypes() {
    return this.getBooleanAttribute('manage_record_types');
  }
  public set manageRecordTypes(value: boolean | cdktf.IResolvable) {
    this._manageRecordTypes = value;
  }
  public resetManageRecordTypes() {
    this._manageRecordTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageRecordTypesInput() {
    return this._manageRecordTypes;
  }

  // manage_reports - computed: true, optional: true, required: false
  private _manageReports?: boolean | cdktf.IResolvable; 
  public get manageReports() {
    return this.getBooleanAttribute('manage_reports');
  }
  public set manageReports(value: boolean | cdktf.IResolvable) {
    this._manageReports = value;
  }
  public resetManageReports() {
    this._manageReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageReportsInput() {
    return this._manageReports;
  }

  // manage_roles - computed: true, optional: true, required: false
  private _manageRoles?: boolean | cdktf.IResolvable; 
  public get manageRoles() {
    return this.getBooleanAttribute('manage_roles');
  }
  public set manageRoles(value: boolean | cdktf.IResolvable) {
    this._manageRoles = value;
  }
  public resetManageRoles() {
    this._manageRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageRolesInput() {
    return this._manageRoles;
  }

  // manage_sso - computed: true, optional: true, required: false
  private _manageSso?: boolean | cdktf.IResolvable; 
  public get manageSso() {
    return this.getBooleanAttribute('manage_sso');
  }
  public set manageSso(value: boolean | cdktf.IResolvable) {
    this._manageSso = value;
  }
  public resetManageSso() {
    this._manageSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSsoInput() {
    return this._manageSso;
  }

  // manage_teams - computed: true, optional: true, required: false
  private _manageTeams?: boolean | cdktf.IResolvable; 
  public get manageTeams() {
    return this.getBooleanAttribute('manage_teams');
  }
  public set manageTeams(value: boolean | cdktf.IResolvable) {
    this._manageTeams = value;
  }
  public resetManageTeams() {
    this._manageTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageTeamsInput() {
    return this._manageTeams;
  }

  // manage_users - computed: true, optional: true, required: false
  private _manageUsers?: boolean | cdktf.IResolvable; 
  public get manageUsers() {
    return this.getBooleanAttribute('manage_users');
  }
  public set manageUsers(value: boolean | cdktf.IResolvable) {
    this._manageUsers = value;
  }
  public resetManageUsers() {
    this._manageUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageUsersInput() {
    return this._manageUsers;
  }

  // run_compliance_reports - computed: true, optional: true, required: false
  private _runComplianceReports?: boolean | cdktf.IResolvable; 
  public get runComplianceReports() {
    return this.getBooleanAttribute('run_compliance_reports');
  }
  public set runComplianceReports(value: boolean | cdktf.IResolvable) {
    this._runComplianceReports = value;
  }
  public resetRunComplianceReports() {
    this._runComplianceReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runComplianceReportsInput() {
    return this._runComplianceReports;
  }

  // share_admin - computed: true, optional: true, required: false
  private _shareAdmin?: boolean | cdktf.IResolvable; 
  public get shareAdmin() {
    return this.getBooleanAttribute('share_admin');
  }
  public set shareAdmin(value: boolean | cdktf.IResolvable) {
    this._shareAdmin = value;
  }
  public resetShareAdmin() {
    this._shareAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareAdminInput() {
    return this._shareAdmin;
  }

  // transfer_account - computed: true, optional: true, required: false
  private _transferAccount?: boolean | cdktf.IResolvable; 
  public get transferAccount() {
    return this.getBooleanAttribute('transfer_account');
  }
  public set transferAccount(value: boolean | cdktf.IResolvable) {
    this._transferAccount = value;
  }
  public resetTransferAccount() {
    this._transferAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAccountInput() {
    return this._transferAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_approval: cdktf.booleanToTerraform(this._deviceApproval),
      manage_companies: cdktf.booleanToTerraform(this._manageCompanies),
      manage_nodes: cdktf.booleanToTerraform(this._manageNodes),
      manage_record_types: cdktf.booleanToTerraform(this._manageRecordTypes),
      manage_reports: cdktf.booleanToTerraform(this._manageReports),
      manage_roles: cdktf.booleanToTerraform(this._manageRoles),
      manage_sso: cdktf.booleanToTerraform(this._manageSso),
      manage_teams: cdktf.booleanToTerraform(this._manageTeams),
      manage_users: cdktf.booleanToTerraform(this._manageUsers),
      run_compliance_reports: cdktf.booleanToTerraform(this._runComplianceReports),
      share_admin: cdktf.booleanToTerraform(this._shareAdmin),
      transfer_account: cdktf.booleanToTerraform(this._transferAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_approval: {
        value: cdktf.booleanToHclTerraform(this._deviceApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_companies: {
        value: cdktf.booleanToHclTerraform(this._manageCompanies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_nodes: {
        value: cdktf.booleanToHclTerraform(this._manageNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_record_types: {
        value: cdktf.booleanToHclTerraform(this._manageRecordTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_reports: {
        value: cdktf.booleanToHclTerraform(this._manageReports),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_roles: {
        value: cdktf.booleanToHclTerraform(this._manageRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_sso: {
        value: cdktf.booleanToHclTerraform(this._manageSso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_teams: {
        value: cdktf.booleanToHclTerraform(this._manageTeams),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_users: {
        value: cdktf.booleanToHclTerraform(this._manageUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_compliance_reports: {
        value: cdktf.booleanToHclTerraform(this._runComplianceReports),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      share_admin: {
        value: cdktf.booleanToHclTerraform(this._shareAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transfer_account: {
        value: cdktf.booleanToHclTerraform(this._transferAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
