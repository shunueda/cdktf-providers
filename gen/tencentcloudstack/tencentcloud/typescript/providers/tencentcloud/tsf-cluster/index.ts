// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR assigned to cluster containers and service IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#cluster_cidr TsfCluster#cluster_cidr}
  */
  readonly clusterCidr?: string;
  /**
  * cluster notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#cluster_desc TsfCluster#cluster_desc}
  */
  readonly clusterDesc?: string;
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#cluster_name TsfCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * cluster remark name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#cluster_remark_name TsfCluster#cluster_remark_name}
  */
  readonly clusterRemarkName?: string;
  /**
  * Cluster type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#cluster_type TsfCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * cluster version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#cluster_version TsfCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#id TsfCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * api address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#kubernete_api_server TsfCluster#kubernete_api_server}
  */
  readonly kuberneteApiServer?: string;
  /**
  * native secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#kubernete_native_secret TsfCluster#kubernete_native_secret}
  */
  readonly kuberneteNativeSecret?: string;
  /**
  * `K`:kubeconfig, `S`:service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#kubernete_native_type TsfCluster#kubernete_native_type}
  */
  readonly kuberneteNativeType?: string;
  /**
  * The maximum number of services in the cluster. The value ranges from 32 to 32768. If it is not a power of 2, the nearest power of 2 will be taken up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#max_cluster_service_num TsfCluster#max_cluster_service_num}
  */
  readonly maxClusterServiceNum?: number;
  /**
  * The maximum number of Pods on each Node in the cluster. The value ranges from 4 to 256. When the value is not a power of 2, the nearest power of 2 will be taken up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#max_node_pod_num TsfCluster#max_node_pod_num}
  */
  readonly maxNodePodNum?: number;
  /**
  * The dataset ID to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#program_id TsfCluster#program_id}
  */
  readonly programId?: string;
  /**
  * Program id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#program_id_list TsfCluster#program_id_list}
  */
  readonly programIdList?: string[];
  /**
  * Subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#subnet_id TsfCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#tags TsfCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The TSF region to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#tsf_region_id TsfCluster#tsf_region_id}
  */
  readonly tsfRegionId?: string;
  /**
  * The TSF availability zone to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#tsf_zone_id TsfCluster#tsf_zone_id}
  */
  readonly tsfZoneId?: string;
  /**
  * Vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#vpc_id TsfCluster#vpc_id}
  */
  readonly vpcId: string;
}
export interface TsfClusterOperationInfoAddInstance {
}

export function tsfClusterOperationInfoAddInstanceToTerraform(struct?: TsfClusterOperationInfoAddInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tsfClusterOperationInfoAddInstanceToHclTerraform(struct?: TsfClusterOperationInfoAddInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TsfClusterOperationInfoAddInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfClusterOperationInfoAddInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfClusterOperationInfoAddInstance | undefined) {
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

export class TsfClusterOperationInfoAddInstanceList extends cdktf.ComplexList {

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
  public get(index: number): TsfClusterOperationInfoAddInstanceOutputReference {
    return new TsfClusterOperationInfoAddInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfClusterOperationInfoDestroy {
}

export function tsfClusterOperationInfoDestroyToTerraform(struct?: TsfClusterOperationInfoDestroy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tsfClusterOperationInfoDestroyToHclTerraform(struct?: TsfClusterOperationInfoDestroy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TsfClusterOperationInfoDestroyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfClusterOperationInfoDestroy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfClusterOperationInfoDestroy | undefined) {
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

export class TsfClusterOperationInfoDestroyList extends cdktf.ComplexList {

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
  public get(index: number): TsfClusterOperationInfoDestroyOutputReference {
    return new TsfClusterOperationInfoDestroyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfClusterOperationInfoInit {
}

export function tsfClusterOperationInfoInitToTerraform(struct?: TsfClusterOperationInfoInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tsfClusterOperationInfoInitToHclTerraform(struct?: TsfClusterOperationInfoInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TsfClusterOperationInfoInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfClusterOperationInfoInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfClusterOperationInfoInit | undefined) {
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

export class TsfClusterOperationInfoInitList extends cdktf.ComplexList {

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
  public get(index: number): TsfClusterOperationInfoInitOutputReference {
    return new TsfClusterOperationInfoInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfClusterOperationInfo {
}

export function tsfClusterOperationInfoToTerraform(struct?: TsfClusterOperationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tsfClusterOperationInfoToHclTerraform(struct?: TsfClusterOperationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TsfClusterOperationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfClusterOperationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfClusterOperationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_instance - computed: true, optional: false, required: false
  private _addInstance = new TsfClusterOperationInfoAddInstanceList(this, "add_instance", false);
  public get addInstance() {
    return this._addInstance;
  }

  // destroy - computed: true, optional: false, required: false
  private _destroy = new TsfClusterOperationInfoDestroyList(this, "destroy", false);
  public get destroy() {
    return this._destroy;
  }

  // init - computed: true, optional: false, required: false
  private _init = new TsfClusterOperationInfoInitList(this, "init", false);
  public get init() {
    return this._init;
  }
}

export class TsfClusterOperationInfoList extends cdktf.ComplexList {

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
  public get(index: number): TsfClusterOperationInfoOutputReference {
    return new TsfClusterOperationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster tencentcloud_tsf_cluster}
*/
export class TsfCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfCluster to import
  * @param importFromId The id of the existing TsfCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_cluster tencentcloud_tsf_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfClusterConfig
  */
  public constructor(scope: Construct, id: string, config: TsfClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterCidr = config.clusterCidr;
    this._clusterDesc = config.clusterDesc;
    this._clusterName = config.clusterName;
    this._clusterRemarkName = config.clusterRemarkName;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._id = config.id;
    this._kuberneteApiServer = config.kuberneteApiServer;
    this._kuberneteNativeSecret = config.kuberneteNativeSecret;
    this._kuberneteNativeType = config.kuberneteNativeType;
    this._maxClusterServiceNum = config.maxClusterServiceNum;
    this._maxNodePodNum = config.maxNodePodNum;
    this._programId = config.programId;
    this._programIdList = config.programIdList;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tsfRegionId = config.tsfRegionId;
    this._tsfZoneId = config.tsfZoneId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abnormal_group_count - computed: true, optional: false, required: false
  public get abnormalGroupCount() {
    return this.getNumberAttribute('abnormal_group_count');
  }

  // cluster_cidr - computed: false, optional: true, required: false
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  public resetClusterCidr() {
    this._clusterCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // cluster_desc - computed: false, optional: true, required: false
  private _clusterDesc?: string; 
  public get clusterDesc() {
    return this.getStringAttribute('cluster_desc');
  }
  public set clusterDesc(value: string) {
    this._clusterDesc = value;
  }
  public resetClusterDesc() {
    this._clusterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDescInput() {
    return this._clusterDesc;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_limit_cpu - computed: true, optional: false, required: false
  public get clusterLimitCpu() {
    return this.getStringAttribute('cluster_limit_cpu');
  }

  // cluster_limit_mem - computed: true, optional: false, required: false
  public get clusterLimitMem() {
    return this.getStringAttribute('cluster_limit_mem');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_remark_name - computed: true, optional: true, required: false
  private _clusterRemarkName?: string; 
  public get clusterRemarkName() {
    return this.getStringAttribute('cluster_remark_name');
  }
  public set clusterRemarkName(value: string) {
    this._clusterRemarkName = value;
  }
  public resetClusterRemarkName() {
    this._clusterRemarkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRemarkNameInput() {
    return this._clusterRemarkName;
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

  // cluster_used_cpu - computed: true, optional: false, required: false
  public get clusterUsedCpu() {
    return this.getNumberAttribute('cluster_used_cpu');
  }

  // cluster_used_mem - computed: true, optional: false, required: false
  public get clusterUsedMem() {
    return this.getNumberAttribute('cluster_used_mem');
  }

  // cluster_version - computed: false, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
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

  // group_count - computed: true, optional: false, required: false
  public get groupCount() {
    return this.getNumberAttribute('group_count');
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

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // kubernete_api_server - computed: false, optional: true, required: false
  private _kuberneteApiServer?: string; 
  public get kuberneteApiServer() {
    return this.getStringAttribute('kubernete_api_server');
  }
  public set kuberneteApiServer(value: string) {
    this._kuberneteApiServer = value;
  }
  public resetKuberneteApiServer() {
    this._kuberneteApiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kuberneteApiServerInput() {
    return this._kuberneteApiServer;
  }

  // kubernete_native_secret - computed: false, optional: true, required: false
  private _kuberneteNativeSecret?: string; 
  public get kuberneteNativeSecret() {
    return this.getStringAttribute('kubernete_native_secret');
  }
  public set kuberneteNativeSecret(value: string) {
    this._kuberneteNativeSecret = value;
  }
  public resetKuberneteNativeSecret() {
    this._kuberneteNativeSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kuberneteNativeSecretInput() {
    return this._kuberneteNativeSecret;
  }

  // kubernete_native_type - computed: false, optional: true, required: false
  private _kuberneteNativeType?: string; 
  public get kuberneteNativeType() {
    return this.getStringAttribute('kubernete_native_type');
  }
  public set kuberneteNativeType(value: string) {
    this._kuberneteNativeType = value;
  }
  public resetKuberneteNativeType() {
    this._kuberneteNativeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kuberneteNativeTypeInput() {
    return this._kuberneteNativeType;
  }

  // max_cluster_service_num - computed: false, optional: true, required: false
  private _maxClusterServiceNum?: number; 
  public get maxClusterServiceNum() {
    return this.getNumberAttribute('max_cluster_service_num');
  }
  public set maxClusterServiceNum(value: number) {
    this._maxClusterServiceNum = value;
  }
  public resetMaxClusterServiceNum() {
    this._maxClusterServiceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClusterServiceNumInput() {
    return this._maxClusterServiceNum;
  }

  // max_node_pod_num - computed: false, optional: true, required: false
  private _maxNodePodNum?: number; 
  public get maxNodePodNum() {
    return this.getNumberAttribute('max_node_pod_num');
  }
  public set maxNodePodNum(value: number) {
    this._maxNodePodNum = value;
  }
  public resetMaxNodePodNum() {
    this._maxNodePodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodePodNumInput() {
    return this._maxNodePodNum;
  }

  // normal_instance_count - computed: true, optional: false, required: false
  public get normalInstanceCount() {
    return this.getNumberAttribute('normal_instance_count');
  }

  // operation_info - computed: true, optional: false, required: false
  private _operationInfo = new TsfClusterOperationInfoList(this, "operation_info", false);
  public get operationInfo() {
    return this._operationInfo;
  }

  // program_id - computed: false, optional: true, required: false
  private _programId?: string; 
  public get programId() {
    return this.getStringAttribute('program_id');
  }
  public set programId(value: string) {
    this._programId = value;
  }
  public resetProgramId() {
    this._programId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdInput() {
    return this._programId;
  }

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // run_group_count - computed: true, optional: false, required: false
  public get runGroupCount() {
    return this.getNumberAttribute('run_group_count');
  }

  // run_instance_count - computed: true, optional: false, required: false
  public get runInstanceCount() {
    return this.getNumberAttribute('run_instance_count');
  }

  // run_service_instance_count - computed: true, optional: false, required: false
  public get runServiceInstanceCount() {
    return this.getNumberAttribute('run_service_instance_count');
  }

  // stop_group_count - computed: true, optional: false, required: false
  public get stopGroupCount() {
    return this.getNumberAttribute('stop_group_count');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tsf_region_id - computed: false, optional: true, required: false
  private _tsfRegionId?: string; 
  public get tsfRegionId() {
    return this.getStringAttribute('tsf_region_id');
  }
  public set tsfRegionId(value: string) {
    this._tsfRegionId = value;
  }
  public resetTsfRegionId() {
    this._tsfRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsfRegionIdInput() {
    return this._tsfRegionId;
  }

  // tsf_region_name - computed: true, optional: false, required: false
  public get tsfRegionName() {
    return this.getStringAttribute('tsf_region_name');
  }

  // tsf_zone_id - computed: false, optional: true, required: false
  private _tsfZoneId?: string; 
  public get tsfZoneId() {
    return this.getStringAttribute('tsf_zone_id');
  }
  public set tsfZoneId(value: string) {
    this._tsfZoneId = value;
  }
  public resetTsfZoneId() {
    this._tsfZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsfZoneIdInput() {
    return this._tsfZoneId;
  }

  // tsf_zone_name - computed: true, optional: false, required: false
  public get tsfZoneName() {
    return this.getStringAttribute('tsf_zone_name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_cidr: cdktf.stringToTerraform(this._clusterCidr),
      cluster_desc: cdktf.stringToTerraform(this._clusterDesc),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_remark_name: cdktf.stringToTerraform(this._clusterRemarkName),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      id: cdktf.stringToTerraform(this._id),
      kubernete_api_server: cdktf.stringToTerraform(this._kuberneteApiServer),
      kubernete_native_secret: cdktf.stringToTerraform(this._kuberneteNativeSecret),
      kubernete_native_type: cdktf.stringToTerraform(this._kuberneteNativeType),
      max_cluster_service_num: cdktf.numberToTerraform(this._maxClusterServiceNum),
      max_node_pod_num: cdktf.numberToTerraform(this._maxNodePodNum),
      program_id: cdktf.stringToTerraform(this._programId),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tsf_region_id: cdktf.stringToTerraform(this._tsfRegionId),
      tsf_zone_id: cdktf.stringToTerraform(this._tsfZoneId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_desc: {
        value: cdktf.stringToHclTerraform(this._clusterDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_remark_name: {
        value: cdktf.stringToHclTerraform(this._clusterRemarkName),
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
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
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
      kubernete_api_server: {
        value: cdktf.stringToHclTerraform(this._kuberneteApiServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernete_native_secret: {
        value: cdktf.stringToHclTerraform(this._kuberneteNativeSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernete_native_type: {
        value: cdktf.stringToHclTerraform(this._kuberneteNativeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cluster_service_num: {
        value: cdktf.numberToHclTerraform(this._maxClusterServiceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_node_pod_num: {
        value: cdktf.numberToHclTerraform(this._maxNodePodNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      program_id: {
        value: cdktf.stringToHclTerraform(this._programId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tsf_region_id: {
        value: cdktf.stringToHclTerraform(this._tsfRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tsf_zone_id: {
        value: cdktf.stringToHclTerraform(this._tsfZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
