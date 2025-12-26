// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataTaskVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version#id DataTencentcloudWedataTaskVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version#project_id DataTencentcloudWedataTaskVersion#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version#result_output_file DataTencentcloudWedataTaskVersion#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version#task_id DataTencentcloudWedataTaskVersion#task_id}
  */
  readonly taskId: string;
  /**
  * Submit version ID. If not specified, the latest submit version will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version#version_id DataTencentcloudWedataTaskVersion#version_id}
  */
  readonly versionId?: string;
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttribute {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskBaseAttributeToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskBaseAttributeToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // create_user_uin - computed: true, optional: false, required: false
  public get createUserUin() {
    return this.getStringAttribute('create_user_uin');
  }

  // last_ops_time - computed: true, optional: false, required: false
  public get lastOpsTime() {
    return this.getStringAttribute('last_ops_time');
  }

  // last_ops_user_name - computed: true, optional: false, required: false
  public get lastOpsUserName() {
    return this.getStringAttribute('last_ops_user_name');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // last_update_user_name - computed: true, optional: false, required: false
  public get lastUpdateUserName() {
    return this.getStringAttribute('last_update_user_name');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // submit - computed: true, optional: false, required: false
  public get submit() {
    return this.getBooleanAttribute('submit');
  }

  // task_description - computed: true, optional: false, required: false
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_latest_submit_version_no - computed: true, optional: false, required: false
  public get taskLatestSubmitVersionNo() {
    return this.getStringAttribute('task_latest_submit_version_no');
  }

  // task_latest_version_no - computed: true, optional: false, required: false
  public get taskLatestVersionNo() {
    return this.getStringAttribute('task_latest_version_no');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_type_id - computed: true, optional: false, required: false
  public get taskTypeId() {
    return this.getNumberAttribute('task_type_id');
  }

  // update_user_uin - computed: true, optional: false, required: false
  public get updateUserUin() {
    return this.getStringAttribute('update_user_uin');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttributeList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttributeOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // param_key - computed: true, optional: false, required: false
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // param_key - computed: true, optional: false, required: false
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskConfiguration {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskConfigurationToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskConfigurationToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broker_ip - computed: true, optional: false, required: false
  public get brokerIp() {
    return this.getStringAttribute('broker_ip');
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // bundle_info - computed: true, optional: false, required: false
  public get bundleInfo() {
    return this.getStringAttribute('bundle_info');
  }

  // code_content - computed: true, optional: false, required: false
  public get codeContent() {
    return this.getStringAttribute('code_content');
  }

  // data_cluster - computed: true, optional: false, required: false
  public get dataCluster() {
    return this.getStringAttribute('data_cluster');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // source_service_id - computed: true, optional: false, required: false
  public get sourceServiceId() {
    return this.getStringAttribute('source_service_id');
  }

  // source_service_name - computed: true, optional: false, required: false
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }

  // source_service_type - computed: true, optional: false, required: false
  public get sourceServiceType() {
    return this.getStringAttribute('source_service_type');
  }

  // target_service_id - computed: true, optional: false, required: false
  public get targetServiceId() {
    return this.getStringAttribute('target_service_id');
  }

  // target_service_name - computed: true, optional: false, required: false
  public get targetServiceName() {
    return this.getStringAttribute('target_service_name');
  }

  // target_service_type - computed: true, optional: false, required: false
  public get targetServiceType() {
    return this.getStringAttribute('target_service_type');
  }

  // task_ext_configuration_list - computed: true, optional: false, required: false
  private _taskExtConfigurationList = new DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskExtConfigurationListStructList(this, "task_ext_configuration_list", false);
  public get taskExtConfigurationList() {
    return this._taskExtConfigurationList;
  }

  // task_scheduling_parameter_list - computed: true, optional: false, required: false
  private _taskSchedulingParameterList = new DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationTaskSchedulingParameterListStructList(this, "task_scheduling_parameter_list", false);
  public get taskSchedulingParameterList() {
    return this._taskSchedulingParameterList;
  }

  // yarn_queue - computed: true, optional: false, required: false
  public get yarnQueue() {
    return this.getStringAttribute('yarn_queue');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategy {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategyToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategyToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // polling_null_strategy - computed: true, optional: false, required: false
  public get pollingNullStrategy() {
    return this.getStringAttribute('polling_null_strategy');
  }

  // task_dependency_executing_strategies - computed: true, optional: false, required: false
  public get taskDependencyExecutingStrategies() {
    return cdktf.Fn.tolist(this.getListAttribute('task_dependency_executing_strategies'));
  }

  // task_dependency_executing_timeout_value - computed: true, optional: false, required: false
  public get taskDependencyExecutingTimeoutValue() {
    return this.getNumberAttribute('task_dependency_executing_timeout_value');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategyOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dependency_strategy - computed: true, optional: false, required: false
  private _dependencyStrategy = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListDependencyStrategyList(this, "dependency_strategy", false);
  public get dependencyStrategy() {
    return this._dependencyStrategy;
  }

  // main_cyclic_config - computed: true, optional: false, required: false
  public get mainCyclicConfig() {
    return this.getStringAttribute('main_cyclic_config');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getStringAttribute('offset');
  }

  // subordinate_cyclic_config - computed: true, optional: false, required: false
  public get subordinateCyclicConfig() {
    return this.getStringAttribute('subordinate_cyclic_config');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // param_key - computed: true, optional: false, required: false
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_broadcast_type - computed: true, optional: false, required: false
  public get eventBroadcastType() {
    return this.getStringAttribute('event_broadcast_type');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // event_sub_type - computed: true, optional: false, required: false
  public get eventSubType() {
    return this.getStringAttribute('event_sub_type');
  }

  // properties_list - computed: true, optional: false, required: false
  private _propertiesList = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructList(this, "properties_list", false);
  public get propertiesList() {
    return this._propertiesList;
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_param_key - computed: true, optional: false, required: false
  public get fromParamKey() {
    return this.getStringAttribute('from_param_key');
  }

  // from_task_id - computed: true, optional: false, required: false
  public get fromTaskId() {
    return this.getStringAttribute('from_task_id');
  }

  // param_desc - computed: true, optional: false, required: false
  public get paramDesc() {
    return this.getStringAttribute('param_desc');
  }

  // param_key - computed: true, optional: false, required: false
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // param_key - computed: true, optional: false, required: false
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_flow_type - computed: true, optional: false, required: false
  public get dataFlowType() {
    return this.getStringAttribute('data_flow_type');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // datasource_id - computed: true, optional: false, required: false
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }

  // db_guid - computed: true, optional: false, required: false
  public get dbGuid() {
    return this.getStringAttribute('db_guid');
  }

  // partition_name - computed: true, optional: false, required: false
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }

  // table_guid - computed: true, optional: false, required: false
  public get tableGuid() {
    return this.getStringAttribute('table_guid');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_physical_id - computed: true, optional: false, required: false
  public get tablePhysicalId() {
    return this.getStringAttribute('table_physical_id');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // polling_null_strategy - computed: true, optional: false, required: false
  public get pollingNullStrategy() {
    return this.getStringAttribute('polling_null_strategy');
  }

  // task_dependency_executing_strategies - computed: true, optional: false, required: false
  public get taskDependencyExecutingStrategies() {
    return cdktf.Fn.tolist(this.getListAttribute('task_dependency_executing_strategies'));
  }

  // task_dependency_executing_timeout_value - computed: true, optional: false, required: false
  public get taskDependencyExecutingTimeoutValue() {
    return this.getNumberAttribute('task_dependency_executing_timeout_value');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dependency_strategy - computed: true, optional: false, required: false
  private _dependencyStrategy = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyList(this, "dependency_strategy", false);
  public get dependencyStrategy() {
    return this._dependencyStrategy;
  }

  // main_cyclic_config - computed: true, optional: false, required: false
  public get mainCyclicConfig() {
    return this.getStringAttribute('main_cyclic_config');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getStringAttribute('offset');
  }

  // subordinate_cyclic_config - computed: true, optional: false, required: false
  public get subordinateCyclicConfig() {
    return this.getStringAttribute('subordinate_cyclic_config');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfiguration {
}

export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_redo_type - computed: true, optional: false, required: false
  public get allowRedoType() {
    return this.getStringAttribute('allow_redo_type');
  }

  // calendar_id - computed: true, optional: false, required: false
  public get calendarId() {
    return this.getStringAttribute('calendar_id');
  }

  // calendar_name - computed: true, optional: false, required: false
  public get calendarName() {
    return this.getStringAttribute('calendar_name');
  }

  // calendar_open - computed: true, optional: false, required: false
  public get calendarOpen() {
    return this.getStringAttribute('calendar_open');
  }

  // crontab_expression - computed: true, optional: false, required: false
  public get crontabExpression() {
    return this.getStringAttribute('crontab_expression');
  }

  // cycle_type - computed: true, optional: false, required: false
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }

  // down_stream_dependency_config_list - computed: true, optional: false, required: false
  private _downStreamDependencyConfigList = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationDownStreamDependencyConfigListStructList(this, "down_stream_dependency_config_list", false);
  public get downStreamDependencyConfigList() {
    return this._downStreamDependencyConfigList;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // event_listener_list - computed: true, optional: false, required: false
  private _eventListenerList = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationEventListenerListStructList(this, "event_listener_list", false);
  public get eventListenerList() {
    return this._eventListenerList;
  }

  // execution_end_time - computed: true, optional: false, required: false
  public get executionEndTime() {
    return this.getStringAttribute('execution_end_time');
  }

  // execution_start_time - computed: true, optional: false, required: false
  public get executionStartTime() {
    return this.getStringAttribute('execution_start_time');
  }

  // execution_ttl - computed: true, optional: false, required: false
  public get executionTtl() {
    return this.getNumberAttribute('execution_ttl');
  }

  // init_strategy - computed: true, optional: false, required: false
  public get initStrategy() {
    return this.getStringAttribute('init_strategy');
  }

  // max_retry_attempts - computed: true, optional: false, required: false
  public get maxRetryAttempts() {
    return this.getNumberAttribute('max_retry_attempts');
  }

  // param_task_in_list - computed: true, optional: false, required: false
  private _paramTaskInList = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskInListStructList(this, "param_task_in_list", false);
  public get paramTaskInList() {
    return this._paramTaskInList;
  }

  // param_task_out_list - computed: true, optional: false, required: false
  private _paramTaskOutList = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationParamTaskOutListStructList(this, "param_task_out_list", false);
  public get paramTaskOutList() {
    return this._paramTaskOutList;
  }

  // retry_wait - computed: true, optional: false, required: false
  public get retryWait() {
    return this.getNumberAttribute('retry_wait');
  }

  // run_priority - computed: true, optional: false, required: false
  public get runPriority() {
    return this.getNumberAttribute('run_priority');
  }

  // schedule_run_type - computed: true, optional: false, required: false
  public get scheduleRunType() {
    return this.getNumberAttribute('schedule_run_type');
  }

  // schedule_time_zone - computed: true, optional: false, required: false
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }

  // self_depend - computed: true, optional: false, required: false
  public get selfDepend() {
    return this.getStringAttribute('self_depend');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // task_output_registry_list - computed: true, optional: false, required: false
  private _taskOutputRegistryList = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructList(this, "task_output_registry_list", false);
  public get taskOutputRegistryList() {
    return this._taskOutputRegistryList;
  }

  // upstream_dependency_config_list - computed: true, optional: false, required: false
  private _upstreamDependencyConfigList = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructList(this, "upstream_dependency_config_list", false);
  public get upstreamDependencyConfigList() {
    return this._upstreamDependencyConfigList;
  }

  // wait_execution_total_ttl - computed: true, optional: false, required: false
  public get waitExecutionTotalTtl() {
    return this.getStringAttribute('wait_execution_total_ttl');
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionDataTask {
}

export function dataTencentcloudWedataTaskVersionDataTaskToTerraform(struct?: DataTencentcloudWedataTaskVersionDataTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataTaskToHclTerraform(struct?: DataTencentcloudWedataTaskVersionDataTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionDataTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionDataTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_base_attribute - computed: true, optional: false, required: false
  private _taskBaseAttribute = new DataTencentcloudWedataTaskVersionDataTaskTaskBaseAttributeList(this, "task_base_attribute", false);
  public get taskBaseAttribute() {
    return this._taskBaseAttribute;
  }

  // task_configuration - computed: true, optional: false, required: false
  private _taskConfiguration = new DataTencentcloudWedataTaskVersionDataTaskTaskConfigurationList(this, "task_configuration", false);
  public get taskConfiguration() {
    return this._taskConfiguration;
  }

  // task_scheduler_configuration - computed: true, optional: false, required: false
  private _taskSchedulerConfiguration = new DataTencentcloudWedataTaskVersionDataTaskTaskSchedulerConfigurationList(this, "task_scheduler_configuration", false);
  public get taskSchedulerConfiguration() {
    return this._taskSchedulerConfiguration;
  }
}

export class DataTencentcloudWedataTaskVersionDataTaskList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataTaskOutputReference {
    return new DataTencentcloudWedataTaskVersionDataTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskVersionData {
}

export function dataTencentcloudWedataTaskVersionDataToTerraform(struct?: DataTencentcloudWedataTaskVersionData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskVersionDataToHclTerraform(struct?: DataTencentcloudWedataTaskVersionData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskVersionDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskVersionData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskVersionData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approve_status - computed: true, optional: false, required: false
  public get approveStatus() {
    return this.getStringAttribute('approve_status');
  }

  // approve_time - computed: true, optional: false, required: false
  public get approveTime() {
    return this.getStringAttribute('approve_time');
  }

  // approve_user_uin - computed: true, optional: false, required: false
  public get approveUserUin() {
    return this.getStringAttribute('approve_user_uin');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // create_user_uin - computed: true, optional: false, required: false
  public get createUserUin() {
    return this.getStringAttribute('create_user_uin');
  }

  // task - computed: true, optional: false, required: false
  private _task = new DataTencentcloudWedataTaskVersionDataTaskList(this, "task", false);
  public get task() {
    return this._task;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_num - computed: true, optional: false, required: false
  public get versionNum() {
    return this.getStringAttribute('version_num');
  }

  // version_remark - computed: true, optional: false, required: false
  public get versionRemark() {
    return this.getStringAttribute('version_remark');
  }
}

export class DataTencentcloudWedataTaskVersionDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskVersionDataOutputReference {
    return new DataTencentcloudWedataTaskVersionDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version tencentcloud_wedata_task_version}
*/
export class DataTencentcloudWedataTaskVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_task_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataTaskVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataTaskVersion to import
  * @param importFromId The id of the existing DataTencentcloudWedataTaskVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataTaskVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_task_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/wedata_task_version tencentcloud_wedata_task_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataTaskVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataTaskVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_task_version',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._taskId = config.taskId;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataTaskVersionDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      task_id: cdktf.stringToTerraform(this._taskId),
      version_id: cdktf.stringToTerraform(this._versionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
