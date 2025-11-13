// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRedisClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Renewal mode: 0- default state (manual renewal); 1- Automatic renewal; 2- Clearly stating that automatic renewal is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#auto_renew_flag DataTencentcloudRedisClusters#auto_renew_flag}
  */
  readonly autoRenewFlag?: number[];
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#cluster_name DataTencentcloudRedisClusters#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Dedicated cluster Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#dedicated_cluster_id DataTencentcloudRedisClusters#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#id DataTencentcloudRedisClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project Ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#project_ids DataTencentcloudRedisClusters#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * Redis Cluster Ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#redis_cluster_ids DataTencentcloudRedisClusters#redis_cluster_ids}
  */
  readonly redisClusterIds?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#result_output_file DataTencentcloudRedisClusters#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Cluster status: 1- In process, 2- Running, 3- Isolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#status DataTencentcloudRedisClusters#status}
  */
  readonly status?: number[];
}
export interface DataTencentcloudRedisClustersResourcesBaseBundles {
}

export function dataTencentcloudRedisClustersResourcesBaseBundlesToTerraform(struct?: DataTencentcloudRedisClustersResourcesBaseBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRedisClustersResourcesBaseBundlesToHclTerraform(struct?: DataTencentcloudRedisClustersResourcesBaseBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRedisClustersResourcesBaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRedisClustersResourcesBaseBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRedisClustersResourcesBaseBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_memory - computed: true, optional: false, required: false
  public get availableMemory() {
    return this.getNumberAttribute('available_memory');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // resource_bundle_name - computed: true, optional: false, required: false
  public get resourceBundleName() {
    return this.getStringAttribute('resource_bundle_name');
  }
}

export class DataTencentcloudRedisClustersResourcesBaseBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRedisClustersResourcesBaseBundlesOutputReference {
    return new DataTencentcloudRedisClustersResourcesBaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudRedisClustersResourcesResourceBundles {
}

export function dataTencentcloudRedisClustersResourcesResourceBundlesToTerraform(struct?: DataTencentcloudRedisClustersResourcesResourceBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRedisClustersResourcesResourceBundlesToHclTerraform(struct?: DataTencentcloudRedisClustersResourcesResourceBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRedisClustersResourcesResourceBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRedisClustersResourcesResourceBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRedisClustersResourcesResourceBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_memory - computed: true, optional: false, required: false
  public get availableMemory() {
    return this.getNumberAttribute('available_memory');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // resource_bundle_name - computed: true, optional: false, required: false
  public get resourceBundleName() {
    return this.getStringAttribute('resource_bundle_name');
  }
}

export class DataTencentcloudRedisClustersResourcesResourceBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRedisClustersResourcesResourceBundlesOutputReference {
    return new DataTencentcloudRedisClustersResourcesResourceBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudRedisClustersResources {
}

export function dataTencentcloudRedisClustersResourcesToTerraform(struct?: DataTencentcloudRedisClustersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRedisClustersResourcesToHclTerraform(struct?: DataTencentcloudRedisClustersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRedisClustersResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRedisClustersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRedisClustersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // auto_renew_flag - computed: true, optional: false, required: false
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }

  // base_bundles - computed: true, optional: false, required: false
  private _baseBundles = new DataTencentcloudRedisClustersResourcesBaseBundlesList(this, "base_bundles", false);
  public get baseBundles() {
    return this._baseBundles;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // dedicated_cluster_id - computed: true, optional: false, required: false
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // redis_cluster_id - computed: true, optional: false, required: false
  public get redisClusterId() {
    return this.getStringAttribute('redis_cluster_id');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // resource_bundles - computed: true, optional: false, required: false
  private _resourceBundles = new DataTencentcloudRedisClustersResourcesResourceBundlesList(this, "resource_bundles", false);
  public get resourceBundles() {
    return this._resourceBundles;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudRedisClustersResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRedisClustersResourcesOutputReference {
    return new DataTencentcloudRedisClustersResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters tencentcloud_redis_clusters}
*/
export class DataTencentcloudRedisClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRedisClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRedisClusters to import
  * @param importFromId The id of the existing DataTencentcloudRedisClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRedisClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/redis_clusters tencentcloud_redis_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRedisClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRedisClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_clusters',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._clusterName = config.clusterName;
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._id = config.id;
    this._projectIds = config.projectIds;
    this._redisClusterIds = config.redisClusterIds;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: number[]; 
  public get autoRenewFlag() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('auto_renew_flag')));
  }
  public set autoRenewFlag(value: number[]) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
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

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: number[]; 
  public get projectIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('project_ids')));
  }
  public set projectIds(value: number[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // redis_cluster_ids - computed: false, optional: true, required: false
  private _redisClusterIds?: string[]; 
  public get redisClusterIds() {
    return cdktf.Fn.tolist(this.getListAttribute('redis_cluster_ids'));
  }
  public set redisClusterIds(value: string[]) {
    this._redisClusterIds = value;
  }
  public resetRedisClusterIds() {
    this._redisClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterIdsInput() {
    return this._redisClusterIds;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataTencentcloudRedisClustersResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
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

  // status - computed: false, optional: true, required: false
  private _status?: number[]; 
  public get status() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('status')));
  }
  public set status(value: number[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.listMapper(cdktf.numberToTerraform, false)(this._autoRenewFlag),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      id: cdktf.stringToTerraform(this._id),
      project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._projectIds),
      redis_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redisClusterIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.listMapper(cdktf.numberToTerraform, false)(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._autoRenewFlag),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedClusterId),
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
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      redis_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redisClusterIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._status),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
