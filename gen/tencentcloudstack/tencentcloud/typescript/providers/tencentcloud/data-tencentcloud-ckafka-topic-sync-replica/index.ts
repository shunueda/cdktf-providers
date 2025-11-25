// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCkafkaTopicSyncReplicaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica#id DataTencentcloudCkafkaTopicSyncReplica#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * InstanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica#instance_id DataTencentcloudCkafkaTopicSyncReplica#instance_id}
  */
  readonly instanceId: string;
  /**
  * Filter only unsynced replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica#out_of_sync_replica_only DataTencentcloudCkafkaTopicSyncReplica#out_of_sync_replica_only}
  */
  readonly outOfSyncReplicaOnly?: boolean | cdktf.IResolvable;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica#result_output_file DataTencentcloudCkafkaTopicSyncReplica#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * TopicName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica#topic_name DataTencentcloudCkafkaTopicSyncReplica#topic_name}
  */
  readonly topicName: string;
}
export interface DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStruct {
}

export function dataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStructToTerraform(struct?: DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStructToHclTerraform(struct?: DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_offset - computed: true, optional: false, required: false
  public get beginOffset() {
    return this.getNumberAttribute('begin_offset');
  }

  // end_offset - computed: true, optional: false, required: false
  public get endOffset() {
    return this.getNumberAttribute('end_offset');
  }

  // in_sync_replica - computed: true, optional: false, required: false
  public get inSyncReplica() {
    return this.getStringAttribute('in_sync_replica');
  }

  // leader - computed: true, optional: false, required: false
  public get leader() {
    return this.getNumberAttribute('leader');
  }

  // message_count - computed: true, optional: false, required: false
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }

  // out_of_sync_replica - computed: true, optional: false, required: false
  public get outOfSyncReplica() {
    return this.getStringAttribute('out_of_sync_replica');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // replica - computed: true, optional: false, required: false
  public get replica() {
    return this.getStringAttribute('replica');
  }
}

export class DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStructOutputReference {
    return new DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica tencentcloud_ckafka_topic_sync_replica}
*/
export class DataTencentcloudCkafkaTopicSyncReplica extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_topic_sync_replica";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCkafkaTopicSyncReplica resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCkafkaTopicSyncReplica to import
  * @param importFromId The id of the existing DataTencentcloudCkafkaTopicSyncReplica that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCkafkaTopicSyncReplica to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_topic_sync_replica", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ckafka_topic_sync_replica tencentcloud_ckafka_topic_sync_replica} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCkafkaTopicSyncReplicaConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCkafkaTopicSyncReplicaConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_topic_sync_replica',
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
    this._instanceId = config.instanceId;
    this._outOfSyncReplicaOnly = config.outOfSyncReplicaOnly;
    this._resultOutputFile = config.resultOutputFile;
    this._topicName = config.topicName;
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

  // out_of_sync_replica_only - computed: false, optional: true, required: false
  private _outOfSyncReplicaOnly?: boolean | cdktf.IResolvable; 
  public get outOfSyncReplicaOnly() {
    return this.getBooleanAttribute('out_of_sync_replica_only');
  }
  public set outOfSyncReplicaOnly(value: boolean | cdktf.IResolvable) {
    this._outOfSyncReplicaOnly = value;
  }
  public resetOutOfSyncReplicaOnly() {
    this._outOfSyncReplicaOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSyncReplicaOnlyInput() {
    return this._outOfSyncReplicaOnly;
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

  // topic_in_sync_replica_list - computed: true, optional: false, required: false
  private _topicInSyncReplicaList = new DataTencentcloudCkafkaTopicSyncReplicaTopicInSyncReplicaListStructList(this, "topic_in_sync_replica_list", false);
  public get topicInSyncReplicaList() {
    return this._topicInSyncReplicaList;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      out_of_sync_replica_only: cdktf.booleanToTerraform(this._outOfSyncReplicaOnly),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      topic_name: cdktf.stringToTerraform(this._topicName),
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
      out_of_sync_replica_only: {
        value: cdktf.booleanToHclTerraform(this._outOfSyncReplicaOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
