// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectDatabaseKafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the database cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#cluster_id CloudProjectDatabaseKafkaTopic#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#id CloudProjectDatabaseKafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Minimum insync replica accepted for this topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#min_insync_replicas CloudProjectDatabaseKafkaTopic#min_insync_replicas}
  */
  readonly minInsyncReplicas?: number;
  /**
  * Name of the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#name CloudProjectDatabaseKafkaTopic#name}
  */
  readonly name: string;
  /**
  * Number of partitions for this topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#partitions CloudProjectDatabaseKafkaTopic#partitions}
  */
  readonly partitions?: number;
  /**
  * Number of replication for this topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#replication CloudProjectDatabaseKafkaTopic#replication}
  */
  readonly replication?: number;
  /**
  * Number of bytes for the retention of the data for this topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#retention_bytes CloudProjectDatabaseKafkaTopic#retention_bytes}
  */
  readonly retentionBytes?: number;
  /**
  * Number of hours for the retention of the data for this topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#retention_hours CloudProjectDatabaseKafkaTopic#retention_hours}
  */
  readonly retentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#service_name CloudProjectDatabaseKafkaTopic#service_name}
  */
  readonly serviceName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#timeouts CloudProjectDatabaseKafkaTopic#timeouts}
  */
  readonly timeouts?: CloudProjectDatabaseKafkaTopicTimeouts;
}
export interface CloudProjectDatabaseKafkaTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#create CloudProjectDatabaseKafkaTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#delete CloudProjectDatabaseKafkaTopic#delete}
  */
  readonly delete?: string;
}

export function cloudProjectDatabaseKafkaTopicTimeoutsToTerraform(struct?: CloudProjectDatabaseKafkaTopicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cloudProjectDatabaseKafkaTopicTimeoutsToHclTerraform(struct?: CloudProjectDatabaseKafkaTopicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectDatabaseKafkaTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectDatabaseKafkaTopicTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectDatabaseKafkaTopicTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic ovh_cloud_project_database_kafka_topic}
*/
export class CloudProjectDatabaseKafkaTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_database_kafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectDatabaseKafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectDatabaseKafkaTopic to import
  * @param importFromId The id of the existing CloudProjectDatabaseKafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectDatabaseKafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_database_kafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database_kafka_topic ovh_cloud_project_database_kafka_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectDatabaseKafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectDatabaseKafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_database_kafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._minInsyncReplicas = config.minInsyncReplicas;
    this._name = config.name;
    this._partitions = config.partitions;
    this._replication = config.replication;
    this._retentionBytes = config.retentionBytes;
    this._retentionHours = config.retentionHours;
    this._serviceName = config.serviceName;
    this._timeouts.internalValue = config.timeouts;
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

  // min_insync_replicas - computed: true, optional: true, required: false
  private _minInsyncReplicas?: number; 
  public get minInsyncReplicas() {
    return this.getNumberAttribute('min_insync_replicas');
  }
  public set minInsyncReplicas(value: number) {
    this._minInsyncReplicas = value;
  }
  public resetMinInsyncReplicas() {
    this._minInsyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsyncReplicasInput() {
    return this._minInsyncReplicas;
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

  // partitions - computed: true, optional: true, required: false
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  public resetPartitions() {
    this._partitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // replication - computed: true, optional: true, required: false
  private _replication?: number; 
  public get replication() {
    return this.getNumberAttribute('replication');
  }
  public set replication(value: number) {
    this._replication = value;
  }
  public resetReplication() {
    this._replication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication;
  }

  // retention_bytes - computed: true, optional: true, required: false
  private _retentionBytes?: number; 
  public get retentionBytes() {
    return this.getNumberAttribute('retention_bytes');
  }
  public set retentionBytes(value: number) {
    this._retentionBytes = value;
  }
  public resetRetentionBytes() {
    this._retentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBytesInput() {
    return this._retentionBytes;
  }

  // retention_hours - computed: true, optional: true, required: false
  private _retentionHours?: number; 
  public get retentionHours() {
    return this.getNumberAttribute('retention_hours');
  }
  public set retentionHours(value: number) {
    this._retentionHours = value;
  }
  public resetRetentionHours() {
    this._retentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionHoursInput() {
    return this._retentionHours;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudProjectDatabaseKafkaTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudProjectDatabaseKafkaTopicTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      min_insync_replicas: cdktf.numberToTerraform(this._minInsyncReplicas),
      name: cdktf.stringToTerraform(this._name),
      partitions: cdktf.numberToTerraform(this._partitions),
      replication: cdktf.numberToTerraform(this._replication),
      retention_bytes: cdktf.numberToTerraform(this._retentionBytes),
      retention_hours: cdktf.numberToTerraform(this._retentionHours),
      service_name: cdktf.stringToTerraform(this._serviceName),
      timeouts: cloudProjectDatabaseKafkaTopicTimeoutsToTerraform(this._timeouts.internalValue),
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
      min_insync_replicas: {
        value: cdktf.numberToHclTerraform(this._minInsyncReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitions: {
        value: cdktf.numberToHclTerraform(this._partitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication: {
        value: cdktf.numberToHclTerraform(this._replication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_bytes: {
        value: cdktf.numberToHclTerraform(this._retentionBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_hours: {
        value: cdktf.numberToHclTerraform(this._retentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudProjectDatabaseKafkaTopicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectDatabaseKafkaTopicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
