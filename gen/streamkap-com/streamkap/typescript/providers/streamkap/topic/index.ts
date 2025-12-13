// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Partition Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/topic#partition_count Topic#partition_count}
  */
  readonly partitionCount: number;
  /**
  * Topic ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/topic#topic_id Topic#topic_id}
  */
  readonly topicId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/topic streamkap_topic}
*/
export class Topic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Topic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Topic to import
  * @param importFromId The id of the existing Topic that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Topic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/topic streamkap_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TopicConfig
  */
  public constructor(scope: Construct, id: string, config: TopicConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_topic',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.17',
        providerVersionConstraint: '2.1.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._partitionCount = config.partitionCount;
    this._topicId = config.topicId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // partition_count - computed: false, optional: false, required: true
  private _partitionCount?: number; 
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      partition_count: cdktf.numberToTerraform(this._partitionCount),
      topic_id: cdktf.stringToTerraform(this._topicId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      partition_count: {
        value: cdktf.numberToHclTerraform(this._partitionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
