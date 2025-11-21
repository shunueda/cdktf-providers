// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCkafkaDatahubTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#id DataTencentcloudCkafkaDatahubTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#resource DataTencentcloudCkafkaDatahubTask#resource}
  */
  readonly resource?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#result_output_file DataTencentcloudCkafkaDatahubTask#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * search key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#search_word DataTencentcloudCkafkaDatahubTask#search_word}
  */
  readonly searchWord?: string;
  /**
  * The source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#source_type DataTencentcloudCkafkaDatahubTask#source_type}
  */
  readonly sourceType?: string;
  /**
  * Destination type of dump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#target_type DataTencentcloudCkafkaDatahubTask#target_type}
  */
  readonly targetType?: string;
  /**
  * Task type, SOURCE|SINK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#task_type DataTencentcloudCkafkaDatahubTask#task_type}
  */
  readonly taskType?: string;
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropCls {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropClsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropClsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropClsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop_cls_log_set - computed: true, optional: false, required: false
  public get dropClsLogSet() {
    return this.getStringAttribute('drop_cls_log_set');
  }

  // drop_cls_owneruin - computed: true, optional: false, required: false
  public get dropClsOwneruin() {
    return this.getStringAttribute('drop_cls_owneruin');
  }

  // drop_cls_region - computed: true, optional: false, required: false
  public get dropClsRegion() {
    return this.getStringAttribute('drop_cls_region');
  }

  // drop_cls_topic_id - computed: true, optional: false, required: false
  public get dropClsTopicId() {
    return this.getStringAttribute('drop_cls_topic_id');
  }

  // drop_invalid_message_to_cls - computed: true, optional: false, required: false
  public get dropInvalidMessageToCls() {
    return this.getBooleanAttribute('drop_invalid_message_to_cls');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropClsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropClsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropClsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchema {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchemaToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchemaToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null - computed: true, optional: false, required: false
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchemaOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // drop_cls - computed: true, optional: false, required: false
  private _dropCls = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamDropClsList(this, "drop_cls", false);
  public get dropCls() {
    return this._dropCls;
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_key - computed: true, optional: false, required: false
  public get contentKey() {
    return this.getStringAttribute('content_key');
  }

  // decode_json - computed: true, optional: false, required: false
  public get decodeJson() {
    return this.getBooleanAttribute('decode_json');
  }

  // log_set - computed: true, optional: false, required: false
  public get logSet() {
    return this.getStringAttribute('log_set');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // time_field - computed: true, optional: false, required: false
  public get timeField() {
    return this.getStringAttribute('time_field');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_batch_size - computed: true, optional: false, required: false
  public get aggregateBatchSize() {
    return this.getNumberAttribute('aggregate_batch_size');
  }

  // aggregate_interval - computed: true, optional: false, required: false
  public get aggregateInterval() {
    return this.getNumberAttribute('aggregate_interval');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // directory_time_format - computed: true, optional: false, required: false
  public get directoryTimeFormat() {
    return this.getStringAttribute('directory_time_format');
  }

  // format_output_type - computed: true, optional: false, required: false
  public get formatOutputType() {
    return this.getStringAttribute('format_output_type');
  }

  // object_key - computed: true, optional: false, required: false
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }

  // object_key_prefix - computed: true, optional: false, required: false
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ctsdb_metric - computed: true, optional: false, required: false
  public get ctsdbMetric() {
    return this.getStringAttribute('ctsdb_metric');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_password - computed: true, optional: false, required: false
  public get groupPassword() {
    return this.getStringAttribute('group_password');
  }

  // group_user - computed: true, optional: false, required: false
  public get groupUser() {
    return this.getStringAttribute('group_user');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // tran_sql - computed: true, optional: false, required: false
  public get tranSql() {
    return this.getBooleanAttribute('tran_sql');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropCls {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropClsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropClsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropClsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop_cls_log_set - computed: true, optional: false, required: false
  public get dropClsLogSet() {
    return this.getStringAttribute('drop_cls_log_set');
  }

  // drop_cls_owneruin - computed: true, optional: false, required: false
  public get dropClsOwneruin() {
    return this.getStringAttribute('drop_cls_owneruin');
  }

  // drop_cls_region - computed: true, optional: false, required: false
  public get dropClsRegion() {
    return this.getStringAttribute('drop_cls_region');
  }

  // drop_cls_topic_id - computed: true, optional: false, required: false
  public get dropClsTopicId() {
    return this.getStringAttribute('drop_cls_topic_id');
  }

  // drop_invalid_message_to_cls - computed: true, optional: false, required: false
  public get dropInvalidMessageToCls() {
    return this.getBooleanAttribute('drop_invalid_message_to_cls');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropClsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropClsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropClsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappings {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappingsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappingsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappingsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // connector_sync_type - computed: true, optional: false, required: false
  public get connectorSyncType() {
    return this.getStringAttribute('connector_sync_type');
  }

  // enable_toleration - computed: true, optional: false, required: false
  public get enableToleration() {
    return this.getBooleanAttribute('enable_toleration');
  }

  // keep_partition - computed: true, optional: false, required: false
  public get keepPartition() {
    return this.getBooleanAttribute('keep_partition');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // qps_limit - computed: true, optional: false, required: false
  public get qpsLimit() {
    return this.getNumberAttribute('qps_limit');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // table_mappings - computed: true, optional: false, required: false
  private _tableMappings = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamTableMappingsList(this, "table_mappings", false);
  public get tableMappings() {
    return this._tableMappings;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }

  // use_table_mapping - computed: true, optional: false, required: false
  public get useTableMapping() {
    return this.getBooleanAttribute('use_table_mapping');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlq {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dlq_type - computed: true, optional: false, required: false
  public get dlqType() {
    return this.getStringAttribute('dlq_type');
  }

  // kafka_param - computed: true, optional: false, required: false
  private _kafkaParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqKafkaParamList(this, "kafka_param", false);
  public get kafkaParam() {
    return this._kafkaParam;
  }

  // max_retry_attempts - computed: true, optional: false, required: false
  public get maxRetryAttempts() {
    return this.getNumberAttribute('max_retry_attempts');
  }

  // retry_interval - computed: true, optional: false, required: false
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }

  // topic_param - computed: true, optional: false, required: false
  private _topicParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqTopicParamList(this, "topic_param", false);
  public get topicParam() {
    return this._topicParam;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_key - computed: true, optional: false, required: false
  public get contentKey() {
    return this.getStringAttribute('content_key');
  }

  // database_primary_key - computed: true, optional: false, required: false
  public get databasePrimaryKey() {
    return this.getStringAttribute('database_primary_key');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // document_id_field - computed: true, optional: false, required: false
  public get documentIdField() {
    return this.getStringAttribute('document_id_field');
  }

  // drop_cls - computed: true, optional: false, required: false
  private _dropCls = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropClsList(this, "drop_cls", false);
  public get dropCls() {
    return this._dropCls;
  }

  // drop_dlq - computed: true, optional: false, required: false
  private _dropDlq = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamDropDlqList(this, "drop_dlq", false);
  public get dropDlq() {
    return this._dropDlq;
  }

  // drop_invalid_json_message - computed: true, optional: false, required: false
  public get dropInvalidJsonMessage() {
    return this.getBooleanAttribute('drop_invalid_json_message');
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return this.getStringAttribute('index_type');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappings {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappingsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappingsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappingsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // connector_sync_type - computed: true, optional: false, required: false
  public get connectorSyncType() {
    return this.getStringAttribute('connector_sync_type');
  }

  // enable_toleration - computed: true, optional: false, required: false
  public get enableToleration() {
    return this.getBooleanAttribute('enable_toleration');
  }

  // keep_partition - computed: true, optional: false, required: false
  public get keepPartition() {
    return this.getBooleanAttribute('keep_partition');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // qps_limit - computed: true, optional: false, required: false
  public get qpsLimit() {
    return this.getNumberAttribute('qps_limit');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // table_mappings - computed: true, optional: false, required: false
  private _tableMappings = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamTableMappingsList(this, "table_mappings", false);
  public get tableMappings() {
    return this._tableMappings;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }

  // use_table_mapping - computed: true, optional: false, required: false
  public get useTableMapping() {
    return this.getBooleanAttribute('use_table_mapping');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // include_content_changes - computed: true, optional: false, required: false
  public get includeContentChanges() {
    return this.getStringAttribute('include_content_changes');
  }

  // include_query - computed: true, optional: false, required: false
  public get includeQuery() {
    return this.getBooleanAttribute('include_query');
  }

  // is_table_prefix - computed: true, optional: false, required: false
  public get isTablePrefix() {
    return this.getBooleanAttribute('is_table_prefix');
  }

  // key_columns - computed: true, optional: false, required: false
  public get keyColumns() {
    return this.getStringAttribute('key_columns');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // record_with_schema - computed: true, optional: false, required: false
  public get recordWithSchema() {
    return this.getBooleanAttribute('record_with_schema');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // copy_existing - computed: true, optional: false, required: false
  public get copyExisting() {
    return this.getBooleanAttribute('copy_existing');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // listening_event - computed: true, optional: false, required: false
  public get listeningEvent() {
    return this.getStringAttribute('listening_event');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pipeline - computed: true, optional: false, required: false
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // read_preference - computed: true, optional: false, required: false
  public get readPreference() {
    return this.getStringAttribute('read_preference');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMapping {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMappingToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMappingToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null - computed: true, optional: false, required: false
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }

  // auto_increment - computed: true, optional: false, required: false
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_size - computed: true, optional: false, required: false
  public get columnSize() {
    return this.getStringAttribute('column_size');
  }

  // decimal_digits - computed: true, optional: false, required: false
  public get decimalDigits() {
    return this.getStringAttribute('decimal_digits');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // extra_info - computed: true, optional: false, required: false
  public get extraInfo() {
    return this.getStringAttribute('extra_info');
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMappingOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropCls {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropClsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropClsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropClsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop_cls_log_set - computed: true, optional: false, required: false
  public get dropClsLogSet() {
    return this.getStringAttribute('drop_cls_log_set');
  }

  // drop_cls_owneruin - computed: true, optional: false, required: false
  public get dropClsOwneruin() {
    return this.getStringAttribute('drop_cls_owneruin');
  }

  // drop_cls_region - computed: true, optional: false, required: false
  public get dropClsRegion() {
    return this.getStringAttribute('drop_cls_region');
  }

  // drop_cls_topic_id - computed: true, optional: false, required: false
  public get dropClsTopicId() {
    return this.getStringAttribute('drop_cls_topic_id');
  }

  // drop_invalid_message_to_cls - computed: true, optional: false, required: false
  public get dropInvalidMessageToCls() {
    return this.getBooleanAttribute('drop_invalid_message_to_cls');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropClsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropClsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropClsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_increment_column - computed: true, optional: false, required: false
  public get dataSourceIncrementColumn() {
    return this.getStringAttribute('data_source_increment_column');
  }

  // data_source_increment_mode - computed: true, optional: false, required: false
  public get dataSourceIncrementMode() {
    return this.getStringAttribute('data_source_increment_mode');
  }

  // data_source_monitor_mode - computed: true, optional: false, required: false
  public get dataSourceMonitorMode() {
    return this.getStringAttribute('data_source_monitor_mode');
  }

  // data_source_monitor_resource - computed: true, optional: false, required: false
  public get dataSourceMonitorResource() {
    return this.getStringAttribute('data_source_monitor_resource');
  }

  // data_source_start_from - computed: true, optional: false, required: false
  public get dataSourceStartFrom() {
    return this.getStringAttribute('data_source_start_from');
  }

  // data_target_insert_mode - computed: true, optional: false, required: false
  public get dataTargetInsertMode() {
    return this.getStringAttribute('data_target_insert_mode');
  }

  // data_target_primary_key_field - computed: true, optional: false, required: false
  public get dataTargetPrimaryKeyField() {
    return this.getStringAttribute('data_target_primary_key_field');
  }

  // data_target_record_mapping - computed: true, optional: false, required: false
  private _dataTargetRecordMapping = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDataTargetRecordMappingList(this, "data_target_record_mapping", false);
  public get dataTargetRecordMapping() {
    return this._dataTargetRecordMapping;
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // ddl_topic - computed: true, optional: false, required: false
  public get ddlTopic() {
    return this.getStringAttribute('ddl_topic');
  }

  // drop_cls - computed: true, optional: false, required: false
  private _dropCls = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamDropClsList(this, "drop_cls", false);
  public get dropCls() {
    return this._dropCls;
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // include_content_changes - computed: true, optional: false, required: false
  public get includeContentChanges() {
    return this.getStringAttribute('include_content_changes');
  }

  // include_query - computed: true, optional: false, required: false
  public get includeQuery() {
    return this.getBooleanAttribute('include_query');
  }

  // is_table_prefix - computed: true, optional: false, required: false
  public get isTablePrefix() {
    return this.getBooleanAttribute('is_table_prefix');
  }

  // is_table_regular - computed: true, optional: false, required: false
  public get isTableRegular() {
    return this.getBooleanAttribute('is_table_regular');
  }

  // key_columns - computed: true, optional: false, required: false
  public get keyColumns() {
    return this.getStringAttribute('key_columns');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // record_with_schema - computed: true, optional: false, required: false
  public get recordWithSchema() {
    return this.getBooleanAttribute('record_with_schema');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // signal_database - computed: true, optional: false, required: false
  public get signalDatabase() {
    return this.getStringAttribute('signal_database');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // topic_regex - computed: true, optional: false, required: false
  public get topicRegex() {
    return this.getStringAttribute('topic_regex');
  }

  // topic_replacement - computed: true, optional: false, required: false
  public get topicReplacement() {
    return this.getStringAttribute('topic_replacement');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMapping {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMappingToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMappingToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null - computed: true, optional: false, required: false
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }

  // auto_increment - computed: true, optional: false, required: false
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_size - computed: true, optional: false, required: false
  public get columnSize() {
    return this.getStringAttribute('column_size');
  }

  // decimal_digits - computed: true, optional: false, required: false
  public get decimalDigits() {
    return this.getStringAttribute('decimal_digits');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // extra_info - computed: true, optional: false, required: false
  public get extraInfo() {
    return this.getStringAttribute('extra_info');
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMappingOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // data_target_insert_mode - computed: true, optional: false, required: false
  public get dataTargetInsertMode() {
    return this.getStringAttribute('data_target_insert_mode');
  }

  // data_target_primary_key_field - computed: true, optional: false, required: false
  public get dataTargetPrimaryKeyField() {
    return this.getStringAttribute('data_target_primary_key_field');
  }

  // data_target_record_mapping - computed: true, optional: false, required: false
  private _dataTargetRecordMapping = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamDataTargetRecordMappingList(this, "data_target_record_mapping", false);
  public get dataTargetRecordMapping() {
    return this._dataTargetRecordMapping;
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // is_table_regular - computed: true, optional: false, required: false
  public get isTableRegular() {
    return this.getBooleanAttribute('is_table_regular');
  }

  // key_columns - computed: true, optional: false, required: false
  public get keyColumns() {
    return this.getStringAttribute('key_columns');
  }

  // plugin_name - computed: true, optional: false, required: false
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }

  // record_with_schema - computed: true, optional: false, required: false
  public get recordWithSchema() {
    return this.getBooleanAttribute('record_with_schema');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bid - computed: true, optional: false, required: false
  public get bid() {
    return this.getStringAttribute('bid');
  }

  // is_domestic - computed: true, optional: false, required: false
  public get isDomestic() {
    return this.getBooleanAttribute('is_domestic');
  }

  // tdw_host - computed: true, optional: false, required: false
  public get tdwHost() {
    return this.getStringAttribute('tdw_host');
  }

  // tdw_port - computed: true, optional: false, required: false
  public get tdwPort() {
    return this.getNumberAttribute('tdw_port');
  }

  // tid - computed: true, optional: false, required: false
  public get tid() {
    return this.getStringAttribute('tid');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListSourceResource {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListSourceResourceToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListSourceResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListSourceResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListSourceResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // click_house_param - computed: true, optional: false, required: false
  private _clickHouseParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClickHouseParamList(this, "click_house_param", false);
  public get clickHouseParam() {
    return this._clickHouseParam;
  }

  // cls_param - computed: true, optional: false, required: false
  private _clsParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceClsParamList(this, "cls_param", false);
  public get clsParam() {
    return this._clsParam;
  }

  // cos_param - computed: true, optional: false, required: false
  private _cosParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCosParamList(this, "cos_param", false);
  public get cosParam() {
    return this._cosParam;
  }

  // ctsdb_param - computed: true, optional: false, required: false
  private _ctsdbParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceCtsdbParamList(this, "ctsdb_param", false);
  public get ctsdbParam() {
    return this._ctsdbParam;
  }

  // dts_param - computed: true, optional: false, required: false
  private _dtsParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceDtsParamList(this, "dts_param", false);
  public get dtsParam() {
    return this._dtsParam;
  }

  // es_param - computed: true, optional: false, required: false
  private _esParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEsParamList(this, "es_param", false);
  public get esParam() {
    return this._esParam;
  }

  // event_bus_param - computed: true, optional: false, required: false
  private _eventBusParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceEventBusParamList(this, "event_bus_param", false);
  public get eventBusParam() {
    return this._eventBusParam;
  }

  // kafka_param - computed: true, optional: false, required: false
  private _kafkaParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceKafkaParamList(this, "kafka_param", false);
  public get kafkaParam() {
    return this._kafkaParam;
  }

  // maria_db_param - computed: true, optional: false, required: false
  private _mariaDbParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMariaDbParamList(this, "maria_db_param", false);
  public get mariaDbParam() {
    return this._mariaDbParam;
  }

  // mongo_db_param - computed: true, optional: false, required: false
  private _mongoDbParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMongoDbParamList(this, "mongo_db_param", false);
  public get mongoDbParam() {
    return this._mongoDbParam;
  }

  // my_sql_param - computed: true, optional: false, required: false
  private _mySqlParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceMySqlParamList(this, "my_sql_param", false);
  public get mySqlParam() {
    return this._mySqlParam;
  }

  // postgre_sql_param - computed: true, optional: false, required: false
  private _postgreSqlParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourcePostgreSqlParamList(this, "postgre_sql_param", false);
  public get postgreSqlParam() {
    return this._postgreSqlParam;
  }

  // scf_param - computed: true, optional: false, required: false
  private _scfParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceScfParamList(this, "scf_param", false);
  public get scfParam() {
    return this._scfParam;
  }

  // sql_server_param - computed: true, optional: false, required: false
  private _sqlServerParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceSqlServerParamList(this, "sql_server_param", false);
  public get sqlServerParam() {
    return this._sqlServerParam;
  }

  // tdw_param - computed: true, optional: false, required: false
  private _tdwParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTdwParamList(this, "tdw_param", false);
  public get tdwParam() {
    return this._tdwParam;
  }

  // topic_param - computed: true, optional: false, required: false
  private _topicParam = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceTopicParamList(this, "topic_param", false);
  public get topicParam() {
    return this._topicParam;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropCls {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropClsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropClsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropClsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop_cls_log_set - computed: true, optional: false, required: false
  public get dropClsLogSet() {
    return this.getStringAttribute('drop_cls_log_set');
  }

  // drop_cls_owneruin - computed: true, optional: false, required: false
  public get dropClsOwneruin() {
    return this.getStringAttribute('drop_cls_owneruin');
  }

  // drop_cls_region - computed: true, optional: false, required: false
  public get dropClsRegion() {
    return this.getStringAttribute('drop_cls_region');
  }

  // drop_cls_topic_id - computed: true, optional: false, required: false
  public get dropClsTopicId() {
    return this.getStringAttribute('drop_cls_topic_id');
  }

  // drop_invalid_message_to_cls - computed: true, optional: false, required: false
  public get dropInvalidMessageToCls() {
    return this.getBooleanAttribute('drop_invalid_message_to_cls');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropClsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropClsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropClsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchema {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchemaToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchemaToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null - computed: true, optional: false, required: false
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchemaOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // drop_cls - computed: true, optional: false, required: false
  private _dropCls = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamDropClsList(this, "drop_cls", false);
  public get dropCls() {
    return this._dropCls;
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_key - computed: true, optional: false, required: false
  public get contentKey() {
    return this.getStringAttribute('content_key');
  }

  // decode_json - computed: true, optional: false, required: false
  public get decodeJson() {
    return this.getBooleanAttribute('decode_json');
  }

  // log_set - computed: true, optional: false, required: false
  public get logSet() {
    return this.getStringAttribute('log_set');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // time_field - computed: true, optional: false, required: false
  public get timeField() {
    return this.getStringAttribute('time_field');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_batch_size - computed: true, optional: false, required: false
  public get aggregateBatchSize() {
    return this.getNumberAttribute('aggregate_batch_size');
  }

  // aggregate_interval - computed: true, optional: false, required: false
  public get aggregateInterval() {
    return this.getNumberAttribute('aggregate_interval');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // directory_time_format - computed: true, optional: false, required: false
  public get directoryTimeFormat() {
    return this.getStringAttribute('directory_time_format');
  }

  // format_output_type - computed: true, optional: false, required: false
  public get formatOutputType() {
    return this.getStringAttribute('format_output_type');
  }

  // object_key - computed: true, optional: false, required: false
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }

  // object_key_prefix - computed: true, optional: false, required: false
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ctsdb_metric - computed: true, optional: false, required: false
  public get ctsdbMetric() {
    return this.getStringAttribute('ctsdb_metric');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_password - computed: true, optional: false, required: false
  public get groupPassword() {
    return this.getStringAttribute('group_password');
  }

  // group_user - computed: true, optional: false, required: false
  public get groupUser() {
    return this.getStringAttribute('group_user');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // tran_sql - computed: true, optional: false, required: false
  public get tranSql() {
    return this.getBooleanAttribute('tran_sql');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropCls {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropClsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropClsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropClsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop_cls_log_set - computed: true, optional: false, required: false
  public get dropClsLogSet() {
    return this.getStringAttribute('drop_cls_log_set');
  }

  // drop_cls_owneruin - computed: true, optional: false, required: false
  public get dropClsOwneruin() {
    return this.getStringAttribute('drop_cls_owneruin');
  }

  // drop_cls_region - computed: true, optional: false, required: false
  public get dropClsRegion() {
    return this.getStringAttribute('drop_cls_region');
  }

  // drop_cls_topic_id - computed: true, optional: false, required: false
  public get dropClsTopicId() {
    return this.getStringAttribute('drop_cls_topic_id');
  }

  // drop_invalid_message_to_cls - computed: true, optional: false, required: false
  public get dropInvalidMessageToCls() {
    return this.getBooleanAttribute('drop_invalid_message_to_cls');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropClsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropClsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropClsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappings {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappingsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappingsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappingsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // connector_sync_type - computed: true, optional: false, required: false
  public get connectorSyncType() {
    return this.getStringAttribute('connector_sync_type');
  }

  // enable_toleration - computed: true, optional: false, required: false
  public get enableToleration() {
    return this.getBooleanAttribute('enable_toleration');
  }

  // keep_partition - computed: true, optional: false, required: false
  public get keepPartition() {
    return this.getBooleanAttribute('keep_partition');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // qps_limit - computed: true, optional: false, required: false
  public get qpsLimit() {
    return this.getNumberAttribute('qps_limit');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // table_mappings - computed: true, optional: false, required: false
  private _tableMappings = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamTableMappingsList(this, "table_mappings", false);
  public get tableMappings() {
    return this._tableMappings;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }

  // use_table_mapping - computed: true, optional: false, required: false
  public get useTableMapping() {
    return this.getBooleanAttribute('use_table_mapping');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlq {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dlq_type - computed: true, optional: false, required: false
  public get dlqType() {
    return this.getStringAttribute('dlq_type');
  }

  // kafka_param - computed: true, optional: false, required: false
  private _kafkaParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqKafkaParamList(this, "kafka_param", false);
  public get kafkaParam() {
    return this._kafkaParam;
  }

  // max_retry_attempts - computed: true, optional: false, required: false
  public get maxRetryAttempts() {
    return this.getNumberAttribute('max_retry_attempts');
  }

  // retry_interval - computed: true, optional: false, required: false
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }

  // topic_param - computed: true, optional: false, required: false
  private _topicParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqTopicParamList(this, "topic_param", false);
  public get topicParam() {
    return this._topicParam;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_key - computed: true, optional: false, required: false
  public get contentKey() {
    return this.getStringAttribute('content_key');
  }

  // database_primary_key - computed: true, optional: false, required: false
  public get databasePrimaryKey() {
    return this.getStringAttribute('database_primary_key');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // document_id_field - computed: true, optional: false, required: false
  public get documentIdField() {
    return this.getStringAttribute('document_id_field');
  }

  // drop_cls - computed: true, optional: false, required: false
  private _dropCls = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropClsList(this, "drop_cls", false);
  public get dropCls() {
    return this._dropCls;
  }

  // drop_dlq - computed: true, optional: false, required: false
  private _dropDlq = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamDropDlqList(this, "drop_dlq", false);
  public get dropDlq() {
    return this._dropDlq;
  }

  // drop_invalid_json_message - computed: true, optional: false, required: false
  public get dropInvalidJsonMessage() {
    return this.getBooleanAttribute('drop_invalid_json_message');
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return this.getStringAttribute('index_type');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappings {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappingsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappingsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappingsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // connector_sync_type - computed: true, optional: false, required: false
  public get connectorSyncType() {
    return this.getStringAttribute('connector_sync_type');
  }

  // enable_toleration - computed: true, optional: false, required: false
  public get enableToleration() {
    return this.getBooleanAttribute('enable_toleration');
  }

  // keep_partition - computed: true, optional: false, required: false
  public get keepPartition() {
    return this.getBooleanAttribute('keep_partition');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // qps_limit - computed: true, optional: false, required: false
  public get qpsLimit() {
    return this.getNumberAttribute('qps_limit');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // table_mappings - computed: true, optional: false, required: false
  private _tableMappings = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamTableMappingsList(this, "table_mappings", false);
  public get tableMappings() {
    return this._tableMappings;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }

  // use_table_mapping - computed: true, optional: false, required: false
  public get useTableMapping() {
    return this.getBooleanAttribute('use_table_mapping');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // include_content_changes - computed: true, optional: false, required: false
  public get includeContentChanges() {
    return this.getStringAttribute('include_content_changes');
  }

  // include_query - computed: true, optional: false, required: false
  public get includeQuery() {
    return this.getBooleanAttribute('include_query');
  }

  // is_table_prefix - computed: true, optional: false, required: false
  public get isTablePrefix() {
    return this.getBooleanAttribute('is_table_prefix');
  }

  // key_columns - computed: true, optional: false, required: false
  public get keyColumns() {
    return this.getStringAttribute('key_columns');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // record_with_schema - computed: true, optional: false, required: false
  public get recordWithSchema() {
    return this.getBooleanAttribute('record_with_schema');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // copy_existing - computed: true, optional: false, required: false
  public get copyExisting() {
    return this.getBooleanAttribute('copy_existing');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // listening_event - computed: true, optional: false, required: false
  public get listeningEvent() {
    return this.getStringAttribute('listening_event');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pipeline - computed: true, optional: false, required: false
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // read_preference - computed: true, optional: false, required: false
  public get readPreference() {
    return this.getStringAttribute('read_preference');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMapping {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMappingToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMappingToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null - computed: true, optional: false, required: false
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }

  // auto_increment - computed: true, optional: false, required: false
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_size - computed: true, optional: false, required: false
  public get columnSize() {
    return this.getStringAttribute('column_size');
  }

  // decimal_digits - computed: true, optional: false, required: false
  public get decimalDigits() {
    return this.getStringAttribute('decimal_digits');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // extra_info - computed: true, optional: false, required: false
  public get extraInfo() {
    return this.getStringAttribute('extra_info');
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMappingOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropCls {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropClsToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropClsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropClsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop_cls_log_set - computed: true, optional: false, required: false
  public get dropClsLogSet() {
    return this.getStringAttribute('drop_cls_log_set');
  }

  // drop_cls_owneruin - computed: true, optional: false, required: false
  public get dropClsOwneruin() {
    return this.getStringAttribute('drop_cls_owneruin');
  }

  // drop_cls_region - computed: true, optional: false, required: false
  public get dropClsRegion() {
    return this.getStringAttribute('drop_cls_region');
  }

  // drop_cls_topic_id - computed: true, optional: false, required: false
  public get dropClsTopicId() {
    return this.getStringAttribute('drop_cls_topic_id');
  }

  // drop_invalid_message_to_cls - computed: true, optional: false, required: false
  public get dropInvalidMessageToCls() {
    return this.getBooleanAttribute('drop_invalid_message_to_cls');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropClsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropClsOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropClsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_increment_column - computed: true, optional: false, required: false
  public get dataSourceIncrementColumn() {
    return this.getStringAttribute('data_source_increment_column');
  }

  // data_source_increment_mode - computed: true, optional: false, required: false
  public get dataSourceIncrementMode() {
    return this.getStringAttribute('data_source_increment_mode');
  }

  // data_source_monitor_mode - computed: true, optional: false, required: false
  public get dataSourceMonitorMode() {
    return this.getStringAttribute('data_source_monitor_mode');
  }

  // data_source_monitor_resource - computed: true, optional: false, required: false
  public get dataSourceMonitorResource() {
    return this.getStringAttribute('data_source_monitor_resource');
  }

  // data_source_start_from - computed: true, optional: false, required: false
  public get dataSourceStartFrom() {
    return this.getStringAttribute('data_source_start_from');
  }

  // data_target_insert_mode - computed: true, optional: false, required: false
  public get dataTargetInsertMode() {
    return this.getStringAttribute('data_target_insert_mode');
  }

  // data_target_primary_key_field - computed: true, optional: false, required: false
  public get dataTargetPrimaryKeyField() {
    return this.getStringAttribute('data_target_primary_key_field');
  }

  // data_target_record_mapping - computed: true, optional: false, required: false
  private _dataTargetRecordMapping = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDataTargetRecordMappingList(this, "data_target_record_mapping", false);
  public get dataTargetRecordMapping() {
    return this._dataTargetRecordMapping;
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // ddl_topic - computed: true, optional: false, required: false
  public get ddlTopic() {
    return this.getStringAttribute('ddl_topic');
  }

  // drop_cls - computed: true, optional: false, required: false
  private _dropCls = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamDropClsList(this, "drop_cls", false);
  public get dropCls() {
    return this._dropCls;
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // include_content_changes - computed: true, optional: false, required: false
  public get includeContentChanges() {
    return this.getStringAttribute('include_content_changes');
  }

  // include_query - computed: true, optional: false, required: false
  public get includeQuery() {
    return this.getBooleanAttribute('include_query');
  }

  // is_table_prefix - computed: true, optional: false, required: false
  public get isTablePrefix() {
    return this.getBooleanAttribute('is_table_prefix');
  }

  // is_table_regular - computed: true, optional: false, required: false
  public get isTableRegular() {
    return this.getBooleanAttribute('is_table_regular');
  }

  // key_columns - computed: true, optional: false, required: false
  public get keyColumns() {
    return this.getStringAttribute('key_columns');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // record_with_schema - computed: true, optional: false, required: false
  public get recordWithSchema() {
    return this.getBooleanAttribute('record_with_schema');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // signal_database - computed: true, optional: false, required: false
  public get signalDatabase() {
    return this.getStringAttribute('signal_database');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // topic_regex - computed: true, optional: false, required: false
  public get topicRegex() {
    return this.getStringAttribute('topic_regex');
  }

  // topic_replacement - computed: true, optional: false, required: false
  public get topicReplacement() {
    return this.getStringAttribute('topic_replacement');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMapping {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMappingToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMappingToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null - computed: true, optional: false, required: false
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }

  // auto_increment - computed: true, optional: false, required: false
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_size - computed: true, optional: false, required: false
  public get columnSize() {
    return this.getStringAttribute('column_size');
  }

  // decimal_digits - computed: true, optional: false, required: false
  public get decimalDigits() {
    return this.getStringAttribute('decimal_digits');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // extra_info - computed: true, optional: false, required: false
  public get extraInfo() {
    return this.getStringAttribute('extra_info');
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMappingOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // data_target_insert_mode - computed: true, optional: false, required: false
  public get dataTargetInsertMode() {
    return this.getStringAttribute('data_target_insert_mode');
  }

  // data_target_primary_key_field - computed: true, optional: false, required: false
  public get dataTargetPrimaryKeyField() {
    return this.getStringAttribute('data_target_primary_key_field');
  }

  // data_target_record_mapping - computed: true, optional: false, required: false
  private _dataTargetRecordMapping = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamDataTargetRecordMappingList(this, "data_target_record_mapping", false);
  public get dataTargetRecordMapping() {
    return this._dataTargetRecordMapping;
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // drop_invalid_message - computed: true, optional: false, required: false
  public get dropInvalidMessage() {
    return this.getBooleanAttribute('drop_invalid_message');
  }

  // is_table_regular - computed: true, optional: false, required: false
  public get isTableRegular() {
    return this.getBooleanAttribute('is_table_regular');
  }

  // key_columns - computed: true, optional: false, required: false
  public get keyColumns() {
    return this.getStringAttribute('key_columns');
  }

  // plugin_name - computed: true, optional: false, required: false
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }

  // record_with_schema - computed: true, optional: false, required: false
  public get recordWithSchema() {
    return this.getBooleanAttribute('record_with_schema');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getStringAttribute('snapshot_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bid - computed: true, optional: false, required: false
  public get bid() {
    return this.getStringAttribute('bid');
  }

  // is_domestic - computed: true, optional: false, required: false
  public get isDomestic() {
    return this.getBooleanAttribute('is_domestic');
  }

  // tdw_host - computed: true, optional: false, required: false
  public get tdwHost() {
    return this.getStringAttribute('tdw_host');
  }

  // tdw_port - computed: true, optional: false, required: false
  public get tdwPort() {
    return this.getNumberAttribute('tdw_port');
  }

  // tid - computed: true, optional: false, required: false
  public get tid() {
    return this.getStringAttribute('tid');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParam {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParamToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParamToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // msg_multiple - computed: true, optional: false, required: false
  public get msgMultiple() {
    return this.getNumberAttribute('msg_multiple');
  }

  // offset_type - computed: true, optional: false, required: false
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // use_auto_create_topic - computed: true, optional: false, required: false
  public get useAutoCreateTopic() {
    return this.getBooleanAttribute('use_auto_create_topic');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParamOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListTargetResource {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListTargetResourceToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListTargetResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListTargetResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListTargetResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // click_house_param - computed: true, optional: false, required: false
  private _clickHouseParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClickHouseParamList(this, "click_house_param", false);
  public get clickHouseParam() {
    return this._clickHouseParam;
  }

  // cls_param - computed: true, optional: false, required: false
  private _clsParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceClsParamList(this, "cls_param", false);
  public get clsParam() {
    return this._clsParam;
  }

  // cos_param - computed: true, optional: false, required: false
  private _cosParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCosParamList(this, "cos_param", false);
  public get cosParam() {
    return this._cosParam;
  }

  // ctsdb_param - computed: true, optional: false, required: false
  private _ctsdbParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceCtsdbParamList(this, "ctsdb_param", false);
  public get ctsdbParam() {
    return this._ctsdbParam;
  }

  // dts_param - computed: true, optional: false, required: false
  private _dtsParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceDtsParamList(this, "dts_param", false);
  public get dtsParam() {
    return this._dtsParam;
  }

  // es_param - computed: true, optional: false, required: false
  private _esParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEsParamList(this, "es_param", false);
  public get esParam() {
    return this._esParam;
  }

  // event_bus_param - computed: true, optional: false, required: false
  private _eventBusParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceEventBusParamList(this, "event_bus_param", false);
  public get eventBusParam() {
    return this._eventBusParam;
  }

  // kafka_param - computed: true, optional: false, required: false
  private _kafkaParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceKafkaParamList(this, "kafka_param", false);
  public get kafkaParam() {
    return this._kafkaParam;
  }

  // maria_db_param - computed: true, optional: false, required: false
  private _mariaDbParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMariaDbParamList(this, "maria_db_param", false);
  public get mariaDbParam() {
    return this._mariaDbParam;
  }

  // mongo_db_param - computed: true, optional: false, required: false
  private _mongoDbParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMongoDbParamList(this, "mongo_db_param", false);
  public get mongoDbParam() {
    return this._mongoDbParam;
  }

  // my_sql_param - computed: true, optional: false, required: false
  private _mySqlParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceMySqlParamList(this, "my_sql_param", false);
  public get mySqlParam() {
    return this._mySqlParam;
  }

  // postgre_sql_param - computed: true, optional: false, required: false
  private _postgreSqlParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourcePostgreSqlParamList(this, "postgre_sql_param", false);
  public get postgreSqlParam() {
    return this._postgreSqlParam;
  }

  // scf_param - computed: true, optional: false, required: false
  private _scfParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceScfParamList(this, "scf_param", false);
  public get scfParam() {
    return this._scfParam;
  }

  // sql_server_param - computed: true, optional: false, required: false
  private _sqlServerParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceSqlServerParamList(this, "sql_server_param", false);
  public get sqlServerParam() {
    return this._sqlServerParam;
  }

  // tdw_param - computed: true, optional: false, required: false
  private _tdwParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTdwParamList(this, "tdw_param", false);
  public get tdwParam() {
    return this._tdwParam;
  }

  // topic_param - computed: true, optional: false, required: false
  private _topicParam = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceTopicParamList(this, "topic_param", false);
  public get topicParam() {
    return this._topicParam;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubTaskTaskListStruct {
}

export function dataTencentcloudCkafkaDatahubTaskTaskListStructToTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTaskTaskListStructToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTaskTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTaskTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTaskTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTaskTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // datahub_id - computed: true, optional: false, required: false
  public get datahubId() {
    return this.getStringAttribute('datahub_id');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // source_resource - computed: true, optional: false, required: false
  private _sourceResource = new DataTencentcloudCkafkaDatahubTaskTaskListSourceResourceList(this, "source_resource", false);
  public get sourceResource() {
    return this._sourceResource;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // step_list - computed: true, optional: false, required: false
  public get stepList() {
    return cdktf.Fn.tolist(this.getListAttribute('step_list'));
  }

  // target_resource - computed: true, optional: false, required: false
  private _targetResource = new DataTencentcloudCkafkaDatahubTaskTaskListTargetResourceList(this, "target_resource", false);
  public get targetResource() {
    return this._targetResource;
  }

  // task_current_step - computed: true, optional: false, required: false
  public get taskCurrentStep() {
    return this.getStringAttribute('task_current_step');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_progress - computed: true, optional: false, required: false
  public get taskProgress() {
    return this.getNumberAttribute('task_progress');
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class DataTencentcloudCkafkaDatahubTaskTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTaskTaskListStructOutputReference {
    return new DataTencentcloudCkafkaDatahubTaskTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task tencentcloud_ckafka_datahub_task}
*/
export class DataTencentcloudCkafkaDatahubTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_datahub_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCkafkaDatahubTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCkafkaDatahubTask to import
  * @param importFromId The id of the existing DataTencentcloudCkafkaDatahubTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCkafkaDatahubTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_datahub_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/ckafka_datahub_task tencentcloud_ckafka_datahub_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCkafkaDatahubTaskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCkafkaDatahubTaskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_datahub_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._resource = config.resource;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
    this._sourceType = config.sourceType;
    this._targetType = config.targetType;
    this._taskType = config.taskType;
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // task_list - computed: true, optional: false, required: false
  private _taskList = new DataTencentcloudCkafkaDatahubTaskTaskListStructList(this, "task_list", false);
  public get taskList() {
    return this._taskList;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource: cdktf.stringToTerraform(this._resource),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
      source_type: cdktf.stringToTerraform(this._sourceType),
      target_type: cdktf.stringToTerraform(this._targetType),
      task_type: cdktf.stringToTerraform(this._taskType),
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
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
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
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
