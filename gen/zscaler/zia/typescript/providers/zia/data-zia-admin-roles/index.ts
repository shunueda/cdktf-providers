// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/admin_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaAdminRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin role Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/admin_roles#id DataZiaAdminRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/admin_roles#name DataZiaAdminRoles#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/admin_roles zia_admin_roles}
*/
export class DataZiaAdminRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_admin_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaAdminRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaAdminRoles to import
  * @param importFromId The id of the existing DataZiaAdminRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/admin_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaAdminRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_admin_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/admin_roles zia_admin_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaAdminRolesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaAdminRolesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_admin_roles',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_acct_access - computed: true, optional: false, required: false
  public get adminAcctAccess() {
    return this.getStringAttribute('admin_acct_access');
  }

  // alerting_access - computed: true, optional: false, required: false
  public get alertingAccess() {
    return this.getStringAttribute('alerting_access');
  }

  // analysis_access - computed: true, optional: false, required: false
  public get analysisAccess() {
    return this.getStringAttribute('analysis_access');
  }

  // dashboard_access - computed: true, optional: false, required: false
  public get dashboardAccess() {
    return this.getStringAttribute('dashboard_access');
  }

  // device_info_access - computed: true, optional: false, required: false
  public get deviceInfoAccess() {
    return this.getStringAttribute('device_info_access');
  }

  // ext_feature_permissions - computed: true, optional: false, required: false
  private _extFeaturePermissions = new cdktf.StringMap(this, "ext_feature_permissions");
  public get extFeaturePermissions() {
    return this._extFeaturePermissions;
  }

  // feature_permissions - computed: true, optional: false, required: false
  private _featurePermissions = new cdktf.StringMap(this, "feature_permissions");
  public get featurePermissions() {
    return this._featurePermissions;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_auditor - computed: true, optional: false, required: false
  public get isAuditor() {
    return this.getBooleanAttribute('is_auditor');
  }

  // is_non_editable - computed: true, optional: false, required: false
  public get isNonEditable() {
    return this.getBooleanAttribute('is_non_editable');
  }

  // logs_limit - computed: true, optional: false, required: false
  public get logsLimit() {
    return this.getStringAttribute('logs_limit');
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

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // policy_access - computed: true, optional: false, required: false
  public get policyAccess() {
    return this.getStringAttribute('policy_access');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }

  // report_access - computed: true, optional: false, required: false
  public get reportAccess() {
    return this.getStringAttribute('report_access');
  }

  // report_time_duration - computed: true, optional: false, required: false
  public get reportTimeDuration() {
    return this.getNumberAttribute('report_time_duration');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }

  // username_access - computed: true, optional: false, required: false
  public get usernameAccess() {
    return this.getStringAttribute('username_access');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
