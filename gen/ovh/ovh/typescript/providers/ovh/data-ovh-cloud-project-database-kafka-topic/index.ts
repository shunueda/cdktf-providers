// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_database_kafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhCloudProjectDatabaseKafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the database cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_database_kafka_topic#cluster_id DataOvhCloudProjectDatabaseKafkaTopic#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Topic ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_database_kafka_topic#id DataOvhCloudProjectDatabaseKafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_database_kafka_topic#service_name DataOvhCloudProjectDatabaseKafkaTopic#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_database_kafka_topic ovh_cloud_project_database_kafka_topic}
*/
export class DataOvhCloudProjectDatabaseKafkaTopic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_database_kafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhCloudProjectDatabaseKafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhCloudProjectDatabaseKafkaTopic to import
  * @param importFromId The id of the existing DataOvhCloudProjectDatabaseKafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_database_kafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhCloudProjectDatabaseKafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_database_kafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_database_kafka_topic ovh_cloud_project_database_kafka_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhCloudProjectDatabaseKafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhCloudProjectDatabaseKafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_database_kafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
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
    this._id = config.id;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // min_insync_replicas - computed: true, optional: false, required: false
  public get minInsyncReplicas() {
    return this.getNumberAttribute('min_insync_replicas');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // partitions - computed: true, optional: false, required: false
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }

  // replication - computed: true, optional: false, required: false
  public get replication() {
    return this.getNumberAttribute('replication');
  }

  // retention_bytes - computed: true, optional: false, required: false
  public get retentionBytes() {
    return this.getNumberAttribute('retention_bytes');
  }

  // retention_hours - computed: true, optional: false, required: false
  public get retentionHours() {
    return this.getNumberAttribute('retention_hours');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
