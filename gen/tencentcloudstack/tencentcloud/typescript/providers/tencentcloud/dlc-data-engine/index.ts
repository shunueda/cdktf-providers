// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcDataEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#auto_authorization DlcDataEngine#auto_authorization}
  */
  readonly autoAuthorization?: boolean | cdktf.IResolvable;
  /**
  * The auto-renewal status of the resource. For the postpaid mode, no renewal is required, and the value is fixed to `0`. For the prepaid mode, valid values are `0` (manual), `1` (auto), and `2` (no renewal). If this parameter is set to `0` for a key account in the prepaid mode, auto-renewal applies. It defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#auto_renew DlcDataEngine#auto_renew}
  */
  readonly autoRenew?: number;
  /**
  * Whether to automatically start the clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#auto_resume DlcDataEngine#auto_resume}
  */
  readonly autoResume: boolean | cdktf.IResolvable;
  /**
  * Whether to automatically suspend clusters. Valid values: `false` (default, no) and `true` (yes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#auto_suspend DlcDataEngine#auto_suspend}
  */
  readonly autoSuspend?: boolean | cdktf.IResolvable;
  /**
  * The cluster auto-suspension time, which defaults to 10 min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#auto_suspend_time DlcDataEngine#auto_suspend_time}
  */
  readonly autoSuspendTime?: number;
  /**
  * The VPC CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#cidr_block DlcDataEngine#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * The cluster type. Valid values: `spark_private`, `presto_private`, `presto_cu`, and `spark_cu`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#cluster_type DlcDataEngine#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Whether to enable scheduled start and suspension of clusters. Valid values: `0` (disable) and `1` (enable). Note: This policy and the auto-suspension policy are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#crontab_resume_suspend DlcDataEngine#crontab_resume_suspend}
  */
  readonly crontabResumeSuspend?: number;
  /**
  * The name of the virtual cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#data_engine_name DlcDataEngine#data_engine_name}
  */
  readonly dataEngineName: string;
  /**
  * Whether it is the default virtual cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#default_data_engine DlcDataEngine#default_data_engine}
  */
  readonly defaultDataEngine?: boolean | cdktf.IResolvable;
  /**
  * The upper limit (in CUs) for scaling of the monthly subscribed Spark job cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#elastic_limit DlcDataEngine#elastic_limit}
  */
  readonly elasticLimit?: number;
  /**
  * Whether to enable the scaling feature for a monthly subscribed Spark job cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#elastic_switch DlcDataEngine#elastic_switch}
  */
  readonly elasticSwitch?: boolean | cdktf.IResolvable;
  /**
  * The type of tasks to be executed by the engine, which defaults to SQL. Valid values: `SQL` and `BATCH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#engine_exec_type DlcDataEngine#engine_exec_type}
  */
  readonly engineExecType?: string;
  /**
  * Generation of the engine. SuperSQL means the supersql engine while Native means the standard engine. It is SuperSQL by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#engine_generation DlcDataEngine#engine_generation}
  */
  readonly engineGeneration?: string;
  /**
  * Engine network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#engine_network_id DlcDataEngine#engine_network_id}
  */
  readonly engineNetworkId?: string;
  /**
  * The engine type. Valid values: `spark` and `presto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#engine_type DlcDataEngine#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#id DlcDataEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The version name of cluster image, such as SuperSQL-P 1.1 and SuperSQL-S 3.2. If no value is passed in, a cluster is created using the latest image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#image_version_name DlcDataEngine#image_version_name}
  */
  readonly imageVersionName?: string;
  /**
  * The primary cluster, which is specified when a failover cluster is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#main_cluster_name DlcDataEngine#main_cluster_name}
  */
  readonly mainClusterName?: string;
  /**
  * The maximum number of clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#max_clusters DlcDataEngine#max_clusters}
  */
  readonly maxClusters?: number;
  /**
  * The max task concurrency of a cluster, which defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#max_concurrency DlcDataEngine#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#message DlcDataEngine#message}
  */
  readonly message?: string;
  /**
  * The minimum number of clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#min_clusters DlcDataEngine#min_clusters}
  */
  readonly minClusters?: number;
  /**
  * The billing mode. Valid values: `0` (shared engine), `1` (pay-as-you-go), and `2` (monthly subscription).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#mode DlcDataEngine#mode}
  */
  readonly mode: number;
  /**
  * The pay mode. Valid value: `0` (postpaid, default) and `1` (prepaid) (currently not available).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#pay_mode DlcDataEngine#pay_mode}
  */
  readonly payMode?: number;
  /**
  * The resource type. Valid values: `Standard_CU` (standard) and `Memory_CU` (memory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#resource_type DlcDataEngine#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Cluster size. Required when updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#size DlcDataEngine#size}
  */
  readonly size?: number;
  /**
  * The usage duration of the resource. Postpaid: Fill in 3,600 as a fixed figure; prepaid: fill in a figure equal to or bigger than 1 which means purchasing resources for one month. The maximum figure is not bigger than 120. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#time_span DlcDataEngine#time_span}
  */
  readonly timeSpan?: number;
  /**
  * The unit of the resource period. Valid values: `s` (default) for the postpaid mode and `m` for the prepaid mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#time_unit DlcDataEngine#time_unit}
  */
  readonly timeUnit?: string;
  /**
  * The task queue time limit, which defaults to 0. When the actual queue time exceeds the value set here, scale-out may be triggered. Setting this parameter to 0 represents that scale-out may be triggered immediately after a task queues up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#tolerable_queue_time DlcDataEngine#tolerable_queue_time}
  */
  readonly tolerableQueueTime?: number;
  /**
  * crontab_resume_suspend_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#crontab_resume_suspend_strategy DlcDataEngine#crontab_resume_suspend_strategy}
  */
  readonly crontabResumeSuspendStrategy?: DlcDataEngineCrontabResumeSuspendStrategy;
  /**
  * data_engine_config_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#data_engine_config_pairs DlcDataEngine#data_engine_config_pairs}
  */
  readonly dataEngineConfigPairs?: DlcDataEngineDataEngineConfigPairs[] | cdktf.IResolvable;
  /**
  * session_resource_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#session_resource_template DlcDataEngine#session_resource_template}
  */
  readonly sessionResourceTemplate?: DlcDataEngineSessionResourceTemplate;
}
export interface DlcDataEngineCrontabResumeSuspendStrategy {
  /**
  * Scheduled starting time, such as 8: 00 a.m. on Monday and Wednesday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#resume_time DlcDataEngine#resume_time}
  */
  readonly resumeTime?: string;
  /**
  * The suspension setting. Valid values: `0` (suspension after task end, default) and `1` (force suspension).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#suspend_strategy DlcDataEngine#suspend_strategy}
  */
  readonly suspendStrategy?: number;
  /**
  * Scheduled suspension time, such as 8: 00 p.m. on Monday and Wednesday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#suspend_time DlcDataEngine#suspend_time}
  */
  readonly suspendTime?: string;
}

export function dlcDataEngineCrontabResumeSuspendStrategyToTerraform(struct?: DlcDataEngineCrontabResumeSuspendStrategyOutputReference | DlcDataEngineCrontabResumeSuspendStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resume_time: cdktf.stringToTerraform(struct!.resumeTime),
    suspend_strategy: cdktf.numberToTerraform(struct!.suspendStrategy),
    suspend_time: cdktf.stringToTerraform(struct!.suspendTime),
  }
}


export function dlcDataEngineCrontabResumeSuspendStrategyToHclTerraform(struct?: DlcDataEngineCrontabResumeSuspendStrategyOutputReference | DlcDataEngineCrontabResumeSuspendStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resume_time: {
      value: cdktf.stringToHclTerraform(struct!.resumeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend_strategy: {
      value: cdktf.numberToHclTerraform(struct!.suspendStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suspend_time: {
      value: cdktf.stringToHclTerraform(struct!.suspendTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDataEngineCrontabResumeSuspendStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDataEngineCrontabResumeSuspendStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resumeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeTime = this._resumeTime;
    }
    if (this._suspendStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendStrategy = this._suspendStrategy;
    }
    if (this._suspendTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendTime = this._suspendTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDataEngineCrontabResumeSuspendStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resumeTime = undefined;
      this._suspendStrategy = undefined;
      this._suspendTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resumeTime = value.resumeTime;
      this._suspendStrategy = value.suspendStrategy;
      this._suspendTime = value.suspendTime;
    }
  }

  // resume_time - computed: false, optional: true, required: false
  private _resumeTime?: string; 
  public get resumeTime() {
    return this.getStringAttribute('resume_time');
  }
  public set resumeTime(value: string) {
    this._resumeTime = value;
  }
  public resetResumeTime() {
    this._resumeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeTimeInput() {
    return this._resumeTime;
  }

  // suspend_strategy - computed: false, optional: true, required: false
  private _suspendStrategy?: number; 
  public get suspendStrategy() {
    return this.getNumberAttribute('suspend_strategy');
  }
  public set suspendStrategy(value: number) {
    this._suspendStrategy = value;
  }
  public resetSuspendStrategy() {
    this._suspendStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendStrategyInput() {
    return this._suspendStrategy;
  }

  // suspend_time - computed: false, optional: true, required: false
  private _suspendTime?: string; 
  public get suspendTime() {
    return this.getStringAttribute('suspend_time');
  }
  public set suspendTime(value: string) {
    this._suspendTime = value;
  }
  public resetSuspendTime() {
    this._suspendTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTimeInput() {
    return this._suspendTime;
  }
}
export interface DlcDataEngineDataEngineConfigPairs {
  /**
  * Configuration items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#config_item DlcDataEngine#config_item}
  */
  readonly configItem: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#config_value DlcDataEngine#config_value}
  */
  readonly configValue: string;
}

export function dlcDataEngineDataEngineConfigPairsToTerraform(struct?: DlcDataEngineDataEngineConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dlcDataEngineDataEngineConfigPairsToHclTerraform(struct?: DlcDataEngineDataEngineConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_item: {
      value: cdktf.stringToHclTerraform(struct!.configItem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_value: {
      value: cdktf.stringToHclTerraform(struct!.configValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDataEngineDataEngineConfigPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcDataEngineDataEngineConfigPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItem = this._configItem;
    }
    if (this._configValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValue = this._configValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDataEngineDataEngineConfigPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configItem = undefined;
      this._configValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configItem = value.configItem;
      this._configValue = value.configValue;
    }
  }

  // config_item - computed: false, optional: false, required: true
  private _configItem?: string; 
  public get configItem() {
    return this.getStringAttribute('config_item');
  }
  public set configItem(value: string) {
    this._configItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemInput() {
    return this._configItem;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }
}

export class DlcDataEngineDataEngineConfigPairsList extends cdktf.ComplexList {
  public internalValue? : DlcDataEngineDataEngineConfigPairs[] | cdktf.IResolvable

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
  public get(index: number): DlcDataEngineDataEngineConfigPairsOutputReference {
    return new DlcDataEngineDataEngineConfigPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcDataEngineSessionResourceTemplateRunningTimeParameters {
  /**
  * Configuration items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#config_item DlcDataEngine#config_item}
  */
  readonly configItem: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#config_value DlcDataEngine#config_value}
  */
  readonly configValue: string;
}

export function dlcDataEngineSessionResourceTemplateRunningTimeParametersToTerraform(struct?: DlcDataEngineSessionResourceTemplateRunningTimeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dlcDataEngineSessionResourceTemplateRunningTimeParametersToHclTerraform(struct?: DlcDataEngineSessionResourceTemplateRunningTimeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_item: {
      value: cdktf.stringToHclTerraform(struct!.configItem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_value: {
      value: cdktf.stringToHclTerraform(struct!.configValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDataEngineSessionResourceTemplateRunningTimeParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcDataEngineSessionResourceTemplateRunningTimeParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItem = this._configItem;
    }
    if (this._configValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValue = this._configValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDataEngineSessionResourceTemplateRunningTimeParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configItem = undefined;
      this._configValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configItem = value.configItem;
      this._configValue = value.configValue;
    }
  }

  // config_item - computed: false, optional: false, required: true
  private _configItem?: string; 
  public get configItem() {
    return this.getStringAttribute('config_item');
  }
  public set configItem(value: string) {
    this._configItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemInput() {
    return this._configItem;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }
}

export class DlcDataEngineSessionResourceTemplateRunningTimeParametersList extends cdktf.ComplexList {
  public internalValue? : DlcDataEngineSessionResourceTemplateRunningTimeParameters[] | cdktf.IResolvable

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
  public get(index: number): DlcDataEngineSessionResourceTemplateRunningTimeParametersOutputReference {
    return new DlcDataEngineSessionResourceTemplateRunningTimeParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcDataEngineSessionResourceTemplate {
  /**
  * The driver size. Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`. Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#driver_size DlcDataEngine#driver_size}
  */
  readonly driverSize?: string;
  /**
  * The maximum executor count (in dynamic mode). The minimum value is 1 and the maximum value is less than the cluster specification. If you set `ExecutorMaxNumbers` to a value smaller than that of `ExecutorNums`, the value of `ExecutorMaxNumbers` is automatically changed to that of `ExecutorNums`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#executor_max_numbers DlcDataEngine#executor_max_numbers}
  */
  readonly executorMaxNumbers?: number;
  /**
  * The executor count. The minimum value is 1 and the maximum value is less than the cluster specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#executor_nums DlcDataEngine#executor_nums}
  */
  readonly executorNums?: number;
  /**
  * The executor size. Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`. Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#executor_size DlcDataEngine#executor_size}
  */
  readonly executorSize?: string;
  /**
  * running_time_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#running_time_parameters DlcDataEngine#running_time_parameters}
  */
  readonly runningTimeParameters?: DlcDataEngineSessionResourceTemplateRunningTimeParameters[] | cdktf.IResolvable;
}

export function dlcDataEngineSessionResourceTemplateToTerraform(struct?: DlcDataEngineSessionResourceTemplateOutputReference | DlcDataEngineSessionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_size: cdktf.stringToTerraform(struct!.driverSize),
    executor_max_numbers: cdktf.numberToTerraform(struct!.executorMaxNumbers),
    executor_nums: cdktf.numberToTerraform(struct!.executorNums),
    executor_size: cdktf.stringToTerraform(struct!.executorSize),
    running_time_parameters: cdktf.listMapper(dlcDataEngineSessionResourceTemplateRunningTimeParametersToTerraform, true)(struct!.runningTimeParameters),
  }
}


export function dlcDataEngineSessionResourceTemplateToHclTerraform(struct?: DlcDataEngineSessionResourceTemplateOutputReference | DlcDataEngineSessionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver_size: {
      value: cdktf.stringToHclTerraform(struct!.driverSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_max_numbers: {
      value: cdktf.numberToHclTerraform(struct!.executorMaxNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    executor_nums: {
      value: cdktf.numberToHclTerraform(struct!.executorNums),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    executor_size: {
      value: cdktf.stringToHclTerraform(struct!.executorSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_time_parameters: {
      value: cdktf.listMapperHcl(dlcDataEngineSessionResourceTemplateRunningTimeParametersToHclTerraform, true)(struct!.runningTimeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDataEngineSessionResourceTemplateRunningTimeParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDataEngineSessionResourceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDataEngineSessionResourceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverSize = this._driverSize;
    }
    if (this._executorMaxNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorMaxNumbers = this._executorMaxNumbers;
    }
    if (this._executorNums !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorNums = this._executorNums;
    }
    if (this._executorSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorSize = this._executorSize;
    }
    if (this._runningTimeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningTimeParameters = this._runningTimeParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDataEngineSessionResourceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverSize = undefined;
      this._executorMaxNumbers = undefined;
      this._executorNums = undefined;
      this._executorSize = undefined;
      this._runningTimeParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverSize = value.driverSize;
      this._executorMaxNumbers = value.executorMaxNumbers;
      this._executorNums = value.executorNums;
      this._executorSize = value.executorSize;
      this._runningTimeParameters.internalValue = value.runningTimeParameters;
    }
  }

  // driver_size - computed: false, optional: true, required: false
  private _driverSize?: string; 
  public get driverSize() {
    return this.getStringAttribute('driver_size');
  }
  public set driverSize(value: string) {
    this._driverSize = value;
  }
  public resetDriverSize() {
    this._driverSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverSizeInput() {
    return this._driverSize;
  }

  // executor_max_numbers - computed: false, optional: true, required: false
  private _executorMaxNumbers?: number; 
  public get executorMaxNumbers() {
    return this.getNumberAttribute('executor_max_numbers');
  }
  public set executorMaxNumbers(value: number) {
    this._executorMaxNumbers = value;
  }
  public resetExecutorMaxNumbers() {
    this._executorMaxNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorMaxNumbersInput() {
    return this._executorMaxNumbers;
  }

  // executor_nums - computed: false, optional: true, required: false
  private _executorNums?: number; 
  public get executorNums() {
    return this.getNumberAttribute('executor_nums');
  }
  public set executorNums(value: number) {
    this._executorNums = value;
  }
  public resetExecutorNums() {
    this._executorNums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorNumsInput() {
    return this._executorNums;
  }

  // executor_size - computed: false, optional: true, required: false
  private _executorSize?: string; 
  public get executorSize() {
    return this.getStringAttribute('executor_size');
  }
  public set executorSize(value: string) {
    this._executorSize = value;
  }
  public resetExecutorSize() {
    this._executorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorSizeInput() {
    return this._executorSize;
  }

  // running_time_parameters - computed: false, optional: true, required: false
  private _runningTimeParameters = new DlcDataEngineSessionResourceTemplateRunningTimeParametersList(this, "running_time_parameters", false);
  public get runningTimeParameters() {
    return this._runningTimeParameters;
  }
  public putRunningTimeParameters(value: DlcDataEngineSessionResourceTemplateRunningTimeParameters[] | cdktf.IResolvable) {
    this._runningTimeParameters.internalValue = value;
  }
  public resetRunningTimeParameters() {
    this._runningTimeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningTimeParametersInput() {
    return this._runningTimeParameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine tencentcloud_dlc_data_engine}
*/
export class DlcDataEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_data_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcDataEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcDataEngine to import
  * @param importFromId The id of the existing DlcDataEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcDataEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_data_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_data_engine tencentcloud_dlc_data_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcDataEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DlcDataEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_data_engine',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAuthorization = config.autoAuthorization;
    this._autoRenew = config.autoRenew;
    this._autoResume = config.autoResume;
    this._autoSuspend = config.autoSuspend;
    this._autoSuspendTime = config.autoSuspendTime;
    this._cidrBlock = config.cidrBlock;
    this._clusterType = config.clusterType;
    this._crontabResumeSuspend = config.crontabResumeSuspend;
    this._dataEngineName = config.dataEngineName;
    this._defaultDataEngine = config.defaultDataEngine;
    this._elasticLimit = config.elasticLimit;
    this._elasticSwitch = config.elasticSwitch;
    this._engineExecType = config.engineExecType;
    this._engineGeneration = config.engineGeneration;
    this._engineNetworkId = config.engineNetworkId;
    this._engineType = config.engineType;
    this._id = config.id;
    this._imageVersionName = config.imageVersionName;
    this._mainClusterName = config.mainClusterName;
    this._maxClusters = config.maxClusters;
    this._maxConcurrency = config.maxConcurrency;
    this._message = config.message;
    this._minClusters = config.minClusters;
    this._mode = config.mode;
    this._payMode = config.payMode;
    this._resourceType = config.resourceType;
    this._size = config.size;
    this._timeSpan = config.timeSpan;
    this._timeUnit = config.timeUnit;
    this._tolerableQueueTime = config.tolerableQueueTime;
    this._crontabResumeSuspendStrategy.internalValue = config.crontabResumeSuspendStrategy;
    this._dataEngineConfigPairs.internalValue = config.dataEngineConfigPairs;
    this._sessionResourceTemplate.internalValue = config.sessionResourceTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_authorization - computed: true, optional: true, required: false
  private _autoAuthorization?: boolean | cdktf.IResolvable; 
  public get autoAuthorization() {
    return this.getBooleanAttribute('auto_authorization');
  }
  public set autoAuthorization(value: boolean | cdktf.IResolvable) {
    this._autoAuthorization = value;
  }
  public resetAutoAuthorization() {
    this._autoAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAuthorizationInput() {
    return this._autoAuthorization;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: number; 
  public get autoRenew() {
    return this.getNumberAttribute('auto_renew');
  }
  public set autoRenew(value: number) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_resume - computed: false, optional: false, required: true
  private _autoResume?: boolean | cdktf.IResolvable; 
  public get autoResume() {
    return this.getBooleanAttribute('auto_resume');
  }
  public set autoResume(value: boolean | cdktf.IResolvable) {
    this._autoResume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResumeInput() {
    return this._autoResume;
  }

  // auto_suspend - computed: false, optional: true, required: false
  private _autoSuspend?: boolean | cdktf.IResolvable; 
  public get autoSuspend() {
    return this.getBooleanAttribute('auto_suspend');
  }
  public set autoSuspend(value: boolean | cdktf.IResolvable) {
    this._autoSuspend = value;
  }
  public resetAutoSuspend() {
    this._autoSuspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendInput() {
    return this._autoSuspend;
  }

  // auto_suspend_time - computed: true, optional: true, required: false
  private _autoSuspendTime?: number; 
  public get autoSuspendTime() {
    return this.getNumberAttribute('auto_suspend_time');
  }
  public set autoSuspendTime(value: number) {
    this._autoSuspendTime = value;
  }
  public resetAutoSuspendTime() {
    this._autoSuspendTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendTimeInput() {
    return this._autoSuspendTime;
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // crontab_resume_suspend - computed: false, optional: true, required: false
  private _crontabResumeSuspend?: number; 
  public get crontabResumeSuspend() {
    return this.getNumberAttribute('crontab_resume_suspend');
  }
  public set crontabResumeSuspend(value: number) {
    this._crontabResumeSuspend = value;
  }
  public resetCrontabResumeSuspend() {
    this._crontabResumeSuspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabResumeSuspendInput() {
    return this._crontabResumeSuspend;
  }

  // data_engine_id - computed: true, optional: false, required: false
  public get dataEngineId() {
    return this.getStringAttribute('data_engine_id');
  }

  // data_engine_name - computed: false, optional: false, required: true
  private _dataEngineName?: string; 
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }
  public set dataEngineName(value: string) {
    this._dataEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineNameInput() {
    return this._dataEngineName;
  }

  // default_data_engine - computed: false, optional: true, required: false
  private _defaultDataEngine?: boolean | cdktf.IResolvable; 
  public get defaultDataEngine() {
    return this.getBooleanAttribute('default_data_engine');
  }
  public set defaultDataEngine(value: boolean | cdktf.IResolvable) {
    this._defaultDataEngine = value;
  }
  public resetDefaultDataEngine() {
    this._defaultDataEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDataEngineInput() {
    return this._defaultDataEngine;
  }

  // elastic_limit - computed: false, optional: true, required: false
  private _elasticLimit?: number; 
  public get elasticLimit() {
    return this.getNumberAttribute('elastic_limit');
  }
  public set elasticLimit(value: number) {
    this._elasticLimit = value;
  }
  public resetElasticLimit() {
    this._elasticLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLimitInput() {
    return this._elasticLimit;
  }

  // elastic_switch - computed: false, optional: true, required: false
  private _elasticSwitch?: boolean | cdktf.IResolvable; 
  public get elasticSwitch() {
    return this.getBooleanAttribute('elastic_switch');
  }
  public set elasticSwitch(value: boolean | cdktf.IResolvable) {
    this._elasticSwitch = value;
  }
  public resetElasticSwitch() {
    this._elasticSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticSwitchInput() {
    return this._elasticSwitch;
  }

  // engine_exec_type - computed: true, optional: true, required: false
  private _engineExecType?: string; 
  public get engineExecType() {
    return this.getStringAttribute('engine_exec_type');
  }
  public set engineExecType(value: string) {
    this._engineExecType = value;
  }
  public resetEngineExecType() {
    this._engineExecType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineExecTypeInput() {
    return this._engineExecType;
  }

  // engine_generation - computed: true, optional: true, required: false
  private _engineGeneration?: string; 
  public get engineGeneration() {
    return this.getStringAttribute('engine_generation');
  }
  public set engineGeneration(value: string) {
    this._engineGeneration = value;
  }
  public resetEngineGeneration() {
    this._engineGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineGenerationInput() {
    return this._engineGeneration;
  }

  // engine_network_id - computed: true, optional: true, required: false
  private _engineNetworkId?: string; 
  public get engineNetworkId() {
    return this.getStringAttribute('engine_network_id');
  }
  public set engineNetworkId(value: string) {
    this._engineNetworkId = value;
  }
  public resetEngineNetworkId() {
    this._engineNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNetworkIdInput() {
    return this._engineNetworkId;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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

  // image_version_name - computed: true, optional: true, required: false
  private _imageVersionName?: string; 
  public get imageVersionName() {
    return this.getStringAttribute('image_version_name');
  }
  public set imageVersionName(value: string) {
    this._imageVersionName = value;
  }
  public resetImageVersionName() {
    this._imageVersionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNameInput() {
    return this._imageVersionName;
  }

  // main_cluster_name - computed: false, optional: true, required: false
  private _mainClusterName?: string; 
  public get mainClusterName() {
    return this.getStringAttribute('main_cluster_name');
  }
  public set mainClusterName(value: string) {
    this._mainClusterName = value;
  }
  public resetMainClusterName() {
    this._mainClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClusterNameInput() {
    return this._mainClusterName;
  }

  // max_clusters - computed: false, optional: true, required: false
  private _maxClusters?: number; 
  public get maxClusters() {
    return this.getNumberAttribute('max_clusters');
  }
  public set maxClusters(value: number) {
    this._maxClusters = value;
  }
  public resetMaxClusters() {
    this._maxClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClustersInput() {
    return this._maxClusters;
  }

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // min_clusters - computed: false, optional: true, required: false
  private _minClusters?: number; 
  public get minClusters() {
    return this.getNumberAttribute('min_clusters');
  }
  public set minClusters(value: number) {
    this._minClusters = value;
  }
  public resetMinClusters() {
    this._minClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClustersInput() {
    return this._minClusters;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // pay_mode - computed: true, optional: true, required: false
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // tolerable_queue_time - computed: false, optional: true, required: false
  private _tolerableQueueTime?: number; 
  public get tolerableQueueTime() {
    return this.getNumberAttribute('tolerable_queue_time');
  }
  public set tolerableQueueTime(value: number) {
    this._tolerableQueueTime = value;
  }
  public resetTolerableQueueTime() {
    this._tolerableQueueTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerableQueueTimeInput() {
    return this._tolerableQueueTime;
  }

  // crontab_resume_suspend_strategy - computed: false, optional: true, required: false
  private _crontabResumeSuspendStrategy = new DlcDataEngineCrontabResumeSuspendStrategyOutputReference(this, "crontab_resume_suspend_strategy");
  public get crontabResumeSuspendStrategy() {
    return this._crontabResumeSuspendStrategy;
  }
  public putCrontabResumeSuspendStrategy(value: DlcDataEngineCrontabResumeSuspendStrategy) {
    this._crontabResumeSuspendStrategy.internalValue = value;
  }
  public resetCrontabResumeSuspendStrategy() {
    this._crontabResumeSuspendStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabResumeSuspendStrategyInput() {
    return this._crontabResumeSuspendStrategy.internalValue;
  }

  // data_engine_config_pairs - computed: false, optional: true, required: false
  private _dataEngineConfigPairs = new DlcDataEngineDataEngineConfigPairsList(this, "data_engine_config_pairs", false);
  public get dataEngineConfigPairs() {
    return this._dataEngineConfigPairs;
  }
  public putDataEngineConfigPairs(value: DlcDataEngineDataEngineConfigPairs[] | cdktf.IResolvable) {
    this._dataEngineConfigPairs.internalValue = value;
  }
  public resetDataEngineConfigPairs() {
    this._dataEngineConfigPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineConfigPairsInput() {
    return this._dataEngineConfigPairs.internalValue;
  }

  // session_resource_template - computed: false, optional: true, required: false
  private _sessionResourceTemplate = new DlcDataEngineSessionResourceTemplateOutputReference(this, "session_resource_template");
  public get sessionResourceTemplate() {
    return this._sessionResourceTemplate;
  }
  public putSessionResourceTemplate(value: DlcDataEngineSessionResourceTemplate) {
    this._sessionResourceTemplate.internalValue = value;
  }
  public resetSessionResourceTemplate() {
    this._sessionResourceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionResourceTemplateInput() {
    return this._sessionResourceTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_authorization: cdktf.booleanToTerraform(this._autoAuthorization),
      auto_renew: cdktf.numberToTerraform(this._autoRenew),
      auto_resume: cdktf.booleanToTerraform(this._autoResume),
      auto_suspend: cdktf.booleanToTerraform(this._autoSuspend),
      auto_suspend_time: cdktf.numberToTerraform(this._autoSuspendTime),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      crontab_resume_suspend: cdktf.numberToTerraform(this._crontabResumeSuspend),
      data_engine_name: cdktf.stringToTerraform(this._dataEngineName),
      default_data_engine: cdktf.booleanToTerraform(this._defaultDataEngine),
      elastic_limit: cdktf.numberToTerraform(this._elasticLimit),
      elastic_switch: cdktf.booleanToTerraform(this._elasticSwitch),
      engine_exec_type: cdktf.stringToTerraform(this._engineExecType),
      engine_generation: cdktf.stringToTerraform(this._engineGeneration),
      engine_network_id: cdktf.stringToTerraform(this._engineNetworkId),
      engine_type: cdktf.stringToTerraform(this._engineType),
      id: cdktf.stringToTerraform(this._id),
      image_version_name: cdktf.stringToTerraform(this._imageVersionName),
      main_cluster_name: cdktf.stringToTerraform(this._mainClusterName),
      max_clusters: cdktf.numberToTerraform(this._maxClusters),
      max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
      message: cdktf.stringToTerraform(this._message),
      min_clusters: cdktf.numberToTerraform(this._minClusters),
      mode: cdktf.numberToTerraform(this._mode),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      size: cdktf.numberToTerraform(this._size),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      tolerable_queue_time: cdktf.numberToTerraform(this._tolerableQueueTime),
      crontab_resume_suspend_strategy: dlcDataEngineCrontabResumeSuspendStrategyToTerraform(this._crontabResumeSuspendStrategy.internalValue),
      data_engine_config_pairs: cdktf.listMapper(dlcDataEngineDataEngineConfigPairsToTerraform, true)(this._dataEngineConfigPairs.internalValue),
      session_resource_template: dlcDataEngineSessionResourceTemplateToTerraform(this._sessionResourceTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_authorization: {
        value: cdktf.booleanToHclTerraform(this._autoAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew: {
        value: cdktf.numberToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_resume: {
        value: cdktf.booleanToHclTerraform(this._autoResume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_suspend: {
        value: cdktf.booleanToHclTerraform(this._autoSuspend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_suspend_time: {
        value: cdktf.numberToHclTerraform(this._autoSuspendTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crontab_resume_suspend: {
        value: cdktf.numberToHclTerraform(this._crontabResumeSuspend),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_engine_name: {
        value: cdktf.stringToHclTerraform(this._dataEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_data_engine: {
        value: cdktf.booleanToHclTerraform(this._defaultDataEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elastic_limit: {
        value: cdktf.numberToHclTerraform(this._elasticLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elastic_switch: {
        value: cdktf.booleanToHclTerraform(this._elasticSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_exec_type: {
        value: cdktf.stringToHclTerraform(this._engineExecType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_generation: {
        value: cdktf.stringToHclTerraform(this._engineGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_network_id: {
        value: cdktf.stringToHclTerraform(this._engineNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
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
      image_version_name: {
        value: cdktf.stringToHclTerraform(this._imageVersionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      main_cluster_name: {
        value: cdktf.stringToHclTerraform(this._mainClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clusters: {
        value: cdktf.numberToHclTerraform(this._maxClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_concurrency: {
        value: cdktf.numberToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_clusters: {
        value: cdktf.numberToHclTerraform(this._minClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.numberToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tolerable_queue_time: {
        value: cdktf.numberToHclTerraform(this._tolerableQueueTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crontab_resume_suspend_strategy: {
        value: dlcDataEngineCrontabResumeSuspendStrategyToHclTerraform(this._crontabResumeSuspendStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcDataEngineCrontabResumeSuspendStrategyList",
      },
      data_engine_config_pairs: {
        value: cdktf.listMapperHcl(dlcDataEngineDataEngineConfigPairsToHclTerraform, true)(this._dataEngineConfigPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcDataEngineDataEngineConfigPairsList",
      },
      session_resource_template: {
        value: dlcDataEngineSessionResourceTemplateToHclTerraform(this._sessionResourceTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcDataEngineSessionResourceTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
