// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewShowMonitorOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#id DataThunderSystemViewShowMonitorOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#oper DataThunderSystemViewShowMonitorOper#oper}
  */
  readonly oper?: DataThunderSystemViewShowMonitorOperOper;
}
export interface DataThunderSystemViewShowMonitorOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#buff_drop DataThunderSystemViewShowMonitorOper#buff_drop}
  */
  readonly buffDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#buff_value DataThunderSystemViewShowMonitorOper#buff_value}
  */
  readonly buffValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#ctrl_cpu DataThunderSystemViewShowMonitorOper#ctrl_cpu}
  */
  readonly ctrlCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#data_cpu DataThunderSystemViewShowMonitorOper#data_cpu}
  */
  readonly dataCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#disk_value DataThunderSystemViewShowMonitorOper#disk_value}
  */
  readonly diskValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#mem_value DataThunderSystemViewShowMonitorOper#mem_value}
  */
  readonly memValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#smp0 DataThunderSystemViewShowMonitorOper#smp0}
  */
  readonly smp0?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#smp1 DataThunderSystemViewShowMonitorOper#smp1}
  */
  readonly smp1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#smp2 DataThunderSystemViewShowMonitorOper#smp2}
  */
  readonly smp2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#smp3 DataThunderSystemViewShowMonitorOper#smp3}
  */
  readonly smp3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#smp4 DataThunderSystemViewShowMonitorOper#smp4}
  */
  readonly smp4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#spm0 DataThunderSystemViewShowMonitorOper#spm0}
  */
  readonly spm0?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#spm1 DataThunderSystemViewShowMonitorOper#spm1}
  */
  readonly spm1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#spm2 DataThunderSystemViewShowMonitorOper#spm2}
  */
  readonly spm2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#spm3 DataThunderSystemViewShowMonitorOper#spm3}
  */
  readonly spm3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#spm4 DataThunderSystemViewShowMonitorOper#spm4}
  */
  readonly spm4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#warn_temp DataThunderSystemViewShowMonitorOper#warn_temp}
  */
  readonly warnTemp?: number;
}

export function dataThunderSystemViewShowMonitorOperOperToTerraform(struct?: DataThunderSystemViewShowMonitorOperOperOutputReference | DataThunderSystemViewShowMonitorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buff_drop: cdktf.numberToTerraform(struct!.buffDrop),
    buff_value: cdktf.numberToTerraform(struct!.buffValue),
    ctrl_cpu: cdktf.numberToTerraform(struct!.ctrlCpu),
    data_cpu: cdktf.numberToTerraform(struct!.dataCpu),
    disk_value: cdktf.numberToTerraform(struct!.diskValue),
    mem_value: cdktf.numberToTerraform(struct!.memValue),
    smp0: cdktf.numberToTerraform(struct!.smp0),
    smp1: cdktf.numberToTerraform(struct!.smp1),
    smp2: cdktf.numberToTerraform(struct!.smp2),
    smp3: cdktf.numberToTerraform(struct!.smp3),
    smp4: cdktf.numberToTerraform(struct!.smp4),
    spm0: cdktf.numberToTerraform(struct!.spm0),
    spm1: cdktf.numberToTerraform(struct!.spm1),
    spm2: cdktf.numberToTerraform(struct!.spm2),
    spm3: cdktf.numberToTerraform(struct!.spm3),
    spm4: cdktf.numberToTerraform(struct!.spm4),
    warn_temp: cdktf.numberToTerraform(struct!.warnTemp),
  }
}


export function dataThunderSystemViewShowMonitorOperOperToHclTerraform(struct?: DataThunderSystemViewShowMonitorOperOperOutputReference | DataThunderSystemViewShowMonitorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buff_drop: {
      value: cdktf.numberToHclTerraform(struct!.buffDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buff_value: {
      value: cdktf.numberToHclTerraform(struct!.buffValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctrl_cpu: {
      value: cdktf.numberToHclTerraform(struct!.ctrlCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_cpu: {
      value: cdktf.numberToHclTerraform(struct!.dataCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_value: {
      value: cdktf.numberToHclTerraform(struct!.diskValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_value: {
      value: cdktf.numberToHclTerraform(struct!.memValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp0: {
      value: cdktf.numberToHclTerraform(struct!.smp0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp1: {
      value: cdktf.numberToHclTerraform(struct!.smp1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp2: {
      value: cdktf.numberToHclTerraform(struct!.smp2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp3: {
      value: cdktf.numberToHclTerraform(struct!.smp3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp4: {
      value: cdktf.numberToHclTerraform(struct!.smp4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spm0: {
      value: cdktf.numberToHclTerraform(struct!.spm0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spm1: {
      value: cdktf.numberToHclTerraform(struct!.spm1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spm2: {
      value: cdktf.numberToHclTerraform(struct!.spm2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spm3: {
      value: cdktf.numberToHclTerraform(struct!.spm3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spm4: {
      value: cdktf.numberToHclTerraform(struct!.spm4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warn_temp: {
      value: cdktf.numberToHclTerraform(struct!.warnTemp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewShowMonitorOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewShowMonitorOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffDrop = this._buffDrop;
    }
    if (this._buffValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffValue = this._buffValue;
    }
    if (this._ctrlCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctrlCpu = this._ctrlCpu;
    }
    if (this._dataCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCpu = this._dataCpu;
    }
    if (this._diskValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskValue = this._diskValue;
    }
    if (this._memValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memValue = this._memValue;
    }
    if (this._smp0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.smp0 = this._smp0;
    }
    if (this._smp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.smp1 = this._smp1;
    }
    if (this._smp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.smp2 = this._smp2;
    }
    if (this._smp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.smp3 = this._smp3;
    }
    if (this._smp4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.smp4 = this._smp4;
    }
    if (this._spm0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.spm0 = this._spm0;
    }
    if (this._spm1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.spm1 = this._spm1;
    }
    if (this._spm2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.spm2 = this._spm2;
    }
    if (this._spm3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.spm3 = this._spm3;
    }
    if (this._spm4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.spm4 = this._spm4;
    }
    if (this._warnTemp !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnTemp = this._warnTemp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewShowMonitorOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buffDrop = undefined;
      this._buffValue = undefined;
      this._ctrlCpu = undefined;
      this._dataCpu = undefined;
      this._diskValue = undefined;
      this._memValue = undefined;
      this._smp0 = undefined;
      this._smp1 = undefined;
      this._smp2 = undefined;
      this._smp3 = undefined;
      this._smp4 = undefined;
      this._spm0 = undefined;
      this._spm1 = undefined;
      this._spm2 = undefined;
      this._spm3 = undefined;
      this._spm4 = undefined;
      this._warnTemp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buffDrop = value.buffDrop;
      this._buffValue = value.buffValue;
      this._ctrlCpu = value.ctrlCpu;
      this._dataCpu = value.dataCpu;
      this._diskValue = value.diskValue;
      this._memValue = value.memValue;
      this._smp0 = value.smp0;
      this._smp1 = value.smp1;
      this._smp2 = value.smp2;
      this._smp3 = value.smp3;
      this._smp4 = value.smp4;
      this._spm0 = value.spm0;
      this._spm1 = value.spm1;
      this._spm2 = value.spm2;
      this._spm3 = value.spm3;
      this._spm4 = value.spm4;
      this._warnTemp = value.warnTemp;
    }
  }

  // buff_drop - computed: false, optional: true, required: false
  private _buffDrop?: number; 
  public get buffDrop() {
    return this.getNumberAttribute('buff_drop');
  }
  public set buffDrop(value: number) {
    this._buffDrop = value;
  }
  public resetBuffDrop() {
    this._buffDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffDropInput() {
    return this._buffDrop;
  }

  // buff_value - computed: false, optional: true, required: false
  private _buffValue?: number; 
  public get buffValue() {
    return this.getNumberAttribute('buff_value');
  }
  public set buffValue(value: number) {
    this._buffValue = value;
  }
  public resetBuffValue() {
    this._buffValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffValueInput() {
    return this._buffValue;
  }

  // ctrl_cpu - computed: false, optional: true, required: false
  private _ctrlCpu?: number; 
  public get ctrlCpu() {
    return this.getNumberAttribute('ctrl_cpu');
  }
  public set ctrlCpu(value: number) {
    this._ctrlCpu = value;
  }
  public resetCtrlCpu() {
    this._ctrlCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlCpuInput() {
    return this._ctrlCpu;
  }

  // data_cpu - computed: false, optional: true, required: false
  private _dataCpu?: number; 
  public get dataCpu() {
    return this.getNumberAttribute('data_cpu');
  }
  public set dataCpu(value: number) {
    this._dataCpu = value;
  }
  public resetDataCpu() {
    this._dataCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCpuInput() {
    return this._dataCpu;
  }

  // disk_value - computed: false, optional: true, required: false
  private _diskValue?: number; 
  public get diskValue() {
    return this.getNumberAttribute('disk_value');
  }
  public set diskValue(value: number) {
    this._diskValue = value;
  }
  public resetDiskValue() {
    this._diskValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskValueInput() {
    return this._diskValue;
  }

  // mem_value - computed: false, optional: true, required: false
  private _memValue?: number; 
  public get memValue() {
    return this.getNumberAttribute('mem_value');
  }
  public set memValue(value: number) {
    this._memValue = value;
  }
  public resetMemValue() {
    this._memValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memValueInput() {
    return this._memValue;
  }

  // smp0 - computed: false, optional: true, required: false
  private _smp0?: number; 
  public get smp0() {
    return this.getNumberAttribute('smp0');
  }
  public set smp0(value: number) {
    this._smp0 = value;
  }
  public resetSmp0() {
    this._smp0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smp0Input() {
    return this._smp0;
  }

  // smp1 - computed: false, optional: true, required: false
  private _smp1?: number; 
  public get smp1() {
    return this.getNumberAttribute('smp1');
  }
  public set smp1(value: number) {
    this._smp1 = value;
  }
  public resetSmp1() {
    this._smp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smp1Input() {
    return this._smp1;
  }

  // smp2 - computed: false, optional: true, required: false
  private _smp2?: number; 
  public get smp2() {
    return this.getNumberAttribute('smp2');
  }
  public set smp2(value: number) {
    this._smp2 = value;
  }
  public resetSmp2() {
    this._smp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smp2Input() {
    return this._smp2;
  }

  // smp3 - computed: false, optional: true, required: false
  private _smp3?: number; 
  public get smp3() {
    return this.getNumberAttribute('smp3');
  }
  public set smp3(value: number) {
    this._smp3 = value;
  }
  public resetSmp3() {
    this._smp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smp3Input() {
    return this._smp3;
  }

  // smp4 - computed: false, optional: true, required: false
  private _smp4?: number; 
  public get smp4() {
    return this.getNumberAttribute('smp4');
  }
  public set smp4(value: number) {
    this._smp4 = value;
  }
  public resetSmp4() {
    this._smp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smp4Input() {
    return this._smp4;
  }

  // spm0 - computed: false, optional: true, required: false
  private _spm0?: number; 
  public get spm0() {
    return this.getNumberAttribute('spm0');
  }
  public set spm0(value: number) {
    this._spm0 = value;
  }
  public resetSpm0() {
    this._spm0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spm0Input() {
    return this._spm0;
  }

  // spm1 - computed: false, optional: true, required: false
  private _spm1?: number; 
  public get spm1() {
    return this.getNumberAttribute('spm1');
  }
  public set spm1(value: number) {
    this._spm1 = value;
  }
  public resetSpm1() {
    this._spm1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spm1Input() {
    return this._spm1;
  }

  // spm2 - computed: false, optional: true, required: false
  private _spm2?: number; 
  public get spm2() {
    return this.getNumberAttribute('spm2');
  }
  public set spm2(value: number) {
    this._spm2 = value;
  }
  public resetSpm2() {
    this._spm2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spm2Input() {
    return this._spm2;
  }

  // spm3 - computed: false, optional: true, required: false
  private _spm3?: number; 
  public get spm3() {
    return this.getNumberAttribute('spm3');
  }
  public set spm3(value: number) {
    this._spm3 = value;
  }
  public resetSpm3() {
    this._spm3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spm3Input() {
    return this._spm3;
  }

  // spm4 - computed: false, optional: true, required: false
  private _spm4?: number; 
  public get spm4() {
    return this.getNumberAttribute('spm4');
  }
  public set spm4(value: number) {
    this._spm4 = value;
  }
  public resetSpm4() {
    this._spm4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spm4Input() {
    return this._spm4;
  }

  // warn_temp - computed: false, optional: true, required: false
  private _warnTemp?: number; 
  public get warnTemp() {
    return this.getNumberAttribute('warn_temp');
  }
  public set warnTemp(value: number) {
    this._warnTemp = value;
  }
  public resetWarnTemp() {
    this._warnTemp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnTempInput() {
    return this._warnTemp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper thunder_system_view_show_monitor_oper}
*/
export class DataThunderSystemViewShowMonitorOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_show_monitor_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewShowMonitorOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewShowMonitorOper to import
  * @param importFromId The id of the existing DataThunderSystemViewShowMonitorOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewShowMonitorOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_show_monitor_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_show_monitor_oper thunder_system_view_show_monitor_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewShowMonitorOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewShowMonitorOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_show_monitor_oper',
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
  private _oper = new DataThunderSystemViewShowMonitorOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemViewShowMonitorOperOper) {
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
      oper: dataThunderSystemViewShowMonitorOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemViewShowMonitorOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewShowMonitorOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
