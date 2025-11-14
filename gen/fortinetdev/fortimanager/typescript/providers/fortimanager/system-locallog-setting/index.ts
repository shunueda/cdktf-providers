// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLocallogSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#id SystemLocallogSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#log_daemon_crash SystemLocallogSetting#log_daemon_crash}
  */
  readonly logDaemonCrash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#log_interval_adom_perf_stats SystemLocallogSetting#log_interval_adom_perf_stats}
  */
  readonly logIntervalAdomPerfStats?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#log_interval_dev_no_logging SystemLocallogSetting#log_interval_dev_no_logging}
  */
  readonly logIntervalDevNoLogging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#log_interval_disk_full SystemLocallogSetting#log_interval_disk_full}
  */
  readonly logIntervalDiskFull?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#log_interval_gbday_exceeded SystemLocallogSetting#log_interval_gbday_exceeded}
  */
  readonly logIntervalGbdayExceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#no_log_detection_threshold SystemLocallogSetting#no_log_detection_threshold}
  */
  readonly noLogDetectionThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting fortimanager_system_locallog_setting}
*/
export class SystemLocallogSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_locallog_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLocallogSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLocallogSetting to import
  * @param importFromId The id of the existing SystemLocallogSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLocallogSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_locallog_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_setting fortimanager_system_locallog_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLocallogSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLocallogSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_locallog_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._logDaemonCrash = config.logDaemonCrash;
    this._logIntervalAdomPerfStats = config.logIntervalAdomPerfStats;
    this._logIntervalDevNoLogging = config.logIntervalDevNoLogging;
    this._logIntervalDiskFull = config.logIntervalDiskFull;
    this._logIntervalGbdayExceeded = config.logIntervalGbdayExceeded;
    this._noLogDetectionThreshold = config.noLogDetectionThreshold;
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

  // log_daemon_crash - computed: true, optional: true, required: false
  private _logDaemonCrash?: string; 
  public get logDaemonCrash() {
    return this.getStringAttribute('log_daemon_crash');
  }
  public set logDaemonCrash(value: string) {
    this._logDaemonCrash = value;
  }
  public resetLogDaemonCrash() {
    this._logDaemonCrash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDaemonCrashInput() {
    return this._logDaemonCrash;
  }

  // log_interval_adom_perf_stats - computed: true, optional: true, required: false
  private _logIntervalAdomPerfStats?: number; 
  public get logIntervalAdomPerfStats() {
    return this.getNumberAttribute('log_interval_adom_perf_stats');
  }
  public set logIntervalAdomPerfStats(value: number) {
    this._logIntervalAdomPerfStats = value;
  }
  public resetLogIntervalAdomPerfStats() {
    this._logIntervalAdomPerfStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalAdomPerfStatsInput() {
    return this._logIntervalAdomPerfStats;
  }

  // log_interval_dev_no_logging - computed: true, optional: true, required: false
  private _logIntervalDevNoLogging?: number; 
  public get logIntervalDevNoLogging() {
    return this.getNumberAttribute('log_interval_dev_no_logging');
  }
  public set logIntervalDevNoLogging(value: number) {
    this._logIntervalDevNoLogging = value;
  }
  public resetLogIntervalDevNoLogging() {
    this._logIntervalDevNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalDevNoLoggingInput() {
    return this._logIntervalDevNoLogging;
  }

  // log_interval_disk_full - computed: true, optional: true, required: false
  private _logIntervalDiskFull?: number; 
  public get logIntervalDiskFull() {
    return this.getNumberAttribute('log_interval_disk_full');
  }
  public set logIntervalDiskFull(value: number) {
    this._logIntervalDiskFull = value;
  }
  public resetLogIntervalDiskFull() {
    this._logIntervalDiskFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalDiskFullInput() {
    return this._logIntervalDiskFull;
  }

  // log_interval_gbday_exceeded - computed: true, optional: true, required: false
  private _logIntervalGbdayExceeded?: number; 
  public get logIntervalGbdayExceeded() {
    return this.getNumberAttribute('log_interval_gbday_exceeded');
  }
  public set logIntervalGbdayExceeded(value: number) {
    this._logIntervalGbdayExceeded = value;
  }
  public resetLogIntervalGbdayExceeded() {
    this._logIntervalGbdayExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalGbdayExceededInput() {
    return this._logIntervalGbdayExceeded;
  }

  // no_log_detection_threshold - computed: true, optional: true, required: false
  private _noLogDetectionThreshold?: number; 
  public get noLogDetectionThreshold() {
    return this.getNumberAttribute('no_log_detection_threshold');
  }
  public set noLogDetectionThreshold(value: number) {
    this._noLogDetectionThreshold = value;
  }
  public resetNoLogDetectionThreshold() {
    this._noLogDetectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLogDetectionThresholdInput() {
    return this._noLogDetectionThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_daemon_crash: cdktf.stringToTerraform(this._logDaemonCrash),
      log_interval_adom_perf_stats: cdktf.numberToTerraform(this._logIntervalAdomPerfStats),
      log_interval_dev_no_logging: cdktf.numberToTerraform(this._logIntervalDevNoLogging),
      log_interval_disk_full: cdktf.numberToTerraform(this._logIntervalDiskFull),
      log_interval_gbday_exceeded: cdktf.numberToTerraform(this._logIntervalGbdayExceeded),
      no_log_detection_threshold: cdktf.numberToTerraform(this._noLogDetectionThreshold),
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
      log_daemon_crash: {
        value: cdktf.stringToHclTerraform(this._logDaemonCrash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_interval_adom_perf_stats: {
        value: cdktf.numberToHclTerraform(this._logIntervalAdomPerfStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_interval_dev_no_logging: {
        value: cdktf.numberToHclTerraform(this._logIntervalDevNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_interval_disk_full: {
        value: cdktf.numberToHclTerraform(this._logIntervalDiskFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_interval_gbday_exceeded: {
        value: cdktf.numberToHclTerraform(this._logIntervalGbdayExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_log_detection_threshold: {
        value: cdktf.numberToHclTerraform(this._noLogDetectionThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
