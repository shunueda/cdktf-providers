// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_flow_logs_pubsub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpFlowLogsPubsubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_flow_logs_pubsub_topic#project_id GcpFlowLogsPubsubTopic#project_id}
  */
  readonly projectId: string;
  /**
  * Resource ID of the GCP Pub/Sub topic containing flow logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_flow_logs_pubsub_topic#pubsub_topic_id GcpFlowLogsPubsubTopic#pubsub_topic_id}
  */
  readonly pubsubTopicId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_flow_logs_pubsub_topic illumio-cloudsecure_gcp_flow_logs_pubsub_topic}
*/
export class GcpFlowLogsPubsubTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_gcp_flow_logs_pubsub_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpFlowLogsPubsubTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpFlowLogsPubsubTopic to import
  * @param importFromId The id of the existing GcpFlowLogsPubsubTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_flow_logs_pubsub_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpFlowLogsPubsubTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_gcp_flow_logs_pubsub_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_flow_logs_pubsub_topic illumio-cloudsecure_gcp_flow_logs_pubsub_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpFlowLogsPubsubTopicConfig
  */
  public constructor(scope: Construct, id: string, config: GcpFlowLogsPubsubTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_gcp_flow_logs_pubsub_topic',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._pubsubTopicId = config.pubsubTopicId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // pubsub_topic_id - computed: false, optional: false, required: true
  private _pubsubTopicId?: string; 
  public get pubsubTopicId() {
    return this.getStringAttribute('pubsub_topic_id');
  }
  public set pubsubTopicId(value: string) {
    this._pubsubTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicIdInput() {
    return this._pubsubTopicId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      pubsub_topic_id: cdktf.stringToTerraform(this._pubsubTopicId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pubsub_topic_id: {
        value: cdktf.stringToHclTerraform(this._pubsubTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
