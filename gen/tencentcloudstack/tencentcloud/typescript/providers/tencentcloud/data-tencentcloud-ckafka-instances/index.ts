// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCkafkaInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#id DataTencentcloudCkafkaInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter by instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#instance_ids DataTencentcloudCkafkaInstances#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * The number of pages, default is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#limit DataTencentcloudCkafkaInstances#limit}
  */
  readonly limit?: number;
  /**
  * The page start offset, default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#offset DataTencentcloudCkafkaInstances#offset}
  */
  readonly offset?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#result_output_file DataTencentcloudCkafkaInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter by instance name, support fuzzy query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#search_word DataTencentcloudCkafkaInstances#search_word}
  */
  readonly searchWord?: string;
  /**
  * (Filter Criteria) The status of the instance. 0: Create, 1: Run, 2: Delete, do not fill the default return all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#status DataTencentcloudCkafkaInstances#status}
  */
  readonly status?: number[];
  /**
  * Matches the tag key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#tag_key DataTencentcloudCkafkaInstances#tag_key}
  */
  readonly tagKey?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#filters DataTencentcloudCkafkaInstances#filters}
  */
  readonly filters?: DataTencentcloudCkafkaInstancesFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudCkafkaInstancesInstanceListTags {
}

export function dataTencentcloudCkafkaInstancesInstanceListTagsToTerraform(struct?: DataTencentcloudCkafkaInstancesInstanceListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaInstancesInstanceListTagsToHclTerraform(struct?: DataTencentcloudCkafkaInstancesInstanceListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaInstancesInstanceListTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaInstancesInstanceListTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaInstancesInstanceListTags | undefined) {
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

export class DataTencentcloudCkafkaInstancesInstanceListTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaInstancesInstanceListTagsOutputReference {
    return new DataTencentcloudCkafkaInstancesInstanceListTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaInstancesInstanceListVipListStruct {
}

export function dataTencentcloudCkafkaInstancesInstanceListVipListStructToTerraform(struct?: DataTencentcloudCkafkaInstancesInstanceListVipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaInstancesInstanceListVipListStructToHclTerraform(struct?: DataTencentcloudCkafkaInstancesInstanceListVipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaInstancesInstanceListVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaInstancesInstanceListVipListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaInstancesInstanceListVipListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getStringAttribute('vport');
  }
}

export class DataTencentcloudCkafkaInstancesInstanceListVipListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaInstancesInstanceListVipListStructOutputReference {
    return new DataTencentcloudCkafkaInstancesInstanceListVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaInstancesInstanceListStruct {
}

export function dataTencentcloudCkafkaInstancesInstanceListStructToTerraform(struct?: DataTencentcloudCkafkaInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaInstancesInstanceListStructToHclTerraform(struct?: DataTencentcloudCkafkaInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaInstancesInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaInstancesInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaInstancesInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // cvm - computed: true, optional: false, required: false
  public get cvm() {
    return this.getNumberAttribute('cvm');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getNumberAttribute('healthy');
  }

  // healthy_message - computed: true, optional: false, required: false
  public get healthyMessage() {
    return this.getStringAttribute('healthy_message');
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
    return this.getStringAttribute('instance_type');
  }

  // is_internal - computed: true, optional: false, required: false
  public get isInternal() {
    return this.getNumberAttribute('is_internal');
  }

  // max_partition_number - computed: true, optional: false, required: false
  public get maxPartitionNumber() {
    return this.getNumberAttribute('max_partition_number');
  }

  // max_topic_number - computed: true, optional: false, required: false
  public get maxTopicNumber() {
    return this.getNumberAttribute('max_topic_number');
  }

  // partition_number - computed: true, optional: false, required: false
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }

  // public_network - computed: true, optional: false, required: false
  public get publicNetwork() {
    return this.getNumberAttribute('public_network');
  }

  // public_network_charge_type - computed: true, optional: false, required: false
  public get publicNetworkChargeType() {
    return this.getStringAttribute('public_network_charge_type');
  }

  // rebalance_time - computed: true, optional: false, required: false
  public get rebalanceTime() {
    return this.getStringAttribute('rebalance_time');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudCkafkaInstancesInstanceListTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // topic_num - computed: true, optional: false, required: false
  public get topicNum() {
    return this.getNumberAttribute('topic_num');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vip_list - computed: true, optional: false, required: false
  private _vipList = new DataTencentcloudCkafkaInstancesInstanceListVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getStringAttribute('vport');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }

  // zone_ids - computed: true, optional: false, required: false
  public get zoneIds() {
    return this.getNumberListAttribute('zone_ids');
  }
}

export class DataTencentcloudCkafkaInstancesInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaInstancesInstanceListStructOutputReference {
    return new DataTencentcloudCkafkaInstancesInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaInstancesFilters {
  /**
  * The field that needs to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#name DataTencentcloudCkafkaInstances#name}
  */
  readonly name: string;
  /**
  * The filtered value of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#values DataTencentcloudCkafkaInstances#values}
  */
  readonly values: string[];
}

export function dataTencentcloudCkafkaInstancesFiltersToTerraform(struct?: DataTencentcloudCkafkaInstancesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudCkafkaInstancesFiltersToHclTerraform(struct?: DataTencentcloudCkafkaInstancesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudCkafkaInstancesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaInstancesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaInstancesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudCkafkaInstancesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudCkafkaInstancesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudCkafkaInstancesFiltersOutputReference {
    return new DataTencentcloudCkafkaInstancesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances tencentcloud_ckafka_instances}
*/
export class DataTencentcloudCkafkaInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCkafkaInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCkafkaInstances to import
  * @param importFromId The id of the existing DataTencentcloudCkafkaInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCkafkaInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ckafka_instances tencentcloud_ckafka_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCkafkaInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCkafkaInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_instances',
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
    this._instanceIds = config.instanceIds;
    this._limit = config.limit;
    this._offset = config.offset;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
    this._status = config.status;
    this._tagKey = config.tagKey;
    this._filters.internalValue = config.filters;
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

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
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

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataTencentcloudCkafkaInstancesInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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

  // status - computed: false, optional: true, required: false
  private _status?: number[]; 
  public get status() {
    return this.getNumberListAttribute('status');
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

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudCkafkaInstancesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudCkafkaInstancesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
      status: cdktf.listMapper(cdktf.numberToTerraform, false)(this._status),
      tag_key: cdktf.stringToTerraform(this._tagKey),
      filters: cdktf.listMapper(dataTencentcloudCkafkaInstancesFiltersToTerraform, true)(this._filters.internalValue),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      status: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      tag_key: {
        value: cdktf.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudCkafkaInstancesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudCkafkaInstancesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
