// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID list to be queried, if not filled in or passed, all content will be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster#cluster_id_list DataTencentcloudTsfCluster#cluster_id_list}
  */
  readonly clusterIdList?: string[];
  /**
  * The type of cluster to be queried, if left blank or not passed, all content will be queried. C: container, V: virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster#cluster_type DataTencentcloudTsfCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Whether to disable dataset authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster#disable_program_auth_check DataTencentcloudTsfCluster#disable_program_auth_check}
  */
  readonly disableProgramAuthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster#id DataTencentcloudTsfCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster#result_output_file DataTencentcloudTsfCluster#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter by keywords for Cluster Id or name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster#search_word DataTencentcloudTsfCluster#search_word}
  */
  readonly searchWord?: string;
}
export interface DataTencentcloudTsfClusterResultContentOperationInfoAddInstance {
}

export function dataTencentcloudTsfClusterResultContentOperationInfoAddInstanceToTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfoAddInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfClusterResultContentOperationInfoAddInstanceToHclTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfoAddInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfClusterResultContentOperationInfoAddInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfClusterResultContentOperationInfoAddInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfClusterResultContentOperationInfoAddInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled_reason - computed: true, optional: false, required: false
  public get disabledReason() {
    return this.getStringAttribute('disabled_reason');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }
}

export class DataTencentcloudTsfClusterResultContentOperationInfoAddInstanceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfClusterResultContentOperationInfoAddInstanceOutputReference {
    return new DataTencentcloudTsfClusterResultContentOperationInfoAddInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfClusterResultContentOperationInfoDestroy {
}

export function dataTencentcloudTsfClusterResultContentOperationInfoDestroyToTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfoDestroy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfClusterResultContentOperationInfoDestroyToHclTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfoDestroy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfClusterResultContentOperationInfoDestroyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfClusterResultContentOperationInfoDestroy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfClusterResultContentOperationInfoDestroy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled_reason - computed: true, optional: false, required: false
  public get disabledReason() {
    return this.getStringAttribute('disabled_reason');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }
}

export class DataTencentcloudTsfClusterResultContentOperationInfoDestroyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfClusterResultContentOperationInfoDestroyOutputReference {
    return new DataTencentcloudTsfClusterResultContentOperationInfoDestroyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfClusterResultContentOperationInfoInit {
}

export function dataTencentcloudTsfClusterResultContentOperationInfoInitToTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfoInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfClusterResultContentOperationInfoInitToHclTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfoInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfClusterResultContentOperationInfoInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfClusterResultContentOperationInfoInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfClusterResultContentOperationInfoInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled_reason - computed: true, optional: false, required: false
  public get disabledReason() {
    return this.getStringAttribute('disabled_reason');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }
}

export class DataTencentcloudTsfClusterResultContentOperationInfoInitList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfClusterResultContentOperationInfoInitOutputReference {
    return new DataTencentcloudTsfClusterResultContentOperationInfoInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfClusterResultContentOperationInfo {
}

export function dataTencentcloudTsfClusterResultContentOperationInfoToTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfClusterResultContentOperationInfoToHclTerraform(struct?: DataTencentcloudTsfClusterResultContentOperationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfClusterResultContentOperationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfClusterResultContentOperationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfClusterResultContentOperationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_instance - computed: true, optional: false, required: false
  private _addInstance = new DataTencentcloudTsfClusterResultContentOperationInfoAddInstanceList(this, "add_instance", false);
  public get addInstance() {
    return this._addInstance;
  }

  // destroy - computed: true, optional: false, required: false
  private _destroy = new DataTencentcloudTsfClusterResultContentOperationInfoDestroyList(this, "destroy", false);
  public get destroy() {
    return this._destroy;
  }

  // init - computed: true, optional: false, required: false
  private _init = new DataTencentcloudTsfClusterResultContentOperationInfoInitList(this, "init", false);
  public get init() {
    return this._init;
  }
}

export class DataTencentcloudTsfClusterResultContentOperationInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfClusterResultContentOperationInfoOutputReference {
    return new DataTencentcloudTsfClusterResultContentOperationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfClusterResultContent {
}

export function dataTencentcloudTsfClusterResultContentToTerraform(struct?: DataTencentcloudTsfClusterResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfClusterResultContentToHclTerraform(struct?: DataTencentcloudTsfClusterResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfClusterResultContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfClusterResultContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfClusterResultContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_cidr - computed: true, optional: false, required: false
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }

  // cluster_desc - computed: true, optional: false, required: false
  public get clusterDesc() {
    return this.getStringAttribute('cluster_desc');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_limit_cpu - computed: true, optional: false, required: false
  public get clusterLimitCpu() {
    return this.getNumberAttribute('cluster_limit_cpu');
  }

  // cluster_limit_mem - computed: true, optional: false, required: false
  public get clusterLimitMem() {
    return this.getNumberAttribute('cluster_limit_mem');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_status - computed: true, optional: false, required: false
  public get clusterStatus() {
    return this.getStringAttribute('cluster_status');
  }

  // cluster_total_cpu - computed: true, optional: false, required: false
  public get clusterTotalCpu() {
    return this.getNumberAttribute('cluster_total_cpu');
  }

  // cluster_total_mem - computed: true, optional: false, required: false
  public get clusterTotalMem() {
    return this.getNumberAttribute('cluster_total_mem');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // cluster_used_cpu - computed: true, optional: false, required: false
  public get clusterUsedCpu() {
    return this.getNumberAttribute('cluster_used_cpu');
  }

  // cluster_used_mem - computed: true, optional: false, required: false
  public get clusterUsedMem() {
    return this.getNumberAttribute('cluster_used_mem');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_flag - computed: true, optional: false, required: false
  public get deleteFlag() {
    return this.getBooleanAttribute('delete_flag');
  }

  // delete_flag_reason - computed: true, optional: false, required: false
  public get deleteFlagReason() {
    return this.getStringAttribute('delete_flag_reason');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // normal_instance_count - computed: true, optional: false, required: false
  public get normalInstanceCount() {
    return this.getNumberAttribute('normal_instance_count');
  }

  // operation_info - computed: true, optional: false, required: false
  private _operationInfo = new DataTencentcloudTsfClusterResultContentOperationInfoList(this, "operation_info", false);
  public get operationInfo() {
    return this._operationInfo;
  }

  // run_instance_count - computed: true, optional: false, required: false
  public get runInstanceCount() {
    return this.getNumberAttribute('run_instance_count');
  }

  // run_service_instance_count - computed: true, optional: false, required: false
  public get runServiceInstanceCount() {
    return this.getNumberAttribute('run_service_instance_count');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tsf_region_id - computed: true, optional: false, required: false
  public get tsfRegionId() {
    return this.getStringAttribute('tsf_region_id');
  }

  // tsf_region_name - computed: true, optional: false, required: false
  public get tsfRegionName() {
    return this.getStringAttribute('tsf_region_name');
  }

  // tsf_zone_id - computed: true, optional: false, required: false
  public get tsfZoneId() {
    return this.getStringAttribute('tsf_zone_id');
  }

  // tsf_zone_name - computed: true, optional: false, required: false
  public get tsfZoneName() {
    return this.getStringAttribute('tsf_zone_name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudTsfClusterResultContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfClusterResultContentOutputReference {
    return new DataTencentcloudTsfClusterResultContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfClusterResult {
}

export function dataTencentcloudTsfClusterResultToTerraform(struct?: DataTencentcloudTsfClusterResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfClusterResultToHclTerraform(struct?: DataTencentcloudTsfClusterResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfClusterResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfClusterResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfClusterResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataTencentcloudTsfClusterResultContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudTsfClusterResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfClusterResultOutputReference {
    return new DataTencentcloudTsfClusterResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster tencentcloud_tsf_cluster}
*/
export class DataTencentcloudTsfCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfCluster to import
  * @param importFromId The id of the existing DataTencentcloudTsfCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tsf_cluster tencentcloud_tsf_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterIdList = config.clusterIdList;
    this._clusterType = config.clusterType;
    this._disableProgramAuthCheck = config.disableProgramAuthCheck;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id_list - computed: false, optional: true, required: false
  private _clusterIdList?: string[]; 
  public get clusterIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_id_list'));
  }
  public set clusterIdList(value: string[]) {
    this._clusterIdList = value;
  }
  public resetClusterIdList() {
    this._clusterIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdListInput() {
    return this._clusterIdList;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // disable_program_auth_check - computed: false, optional: true, required: false
  private _disableProgramAuthCheck?: boolean | cdktf.IResolvable; 
  public get disableProgramAuthCheck() {
    return this.getBooleanAttribute('disable_program_auth_check');
  }
  public set disableProgramAuthCheck(value: boolean | cdktf.IResolvable) {
    this._disableProgramAuthCheck = value;
  }
  public resetDisableProgramAuthCheck() {
    this._disableProgramAuthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProgramAuthCheckInput() {
    return this._disableProgramAuthCheck;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudTsfClusterResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // search_word - computed: false, optional: true, required: false
  private _searchWord?: string; 
  public get searchWord() {
    return this.getStringAttribute('search_word');
  }
  public set searchWord(value: string) {
    this._searchWord = value;
  }
  public resetSearchWord() {
    this._searchWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchWordInput() {
    return this._searchWord;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterIdList),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      disable_program_auth_check: cdktf.booleanToTerraform(this._disableProgramAuthCheck),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_program_auth_check: {
        value: cdktf.booleanToHclTerraform(this._disableProgramAuthCheck),
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
      search_word: {
        value: cdktf.stringToHclTerraform(this._searchWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
