// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCsKubernetesNodePoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools#cluster_id DataAlicloudCsKubernetesNodePools#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools#id DataAlicloudCsKubernetesNodePools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools#ids DataAlicloudCsKubernetesNodePools#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools#node_pool_name DataAlicloudCsKubernetesNodePools#node_pool_name}
  */
  readonly nodePoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools#output_file DataAlicloudCsKubernetesNodePools#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisks {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsDataDisksToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsDataDisksToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_format - computed: true, optional: false, required: false
  public get autoFormat() {
    return this.getStringAttribute('auto_format');
  }

  // auto_snapshot_policy_id - computed: true, optional: false, required: false
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }

  // bursting_enabled - computed: true, optional: false, required: false
  public get burstingEnabled() {
    return this.getBooleanAttribute('bursting_enabled');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // file_system - computed: true, optional: false, required: false
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // mount_target - computed: true, optional: false, required: false
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // performance_level - computed: true, optional: false, required: false
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }

  // provisioned_iops - computed: true, optional: false, required: false
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisksOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemory {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemoryToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemoryToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // numa_node - computed: true, optional: false, required: false
  public get numaNode() {
    return this.getNumberAttribute('numa_node');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemoryOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracing {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracingToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracingToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // sampling_rate_per_million - computed: true, optional: false, required: false
  public get samplingRatePerMillion() {
    return this.getStringAttribute('sampling_rate_per_million');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracingList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracingOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfiguration {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }

  // cluster_dns - computed: true, optional: false, required: false
  public get clusterDns() {
    return this.getListAttribute('cluster_dns');
  }

  // container_log_max_files - computed: true, optional: false, required: false
  public get containerLogMaxFiles() {
    return this.getStringAttribute('container_log_max_files');
  }

  // container_log_max_size - computed: true, optional: false, required: false
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }

  // container_log_max_workers - computed: true, optional: false, required: false
  public get containerLogMaxWorkers() {
    return this.getStringAttribute('container_log_max_workers');
  }

  // container_log_monitor_interval - computed: true, optional: false, required: false
  public get containerLogMonitorInterval() {
    return this.getStringAttribute('container_log_monitor_interval');
  }

  // cpu_cfs_quota - computed: true, optional: false, required: false
  public get cpuCfsQuota() {
    return this.getStringAttribute('cpu_cfs_quota');
  }

  // cpu_cfs_quota_period - computed: true, optional: false, required: false
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }

  // cpu_manager_policy - computed: true, optional: false, required: false
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }

  // event_burst - computed: true, optional: false, required: false
  public get eventBurst() {
    return this.getStringAttribute('event_burst');
  }

  // event_record_qps - computed: true, optional: false, required: false
  public get eventRecordQps() {
    return this.getStringAttribute('event_record_qps');
  }

  // eviction_hard - computed: true, optional: false, required: false
  private _evictionHard = new cdktf.StringMap(this, "eviction_hard");
  public get evictionHard() {
    return this._evictionHard;
  }

  // eviction_soft - computed: true, optional: false, required: false
  private _evictionSoft = new cdktf.StringMap(this, "eviction_soft");
  public get evictionSoft() {
    return this._evictionSoft;
  }

  // eviction_soft_grace_period - computed: true, optional: false, required: false
  private _evictionSoftGracePeriod = new cdktf.StringMap(this, "eviction_soft_grace_period");
  public get evictionSoftGracePeriod() {
    return this._evictionSoftGracePeriod;
  }

  // feature_gates - computed: true, optional: false, required: false
  private _featureGates = new cdktf.StringMap(this, "feature_gates");
  public get featureGates() {
    return this._featureGates;
  }

  // image_gc_high_threshold_percent - computed: true, optional: false, required: false
  public get imageGcHighThresholdPercent() {
    return this.getStringAttribute('image_gc_high_threshold_percent');
  }

  // image_gc_low_threshold_percent - computed: true, optional: false, required: false
  public get imageGcLowThresholdPercent() {
    return this.getStringAttribute('image_gc_low_threshold_percent');
  }

  // kube_api_burst - computed: true, optional: false, required: false
  public get kubeApiBurst() {
    return this.getStringAttribute('kube_api_burst');
  }

  // kube_api_qps - computed: true, optional: false, required: false
  public get kubeApiQps() {
    return this.getStringAttribute('kube_api_qps');
  }

  // kube_reserved - computed: true, optional: false, required: false
  private _kubeReserved = new cdktf.StringMap(this, "kube_reserved");
  public get kubeReserved() {
    return this._kubeReserved;
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getStringAttribute('max_pods');
  }

  // memory_manager_policy - computed: true, optional: false, required: false
  public get memoryManagerPolicy() {
    return this.getStringAttribute('memory_manager_policy');
  }

  // pod_pids_limit - computed: true, optional: false, required: false
  public get podPidsLimit() {
    return this.getStringAttribute('pod_pids_limit');
  }

  // read_only_port - computed: true, optional: false, required: false
  public get readOnlyPort() {
    return this.getStringAttribute('read_only_port');
  }

  // registry_burst - computed: true, optional: false, required: false
  public get registryBurst() {
    return this.getStringAttribute('registry_burst');
  }

  // registry_pull_qps - computed: true, optional: false, required: false
  public get registryPullQps() {
    return this.getStringAttribute('registry_pull_qps');
  }

  // reserved_memory - computed: true, optional: false, required: false
  private _reservedMemory = new DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationReservedMemoryList(this, "reserved_memory", false);
  public get reservedMemory() {
    return this._reservedMemory;
  }

  // serialize_image_pulls - computed: true, optional: false, required: false
  public get serializeImagePulls() {
    return this.getStringAttribute('serialize_image_pulls');
  }

  // system_reserved - computed: true, optional: false, required: false
  private _systemReserved = new cdktf.StringMap(this, "system_reserved");
  public get systemReserved() {
    return this._systemReserved;
  }

  // topology_manager_policy - computed: true, optional: false, required: false
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }

  // tracing - computed: true, optional: false, required: false
  private _tracing = new DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationTracingList(this, "tracing", false);
  public get tracing() {
    return this._tracing;
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsLabels {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsLabelsToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsLabelsToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsLabelsOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicy {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicyToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicyToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart_node - computed: true, optional: false, required: false
  public get restartNode() {
    return this.getBooleanAttribute('restart_node');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicyOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicy {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicyToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicyToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_upgrade_kubelet - computed: true, optional: false, required: false
  public get autoUpgradeKubelet() {
    return this.getBooleanAttribute('auto_upgrade_kubelet');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicyOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicy {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicyToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicyToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart_node - computed: true, optional: false, required: false
  public get restartNode() {
    return this.getBooleanAttribute('restart_node');
  }

  // vul_level - computed: true, optional: false, required: false
  public get vulLevel() {
    return this.getStringAttribute('vul_level');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicyOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsManagement {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsManagementToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_repair - computed: true, optional: false, required: false
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }

  // auto_repair_policy - computed: true, optional: false, required: false
  private _autoRepairPolicy = new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoRepairPolicyList(this, "auto_repair_policy", false);
  public get autoRepairPolicy() {
    return this._autoRepairPolicy;
  }

  // auto_upgrade - computed: true, optional: false, required: false
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }

  // auto_upgrade_policy - computed: true, optional: false, required: false
  private _autoUpgradePolicy = new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoUpgradePolicyList(this, "auto_upgrade_policy", false);
  public get autoUpgradePolicy() {
    return this._autoUpgradePolicy;
  }

  // auto_vul_fix - computed: true, optional: false, required: false
  public get autoVulFix() {
    return this.getBooleanAttribute('auto_vul_fix');
  }

  // auto_vul_fix_policy - computed: true, optional: false, required: false
  private _autoVulFixPolicy = new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementAutoVulFixPolicyList(this, "auto_vul_fix_policy", false);
  public get autoVulFixPolicy() {
    return this._autoVulFixPolicy;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }

  // surge - computed: true, optional: false, required: false
  public get surge() {
    return this.getNumberAttribute('surge');
  }

  // surge_percentage - computed: true, optional: false, required: false
  public get surgePercentage() {
    return this.getNumberAttribute('surge_percentage');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsManagementList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsManagementOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptions {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptionsToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptionsToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_pool_options_id - computed: true, optional: false, required: false
  public get privatePoolOptionsId() {
    return this.getStringAttribute('private_pool_options_id');
  }

  // private_pool_options_match_criteria - computed: true, optional: false, required: false
  public get privatePoolOptionsMatchCriteria() {
    return this.getStringAttribute('private_pool_options_match_criteria');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptionsOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfig {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfigToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfigToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eip_bandwidth - computed: true, optional: false, required: false
  public get eipBandwidth() {
    return this.getNumberAttribute('eip_bandwidth');
  }

  // eip_internet_charge_type - computed: true, optional: false, required: false
  public get eipInternetChargeType() {
    return this.getStringAttribute('eip_internet_charge_type');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // is_bond_eip - computed: true, optional: false, required: false
  public get isBondEip() {
    return this.getBooleanAttribute('is_bond_eip');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfigOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimit {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimitToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimitToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // price_limit - computed: true, optional: false, required: false
  public get priceLimit() {
    return this.getStringAttribute('price_limit');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimitOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsTaints {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsTaintsToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsTaintsToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsTaintsOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfig {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfigToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfigToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tee_enable - computed: true, optional: false, required: false
  public get teeEnable() {
    return this.getBooleanAttribute('tee_enable');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfigOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCsKubernetesNodePoolsNodepools {
}

export function dataAlicloudCsKubernetesNodePoolsNodepoolsToTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCsKubernetesNodePoolsNodepoolsToHclTerraform(struct?: DataAlicloudCsKubernetesNodePoolsNodepools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCsKubernetesNodePoolsNodepools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCsKubernetesNodePoolsNodepools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_renew - computed: true, optional: false, required: false
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }

  // auto_renew_period - computed: true, optional: false, required: false
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }

  // cis_enabled - computed: true, optional: false, required: false
  public get cisEnabled() {
    return this.getBooleanAttribute('cis_enabled');
  }

  // compensate_with_on_demand - computed: true, optional: false, required: false
  public get compensateWithOnDemand() {
    return this.getBooleanAttribute('compensate_with_on_demand');
  }

  // cpu_policy - computed: true, optional: false, required: false
  public get cpuPolicy() {
    return this.getStringAttribute('cpu_policy');
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataAlicloudCsKubernetesNodePoolsNodepoolsDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // deployment_set_id - computed: true, optional: false, required: false
  public get deploymentSetId() {
    return this.getStringAttribute('deployment_set_id');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getStringAttribute('desired_size');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // install_cloud_monitor - computed: true, optional: false, required: false
  public get installCloudMonitor() {
    return this.getBooleanAttribute('install_cloud_monitor');
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // internet_max_bandwidth_out - computed: true, optional: false, required: false
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // kubelet_configuration - computed: true, optional: false, required: false
  private _kubeletConfiguration = new DataAlicloudCsKubernetesNodePoolsNodepoolsKubeletConfigurationList(this, "kubelet_configuration", false);
  public get kubeletConfiguration() {
    return this._kubeletConfiguration;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataAlicloudCsKubernetesNodePoolsNodepoolsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // login_as_non_root - computed: true, optional: false, required: false
  public get loginAsNonRoot() {
    return this.getBooleanAttribute('login_as_non_root');
  }

  // management - computed: true, optional: false, required: false
  private _management = new DataAlicloudCsKubernetesNodePoolsNodepoolsManagementList(this, "management", false);
  public get management() {
    return this._management;
  }

  // multi_az_policy - computed: true, optional: false, required: false
  public get multiAzPolicy() {
    return this.getStringAttribute('multi_az_policy');
  }

  // node_name_mode - computed: true, optional: false, required: false
  public get nodeNameMode() {
    return this.getStringAttribute('node_name_mode');
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_pool_name - computed: true, optional: false, required: false
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }

  // on_demand_base_capacity - computed: true, optional: false, required: false
  public get onDemandBaseCapacity() {
    return this.getStringAttribute('on_demand_base_capacity');
  }

  // on_demand_percentage_above_base_capacity - computed: true, optional: false, required: false
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getStringAttribute('on_demand_percentage_above_base_capacity');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // period_unit - computed: true, optional: false, required: false
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // pre_user_data - computed: true, optional: false, required: false
  public get preUserData() {
    return this.getStringAttribute('pre_user_data');
  }

  // private_pool_options - computed: true, optional: false, required: false
  private _privatePoolOptions = new DataAlicloudCsKubernetesNodePoolsNodepoolsPrivatePoolOptionsList(this, "private_pool_options", false);
  public get privatePoolOptions() {
    return this._privatePoolOptions;
  }

  // ram_role_name - computed: true, optional: false, required: false
  public get ramRoleName() {
    return this.getStringAttribute('ram_role_name');
  }

  // rds_instances - computed: true, optional: false, required: false
  public get rdsInstances() {
    return this.getListAttribute('rds_instances');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // runtime_name - computed: true, optional: false, required: false
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // scaling_config - computed: true, optional: false, required: false
  private _scalingConfig = new DataAlicloudCsKubernetesNodePoolsNodepoolsScalingConfigList(this, "scaling_config", false);
  public get scalingConfig() {
    return this._scalingConfig;
  }

  // scaling_group_id - computed: true, optional: false, required: false
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }

  // scaling_policy - computed: true, optional: false, required: false
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // security_hardening_os - computed: true, optional: false, required: false
  public get securityHardeningOs() {
    return this.getBooleanAttribute('security_hardening_os');
  }

  // soc_enabled - computed: true, optional: false, required: false
  public get socEnabled() {
    return this.getBooleanAttribute('soc_enabled');
  }

  // spot_instance_pools - computed: true, optional: false, required: false
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }

  // spot_instance_remedy - computed: true, optional: false, required: false
  public get spotInstanceRemedy() {
    return this.getBooleanAttribute('spot_instance_remedy');
  }

  // spot_price_limit - computed: true, optional: false, required: false
  private _spotPriceLimit = new DataAlicloudCsKubernetesNodePoolsNodepoolsSpotPriceLimitList(this, "spot_price_limit", false);
  public get spotPriceLimit() {
    return this._spotPriceLimit;
  }

  // spot_strategy - computed: true, optional: false, required: false
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }

  // system_disk_bursting_enabled - computed: true, optional: false, required: false
  public get systemDiskBurstingEnabled() {
    return this.getBooleanAttribute('system_disk_bursting_enabled');
  }

  // system_disk_categories - computed: true, optional: false, required: false
  public get systemDiskCategories() {
    return this.getListAttribute('system_disk_categories');
  }

  // system_disk_category - computed: true, optional: false, required: false
  public get systemDiskCategory() {
    return this.getStringAttribute('system_disk_category');
  }

  // system_disk_encrypt_algorithm - computed: true, optional: false, required: false
  public get systemDiskEncryptAlgorithm() {
    return this.getStringAttribute('system_disk_encrypt_algorithm');
  }

  // system_disk_encrypted - computed: true, optional: false, required: false
  public get systemDiskEncrypted() {
    return this.getBooleanAttribute('system_disk_encrypted');
  }

  // system_disk_kms_key - computed: true, optional: false, required: false
  public get systemDiskKmsKey() {
    return this.getStringAttribute('system_disk_kms_key');
  }

  // system_disk_performance_level - computed: true, optional: false, required: false
  public get systemDiskPerformanceLevel() {
    return this.getStringAttribute('system_disk_performance_level');
  }

  // system_disk_provisioned_iops - computed: true, optional: false, required: false
  public get systemDiskProvisionedIops() {
    return this.getNumberAttribute('system_disk_provisioned_iops');
  }

  // system_disk_size - computed: true, optional: false, required: false
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }

  // system_disk_snapshot_policy_id - computed: true, optional: false, required: false
  public get systemDiskSnapshotPolicyId() {
    return this.getStringAttribute('system_disk_snapshot_policy_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataAlicloudCsKubernetesNodePoolsNodepoolsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }

  // tee_config - computed: true, optional: false, required: false
  private _teeConfig = new DataAlicloudCsKubernetesNodePoolsNodepoolsTeeConfigList(this, "tee_config", false);
  public get teeConfig() {
    return this._teeConfig;
  }

  // unschedulable - computed: true, optional: false, required: false
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // vswitch_ids - computed: true, optional: false, required: false
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
}

export class DataAlicloudCsKubernetesNodePoolsNodepoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCsKubernetesNodePoolsNodepoolsOutputReference {
    return new DataAlicloudCsKubernetesNodePoolsNodepoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools alicloud_cs_kubernetes_node_pools}
*/
export class DataAlicloudCsKubernetesNodePools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_kubernetes_node_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCsKubernetesNodePools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCsKubernetesNodePools to import
  * @param importFromId The id of the existing DataAlicloudCsKubernetesNodePools that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCsKubernetesNodePools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_kubernetes_node_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cs_kubernetes_node_pools alicloud_cs_kubernetes_node_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCsKubernetesNodePoolsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCsKubernetesNodePoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_kubernetes_node_pools',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._ids = config.ids;
    this._nodePoolName = config.nodePoolName;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // node_pool_name - computed: false, optional: true, required: false
  private _nodePoolName?: string; 
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }
  public set nodePoolName(value: string) {
    this._nodePoolName = value;
  }
  public resetNodePoolName() {
    this._nodePoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolNameInput() {
    return this._nodePoolName;
  }

  // nodepools - computed: true, optional: false, required: false
  private _nodepools = new DataAlicloudCsKubernetesNodePoolsNodepoolsList(this, "nodepools", false);
  public get nodepools() {
    return this._nodepools;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      node_pool_name: cdktf.stringToTerraform(this._nodePoolName),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      node_pool_name: {
        value: cdktf.stringToHclTerraform(this._nodePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
