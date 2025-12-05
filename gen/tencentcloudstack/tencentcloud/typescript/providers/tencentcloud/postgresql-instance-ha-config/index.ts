// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlInstanceHaConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#id PostgresqlInstanceHaConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#instance_id PostgresqlInstanceHaConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Maximum latency of highly available backup machines. When the delay time of the backup node is less than or equal to this value, and the amount of delay data of the backup node is less than or equal to MaxStandbyLatency, the primary node can be switched. Unit: s; Parameter range: [5, 10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#max_standby_lag PostgresqlInstanceHaConfig#max_standby_lag}
  */
  readonly maxStandbyLag: number;
  /**
  * Maximum latency data volume for highly available backup machines. When the delay data amount of the backup node is less than or equal to this value, and the delay time of the backup node is less than or equal to MaxStandbyLag, it can switch to the main node. Unit: byte; Parameter range: [1073741824, 322122547200].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#max_standby_latency PostgresqlInstanceHaConfig#max_standby_latency}
  */
  readonly maxStandbyLatency: number;
  /**
  * Maximum delay time for synchronous backup. When the delay time of the standby machine is less than or equal to this value, and the amount of delay data of the standby machine is less than or equal to MaxSyncStandbyLatency, then the standby machine adopts synchronous replication; Otherwise, adopt asynchronous replication. This parameter value is valid for instances where SyncMode is set to Semi sync. When a semi synchronous instance prohibits degradation to asynchronous replication, MaxSyncStandbyLatency and MaxSyncStandbyLag are not set. When semi synchronous instances allow degenerate asynchronous replication, PostgreSQL version 9 instances must have MaxSyncStandbyLatency set and MaxSyncStandbyLag not set, while PostgreSQL version 10 and above instances must have MaxSyncStandbyLatency and MaxSyncStandbyLag set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#max_sync_standby_lag PostgresqlInstanceHaConfig#max_sync_standby_lag}
  */
  readonly maxSyncStandbyLag?: number;
  /**
  * Maximum latency data for synchronous backup. When the amount of data delayed by the backup machine is less than or equal to this value, and the delay time of the backup machine is less than or equal to MaxSyncStandbyLag, then the backup machine adopts synchronous replication; Otherwise, adopt asynchronous replication. This parameter value is valid for instances where SyncMode is set to Semi sync. When a semi synchronous instance prohibits degradation to asynchronous replication, MaxSyncStandbyLatency and MaxSyncStandbyLag are not set. When semi synchronous instances allow degenerate asynchronous replication, PostgreSQL version 9 instances must have MaxSyncStandbyLatency set and MaxSyncStandbyLag not set, while PostgreSQL version 10 and above instances must have MaxSyncStandbyLatency and MaxSyncStandbyLag set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#max_sync_standby_latency PostgresqlInstanceHaConfig#max_sync_standby_latency}
  */
  readonly maxSyncStandbyLatency?: number;
  /**
  * Master slave synchronization method, Semi-sync: Semi synchronous; Async: Asynchronous. Main instance default value: Semi-sync, Read-only instance default value: Async.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#sync_mode PostgresqlInstanceHaConfig#sync_mode}
  */
  readonly syncMode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config tencentcloud_postgresql_instance_ha_config}
*/
export class PostgresqlInstanceHaConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_instance_ha_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlInstanceHaConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlInstanceHaConfig to import
  * @param importFromId The id of the existing PostgresqlInstanceHaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlInstanceHaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_instance_ha_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/postgresql_instance_ha_config tencentcloud_postgresql_instance_ha_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlInstanceHaConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlInstanceHaConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_instance_ha_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._maxStandbyLag = config.maxStandbyLag;
    this._maxStandbyLatency = config.maxStandbyLatency;
    this._maxSyncStandbyLag = config.maxSyncStandbyLag;
    this._maxSyncStandbyLatency = config.maxSyncStandbyLatency;
    this._syncMode = config.syncMode;
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

  // max_standby_lag - computed: false, optional: false, required: true
  private _maxStandbyLag?: number; 
  public get maxStandbyLag() {
    return this.getNumberAttribute('max_standby_lag');
  }
  public set maxStandbyLag(value: number) {
    this._maxStandbyLag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyLagInput() {
    return this._maxStandbyLag;
  }

  // max_standby_latency - computed: false, optional: false, required: true
  private _maxStandbyLatency?: number; 
  public get maxStandbyLatency() {
    return this.getNumberAttribute('max_standby_latency');
  }
  public set maxStandbyLatency(value: number) {
    this._maxStandbyLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyLatencyInput() {
    return this._maxStandbyLatency;
  }

  // max_sync_standby_lag - computed: false, optional: true, required: false
  private _maxSyncStandbyLag?: number; 
  public get maxSyncStandbyLag() {
    return this.getNumberAttribute('max_sync_standby_lag');
  }
  public set maxSyncStandbyLag(value: number) {
    this._maxSyncStandbyLag = value;
  }
  public resetMaxSyncStandbyLag() {
    this._maxSyncStandbyLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSyncStandbyLagInput() {
    return this._maxSyncStandbyLag;
  }

  // max_sync_standby_latency - computed: false, optional: true, required: false
  private _maxSyncStandbyLatency?: number; 
  public get maxSyncStandbyLatency() {
    return this.getNumberAttribute('max_sync_standby_latency');
  }
  public set maxSyncStandbyLatency(value: number) {
    this._maxSyncStandbyLatency = value;
  }
  public resetMaxSyncStandbyLatency() {
    this._maxSyncStandbyLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSyncStandbyLatencyInput() {
    return this._maxSyncStandbyLatency;
  }

  // sync_mode - computed: false, optional: false, required: true
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_standby_lag: cdktf.numberToTerraform(this._maxStandbyLag),
      max_standby_latency: cdktf.numberToTerraform(this._maxStandbyLatency),
      max_sync_standby_lag: cdktf.numberToTerraform(this._maxSyncStandbyLag),
      max_sync_standby_latency: cdktf.numberToTerraform(this._maxSyncStandbyLatency),
      sync_mode: cdktf.stringToTerraform(this._syncMode),
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
      max_standby_lag: {
        value: cdktf.numberToHclTerraform(this._maxStandbyLag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_standby_latency: {
        value: cdktf.numberToHclTerraform(this._maxStandbyLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sync_standby_lag: {
        value: cdktf.numberToHclTerraform(this._maxSyncStandbyLag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sync_standby_latency: {
        value: cdktf.numberToHclTerraform(this._maxSyncStandbyLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_mode: {
        value: cdktf.stringToHclTerraform(this._syncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
