// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogOneagentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables automatic detection of timezone in container's logs if it is not explicitly defined in content or configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#container_timezone_heuristic_enabled LogOneagent#container_timezone_heuristic_enabled}
  */
  readonly containerTimezoneHeuristicEnabled: boolean | cdktf.IResolvable;
  /**
  * Allows detection of log messages written to the containerized application's stdout/stderr streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#containers_logs_detection_enabled LogOneagent#containers_logs_detection_enabled}
  */
  readonly containersLogsDetectionEnabled: boolean | cdktf.IResolvable;
  /**
  * Defines the number of characters in every log line (starting from the first character in the line) where the timestamp is searched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#date_search_limit_bytes LogOneagent#date_search_limit_bytes}
  */
  readonly dateSearchLimitBytes: number;
  /**
  * Default timezone for agent if more specific configurations is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#default_timezone LogOneagent#default_timezone}
  */
  readonly defaultTimezone: string;
  /**
  * Defines the maximum timeout value, in seconds, for the query extracting Windows Event Logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#event_log_query_timeout_sec LogOneagent#event_log_query_timeout_sec}
  */
  readonly eventLogQueryTimeoutSec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#id LogOneagent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allows detection of logs and event logs written by IIS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#iisdetection_enabled LogOneagent#iisdetection_enabled}
  */
  readonly iisdetectionEnabled: boolean | cdktf.IResolvable;
  /**
  * Allows detection of logs written to mounted network storage drives. Applies only to Linux hosts. For other OSes it's always enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#log_scanner_linux_nfs_enabled LogOneagent#log_scanner_linux_nfs_enabled}
  */
  readonly logScannerLinuxNfsEnabled: boolean | cdktf.IResolvable;
  /**
  * Defines the maximum number of log group instances per entity after which, the new automatic ones wouldn't be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#max_lgis_per_entity_count LogOneagent#max_lgis_per_entity_count}
  */
  readonly maxLgisPerEntityCount: number;
  /**
  * Defines the minimum number of bytes in log file required for binary detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#min_binary_detection_limit_bytes LogOneagent#min_binary_detection_limit_bytes}
  */
  readonly minBinaryDetectionLimitBytes: number;
  /**
  * Enabling this option may affect your licensing costs. For more details, see [documentation](https://dt-url.net/4l02yi8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#monitor_own_logs_enabled LogOneagent#monitor_own_logs_enabled}
  */
  readonly monitorOwnLogsEnabled: boolean | cdktf.IResolvable;
  /**
  * Automatically detect logs written by important processes. For more details, check our [documentation](https://dt-url.net/7v02z76)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#open_log_files_detection_enabled LogOneagent#open_log_files_detection_enabled}
  */
  readonly openLogFilesDetectionEnabled: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HOST, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#scope LogOneagent#scope}
  */
  readonly scope?: string;
  /**
  * Defines the number of characters in every log line (starting from the first character in the line) where severity is searched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#severity_detection_limit_bytes LogOneagent#severity_detection_limit_bytes}
  */
  readonly severityDetectionLimitBytes: number;
  /**
  * Defines the number of the first lines of every log entry where severity is searched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#severity_detection_lines_limit LogOneagent#severity_detection_lines_limit}
  */
  readonly severityDetectionLinesLimit: number;
  /**
  * Linux: syslog, message log Windows: system, application, security event logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#system_logs_detection_enabled LogOneagent#system_logs_detection_enabled}
  */
  readonly systemLogsDetectionEnabled: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent dynatrace_log_oneagent}
*/
export class LogOneagent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_oneagent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogOneagent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogOneagent to import
  * @param importFromId The id of the existing LogOneagent that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogOneagent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_oneagent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_oneagent dynatrace_log_oneagent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogOneagentConfig
  */
  public constructor(scope: Construct, id: string, config: LogOneagentConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_oneagent',
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
    this._containerTimezoneHeuristicEnabled = config.containerTimezoneHeuristicEnabled;
    this._containersLogsDetectionEnabled = config.containersLogsDetectionEnabled;
    this._dateSearchLimitBytes = config.dateSearchLimitBytes;
    this._defaultTimezone = config.defaultTimezone;
    this._eventLogQueryTimeoutSec = config.eventLogQueryTimeoutSec;
    this._id = config.id;
    this._iisdetectionEnabled = config.iisdetectionEnabled;
    this._logScannerLinuxNfsEnabled = config.logScannerLinuxNfsEnabled;
    this._maxLgisPerEntityCount = config.maxLgisPerEntityCount;
    this._minBinaryDetectionLimitBytes = config.minBinaryDetectionLimitBytes;
    this._monitorOwnLogsEnabled = config.monitorOwnLogsEnabled;
    this._openLogFilesDetectionEnabled = config.openLogFilesDetectionEnabled;
    this._scope = config.scope;
    this._severityDetectionLimitBytes = config.severityDetectionLimitBytes;
    this._severityDetectionLinesLimit = config.severityDetectionLinesLimit;
    this._systemLogsDetectionEnabled = config.systemLogsDetectionEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_timezone_heuristic_enabled - computed: false, optional: false, required: true
  private _containerTimezoneHeuristicEnabled?: boolean | cdktf.IResolvable; 
  public get containerTimezoneHeuristicEnabled() {
    return this.getBooleanAttribute('container_timezone_heuristic_enabled');
  }
  public set containerTimezoneHeuristicEnabled(value: boolean | cdktf.IResolvable) {
    this._containerTimezoneHeuristicEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTimezoneHeuristicEnabledInput() {
    return this._containerTimezoneHeuristicEnabled;
  }

  // containers_logs_detection_enabled - computed: false, optional: false, required: true
  private _containersLogsDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get containersLogsDetectionEnabled() {
    return this.getBooleanAttribute('containers_logs_detection_enabled');
  }
  public set containersLogsDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._containersLogsDetectionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersLogsDetectionEnabledInput() {
    return this._containersLogsDetectionEnabled;
  }

  // date_search_limit_bytes - computed: false, optional: false, required: true
  private _dateSearchLimitBytes?: number; 
  public get dateSearchLimitBytes() {
    return this.getNumberAttribute('date_search_limit_bytes');
  }
  public set dateSearchLimitBytes(value: number) {
    this._dateSearchLimitBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateSearchLimitBytesInput() {
    return this._dateSearchLimitBytes;
  }

  // default_timezone - computed: false, optional: false, required: true
  private _defaultTimezone?: string; 
  public get defaultTimezone() {
    return this.getStringAttribute('default_timezone');
  }
  public set defaultTimezone(value: string) {
    this._defaultTimezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimezoneInput() {
    return this._defaultTimezone;
  }

  // event_log_query_timeout_sec - computed: false, optional: false, required: true
  private _eventLogQueryTimeoutSec?: number; 
  public get eventLogQueryTimeoutSec() {
    return this.getNumberAttribute('event_log_query_timeout_sec');
  }
  public set eventLogQueryTimeoutSec(value: number) {
    this._eventLogQueryTimeoutSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogQueryTimeoutSecInput() {
    return this._eventLogQueryTimeoutSec;
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

  // iisdetection_enabled - computed: false, optional: false, required: true
  private _iisdetectionEnabled?: boolean | cdktf.IResolvable; 
  public get iisdetectionEnabled() {
    return this.getBooleanAttribute('iisdetection_enabled');
  }
  public set iisdetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._iisdetectionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iisdetectionEnabledInput() {
    return this._iisdetectionEnabled;
  }

  // log_scanner_linux_nfs_enabled - computed: false, optional: false, required: true
  private _logScannerLinuxNfsEnabled?: boolean | cdktf.IResolvable; 
  public get logScannerLinuxNfsEnabled() {
    return this.getBooleanAttribute('log_scanner_linux_nfs_enabled');
  }
  public set logScannerLinuxNfsEnabled(value: boolean | cdktf.IResolvable) {
    this._logScannerLinuxNfsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logScannerLinuxNfsEnabledInput() {
    return this._logScannerLinuxNfsEnabled;
  }

  // max_lgis_per_entity_count - computed: false, optional: false, required: true
  private _maxLgisPerEntityCount?: number; 
  public get maxLgisPerEntityCount() {
    return this.getNumberAttribute('max_lgis_per_entity_count');
  }
  public set maxLgisPerEntityCount(value: number) {
    this._maxLgisPerEntityCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLgisPerEntityCountInput() {
    return this._maxLgisPerEntityCount;
  }

  // min_binary_detection_limit_bytes - computed: false, optional: false, required: true
  private _minBinaryDetectionLimitBytes?: number; 
  public get minBinaryDetectionLimitBytes() {
    return this.getNumberAttribute('min_binary_detection_limit_bytes');
  }
  public set minBinaryDetectionLimitBytes(value: number) {
    this._minBinaryDetectionLimitBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minBinaryDetectionLimitBytesInput() {
    return this._minBinaryDetectionLimitBytes;
  }

  // monitor_own_logs_enabled - computed: false, optional: false, required: true
  private _monitorOwnLogsEnabled?: boolean | cdktf.IResolvable; 
  public get monitorOwnLogsEnabled() {
    return this.getBooleanAttribute('monitor_own_logs_enabled');
  }
  public set monitorOwnLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._monitorOwnLogsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOwnLogsEnabledInput() {
    return this._monitorOwnLogsEnabled;
  }

  // open_log_files_detection_enabled - computed: false, optional: false, required: true
  private _openLogFilesDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get openLogFilesDetectionEnabled() {
    return this.getBooleanAttribute('open_log_files_detection_enabled');
  }
  public set openLogFilesDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._openLogFilesDetectionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openLogFilesDetectionEnabledInput() {
    return this._openLogFilesDetectionEnabled;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // severity_detection_limit_bytes - computed: false, optional: false, required: true
  private _severityDetectionLimitBytes?: number; 
  public get severityDetectionLimitBytes() {
    return this.getNumberAttribute('severity_detection_limit_bytes');
  }
  public set severityDetectionLimitBytes(value: number) {
    this._severityDetectionLimitBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityDetectionLimitBytesInput() {
    return this._severityDetectionLimitBytes;
  }

  // severity_detection_lines_limit - computed: false, optional: false, required: true
  private _severityDetectionLinesLimit?: number; 
  public get severityDetectionLinesLimit() {
    return this.getNumberAttribute('severity_detection_lines_limit');
  }
  public set severityDetectionLinesLimit(value: number) {
    this._severityDetectionLinesLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityDetectionLinesLimitInput() {
    return this._severityDetectionLinesLimit;
  }

  // system_logs_detection_enabled - computed: false, optional: false, required: true
  private _systemLogsDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get systemLogsDetectionEnabled() {
    return this.getBooleanAttribute('system_logs_detection_enabled');
  }
  public set systemLogsDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._systemLogsDetectionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLogsDetectionEnabledInput() {
    return this._systemLogsDetectionEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_timezone_heuristic_enabled: cdktf.booleanToTerraform(this._containerTimezoneHeuristicEnabled),
      containers_logs_detection_enabled: cdktf.booleanToTerraform(this._containersLogsDetectionEnabled),
      date_search_limit_bytes: cdktf.numberToTerraform(this._dateSearchLimitBytes),
      default_timezone: cdktf.stringToTerraform(this._defaultTimezone),
      event_log_query_timeout_sec: cdktf.numberToTerraform(this._eventLogQueryTimeoutSec),
      id: cdktf.stringToTerraform(this._id),
      iisdetection_enabled: cdktf.booleanToTerraform(this._iisdetectionEnabled),
      log_scanner_linux_nfs_enabled: cdktf.booleanToTerraform(this._logScannerLinuxNfsEnabled),
      max_lgis_per_entity_count: cdktf.numberToTerraform(this._maxLgisPerEntityCount),
      min_binary_detection_limit_bytes: cdktf.numberToTerraform(this._minBinaryDetectionLimitBytes),
      monitor_own_logs_enabled: cdktf.booleanToTerraform(this._monitorOwnLogsEnabled),
      open_log_files_detection_enabled: cdktf.booleanToTerraform(this._openLogFilesDetectionEnabled),
      scope: cdktf.stringToTerraform(this._scope),
      severity_detection_limit_bytes: cdktf.numberToTerraform(this._severityDetectionLimitBytes),
      severity_detection_lines_limit: cdktf.numberToTerraform(this._severityDetectionLinesLimit),
      system_logs_detection_enabled: cdktf.booleanToTerraform(this._systemLogsDetectionEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_timezone_heuristic_enabled: {
        value: cdktf.booleanToHclTerraform(this._containerTimezoneHeuristicEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      containers_logs_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._containersLogsDetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      date_search_limit_bytes: {
        value: cdktf.numberToHclTerraform(this._dateSearchLimitBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_timezone: {
        value: cdktf.stringToHclTerraform(this._defaultTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_log_query_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._eventLogQueryTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iisdetection_enabled: {
        value: cdktf.booleanToHclTerraform(this._iisdetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_scanner_linux_nfs_enabled: {
        value: cdktf.booleanToHclTerraform(this._logScannerLinuxNfsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_lgis_per_entity_count: {
        value: cdktf.numberToHclTerraform(this._maxLgisPerEntityCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_binary_detection_limit_bytes: {
        value: cdktf.numberToHclTerraform(this._minBinaryDetectionLimitBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_own_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._monitorOwnLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      open_log_files_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._openLogFilesDetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_detection_limit_bytes: {
        value: cdktf.numberToHclTerraform(this._severityDetectionLimitBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      severity_detection_lines_limit: {
        value: cdktf.numberToHclTerraform(this._severityDetectionLinesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_logs_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._systemLogsDetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
