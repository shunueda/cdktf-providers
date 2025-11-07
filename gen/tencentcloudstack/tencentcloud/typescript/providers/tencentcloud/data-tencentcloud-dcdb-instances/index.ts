// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDcdbInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster excluster type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#excluster_type DataTencentcloudDcdbInstances#excluster_type}
  */
  readonly exclusterType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#id DataTencentcloudDcdbInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#instance_ids DataTencentcloudDcdbInstances#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * search according to the cluster excluter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#is_filter_excluster DataTencentcloudDcdbInstances#is_filter_excluster}
  */
  readonly isFilterExcluster?: boolean | cdktf.IResolvable;
  /**
  * search according to the vpc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#is_filter_vpc DataTencentcloudDcdbInstances#is_filter_vpc}
  */
  readonly isFilterVpc?: boolean | cdktf.IResolvable;
  /**
  * project ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#project_ids DataTencentcloudDcdbInstances#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#result_output_file DataTencentcloudDcdbInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * search key, support fuzzy query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#search_key DataTencentcloudDcdbInstances#search_key}
  */
  readonly searchKey?: string;
  /**
  * search name, support instancename, vip, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#search_name DataTencentcloudDcdbInstances#search_name}
  */
  readonly searchName?: string;
  /**
  * subnet id, valid when IsFilterVpc is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#subnet_id DataTencentcloudDcdbInstances#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * vpc id, valid when IsFilterVpc is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#vpc_id DataTencentcloudDcdbInstances#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DataTencentcloudDcdbInstancesListResourceTags {
}

export function dataTencentcloudDcdbInstancesListResourceTagsToTerraform(struct?: DataTencentcloudDcdbInstancesListResourceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDcdbInstancesListResourceTagsToHclTerraform(struct?: DataTencentcloudDcdbInstancesListResourceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDcdbInstancesListResourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDcdbInstancesListResourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcdbInstancesListResourceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudDcdbInstancesListResourceTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDcdbInstancesListResourceTagsOutputReference {
    return new DataTencentcloudDcdbInstancesListResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDcdbInstancesListShardDetail {
}

export function dataTencentcloudDcdbInstancesListShardDetailToTerraform(struct?: DataTencentcloudDcdbInstancesListShardDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDcdbInstancesListShardDetailToHclTerraform(struct?: DataTencentcloudDcdbInstancesListShardDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDcdbInstancesListShardDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDcdbInstancesListShardDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcdbInstancesListShardDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // createtime - computed: true, optional: false, required: false
  public get createtime() {
    return this.getStringAttribute('createtime');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // shard_id - computed: true, optional: false, required: false
  public get shardId() {
    return this.getNumberAttribute('shard_id');
  }

  // shard_instance_id - computed: true, optional: false, required: false
  public get shardInstanceId() {
    return this.getStringAttribute('shard_instance_id');
  }

  // shard_serial_id - computed: true, optional: false, required: false
  public get shardSerialId() {
    return this.getStringAttribute('shard_serial_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }
}

export class DataTencentcloudDcdbInstancesListShardDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDcdbInstancesListShardDetailOutputReference {
    return new DataTencentcloudDcdbInstancesListShardDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDcdbInstancesListStruct {
}

export function dataTencentcloudDcdbInstancesListStructToTerraform(struct?: DataTencentcloudDcdbInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDcdbInstancesListStructToHclTerraform(struct?: DataTencentcloudDcdbInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDcdbInstancesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDcdbInstancesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcdbInstancesListStruct | undefined) {
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_engine - computed: true, optional: false, required: false
  public get dbEngine() {
    return this.getStringAttribute('db_engine');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }

  // is_audit_supported - computed: true, optional: false, required: false
  public get isAuditSupported() {
    return this.getNumberAttribute('is_audit_supported');
  }

  // is_tmp - computed: true, optional: false, required: false
  public get isTmp() {
    return this.getNumberAttribute('is_tmp');
  }

  // isolated_timestamp - computed: true, optional: false, required: false
  public get isolatedTimestamp() {
    return this.getStringAttribute('isolated_timestamp');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // paymode - computed: true, optional: false, required: false
  public get paymode() {
    return this.getStringAttribute('paymode');
  }

  // period_end_time - computed: true, optional: false, required: false
  public get periodEndTime() {
    return this.getStringAttribute('period_end_time');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_tags - computed: true, optional: false, required: false
  private _resourceTags = new DataTencentcloudDcdbInstancesListResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // shard_detail - computed: true, optional: false, required: false
  private _shardDetail = new DataTencentcloudDcdbInstancesListShardDetailList(this, "shard_detail", false);
  public get shardDetail() {
    return this._shardDetail;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_desc - computed: true, optional: false, required: false
  public get statusDesc() {
    return this.getStringAttribute('status_desc');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getStringAttribute('uin');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }

  // wan_domain - computed: true, optional: false, required: false
  public get wanDomain() {
    return this.getStringAttribute('wan_domain');
  }

  // wan_port - computed: true, optional: false, required: false
  public get wanPort() {
    return this.getNumberAttribute('wan_port');
  }

  // wan_status - computed: true, optional: false, required: false
  public get wanStatus() {
    return this.getNumberAttribute('wan_status');
  }

  // wan_vip - computed: true, optional: false, required: false
  public get wanVip() {
    return this.getStringAttribute('wan_vip');
  }
}

export class DataTencentcloudDcdbInstancesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDcdbInstancesListStructOutputReference {
    return new DataTencentcloudDcdbInstancesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances tencentcloud_dcdb_instances}
*/
export class DataTencentcloudDcdbInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcdb_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDcdbInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDcdbInstances to import
  * @param importFromId The id of the existing DataTencentcloudDcdbInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDcdbInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcdb_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dcdb_instances tencentcloud_dcdb_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDcdbInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDcdbInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcdb_instances',
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
    this._exclusterType = config.exclusterType;
    this._id = config.id;
    this._instanceIds = config.instanceIds;
    this._isFilterExcluster = config.isFilterExcluster;
    this._isFilterVpc = config.isFilterVpc;
    this._projectIds = config.projectIds;
    this._resultOutputFile = config.resultOutputFile;
    this._searchKey = config.searchKey;
    this._searchName = config.searchName;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // excluster_type - computed: false, optional: true, required: false
  private _exclusterType?: number; 
  public get exclusterType() {
    return this.getNumberAttribute('excluster_type');
  }
  public set exclusterType(value: number) {
    this._exclusterType = value;
  }
  public resetExclusterType() {
    this._exclusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusterTypeInput() {
    return this._exclusterType;
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

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // is_filter_excluster - computed: false, optional: true, required: false
  private _isFilterExcluster?: boolean | cdktf.IResolvable; 
  public get isFilterExcluster() {
    return this.getBooleanAttribute('is_filter_excluster');
  }
  public set isFilterExcluster(value: boolean | cdktf.IResolvable) {
    this._isFilterExcluster = value;
  }
  public resetIsFilterExcluster() {
    this._isFilterExcluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFilterExclusterInput() {
    return this._isFilterExcluster;
  }

  // is_filter_vpc - computed: false, optional: true, required: false
  private _isFilterVpc?: boolean | cdktf.IResolvable; 
  public get isFilterVpc() {
    return this.getBooleanAttribute('is_filter_vpc');
  }
  public set isFilterVpc(value: boolean | cdktf.IResolvable) {
    this._isFilterVpc = value;
  }
  public resetIsFilterVpc() {
    this._isFilterVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFilterVpcInput() {
    return this._isFilterVpc;
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudDcdbInstancesListStructList(this, "list", false);
  public get list() {
    return this._list;
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

  // search_key - computed: false, optional: true, required: false
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  public resetSearchKey() {
    this._searchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
  }

  // search_name - computed: false, optional: true, required: false
  private _searchName?: string; 
  public get searchName() {
    return this.getStringAttribute('search_name');
  }
  public set searchName(value: string) {
    this._searchName = value;
  }
  public resetSearchName() {
    this._searchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNameInput() {
    return this._searchName;
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
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
      excluster_type: cdktf.numberToTerraform(this._exclusterType),
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      is_filter_excluster: cdktf.booleanToTerraform(this._isFilterExcluster),
      is_filter_vpc: cdktf.booleanToTerraform(this._isFilterVpc),
      project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._projectIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_key: cdktf.stringToTerraform(this._searchKey),
      search_name: cdktf.stringToTerraform(this._searchName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      excluster_type: {
        value: cdktf.numberToHclTerraform(this._exclusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_filter_excluster: {
        value: cdktf.booleanToHclTerraform(this._isFilterExcluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_filter_vpc: {
        value: cdktf.booleanToHclTerraform(this._isFilterVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_name: {
        value: cdktf.stringToHclTerraform(this._searchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
