// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectDatabaseM3DbNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the database cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#cluster_id CloudProjectDatabaseM3DbNamespace#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#id CloudProjectDatabaseM3DbNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#name CloudProjectDatabaseM3DbNamespace#name}
  */
  readonly name: string;
  /**
  * Resolution for an aggregated namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#resolution CloudProjectDatabaseM3DbNamespace#resolution}
  */
  readonly resolution: string;
  /**
  * Controls how long we wait before expiring stale data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#retention_block_data_expiration_duration CloudProjectDatabaseM3DbNamespace#retention_block_data_expiration_duration}
  */
  readonly retentionBlockDataExpirationDuration?: string;
  /**
  * Controls how long to keep a block in memory before flushing to a fileset on disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#retention_block_size_duration CloudProjectDatabaseM3DbNamespace#retention_block_size_duration}
  */
  readonly retentionBlockSizeDuration?: string;
  /**
  * Controls how far into the future writes to the namespace will be accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#retention_buffer_future_duration CloudProjectDatabaseM3DbNamespace#retention_buffer_future_duration}
  */
  readonly retentionBufferFutureDuration?: string;
  /**
  * Controls how far into the past writes to the namespace will be accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#retention_buffer_past_duration CloudProjectDatabaseM3DbNamespace#retention_buffer_past_duration}
  */
  readonly retentionBufferPastDuration?: string;
  /**
  * Controls the duration of time that M3DB will retain data for the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#retention_period_duration CloudProjectDatabaseM3DbNamespace#retention_period_duration}
  */
  readonly retentionPeriodDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#service_name CloudProjectDatabaseM3DbNamespace#service_name}
  */
  readonly serviceName: string;
  /**
  * Defines whether M3db will create snapshot files for this namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#snapshot_enabled CloudProjectDatabaseM3DbNamespace#snapshot_enabled}
  */
  readonly snapshotEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defines whether M3db will include writes to this namespace in the commit log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#writes_to_commit_log_enabled CloudProjectDatabaseM3DbNamespace#writes_to_commit_log_enabled}
  */
  readonly writesToCommitLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#timeouts CloudProjectDatabaseM3DbNamespace#timeouts}
  */
  readonly timeouts?: CloudProjectDatabaseM3DbNamespaceTimeouts;
}
export interface CloudProjectDatabaseM3DbNamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#create CloudProjectDatabaseM3DbNamespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#delete CloudProjectDatabaseM3DbNamespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#update CloudProjectDatabaseM3DbNamespace#update}
  */
  readonly update?: string;
}

export function cloudProjectDatabaseM3DbNamespaceTimeoutsToTerraform(struct?: CloudProjectDatabaseM3DbNamespaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudProjectDatabaseM3DbNamespaceTimeoutsToHclTerraform(struct?: CloudProjectDatabaseM3DbNamespaceTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectDatabaseM3DbNamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectDatabaseM3DbNamespaceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectDatabaseM3DbNamespaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace ovh_cloud_project_database_m3db_namespace}
*/
export class CloudProjectDatabaseM3DbNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_database_m3db_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectDatabaseM3DbNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectDatabaseM3DbNamespace to import
  * @param importFromId The id of the existing CloudProjectDatabaseM3DbNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectDatabaseM3DbNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_database_m3db_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_database_m3db_namespace ovh_cloud_project_database_m3db_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectDatabaseM3DbNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectDatabaseM3DbNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_database_m3db_namespace',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
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
    this._name = config.name;
    this._resolution = config.resolution;
    this._retentionBlockDataExpirationDuration = config.retentionBlockDataExpirationDuration;
    this._retentionBlockSizeDuration = config.retentionBlockSizeDuration;
    this._retentionBufferFutureDuration = config.retentionBufferFutureDuration;
    this._retentionBufferPastDuration = config.retentionBufferPastDuration;
    this._retentionPeriodDuration = config.retentionPeriodDuration;
    this._serviceName = config.serviceName;
    this._snapshotEnabled = config.snapshotEnabled;
    this._writesToCommitLogEnabled = config.writesToCommitLogEnabled;
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

  // resolution - computed: false, optional: false, required: true
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // retention_block_data_expiration_duration - computed: false, optional: true, required: false
  private _retentionBlockDataExpirationDuration?: string; 
  public get retentionBlockDataExpirationDuration() {
    return this.getStringAttribute('retention_block_data_expiration_duration');
  }
  public set retentionBlockDataExpirationDuration(value: string) {
    this._retentionBlockDataExpirationDuration = value;
  }
  public resetRetentionBlockDataExpirationDuration() {
    this._retentionBlockDataExpirationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBlockDataExpirationDurationInput() {
    return this._retentionBlockDataExpirationDuration;
  }

  // retention_block_size_duration - computed: true, optional: true, required: false
  private _retentionBlockSizeDuration?: string; 
  public get retentionBlockSizeDuration() {
    return this.getStringAttribute('retention_block_size_duration');
  }
  public set retentionBlockSizeDuration(value: string) {
    this._retentionBlockSizeDuration = value;
  }
  public resetRetentionBlockSizeDuration() {
    this._retentionBlockSizeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBlockSizeDurationInput() {
    return this._retentionBlockSizeDuration;
  }

  // retention_buffer_future_duration - computed: false, optional: true, required: false
  private _retentionBufferFutureDuration?: string; 
  public get retentionBufferFutureDuration() {
    return this.getStringAttribute('retention_buffer_future_duration');
  }
  public set retentionBufferFutureDuration(value: string) {
    this._retentionBufferFutureDuration = value;
  }
  public resetRetentionBufferFutureDuration() {
    this._retentionBufferFutureDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBufferFutureDurationInput() {
    return this._retentionBufferFutureDuration;
  }

  // retention_buffer_past_duration - computed: false, optional: true, required: false
  private _retentionBufferPastDuration?: string; 
  public get retentionBufferPastDuration() {
    return this.getStringAttribute('retention_buffer_past_duration');
  }
  public set retentionBufferPastDuration(value: string) {
    this._retentionBufferPastDuration = value;
  }
  public resetRetentionBufferPastDuration() {
    this._retentionBufferPastDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBufferPastDurationInput() {
    return this._retentionBufferPastDuration;
  }

  // retention_period_duration - computed: true, optional: true, required: false
  private _retentionPeriodDuration?: string; 
  public get retentionPeriodDuration() {
    return this.getStringAttribute('retention_period_duration');
  }
  public set retentionPeriodDuration(value: string) {
    this._retentionPeriodDuration = value;
  }
  public resetRetentionPeriodDuration() {
    this._retentionPeriodDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodDurationInput() {
    return this._retentionPeriodDuration;
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

  // snapshot_enabled - computed: true, optional: true, required: false
  private _snapshotEnabled?: boolean | cdktf.IResolvable; 
  public get snapshotEnabled() {
    return this.getBooleanAttribute('snapshot_enabled');
  }
  public set snapshotEnabled(value: boolean | cdktf.IResolvable) {
    this._snapshotEnabled = value;
  }
  public resetSnapshotEnabled() {
    this._snapshotEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotEnabledInput() {
    return this._snapshotEnabled;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // writes_to_commit_log_enabled - computed: true, optional: true, required: false
  private _writesToCommitLogEnabled?: boolean | cdktf.IResolvable; 
  public get writesToCommitLogEnabled() {
    return this.getBooleanAttribute('writes_to_commit_log_enabled');
  }
  public set writesToCommitLogEnabled(value: boolean | cdktf.IResolvable) {
    this._writesToCommitLogEnabled = value;
  }
  public resetWritesToCommitLogEnabled() {
    this._writesToCommitLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writesToCommitLogEnabledInput() {
    return this._writesToCommitLogEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudProjectDatabaseM3DbNamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudProjectDatabaseM3DbNamespaceTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resolution: cdktf.stringToTerraform(this._resolution),
      retention_block_data_expiration_duration: cdktf.stringToTerraform(this._retentionBlockDataExpirationDuration),
      retention_block_size_duration: cdktf.stringToTerraform(this._retentionBlockSizeDuration),
      retention_buffer_future_duration: cdktf.stringToTerraform(this._retentionBufferFutureDuration),
      retention_buffer_past_duration: cdktf.stringToTerraform(this._retentionBufferPastDuration),
      retention_period_duration: cdktf.stringToTerraform(this._retentionPeriodDuration),
      service_name: cdktf.stringToTerraform(this._serviceName),
      snapshot_enabled: cdktf.booleanToTerraform(this._snapshotEnabled),
      writes_to_commit_log_enabled: cdktf.booleanToTerraform(this._writesToCommitLogEnabled),
      timeouts: cloudProjectDatabaseM3DbNamespaceTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_block_data_expiration_duration: {
        value: cdktf.stringToHclTerraform(this._retentionBlockDataExpirationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_block_size_duration: {
        value: cdktf.stringToHclTerraform(this._retentionBlockSizeDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_buffer_future_duration: {
        value: cdktf.stringToHclTerraform(this._retentionBufferFutureDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_buffer_past_duration: {
        value: cdktf.stringToHclTerraform(this._retentionBufferPastDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_period_duration: {
        value: cdktf.stringToHclTerraform(this._retentionPeriodDuration),
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
      snapshot_enabled: {
        value: cdktf.booleanToHclTerraform(this._snapshotEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      writes_to_commit_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._writesToCommitLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: cloudProjectDatabaseM3DbNamespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectDatabaseM3DbNamespaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
