// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cassandra backup bandwidth limit in Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#bandwidth_limit_mbits ManagedBackup#bandwidth_limit_mbits}
  */
  readonly bandwidthLimitMbits?: number;
  /**
  * Hour to start Cassandra backups each day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#cassandra_scheduled_time ManagedBackup#cassandra_scheduled_time}
  */
  readonly cassandraScheduledTime: number;
  /**
  * For internal use: current state of rules in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#current_state ManagedBackup#current_state}
  */
  readonly currentState?: string;
  /**
  * Datacenter which will create backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#datacenter ManagedBackup#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Backups are enabled (true) or disabled (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#enabled ManagedBackup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#id ManagedBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include (true) or exclude (false) Log Monitoring v2 data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#include_lm20_data ManagedBackup#include_lm20_data}
  */
  readonly includeLm20Data?: boolean | cdktf.IResolvable;
  /**
  * Include user sessions (true) or GDPR compliance (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#include_rum_data ManagedBackup#include_rum_data}
  */
  readonly includeRumData?: boolean | cdktf.IResolvable;
  /**
  * Include time series metric-data (true) or retain configuration data only (false))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#include_ts_metric_data ManagedBackup#include_ts_metric_data}
  */
  readonly includeTsMetricData?: boolean | cdktf.IResolvable;
  /**
  * Max number of Elasticsearch snapshots to clean. Elasticsearch snapshots won't be created anymore if there will be more backups to clean than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#max_es_snapshots_to_clean ManagedBackup#max_es_snapshots_to_clean}
  */
  readonly maxEsSnapshotsToClean?: number;
  /**
  * Pauses Elasticsearch and Cassandra backups. In comparison to enable/disable backup, this option does not modify any configuration like Elasticsearch properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#pause_backups ManagedBackup#pause_backups}
  */
  readonly pauseBackups?: boolean | cdktf.IResolvable;
  /**
  * A full path to the backup archive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#storage_path ManagedBackup#storage_path}
  */
  readonly storagePath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup dynatrace_managed_backup}
*/
export class ManagedBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_managed_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedBackup to import
  * @param importFromId The id of the existing ManagedBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_managed_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_backup dynatrace_managed_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedBackupConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_managed_backup',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthLimitMbits = config.bandwidthLimitMbits;
    this._cassandraScheduledTime = config.cassandraScheduledTime;
    this._currentState = config.currentState;
    this._datacenter = config.datacenter;
    this._enabled = config.enabled;
    this._id = config.id;
    this._includeLm20Data = config.includeLm20Data;
    this._includeRumData = config.includeRumData;
    this._includeTsMetricData = config.includeTsMetricData;
    this._maxEsSnapshotsToClean = config.maxEsSnapshotsToClean;
    this._pauseBackups = config.pauseBackups;
    this._storagePath = config.storagePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_limit_mbits - computed: false, optional: true, required: false
  private _bandwidthLimitMbits?: number; 
  public get bandwidthLimitMbits() {
    return this.getNumberAttribute('bandwidth_limit_mbits');
  }
  public set bandwidthLimitMbits(value: number) {
    this._bandwidthLimitMbits = value;
  }
  public resetBandwidthLimitMbits() {
    this._bandwidthLimitMbits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitMbitsInput() {
    return this._bandwidthLimitMbits;
  }

  // cassandra_scheduled_time - computed: false, optional: false, required: true
  private _cassandraScheduledTime?: number; 
  public get cassandraScheduledTime() {
    return this.getNumberAttribute('cassandra_scheduled_time');
  }
  public set cassandraScheduledTime(value: number) {
    this._cassandraScheduledTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraScheduledTimeInput() {
    return this._cassandraScheduledTime;
  }

  // current_state - computed: true, optional: true, required: false
  private _currentState?: string; 
  public get currentState() {
    return this.getStringAttribute('current_state');
  }
  public set currentState(value: string) {
    this._currentState = value;
  }
  public resetCurrentState() {
    this._currentState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStateInput() {
    return this._currentState;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // include_lm20_data - computed: false, optional: true, required: false
  private _includeLm20Data?: boolean | cdktf.IResolvable; 
  public get includeLm20Data() {
    return this.getBooleanAttribute('include_lm20_data');
  }
  public set includeLm20Data(value: boolean | cdktf.IResolvable) {
    this._includeLm20Data = value;
  }
  public resetIncludeLm20Data() {
    this._includeLm20Data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLm20DataInput() {
    return this._includeLm20Data;
  }

  // include_rum_data - computed: false, optional: true, required: false
  private _includeRumData?: boolean | cdktf.IResolvable; 
  public get includeRumData() {
    return this.getBooleanAttribute('include_rum_data');
  }
  public set includeRumData(value: boolean | cdktf.IResolvable) {
    this._includeRumData = value;
  }
  public resetIncludeRumData() {
    this._includeRumData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRumDataInput() {
    return this._includeRumData;
  }

  // include_ts_metric_data - computed: false, optional: true, required: false
  private _includeTsMetricData?: boolean | cdktf.IResolvable; 
  public get includeTsMetricData() {
    return this.getBooleanAttribute('include_ts_metric_data');
  }
  public set includeTsMetricData(value: boolean | cdktf.IResolvable) {
    this._includeTsMetricData = value;
  }
  public resetIncludeTsMetricData() {
    this._includeTsMetricData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTsMetricDataInput() {
    return this._includeTsMetricData;
  }

  // max_es_snapshots_to_clean - computed: false, optional: true, required: false
  private _maxEsSnapshotsToClean?: number; 
  public get maxEsSnapshotsToClean() {
    return this.getNumberAttribute('max_es_snapshots_to_clean');
  }
  public set maxEsSnapshotsToClean(value: number) {
    this._maxEsSnapshotsToClean = value;
  }
  public resetMaxEsSnapshotsToClean() {
    this._maxEsSnapshotsToClean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEsSnapshotsToCleanInput() {
    return this._maxEsSnapshotsToClean;
  }

  // pause_backups - computed: false, optional: true, required: false
  private _pauseBackups?: boolean | cdktf.IResolvable; 
  public get pauseBackups() {
    return this.getBooleanAttribute('pause_backups');
  }
  public set pauseBackups(value: boolean | cdktf.IResolvable) {
    this._pauseBackups = value;
  }
  public resetPauseBackups() {
    this._pauseBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseBackupsInput() {
    return this._pauseBackups;
  }

  // storage_path - computed: false, optional: true, required: false
  private _storagePath?: string; 
  public get storagePath() {
    return this.getStringAttribute('storage_path');
  }
  public set storagePath(value: string) {
    this._storagePath = value;
  }
  public resetStoragePath() {
    this._storagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePathInput() {
    return this._storagePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_limit_mbits: cdktf.numberToTerraform(this._bandwidthLimitMbits),
      cassandra_scheduled_time: cdktf.numberToTerraform(this._cassandraScheduledTime),
      current_state: cdktf.stringToTerraform(this._currentState),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      include_lm20_data: cdktf.booleanToTerraform(this._includeLm20Data),
      include_rum_data: cdktf.booleanToTerraform(this._includeRumData),
      include_ts_metric_data: cdktf.booleanToTerraform(this._includeTsMetricData),
      max_es_snapshots_to_clean: cdktf.numberToTerraform(this._maxEsSnapshotsToClean),
      pause_backups: cdktf.booleanToTerraform(this._pauseBackups),
      storage_path: cdktf.stringToTerraform(this._storagePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_limit_mbits: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitMbits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cassandra_scheduled_time: {
        value: cdktf.numberToHclTerraform(this._cassandraScheduledTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      current_state: {
        value: cdktf.stringToHclTerraform(this._currentState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_lm20_data: {
        value: cdktf.booleanToHclTerraform(this._includeLm20Data),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_rum_data: {
        value: cdktf.booleanToHclTerraform(this._includeRumData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_ts_metric_data: {
        value: cdktf.booleanToHclTerraform(this._includeTsMetricData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_es_snapshots_to_clean: {
        value: cdktf.numberToHclTerraform(this._maxEsSnapshotsToClean),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pause_backups: {
        value: cdktf.booleanToHclTerraform(this._pauseBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_path: {
        value: cdktf.stringToHclTerraform(this._storagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
