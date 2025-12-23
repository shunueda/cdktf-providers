// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTdmqRocketmqClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster#cluster_id_list DataTencentcloudTdmqRocketmqCluster#cluster_id_list}
  */
  readonly clusterIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster#id DataTencentcloudTdmqRocketmqCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search by cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster#id_keyword DataTencentcloudTdmqRocketmqCluster#id_keyword}
  */
  readonly idKeyword?: string;
  /**
  * Search by cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster#name_keyword DataTencentcloudTdmqRocketmqCluster#name_keyword}
  */
  readonly nameKeyword?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster#result_output_file DataTencentcloudTdmqRocketmqCluster#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudTdmqRocketmqClusterClusterListConfig {
}

export function dataTencentcloudTdmqRocketmqClusterClusterListConfigToTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdmqRocketmqClusterClusterListConfigToHclTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdmqRocketmqClusterClusterListConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdmqRocketmqClusterClusterListConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdmqRocketmqClusterClusterListConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_group_num - computed: true, optional: false, required: false
  public get maxGroupNum() {
    return this.getNumberAttribute('max_group_num');
  }

  // max_latency_time - computed: true, optional: false, required: false
  public get maxLatencyTime() {
    return this.getNumberAttribute('max_latency_time');
  }

  // max_namespace_num - computed: true, optional: false, required: false
  public get maxNamespaceNum() {
    return this.getNumberAttribute('max_namespace_num');
  }

  // max_retention_time - computed: true, optional: false, required: false
  public get maxRetentionTime() {
    return this.getNumberAttribute('max_retention_time');
  }

  // max_topic_num - computed: true, optional: false, required: false
  public get maxTopicNum() {
    return this.getNumberAttribute('max_topic_num');
  }

  // max_tps_per_namespace - computed: true, optional: false, required: false
  public get maxTpsPerNamespace() {
    return this.getNumberAttribute('max_tps_per_namespace');
  }

  // used_group_num - computed: true, optional: false, required: false
  public get usedGroupNum() {
    return this.getNumberAttribute('used_group_num');
  }

  // used_namespace_num - computed: true, optional: false, required: false
  public get usedNamespaceNum() {
    return this.getNumberAttribute('used_namespace_num');
  }

  // used_topic_num - computed: true, optional: false, required: false
  public get usedTopicNum() {
    return this.getNumberAttribute('used_topic_num');
  }
}

export class DataTencentcloudTdmqRocketmqClusterClusterListConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdmqRocketmqClusterClusterListConfigOutputReference {
    return new DataTencentcloudTdmqRocketmqClusterClusterListConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcs {
}

export function dataTencentcloudTdmqRocketmqClusterClusterListInfoVpcsToTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdmqRocketmqClusterClusterListInfoVpcsToHclTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcsOutputReference {
    return new DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTdmqRocketmqClusterClusterListInfo {
}

export function dataTencentcloudTdmqRocketmqClusterClusterListInfoToTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdmqRocketmqClusterClusterListInfoToHclTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdmqRocketmqClusterClusterListInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdmqRocketmqClusterClusterListInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdmqRocketmqClusterClusterListInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // is_vip - computed: true, optional: false, required: false
  public get isVip() {
    return this.getBooleanAttribute('is_vip');
  }

  // public_end_point - computed: true, optional: false, required: false
  public get publicEndPoint() {
    return this.getStringAttribute('public_end_point');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // rocketmq_flag - computed: true, optional: false, required: false
  public get rocketmqFlag() {
    return this.getBooleanAttribute('rocketmq_flag');
  }

  // support_namespace_endpoint - computed: true, optional: false, required: false
  public get supportNamespaceEndpoint() {
    return this.getBooleanAttribute('support_namespace_endpoint');
  }

  // vpc_end_point - computed: true, optional: false, required: false
  public get vpcEndPoint() {
    return this.getStringAttribute('vpc_end_point');
  }

  // vpcs - computed: true, optional: false, required: false
  private _vpcs = new DataTencentcloudTdmqRocketmqClusterClusterListInfoVpcsList(this, "vpcs", false);
  public get vpcs() {
    return this._vpcs;
  }
}

export class DataTencentcloudTdmqRocketmqClusterClusterListInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdmqRocketmqClusterClusterListInfoOutputReference {
    return new DataTencentcloudTdmqRocketmqClusterClusterListInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTdmqRocketmqClusterClusterListStruct {
}

export function dataTencentcloudTdmqRocketmqClusterClusterListStructToTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdmqRocketmqClusterClusterListStructToHclTerraform(struct?: DataTencentcloudTdmqRocketmqClusterClusterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdmqRocketmqClusterClusterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdmqRocketmqClusterClusterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdmqRocketmqClusterClusterListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataTencentcloudTdmqRocketmqClusterClusterListConfigList(this, "config", false);
  public get config() {
    return this._config;
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataTencentcloudTdmqRocketmqClusterClusterListInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class DataTencentcloudTdmqRocketmqClusterClusterListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdmqRocketmqClusterClusterListStructOutputReference {
    return new DataTencentcloudTdmqRocketmqClusterClusterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster tencentcloud_tdmq_rocketmq_cluster}
*/
export class DataTencentcloudTdmqRocketmqCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rocketmq_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTdmqRocketmqCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTdmqRocketmqCluster to import
  * @param importFromId The id of the existing DataTencentcloudTdmqRocketmqCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTdmqRocketmqCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rocketmq_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/tdmq_rocketmq_cluster tencentcloud_tdmq_rocketmq_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTdmqRocketmqClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTdmqRocketmqClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rocketmq_cluster',
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
    this._clusterIdList = config.clusterIdList;
    this._id = config.id;
    this._idKeyword = config.idKeyword;
    this._nameKeyword = config.nameKeyword;
    this._resultOutputFile = config.resultOutputFile;
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

  // cluster_list - computed: true, optional: false, required: false
  private _clusterList = new DataTencentcloudTdmqRocketmqClusterClusterListStructList(this, "cluster_list", false);
  public get clusterList() {
    return this._clusterList;
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

  // id_keyword - computed: false, optional: true, required: false
  private _idKeyword?: string; 
  public get idKeyword() {
    return this.getStringAttribute('id_keyword');
  }
  public set idKeyword(value: string) {
    this._idKeyword = value;
  }
  public resetIdKeyword() {
    this._idKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idKeywordInput() {
    return this._idKeyword;
  }

  // name_keyword - computed: false, optional: true, required: false
  private _nameKeyword?: string; 
  public get nameKeyword() {
    return this.getStringAttribute('name_keyword');
  }
  public set nameKeyword(value: string) {
    this._nameKeyword = value;
  }
  public resetNameKeyword() {
    this._nameKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameKeywordInput() {
    return this._nameKeyword;
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
      cluster_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterIdList),
      id: cdktf.stringToTerraform(this._id),
      id_keyword: cdktf.stringToTerraform(this._idKeyword),
      name_keyword: cdktf.stringToTerraform(this._nameKeyword),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_keyword: {
        value: cdktf.stringToHclTerraform(this._idKeyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_keyword: {
        value: cdktf.stringToHclTerraform(this._nameKeyword),
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
