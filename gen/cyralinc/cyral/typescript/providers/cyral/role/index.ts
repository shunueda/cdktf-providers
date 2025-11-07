// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#permissions Role#permissions}
  */
  readonly permissions?: RolePermissions;
}
export interface RolePermissions {
  /**
  * Allows approving or denying approval requests on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#approval_management Role#approval_management}
  */
  readonly approvalManagement?: boolean | cdktf.IResolvable;
  /**
  * Allows modifying integrations on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#modify_integrations Role#modify_integrations}
  */
  readonly modifyIntegrations?: boolean | cdktf.IResolvable;
  /**
  * Allows modifying policies on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#modify_policies Role#modify_policies}
  */
  readonly modifyPolicies?: boolean | cdktf.IResolvable;
  /**
  * Allows modifying roles on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#modify_roles Role#modify_roles}
  */
  readonly modifyRoles?: boolean | cdktf.IResolvable;
  /**
  * Allows modifying sidecars and repositories on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#modify_sidecars_and_repositories Role#modify_sidecars_and_repositories}
  */
  readonly modifySidecarsAndRepositories?: boolean | cdktf.IResolvable;
  /**
  * Allows modifying users on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#modify_users Role#modify_users}
  */
  readonly modifyUsers?: boolean | cdktf.IResolvable;
  /**
  * Allows running the Cyral repo crawler data classifier and user discovery. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#repo_crawler Role#repo_crawler}
  */
  readonly repoCrawler?: boolean | cdktf.IResolvable;
  /**
  * Allows viewing audit logs on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#view_audit_logs Role#view_audit_logs}
  */
  readonly viewAuditLogs?: boolean | cdktf.IResolvable;
  /**
  * Allows viewing datamaps on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#view_datamaps Role#view_datamaps}
  */
  readonly viewDatamaps?: boolean | cdktf.IResolvable;
  /**
  * Allows viewing integrations on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#view_integrations Role#view_integrations}
  */
  readonly viewIntegrations?: boolean | cdktf.IResolvable;
  /**
  * Allows viewing policies on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#view_policies Role#view_policies}
  */
  readonly viewPolicies?: boolean | cdktf.IResolvable;
  /**
  * Allows viewing roles on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#view_roles Role#view_roles}
  */
  readonly viewRoles?: boolean | cdktf.IResolvable;
  /**
  * Allows viewing users on Cyral Control Plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#view_users Role#view_users}
  */
  readonly viewUsers?: boolean | cdktf.IResolvable;
}

export function rolePermissionsToTerraform(struct?: RolePermissionsOutputReference | RolePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_management: cdktf.booleanToTerraform(struct!.approvalManagement),
    modify_integrations: cdktf.booleanToTerraform(struct!.modifyIntegrations),
    modify_policies: cdktf.booleanToTerraform(struct!.modifyPolicies),
    modify_roles: cdktf.booleanToTerraform(struct!.modifyRoles),
    modify_sidecars_and_repositories: cdktf.booleanToTerraform(struct!.modifySidecarsAndRepositories),
    modify_users: cdktf.booleanToTerraform(struct!.modifyUsers),
    repo_crawler: cdktf.booleanToTerraform(struct!.repoCrawler),
    view_audit_logs: cdktf.booleanToTerraform(struct!.viewAuditLogs),
    view_datamaps: cdktf.booleanToTerraform(struct!.viewDatamaps),
    view_integrations: cdktf.booleanToTerraform(struct!.viewIntegrations),
    view_policies: cdktf.booleanToTerraform(struct!.viewPolicies),
    view_roles: cdktf.booleanToTerraform(struct!.viewRoles),
    view_users: cdktf.booleanToTerraform(struct!.viewUsers),
  }
}


export function rolePermissionsToHclTerraform(struct?: RolePermissionsOutputReference | RolePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_management: {
      value: cdktf.booleanToHclTerraform(struct!.approvalManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_integrations: {
      value: cdktf.booleanToHclTerraform(struct!.modifyIntegrations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_policies: {
      value: cdktf.booleanToHclTerraform(struct!.modifyPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_roles: {
      value: cdktf.booleanToHclTerraform(struct!.modifyRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_sidecars_and_repositories: {
      value: cdktf.booleanToHclTerraform(struct!.modifySidecarsAndRepositories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_users: {
      value: cdktf.booleanToHclTerraform(struct!.modifyUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.repoCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view_audit_logs: {
      value: cdktf.booleanToHclTerraform(struct!.viewAuditLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view_datamaps: {
      value: cdktf.booleanToHclTerraform(struct!.viewDatamaps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view_integrations: {
      value: cdktf.booleanToHclTerraform(struct!.viewIntegrations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view_policies: {
      value: cdktf.booleanToHclTerraform(struct!.viewPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view_roles: {
      value: cdktf.booleanToHclTerraform(struct!.viewRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view_users: {
      value: cdktf.booleanToHclTerraform(struct!.viewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RolePermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RolePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalManagement = this._approvalManagement;
    }
    if (this._modifyIntegrations !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyIntegrations = this._modifyIntegrations;
    }
    if (this._modifyPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyPolicies = this._modifyPolicies;
    }
    if (this._modifyRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyRoles = this._modifyRoles;
    }
    if (this._modifySidecarsAndRepositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifySidecarsAndRepositories = this._modifySidecarsAndRepositories;
    }
    if (this._modifyUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyUsers = this._modifyUsers;
    }
    if (this._repoCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoCrawler = this._repoCrawler;
    }
    if (this._viewAuditLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewAuditLogs = this._viewAuditLogs;
    }
    if (this._viewDatamaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewDatamaps = this._viewDatamaps;
    }
    if (this._viewIntegrations !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewIntegrations = this._viewIntegrations;
    }
    if (this._viewPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewPolicies = this._viewPolicies;
    }
    if (this._viewRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewRoles = this._viewRoles;
    }
    if (this._viewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewUsers = this._viewUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approvalManagement = undefined;
      this._modifyIntegrations = undefined;
      this._modifyPolicies = undefined;
      this._modifyRoles = undefined;
      this._modifySidecarsAndRepositories = undefined;
      this._modifyUsers = undefined;
      this._repoCrawler = undefined;
      this._viewAuditLogs = undefined;
      this._viewDatamaps = undefined;
      this._viewIntegrations = undefined;
      this._viewPolicies = undefined;
      this._viewRoles = undefined;
      this._viewUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approvalManagement = value.approvalManagement;
      this._modifyIntegrations = value.modifyIntegrations;
      this._modifyPolicies = value.modifyPolicies;
      this._modifyRoles = value.modifyRoles;
      this._modifySidecarsAndRepositories = value.modifySidecarsAndRepositories;
      this._modifyUsers = value.modifyUsers;
      this._repoCrawler = value.repoCrawler;
      this._viewAuditLogs = value.viewAuditLogs;
      this._viewDatamaps = value.viewDatamaps;
      this._viewIntegrations = value.viewIntegrations;
      this._viewPolicies = value.viewPolicies;
      this._viewRoles = value.viewRoles;
      this._viewUsers = value.viewUsers;
    }
  }

  // approval_management - computed: false, optional: true, required: false
  private _approvalManagement?: boolean | cdktf.IResolvable; 
  public get approvalManagement() {
    return this.getBooleanAttribute('approval_management');
  }
  public set approvalManagement(value: boolean | cdktf.IResolvable) {
    this._approvalManagement = value;
  }
  public resetApprovalManagement() {
    this._approvalManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalManagementInput() {
    return this._approvalManagement;
  }

  // modify_integrations - computed: false, optional: true, required: false
  private _modifyIntegrations?: boolean | cdktf.IResolvable; 
  public get modifyIntegrations() {
    return this.getBooleanAttribute('modify_integrations');
  }
  public set modifyIntegrations(value: boolean | cdktf.IResolvable) {
    this._modifyIntegrations = value;
  }
  public resetModifyIntegrations() {
    this._modifyIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyIntegrationsInput() {
    return this._modifyIntegrations;
  }

  // modify_policies - computed: false, optional: true, required: false
  private _modifyPolicies?: boolean | cdktf.IResolvable; 
  public get modifyPolicies() {
    return this.getBooleanAttribute('modify_policies');
  }
  public set modifyPolicies(value: boolean | cdktf.IResolvable) {
    this._modifyPolicies = value;
  }
  public resetModifyPolicies() {
    this._modifyPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyPoliciesInput() {
    return this._modifyPolicies;
  }

  // modify_roles - computed: false, optional: true, required: false
  private _modifyRoles?: boolean | cdktf.IResolvable; 
  public get modifyRoles() {
    return this.getBooleanAttribute('modify_roles');
  }
  public set modifyRoles(value: boolean | cdktf.IResolvable) {
    this._modifyRoles = value;
  }
  public resetModifyRoles() {
    this._modifyRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyRolesInput() {
    return this._modifyRoles;
  }

  // modify_sidecars_and_repositories - computed: false, optional: true, required: false
  private _modifySidecarsAndRepositories?: boolean | cdktf.IResolvable; 
  public get modifySidecarsAndRepositories() {
    return this.getBooleanAttribute('modify_sidecars_and_repositories');
  }
  public set modifySidecarsAndRepositories(value: boolean | cdktf.IResolvable) {
    this._modifySidecarsAndRepositories = value;
  }
  public resetModifySidecarsAndRepositories() {
    this._modifySidecarsAndRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifySidecarsAndRepositoriesInput() {
    return this._modifySidecarsAndRepositories;
  }

  // modify_users - computed: false, optional: true, required: false
  private _modifyUsers?: boolean | cdktf.IResolvable; 
  public get modifyUsers() {
    return this.getBooleanAttribute('modify_users');
  }
  public set modifyUsers(value: boolean | cdktf.IResolvable) {
    this._modifyUsers = value;
  }
  public resetModifyUsers() {
    this._modifyUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyUsersInput() {
    return this._modifyUsers;
  }

  // repo_crawler - computed: false, optional: true, required: false
  private _repoCrawler?: boolean | cdktf.IResolvable; 
  public get repoCrawler() {
    return this.getBooleanAttribute('repo_crawler');
  }
  public set repoCrawler(value: boolean | cdktf.IResolvable) {
    this._repoCrawler = value;
  }
  public resetRepoCrawler() {
    this._repoCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoCrawlerInput() {
    return this._repoCrawler;
  }

  // view_audit_logs - computed: false, optional: true, required: false
  private _viewAuditLogs?: boolean | cdktf.IResolvable; 
  public get viewAuditLogs() {
    return this.getBooleanAttribute('view_audit_logs');
  }
  public set viewAuditLogs(value: boolean | cdktf.IResolvable) {
    this._viewAuditLogs = value;
  }
  public resetViewAuditLogs() {
    this._viewAuditLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewAuditLogsInput() {
    return this._viewAuditLogs;
  }

  // view_datamaps - computed: false, optional: true, required: false
  private _viewDatamaps?: boolean | cdktf.IResolvable; 
  public get viewDatamaps() {
    return this.getBooleanAttribute('view_datamaps');
  }
  public set viewDatamaps(value: boolean | cdktf.IResolvable) {
    this._viewDatamaps = value;
  }
  public resetViewDatamaps() {
    this._viewDatamaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewDatamapsInput() {
    return this._viewDatamaps;
  }

  // view_integrations - computed: false, optional: true, required: false
  private _viewIntegrations?: boolean | cdktf.IResolvable; 
  public get viewIntegrations() {
    return this.getBooleanAttribute('view_integrations');
  }
  public set viewIntegrations(value: boolean | cdktf.IResolvable) {
    this._viewIntegrations = value;
  }
  public resetViewIntegrations() {
    this._viewIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIntegrationsInput() {
    return this._viewIntegrations;
  }

  // view_policies - computed: false, optional: true, required: false
  private _viewPolicies?: boolean | cdktf.IResolvable; 
  public get viewPolicies() {
    return this.getBooleanAttribute('view_policies');
  }
  public set viewPolicies(value: boolean | cdktf.IResolvable) {
    this._viewPolicies = value;
  }
  public resetViewPolicies() {
    this._viewPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewPoliciesInput() {
    return this._viewPolicies;
  }

  // view_roles - computed: false, optional: true, required: false
  private _viewRoles?: boolean | cdktf.IResolvable; 
  public get viewRoles() {
    return this.getBooleanAttribute('view_roles');
  }
  public set viewRoles(value: boolean | cdktf.IResolvable) {
    this._viewRoles = value;
  }
  public resetViewRoles() {
    this._viewRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewRolesInput() {
    return this._viewRoles;
  }

  // view_users - computed: false, optional: true, required: false
  private _viewUsers?: boolean | cdktf.IResolvable; 
  public get viewUsers() {
    return this.getBooleanAttribute('view_users');
  }
  public set viewUsers(value: boolean | cdktf.IResolvable) {
    this._viewUsers = value;
  }
  public resetViewUsers() {
    this._viewUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewUsersInput() {
    return this._viewUsers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role cyral_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/role cyral_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_role',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // permissions - computed: false, optional: true, required: false
  private _permissions = new RolePermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: RolePermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      permissions: rolePermissionsToTerraform(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: rolePermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RolePermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
