// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrEcsBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#backup_type HbrEcsBackupPlan#backup_type}
  */
  readonly backupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#cross_account_role_name HbrEcsBackupPlan#cross_account_role_name}
  */
  readonly crossAccountRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#cross_account_type HbrEcsBackupPlan#cross_account_type}
  */
  readonly crossAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#cross_account_user_id HbrEcsBackupPlan#cross_account_user_id}
  */
  readonly crossAccountUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#detail HbrEcsBackupPlan#detail}
  */
  readonly detail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#disabled HbrEcsBackupPlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#ecs_backup_plan_name HbrEcsBackupPlan#ecs_backup_plan_name}
  */
  readonly ecsBackupPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#exclude HbrEcsBackupPlan#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#id HbrEcsBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#include HbrEcsBackupPlan#include}
  */
  readonly include?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#instance_id HbrEcsBackupPlan#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#options HbrEcsBackupPlan#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#path HbrEcsBackupPlan#path}
  */
  readonly path?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#retention HbrEcsBackupPlan#retention}
  */
  readonly retention: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#schedule HbrEcsBackupPlan#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#speed_limit HbrEcsBackupPlan#speed_limit}
  */
  readonly speedLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#update_paths HbrEcsBackupPlan#update_paths}
  */
  readonly updatePaths?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#vault_id HbrEcsBackupPlan#vault_id}
  */
  readonly vaultId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan alicloud_hbr_ecs_backup_plan}
*/
export class HbrEcsBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_ecs_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrEcsBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrEcsBackupPlan to import
  * @param importFromId The id of the existing HbrEcsBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrEcsBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_ecs_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_plan alicloud_hbr_ecs_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrEcsBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: HbrEcsBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_ecs_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupType = config.backupType;
    this._crossAccountRoleName = config.crossAccountRoleName;
    this._crossAccountType = config.crossAccountType;
    this._crossAccountUserId = config.crossAccountUserId;
    this._detail = config.detail;
    this._disabled = config.disabled;
    this._ecsBackupPlanName = config.ecsBackupPlanName;
    this._exclude = config.exclude;
    this._id = config.id;
    this._include = config.include;
    this._instanceId = config.instanceId;
    this._options = config.options;
    this._path = config.path;
    this._retention = config.retention;
    this._schedule = config.schedule;
    this._speedLimit = config.speedLimit;
    this._updatePaths = config.updatePaths;
    this._vaultId = config.vaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_type - computed: false, optional: false, required: true
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // cross_account_role_name - computed: false, optional: true, required: false
  private _crossAccountRoleName?: string; 
  public get crossAccountRoleName() {
    return this.getStringAttribute('cross_account_role_name');
  }
  public set crossAccountRoleName(value: string) {
    this._crossAccountRoleName = value;
  }
  public resetCrossAccountRoleName() {
    this._crossAccountRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleNameInput() {
    return this._crossAccountRoleName;
  }

  // cross_account_type - computed: true, optional: true, required: false
  private _crossAccountType?: string; 
  public get crossAccountType() {
    return this.getStringAttribute('cross_account_type');
  }
  public set crossAccountType(value: string) {
    this._crossAccountType = value;
  }
  public resetCrossAccountType() {
    this._crossAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountTypeInput() {
    return this._crossAccountType;
  }

  // cross_account_user_id - computed: false, optional: true, required: false
  private _crossAccountUserId?: number; 
  public get crossAccountUserId() {
    return this.getNumberAttribute('cross_account_user_id');
  }
  public set crossAccountUserId(value: number) {
    this._crossAccountUserId = value;
  }
  public resetCrossAccountUserId() {
    this._crossAccountUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountUserIdInput() {
    return this._crossAccountUserId;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: string; 
  public get detail() {
    return this.getStringAttribute('detail');
  }
  public set detail(value: string) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // ecs_backup_plan_name - computed: false, optional: false, required: true
  private _ecsBackupPlanName?: string; 
  public get ecsBackupPlanName() {
    return this.getStringAttribute('ecs_backup_plan_name');
  }
  public set ecsBackupPlanName(value: string) {
    this._ecsBackupPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsBackupPlanNameInput() {
    return this._ecsBackupPlanName;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string[]; 
  public get path() {
    return this.getListAttribute('path');
  }
  public set path(value: string[]) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // speed_limit - computed: false, optional: true, required: false
  private _speedLimit?: string; 
  public get speedLimit() {
    return this.getStringAttribute('speed_limit');
  }
  public set speedLimit(value: string) {
    this._speedLimit = value;
  }
  public resetSpeedLimit() {
    this._speedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedLimitInput() {
    return this._speedLimit;
  }

  // update_paths - computed: false, optional: true, required: false
  private _updatePaths?: boolean | cdktf.IResolvable; 
  public get updatePaths() {
    return this.getBooleanAttribute('update_paths');
  }
  public set updatePaths(value: boolean | cdktf.IResolvable) {
    this._updatePaths = value;
  }
  public resetUpdatePaths() {
    this._updatePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePathsInput() {
    return this._updatePaths;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_type: cdktf.stringToTerraform(this._backupType),
      cross_account_role_name: cdktf.stringToTerraform(this._crossAccountRoleName),
      cross_account_type: cdktf.stringToTerraform(this._crossAccountType),
      cross_account_user_id: cdktf.numberToTerraform(this._crossAccountUserId),
      detail: cdktf.stringToTerraform(this._detail),
      disabled: cdktf.booleanToTerraform(this._disabled),
      ecs_backup_plan_name: cdktf.stringToTerraform(this._ecsBackupPlanName),
      exclude: cdktf.stringToTerraform(this._exclude),
      id: cdktf.stringToTerraform(this._id),
      include: cdktf.stringToTerraform(this._include),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      options: cdktf.stringToTerraform(this._options),
      path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._path),
      retention: cdktf.stringToTerraform(this._retention),
      schedule: cdktf.stringToTerraform(this._schedule),
      speed_limit: cdktf.stringToTerraform(this._speedLimit),
      update_paths: cdktf.booleanToTerraform(this._updatePaths),
      vault_id: cdktf.stringToTerraform(this._vaultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_role_name: {
        value: cdktf.stringToHclTerraform(this._crossAccountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_type: {
        value: cdktf.stringToHclTerraform(this._crossAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_user_id: {
        value: cdktf.numberToHclTerraform(this._crossAccountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detail: {
        value: cdktf.stringToHclTerraform(this._detail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_backup_plan_name: {
        value: cdktf.stringToHclTerraform(this._ecsBackupPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude: {
        value: cdktf.stringToHclTerraform(this._exclude),
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
      include: {
        value: cdktf.stringToHclTerraform(this._include),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._path),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retention: {
        value: cdktf.stringToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed_limit: {
        value: cdktf.stringToHclTerraform(this._speedLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_paths: {
        value: cdktf.booleanToHclTerraform(this._updatePaths),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
