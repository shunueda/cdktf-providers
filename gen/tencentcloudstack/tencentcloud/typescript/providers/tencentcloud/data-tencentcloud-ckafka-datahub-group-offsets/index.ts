// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCkafkaDatahubGroupOffsetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Kafka consumer group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets#group DataTencentcloudCkafkaDatahubGroupOffsets#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets#id DataTencentcloudCkafkaDatahubGroupOffsets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * topic name that the task subscribe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets#name DataTencentcloudCkafkaDatahubGroupOffsets#name}
  */
  readonly name: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets#result_output_file DataTencentcloudCkafkaDatahubGroupOffsets#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * fuzzy match topicName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets#search_word DataTencentcloudCkafkaDatahubGroupOffsets#search_word}
  */
  readonly searchWord?: string;
}
export interface DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitions {
}

export function dataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitionsToTerraform(struct?: DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitionsToHclTerraform(struct?: DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // lag - computed: true, optional: false, required: false
  public get lag() {
    return this.getNumberAttribute('lag');
  }

  // log_end_offset - computed: true, optional: false, required: false
  public get logEndOffset() {
    return this.getNumberAttribute('log_end_offset');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }
}

export class DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitionsOutputReference {
    return new DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStruct {
}

export function dataTencentcloudCkafkaDatahubGroupOffsetsTopicListStructToTerraform(struct?: DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubGroupOffsetsTopicListStructToHclTerraform(struct?: DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new DataTencentcloudCkafkaDatahubGroupOffsetsTopicListPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStructOutputReference {
    return new DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets tencentcloud_ckafka_datahub_group_offsets}
*/
export class DataTencentcloudCkafkaDatahubGroupOffsets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_datahub_group_offsets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCkafkaDatahubGroupOffsets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCkafkaDatahubGroupOffsets to import
  * @param importFromId The id of the existing DataTencentcloudCkafkaDatahubGroupOffsets that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCkafkaDatahubGroupOffsets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_datahub_group_offsets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_group_offsets tencentcloud_ckafka_datahub_group_offsets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCkafkaDatahubGroupOffsetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCkafkaDatahubGroupOffsetsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_datahub_group_offsets',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // topic_list - computed: true, optional: false, required: false
  private _topicList = new DataTencentcloudCkafkaDatahubGroupOffsetsTopicListStructList(this, "topic_list", false);
  public get topicList() {
    return this._topicList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
