// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCkafkaDatahubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic#id DataTencentcloudCkafkaDatahubTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of results returned this time, the default is 50, and the maximum value is 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic#limit DataTencentcloudCkafkaDatahubTopic#limit}
  */
  readonly limit?: number;
  /**
  * The offset position of this query, the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic#offset DataTencentcloudCkafkaDatahubTopic#offset}
  */
  readonly offset?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic#result_output_file DataTencentcloudCkafkaDatahubTopic#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * query key word.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic#search_word DataTencentcloudCkafkaDatahubTopic#search_word}
  */
  readonly searchWord?: string;
}
export interface DataTencentcloudCkafkaDatahubTopicTopicListStruct {
}

export function dataTencentcloudCkafkaDatahubTopicTopicListStructToTerraform(struct?: DataTencentcloudCkafkaDatahubTopicTopicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaDatahubTopicTopicListStructToHclTerraform(struct?: DataTencentcloudCkafkaDatahubTopicTopicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaDatahubTopicTopicListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaDatahubTopicTopicListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaDatahubTopicTopicListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // retention_ms - computed: true, optional: false, required: false
  public get retentionMs() {
    return this.getNumberAttribute('retention_ms');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
}

export class DataTencentcloudCkafkaDatahubTopicTopicListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaDatahubTopicTopicListStructOutputReference {
    return new DataTencentcloudCkafkaDatahubTopicTopicListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic tencentcloud_ckafka_datahub_topic}
*/
export class DataTencentcloudCkafkaDatahubTopic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_datahub_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCkafkaDatahubTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCkafkaDatahubTopic to import
  * @param importFromId The id of the existing DataTencentcloudCkafkaDatahubTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCkafkaDatahubTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_datahub_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_datahub_topic tencentcloud_ckafka_datahub_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCkafkaDatahubTopicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCkafkaDatahubTopicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_datahub_topic',
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
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
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

  // topic_list - computed: true, optional: false, required: false
  private _topicList = new DataTencentcloudCkafkaDatahubTopicTopicListStructList(this, "topic_list", false);
  public get topicList() {
    return this._topicList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
