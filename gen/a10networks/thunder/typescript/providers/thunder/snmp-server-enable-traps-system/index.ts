// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsSystemAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all system group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#all SnmpServerEnableTrapsSystemA#all}
  */
  readonly all?: number;
  /**
  * Enable control CPU usage high trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#control_cpu_high SnmpServerEnableTrapsSystemA#control_cpu_high}
  */
  readonly controlCpuHigh?: number;
  /**
  * Enable data CPU usage high trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#data_cpu_high SnmpServerEnableTrapsSystemA#data_cpu_high}
  */
  readonly dataCpuHigh?: number;
  /**
  * Enable system fan trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#fan SnmpServerEnableTrapsSystemA#fan}
  */
  readonly fan?: number;
  /**
  * Enable file system read-only trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#file_sys_read_only SnmpServerEnableTrapsSystemA#file_sys_read_only}
  */
  readonly fileSysReadOnly?: number;
  /**
  * Enable system high disk usage trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#high_disk_use SnmpServerEnableTrapsSystemA#high_disk_use}
  */
  readonly highDiskUse?: number;
  /**
  * Enable system high memory usage trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#high_memory_use SnmpServerEnableTrapsSystemA#high_memory_use}
  */
  readonly highMemoryUse?: number;
  /**
  * Enable system high temperature trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#high_temp SnmpServerEnableTrapsSystemA#high_temp}
  */
  readonly highTemp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#id SnmpServerEnableTrapsSystemA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable system license management traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#license_management SnmpServerEnableTrapsSystemA#license_management}
  */
  readonly licenseManagement?: number;
  /**
  * Enable system low temperature trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#low_temp SnmpServerEnableTrapsSystemA#low_temp}
  */
  readonly lowTemp?: number;
  /**
  * Enable system packet dropped trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#packet_drop SnmpServerEnableTrapsSystemA#packet_drop}
  */
  readonly packetDrop?: number;
  /**
  * Enable system power supply trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#power SnmpServerEnableTrapsSystemA#power}
  */
  readonly power?: number;
  /**
  * Enable system primary hard disk trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#pri_disk SnmpServerEnableTrapsSystemA#pri_disk}
  */
  readonly priDisk?: number;
  /**
  * Enable system restart trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#restart SnmpServerEnableTrapsSystemA#restart}
  */
  readonly restart?: number;
  /**
  * Enable system secondary hard disk trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#sec_disk SnmpServerEnableTrapsSystemA#sec_disk}
  */
  readonly secDisk?: number;
  /**
  * Enable system shutdown trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#shutdown SnmpServerEnableTrapsSystemA#shutdown}
  */
  readonly shutdown?: number;
  /**
  * Enable system smp resource event trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#smp_resource_event SnmpServerEnableTrapsSystemA#smp_resource_event}
  */
  readonly smpResourceEvent?: number;
  /**
  * Enable system start trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#start SnmpServerEnableTrapsSystemA#start}
  */
  readonly start?: number;
  /**
  * Enable system syslog severity one messages trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#syslog_severity_one SnmpServerEnableTrapsSystemA#syslog_severity_one}
  */
  readonly syslogSeverityOne?: number;
  /**
  * Enable system TACACS monitor server up/down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#tacacs_server_up_down SnmpServerEnableTrapsSystemA#tacacs_server_up_down}
  */
  readonly tacacsServerUpDown?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#uuid SnmpServerEnableTrapsSystemA#uuid}
  */
  readonly uuid?: string;
  /**
  * apps_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#apps_global SnmpServerEnableTrapsSystemA#apps_global}
  */
  readonly appsGlobal?: SnmpServerEnableTrapsSystemAppsGlobalA;
}
export interface SnmpServerEnableTrapsSystemAppsGlobalA {
  /**
  * Enable CPS trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#cps_threshold SnmpServerEnableTrapsSystemA#cps_threshold}
  */
  readonly cpsThreshold?: number;
  /**
  * Enable sessions threshold trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#sessions_threshold SnmpServerEnableTrapsSystemA#sessions_threshold}
  */
  readonly sessionsThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#uuid SnmpServerEnableTrapsSystemA#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsSystemAppsGlobalAToTerraform(struct?: SnmpServerEnableTrapsSystemAppsGlobalAOutputReference | SnmpServerEnableTrapsSystemAppsGlobalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cps_threshold: cdktf.numberToTerraform(struct!.cpsThreshold),
    sessions_threshold: cdktf.numberToTerraform(struct!.sessionsThreshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsSystemAppsGlobalAToHclTerraform(struct?: SnmpServerEnableTrapsSystemAppsGlobalAOutputReference | SnmpServerEnableTrapsSystemAppsGlobalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cps_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions_threshold: {
      value: cdktf.numberToHclTerraform(struct!.sessionsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SnmpServerEnableTrapsSystemAppsGlobalAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsSystemAppsGlobalA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpsThreshold = this._cpsThreshold;
    }
    if (this._sessionsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsThreshold = this._sessionsThreshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsSystemAppsGlobalA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpsThreshold = undefined;
      this._sessionsThreshold = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpsThreshold = value.cpsThreshold;
      this._sessionsThreshold = value.sessionsThreshold;
      this._uuid = value.uuid;
    }
  }

  // cps_threshold - computed: false, optional: true, required: false
  private _cpsThreshold?: number; 
  public get cpsThreshold() {
    return this.getNumberAttribute('cps_threshold');
  }
  public set cpsThreshold(value: number) {
    this._cpsThreshold = value;
  }
  public resetCpsThreshold() {
    this._cpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsThresholdInput() {
    return this._cpsThreshold;
  }

  // sessions_threshold - computed: false, optional: true, required: false
  private _sessionsThreshold?: number; 
  public get sessionsThreshold() {
    return this.getNumberAttribute('sessions_threshold');
  }
  public set sessionsThreshold(value: number) {
    this._sessionsThreshold = value;
  }
  public resetSessionsThreshold() {
    this._sessionsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsThresholdInput() {
    return this._sessionsThreshold;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system thunder_snmp_server_enable_traps_system}
*/
export class SnmpServerEnableTrapsSystemA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsSystemA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsSystemA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsSystemA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsSystemA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_system thunder_snmp_server_enable_traps_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsSystemAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsSystemAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_system',
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
    this._all = config.all;
    this._controlCpuHigh = config.controlCpuHigh;
    this._dataCpuHigh = config.dataCpuHigh;
    this._fan = config.fan;
    this._fileSysReadOnly = config.fileSysReadOnly;
    this._highDiskUse = config.highDiskUse;
    this._highMemoryUse = config.highMemoryUse;
    this._highTemp = config.highTemp;
    this._id = config.id;
    this._licenseManagement = config.licenseManagement;
    this._lowTemp = config.lowTemp;
    this._packetDrop = config.packetDrop;
    this._power = config.power;
    this._priDisk = config.priDisk;
    this._restart = config.restart;
    this._secDisk = config.secDisk;
    this._shutdown = config.shutdown;
    this._smpResourceEvent = config.smpResourceEvent;
    this._start = config.start;
    this._syslogSeverityOne = config.syslogSeverityOne;
    this._tacacsServerUpDown = config.tacacsServerUpDown;
    this._uuid = config.uuid;
    this._appsGlobal.internalValue = config.appsGlobal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // control_cpu_high - computed: false, optional: true, required: false
  private _controlCpuHigh?: number; 
  public get controlCpuHigh() {
    return this.getNumberAttribute('control_cpu_high');
  }
  public set controlCpuHigh(value: number) {
    this._controlCpuHigh = value;
  }
  public resetControlCpuHigh() {
    this._controlCpuHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlCpuHighInput() {
    return this._controlCpuHigh;
  }

  // data_cpu_high - computed: false, optional: true, required: false
  private _dataCpuHigh?: number; 
  public get dataCpuHigh() {
    return this.getNumberAttribute('data_cpu_high');
  }
  public set dataCpuHigh(value: number) {
    this._dataCpuHigh = value;
  }
  public resetDataCpuHigh() {
    this._dataCpuHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCpuHighInput() {
    return this._dataCpuHigh;
  }

  // fan - computed: false, optional: true, required: false
  private _fan?: number; 
  public get fan() {
    return this.getNumberAttribute('fan');
  }
  public set fan(value: number) {
    this._fan = value;
  }
  public resetFan() {
    this._fan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fanInput() {
    return this._fan;
  }

  // file_sys_read_only - computed: false, optional: true, required: false
  private _fileSysReadOnly?: number; 
  public get fileSysReadOnly() {
    return this.getNumberAttribute('file_sys_read_only');
  }
  public set fileSysReadOnly(value: number) {
    this._fileSysReadOnly = value;
  }
  public resetFileSysReadOnly() {
    this._fileSysReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSysReadOnlyInput() {
    return this._fileSysReadOnly;
  }

  // high_disk_use - computed: false, optional: true, required: false
  private _highDiskUse?: number; 
  public get highDiskUse() {
    return this.getNumberAttribute('high_disk_use');
  }
  public set highDiskUse(value: number) {
    this._highDiskUse = value;
  }
  public resetHighDiskUse() {
    this._highDiskUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highDiskUseInput() {
    return this._highDiskUse;
  }

  // high_memory_use - computed: false, optional: true, required: false
  private _highMemoryUse?: number; 
  public get highMemoryUse() {
    return this.getNumberAttribute('high_memory_use');
  }
  public set highMemoryUse(value: number) {
    this._highMemoryUse = value;
  }
  public resetHighMemoryUse() {
    this._highMemoryUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highMemoryUseInput() {
    return this._highMemoryUse;
  }

  // high_temp - computed: false, optional: true, required: false
  private _highTemp?: number; 
  public get highTemp() {
    return this.getNumberAttribute('high_temp');
  }
  public set highTemp(value: number) {
    this._highTemp = value;
  }
  public resetHighTemp() {
    this._highTemp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highTempInput() {
    return this._highTemp;
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

  // license_management - computed: false, optional: true, required: false
  private _licenseManagement?: number; 
  public get licenseManagement() {
    return this.getNumberAttribute('license_management');
  }
  public set licenseManagement(value: number) {
    this._licenseManagement = value;
  }
  public resetLicenseManagement() {
    this._licenseManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseManagementInput() {
    return this._licenseManagement;
  }

  // low_temp - computed: false, optional: true, required: false
  private _lowTemp?: number; 
  public get lowTemp() {
    return this.getNumberAttribute('low_temp');
  }
  public set lowTemp(value: number) {
    this._lowTemp = value;
  }
  public resetLowTemp() {
    this._lowTemp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowTempInput() {
    return this._lowTemp;
  }

  // packet_drop - computed: false, optional: true, required: false
  private _packetDrop?: number; 
  public get packetDrop() {
    return this.getNumberAttribute('packet_drop');
  }
  public set packetDrop(value: number) {
    this._packetDrop = value;
  }
  public resetPacketDrop() {
    this._packetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDropInput() {
    return this._packetDrop;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // pri_disk - computed: false, optional: true, required: false
  private _priDisk?: number; 
  public get priDisk() {
    return this.getNumberAttribute('pri_disk');
  }
  public set priDisk(value: number) {
    this._priDisk = value;
  }
  public resetPriDisk() {
    this._priDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priDiskInput() {
    return this._priDisk;
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: number; 
  public get restart() {
    return this.getNumberAttribute('restart');
  }
  public set restart(value: number) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // sec_disk - computed: false, optional: true, required: false
  private _secDisk?: number; 
  public get secDisk() {
    return this.getNumberAttribute('sec_disk');
  }
  public set secDisk(value: number) {
    this._secDisk = value;
  }
  public resetSecDisk() {
    this._secDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secDiskInput() {
    return this._secDisk;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: number; 
  public get shutdown() {
    return this.getNumberAttribute('shutdown');
  }
  public set shutdown(value: number) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // smp_resource_event - computed: false, optional: true, required: false
  private _smpResourceEvent?: number; 
  public get smpResourceEvent() {
    return this.getNumberAttribute('smp_resource_event');
  }
  public set smpResourceEvent(value: number) {
    this._smpResourceEvent = value;
  }
  public resetSmpResourceEvent() {
    this._smpResourceEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpResourceEventInput() {
    return this._smpResourceEvent;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // syslog_severity_one - computed: false, optional: true, required: false
  private _syslogSeverityOne?: number; 
  public get syslogSeverityOne() {
    return this.getNumberAttribute('syslog_severity_one');
  }
  public set syslogSeverityOne(value: number) {
    this._syslogSeverityOne = value;
  }
  public resetSyslogSeverityOne() {
    this._syslogSeverityOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSeverityOneInput() {
    return this._syslogSeverityOne;
  }

  // tacacs_server_up_down - computed: false, optional: true, required: false
  private _tacacsServerUpDown?: number; 
  public get tacacsServerUpDown() {
    return this.getNumberAttribute('tacacs_server_up_down');
  }
  public set tacacsServerUpDown(value: number) {
    this._tacacsServerUpDown = value;
  }
  public resetTacacsServerUpDown() {
    this._tacacsServerUpDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsServerUpDownInput() {
    return this._tacacsServerUpDown;
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

  // apps_global - computed: false, optional: true, required: false
  private _appsGlobal = new SnmpServerEnableTrapsSystemAppsGlobalAOutputReference(this, "apps_global");
  public get appsGlobal() {
    return this._appsGlobal;
  }
  public putAppsGlobal(value: SnmpServerEnableTrapsSystemAppsGlobalA) {
    this._appsGlobal.internalValue = value;
  }
  public resetAppsGlobal() {
    this._appsGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsGlobalInput() {
    return this._appsGlobal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      control_cpu_high: cdktf.numberToTerraform(this._controlCpuHigh),
      data_cpu_high: cdktf.numberToTerraform(this._dataCpuHigh),
      fan: cdktf.numberToTerraform(this._fan),
      file_sys_read_only: cdktf.numberToTerraform(this._fileSysReadOnly),
      high_disk_use: cdktf.numberToTerraform(this._highDiskUse),
      high_memory_use: cdktf.numberToTerraform(this._highMemoryUse),
      high_temp: cdktf.numberToTerraform(this._highTemp),
      id: cdktf.stringToTerraform(this._id),
      license_management: cdktf.numberToTerraform(this._licenseManagement),
      low_temp: cdktf.numberToTerraform(this._lowTemp),
      packet_drop: cdktf.numberToTerraform(this._packetDrop),
      power: cdktf.numberToTerraform(this._power),
      pri_disk: cdktf.numberToTerraform(this._priDisk),
      restart: cdktf.numberToTerraform(this._restart),
      sec_disk: cdktf.numberToTerraform(this._secDisk),
      shutdown: cdktf.numberToTerraform(this._shutdown),
      smp_resource_event: cdktf.numberToTerraform(this._smpResourceEvent),
      start: cdktf.numberToTerraform(this._start),
      syslog_severity_one: cdktf.numberToTerraform(this._syslogSeverityOne),
      tacacs_server_up_down: cdktf.numberToTerraform(this._tacacsServerUpDown),
      uuid: cdktf.stringToTerraform(this._uuid),
      apps_global: snmpServerEnableTrapsSystemAppsGlobalAToTerraform(this._appsGlobal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      control_cpu_high: {
        value: cdktf.numberToHclTerraform(this._controlCpuHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_cpu_high: {
        value: cdktf.numberToHclTerraform(this._dataCpuHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fan: {
        value: cdktf.numberToHclTerraform(this._fan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_sys_read_only: {
        value: cdktf.numberToHclTerraform(this._fileSysReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      high_disk_use: {
        value: cdktf.numberToHclTerraform(this._highDiskUse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      high_memory_use: {
        value: cdktf.numberToHclTerraform(this._highMemoryUse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      high_temp: {
        value: cdktf.numberToHclTerraform(this._highTemp),
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
      license_management: {
        value: cdktf.numberToHclTerraform(this._licenseManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      low_temp: {
        value: cdktf.numberToHclTerraform(this._lowTemp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_drop: {
        value: cdktf.numberToHclTerraform(this._packetDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      power: {
        value: cdktf.numberToHclTerraform(this._power),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pri_disk: {
        value: cdktf.numberToHclTerraform(this._priDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restart: {
        value: cdktf.numberToHclTerraform(this._restart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sec_disk: {
        value: cdktf.numberToHclTerraform(this._secDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shutdown: {
        value: cdktf.numberToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_resource_event: {
        value: cdktf.numberToHclTerraform(this._smpResourceEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start: {
        value: cdktf.numberToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_severity_one: {
        value: cdktf.numberToHclTerraform(this._syslogSeverityOne),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacacs_server_up_down: {
        value: cdktf.numberToHclTerraform(this._tacacsServerUpDown),
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
      apps_global: {
        value: snmpServerEnableTrapsSystemAppsGlobalAToHclTerraform(this._appsGlobal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerEnableTrapsSystemAppsGlobalAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
