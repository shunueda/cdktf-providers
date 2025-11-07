// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailSafeConfig extends cdktf.TerraformMetaArguments {
  /**
  * dataplane hung detection timeout before ACOS is restarted (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#dataplane_recovery_timeout FailSafe#dataplane_recovery_timeout}
  */
  readonly dataplaneRecoveryTimeout?: number;
  /**
  * FPGA buffers recovery threshold (Units of 256 buffers (default 2))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#fpga_buff_recovery_threshold FailSafe#fpga_buff_recovery_threshold}
  */
  readonly fpgaBuffRecoveryThreshold?: number;
  /**
  * FPGA monitor feature enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#fpga_monitor_enable FailSafe#fpga_monitor_enable}
  */
  readonly fpgaMonitorEnable?: number;
  /**
  * FPGA monitor forced reboot in error condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#fpga_monitor_forced_reboot FailSafe#fpga_monitor_forced_reboot}
  */
  readonly fpgaMonitorForcedReboot?: number;
  /**
  * FPGA monitor packet interval (seconds) (Numbers of seconds between sending packets (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#fpga_monitor_interval FailSafe#fpga_monitor_interval}
  */
  readonly fpgaMonitorInterval?: number;
  /**
  * FPGA monitor packet missed for error condition (Numbers of missed monitor packets before setting error condition (default 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#fpga_monitor_threshold FailSafe#fpga_monitor_threshold}
  */
  readonly fpgaMonitorThreshold?: number;
  /**
  * 'hw-error-monitor-disable': Disable fail-safe hardware error monitor; 'hw-error-monitor-enable': Enable fail-safe hardware error monitor;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#hw_error_monitor FailSafe#hw_error_monitor}
  */
  readonly hwErrorMonitor?: string;
  /**
  * Hardware error recovery timeout (minutes) (waiting time of recovery from hardware errors (default 0))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#hw_error_recovery_timeout FailSafe#hw_error_recovery_timeout}
  */
  readonly hwErrorRecoveryTimeout?: number;
  /**
  * 'hw-ssl-timeout-monitor-disable': Disable fail-safe hardware SSL timeout monitor; 'hw-ssl-timeout-monitor-enable': Enable fail-safe hardware SSL timeout monitor;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#hw_ssl_timeout_monitor FailSafe#hw_ssl_timeout_monitor}
  */
  readonly hwSslTimeoutMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#id FailSafe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Stop the traffic and log the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#kill FailSafe#kill}
  */
  readonly kill?: number;
  /**
  * Log the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#log FailSafe#log}
  */
  readonly log?: number;
  /**
  * Session memory recovery threshold (percentage) (Percentage of available session memory (default 30%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#session_mem_recovery_threshold FailSafe#session_mem_recovery_threshold}
  */
  readonly sessionMemRecoveryThreshold?: number;
  /**
  * Enable fail-safe software error monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#sw_error_monitor_enable FailSafe#sw_error_monitor_enable}
  */
  readonly swErrorMonitorEnable?: number;
  /**
  * Software error recovery timeout (minutes) (waiting time of recovery from software errors (default 3))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#sw_error_recovery_timeout FailSafe#sw_error_recovery_timeout}
  */
  readonly swErrorRecoveryTimeout?: number;
  /**
  * Check total memory size of current system (Size of memory (GB))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#total_memory_size_check FailSafe#total_memory_size_check}
  */
  readonly totalMemorySizeCheck?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#uuid FailSafe#uuid}
  */
  readonly uuid?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#config FailSafe#config}
  */
  readonly config?: FailSafeConfigA;
  /**
  * disable_failsafe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#disable_failsafe FailSafe#disable_failsafe}
  */
  readonly disableFailsafe?: FailSafeDisableFailsafe;
}
export interface FailSafeConfigA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#uuid FailSafe#uuid}
  */
  readonly uuid?: string;
}

export function failSafeConfigAToTerraform(struct?: FailSafeConfigAOutputReference | FailSafeConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function failSafeConfigAToHclTerraform(struct?: FailSafeConfigAOutputReference | FailSafeConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailSafeConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailSafeConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailSafeConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FailSafeDisableFailsafe {
  /**
  * 'all': Disable All; 'io-buffer': Disable I/O Buffer; 'session-memory': Disable Session Memory; 'system-memory': Disable System Memory;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#action FailSafe#action}
  */
  readonly action?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#uuid FailSafe#uuid}
  */
  readonly uuid?: string;
}

export function failSafeDisableFailsafeToTerraform(struct?: FailSafeDisableFailsafeOutputReference | FailSafeDisableFailsafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function failSafeDisableFailsafeToHclTerraform(struct?: FailSafeDisableFailsafeOutputReference | FailSafeDisableFailsafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailSafeDisableFailsafeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailSafeDisableFailsafe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailSafeDisableFailsafe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._uuid = value.uuid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe thunder_fail_safe}
*/
export class FailSafe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fail_safe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailSafe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailSafe to import
  * @param importFromId The id of the existing FailSafe that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailSafe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fail_safe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fail_safe thunder_fail_safe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailSafeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FailSafeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fail_safe',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataplaneRecoveryTimeout = config.dataplaneRecoveryTimeout;
    this._fpgaBuffRecoveryThreshold = config.fpgaBuffRecoveryThreshold;
    this._fpgaMonitorEnable = config.fpgaMonitorEnable;
    this._fpgaMonitorForcedReboot = config.fpgaMonitorForcedReboot;
    this._fpgaMonitorInterval = config.fpgaMonitorInterval;
    this._fpgaMonitorThreshold = config.fpgaMonitorThreshold;
    this._hwErrorMonitor = config.hwErrorMonitor;
    this._hwErrorRecoveryTimeout = config.hwErrorRecoveryTimeout;
    this._hwSslTimeoutMonitor = config.hwSslTimeoutMonitor;
    this._id = config.id;
    this._kill = config.kill;
    this._log = config.log;
    this._sessionMemRecoveryThreshold = config.sessionMemRecoveryThreshold;
    this._swErrorMonitorEnable = config.swErrorMonitorEnable;
    this._swErrorRecoveryTimeout = config.swErrorRecoveryTimeout;
    this._totalMemorySizeCheck = config.totalMemorySizeCheck;
    this._uuid = config.uuid;
    this._config.internalValue = config.config;
    this._disableFailsafe.internalValue = config.disableFailsafe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataplane_recovery_timeout - computed: false, optional: true, required: false
  private _dataplaneRecoveryTimeout?: number; 
  public get dataplaneRecoveryTimeout() {
    return this.getNumberAttribute('dataplane_recovery_timeout');
  }
  public set dataplaneRecoveryTimeout(value: number) {
    this._dataplaneRecoveryTimeout = value;
  }
  public resetDataplaneRecoveryTimeout() {
    this._dataplaneRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneRecoveryTimeoutInput() {
    return this._dataplaneRecoveryTimeout;
  }

  // fpga_buff_recovery_threshold - computed: false, optional: true, required: false
  private _fpgaBuffRecoveryThreshold?: number; 
  public get fpgaBuffRecoveryThreshold() {
    return this.getNumberAttribute('fpga_buff_recovery_threshold');
  }
  public set fpgaBuffRecoveryThreshold(value: number) {
    this._fpgaBuffRecoveryThreshold = value;
  }
  public resetFpgaBuffRecoveryThreshold() {
    this._fpgaBuffRecoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaBuffRecoveryThresholdInput() {
    return this._fpgaBuffRecoveryThreshold;
  }

  // fpga_monitor_enable - computed: false, optional: true, required: false
  private _fpgaMonitorEnable?: number; 
  public get fpgaMonitorEnable() {
    return this.getNumberAttribute('fpga_monitor_enable');
  }
  public set fpgaMonitorEnable(value: number) {
    this._fpgaMonitorEnable = value;
  }
  public resetFpgaMonitorEnable() {
    this._fpgaMonitorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonitorEnableInput() {
    return this._fpgaMonitorEnable;
  }

  // fpga_monitor_forced_reboot - computed: false, optional: true, required: false
  private _fpgaMonitorForcedReboot?: number; 
  public get fpgaMonitorForcedReboot() {
    return this.getNumberAttribute('fpga_monitor_forced_reboot');
  }
  public set fpgaMonitorForcedReboot(value: number) {
    this._fpgaMonitorForcedReboot = value;
  }
  public resetFpgaMonitorForcedReboot() {
    this._fpgaMonitorForcedReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonitorForcedRebootInput() {
    return this._fpgaMonitorForcedReboot;
  }

  // fpga_monitor_interval - computed: false, optional: true, required: false
  private _fpgaMonitorInterval?: number; 
  public get fpgaMonitorInterval() {
    return this.getNumberAttribute('fpga_monitor_interval');
  }
  public set fpgaMonitorInterval(value: number) {
    this._fpgaMonitorInterval = value;
  }
  public resetFpgaMonitorInterval() {
    this._fpgaMonitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonitorIntervalInput() {
    return this._fpgaMonitorInterval;
  }

  // fpga_monitor_threshold - computed: false, optional: true, required: false
  private _fpgaMonitorThreshold?: number; 
  public get fpgaMonitorThreshold() {
    return this.getNumberAttribute('fpga_monitor_threshold');
  }
  public set fpgaMonitorThreshold(value: number) {
    this._fpgaMonitorThreshold = value;
  }
  public resetFpgaMonitorThreshold() {
    this._fpgaMonitorThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonitorThresholdInput() {
    return this._fpgaMonitorThreshold;
  }

  // hw_error_monitor - computed: false, optional: true, required: false
  private _hwErrorMonitor?: string; 
  public get hwErrorMonitor() {
    return this.getStringAttribute('hw_error_monitor');
  }
  public set hwErrorMonitor(value: string) {
    this._hwErrorMonitor = value;
  }
  public resetHwErrorMonitor() {
    this._hwErrorMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwErrorMonitorInput() {
    return this._hwErrorMonitor;
  }

  // hw_error_recovery_timeout - computed: false, optional: true, required: false
  private _hwErrorRecoveryTimeout?: number; 
  public get hwErrorRecoveryTimeout() {
    return this.getNumberAttribute('hw_error_recovery_timeout');
  }
  public set hwErrorRecoveryTimeout(value: number) {
    this._hwErrorRecoveryTimeout = value;
  }
  public resetHwErrorRecoveryTimeout() {
    this._hwErrorRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwErrorRecoveryTimeoutInput() {
    return this._hwErrorRecoveryTimeout;
  }

  // hw_ssl_timeout_monitor - computed: false, optional: true, required: false
  private _hwSslTimeoutMonitor?: string; 
  public get hwSslTimeoutMonitor() {
    return this.getStringAttribute('hw_ssl_timeout_monitor');
  }
  public set hwSslTimeoutMonitor(value: string) {
    this._hwSslTimeoutMonitor = value;
  }
  public resetHwSslTimeoutMonitor() {
    this._hwSslTimeoutMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwSslTimeoutMonitorInput() {
    return this._hwSslTimeoutMonitor;
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

  // kill - computed: false, optional: true, required: false
  private _kill?: number; 
  public get kill() {
    return this.getNumberAttribute('kill');
  }
  public set kill(value: number) {
    this._kill = value;
  }
  public resetKill() {
    this._kill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killInput() {
    return this._kill;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // session_mem_recovery_threshold - computed: false, optional: true, required: false
  private _sessionMemRecoveryThreshold?: number; 
  public get sessionMemRecoveryThreshold() {
    return this.getNumberAttribute('session_mem_recovery_threshold');
  }
  public set sessionMemRecoveryThreshold(value: number) {
    this._sessionMemRecoveryThreshold = value;
  }
  public resetSessionMemRecoveryThreshold() {
    this._sessionMemRecoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemRecoveryThresholdInput() {
    return this._sessionMemRecoveryThreshold;
  }

  // sw_error_monitor_enable - computed: false, optional: true, required: false
  private _swErrorMonitorEnable?: number; 
  public get swErrorMonitorEnable() {
    return this.getNumberAttribute('sw_error_monitor_enable');
  }
  public set swErrorMonitorEnable(value: number) {
    this._swErrorMonitorEnable = value;
  }
  public resetSwErrorMonitorEnable() {
    this._swErrorMonitorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swErrorMonitorEnableInput() {
    return this._swErrorMonitorEnable;
  }

  // sw_error_recovery_timeout - computed: false, optional: true, required: false
  private _swErrorRecoveryTimeout?: number; 
  public get swErrorRecoveryTimeout() {
    return this.getNumberAttribute('sw_error_recovery_timeout');
  }
  public set swErrorRecoveryTimeout(value: number) {
    this._swErrorRecoveryTimeout = value;
  }
  public resetSwErrorRecoveryTimeout() {
    this._swErrorRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swErrorRecoveryTimeoutInput() {
    return this._swErrorRecoveryTimeout;
  }

  // total_memory_size_check - computed: false, optional: true, required: false
  private _totalMemorySizeCheck?: number; 
  public get totalMemorySizeCheck() {
    return this.getNumberAttribute('total_memory_size_check');
  }
  public set totalMemorySizeCheck(value: number) {
    this._totalMemorySizeCheck = value;
  }
  public resetTotalMemorySizeCheck() {
    this._totalMemorySizeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemorySizeCheckInput() {
    return this._totalMemorySizeCheck;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // config - computed: false, optional: true, required: false
  private _config = new FailSafeConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: FailSafeConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // disable_failsafe - computed: false, optional: true, required: false
  private _disableFailsafe = new FailSafeDisableFailsafeOutputReference(this, "disable_failsafe");
  public get disableFailsafe() {
    return this._disableFailsafe;
  }
  public putDisableFailsafe(value: FailSafeDisableFailsafe) {
    this._disableFailsafe.internalValue = value;
  }
  public resetDisableFailsafe() {
    this._disableFailsafe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFailsafeInput() {
    return this._disableFailsafe.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataplane_recovery_timeout: cdktf.numberToTerraform(this._dataplaneRecoveryTimeout),
      fpga_buff_recovery_threshold: cdktf.numberToTerraform(this._fpgaBuffRecoveryThreshold),
      fpga_monitor_enable: cdktf.numberToTerraform(this._fpgaMonitorEnable),
      fpga_monitor_forced_reboot: cdktf.numberToTerraform(this._fpgaMonitorForcedReboot),
      fpga_monitor_interval: cdktf.numberToTerraform(this._fpgaMonitorInterval),
      fpga_monitor_threshold: cdktf.numberToTerraform(this._fpgaMonitorThreshold),
      hw_error_monitor: cdktf.stringToTerraform(this._hwErrorMonitor),
      hw_error_recovery_timeout: cdktf.numberToTerraform(this._hwErrorRecoveryTimeout),
      hw_ssl_timeout_monitor: cdktf.stringToTerraform(this._hwSslTimeoutMonitor),
      id: cdktf.stringToTerraform(this._id),
      kill: cdktf.numberToTerraform(this._kill),
      log: cdktf.numberToTerraform(this._log),
      session_mem_recovery_threshold: cdktf.numberToTerraform(this._sessionMemRecoveryThreshold),
      sw_error_monitor_enable: cdktf.numberToTerraform(this._swErrorMonitorEnable),
      sw_error_recovery_timeout: cdktf.numberToTerraform(this._swErrorRecoveryTimeout),
      total_memory_size_check: cdktf.numberToTerraform(this._totalMemorySizeCheck),
      uuid: cdktf.stringToTerraform(this._uuid),
      config: failSafeConfigAToTerraform(this._config.internalValue),
      disable_failsafe: failSafeDisableFailsafeToTerraform(this._disableFailsafe.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataplane_recovery_timeout: {
        value: cdktf.numberToHclTerraform(this._dataplaneRecoveryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fpga_buff_recovery_threshold: {
        value: cdktf.numberToHclTerraform(this._fpgaBuffRecoveryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fpga_monitor_enable: {
        value: cdktf.numberToHclTerraform(this._fpgaMonitorEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fpga_monitor_forced_reboot: {
        value: cdktf.numberToHclTerraform(this._fpgaMonitorForcedReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fpga_monitor_interval: {
        value: cdktf.numberToHclTerraform(this._fpgaMonitorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fpga_monitor_threshold: {
        value: cdktf.numberToHclTerraform(this._fpgaMonitorThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_error_monitor: {
        value: cdktf.stringToHclTerraform(this._hwErrorMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_error_recovery_timeout: {
        value: cdktf.numberToHclTerraform(this._hwErrorRecoveryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_ssl_timeout_monitor: {
        value: cdktf.stringToHclTerraform(this._hwSslTimeoutMonitor),
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
      kill: {
        value: cdktf.numberToHclTerraform(this._kill),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_mem_recovery_threshold: {
        value: cdktf.numberToHclTerraform(this._sessionMemRecoveryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sw_error_monitor_enable: {
        value: cdktf.numberToHclTerraform(this._swErrorMonitorEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sw_error_recovery_timeout: {
        value: cdktf.numberToHclTerraform(this._swErrorRecoveryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_memory_size_check: {
        value: cdktf.numberToHclTerraform(this._totalMemorySizeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: failSafeConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailSafeConfigAList",
      },
      disable_failsafe: {
        value: failSafeDisableFailsafeToHclTerraform(this._disableFailsafe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailSafeDisableFailsafeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
