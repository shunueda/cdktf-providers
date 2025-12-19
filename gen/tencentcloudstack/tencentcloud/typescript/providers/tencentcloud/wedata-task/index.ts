// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#id WedataTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#project_id WedataTask#project_id}
  */
  readonly projectId: string;
  /**
  * task_base_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_base_attribute WedataTask#task_base_attribute}
  */
  readonly taskBaseAttribute: WedataTaskTaskBaseAttribute;
  /**
  * task_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_configuration WedataTask#task_configuration}
  */
  readonly taskConfiguration: WedataTaskTaskConfiguration;
  /**
  * task_scheduler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_scheduler_configuration WedataTask#task_scheduler_configuration}
  */
  readonly taskSchedulerConfiguration: WedataTaskTaskSchedulerConfiguration;
}
export interface WedataTaskTaskBaseAttribute {
  /**
  * Task owner ID, defaults to current user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#owner_uin WedataTask#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Task description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_description WedataTask#task_description}
  */
  readonly taskDescription?: string;
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_name WedataTask#task_name}
  */
  readonly taskName: string;
  /**
  * Task type ID:
  * 
  * * 21:JDBC SQL
  * * 23:TDSQL-PostgreSQL
  * * 26:OfflineSynchronization
  * * 30:Python
  * * 31:PySpark
  * * 32:DLC SQL
  * * 33:Impala
  * * 34:Hive SQL
  * * 35:Shell
  * * 36:Spark SQL
  * * 38:Shell Form Mode
  * * 39:Spark
  * * 40:TCHouse-P
  * * 41:Kettle
  * * 42:Tchouse-X
  * * 43:TCHouse-X SQL
  * * 46:DLC Spark
  * * 47:TiOne
  * * 48:Trino
  * * 50:DLC PySpark
  * * 92:MapReduce
  * * 130:Branch Node
  * * 131:Merged Node
  * * 132:Notebook
  * * 133:SSH
  * * 134:StarRocks
  * * 137:For-each
  * * 138:Setats SQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_type_id WedataTask#task_type_id}
  */
  readonly taskTypeId: string;
  /**
  * Workflow ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#workflow_id WedataTask#workflow_id}
  */
  readonly workflowId: string;
}

export function wedataTaskTaskBaseAttributeToTerraform(struct?: WedataTaskTaskBaseAttributeOutputReference | WedataTaskTaskBaseAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner_uin: cdktf.stringToTerraform(struct!.ownerUin),
    task_description: cdktf.stringToTerraform(struct!.taskDescription),
    task_name: cdktf.stringToTerraform(struct!.taskName),
    task_type_id: cdktf.stringToTerraform(struct!.taskTypeId),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
  }
}


export function wedataTaskTaskBaseAttributeToHclTerraform(struct?: WedataTaskTaskBaseAttributeOutputReference | WedataTaskTaskBaseAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner_uin: {
      value: cdktf.stringToHclTerraform(struct!.ownerUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_description: {
      value: cdktf.stringToHclTerraform(struct!.taskDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type_id: {
      value: cdktf.stringToHclTerraform(struct!.taskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskBaseAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataTaskTaskBaseAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUin = this._ownerUin;
    }
    if (this._taskDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDescription = this._taskDescription;
    }
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    if (this._taskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTypeId = this._taskTypeId;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskBaseAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ownerUin = undefined;
      this._taskDescription = undefined;
      this._taskName = undefined;
      this._taskTypeId = undefined;
      this._workflowId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ownerUin = value.ownerUin;
      this._taskDescription = value.taskDescription;
      this._taskName = value.taskName;
      this._taskTypeId = value.taskTypeId;
      this._workflowId = value.workflowId;
    }
  }

  // owner_uin - computed: true, optional: true, required: false
  private _ownerUin?: string; 
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }
  public set ownerUin(value: string) {
    this._ownerUin = value;
  }
  public resetOwnerUin() {
    this._ownerUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUinInput() {
    return this._ownerUin;
  }

  // task_description - computed: true, optional: true, required: false
  private _taskDescription?: string; 
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }
  public set taskDescription(value: string) {
    this._taskDescription = value;
  }
  public resetTaskDescription() {
    this._taskDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDescriptionInput() {
    return this._taskDescription;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_type_id - computed: false, optional: false, required: true
  private _taskTypeId?: string; 
  public get taskTypeId() {
    return this.getStringAttribute('task_type_id');
  }
  public set taskTypeId(value: string) {
    this._taskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeIdInput() {
    return this._taskTypeId;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }
}
export interface WedataTaskTaskConfigurationTaskExtConfigurationListStruct {
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_key WedataTask#param_key}
  */
  readonly paramKey: string;
  /**
  * Parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_value WedataTask#param_value}
  */
  readonly paramValue: string;
}

export function wedataTaskTaskConfigurationTaskExtConfigurationListStructToTerraform(struct?: WedataTaskTaskConfigurationTaskExtConfigurationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_key: cdktf.stringToTerraform(struct!.paramKey),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function wedataTaskTaskConfigurationTaskExtConfigurationListStructToHclTerraform(struct?: WedataTaskTaskConfigurationTaskExtConfigurationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_key: {
      value: cdktf.stringToHclTerraform(struct!.paramKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskConfigurationTaskExtConfigurationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskConfigurationTaskExtConfigurationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKey = this._paramKey;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskConfigurationTaskExtConfigurationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramKey = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramKey = value.paramKey;
      this._paramValue = value.paramValue;
    }
  }

  // param_key - computed: false, optional: false, required: true
  private _paramKey?: string; 
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
  public set paramKey(value: string) {
    this._paramKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyInput() {
    return this._paramKey;
  }

  // param_value - computed: false, optional: false, required: true
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}

export class WedataTaskTaskConfigurationTaskExtConfigurationListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskConfigurationTaskExtConfigurationListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskConfigurationTaskExtConfigurationListStructOutputReference {
    return new WedataTaskTaskConfigurationTaskExtConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskConfigurationTaskSchedulingParameterListStruct {
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_key WedataTask#param_key}
  */
  readonly paramKey: string;
  /**
  * Parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_value WedataTask#param_value}
  */
  readonly paramValue: string;
}

export function wedataTaskTaskConfigurationTaskSchedulingParameterListStructToTerraform(struct?: WedataTaskTaskConfigurationTaskSchedulingParameterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_key: cdktf.stringToTerraform(struct!.paramKey),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function wedataTaskTaskConfigurationTaskSchedulingParameterListStructToHclTerraform(struct?: WedataTaskTaskConfigurationTaskSchedulingParameterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_key: {
      value: cdktf.stringToHclTerraform(struct!.paramKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskConfigurationTaskSchedulingParameterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskConfigurationTaskSchedulingParameterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKey = this._paramKey;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskConfigurationTaskSchedulingParameterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramKey = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramKey = value.paramKey;
      this._paramValue = value.paramValue;
    }
  }

  // param_key - computed: false, optional: false, required: true
  private _paramKey?: string; 
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
  public set paramKey(value: string) {
    this._paramKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyInput() {
    return this._paramKey;
  }

  // param_value - computed: false, optional: false, required: true
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}

export class WedataTaskTaskConfigurationTaskSchedulingParameterListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskConfigurationTaskSchedulingParameterListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskConfigurationTaskSchedulingParameterListStructOutputReference {
    return new WedataTaskTaskConfigurationTaskSchedulingParameterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskConfiguration {
  /**
  * Specified running node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#broker_ip WedataTask#broker_ip}
  */
  readonly brokerIp?: string;
  /**
  * ID used by Bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#bundle_id WedataTask#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * Bundle information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#bundle_info WedataTask#bundle_info}
  */
  readonly bundleInfo?: string;
  /**
  * Base64 encoded code content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#code_content WedataTask#code_content}
  */
  readonly codeContent?: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#data_cluster WedataTask#data_cluster}
  */
  readonly dataCluster?: string;
  /**
  * Resource group ID: Need to obtain ExecutorGroupId via DescribeNormalSchedulerExecutorGroups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#resource_group WedataTask#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Source data source ID, separated by `;`, need to obtain via DescribeDataSourceWithoutInfo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#source_service_id WedataTask#source_service_id}
  */
  readonly sourceServiceId?: string;
  /**
  * Target data source ID, separated by `;`, need to obtain via DescribeDataSourceWithoutInfo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#target_service_id WedataTask#target_service_id}
  */
  readonly targetServiceId?: string;
  /**
  * Resource pool queue name, need to obtain via DescribeProjectClusterQueues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#yarn_queue WedataTask#yarn_queue}
  */
  readonly yarnQueue?: string;
  /**
  * task_ext_configuration_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_ext_configuration_list WedataTask#task_ext_configuration_list}
  */
  readonly taskExtConfigurationList?: WedataTaskTaskConfigurationTaskExtConfigurationListStruct[] | cdktf.IResolvable;
  /**
  * task_scheduling_parameter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_scheduling_parameter_list WedataTask#task_scheduling_parameter_list}
  */
  readonly taskSchedulingParameterList?: WedataTaskTaskConfigurationTaskSchedulingParameterListStruct[] | cdktf.IResolvable;
}

export function wedataTaskTaskConfigurationToTerraform(struct?: WedataTaskTaskConfigurationOutputReference | WedataTaskTaskConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_ip: cdktf.stringToTerraform(struct!.brokerIp),
    bundle_id: cdktf.stringToTerraform(struct!.bundleId),
    bundle_info: cdktf.stringToTerraform(struct!.bundleInfo),
    code_content: cdktf.stringToTerraform(struct!.codeContent),
    data_cluster: cdktf.stringToTerraform(struct!.dataCluster),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    source_service_id: cdktf.stringToTerraform(struct!.sourceServiceId),
    target_service_id: cdktf.stringToTerraform(struct!.targetServiceId),
    yarn_queue: cdktf.stringToTerraform(struct!.yarnQueue),
    task_ext_configuration_list: cdktf.listMapper(wedataTaskTaskConfigurationTaskExtConfigurationListStructToTerraform, true)(struct!.taskExtConfigurationList),
    task_scheduling_parameter_list: cdktf.listMapper(wedataTaskTaskConfigurationTaskSchedulingParameterListStructToTerraform, true)(struct!.taskSchedulingParameterList),
  }
}


export function wedataTaskTaskConfigurationToHclTerraform(struct?: WedataTaskTaskConfigurationOutputReference | WedataTaskTaskConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_ip: {
      value: cdktf.stringToHclTerraform(struct!.brokerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.bundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_info: {
      value: cdktf.stringToHclTerraform(struct!.bundleInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_content: {
      value: cdktf.stringToHclTerraform(struct!.codeContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_cluster: {
      value: cdktf.stringToHclTerraform(struct!.dataCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_service_id: {
      value: cdktf.stringToHclTerraform(struct!.targetServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yarn_queue: {
      value: cdktf.stringToHclTerraform(struct!.yarnQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_ext_configuration_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskConfigurationTaskExtConfigurationListStructToHclTerraform, true)(struct!.taskExtConfigurationList),
      isBlock: true,
      type: "set",
      storageClassType: "WedataTaskTaskConfigurationTaskExtConfigurationListStructList",
    },
    task_scheduling_parameter_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskConfigurationTaskSchedulingParameterListStructToHclTerraform, true)(struct!.taskSchedulingParameterList),
      isBlock: true,
      type: "set",
      storageClassType: "WedataTaskTaskConfigurationTaskSchedulingParameterListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataTaskTaskConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerIp = this._brokerIp;
    }
    if (this._bundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleId = this._bundleId;
    }
    if (this._bundleInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleInfo = this._bundleInfo;
    }
    if (this._codeContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeContent = this._codeContent;
    }
    if (this._dataCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCluster = this._dataCluster;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._sourceServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceId = this._sourceServiceId;
    }
    if (this._targetServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetServiceId = this._targetServiceId;
    }
    if (this._yarnQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yarnQueue = this._yarnQueue;
    }
    if (this._taskExtConfigurationList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskExtConfigurationList = this._taskExtConfigurationList?.internalValue;
    }
    if (this._taskSchedulingParameterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskSchedulingParameterList = this._taskSchedulingParameterList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerIp = undefined;
      this._bundleId = undefined;
      this._bundleInfo = undefined;
      this._codeContent = undefined;
      this._dataCluster = undefined;
      this._resourceGroup = undefined;
      this._sourceServiceId = undefined;
      this._targetServiceId = undefined;
      this._yarnQueue = undefined;
      this._taskExtConfigurationList.internalValue = undefined;
      this._taskSchedulingParameterList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerIp = value.brokerIp;
      this._bundleId = value.bundleId;
      this._bundleInfo = value.bundleInfo;
      this._codeContent = value.codeContent;
      this._dataCluster = value.dataCluster;
      this._resourceGroup = value.resourceGroup;
      this._sourceServiceId = value.sourceServiceId;
      this._targetServiceId = value.targetServiceId;
      this._yarnQueue = value.yarnQueue;
      this._taskExtConfigurationList.internalValue = value.taskExtConfigurationList;
      this._taskSchedulingParameterList.internalValue = value.taskSchedulingParameterList;
    }
  }

  // broker_ip - computed: true, optional: true, required: false
  private _brokerIp?: string; 
  public get brokerIp() {
    return this.getStringAttribute('broker_ip');
  }
  public set brokerIp(value: string) {
    this._brokerIp = value;
  }
  public resetBrokerIp() {
    this._brokerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerIpInput() {
    return this._brokerIp;
  }

  // bundle_id - computed: true, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // bundle_info - computed: true, optional: true, required: false
  private _bundleInfo?: string; 
  public get bundleInfo() {
    return this.getStringAttribute('bundle_info');
  }
  public set bundleInfo(value: string) {
    this._bundleInfo = value;
  }
  public resetBundleInfo() {
    this._bundleInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInfoInput() {
    return this._bundleInfo;
  }

  // code_content - computed: true, optional: true, required: false
  private _codeContent?: string; 
  public get codeContent() {
    return this.getStringAttribute('code_content');
  }
  public set codeContent(value: string) {
    this._codeContent = value;
  }
  public resetCodeContent() {
    this._codeContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeContentInput() {
    return this._codeContent;
  }

  // data_cluster - computed: true, optional: true, required: false
  private _dataCluster?: string; 
  public get dataCluster() {
    return this.getStringAttribute('data_cluster');
  }
  public set dataCluster(value: string) {
    this._dataCluster = value;
  }
  public resetDataCluster() {
    this._dataCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataClusterInput() {
    return this._dataCluster;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // source_service_id - computed: true, optional: true, required: false
  private _sourceServiceId?: string; 
  public get sourceServiceId() {
    return this.getStringAttribute('source_service_id');
  }
  public set sourceServiceId(value: string) {
    this._sourceServiceId = value;
  }
  public resetSourceServiceId() {
    this._sourceServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceIdInput() {
    return this._sourceServiceId;
  }

  // target_service_id - computed: true, optional: true, required: false
  private _targetServiceId?: string; 
  public get targetServiceId() {
    return this.getStringAttribute('target_service_id');
  }
  public set targetServiceId(value: string) {
    this._targetServiceId = value;
  }
  public resetTargetServiceId() {
    this._targetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceIdInput() {
    return this._targetServiceId;
  }

  // yarn_queue - computed: true, optional: true, required: false
  private _yarnQueue?: string; 
  public get yarnQueue() {
    return this.getStringAttribute('yarn_queue');
  }
  public set yarnQueue(value: string) {
    this._yarnQueue = value;
  }
  public resetYarnQueue() {
    this._yarnQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yarnQueueInput() {
    return this._yarnQueue;
  }

  // task_ext_configuration_list - computed: false, optional: true, required: false
  private _taskExtConfigurationList = new WedataTaskTaskConfigurationTaskExtConfigurationListStructList(this, "task_ext_configuration_list", true);
  public get taskExtConfigurationList() {
    return this._taskExtConfigurationList;
  }
  public putTaskExtConfigurationList(value: WedataTaskTaskConfigurationTaskExtConfigurationListStruct[] | cdktf.IResolvable) {
    this._taskExtConfigurationList.internalValue = value;
  }
  public resetTaskExtConfigurationList() {
    this._taskExtConfigurationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskExtConfigurationListInput() {
    return this._taskExtConfigurationList.internalValue;
  }

  // task_scheduling_parameter_list - computed: false, optional: true, required: false
  private _taskSchedulingParameterList = new WedataTaskTaskConfigurationTaskSchedulingParameterListStructList(this, "task_scheduling_parameter_list", true);
  public get taskSchedulingParameterList() {
    return this._taskSchedulingParameterList;
  }
  public putTaskSchedulingParameterList(value: WedataTaskTaskConfigurationTaskSchedulingParameterListStruct[] | cdktf.IResolvable) {
    this._taskSchedulingParameterList.internalValue = value;
  }
  public resetTaskSchedulingParameterList() {
    this._taskSchedulingParameterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSchedulingParameterListInput() {
    return this._taskSchedulingParameterList.internalValue;
  }
}
export interface WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct {
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_key WedataTask#param_key}
  */
  readonly paramKey: string;
  /**
  * Parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_value WedataTask#param_value}
  */
  readonly paramValue: string;
}

export function wedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructToTerraform(struct?: WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_key: cdktf.stringToTerraform(struct!.paramKey),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function wedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_key: {
      value: cdktf.stringToHclTerraform(struct!.paramKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKey = this._paramKey;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramKey = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramKey = value.paramKey;
      this._paramValue = value.paramValue;
    }
  }

  // param_key - computed: false, optional: false, required: true
  private _paramKey?: string; 
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
  public set paramKey(value: string) {
    this._paramKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyInput() {
    return this._paramKey;
  }

  // param_value - computed: false, optional: false, required: true
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}

export class WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructOutputReference {
    return new WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskSchedulerConfigurationEventListenerListStruct {
  /**
  * Event broadcast type: SINGLE, BROADCAST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#event_broadcast_type WedataTask#event_broadcast_type}
  */
  readonly eventBroadcastType: string;
  /**
  * Event name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#event_name WedataTask#event_name}
  */
  readonly eventName: string;
  /**
  * Event cycle: SECOND, MIN, HOUR, DAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#event_sub_type WedataTask#event_sub_type}
  */
  readonly eventSubType: string;
  /**
  * properties_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#properties_list WedataTask#properties_list}
  */
  readonly propertiesList?: WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct[] | cdktf.IResolvable;
}

export function wedataTaskTaskSchedulerConfigurationEventListenerListStructToTerraform(struct?: WedataTaskTaskSchedulerConfigurationEventListenerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_broadcast_type: cdktf.stringToTerraform(struct!.eventBroadcastType),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    event_sub_type: cdktf.stringToTerraform(struct!.eventSubType),
    properties_list: cdktf.listMapper(wedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructToTerraform, true)(struct!.propertiesList),
  }
}


export function wedataTaskTaskSchedulerConfigurationEventListenerListStructToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationEventListenerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_broadcast_type: {
      value: cdktf.stringToHclTerraform(struct!.eventBroadcastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.eventSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructToHclTerraform, true)(struct!.propertiesList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationEventListenerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskSchedulerConfigurationEventListenerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBroadcastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBroadcastType = this._eventBroadcastType;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._eventSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSubType = this._eventSubType;
    }
    if (this._propertiesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesList = this._propertiesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfigurationEventListenerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventBroadcastType = undefined;
      this._eventName = undefined;
      this._eventSubType = undefined;
      this._propertiesList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventBroadcastType = value.eventBroadcastType;
      this._eventName = value.eventName;
      this._eventSubType = value.eventSubType;
      this._propertiesList.internalValue = value.propertiesList;
    }
  }

  // event_broadcast_type - computed: false, optional: false, required: true
  private _eventBroadcastType?: string; 
  public get eventBroadcastType() {
    return this.getStringAttribute('event_broadcast_type');
  }
  public set eventBroadcastType(value: string) {
    this._eventBroadcastType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBroadcastTypeInput() {
    return this._eventBroadcastType;
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // event_sub_type - computed: false, optional: false, required: true
  private _eventSubType?: string; 
  public get eventSubType() {
    return this.getStringAttribute('event_sub_type');
  }
  public set eventSubType(value: string) {
    this._eventSubType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSubTypeInput() {
    return this._eventSubType;
  }

  // properties_list - computed: false, optional: true, required: false
  private _propertiesList = new WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStructList(this, "properties_list", false);
  public get propertiesList() {
    return this._propertiesList;
  }
  public putPropertiesList(value: WedataTaskTaskSchedulerConfigurationEventListenerListPropertiesListStruct[] | cdktf.IResolvable) {
    this._propertiesList.internalValue = value;
  }
  public resetPropertiesList() {
    this._propertiesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesListInput() {
    return this._propertiesList.internalValue;
  }
}

export class WedataTaskTaskSchedulerConfigurationEventListenerListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskSchedulerConfigurationEventListenerListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskSchedulerConfigurationEventListenerListStructOutputReference {
    return new WedataTaskTaskSchedulerConfigurationEventListenerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskSchedulerConfigurationParamTaskInListStruct {
  /**
  * Parent task parameter key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#from_param_key WedataTask#from_param_key}
  */
  readonly fromParamKey: string;
  /**
  * Parent task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#from_task_id WedataTask#from_task_id}
  */
  readonly fromTaskId: string;
  /**
  * Parameter description: format is project_identifier.task_name.parameter_name; example: project_wedata_1.sh_250820_104107.pp_out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_desc WedataTask#param_desc}
  */
  readonly paramDesc: string;
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_key WedataTask#param_key}
  */
  readonly paramKey: string;
}

export function wedataTaskTaskSchedulerConfigurationParamTaskInListStructToTerraform(struct?: WedataTaskTaskSchedulerConfigurationParamTaskInListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_param_key: cdktf.stringToTerraform(struct!.fromParamKey),
    from_task_id: cdktf.stringToTerraform(struct!.fromTaskId),
    param_desc: cdktf.stringToTerraform(struct!.paramDesc),
    param_key: cdktf.stringToTerraform(struct!.paramKey),
  }
}


export function wedataTaskTaskSchedulerConfigurationParamTaskInListStructToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationParamTaskInListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_param_key: {
      value: cdktf.stringToHclTerraform(struct!.fromParamKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_task_id: {
      value: cdktf.stringToHclTerraform(struct!.fromTaskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_desc: {
      value: cdktf.stringToHclTerraform(struct!.paramDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_key: {
      value: cdktf.stringToHclTerraform(struct!.paramKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationParamTaskInListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskSchedulerConfigurationParamTaskInListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromParamKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromParamKey = this._fromParamKey;
    }
    if (this._fromTaskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromTaskId = this._fromTaskId;
    }
    if (this._paramDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramDesc = this._paramDesc;
    }
    if (this._paramKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKey = this._paramKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfigurationParamTaskInListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromParamKey = undefined;
      this._fromTaskId = undefined;
      this._paramDesc = undefined;
      this._paramKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromParamKey = value.fromParamKey;
      this._fromTaskId = value.fromTaskId;
      this._paramDesc = value.paramDesc;
      this._paramKey = value.paramKey;
    }
  }

  // from_param_key - computed: false, optional: false, required: true
  private _fromParamKey?: string; 
  public get fromParamKey() {
    return this.getStringAttribute('from_param_key');
  }
  public set fromParamKey(value: string) {
    this._fromParamKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromParamKeyInput() {
    return this._fromParamKey;
  }

  // from_task_id - computed: false, optional: false, required: true
  private _fromTaskId?: string; 
  public get fromTaskId() {
    return this.getStringAttribute('from_task_id');
  }
  public set fromTaskId(value: string) {
    this._fromTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTaskIdInput() {
    return this._fromTaskId;
  }

  // param_desc - computed: false, optional: false, required: true
  private _paramDesc?: string; 
  public get paramDesc() {
    return this.getStringAttribute('param_desc');
  }
  public set paramDesc(value: string) {
    this._paramDesc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramDescInput() {
    return this._paramDesc;
  }

  // param_key - computed: false, optional: false, required: true
  private _paramKey?: string; 
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
  public set paramKey(value: string) {
    this._paramKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyInput() {
    return this._paramKey;
  }
}

export class WedataTaskTaskSchedulerConfigurationParamTaskInListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskSchedulerConfigurationParamTaskInListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskSchedulerConfigurationParamTaskInListStructOutputReference {
    return new WedataTaskTaskSchedulerConfigurationParamTaskInListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct {
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_key WedataTask#param_key}
  */
  readonly paramKey: string;
  /**
  * Parameter definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_value WedataTask#param_value}
  */
  readonly paramValue: string;
}

export function wedataTaskTaskSchedulerConfigurationParamTaskOutListStructToTerraform(struct?: WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_key: cdktf.stringToTerraform(struct!.paramKey),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function wedataTaskTaskSchedulerConfigurationParamTaskOutListStructToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_key: {
      value: cdktf.stringToHclTerraform(struct!.paramKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationParamTaskOutListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKey = this._paramKey;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramKey = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramKey = value.paramKey;
      this._paramValue = value.paramValue;
    }
  }

  // param_key - computed: false, optional: false, required: true
  private _paramKey?: string; 
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
  public set paramKey(value: string) {
    this._paramKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyInput() {
    return this._paramKey;
  }

  // param_value - computed: false, optional: false, required: true
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}

export class WedataTaskTaskSchedulerConfigurationParamTaskOutListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskSchedulerConfigurationParamTaskOutListStructOutputReference {
    return new WedataTaskTaskSchedulerConfigurationParamTaskOutListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct {
  /**
  * Input/output table type
  *       Input stream
  *  UPSTREAM,
  *       Output stream
  *   DOWNSTREAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#data_flow_type WedataTask#data_flow_type}
  */
  readonly dataFlowType: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#database_name WedataTask#database_name}
  */
  readonly databaseName: string;
  /**
  * Data source ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#datasource_id WedataTask#datasource_id}
  */
  readonly datasourceId: string;
  /**
  * Database unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#db_guid WedataTask#db_guid}
  */
  readonly dbGuid?: string;
  /**
  * Partition name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#partition_name WedataTask#partition_name}
  */
  readonly partitionName: string;
  /**
  * Table unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#table_guid WedataTask#table_guid}
  */
  readonly tableGuid?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#table_name WedataTask#table_name}
  */
  readonly tableName: string;
  /**
  * Table physical unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#table_physical_id WedataTask#table_physical_id}
  */
  readonly tablePhysicalId: string;
}

export function wedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructToTerraform(struct?: WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_flow_type: cdktf.stringToTerraform(struct!.dataFlowType),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    datasource_id: cdktf.stringToTerraform(struct!.datasourceId),
    db_guid: cdktf.stringToTerraform(struct!.dbGuid),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    table_guid: cdktf.stringToTerraform(struct!.tableGuid),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    table_physical_id: cdktf.stringToTerraform(struct!.tablePhysicalId),
  }
}


export function wedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_flow_type: {
      value: cdktf.stringToHclTerraform(struct!.dataFlowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_id: {
      value: cdktf.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_guid: {
      value: cdktf.stringToHclTerraform(struct!.dbGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_guid: {
      value: cdktf.stringToHclTerraform(struct!.tableGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_physical_id: {
      value: cdktf.stringToHclTerraform(struct!.tablePhysicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFlowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFlowType = this._dataFlowType;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    if (this._dbGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbGuid = this._dbGuid;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._tableGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableGuid = this._tableGuid;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tablePhysicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePhysicalId = this._tablePhysicalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataFlowType = undefined;
      this._databaseName = undefined;
      this._datasourceId = undefined;
      this._dbGuid = undefined;
      this._partitionName = undefined;
      this._tableGuid = undefined;
      this._tableName = undefined;
      this._tablePhysicalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataFlowType = value.dataFlowType;
      this._databaseName = value.databaseName;
      this._datasourceId = value.datasourceId;
      this._dbGuid = value.dbGuid;
      this._partitionName = value.partitionName;
      this._tableGuid = value.tableGuid;
      this._tableName = value.tableName;
      this._tablePhysicalId = value.tablePhysicalId;
    }
  }

  // data_flow_type - computed: false, optional: false, required: true
  private _dataFlowType?: string; 
  public get dataFlowType() {
    return this.getStringAttribute('data_flow_type');
  }
  public set dataFlowType(value: string) {
    this._dataFlowType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFlowTypeInput() {
    return this._dataFlowType;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // datasource_id - computed: false, optional: false, required: true
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
  }

  // db_guid - computed: true, optional: true, required: false
  private _dbGuid?: string; 
  public get dbGuid() {
    return this.getStringAttribute('db_guid');
  }
  public set dbGuid(value: string) {
    this._dbGuid = value;
  }
  public resetDbGuid() {
    this._dbGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbGuidInput() {
    return this._dbGuid;
  }

  // partition_name - computed: false, optional: false, required: true
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // table_guid - computed: true, optional: true, required: false
  private _tableGuid?: string; 
  public get tableGuid() {
    return this.getStringAttribute('table_guid');
  }
  public set tableGuid(value: string) {
    this._tableGuid = value;
  }
  public resetTableGuid() {
    this._tableGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableGuidInput() {
    return this._tableGuid;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // table_physical_id - computed: false, optional: false, required: true
  private _tablePhysicalId?: string; 
  public get tablePhysicalId() {
    return this.getStringAttribute('table_physical_id');
  }
  public set tablePhysicalId(value: string) {
    this._tablePhysicalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePhysicalIdInput() {
    return this._tablePhysicalId;
  }
}

export class WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructOutputReference {
    return new WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy {
  /**
  * Strategy for waiting for upstream task instances: EXECUTING; WAITING.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#polling_null_strategy WedataTask#polling_null_strategy}
  */
  readonly pollingNullStrategy?: string;
  /**
  * This field is required only when PollingNullStrategy is EXECUTING, List type: NOT_EXIST (default, when minute depends on minute/hour depends on hour, parent instance is not within the downstream instance scheduling time range); PARENT_EXPIRED (parent instance failed); PARENT_TIMEOUT (parent instance timed out). If any of the above scenarios is met, the parent task instance dependency judgment can be passed; otherwise, it is necessary to wait for the parent instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_dependency_executing_strategies WedataTask#task_dependency_executing_strategies}
  */
  readonly taskDependencyExecutingStrategies?: string[];
  /**
  * This field is required only when TaskDependencyExecutingStrategies contains PARENT_TIMEOUT, the timeout time for downstream tasks depending on parent instance execution, unit: minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_dependency_executing_timeout_value WedataTask#task_dependency_executing_timeout_value}
  */
  readonly taskDependencyExecutingTimeoutValue?: number;
}

export function wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyToTerraform(struct?: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyOutputReference | WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    polling_null_strategy: cdktf.stringToTerraform(struct!.pollingNullStrategy),
    task_dependency_executing_strategies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taskDependencyExecutingStrategies),
    task_dependency_executing_timeout_value: cdktf.numberToTerraform(struct!.taskDependencyExecutingTimeoutValue),
  }
}


export function wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyOutputReference | WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    polling_null_strategy: {
      value: cdktf.stringToHclTerraform(struct!.pollingNullStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_dependency_executing_strategies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.taskDependencyExecutingStrategies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    task_dependency_executing_timeout_value: {
      value: cdktf.numberToHclTerraform(struct!.taskDependencyExecutingTimeoutValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollingNullStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingNullStrategy = this._pollingNullStrategy;
    }
    if (this._taskDependencyExecutingStrategies !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDependencyExecutingStrategies = this._taskDependencyExecutingStrategies;
    }
    if (this._taskDependencyExecutingTimeoutValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDependencyExecutingTimeoutValue = this._taskDependencyExecutingTimeoutValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pollingNullStrategy = undefined;
      this._taskDependencyExecutingStrategies = undefined;
      this._taskDependencyExecutingTimeoutValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pollingNullStrategy = value.pollingNullStrategy;
      this._taskDependencyExecutingStrategies = value.taskDependencyExecutingStrategies;
      this._taskDependencyExecutingTimeoutValue = value.taskDependencyExecutingTimeoutValue;
    }
  }

  // polling_null_strategy - computed: true, optional: true, required: false
  private _pollingNullStrategy?: string; 
  public get pollingNullStrategy() {
    return this.getStringAttribute('polling_null_strategy');
  }
  public set pollingNullStrategy(value: string) {
    this._pollingNullStrategy = value;
  }
  public resetPollingNullStrategy() {
    this._pollingNullStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingNullStrategyInput() {
    return this._pollingNullStrategy;
  }

  // task_dependency_executing_strategies - computed: true, optional: true, required: false
  private _taskDependencyExecutingStrategies?: string[]; 
  public get taskDependencyExecutingStrategies() {
    return cdktf.Fn.tolist(this.getListAttribute('task_dependency_executing_strategies'));
  }
  public set taskDependencyExecutingStrategies(value: string[]) {
    this._taskDependencyExecutingStrategies = value;
  }
  public resetTaskDependencyExecutingStrategies() {
    this._taskDependencyExecutingStrategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDependencyExecutingStrategiesInput() {
    return this._taskDependencyExecutingStrategies;
  }

  // task_dependency_executing_timeout_value - computed: true, optional: true, required: false
  private _taskDependencyExecutingTimeoutValue?: number; 
  public get taskDependencyExecutingTimeoutValue() {
    return this.getNumberAttribute('task_dependency_executing_timeout_value');
  }
  public set taskDependencyExecutingTimeoutValue(value: number) {
    this._taskDependencyExecutingTimeoutValue = value;
  }
  public resetTaskDependencyExecutingTimeoutValue() {
    this._taskDependencyExecutingTimeoutValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDependencyExecutingTimeoutValueInput() {
    return this._taskDependencyExecutingTimeoutValue;
  }
}
export interface WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct {
  /**
  * Main dependency configuration, values:
  * 
  * * CRONTAB
  * * DAY
  * * HOUR
  * * LIST_DAY
  * * LIST_HOUR
  * * LIST_MINUTE
  * * MINUTE
  * * MONTH
  * * RANGE_DAY
  * * RANGE_HOUR
  * * RANGE_MINUTE
  * * WEEK
  * * YEAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#main_cyclic_config WedataTask#main_cyclic_config}
  */
  readonly mainCyclicConfig: string;
  /**
  * Offset in interval and list modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#offset WedataTask#offset}
  */
  readonly offset?: string;
  /**
  * Secondary dependency configuration, values:
  * * ALL_DAY_OF_YEAR
  * * ALL_MONTH_OF_YEAR
  * * CURRENT
  * * CURRENT_DAY
  * * CURRENT_HOUR
  * * CURRENT_MINUTE
  * * CURRENT_MONTH
  * * CURRENT_WEEK
  * * CURRENT_YEAR
  * * PREVIOUS_BEGIN_OF_MONTH
  * * PREVIOUS_DAY
  * * PREVIOUS_DAY_LATER_OFFSET_HOUR
  * * PREVIOUS_DAY_LATER_OFFSET_MINUTE
  * * PREVIOUS_END_OF_MONTH
  * * PREVIOUS_FRIDAY
  * * PREVIOUS_HOUR
  * * PREVIOUS_HOUR_CYCLE
  * * PREVIOUS_HOUR_LATER_OFFSET_MINUTE
  * * PREVIOUS_MINUTE_CYCLE
  * * PREVIOUS_MONTH
  * * PREVIOUS_WEEK
  * * PREVIOUS_WEEKEND
  * * RECENT_DATE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#subordinate_cyclic_config WedataTask#subordinate_cyclic_config}
  */
  readonly subordinateCyclicConfig?: string;
  /**
  * Task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_id WedataTask#task_id}
  */
  readonly taskId: string;
  /**
  * dependency_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#dependency_strategy WedataTask#dependency_strategy}
  */
  readonly dependencyStrategy?: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy;
}

export function wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructToTerraform(struct?: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_cyclic_config: cdktf.stringToTerraform(struct!.mainCyclicConfig),
    offset: cdktf.stringToTerraform(struct!.offset),
    subordinate_cyclic_config: cdktf.stringToTerraform(struct!.subordinateCyclicConfig),
    task_id: cdktf.stringToTerraform(struct!.taskId),
    dependency_strategy: wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyToTerraform(struct!.dependencyStrategy),
  }
}


export function wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_cyclic_config: {
      value: cdktf.stringToHclTerraform(struct!.mainCyclicConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subordinate_cyclic_config: {
      value: cdktf.stringToHclTerraform(struct!.subordinateCyclicConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_id: {
      value: cdktf.stringToHclTerraform(struct!.taskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_strategy: {
      value: wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyToHclTerraform(struct!.dependencyStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainCyclicConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainCyclicConfig = this._mainCyclicConfig;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._subordinateCyclicConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.subordinateCyclicConfig = this._subordinateCyclicConfig;
    }
    if (this._taskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskId = this._taskId;
    }
    if (this._dependencyStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyStrategy = this._dependencyStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainCyclicConfig = undefined;
      this._offset = undefined;
      this._subordinateCyclicConfig = undefined;
      this._taskId = undefined;
      this._dependencyStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainCyclicConfig = value.mainCyclicConfig;
      this._offset = value.offset;
      this._subordinateCyclicConfig = value.subordinateCyclicConfig;
      this._taskId = value.taskId;
      this._dependencyStrategy.internalValue = value.dependencyStrategy;
    }
  }

  // main_cyclic_config - computed: false, optional: false, required: true
  private _mainCyclicConfig?: string; 
  public get mainCyclicConfig() {
    return this.getStringAttribute('main_cyclic_config');
  }
  public set mainCyclicConfig(value: string) {
    this._mainCyclicConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainCyclicConfigInput() {
    return this._mainCyclicConfig;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // subordinate_cyclic_config - computed: true, optional: true, required: false
  private _subordinateCyclicConfig?: string; 
  public get subordinateCyclicConfig() {
    return this.getStringAttribute('subordinate_cyclic_config');
  }
  public set subordinateCyclicConfig(value: string) {
    this._subordinateCyclicConfig = value;
  }
  public resetSubordinateCyclicConfig() {
    this._subordinateCyclicConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subordinateCyclicConfigInput() {
    return this._subordinateCyclicConfig;
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

  // dependency_strategy - computed: false, optional: true, required: false
  private _dependencyStrategy = new WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategyOutputReference(this, "dependency_strategy");
  public get dependencyStrategy() {
    return this._dependencyStrategy;
  }
  public putDependencyStrategy(value: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListDependencyStrategy) {
    this._dependencyStrategy.internalValue = value;
  }
  public resetDependencyStrategy() {
    this._dependencyStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyStrategyInput() {
    return this._dependencyStrategy.internalValue;
  }
}

export class WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructList extends cdktf.ComplexList {
  public internalValue? : WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructOutputReference {
    return new WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataTaskTaskSchedulerConfiguration {
  /**
  * Rerun & backfill configuration, defaults to ALL; ALL: can rerun or backfill after success or failure; FAILURE: cannot rerun or backfill after success, can rerun or backfill after failure; NONE: cannot rerun or backfill after success or failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#allow_redo_type WedataTask#allow_redo_type}
  */
  readonly allowRedoType?: string;
  /**
  * Calendar scheduling calendar ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#calendar_id WedataTask#calendar_id}
  */
  readonly calendarId?: string;
  /**
  * Calendar scheduling: Values are 0 and 1, 1 for enabled, 0 for disabled, defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#calendar_open WedataTask#calendar_open}
  */
  readonly calendarOpen?: string;
  /**
  * Cron expression, defaults to 0 0 0 * * `?` *.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#crontab_expression WedataTask#crontab_expression}
  */
  readonly crontabExpression?: string;
  /**
  * Cycle type: Defaults to DAY_CYCLE.
  * 
  * Supported types are
  * 
  * * ONEOFF_CYCLE: One-time
  * * YEAR_CYCLE: Yearly
  * * MONTH_CYCLE: Monthly
  * * WEEK_CYCLE: Weekly
  * * DAY_CYCLE: Daily
  * * HOUR_CYCLE: Hourly
  * * MINUTE_CYCLE: Minutely
  * * CRONTAB_CYCLE: Crontab expression type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#cycle_type WedataTask#cycle_type}
  */
  readonly cycleType?: string;
  /**
  * End date, defaults to 2099-12-31 23:59:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#end_time WedataTask#end_time}
  */
  readonly endTime?: string;
  /**
  * Execution time right-closed interval, default 23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#execution_end_time WedataTask#execution_end_time}
  */
  readonly executionEndTime?: string;
  /**
  * Execution time left-closed interval, default 00:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#execution_start_time WedataTask#execution_start_time}
  */
  readonly executionStartTime?: string;
  /**
  * Timeout handling strategy - running time timeout (unit: minutes) defaults to -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#execution_ttl WedataTask#execution_ttl}
  */
  readonly executionTtl?: string;
  /**
  * **Instance generation strategy**
  * * T_PLUS_0: T+0 generation, default strategy
  * * T_PLUS_1: T+1 generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#init_strategy WedataTask#init_strategy}
  */
  readonly initStrategy?: string;
  /**
  * Retry strategy - maximum number of attempts, default: 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#max_retry_attempts WedataTask#max_retry_attempts}
  */
  readonly maxRetryAttempts?: string;
  /**
  * Retry strategy - retry waiting time, unit: minutes: default: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#retry_wait WedataTask#retry_wait}
  */
  readonly retryWait?: string;
  /**
  * Task scheduling priority: 4 for high, 5 for medium, 6 for low, default: 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#run_priority WedataTask#run_priority}
  */
  readonly runPriority?: string;
  /**
  * Scheduling type: 0 Normal scheduling 1 Empty run scheduling, defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#schedule_run_type WedataTask#schedule_run_type}
  */
  readonly scheduleRunType?: string;
  /**
  * Time zone, defaults to UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#schedule_time_zone WedataTask#schedule_time_zone}
  */
  readonly scheduleTimeZone?: string;
  /**
  * Self-dependency, default value serial, values: parallel, serial, orderly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#self_depend WedataTask#self_depend}
  */
  readonly selfDepend?: string;
  /**
  * Effective date, defaults to 00:00:00 of current date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#start_time WedataTask#start_time}
  */
  readonly startTime?: string;
  /**
  * Timeout handling strategy - total waiting time timeout (unit: minutes) defaults to -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#wait_execution_total_ttl WedataTask#wait_execution_total_ttl}
  */
  readonly waitExecutionTotalTtl?: string;
  /**
  * event_listener_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#event_listener_list WedataTask#event_listener_list}
  */
  readonly eventListenerList?: WedataTaskTaskSchedulerConfigurationEventListenerListStruct[] | cdktf.IResolvable;
  /**
  * param_task_in_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_task_in_list WedataTask#param_task_in_list}
  */
  readonly paramTaskInList?: WedataTaskTaskSchedulerConfigurationParamTaskInListStruct[] | cdktf.IResolvable;
  /**
  * param_task_out_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#param_task_out_list WedataTask#param_task_out_list}
  */
  readonly paramTaskOutList?: WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct[] | cdktf.IResolvable;
  /**
  * task_output_registry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#task_output_registry_list WedataTask#task_output_registry_list}
  */
  readonly taskOutputRegistryList?: WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct[] | cdktf.IResolvable;
  /**
  * upstream_dependency_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#upstream_dependency_config_list WedataTask#upstream_dependency_config_list}
  */
  readonly upstreamDependencyConfigList?: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct[] | cdktf.IResolvable;
}

export function wedataTaskTaskSchedulerConfigurationToTerraform(struct?: WedataTaskTaskSchedulerConfigurationOutputReference | WedataTaskTaskSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_redo_type: cdktf.stringToTerraform(struct!.allowRedoType),
    calendar_id: cdktf.stringToTerraform(struct!.calendarId),
    calendar_open: cdktf.stringToTerraform(struct!.calendarOpen),
    crontab_expression: cdktf.stringToTerraform(struct!.crontabExpression),
    cycle_type: cdktf.stringToTerraform(struct!.cycleType),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    execution_end_time: cdktf.stringToTerraform(struct!.executionEndTime),
    execution_start_time: cdktf.stringToTerraform(struct!.executionStartTime),
    execution_ttl: cdktf.stringToTerraform(struct!.executionTtl),
    init_strategy: cdktf.stringToTerraform(struct!.initStrategy),
    max_retry_attempts: cdktf.stringToTerraform(struct!.maxRetryAttempts),
    retry_wait: cdktf.stringToTerraform(struct!.retryWait),
    run_priority: cdktf.stringToTerraform(struct!.runPriority),
    schedule_run_type: cdktf.stringToTerraform(struct!.scheduleRunType),
    schedule_time_zone: cdktf.stringToTerraform(struct!.scheduleTimeZone),
    self_depend: cdktf.stringToTerraform(struct!.selfDepend),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    wait_execution_total_ttl: cdktf.stringToTerraform(struct!.waitExecutionTotalTtl),
    event_listener_list: cdktf.listMapper(wedataTaskTaskSchedulerConfigurationEventListenerListStructToTerraform, true)(struct!.eventListenerList),
    param_task_in_list: cdktf.listMapper(wedataTaskTaskSchedulerConfigurationParamTaskInListStructToTerraform, true)(struct!.paramTaskInList),
    param_task_out_list: cdktf.listMapper(wedataTaskTaskSchedulerConfigurationParamTaskOutListStructToTerraform, true)(struct!.paramTaskOutList),
    task_output_registry_list: cdktf.listMapper(wedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructToTerraform, true)(struct!.taskOutputRegistryList),
    upstream_dependency_config_list: cdktf.listMapper(wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructToTerraform, true)(struct!.upstreamDependencyConfigList),
  }
}


export function wedataTaskTaskSchedulerConfigurationToHclTerraform(struct?: WedataTaskTaskSchedulerConfigurationOutputReference | WedataTaskTaskSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_redo_type: {
      value: cdktf.stringToHclTerraform(struct!.allowRedoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calendar_id: {
      value: cdktf.stringToHclTerraform(struct!.calendarId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calendar_open: {
      value: cdktf.stringToHclTerraform(struct!.calendarOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crontab_expression: {
      value: cdktf.stringToHclTerraform(struct!.crontabExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cycle_type: {
      value: cdktf.stringToHclTerraform(struct!.cycleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_end_time: {
      value: cdktf.stringToHclTerraform(struct!.executionEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_start_time: {
      value: cdktf.stringToHclTerraform(struct!.executionStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_ttl: {
      value: cdktf.stringToHclTerraform(struct!.executionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_strategy: {
      value: cdktf.stringToHclTerraform(struct!.initStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retry_attempts: {
      value: cdktf.stringToHclTerraform(struct!.maxRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_wait: {
      value: cdktf.stringToHclTerraform(struct!.retryWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_priority: {
      value: cdktf.stringToHclTerraform(struct!.runPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_run_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleRunType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.scheduleTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_depend: {
      value: cdktf.stringToHclTerraform(struct!.selfDepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_execution_total_ttl: {
      value: cdktf.stringToHclTerraform(struct!.waitExecutionTotalTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_listener_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskSchedulerConfigurationEventListenerListStructToHclTerraform, true)(struct!.eventListenerList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataTaskTaskSchedulerConfigurationEventListenerListStructList",
    },
    param_task_in_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskSchedulerConfigurationParamTaskInListStructToHclTerraform, true)(struct!.paramTaskInList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataTaskTaskSchedulerConfigurationParamTaskInListStructList",
    },
    param_task_out_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskSchedulerConfigurationParamTaskOutListStructToHclTerraform, true)(struct!.paramTaskOutList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataTaskTaskSchedulerConfigurationParamTaskOutListStructList",
    },
    task_output_registry_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructToHclTerraform, true)(struct!.taskOutputRegistryList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructList",
    },
    upstream_dependency_config_list: {
      value: cdktf.listMapperHcl(wedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructToHclTerraform, true)(struct!.upstreamDependencyConfigList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskTaskSchedulerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataTaskTaskSchedulerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRedoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRedoType = this._allowRedoType;
    }
    if (this._calendarId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarId = this._calendarId;
    }
    if (this._calendarOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarOpen = this._calendarOpen;
    }
    if (this._crontabExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.crontabExpression = this._crontabExpression;
    }
    if (this._cycleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleType = this._cycleType;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._executionEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionEndTime = this._executionEndTime;
    }
    if (this._executionStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStartTime = this._executionStartTime;
    }
    if (this._executionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTtl = this._executionTtl;
    }
    if (this._initStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.initStrategy = this._initStrategy;
    }
    if (this._maxRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryAttempts = this._maxRetryAttempts;
    }
    if (this._retryWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryWait = this._retryWait;
    }
    if (this._runPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.runPriority = this._runPriority;
    }
    if (this._scheduleRunType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleRunType = this._scheduleRunType;
    }
    if (this._scheduleTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTimeZone = this._scheduleTimeZone;
    }
    if (this._selfDepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfDepend = this._selfDepend;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._waitExecutionTotalTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitExecutionTotalTtl = this._waitExecutionTotalTtl;
    }
    if (this._eventListenerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventListenerList = this._eventListenerList?.internalValue;
    }
    if (this._paramTaskInList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramTaskInList = this._paramTaskInList?.internalValue;
    }
    if (this._paramTaskOutList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramTaskOutList = this._paramTaskOutList?.internalValue;
    }
    if (this._taskOutputRegistryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskOutputRegistryList = this._taskOutputRegistryList?.internalValue;
    }
    if (this._upstreamDependencyConfigList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamDependencyConfigList = this._upstreamDependencyConfigList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskTaskSchedulerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRedoType = undefined;
      this._calendarId = undefined;
      this._calendarOpen = undefined;
      this._crontabExpression = undefined;
      this._cycleType = undefined;
      this._endTime = undefined;
      this._executionEndTime = undefined;
      this._executionStartTime = undefined;
      this._executionTtl = undefined;
      this._initStrategy = undefined;
      this._maxRetryAttempts = undefined;
      this._retryWait = undefined;
      this._runPriority = undefined;
      this._scheduleRunType = undefined;
      this._scheduleTimeZone = undefined;
      this._selfDepend = undefined;
      this._startTime = undefined;
      this._waitExecutionTotalTtl = undefined;
      this._eventListenerList.internalValue = undefined;
      this._paramTaskInList.internalValue = undefined;
      this._paramTaskOutList.internalValue = undefined;
      this._taskOutputRegistryList.internalValue = undefined;
      this._upstreamDependencyConfigList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRedoType = value.allowRedoType;
      this._calendarId = value.calendarId;
      this._calendarOpen = value.calendarOpen;
      this._crontabExpression = value.crontabExpression;
      this._cycleType = value.cycleType;
      this._endTime = value.endTime;
      this._executionEndTime = value.executionEndTime;
      this._executionStartTime = value.executionStartTime;
      this._executionTtl = value.executionTtl;
      this._initStrategy = value.initStrategy;
      this._maxRetryAttempts = value.maxRetryAttempts;
      this._retryWait = value.retryWait;
      this._runPriority = value.runPriority;
      this._scheduleRunType = value.scheduleRunType;
      this._scheduleTimeZone = value.scheduleTimeZone;
      this._selfDepend = value.selfDepend;
      this._startTime = value.startTime;
      this._waitExecutionTotalTtl = value.waitExecutionTotalTtl;
      this._eventListenerList.internalValue = value.eventListenerList;
      this._paramTaskInList.internalValue = value.paramTaskInList;
      this._paramTaskOutList.internalValue = value.paramTaskOutList;
      this._taskOutputRegistryList.internalValue = value.taskOutputRegistryList;
      this._upstreamDependencyConfigList.internalValue = value.upstreamDependencyConfigList;
    }
  }

  // allow_redo_type - computed: true, optional: true, required: false
  private _allowRedoType?: string; 
  public get allowRedoType() {
    return this.getStringAttribute('allow_redo_type');
  }
  public set allowRedoType(value: string) {
    this._allowRedoType = value;
  }
  public resetAllowRedoType() {
    this._allowRedoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRedoTypeInput() {
    return this._allowRedoType;
  }

  // calendar_id - computed: true, optional: true, required: false
  private _calendarId?: string; 
  public get calendarId() {
    return this.getStringAttribute('calendar_id');
  }
  public set calendarId(value: string) {
    this._calendarId = value;
  }
  public resetCalendarId() {
    this._calendarId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarIdInput() {
    return this._calendarId;
  }

  // calendar_open - computed: true, optional: true, required: false
  private _calendarOpen?: string; 
  public get calendarOpen() {
    return this.getStringAttribute('calendar_open');
  }
  public set calendarOpen(value: string) {
    this._calendarOpen = value;
  }
  public resetCalendarOpen() {
    this._calendarOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarOpenInput() {
    return this._calendarOpen;
  }

  // crontab_expression - computed: true, optional: true, required: false
  private _crontabExpression?: string; 
  public get crontabExpression() {
    return this.getStringAttribute('crontab_expression');
  }
  public set crontabExpression(value: string) {
    this._crontabExpression = value;
  }
  public resetCrontabExpression() {
    this._crontabExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabExpressionInput() {
    return this._crontabExpression;
  }

  // cycle_type - computed: true, optional: true, required: false
  private _cycleType?: string; 
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }
  public set cycleType(value: string) {
    this._cycleType = value;
  }
  public resetCycleType() {
    this._cycleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleTypeInput() {
    return this._cycleType;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // execution_end_time - computed: true, optional: true, required: false
  private _executionEndTime?: string; 
  public get executionEndTime() {
    return this.getStringAttribute('execution_end_time');
  }
  public set executionEndTime(value: string) {
    this._executionEndTime = value;
  }
  public resetExecutionEndTime() {
    this._executionEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEndTimeInput() {
    return this._executionEndTime;
  }

  // execution_start_time - computed: true, optional: true, required: false
  private _executionStartTime?: string; 
  public get executionStartTime() {
    return this.getStringAttribute('execution_start_time');
  }
  public set executionStartTime(value: string) {
    this._executionStartTime = value;
  }
  public resetExecutionStartTime() {
    this._executionStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStartTimeInput() {
    return this._executionStartTime;
  }

  // execution_ttl - computed: true, optional: true, required: false
  private _executionTtl?: string; 
  public get executionTtl() {
    return this.getStringAttribute('execution_ttl');
  }
  public set executionTtl(value: string) {
    this._executionTtl = value;
  }
  public resetExecutionTtl() {
    this._executionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTtlInput() {
    return this._executionTtl;
  }

  // init_strategy - computed: true, optional: true, required: false
  private _initStrategy?: string; 
  public get initStrategy() {
    return this.getStringAttribute('init_strategy');
  }
  public set initStrategy(value: string) {
    this._initStrategy = value;
  }
  public resetInitStrategy() {
    this._initStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initStrategyInput() {
    return this._initStrategy;
  }

  // max_retry_attempts - computed: true, optional: true, required: false
  private _maxRetryAttempts?: string; 
  public get maxRetryAttempts() {
    return this.getStringAttribute('max_retry_attempts');
  }
  public set maxRetryAttempts(value: string) {
    this._maxRetryAttempts = value;
  }
  public resetMaxRetryAttempts() {
    this._maxRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryAttemptsInput() {
    return this._maxRetryAttempts;
  }

  // retry_wait - computed: true, optional: true, required: false
  private _retryWait?: string; 
  public get retryWait() {
    return this.getStringAttribute('retry_wait');
  }
  public set retryWait(value: string) {
    this._retryWait = value;
  }
  public resetRetryWait() {
    this._retryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitInput() {
    return this._retryWait;
  }

  // run_priority - computed: true, optional: true, required: false
  private _runPriority?: string; 
  public get runPriority() {
    return this.getStringAttribute('run_priority');
  }
  public set runPriority(value: string) {
    this._runPriority = value;
  }
  public resetRunPriority() {
    this._runPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runPriorityInput() {
    return this._runPriority;
  }

  // schedule_run_type - computed: true, optional: true, required: false
  private _scheduleRunType?: string; 
  public get scheduleRunType() {
    return this.getStringAttribute('schedule_run_type');
  }
  public set scheduleRunType(value: string) {
    this._scheduleRunType = value;
  }
  public resetScheduleRunType() {
    this._scheduleRunType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRunTypeInput() {
    return this._scheduleRunType;
  }

  // schedule_time_zone - computed: true, optional: true, required: false
  private _scheduleTimeZone?: string; 
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }
  public set scheduleTimeZone(value: string) {
    this._scheduleTimeZone = value;
  }
  public resetScheduleTimeZone() {
    this._scheduleTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeZoneInput() {
    return this._scheduleTimeZone;
  }

  // self_depend - computed: true, optional: true, required: false
  private _selfDepend?: string; 
  public get selfDepend() {
    return this.getStringAttribute('self_depend');
  }
  public set selfDepend(value: string) {
    this._selfDepend = value;
  }
  public resetSelfDepend() {
    this._selfDepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfDependInput() {
    return this._selfDepend;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // wait_execution_total_ttl - computed: true, optional: true, required: false
  private _waitExecutionTotalTtl?: string; 
  public get waitExecutionTotalTtl() {
    return this.getStringAttribute('wait_execution_total_ttl');
  }
  public set waitExecutionTotalTtl(value: string) {
    this._waitExecutionTotalTtl = value;
  }
  public resetWaitExecutionTotalTtl() {
    this._waitExecutionTotalTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitExecutionTotalTtlInput() {
    return this._waitExecutionTotalTtl;
  }

  // event_listener_list - computed: false, optional: true, required: false
  private _eventListenerList = new WedataTaskTaskSchedulerConfigurationEventListenerListStructList(this, "event_listener_list", false);
  public get eventListenerList() {
    return this._eventListenerList;
  }
  public putEventListenerList(value: WedataTaskTaskSchedulerConfigurationEventListenerListStruct[] | cdktf.IResolvable) {
    this._eventListenerList.internalValue = value;
  }
  public resetEventListenerList() {
    this._eventListenerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventListenerListInput() {
    return this._eventListenerList.internalValue;
  }

  // param_task_in_list - computed: false, optional: true, required: false
  private _paramTaskInList = new WedataTaskTaskSchedulerConfigurationParamTaskInListStructList(this, "param_task_in_list", false);
  public get paramTaskInList() {
    return this._paramTaskInList;
  }
  public putParamTaskInList(value: WedataTaskTaskSchedulerConfigurationParamTaskInListStruct[] | cdktf.IResolvable) {
    this._paramTaskInList.internalValue = value;
  }
  public resetParamTaskInList() {
    this._paramTaskInList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramTaskInListInput() {
    return this._paramTaskInList.internalValue;
  }

  // param_task_out_list - computed: false, optional: true, required: false
  private _paramTaskOutList = new WedataTaskTaskSchedulerConfigurationParamTaskOutListStructList(this, "param_task_out_list", false);
  public get paramTaskOutList() {
    return this._paramTaskOutList;
  }
  public putParamTaskOutList(value: WedataTaskTaskSchedulerConfigurationParamTaskOutListStruct[] | cdktf.IResolvable) {
    this._paramTaskOutList.internalValue = value;
  }
  public resetParamTaskOutList() {
    this._paramTaskOutList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramTaskOutListInput() {
    return this._paramTaskOutList.internalValue;
  }

  // task_output_registry_list - computed: false, optional: true, required: false
  private _taskOutputRegistryList = new WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStructList(this, "task_output_registry_list", false);
  public get taskOutputRegistryList() {
    return this._taskOutputRegistryList;
  }
  public putTaskOutputRegistryList(value: WedataTaskTaskSchedulerConfigurationTaskOutputRegistryListStruct[] | cdktf.IResolvable) {
    this._taskOutputRegistryList.internalValue = value;
  }
  public resetTaskOutputRegistryList() {
    this._taskOutputRegistryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskOutputRegistryListInput() {
    return this._taskOutputRegistryList.internalValue;
  }

  // upstream_dependency_config_list - computed: false, optional: true, required: false
  private _upstreamDependencyConfigList = new WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStructList(this, "upstream_dependency_config_list", false);
  public get upstreamDependencyConfigList() {
    return this._upstreamDependencyConfigList;
  }
  public putUpstreamDependencyConfigList(value: WedataTaskTaskSchedulerConfigurationUpstreamDependencyConfigListStruct[] | cdktf.IResolvable) {
    this._upstreamDependencyConfigList.internalValue = value;
  }
  public resetUpstreamDependencyConfigList() {
    this._upstreamDependencyConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamDependencyConfigListInput() {
    return this._upstreamDependencyConfigList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task tencentcloud_wedata_task}
*/
export class WedataTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataTask to import
  * @param importFromId The id of the existing WedataTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/wedata_task tencentcloud_wedata_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataTaskConfig
  */
  public constructor(scope: Construct, id: string, config: WedataTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._taskBaseAttribute.internalValue = config.taskBaseAttribute;
    this._taskConfiguration.internalValue = config.taskConfiguration;
    this._taskSchedulerConfiguration.internalValue = config.taskSchedulerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // task_base_attribute - computed: false, optional: false, required: true
  private _taskBaseAttribute = new WedataTaskTaskBaseAttributeOutputReference(this, "task_base_attribute");
  public get taskBaseAttribute() {
    return this._taskBaseAttribute;
  }
  public putTaskBaseAttribute(value: WedataTaskTaskBaseAttribute) {
    this._taskBaseAttribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBaseAttributeInput() {
    return this._taskBaseAttribute.internalValue;
  }

  // task_configuration - computed: false, optional: false, required: true
  private _taskConfiguration = new WedataTaskTaskConfigurationOutputReference(this, "task_configuration");
  public get taskConfiguration() {
    return this._taskConfiguration;
  }
  public putTaskConfiguration(value: WedataTaskTaskConfiguration) {
    this._taskConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskConfigurationInput() {
    return this._taskConfiguration.internalValue;
  }

  // task_scheduler_configuration - computed: false, optional: false, required: true
  private _taskSchedulerConfiguration = new WedataTaskTaskSchedulerConfigurationOutputReference(this, "task_scheduler_configuration");
  public get taskSchedulerConfiguration() {
    return this._taskSchedulerConfiguration;
  }
  public putTaskSchedulerConfiguration(value: WedataTaskTaskSchedulerConfiguration) {
    this._taskSchedulerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSchedulerConfigurationInput() {
    return this._taskSchedulerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      task_base_attribute: wedataTaskTaskBaseAttributeToTerraform(this._taskBaseAttribute.internalValue),
      task_configuration: wedataTaskTaskConfigurationToTerraform(this._taskConfiguration.internalValue),
      task_scheduler_configuration: wedataTaskTaskSchedulerConfigurationToTerraform(this._taskSchedulerConfiguration.internalValue),
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
      task_base_attribute: {
        value: wedataTaskTaskBaseAttributeToHclTerraform(this._taskBaseAttribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataTaskTaskBaseAttributeList",
      },
      task_configuration: {
        value: wedataTaskTaskConfigurationToHclTerraform(this._taskConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataTaskTaskConfigurationList",
      },
      task_scheduler_configuration: {
        value: wedataTaskTaskSchedulerConfigurationToHclTerraform(this._taskSchedulerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataTaskTaskSchedulerConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
