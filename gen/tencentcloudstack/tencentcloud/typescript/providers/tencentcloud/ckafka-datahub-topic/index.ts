// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CkafkaDatahubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic#id CkafkaDatahubTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name, start with appid, which is a string of no more than 128 characters, must start with a letter, and the rest can contain letters, numbers, and dashes (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic#name CkafkaDatahubTopic#name}
  */
  readonly name: string;
  /**
  * Subject note, which is a string of no more than 64 characters, must start with a letter, and the rest can contain letters, numbers and dashes (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic#note CkafkaDatahubTopic#note}
  */
  readonly note?: string;
  /**
  * Number of Partitions, greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic#partition_num CkafkaDatahubTopic#partition_num}
  */
  readonly partitionNum: number;
  /**
  * Message retention time, in ms, the current minimum value is 60000 ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic#retention_ms CkafkaDatahubTopic#retention_ms}
  */
  readonly retentionMs: number;
  /**
  * Tags of dataHub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic#tags CkafkaDatahubTopic#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic tencentcloud_ckafka_datahub_topic}
*/
export class CkafkaDatahubTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_datahub_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaDatahubTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaDatahubTopic to import
  * @param importFromId The id of the existing CkafkaDatahubTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaDatahubTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_datahub_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ckafka_datahub_topic tencentcloud_ckafka_datahub_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaDatahubTopicConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaDatahubTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_datahub_topic',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._name = config.name;
    this._note = config.note;
    this._partitionNum = config.partitionNum;
    this._retentionMs = config.retentionMs;
    this._tags = config.tags;
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

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // partition_num - computed: false, optional: false, required: true
  private _partitionNum?: number; 
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }
  public set partitionNum(value: number) {
    this._partitionNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNumInput() {
    return this._partitionNum;
  }

  // retention_ms - computed: false, optional: false, required: true
  private _retentionMs?: number; 
  public get retentionMs() {
    return this.getNumberAttribute('retention_ms');
  }
  public set retentionMs(value: number) {
    this._retentionMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMsInput() {
    return this._retentionMs;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      note: cdktf.stringToTerraform(this._note),
      partition_num: cdktf.numberToTerraform(this._partitionNum),
      retention_ms: cdktf.numberToTerraform(this._retentionMs),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_num: {
        value: cdktf.numberToHclTerraform(this._partitionNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_ms: {
        value: cdktf.numberToHclTerraform(this._retentionMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
