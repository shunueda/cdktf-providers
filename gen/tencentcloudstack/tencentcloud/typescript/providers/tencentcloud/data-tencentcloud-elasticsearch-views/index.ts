// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/elasticsearch_views
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudElasticsearchViewsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/elasticsearch_views#id DataTencentcloudElasticsearchViews#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/elasticsearch_views#instance_id DataTencentcloudElasticsearchViews#instance_id}
  */
  readonly instanceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/elasticsearch_views#result_output_file DataTencentcloudElasticsearchViews#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudElasticsearchViewsClusterView {
}

export function dataTencentcloudElasticsearchViewsClusterViewToTerraform(struct?: DataTencentcloudElasticsearchViewsClusterView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchViewsClusterViewToHclTerraform(struct?: DataTencentcloudElasticsearchViewsClusterView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchViewsClusterViewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchViewsClusterView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchViewsClusterView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avg_cpu_usage - computed: true, optional: false, required: false
  public get avgCpuUsage() {
    return this.getNumberAttribute('avg_cpu_usage');
  }

  // avg_disk_usage - computed: true, optional: false, required: false
  public get avgDiskUsage() {
    return this.getNumberAttribute('avg_disk_usage');
  }

  // avg_mem_usage - computed: true, optional: false, required: false
  public get avgMemUsage() {
    return this.getNumberAttribute('avg_mem_usage');
  }

  // break - computed: true, optional: false, required: false
  public get break() {
    return this.getNumberAttribute('break');
  }

  // data_node_num - computed: true, optional: false, required: false
  public get dataNodeNum() {
    return this.getNumberAttribute('data_node_num');
  }

  // disk_used_in_bytes - computed: true, optional: false, required: false
  public get diskUsedInBytes() {
    return this.getNumberAttribute('disk_used_in_bytes');
  }

  // doc_num - computed: true, optional: false, required: false
  public get docNum() {
    return this.getNumberAttribute('doc_num');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getNumberAttribute('health');
  }

  // index_num - computed: true, optional: false, required: false
  public get indexNum() {
    return this.getNumberAttribute('index_num');
  }

  // initializing_shard_num - computed: true, optional: false, required: false
  public get initializingShardNum() {
    return this.getNumberAttribute('initializing_shard_num');
  }

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // primary_shard_num - computed: true, optional: false, required: false
  public get primaryShardNum() {
    return this.getNumberAttribute('primary_shard_num');
  }

  // relocating_shard_num - computed: true, optional: false, required: false
  public get relocatingShardNum() {
    return this.getNumberAttribute('relocating_shard_num');
  }

  // searchable_snapshot_cos_app_id - computed: true, optional: false, required: false
  public get searchableSnapshotCosAppId() {
    return this.getStringAttribute('searchable_snapshot_cos_app_id');
  }

  // searchable_snapshot_cos_bucket - computed: true, optional: false, required: false
  public get searchableSnapshotCosBucket() {
    return this.getStringAttribute('searchable_snapshot_cos_bucket');
  }

  // shard_num - computed: true, optional: false, required: false
  public get shardNum() {
    return this.getNumberAttribute('shard_num');
  }

  // target_node_types - computed: true, optional: false, required: false
  public get targetNodeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('target_node_types'));
  }

  // total_cos_storage - computed: true, optional: false, required: false
  public get totalCosStorage() {
    return this.getNumberAttribute('total_cos_storage');
  }

  // total_disk_size - computed: true, optional: false, required: false
  public get totalDiskSize() {
    return this.getNumberAttribute('total_disk_size');
  }

  // total_node_num - computed: true, optional: false, required: false
  public get totalNodeNum() {
    return this.getNumberAttribute('total_node_num');
  }

  // unassigned_shard_num - computed: true, optional: false, required: false
  public get unassignedShardNum() {
    return this.getNumberAttribute('unassigned_shard_num');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getNumberAttribute('visible');
  }
}

export class DataTencentcloudElasticsearchViewsClusterViewList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchViewsClusterViewOutputReference {
    return new DataTencentcloudElasticsearchViewsClusterViewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchViewsKibanasView {
}

export function dataTencentcloudElasticsearchViewsKibanasViewToTerraform(struct?: DataTencentcloudElasticsearchViewsKibanasView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchViewsKibanasViewToHclTerraform(struct?: DataTencentcloudElasticsearchViewsKibanasView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchViewsKibanasViewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchViewsKibanasView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchViewsKibanasView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_num - computed: true, optional: false, required: false
  public get cpuNum() {
    return this.getNumberAttribute('cpu_num');
  }

  // cpu_usage - computed: true, optional: false, required: false
  public get cpuUsage() {
    return this.getNumberAttribute('cpu_usage');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_usage - computed: true, optional: false, required: false
  public get diskUsage() {
    return this.getNumberAttribute('disk_usage');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mem_size - computed: true, optional: false, required: false
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }

  // mem_usage - computed: true, optional: false, required: false
  public get memUsage() {
    return this.getNumberAttribute('mem_usage');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudElasticsearchViewsKibanasViewList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchViewsKibanasViewOutputReference {
    return new DataTencentcloudElasticsearchViewsKibanasViewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchViewsNodesView {
}

export function dataTencentcloudElasticsearchViewsNodesViewToTerraform(struct?: DataTencentcloudElasticsearchViewsNodesView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchViewsNodesViewToHclTerraform(struct?: DataTencentcloudElasticsearchViewsNodesView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchViewsNodesViewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchViewsNodesView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchViewsNodesView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // break - computed: true, optional: false, required: false
  public get break() {
    return this.getNumberAttribute('break');
  }

  // cpu_num - computed: true, optional: false, required: false
  public get cpuNum() {
    return this.getNumberAttribute('cpu_num');
  }

  // cpu_usage - computed: true, optional: false, required: false
  public get cpuUsage() {
    return this.getNumberAttribute('cpu_usage');
  }

  // disk_ids - computed: true, optional: false, required: false
  public get diskIds() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_ids'));
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_usage - computed: true, optional: false, required: false
  public get diskUsage() {
    return this.getNumberAttribute('disk_usage');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // is_coordination_node - computed: true, optional: false, required: false
  public get isCoordinationNode() {
    return this.getBooleanAttribute('is_coordination_node');
  }

  // jvm_mem_usage - computed: true, optional: false, required: false
  public get jvmMemUsage() {
    return this.getNumberAttribute('jvm_mem_usage');
  }

  // mem_size - computed: true, optional: false, required: false
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }

  // mem_usage - computed: true, optional: false, required: false
  public get memUsage() {
    return this.getNumberAttribute('mem_usage');
  }

  // node_http_ip - computed: true, optional: false, required: false
  public get nodeHttpIp() {
    return this.getStringAttribute('node_http_ip');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_ip - computed: true, optional: false, required: false
  public get nodeIp() {
    return this.getStringAttribute('node_ip');
  }

  // node_role - computed: true, optional: false, required: false
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }

  // shard_num - computed: true, optional: false, required: false
  public get shardNum() {
    return this.getNumberAttribute('shard_num');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getNumberAttribute('visible');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudElasticsearchViewsNodesViewList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchViewsNodesViewOutputReference {
    return new DataTencentcloudElasticsearchViewsNodesViewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/elasticsearch_views tencentcloud_elasticsearch_views}
*/
export class DataTencentcloudElasticsearchViews extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_views";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudElasticsearchViews resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudElasticsearchViews to import
  * @param importFromId The id of the existing DataTencentcloudElasticsearchViews that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/elasticsearch_views#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudElasticsearchViews to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_views", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/elasticsearch_views tencentcloud_elasticsearch_views} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudElasticsearchViewsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudElasticsearchViewsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_views',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_view - computed: true, optional: false, required: false
  private _clusterView = new DataTencentcloudElasticsearchViewsClusterViewList(this, "cluster_view", false);
  public get clusterView() {
    return this._clusterView;
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

  // kibanas_view - computed: true, optional: false, required: false
  private _kibanasView = new DataTencentcloudElasticsearchViewsKibanasViewList(this, "kibanas_view", false);
  public get kibanasView() {
    return this._kibanasView;
  }

  // nodes_view - computed: true, optional: false, required: false
  private _nodesView = new DataTencentcloudElasticsearchViewsNodesViewList(this, "nodes_view", false);
  public get nodesView() {
    return this._nodesView;
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
