// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin and role management access permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#admin_acct_access AdminRoles#admin_acct_access}
  */
  readonly adminAcctAccess?: string;
  /**
  * Alerting access permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#alerting_access AdminRoles#alerting_access}
  */
  readonly alertingAccess?: string;
  /**
  * Insights logs access permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#analysis_access AdminRoles#analysis_access}
  */
  readonly analysisAccess?: string;
  /**
  * Dashboard access permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#dashboard_access AdminRoles#dashboard_access}
  */
  readonly dashboardAccess?: string;
  /**
  * Device information access permission. When set to NONE, device information is obfuscated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#device_info_access AdminRoles#device_info_access}
  */
  readonly deviceInfoAccess?: string;
  /**
  * External feature access permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#ext_feature_permissions AdminRoles#ext_feature_permissions}
  */
  readonly extFeaturePermissions?: { [key: string]: string };
  /**
  * Feature access permission. Indicates which features an admin role can access and if the admin has both read and write access, or read-only access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#feature_permissions AdminRoles#feature_permissions}
  */
  readonly featurePermissions?: { [key: string]: string };
  /**
  * Indicates whether this is an auditor role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#is_auditor AdminRoles#is_auditor}
  */
  readonly isAuditor?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not this admin user is editable/deletable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#is_non_editable AdminRoles#is_non_editable}
  */
  readonly isNonEditable?: boolean | cdktf.IResolvable;
  /**
  * Log range limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#logs_limit AdminRoles#logs_limit}
  */
  readonly logsLimit?: string;
  /**
  * Name of the admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#name AdminRoles#name}
  */
  readonly name?: string;
  /**
  * Request method for which the rule must be applied. If not set, rule will be applied to all methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#permissions AdminRoles#permissions}
  */
  readonly permissions?: string[];
  /**
  * Policy access permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#policy_access AdminRoles#policy_access}
  */
  readonly policyAccess?: string;
  /**
  * Admin rank of this admin role. This is applicable only when admin rank is enabled in the advanced settings. Default value is 7 (the lowest rank). The assigned admin rank determines the roles or admin users this user can manage, and which rule orders this admin can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#rank AdminRoles#rank}
  */
  readonly rank?: number;
  /**
  * Report access permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#report_access AdminRoles#report_access}
  */
  readonly reportAccess?: string;
  /**
  * Time duration allocated to the report dashboard. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#report_time_duration AdminRoles#report_time_duration}
  */
  readonly reportTimeDuration?: number;
  /**
  * The admin role type. ()This attribute is subject to change.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#role_type AdminRoles#role_type}
  */
  readonly roleType?: string;
  /**
  * Username access permission. When set to NONE, the username will be obfuscated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#username_access AdminRoles#username_access}
  */
  readonly usernameAccess?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles zia_admin_roles}
*/
export class AdminRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_admin_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminRoles to import
  * @param importFromId The id of the existing AdminRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_admin_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/admin_roles zia_admin_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminRolesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AdminRolesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_admin_roles',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminAcctAccess = config.adminAcctAccess;
    this._alertingAccess = config.alertingAccess;
    this._analysisAccess = config.analysisAccess;
    this._dashboardAccess = config.dashboardAccess;
    this._deviceInfoAccess = config.deviceInfoAccess;
    this._extFeaturePermissions = config.extFeaturePermissions;
    this._featurePermissions = config.featurePermissions;
    this._isAuditor = config.isAuditor;
    this._isNonEditable = config.isNonEditable;
    this._logsLimit = config.logsLimit;
    this._name = config.name;
    this._permissions = config.permissions;
    this._policyAccess = config.policyAccess;
    this._rank = config.rank;
    this._reportAccess = config.reportAccess;
    this._reportTimeDuration = config.reportTimeDuration;
    this._roleType = config.roleType;
    this._usernameAccess = config.usernameAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_acct_access - computed: true, optional: true, required: false
  private _adminAcctAccess?: string; 
  public get adminAcctAccess() {
    return this.getStringAttribute('admin_acct_access');
  }
  public set adminAcctAccess(value: string) {
    this._adminAcctAccess = value;
  }
  public resetAdminAcctAccess() {
    this._adminAcctAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAcctAccessInput() {
    return this._adminAcctAccess;
  }

  // alerting_access - computed: true, optional: true, required: false
  private _alertingAccess?: string; 
  public get alertingAccess() {
    return this.getStringAttribute('alerting_access');
  }
  public set alertingAccess(value: string) {
    this._alertingAccess = value;
  }
  public resetAlertingAccess() {
    this._alertingAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingAccessInput() {
    return this._alertingAccess;
  }

  // analysis_access - computed: true, optional: true, required: false
  private _analysisAccess?: string; 
  public get analysisAccess() {
    return this.getStringAttribute('analysis_access');
  }
  public set analysisAccess(value: string) {
    this._analysisAccess = value;
  }
  public resetAnalysisAccess() {
    this._analysisAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisAccessInput() {
    return this._analysisAccess;
  }

  // dashboard_access - computed: true, optional: true, required: false
  private _dashboardAccess?: string; 
  public get dashboardAccess() {
    return this.getStringAttribute('dashboard_access');
  }
  public set dashboardAccess(value: string) {
    this._dashboardAccess = value;
  }
  public resetDashboardAccess() {
    this._dashboardAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardAccessInput() {
    return this._dashboardAccess;
  }

  // device_info_access - computed: true, optional: true, required: false
  private _deviceInfoAccess?: string; 
  public get deviceInfoAccess() {
    return this.getStringAttribute('device_info_access');
  }
  public set deviceInfoAccess(value: string) {
    this._deviceInfoAccess = value;
  }
  public resetDeviceInfoAccess() {
    this._deviceInfoAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInfoAccessInput() {
    return this._deviceInfoAccess;
  }

  // ext_feature_permissions - computed: false, optional: true, required: false
  private _extFeaturePermissions?: { [key: string]: string }; 
  public get extFeaturePermissions() {
    return this.getStringMapAttribute('ext_feature_permissions');
  }
  public set extFeaturePermissions(value: { [key: string]: string }) {
    this._extFeaturePermissions = value;
  }
  public resetExtFeaturePermissions() {
    this._extFeaturePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extFeaturePermissionsInput() {
    return this._extFeaturePermissions;
  }

  // feature_permissions - computed: false, optional: true, required: false
  private _featurePermissions?: { [key: string]: string }; 
  public get featurePermissions() {
    return this.getStringMapAttribute('feature_permissions');
  }
  public set featurePermissions(value: { [key: string]: string }) {
    this._featurePermissions = value;
  }
  public resetFeaturePermissions() {
    this._featurePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePermissionsInput() {
    return this._featurePermissions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auditor - computed: false, optional: true, required: false
  private _isAuditor?: boolean | cdktf.IResolvable; 
  public get isAuditor() {
    return this.getBooleanAttribute('is_auditor');
  }
  public set isAuditor(value: boolean | cdktf.IResolvable) {
    this._isAuditor = value;
  }
  public resetIsAuditor() {
    this._isAuditor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuditorInput() {
    return this._isAuditor;
  }

  // is_non_editable - computed: false, optional: true, required: false
  private _isNonEditable?: boolean | cdktf.IResolvable; 
  public get isNonEditable() {
    return this.getBooleanAttribute('is_non_editable');
  }
  public set isNonEditable(value: boolean | cdktf.IResolvable) {
    this._isNonEditable = value;
  }
  public resetIsNonEditable() {
    this._isNonEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNonEditableInput() {
    return this._isNonEditable;
  }

  // logs_limit - computed: false, optional: true, required: false
  private _logsLimit?: string; 
  public get logsLimit() {
    return this.getStringAttribute('logs_limit');
  }
  public set logsLimit(value: string) {
    this._logsLimit = value;
  }
  public resetLogsLimit() {
    this._logsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsLimitInput() {
    return this._logsLimit;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // policy_access - computed: true, optional: true, required: false
  private _policyAccess?: string; 
  public get policyAccess() {
    return this.getStringAttribute('policy_access');
  }
  public set policyAccess(value: string) {
    this._policyAccess = value;
  }
  public resetPolicyAccess() {
    this._policyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAccessInput() {
    return this._policyAccess;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // report_access - computed: true, optional: true, required: false
  private _reportAccess?: string; 
  public get reportAccess() {
    return this.getStringAttribute('report_access');
  }
  public set reportAccess(value: string) {
    this._reportAccess = value;
  }
  public resetReportAccess() {
    this._reportAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportAccessInput() {
    return this._reportAccess;
  }

  // report_time_duration - computed: true, optional: true, required: false
  private _reportTimeDuration?: number; 
  public get reportTimeDuration() {
    return this.getNumberAttribute('report_time_duration');
  }
  public set reportTimeDuration(value: number) {
    this._reportTimeDuration = value;
  }
  public resetReportTimeDuration() {
    this._reportTimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTimeDurationInput() {
    return this._reportTimeDuration;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }

  // role_type - computed: false, optional: true, required: false
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // username_access - computed: true, optional: true, required: false
  private _usernameAccess?: string; 
  public get usernameAccess() {
    return this.getStringAttribute('username_access');
  }
  public set usernameAccess(value: string) {
    this._usernameAccess = value;
  }
  public resetUsernameAccess() {
    this._usernameAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAccessInput() {
    return this._usernameAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_acct_access: cdktf.stringToTerraform(this._adminAcctAccess),
      alerting_access: cdktf.stringToTerraform(this._alertingAccess),
      analysis_access: cdktf.stringToTerraform(this._analysisAccess),
      dashboard_access: cdktf.stringToTerraform(this._dashboardAccess),
      device_info_access: cdktf.stringToTerraform(this._deviceInfoAccess),
      ext_feature_permissions: cdktf.hashMapper(cdktf.stringToTerraform)(this._extFeaturePermissions),
      feature_permissions: cdktf.hashMapper(cdktf.stringToTerraform)(this._featurePermissions),
      is_auditor: cdktf.booleanToTerraform(this._isAuditor),
      is_non_editable: cdktf.booleanToTerraform(this._isNonEditable),
      logs_limit: cdktf.stringToTerraform(this._logsLimit),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      policy_access: cdktf.stringToTerraform(this._policyAccess),
      rank: cdktf.numberToTerraform(this._rank),
      report_access: cdktf.stringToTerraform(this._reportAccess),
      report_time_duration: cdktf.numberToTerraform(this._reportTimeDuration),
      role_type: cdktf.stringToTerraform(this._roleType),
      username_access: cdktf.stringToTerraform(this._usernameAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_acct_access: {
        value: cdktf.stringToHclTerraform(this._adminAcctAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alerting_access: {
        value: cdktf.stringToHclTerraform(this._alertingAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analysis_access: {
        value: cdktf.stringToHclTerraform(this._analysisAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_access: {
        value: cdktf.stringToHclTerraform(this._dashboardAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_info_access: {
        value: cdktf.stringToHclTerraform(this._deviceInfoAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_feature_permissions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extFeaturePermissions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      feature_permissions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._featurePermissions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      is_auditor: {
        value: cdktf.booleanToHclTerraform(this._isAuditor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_non_editable: {
        value: cdktf.booleanToHclTerraform(this._isNonEditable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logs_limit: {
        value: cdktf.stringToHclTerraform(this._logsLimit),
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
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_access: {
        value: cdktf.stringToHclTerraform(this._policyAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_access: {
        value: cdktf.stringToHclTerraform(this._reportAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_time_duration: {
        value: cdktf.numberToHclTerraform(this._reportTimeDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_type: {
        value: cdktf.stringToHclTerraform(this._roleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_access: {
        value: cdktf.stringToHclTerraform(this._usernameAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
