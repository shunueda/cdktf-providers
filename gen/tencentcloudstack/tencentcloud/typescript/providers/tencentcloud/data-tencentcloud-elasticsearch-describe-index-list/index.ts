// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudElasticsearchDescribeIndexListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#id DataTencentcloudElasticsearchDescribeIndexList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Index name. If you fill in the blanks, get all indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#index_name DataTencentcloudElasticsearchDescribeIndexList#index_name}
  */
  readonly indexName?: string;
  /**
  * Index status list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#index_status_list DataTencentcloudElasticsearchDescribeIndexList#index_status_list}
  */
  readonly indexStatusList?: string[];
  /**
  * Index type. `auto`: Autonomous index; `normal`: General index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#index_type DataTencentcloudElasticsearchDescribeIndexList#index_type}
  */
  readonly indexType: string;
  /**
  * ES cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#instance_id DataTencentcloudElasticsearchDescribeIndexList#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Sort order, which supports asc and desc. The default is desc data format asc,desc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#order DataTencentcloudElasticsearchDescribeIndexList#order}
  */
  readonly order?: string;
  /**
  * Sort field. Support index name: IndexName, index storage: IndexStorage, index creation time: IndexCreateTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#order_by DataTencentcloudElasticsearchDescribeIndexList#order_by}
  */
  readonly orderBy?: string;
  /**
  * Cluster access password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#password DataTencentcloudElasticsearchDescribeIndexList#password}
  */
  readonly password?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#result_output_file DataTencentcloudElasticsearchDescribeIndexList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Cluster access user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#username DataTencentcloudElasticsearchDescribeIndexList#username}
  */
  readonly username?: string;
}
export interface DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndices {
}

export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndicesToTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndicesToHclTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_create_time - computed: true, optional: false, required: false
  public get indexCreateTime() {
    return this.getStringAttribute('index_create_time');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // index_phrase - computed: true, optional: false, required: false
  public get indexPhrase() {
    return this.getStringAttribute('index_phrase');
  }

  // index_status - computed: true, optional: false, required: false
  public get indexStatus() {
    return this.getStringAttribute('index_status');
  }

  // index_storage - computed: true, optional: false, required: false
  public get indexStorage() {
    return this.getNumberAttribute('index_storage');
  }
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndicesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndicesOutputReference {
    return new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsField {
}

export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsFieldToTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsFieldToHclTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expire_max_age - computed: true, optional: false, required: false
  public get expireMaxAge() {
    return this.getStringAttribute('expire_max_age');
  }

  // expire_max_size - computed: true, optional: false, required: false
  public get expireMaxSize() {
    return this.getStringAttribute('expire_max_size');
  }

  // rollover_dynamic - computed: true, optional: false, required: false
  public get rolloverDynamic() {
    return this.getStringAttribute('rollover_dynamic');
  }

  // rollover_max_age - computed: true, optional: false, required: false
  public get rolloverMaxAge() {
    return this.getStringAttribute('rollover_max_age');
  }

  // shard_num_dynamic - computed: true, optional: false, required: false
  public get shardNumDynamic() {
    return this.getStringAttribute('shard_num_dynamic');
  }

  // timestamp_field - computed: true, optional: false, required: false
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }

  // write_mode - computed: true, optional: false, required: false
  public get writeMode() {
    return this.getStringAttribute('write_mode');
  }
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsFieldOutputReference {
    return new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyField {
}

export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyFieldToTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyFieldToHclTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cold_action - computed: true, optional: false, required: false
  public get coldAction() {
    return this.getStringAttribute('cold_action');
  }

  // cold_enable - computed: true, optional: false, required: false
  public get coldEnable() {
    return this.getStringAttribute('cold_enable');
  }

  // cold_min_age - computed: true, optional: false, required: false
  public get coldMinAge() {
    return this.getStringAttribute('cold_min_age');
  }

  // frozen_enable - computed: true, optional: false, required: false
  public get frozenEnable() {
    return this.getStringAttribute('frozen_enable');
  }

  // frozen_min_age - computed: true, optional: false, required: false
  public get frozenMinAge() {
    return this.getStringAttribute('frozen_min_age');
  }

  // warm_enable - computed: true, optional: false, required: false
  public get warmEnable() {
    return this.getStringAttribute('warm_enable');
  }

  // warm_min_age - computed: true, optional: false, required: false
  public get warmMinAge() {
    return this.getStringAttribute('warm_min_age');
  }
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyFieldOutputReference {
    return new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsField {
}

export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsFieldToTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsFieldToHclTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_replicas - computed: true, optional: false, required: false
  public get numberOfReplicas() {
    return this.getStringAttribute('number_of_replicas');
  }

  // number_of_shards - computed: true, optional: false, required: false
  public get numberOfShards() {
    return this.getStringAttribute('number_of_shards');
  }

  // refresh_interval - computed: true, optional: false, required: false
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsFieldOutputReference {
    return new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDescribeIndexListIndexMetaFields {
}

export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsToTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsToHclTerraform(struct?: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDescribeIndexListIndexMetaFields | undefined) {
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

  // backing_indices - computed: true, optional: false, required: false
  private _backingIndices = new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsBackingIndicesList(this, "backing_indices", false);
  public get backingIndices() {
    return this._backingIndices;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // index_create_time - computed: true, optional: false, required: false
  public get indexCreateTime() {
    return this.getStringAttribute('index_create_time');
  }

  // index_docs - computed: true, optional: false, required: false
  public get indexDocs() {
    return this.getNumberAttribute('index_docs');
  }

  // index_meta_json - computed: true, optional: false, required: false
  public get indexMetaJson() {
    return this.getStringAttribute('index_meta_json');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // index_options_field - computed: true, optional: false, required: false
  private _indexOptionsField = new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexOptionsFieldList(this, "index_options_field", false);
  public get indexOptionsField() {
    return this._indexOptionsField;
  }

  // index_policy_field - computed: true, optional: false, required: false
  private _indexPolicyField = new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexPolicyFieldList(this, "index_policy_field", false);
  public get indexPolicyField() {
    return this._indexPolicyField;
  }

  // index_settings_field - computed: true, optional: false, required: false
  private _indexSettingsField = new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsIndexSettingsFieldList(this, "index_settings_field", false);
  public get indexSettingsField() {
    return this._indexSettingsField;
  }

  // index_status - computed: true, optional: false, required: false
  public get indexStatus() {
    return this.getStringAttribute('index_status');
  }

  // index_storage - computed: true, optional: false, required: false
  public get indexStorage() {
    return this.getNumberAttribute('index_storage');
  }

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return this.getStringAttribute('index_type');
  }
}

export class DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsOutputReference {
    return new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list tencentcloud_elasticsearch_describe_index_list}
*/
export class DataTencentcloudElasticsearchDescribeIndexList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_describe_index_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudElasticsearchDescribeIndexList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudElasticsearchDescribeIndexList to import
  * @param importFromId The id of the existing DataTencentcloudElasticsearchDescribeIndexList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudElasticsearchDescribeIndexList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_describe_index_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/elasticsearch_describe_index_list tencentcloud_elasticsearch_describe_index_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudElasticsearchDescribeIndexListConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudElasticsearchDescribeIndexListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_describe_index_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._indexName = config.indexName;
    this._indexStatusList = config.indexStatusList;
    this._indexType = config.indexType;
    this._instanceId = config.instanceId;
    this._order = config.order;
    this._orderBy = config.orderBy;
    this._password = config.password;
    this._resultOutputFile = config.resultOutputFile;
    this._username = config.username;
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

  // index_meta_fields - computed: true, optional: false, required: false
  private _indexMetaFields = new DataTencentcloudElasticsearchDescribeIndexListIndexMetaFieldsList(this, "index_meta_fields", false);
  public get indexMetaFields() {
    return this._indexMetaFields;
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // index_status_list - computed: false, optional: true, required: false
  private _indexStatusList?: string[]; 
  public get indexStatusList() {
    return cdktf.Fn.tolist(this.getListAttribute('index_status_list'));
  }
  public set indexStatusList(value: string[]) {
    this._indexStatusList = value;
  }
  public resetIndexStatusList() {
    this._indexStatusList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexStatusListInput() {
    return this._indexStatusList;
  }

  // index_type - computed: false, optional: false, required: true
  private _indexType?: string; 
  public get indexType() {
    return this.getStringAttribute('index_type');
  }
  public set indexType(value: string) {
    this._indexType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTypeInput() {
    return this._indexType;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      index_name: cdktf.stringToTerraform(this._indexName),
      index_status_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexStatusList),
      index_type: cdktf.stringToTerraform(this._indexType),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      password: cdktf.stringToTerraform(this._password),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      username: cdktf.stringToTerraform(this._username),
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
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_status_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexStatusList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      index_type: {
        value: cdktf.stringToHclTerraform(this._indexType),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
