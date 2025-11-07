// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrServerBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#cross_account_role_name HbrServerBackupPlan#cross_account_role_name}
  */
  readonly crossAccountRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#cross_account_type HbrServerBackupPlan#cross_account_type}
  */
  readonly crossAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#cross_account_user_id HbrServerBackupPlan#cross_account_user_id}
  */
  readonly crossAccountUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#disabled HbrServerBackupPlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#ecs_server_backup_plan_name HbrServerBackupPlan#ecs_server_backup_plan_name}
  */
  readonly ecsServerBackupPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#id HbrServerBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#instance_id HbrServerBackupPlan#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#retention HbrServerBackupPlan#retention}
  */
  readonly retention: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#schedule HbrServerBackupPlan#schedule}
  */
  readonly schedule: string;
  /**
  * detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#detail HbrServerBackupPlan#detail}
  */
  readonly detail: HbrServerBackupPlanDetail[] | cdktf.IResolvable;
}
export interface HbrServerBackupPlanDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#app_consistent HbrServerBackupPlan#app_consistent}
  */
  readonly appConsistent: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#destination_region_id HbrServerBackupPlan#destination_region_id}
  */
  readonly destinationRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#destination_retention HbrServerBackupPlan#destination_retention}
  */
  readonly destinationRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#disk_id_list HbrServerBackupPlan#disk_id_list}
  */
  readonly diskIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#do_copy HbrServerBackupPlan#do_copy}
  */
  readonly doCopy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#enable_fs_freeze HbrServerBackupPlan#enable_fs_freeze}
  */
  readonly enableFsFreeze?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#post_script_path HbrServerBackupPlan#post_script_path}
  */
  readonly postScriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#pre_script_path HbrServerBackupPlan#pre_script_path}
  */
  readonly preScriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#snapshot_group HbrServerBackupPlan#snapshot_group}
  */
  readonly snapshotGroup: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#timeout_in_seconds HbrServerBackupPlan#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function hbrServerBackupPlanDetailToTerraform(struct?: HbrServerBackupPlanDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_consistent: cdktf.booleanToTerraform(struct!.appConsistent),
    destination_region_id: cdktf.stringToTerraform(struct!.destinationRegionId),
    destination_retention: cdktf.numberToTerraform(struct!.destinationRetention),
    disk_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskIdList),
    do_copy: cdktf.booleanToTerraform(struct!.doCopy),
    enable_fs_freeze: cdktf.booleanToTerraform(struct!.enableFsFreeze),
    post_script_path: cdktf.stringToTerraform(struct!.postScriptPath),
    pre_script_path: cdktf.stringToTerraform(struct!.preScriptPath),
    snapshot_group: cdktf.booleanToTerraform(struct!.snapshotGroup),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function hbrServerBackupPlanDetailToHclTerraform(struct?: HbrServerBackupPlanDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_consistent: {
      value: cdktf.booleanToHclTerraform(struct!.appConsistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_region_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationRegionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_retention: {
      value: cdktf.numberToHclTerraform(struct!.destinationRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    do_copy: {
      value: cdktf.booleanToHclTerraform(struct!.doCopy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_fs_freeze: {
      value: cdktf.booleanToHclTerraform(struct!.enableFsFreeze),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_script_path: {
      value: cdktf.stringToHclTerraform(struct!.postScriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_script_path: {
      value: cdktf.stringToHclTerraform(struct!.preScriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_group: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrServerBackupPlanDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HbrServerBackupPlanDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appConsistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.appConsistent = this._appConsistent;
    }
    if (this._destinationRegionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRegionId = this._destinationRegionId;
    }
    if (this._destinationRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRetention = this._destinationRetention;
    }
    if (this._diskIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIdList = this._diskIdList;
    }
    if (this._doCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.doCopy = this._doCopy;
    }
    if (this._enableFsFreeze !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFsFreeze = this._enableFsFreeze;
    }
    if (this._postScriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScriptPath = this._postScriptPath;
    }
    if (this._preScriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.preScriptPath = this._preScriptPath;
    }
    if (this._snapshotGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotGroup = this._snapshotGroup;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrServerBackupPlanDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appConsistent = undefined;
      this._destinationRegionId = undefined;
      this._destinationRetention = undefined;
      this._diskIdList = undefined;
      this._doCopy = undefined;
      this._enableFsFreeze = undefined;
      this._postScriptPath = undefined;
      this._preScriptPath = undefined;
      this._snapshotGroup = undefined;
      this._timeoutInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appConsistent = value.appConsistent;
      this._destinationRegionId = value.destinationRegionId;
      this._destinationRetention = value.destinationRetention;
      this._diskIdList = value.diskIdList;
      this._doCopy = value.doCopy;
      this._enableFsFreeze = value.enableFsFreeze;
      this._postScriptPath = value.postScriptPath;
      this._preScriptPath = value.preScriptPath;
      this._snapshotGroup = value.snapshotGroup;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // app_consistent - computed: false, optional: false, required: true
  private _appConsistent?: boolean | cdktf.IResolvable; 
  public get appConsistent() {
    return this.getBooleanAttribute('app_consistent');
  }
  public set appConsistent(value: boolean | cdktf.IResolvable) {
    this._appConsistent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appConsistentInput() {
    return this._appConsistent;
  }

  // destination_region_id - computed: false, optional: true, required: false
  private _destinationRegionId?: string; 
  public get destinationRegionId() {
    return this.getStringAttribute('destination_region_id');
  }
  public set destinationRegionId(value: string) {
    this._destinationRegionId = value;
  }
  public resetDestinationRegionId() {
    this._destinationRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionIdInput() {
    return this._destinationRegionId;
  }

  // destination_retention - computed: false, optional: true, required: false
  private _destinationRetention?: number; 
  public get destinationRetention() {
    return this.getNumberAttribute('destination_retention');
  }
  public set destinationRetention(value: number) {
    this._destinationRetention = value;
  }
  public resetDestinationRetention() {
    this._destinationRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRetentionInput() {
    return this._destinationRetention;
  }

  // disk_id_list - computed: false, optional: true, required: false
  private _diskIdList?: string[]; 
  public get diskIdList() {
    return this.getListAttribute('disk_id_list');
  }
  public set diskIdList(value: string[]) {
    this._diskIdList = value;
  }
  public resetDiskIdList() {
    this._diskIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdListInput() {
    return this._diskIdList;
  }

  // do_copy - computed: false, optional: true, required: false
  private _doCopy?: boolean | cdktf.IResolvable; 
  public get doCopy() {
    return this.getBooleanAttribute('do_copy');
  }
  public set doCopy(value: boolean | cdktf.IResolvable) {
    this._doCopy = value;
  }
  public resetDoCopy() {
    this._doCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doCopyInput() {
    return this._doCopy;
  }

  // enable_fs_freeze - computed: false, optional: true, required: false
  private _enableFsFreeze?: boolean | cdktf.IResolvable; 
  public get enableFsFreeze() {
    return this.getBooleanAttribute('enable_fs_freeze');
  }
  public set enableFsFreeze(value: boolean | cdktf.IResolvable) {
    this._enableFsFreeze = value;
  }
  public resetEnableFsFreeze() {
    this._enableFsFreeze = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFsFreezeInput() {
    return this._enableFsFreeze;
  }

  // post_script_path - computed: false, optional: true, required: false
  private _postScriptPath?: string; 
  public get postScriptPath() {
    return this.getStringAttribute('post_script_path');
  }
  public set postScriptPath(value: string) {
    this._postScriptPath = value;
  }
  public resetPostScriptPath() {
    this._postScriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScriptPathInput() {
    return this._postScriptPath;
  }

  // pre_script_path - computed: false, optional: true, required: false
  private _preScriptPath?: string; 
  public get preScriptPath() {
    return this.getStringAttribute('pre_script_path');
  }
  public set preScriptPath(value: string) {
    this._preScriptPath = value;
  }
  public resetPreScriptPath() {
    this._preScriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preScriptPathInput() {
    return this._preScriptPath;
  }

  // snapshot_group - computed: false, optional: false, required: true
  private _snapshotGroup?: boolean | cdktf.IResolvable; 
  public get snapshotGroup() {
    return this.getBooleanAttribute('snapshot_group');
  }
  public set snapshotGroup(value: boolean | cdktf.IResolvable) {
    this._snapshotGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotGroupInput() {
    return this._snapshotGroup;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}

export class HbrServerBackupPlanDetailList extends cdktf.ComplexList {
  public internalValue? : HbrServerBackupPlanDetail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HbrServerBackupPlanDetailOutputReference {
    return new HbrServerBackupPlanDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan alicloud_hbr_server_backup_plan}
*/
export class HbrServerBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_server_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrServerBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrServerBackupPlan to import
  * @param importFromId The id of the existing HbrServerBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrServerBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_server_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_server_backup_plan alicloud_hbr_server_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrServerBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: HbrServerBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_server_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crossAccountRoleName = config.crossAccountRoleName;
    this._crossAccountType = config.crossAccountType;
    this._crossAccountUserId = config.crossAccountUserId;
    this._disabled = config.disabled;
    this._ecsServerBackupPlanName = config.ecsServerBackupPlanName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._retention = config.retention;
    this._schedule = config.schedule;
    this._detail.internalValue = config.detail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ecs_server_backup_plan_name - computed: false, optional: false, required: true
  private _ecsServerBackupPlanName?: string; 
  public get ecsServerBackupPlanName() {
    return this.getStringAttribute('ecs_server_backup_plan_name');
  }
  public set ecsServerBackupPlanName(value: string) {
    this._ecsServerBackupPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsServerBackupPlanNameInput() {
    return this._ecsServerBackupPlanName;
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

  // retention - computed: false, optional: false, required: true
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
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

  // detail - computed: false, optional: false, required: true
  private _detail = new HbrServerBackupPlanDetailList(this, "detail", true);
  public get detail() {
    return this._detail;
  }
  public putDetail(value: HbrServerBackupPlanDetail[] | cdktf.IResolvable) {
    this._detail.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_account_role_name: cdktf.stringToTerraform(this._crossAccountRoleName),
      cross_account_type: cdktf.stringToTerraform(this._crossAccountType),
      cross_account_user_id: cdktf.numberToTerraform(this._crossAccountUserId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      ecs_server_backup_plan_name: cdktf.stringToTerraform(this._ecsServerBackupPlanName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      retention: cdktf.numberToTerraform(this._retention),
      schedule: cdktf.stringToTerraform(this._schedule),
      detail: cdktf.listMapper(hbrServerBackupPlanDetailToTerraform, true)(this._detail.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_server_backup_plan_name: {
        value: cdktf.stringToHclTerraform(this._ecsServerBackupPlanName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktf.numberToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detail: {
        value: cdktf.listMapperHcl(hbrServerBackupPlanDetailToHclTerraform, true)(this._detail.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HbrServerBackupPlanDetailList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
