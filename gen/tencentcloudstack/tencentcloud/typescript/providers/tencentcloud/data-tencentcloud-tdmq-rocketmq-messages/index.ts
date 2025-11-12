// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTdmqRocketmqMessagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#cluster_id DataTencentcloudTdmqRocketmqMessages#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#environment_id DataTencentcloudTdmqRocketmqMessages#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#id DataTencentcloudTdmqRocketmqMessages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Message ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#msg_id DataTencentcloudTdmqRocketmqMessages#msg_id}
  */
  readonly msgId: string;
  /**
  * The value is true when querying dead letters, only valid for Rocketmq.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#query_dlq_msg DataTencentcloudTdmqRocketmqMessages#query_dlq_msg}
  */
  readonly queryDlqMsg?: boolean | cdktf.IResolvable;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#result_output_file DataTencentcloudTdmqRocketmqMessages#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Topic, groupId is passed when querying dead letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#topic_name DataTencentcloudTdmqRocketmqMessages#topic_name}
  */
  readonly topicName: string;
}
export interface DataTencentcloudTdmqRocketmqMessagesMessageTracks {
}

export function dataTencentcloudTdmqRocketmqMessagesMessageTracksToTerraform(struct?: DataTencentcloudTdmqRocketmqMessagesMessageTracks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdmqRocketmqMessagesMessageTracksToHclTerraform(struct?: DataTencentcloudTdmqRocketmqMessagesMessageTracks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdmqRocketmqMessagesMessageTracksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdmqRocketmqMessagesMessageTracks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdmqRocketmqMessagesMessageTracks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consume_status - computed: true, optional: false, required: false
  public get consumeStatus() {
    return this.getStringAttribute('consume_status');
  }

  // exception_desc - computed: true, optional: false, required: false
  public get exceptionDesc() {
    return this.getStringAttribute('exception_desc');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // track_type - computed: true, optional: false, required: false
  public get trackType() {
    return this.getStringAttribute('track_type');
  }
}

export class DataTencentcloudTdmqRocketmqMessagesMessageTracksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdmqRocketmqMessagesMessageTracksOutputReference {
    return new DataTencentcloudTdmqRocketmqMessagesMessageTracksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages tencentcloud_tdmq_rocketmq_messages}
*/
export class DataTencentcloudTdmqRocketmqMessages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rocketmq_messages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTdmqRocketmqMessages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTdmqRocketmqMessages to import
  * @param importFromId The id of the existing DataTencentcloudTdmqRocketmqMessages that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTdmqRocketmqMessages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rocketmq_messages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tdmq_rocketmq_messages tencentcloud_tdmq_rocketmq_messages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTdmqRocketmqMessagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTdmqRocketmqMessagesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rocketmq_messages',
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
    this._clusterId = config.clusterId;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._msgId = config.msgId;
    this._queryDlqMsg = config.queryDlqMsg;
    this._resultOutputFile = config.resultOutputFile;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // message_tracks - computed: true, optional: false, required: false
  private _messageTracks = new DataTencentcloudTdmqRocketmqMessagesMessageTracksList(this, "message_tracks", false);
  public get messageTracks() {
    return this._messageTracks;
  }

  // msg_id - computed: false, optional: false, required: true
  private _msgId?: string; 
  public get msgId() {
    return this.getStringAttribute('msg_id');
  }
  public set msgId(value: string) {
    this._msgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgIdInput() {
    return this._msgId;
  }

  // produce_time - computed: true, optional: false, required: false
  public get produceTime() {
    return this.getStringAttribute('produce_time');
  }

  // producer_addr - computed: true, optional: false, required: false
  public get producerAddr() {
    return this.getStringAttribute('producer_addr');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // query_dlq_msg - computed: false, optional: true, required: false
  private _queryDlqMsg?: boolean | cdktf.IResolvable; 
  public get queryDlqMsg() {
    return this.getBooleanAttribute('query_dlq_msg');
  }
  public set queryDlqMsg(value: boolean | cdktf.IResolvable) {
    this._queryDlqMsg = value;
  }
  public resetQueryDlqMsg() {
    this._queryDlqMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDlqMsgInput() {
    return this._queryDlqMsg;
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

  // show_topic_name - computed: true, optional: false, required: false
  public get showTopicName() {
    return this.getStringAttribute('show_topic_name');
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      msg_id: cdktf.stringToTerraform(this._msgId),
      query_dlq_msg: cdktf.booleanToTerraform(this._queryDlqMsg),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      msg_id: {
        value: cdktf.stringToHclTerraform(this._msgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_dlq_msg: {
        value: cdktf.booleanToHclTerraform(this._queryDlqMsg),
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
