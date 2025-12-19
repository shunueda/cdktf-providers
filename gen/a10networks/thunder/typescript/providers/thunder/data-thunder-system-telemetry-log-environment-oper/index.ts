// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTelemetryLogEnvironmentOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#id DataThunderSystemTelemetryLogEnvironmentOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#oper DataThunderSystemTelemetryLogEnvironmentOper#oper}
  */
  readonly oper?: DataThunderSystemTelemetryLogEnvironmentOperOper;
}
export interface DataThunderSystemTelemetryLogEnvironmentOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#fan_report DataThunderSystemTelemetryLogEnvironmentOper#fan_report}
  */
  readonly fanReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#fan_value DataThunderSystemTelemetryLogEnvironmentOper#fan_value}
  */
  readonly fanValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#hw_fan_setting DataThunderSystemTelemetryLogEnvironmentOper#hw_fan_setting}
  */
  readonly hwFanSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#physical_system_temperature DataThunderSystemTelemetryLogEnvironmentOper#physical_system_temperature}
  */
  readonly physicalSystemTemperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#power_unit DataThunderSystemTelemetryLogEnvironmentOper#power_unit}
  */
  readonly powerUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#system_voltage DataThunderSystemTelemetryLogEnvironmentOper#system_voltage}
  */
  readonly systemVoltage?: string;
}

export function dataThunderSystemTelemetryLogEnvironmentOperOperToTerraform(struct?: DataThunderSystemTelemetryLogEnvironmentOperOperOutputReference | DataThunderSystemTelemetryLogEnvironmentOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fan_report: cdktf.stringToTerraform(struct!.fanReport),
    fan_value: cdktf.numberToTerraform(struct!.fanValue),
    hw_fan_setting: cdktf.stringToTerraform(struct!.hwFanSetting),
    physical_system_temperature: cdktf.numberToTerraform(struct!.physicalSystemTemperature),
    power_unit: cdktf.stringToTerraform(struct!.powerUnit),
    system_voltage: cdktf.stringToTerraform(struct!.systemVoltage),
  }
}


export function dataThunderSystemTelemetryLogEnvironmentOperOperToHclTerraform(struct?: DataThunderSystemTelemetryLogEnvironmentOperOperOutputReference | DataThunderSystemTelemetryLogEnvironmentOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fan_report: {
      value: cdktf.stringToHclTerraform(struct!.fanReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan_value: {
      value: cdktf.numberToHclTerraform(struct!.fanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fan_setting: {
      value: cdktf.stringToHclTerraform(struct!.hwFanSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_system_temperature: {
      value: cdktf.numberToHclTerraform(struct!.physicalSystemTemperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_unit: {
      value: cdktf.stringToHclTerraform(struct!.powerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_voltage: {
      value: cdktf.stringToHclTerraform(struct!.systemVoltage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogEnvironmentOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTelemetryLogEnvironmentOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fanReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fanReport = this._fanReport;
    }
    if (this._fanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fanValue = this._fanValue;
    }
    if (this._hwFanSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFanSetting = this._hwFanSetting;
    }
    if (this._physicalSystemTemperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalSystemTemperature = this._physicalSystemTemperature;
    }
    if (this._powerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerUnit = this._powerUnit;
    }
    if (this._systemVoltage !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemVoltage = this._systemVoltage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogEnvironmentOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fanReport = undefined;
      this._fanValue = undefined;
      this._hwFanSetting = undefined;
      this._physicalSystemTemperature = undefined;
      this._powerUnit = undefined;
      this._systemVoltage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fanReport = value.fanReport;
      this._fanValue = value.fanValue;
      this._hwFanSetting = value.hwFanSetting;
      this._physicalSystemTemperature = value.physicalSystemTemperature;
      this._powerUnit = value.powerUnit;
      this._systemVoltage = value.systemVoltage;
    }
  }

  // fan_report - computed: false, optional: true, required: false
  private _fanReport?: string; 
  public get fanReport() {
    return this.getStringAttribute('fan_report');
  }
  public set fanReport(value: string) {
    this._fanReport = value;
  }
  public resetFanReport() {
    this._fanReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fanReportInput() {
    return this._fanReport;
  }

  // fan_value - computed: false, optional: true, required: false
  private _fanValue?: number; 
  public get fanValue() {
    return this.getNumberAttribute('fan_value');
  }
  public set fanValue(value: number) {
    this._fanValue = value;
  }
  public resetFanValue() {
    this._fanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fanValueInput() {
    return this._fanValue;
  }

  // hw_fan_setting - computed: false, optional: true, required: false
  private _hwFanSetting?: string; 
  public get hwFanSetting() {
    return this.getStringAttribute('hw_fan_setting');
  }
  public set hwFanSetting(value: string) {
    this._hwFanSetting = value;
  }
  public resetHwFanSetting() {
    this._hwFanSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFanSettingInput() {
    return this._hwFanSetting;
  }

  // physical_system_temperature - computed: false, optional: true, required: false
  private _physicalSystemTemperature?: number; 
  public get physicalSystemTemperature() {
    return this.getNumberAttribute('physical_system_temperature');
  }
  public set physicalSystemTemperature(value: number) {
    this._physicalSystemTemperature = value;
  }
  public resetPhysicalSystemTemperature() {
    this._physicalSystemTemperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalSystemTemperatureInput() {
    return this._physicalSystemTemperature;
  }

  // power_unit - computed: false, optional: true, required: false
  private _powerUnit?: string; 
  public get powerUnit() {
    return this.getStringAttribute('power_unit');
  }
  public set powerUnit(value: string) {
    this._powerUnit = value;
  }
  public resetPowerUnit() {
    this._powerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerUnitInput() {
    return this._powerUnit;
  }

  // system_voltage - computed: false, optional: true, required: false
  private _systemVoltage?: string; 
  public get systemVoltage() {
    return this.getStringAttribute('system_voltage');
  }
  public set systemVoltage(value: string) {
    this._systemVoltage = value;
  }
  public resetSystemVoltage() {
    this._systemVoltage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemVoltageInput() {
    return this._systemVoltage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper thunder_system_telemetry_log_environment_oper}
*/
export class DataThunderSystemTelemetryLogEnvironmentOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_telemetry_log_environment_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTelemetryLogEnvironmentOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTelemetryLogEnvironmentOper to import
  * @param importFromId The id of the existing DataThunderSystemTelemetryLogEnvironmentOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTelemetryLogEnvironmentOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_telemetry_log_environment_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_telemetry_log_environment_oper thunder_system_telemetry_log_environment_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTelemetryLogEnvironmentOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTelemetryLogEnvironmentOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_telemetry_log_environment_oper',
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
  private _oper = new DataThunderSystemTelemetryLogEnvironmentOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTelemetryLogEnvironmentOperOper) {
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
      oper: dataThunderSystemTelemetryLogEnvironmentOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemTelemetryLogEnvironmentOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTelemetryLogEnvironmentOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
