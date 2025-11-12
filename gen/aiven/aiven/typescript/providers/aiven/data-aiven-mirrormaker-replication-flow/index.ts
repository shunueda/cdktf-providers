// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenMirrormakerReplicationFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow#id DataAivenMirrormakerReplicationFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow#project DataAivenMirrormakerReplicationFlow#project}
  */
  readonly project: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow#service_name DataAivenMirrormakerReplicationFlow#service_name}
  */
  readonly serviceName: string;
  /**
  * Source cluster alias. Maximum length: `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow#source_cluster DataAivenMirrormakerReplicationFlow#source_cluster}
  */
  readonly sourceCluster: string;
  /**
  * Target cluster alias. Maximum length: `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow#target_cluster DataAivenMirrormakerReplicationFlow#target_cluster}
  */
  readonly targetCluster: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow aiven_mirrormaker_replication_flow}
*/
export class DataAivenMirrormakerReplicationFlow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_mirrormaker_replication_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenMirrormakerReplicationFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenMirrormakerReplicationFlow to import
  * @param importFromId The id of the existing DataAivenMirrormakerReplicationFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenMirrormakerReplicationFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_mirrormaker_replication_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/mirrormaker_replication_flow aiven_mirrormaker_replication_flow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenMirrormakerReplicationFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenMirrormakerReplicationFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_mirrormaker_replication_flow',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
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
    this._project = config.project;
    this._serviceName = config.serviceName;
    this._sourceCluster = config.sourceCluster;
    this._targetCluster = config.targetCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_properties_exclude - computed: true, optional: false, required: false
  public get configPropertiesExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('config_properties_exclude'));
  }

  // emit_backward_heartbeats_enabled - computed: true, optional: false, required: false
  public get emitBackwardHeartbeatsEnabled() {
    return this.getBooleanAttribute('emit_backward_heartbeats_enabled');
  }

  // emit_heartbeats_enabled - computed: true, optional: false, required: false
  public get emitHeartbeatsEnabled() {
    return this.getBooleanAttribute('emit_heartbeats_enabled');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // exactly_once_delivery_enabled - computed: true, optional: false, required: false
  public get exactlyOnceDeliveryEnabled() {
    return this.getBooleanAttribute('exactly_once_delivery_enabled');
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

  // offset_syncs_topic_location - computed: true, optional: false, required: false
  public get offsetSyncsTopicLocation() {
    return this.getStringAttribute('offset_syncs_topic_location');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // replication_factor - computed: true, optional: false, required: false
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }

  // replication_policy_class - computed: true, optional: false, required: false
  public get replicationPolicyClass() {
    return this.getStringAttribute('replication_policy_class');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // source_cluster - computed: false, optional: false, required: true
  private _sourceCluster?: string; 
  public get sourceCluster() {
    return this.getStringAttribute('source_cluster');
  }
  public set sourceCluster(value: string) {
    this._sourceCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterInput() {
    return this._sourceCluster;
  }

  // sync_group_offsets_enabled - computed: true, optional: false, required: false
  public get syncGroupOffsetsEnabled() {
    return this.getBooleanAttribute('sync_group_offsets_enabled');
  }

  // sync_group_offsets_interval_seconds - computed: true, optional: false, required: false
  public get syncGroupOffsetsIntervalSeconds() {
    return this.getNumberAttribute('sync_group_offsets_interval_seconds');
  }

  // target_cluster - computed: false, optional: false, required: true
  private _targetCluster?: string; 
  public get targetCluster() {
    return this.getStringAttribute('target_cluster');
  }
  public set targetCluster(value: string) {
    this._targetCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster;
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.getListAttribute('topics');
  }

  // topics_blacklist - computed: true, optional: false, required: false
  public get topicsBlacklist() {
    return this.getListAttribute('topics_blacklist');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
      source_cluster: cdktf.stringToTerraform(this._sourceCluster),
      target_cluster: cdktf.stringToTerraform(this._targetCluster),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cluster: {
        value: cdktf.stringToHclTerraform(this._sourceCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_cluster: {
        value: cdktf.stringToHclTerraform(this._targetCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
