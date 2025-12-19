// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_partition_metrics_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTelemetryLogPartitionMetricsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_partition_metrics_oper#id DataThunderSystemTelemetryLogPartitionMetricsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_partition_metrics_oper#oper DataThunderSystemTelemetryLogPartitionMetricsOper#oper}
  */
  readonly oper?: DataThunderSystemTelemetryLogPartitionMetricsOperOper;
}
export interface DataThunderSystemTelemetryLogPartitionMetricsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_partition_metrics_oper#data_cpu_usage DataThunderSystemTelemetryLogPartitionMetricsOper#data_cpu_usage}
  */
  readonly dataCpuUsage?: number;
}

export function dataThunderSystemTelemetryLogPartitionMetricsOperOperToTerraform(struct?: DataThunderSystemTelemetryLogPartitionMetricsOperOperOutputReference | DataThunderSystemTelemetryLogPartitionMetricsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cpu_usage: cdktf.numberToTerraform(struct!.dataCpuUsage),
  }
}


export function dataThunderSystemTelemetryLogPartitionMetricsOperOperToHclTerraform(struct?: DataThunderSystemTelemetryLogPartitionMetricsOperOperOutputReference | DataThunderSystemTelemetryLogPartitionMetricsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cpu_usage: {
      value: cdktf.numberToHclTerraform(struct!.dataCpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogPartitionMetricsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTelemetryLogPartitionMetricsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCpuUsage = this._dataCpuUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogPartitionMetricsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCpuUsage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCpuUsage = value.dataCpuUsage;
    }
  }

  // data_cpu_usage - computed: false, optional: true, required: false
  private _dataCpuUsage?: number; 
  public get dataCpuUsage() {
    return this.getNumberAttribute('data_cpu_usage');
  }
  public set dataCpuUsage(value: number) {
    this._dataCpuUsage = value;
  }
  public resetDataCpuUsage() {
    this._dataCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCpuUsageInput() {
    return this._dataCpuUsage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_partition_metrics_oper thunder_system_telemetry_log_partition_metrics_oper}
*/
export class DataThunderSystemTelemetryLogPartitionMetricsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_telemetry_log_partition_metrics_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTelemetryLogPartitionMetricsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTelemetryLogPartitionMetricsOper to import
  * @param importFromId The id of the existing DataThunderSystemTelemetryLogPartitionMetricsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_partition_metrics_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTelemetryLogPartitionMetricsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_telemetry_log_partition_metrics_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_partition_metrics_oper thunder_system_telemetry_log_partition_metrics_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTelemetryLogPartitionMetricsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTelemetryLogPartitionMetricsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_telemetry_log_partition_metrics_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new DataThunderSystemTelemetryLogPartitionMetricsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTelemetryLogPartitionMetricsOperOper) {
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
      oper: dataThunderSystemTelemetryLogPartitionMetricsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemTelemetryLogPartitionMetricsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTelemetryLogPartitionMetricsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
