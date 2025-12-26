// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CkafkaConsumerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * GroupName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group#group_name CkafkaConsumerGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group#id CkafkaConsumerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * InstanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group#instance_id CkafkaConsumerGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * array of topic names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group#topic_name_list CkafkaConsumerGroup#topic_name_list}
  */
  readonly topicNameList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group tencentcloud_ckafka_consumer_group}
*/
export class CkafkaConsumerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_consumer_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaConsumerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaConsumerGroup to import
  * @param importFromId The id of the existing CkafkaConsumerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaConsumerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_consumer_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_consumer_group tencentcloud_ckafka_consumer_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaConsumerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaConsumerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_consumer_group',
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
    this._groupName = config.groupName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._topicNameList = config.topicNameList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // topic_name_list - computed: false, optional: true, required: false
  private _topicNameList?: string[]; 
  public get topicNameList() {
    return cdktf.Fn.tolist(this.getListAttribute('topic_name_list'));
  }
  public set topicNameList(value: string[]) {
    this._topicNameList = value;
  }
  public resetTopicNameList() {
    this._topicNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameListInput() {
    return this._topicNameList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      topic_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topicNameList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topicNameList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
