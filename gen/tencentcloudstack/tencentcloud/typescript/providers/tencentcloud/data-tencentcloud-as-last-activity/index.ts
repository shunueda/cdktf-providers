// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAsLastActivityConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID list of an auto scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity#auto_scaling_group_ids DataTencentcloudAsLastActivity#auto_scaling_group_ids}
  */
  readonly autoScalingGroupIds: string[];
  /**
  * Exclude cancellation type activities when querying. The default value is false, indicating that cancellation type activities are not excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity#exclude_cancelled_activity DataTencentcloudAsLastActivity#exclude_cancelled_activity}
  */
  readonly excludeCancelledActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity#id DataTencentcloudAsLastActivity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity#result_output_file DataTencentcloudAsLastActivity#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSet {
}

export function dataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSetToTerraform(struct?: DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSetToHclTerraform(struct?: DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }
}

export class DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSetOutputReference {
    return new DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSet {
}

export function dataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSetToTerraform(struct?: DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSetToHclTerraform(struct?: DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSetOutputReference {
    return new DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAsLastActivityActivitySetInvocationResultSet {
}

export function dataTencentcloudAsLastActivityActivitySetInvocationResultSetToTerraform(struct?: DataTencentcloudAsLastActivityActivitySetInvocationResultSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsLastActivityActivitySetInvocationResultSetToHclTerraform(struct?: DataTencentcloudAsLastActivityActivitySetInvocationResultSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsLastActivityActivitySetInvocationResultSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudAsLastActivityActivitySetInvocationResultSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsLastActivityActivitySetInvocationResultSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_id - computed: true, optional: false, required: false
  public get commandId() {
    return this.getStringAttribute('command_id');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // invocation_id - computed: true, optional: false, required: false
  public get invocationId() {
    return this.getStringAttribute('invocation_id');
  }

  // invocation_task_id - computed: true, optional: false, required: false
  public get invocationTaskId() {
    return this.getStringAttribute('invocation_task_id');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getStringAttribute('task_status');
  }
}

export class DataTencentcloudAsLastActivityActivitySetInvocationResultSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsLastActivityActivitySetInvocationResultSetOutputReference {
    return new DataTencentcloudAsLastActivityActivitySetInvocationResultSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSet {
}

export function dataTencentcloudAsLastActivityActivitySetLifecycleActionResultSetToTerraform(struct?: DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsLastActivityActivitySetLifecycleActionResultSetToHclTerraform(struct?: DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // invocation_id - computed: true, optional: false, required: false
  public get invocationId() {
    return this.getStringAttribute('invocation_id');
  }

  // invoke_command_result - computed: true, optional: false, required: false
  public get invokeCommandResult() {
    return this.getStringAttribute('invoke_command_result');
  }

  // lifecycle_action_result - computed: true, optional: false, required: false
  public get lifecycleActionResult() {
    return this.getStringAttribute('lifecycle_action_result');
  }

  // lifecycle_hook_id - computed: true, optional: false, required: false
  public get lifecycleHookId() {
    return this.getStringAttribute('lifecycle_hook_id');
  }

  // notification_result - computed: true, optional: false, required: false
  public get notificationResult() {
    return this.getStringAttribute('notification_result');
  }

  // result_reason - computed: true, optional: false, required: false
  public get resultReason() {
    return this.getStringAttribute('result_reason');
  }
}

export class DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSetOutputReference {
    return new DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAsLastActivityActivitySet {
}

export function dataTencentcloudAsLastActivityActivitySetToTerraform(struct?: DataTencentcloudAsLastActivityActivitySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsLastActivityActivitySetToHclTerraform(struct?: DataTencentcloudAsLastActivityActivitySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsLastActivityActivitySetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudAsLastActivityActivitySet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsLastActivityActivitySet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activity_id - computed: true, optional: false, required: false
  public get activityId() {
    return this.getStringAttribute('activity_id');
  }

  // activity_related_instance_set - computed: true, optional: false, required: false
  private _activityRelatedInstanceSet = new DataTencentcloudAsLastActivityActivitySetActivityRelatedInstanceSetList(this, "activity_related_instance_set", false);
  public get activityRelatedInstanceSet() {
    return this._activityRelatedInstanceSet;
  }

  // activity_type - computed: true, optional: false, required: false
  public get activityType() {
    return this.getStringAttribute('activity_type');
  }

  // auto_scaling_group_id - computed: true, optional: false, required: false
  public get autoScalingGroupId() {
    return this.getStringAttribute('auto_scaling_group_id');
  }

  // cause - computed: true, optional: false, required: false
  public get cause() {
    return this.getStringAttribute('cause');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detailed_status_message_set - computed: true, optional: false, required: false
  private _detailedStatusMessageSet = new DataTencentcloudAsLastActivityActivitySetDetailedStatusMessageSetList(this, "detailed_status_message_set", false);
  public get detailedStatusMessageSet() {
    return this._detailedStatusMessageSet;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // invocation_result_set - computed: true, optional: false, required: false
  private _invocationResultSet = new DataTencentcloudAsLastActivityActivitySetInvocationResultSetList(this, "invocation_result_set", false);
  public get invocationResultSet() {
    return this._invocationResultSet;
  }

  // lifecycle_action_result_set - computed: true, optional: false, required: false
  private _lifecycleActionResultSet = new DataTencentcloudAsLastActivityActivitySetLifecycleActionResultSetList(this, "lifecycle_action_result_set", false);
  public get lifecycleActionResultSet() {
    return this._lifecycleActionResultSet;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // status_message_simplified - computed: true, optional: false, required: false
  public get statusMessageSimplified() {
    return this.getStringAttribute('status_message_simplified');
  }
}

export class DataTencentcloudAsLastActivityActivitySetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsLastActivityActivitySetOutputReference {
    return new DataTencentcloudAsLastActivityActivitySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity tencentcloud_as_last_activity}
*/
export class DataTencentcloudAsLastActivity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_last_activity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAsLastActivity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAsLastActivity to import
  * @param importFromId The id of the existing DataTencentcloudAsLastActivity that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAsLastActivity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_last_activity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_last_activity tencentcloud_as_last_activity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAsLastActivityConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAsLastActivityConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_last_activity',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScalingGroupIds = config.autoScalingGroupIds;
    this._excludeCancelledActivity = config.excludeCancelledActivity;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activity_set - computed: true, optional: false, required: false
  private _activitySet = new DataTencentcloudAsLastActivityActivitySetList(this, "activity_set", false);
  public get activitySet() {
    return this._activitySet;
  }

  // auto_scaling_group_ids - computed: false, optional: false, required: true
  private _autoScalingGroupIds?: string[]; 
  public get autoScalingGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_scaling_group_ids'));
  }
  public set autoScalingGroupIds(value: string[]) {
    this._autoScalingGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupIdsInput() {
    return this._autoScalingGroupIds;
  }

  // exclude_cancelled_activity - computed: false, optional: true, required: false
  private _excludeCancelledActivity?: boolean | cdktf.IResolvable; 
  public get excludeCancelledActivity() {
    return this.getBooleanAttribute('exclude_cancelled_activity');
  }
  public set excludeCancelledActivity(value: boolean | cdktf.IResolvable) {
    this._excludeCancelledActivity = value;
  }
  public resetExcludeCancelledActivity() {
    this._excludeCancelledActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCancelledActivityInput() {
    return this._excludeCancelledActivity;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoScalingGroupIds),
      exclude_cancelled_activity: cdktf.booleanToTerraform(this._excludeCancelledActivity),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoScalingGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_cancelled_activity: {
        value: cdktf.booleanToHclTerraform(this._excludeCancelledActivity),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
