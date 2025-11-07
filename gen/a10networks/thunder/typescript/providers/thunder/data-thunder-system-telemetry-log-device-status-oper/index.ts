// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTelemetryLogDeviceStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#id DataThunderSystemTelemetryLogDeviceStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#oper DataThunderSystemTelemetryLogDeviceStatusOper#oper}
  */
  readonly oper?: DataThunderSystemTelemetryLogDeviceStatusOperOper;
}
export interface DataThunderSystemTelemetryLogDeviceStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#control_cpu_usage DataThunderSystemTelemetryLogDeviceStatusOper#control_cpu_usage}
  */
  readonly controlCpuUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#cpu_usage_overall DataThunderSystemTelemetryLogDeviceStatusOper#cpu_usage_overall}
  */
  readonly cpuUsageOverall?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#memory_usage DataThunderSystemTelemetryLogDeviceStatusOper#memory_usage}
  */
  readonly memoryUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#ratio_buffer_count DataThunderSystemTelemetryLogDeviceStatusOper#ratio_buffer_count}
  */
  readonly ratioBufferCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#ratio_session_count DataThunderSystemTelemetryLogDeviceStatusOper#ratio_session_count}
  */
  readonly ratioSessionCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#total_bytes_in DataThunderSystemTelemetryLogDeviceStatusOper#total_bytes_in}
  */
  readonly totalBytesIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#total_bytes_out DataThunderSystemTelemetryLogDeviceStatusOper#total_bytes_out}
  */
  readonly totalBytesOut?: number;
}

export function dataThunderSystemTelemetryLogDeviceStatusOperOperToTerraform(struct?: DataThunderSystemTelemetryLogDeviceStatusOperOperOutputReference | DataThunderSystemTelemetryLogDeviceStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_cpu_usage: cdktf.numberToTerraform(struct!.controlCpuUsage),
    cpu_usage_overall: cdktf.numberToTerraform(struct!.cpuUsageOverall),
    memory_usage: cdktf.stringToTerraform(struct!.memoryUsage),
    ratio_buffer_count: cdktf.stringToTerraform(struct!.ratioBufferCount),
    ratio_session_count: cdktf.stringToTerraform(struct!.ratioSessionCount),
    total_bytes_in: cdktf.numberToTerraform(struct!.totalBytesIn),
    total_bytes_out: cdktf.numberToTerraform(struct!.totalBytesOut),
  }
}


export function dataThunderSystemTelemetryLogDeviceStatusOperOperToHclTerraform(struct?: DataThunderSystemTelemetryLogDeviceStatusOperOperOutputReference | DataThunderSystemTelemetryLogDeviceStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_cpu_usage: {
      value: cdktf.numberToHclTerraform(struct!.controlCpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_usage_overall: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsageOverall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage: {
      value: cdktf.stringToHclTerraform(struct!.memoryUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio_buffer_count: {
      value: cdktf.stringToHclTerraform(struct!.ratioBufferCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio_session_count: {
      value: cdktf.stringToHclTerraform(struct!.ratioSessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_bytes_in: {
      value: cdktf.numberToHclTerraform(struct!.totalBytesIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_bytes_out: {
      value: cdktf.numberToHclTerraform(struct!.totalBytesOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogDeviceStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTelemetryLogDeviceStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlCpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlCpuUsage = this._controlCpuUsage;
    }
    if (this._cpuUsageOverall !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsageOverall = this._cpuUsageOverall;
    }
    if (this._memoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsage = this._memoryUsage;
    }
    if (this._ratioBufferCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratioBufferCount = this._ratioBufferCount;
    }
    if (this._ratioSessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratioSessionCount = this._ratioSessionCount;
    }
    if (this._totalBytesIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytesIn = this._totalBytesIn;
    }
    if (this._totalBytesOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytesOut = this._totalBytesOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogDeviceStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlCpuUsage = undefined;
      this._cpuUsageOverall = undefined;
      this._memoryUsage = undefined;
      this._ratioBufferCount = undefined;
      this._ratioSessionCount = undefined;
      this._totalBytesIn = undefined;
      this._totalBytesOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlCpuUsage = value.controlCpuUsage;
      this._cpuUsageOverall = value.cpuUsageOverall;
      this._memoryUsage = value.memoryUsage;
      this._ratioBufferCount = value.ratioBufferCount;
      this._ratioSessionCount = value.ratioSessionCount;
      this._totalBytesIn = value.totalBytesIn;
      this._totalBytesOut = value.totalBytesOut;
    }
  }

  // control_cpu_usage - computed: false, optional: true, required: false
  private _controlCpuUsage?: number; 
  public get controlCpuUsage() {
    return this.getNumberAttribute('control_cpu_usage');
  }
  public set controlCpuUsage(value: number) {
    this._controlCpuUsage = value;
  }
  public resetControlCpuUsage() {
    this._controlCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlCpuUsageInput() {
    return this._controlCpuUsage;
  }

  // cpu_usage_overall - computed: false, optional: true, required: false
  private _cpuUsageOverall?: number; 
  public get cpuUsageOverall() {
    return this.getNumberAttribute('cpu_usage_overall');
  }
  public set cpuUsageOverall(value: number) {
    this._cpuUsageOverall = value;
  }
  public resetCpuUsageOverall() {
    this._cpuUsageOverall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageOverallInput() {
    return this._cpuUsageOverall;
  }

  // memory_usage - computed: false, optional: true, required: false
  private _memoryUsage?: string; 
  public get memoryUsage() {
    return this.getStringAttribute('memory_usage');
  }
  public set memoryUsage(value: string) {
    this._memoryUsage = value;
  }
  public resetMemoryUsage() {
    this._memoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageInput() {
    return this._memoryUsage;
  }

  // ratio_buffer_count - computed: false, optional: true, required: false
  private _ratioBufferCount?: string; 
  public get ratioBufferCount() {
    return this.getStringAttribute('ratio_buffer_count');
  }
  public set ratioBufferCount(value: string) {
    this._ratioBufferCount = value;
  }
  public resetRatioBufferCount() {
    this._ratioBufferCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioBufferCountInput() {
    return this._ratioBufferCount;
  }

  // ratio_session_count - computed: false, optional: true, required: false
  private _ratioSessionCount?: string; 
  public get ratioSessionCount() {
    return this.getStringAttribute('ratio_session_count');
  }
  public set ratioSessionCount(value: string) {
    this._ratioSessionCount = value;
  }
  public resetRatioSessionCount() {
    this._ratioSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioSessionCountInput() {
    return this._ratioSessionCount;
  }

  // total_bytes_in - computed: false, optional: true, required: false
  private _totalBytesIn?: number; 
  public get totalBytesIn() {
    return this.getNumberAttribute('total_bytes_in');
  }
  public set totalBytesIn(value: number) {
    this._totalBytesIn = value;
  }
  public resetTotalBytesIn() {
    this._totalBytesIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesInInput() {
    return this._totalBytesIn;
  }

  // total_bytes_out - computed: false, optional: true, required: false
  private _totalBytesOut?: number; 
  public get totalBytesOut() {
    return this.getNumberAttribute('total_bytes_out');
  }
  public set totalBytesOut(value: number) {
    this._totalBytesOut = value;
  }
  public resetTotalBytesOut() {
    this._totalBytesOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesOutInput() {
    return this._totalBytesOut;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper thunder_system_telemetry_log_device_status_oper}
*/
export class DataThunderSystemTelemetryLogDeviceStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_telemetry_log_device_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTelemetryLogDeviceStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTelemetryLogDeviceStatusOper to import
  * @param importFromId The id of the existing DataThunderSystemTelemetryLogDeviceStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTelemetryLogDeviceStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_telemetry_log_device_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_device_status_oper thunder_system_telemetry_log_device_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTelemetryLogDeviceStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTelemetryLogDeviceStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_telemetry_log_device_status_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemTelemetryLogDeviceStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTelemetryLogDeviceStatusOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemTelemetryLogDeviceStatusOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSystemTelemetryLogDeviceStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTelemetryLogDeviceStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
