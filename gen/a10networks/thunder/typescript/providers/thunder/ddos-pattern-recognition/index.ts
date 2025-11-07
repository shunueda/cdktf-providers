// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosPatternRecognitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capture Backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#capture_backup DdosPatternRecognition#capture_backup}
  */
  readonly captureBackup?: number;
  /**
  * Capturing state timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#capturing_timeout DdosPatternRecognition#capturing_timeout}
  */
  readonly capturingTimeout?: number;
  /**
  * CPU Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#cpu_limit DdosPatternRecognition#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Configure the number of dedicated cores for Pattern Recognition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#dedicated_cpus DdosPatternRecognition#dedicated_cpus}
  */
  readonly dedicatedCpus?: number;
  /**
  * Disable application payload processing for all ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#disable_app_payload_all DdosPatternRecognition#disable_app_payload_all}
  */
  readonly disableAppPayloadAll?: number;
  /**
  * Error state timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#error_timeout DdosPatternRecognition#error_timeout}
  */
  readonly errorTimeout?: number;
  /**
  * Extracting state timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#extracting_timeout DdosPatternRecognition#extracting_timeout}
  */
  readonly extractingTimeout?: number;
  /**
  * 'enable': Enable Pattern Recognition hardware filter; 'disable': Disable Pattern Recognition harware filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#hardware_filter DdosPatternRecognition#hardware_filter}
  */
  readonly hardwareFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#id DdosPatternRecognition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sample Size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#sample_size DdosPatternRecognition#sample_size}
  */
  readonly sampleSize?: number;
  /**
  * Scheduling state timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#scheduling_timeout DdosPatternRecognition#scheduling_timeout}
  */
  readonly schedulingTimeout?: number;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#sensitivity DdosPatternRecognition#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * Configure the interval in minutes of periodic event (Default: 5 minutes, 0: No periodic updates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#sflow_event_periodic_interval DdosPatternRecognition#sflow_event_periodic_interval}
  */
  readonly sflowEventPeriodicInterval?: number;
  /**
  * 'enable': Enable Pattern Recognition; 'disable': Disable Pattern Recognition;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#toggle DdosPatternRecognition#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#uuid DdosPatternRecognition#uuid}
  */
  readonly uuid?: string;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#cpu DdosPatternRecognition#cpu}
  */
  readonly cpu?: DdosPatternRecognitionCpu;
}
export interface DdosPatternRecognitionCpu {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#uuid DdosPatternRecognition#uuid}
  */
  readonly uuid?: string;
}

export function ddosPatternRecognitionCpuToTerraform(struct?: DdosPatternRecognitionCpuOutputReference | DdosPatternRecognitionCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosPatternRecognitionCpuToHclTerraform(struct?: DdosPatternRecognitionCpuOutputReference | DdosPatternRecognitionCpu): any {
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

export class DdosPatternRecognitionCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosPatternRecognitionCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosPatternRecognitionCpu | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition thunder_ddos_pattern_recognition}
*/
export class DdosPatternRecognition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_pattern_recognition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosPatternRecognition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosPatternRecognition to import
  * @param importFromId The id of the existing DdosPatternRecognition that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosPatternRecognition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_pattern_recognition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_pattern_recognition thunder_ddos_pattern_recognition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosPatternRecognitionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosPatternRecognitionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_pattern_recognition',
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
    this._captureBackup = config.captureBackup;
    this._capturingTimeout = config.capturingTimeout;
    this._cpuLimit = config.cpuLimit;
    this._dedicatedCpus = config.dedicatedCpus;
    this._disableAppPayloadAll = config.disableAppPayloadAll;
    this._errorTimeout = config.errorTimeout;
    this._extractingTimeout = config.extractingTimeout;
    this._hardwareFilter = config.hardwareFilter;
    this._id = config.id;
    this._sampleSize = config.sampleSize;
    this._schedulingTimeout = config.schedulingTimeout;
    this._sensitivity = config.sensitivity;
    this._sflowEventPeriodicInterval = config.sflowEventPeriodicInterval;
    this._toggle = config.toggle;
    this._uuid = config.uuid;
    this._cpu.internalValue = config.cpu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_backup - computed: false, optional: true, required: false
  private _captureBackup?: number; 
  public get captureBackup() {
    return this.getNumberAttribute('capture_backup');
  }
  public set captureBackup(value: number) {
    this._captureBackup = value;
  }
  public resetCaptureBackup() {
    this._captureBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureBackupInput() {
    return this._captureBackup;
  }

  // capturing_timeout - computed: false, optional: true, required: false
  private _capturingTimeout?: number; 
  public get capturingTimeout() {
    return this.getNumberAttribute('capturing_timeout');
  }
  public set capturingTimeout(value: number) {
    this._capturingTimeout = value;
  }
  public resetCapturingTimeout() {
    this._capturingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capturingTimeoutInput() {
    return this._capturingTimeout;
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // dedicated_cpus - computed: false, optional: true, required: false
  private _dedicatedCpus?: number; 
  public get dedicatedCpus() {
    return this.getNumberAttribute('dedicated_cpus');
  }
  public set dedicatedCpus(value: number) {
    this._dedicatedCpus = value;
  }
  public resetDedicatedCpus() {
    this._dedicatedCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedCpusInput() {
    return this._dedicatedCpus;
  }

  // disable_app_payload_all - computed: false, optional: true, required: false
  private _disableAppPayloadAll?: number; 
  public get disableAppPayloadAll() {
    return this.getNumberAttribute('disable_app_payload_all');
  }
  public set disableAppPayloadAll(value: number) {
    this._disableAppPayloadAll = value;
  }
  public resetDisableAppPayloadAll() {
    this._disableAppPayloadAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAppPayloadAllInput() {
    return this._disableAppPayloadAll;
  }

  // error_timeout - computed: false, optional: true, required: false
  private _errorTimeout?: number; 
  public get errorTimeout() {
    return this.getNumberAttribute('error_timeout');
  }
  public set errorTimeout(value: number) {
    this._errorTimeout = value;
  }
  public resetErrorTimeout() {
    this._errorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTimeoutInput() {
    return this._errorTimeout;
  }

  // extracting_timeout - computed: false, optional: true, required: false
  private _extractingTimeout?: number; 
  public get extractingTimeout() {
    return this.getNumberAttribute('extracting_timeout');
  }
  public set extractingTimeout(value: number) {
    this._extractingTimeout = value;
  }
  public resetExtractingTimeout() {
    this._extractingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractingTimeoutInput() {
    return this._extractingTimeout;
  }

  // hardware_filter - computed: false, optional: true, required: false
  private _hardwareFilter?: string; 
  public get hardwareFilter() {
    return this.getStringAttribute('hardware_filter');
  }
  public set hardwareFilter(value: string) {
    this._hardwareFilter = value;
  }
  public resetHardwareFilter() {
    this._hardwareFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareFilterInput() {
    return this._hardwareFilter;
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

  // sample_size - computed: false, optional: true, required: false
  private _sampleSize?: number; 
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
  public set sampleSize(value: number) {
    this._sampleSize = value;
  }
  public resetSampleSize() {
    this._sampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeInput() {
    return this._sampleSize;
  }

  // scheduling_timeout - computed: false, optional: true, required: false
  private _schedulingTimeout?: number; 
  public get schedulingTimeout() {
    return this.getNumberAttribute('scheduling_timeout');
  }
  public set schedulingTimeout(value: number) {
    this._schedulingTimeout = value;
  }
  public resetSchedulingTimeout() {
    this._schedulingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTimeoutInput() {
    return this._schedulingTimeout;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // sflow_event_periodic_interval - computed: false, optional: true, required: false
  private _sflowEventPeriodicInterval?: number; 
  public get sflowEventPeriodicInterval() {
    return this.getNumberAttribute('sflow_event_periodic_interval');
  }
  public set sflowEventPeriodicInterval(value: number) {
    this._sflowEventPeriodicInterval = value;
  }
  public resetSflowEventPeriodicInterval() {
    this._sflowEventPeriodicInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowEventPeriodicIntervalInput() {
    return this._sflowEventPeriodicInterval;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DdosPatternRecognitionCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DdosPatternRecognitionCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_backup: cdktf.numberToTerraform(this._captureBackup),
      capturing_timeout: cdktf.numberToTerraform(this._capturingTimeout),
      cpu_limit: cdktf.numberToTerraform(this._cpuLimit),
      dedicated_cpus: cdktf.numberToTerraform(this._dedicatedCpus),
      disable_app_payload_all: cdktf.numberToTerraform(this._disableAppPayloadAll),
      error_timeout: cdktf.numberToTerraform(this._errorTimeout),
      extracting_timeout: cdktf.numberToTerraform(this._extractingTimeout),
      hardware_filter: cdktf.stringToTerraform(this._hardwareFilter),
      id: cdktf.stringToTerraform(this._id),
      sample_size: cdktf.numberToTerraform(this._sampleSize),
      scheduling_timeout: cdktf.numberToTerraform(this._schedulingTimeout),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      sflow_event_periodic_interval: cdktf.numberToTerraform(this._sflowEventPeriodicInterval),
      toggle: cdktf.stringToTerraform(this._toggle),
      uuid: cdktf.stringToTerraform(this._uuid),
      cpu: ddosPatternRecognitionCpuToTerraform(this._cpu.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_backup: {
        value: cdktf.numberToHclTerraform(this._captureBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capturing_timeout: {
        value: cdktf.numberToHclTerraform(this._capturingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_limit: {
        value: cdktf.numberToHclTerraform(this._cpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dedicated_cpus: {
        value: cdktf.numberToHclTerraform(this._dedicatedCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_app_payload_all: {
        value: cdktf.numberToHclTerraform(this._disableAppPayloadAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_timeout: {
        value: cdktf.numberToHclTerraform(this._errorTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extracting_timeout: {
        value: cdktf.numberToHclTerraform(this._extractingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hardware_filter: {
        value: cdktf.stringToHclTerraform(this._hardwareFilter),
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
      sample_size: {
        value: cdktf.numberToHclTerraform(this._sampleSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduling_timeout: {
        value: cdktf.numberToHclTerraform(this._schedulingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sensitivity: {
        value: cdktf.stringToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sflow_event_periodic_interval: {
        value: cdktf.numberToHclTerraform(this._sflowEventPeriodicInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      toggle: {
        value: cdktf.stringToHclTerraform(this._toggle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: ddosPatternRecognitionCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosPatternRecognitionCpuList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
