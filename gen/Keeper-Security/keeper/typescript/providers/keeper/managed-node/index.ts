// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of user IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#cascade_node_management ManagedNode#cascade_node_management}
  */
  readonly cascadeNodeManagement?: boolean | cdktf.IResolvable;
  /**
  * Managed Node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#node_id ManagedNode#node_id}
  */
  readonly nodeId: number;
  /**
  * Privileges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#privileges ManagedNode#privileges}
  */
  readonly privileges?: ManagedNodePrivileges;
  /**
  * Role ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#role_id ManagedNode#role_id}
  */
  readonly roleId: number;
}
export interface ManagedNodePrivileges {
  /**
  * Perform Device Approvals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#device_approval ManagedNode#device_approval}
  */
  readonly deviceApproval?: boolean | cdktf.IResolvable;
  /**
  * Manage Companies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_companies ManagedNode#manage_companies}
  */
  readonly manageCompanies?: boolean | cdktf.IResolvable;
  /**
  * Manage Nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_nodes ManagedNode#manage_nodes}
  */
  readonly manageNodes?: boolean | cdktf.IResolvable;
  /**
  * This permission allows the admin rights to create, edit, or delete Record Types which have pre-defined fields. Record Types appear during creation of records in the user's vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_record_types ManagedNode#manage_record_types}
  */
  readonly manageRecordTypes?: boolean | cdktf.IResolvable;
  /**
  * Manage Reporting and Alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_reports ManagedNode#manage_reports}
  */
  readonly manageReports?: boolean | cdktf.IResolvable;
  /**
  * Manage Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_roles ManagedNode#manage_roles}
  */
  readonly manageRoles?: boolean | cdktf.IResolvable;
  /**
  * Manage Bridge/SSO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_sso ManagedNode#manage_sso}
  */
  readonly manageSso?: boolean | cdktf.IResolvable;
  /**
  * Manage Teams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_teams ManagedNode#manage_teams}
  */
  readonly manageTeams?: boolean | cdktf.IResolvable;
  /**
  * Manage Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#manage_users ManagedNode#manage_users}
  */
  readonly manageUsers?: boolean | cdktf.IResolvable;
  /**
  * Run Compliance Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#run_compliance_reports ManagedNode#run_compliance_reports}
  */
  readonly runComplianceReports?: boolean | cdktf.IResolvable;
  /**
  * Share Admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#share_admin ManagedNode#share_admin}
  */
  readonly shareAdmin?: boolean | cdktf.IResolvable;
  /**
  * Transfer Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#transfer_account ManagedNode#transfer_account}
  */
  readonly transferAccount?: boolean | cdktf.IResolvable;
}

export function managedNodePrivilegesToTerraform(struct?: ManagedNodePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_approval: cdktf.booleanToTerraform(struct!.deviceApproval),
    manage_companies: cdktf.booleanToTerraform(struct!.manageCompanies),
    manage_nodes: cdktf.booleanToTerraform(struct!.manageNodes),
    manage_record_types: cdktf.booleanToTerraform(struct!.manageRecordTypes),
    manage_reports: cdktf.booleanToTerraform(struct!.manageReports),
    manage_roles: cdktf.booleanToTerraform(struct!.manageRoles),
    manage_sso: cdktf.booleanToTerraform(struct!.manageSso),
    manage_teams: cdktf.booleanToTerraform(struct!.manageTeams),
    manage_users: cdktf.booleanToTerraform(struct!.manageUsers),
    run_compliance_reports: cdktf.booleanToTerraform(struct!.runComplianceReports),
    share_admin: cdktf.booleanToTerraform(struct!.shareAdmin),
    transfer_account: cdktf.booleanToTerraform(struct!.transferAccount),
  }
}


export function managedNodePrivilegesToHclTerraform(struct?: ManagedNodePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_approval: {
      value: cdktf.booleanToHclTerraform(struct!.deviceApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_companies: {
      value: cdktf.booleanToHclTerraform(struct!.manageCompanies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.manageNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_record_types: {
      value: cdktf.booleanToHclTerraform(struct!.manageRecordTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_reports: {
      value: cdktf.booleanToHclTerraform(struct!.manageReports),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_roles: {
      value: cdktf.booleanToHclTerraform(struct!.manageRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_sso: {
      value: cdktf.booleanToHclTerraform(struct!.manageSso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_teams: {
      value: cdktf.booleanToHclTerraform(struct!.manageTeams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_users: {
      value: cdktf.booleanToHclTerraform(struct!.manageUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_compliance_reports: {
      value: cdktf.booleanToHclTerraform(struct!.runComplianceReports),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_admin: {
      value: cdktf.booleanToHclTerraform(struct!.shareAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transfer_account: {
      value: cdktf.booleanToHclTerraform(struct!.transferAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedNodePrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedNodePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceApproval = this._deviceApproval;
    }
    if (this._manageCompanies !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageCompanies = this._manageCompanies;
    }
    if (this._manageNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageNodes = this._manageNodes;
    }
    if (this._manageRecordTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageRecordTypes = this._manageRecordTypes;
    }
    if (this._manageReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageReports = this._manageReports;
    }
    if (this._manageRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageRoles = this._manageRoles;
    }
    if (this._manageSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageSso = this._manageSso;
    }
    if (this._manageTeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageTeams = this._manageTeams;
    }
    if (this._manageUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageUsers = this._manageUsers;
    }
    if (this._runComplianceReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.runComplianceReports = this._runComplianceReports;
    }
    if (this._shareAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareAdmin = this._shareAdmin;
    }
    if (this._transferAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferAccount = this._transferAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedNodePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceApproval = undefined;
      this._manageCompanies = undefined;
      this._manageNodes = undefined;
      this._manageRecordTypes = undefined;
      this._manageReports = undefined;
      this._manageRoles = undefined;
      this._manageSso = undefined;
      this._manageTeams = undefined;
      this._manageUsers = undefined;
      this._runComplianceReports = undefined;
      this._shareAdmin = undefined;
      this._transferAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceApproval = value.deviceApproval;
      this._manageCompanies = value.manageCompanies;
      this._manageNodes = value.manageNodes;
      this._manageRecordTypes = value.manageRecordTypes;
      this._manageReports = value.manageReports;
      this._manageRoles = value.manageRoles;
      this._manageSso = value.manageSso;
      this._manageTeams = value.manageTeams;
      this._manageUsers = value.manageUsers;
      this._runComplianceReports = value.runComplianceReports;
      this._shareAdmin = value.shareAdmin;
      this._transferAccount = value.transferAccount;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node keeper_managed_node}
*/
export class ManagedNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_managed_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedNode to import
  * @param importFromId The id of the existing ManagedNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_managed_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/managed_node keeper_managed_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedNodeConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'keeper_managed_node',
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
    this._cascadeNodeManagement = config.cascadeNodeManagement;
    this._nodeId = config.nodeId;
    this._privileges.internalValue = config.privileges;
    this._roleId = config.roleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cascade_node_management - computed: true, optional: true, required: false
  private _cascadeNodeManagement?: boolean | cdktf.IResolvable; 
  public get cascadeNodeManagement() {
    return this.getBooleanAttribute('cascade_node_management');
  }
  public set cascadeNodeManagement(value: boolean | cdktf.IResolvable) {
    this._cascadeNodeManagement = value;
  }
  public resetCascadeNodeManagement() {
    this._cascadeNodeManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeNodeManagementInput() {
    return this._cascadeNodeManagement;
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: number; 
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }
  public set nodeId(value: number) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // privileges - computed: true, optional: true, required: false
  private _privileges = new ManagedNodePrivilegesOutputReference(this, "privileges");
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: ManagedNodePrivileges) {
    this._privileges.internalValue = value;
  }
  public resetPrivileges() {
    this._privileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges.internalValue;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cascade_node_management: cdktf.booleanToTerraform(this._cascadeNodeManagement),
      node_id: cdktf.numberToTerraform(this._nodeId),
      privileges: managedNodePrivilegesToTerraform(this._privileges.internalValue),
      role_id: cdktf.numberToTerraform(this._roleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cascade_node_management: {
        value: cdktf.booleanToHclTerraform(this._cascadeNodeManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_id: {
        value: cdktf.numberToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      privileges: {
        value: managedNodePrivilegesToHclTerraform(this._privileges.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedNodePrivileges",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
