// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemCpuCtrlCpuOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#id DataThunderSystemCpuCtrlCpuOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#oper DataThunderSystemCpuCtrlCpuOper#oper}
  */
  readonly oper?: DataThunderSystemCpuCtrlCpuOperOper;
}
export interface DataThunderSystemCpuCtrlCpuOperOperCpuUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#cpu_id DataThunderSystemCpuCtrlCpuOper#cpu_id}
  */
  readonly cpuId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#sec1 DataThunderSystemCpuCtrlCpuOper#sec1}
  */
  readonly sec1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#sec10 DataThunderSystemCpuCtrlCpuOper#sec10}
  */
  readonly sec10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#sec30 DataThunderSystemCpuCtrlCpuOper#sec30}
  */
  readonly sec30?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#sec5 DataThunderSystemCpuCtrlCpuOper#sec5}
  */
  readonly sec5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#sec60 DataThunderSystemCpuCtrlCpuOper#sec60}
  */
  readonly sec60?: number;
}

export function dataThunderSystemCpuCtrlCpuOperOperCpuUsageToTerraform(struct?: DataThunderSystemCpuCtrlCpuOperOperCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_id: cdktf.numberToTerraform(struct!.cpuId),
    sec1: cdktf.numberToTerraform(struct!.sec1),
    sec10: cdktf.numberToTerraform(struct!.sec10),
    sec30: cdktf.numberToTerraform(struct!.sec30),
    sec5: cdktf.numberToTerraform(struct!.sec5),
    sec60: cdktf.numberToTerraform(struct!.sec60),
  }
}


export function dataThunderSystemCpuCtrlCpuOperOperCpuUsageToHclTerraform(struct?: DataThunderSystemCpuCtrlCpuOperOperCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_id: {
      value: cdktf.numberToHclTerraform(struct!.cpuId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec1: {
      value: cdktf.numberToHclTerraform(struct!.sec1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec10: {
      value: cdktf.numberToHclTerraform(struct!.sec10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec30: {
      value: cdktf.numberToHclTerraform(struct!.sec30),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec5: {
      value: cdktf.numberToHclTerraform(struct!.sec5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec60: {
      value: cdktf.numberToHclTerraform(struct!.sec60),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCpuCtrlCpuOperOperCpuUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderSystemCpuCtrlCpuOperOperCpuUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuId = this._cpuId;
    }
    if (this._sec1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec1 = this._sec1;
    }
    if (this._sec10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec10 = this._sec10;
    }
    if (this._sec30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec30 = this._sec30;
    }
    if (this._sec5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec5 = this._sec5;
    }
    if (this._sec60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec60 = this._sec60;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCpuCtrlCpuOperOperCpuUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuId = undefined;
      this._sec1 = undefined;
      this._sec10 = undefined;
      this._sec30 = undefined;
      this._sec5 = undefined;
      this._sec60 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuId = value.cpuId;
      this._sec1 = value.sec1;
      this._sec10 = value.sec10;
      this._sec30 = value.sec30;
      this._sec5 = value.sec5;
      this._sec60 = value.sec60;
    }
  }

  // cpu_id - computed: false, optional: true, required: false
  private _cpuId?: number; 
  public get cpuId() {
    return this.getNumberAttribute('cpu_id');
  }
  public set cpuId(value: number) {
    this._cpuId = value;
  }
  public resetCpuId() {
    this._cpuId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdInput() {
    return this._cpuId;
  }

  // sec1 - computed: false, optional: true, required: false
  private _sec1?: number; 
  public get sec1() {
    return this.getNumberAttribute('sec1');
  }
  public set sec1(value: number) {
    this._sec1 = value;
  }
  public resetSec1() {
    this._sec1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec1Input() {
    return this._sec1;
  }

  // sec10 - computed: false, optional: true, required: false
  private _sec10?: number; 
  public get sec10() {
    return this.getNumberAttribute('sec10');
  }
  public set sec10(value: number) {
    this._sec10 = value;
  }
  public resetSec10() {
    this._sec10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec10Input() {
    return this._sec10;
  }

  // sec30 - computed: false, optional: true, required: false
  private _sec30?: number; 
  public get sec30() {
    return this.getNumberAttribute('sec30');
  }
  public set sec30(value: number) {
    this._sec30 = value;
  }
  public resetSec30() {
    this._sec30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec30Input() {
    return this._sec30;
  }

  // sec5 - computed: false, optional: true, required: false
  private _sec5?: number; 
  public get sec5() {
    return this.getNumberAttribute('sec5');
  }
  public set sec5(value: number) {
    this._sec5 = value;
  }
  public resetSec5() {
    this._sec5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec5Input() {
    return this._sec5;
  }

  // sec60 - computed: false, optional: true, required: false
  private _sec60?: number; 
  public get sec60() {
    return this.getNumberAttribute('sec60');
  }
  public set sec60(value: number) {
    this._sec60 = value;
  }
  public resetSec60() {
    this._sec60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec60Input() {
    return this._sec60;
  }
}

export class DataThunderSystemCpuCtrlCpuOperOperCpuUsageList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemCpuCtrlCpuOperOperCpuUsage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderSystemCpuCtrlCpuOperOperCpuUsageOutputReference {
    return new DataThunderSystemCpuCtrlCpuOperOperCpuUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemCpuCtrlCpuOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#current_time DataThunderSystemCpuCtrlCpuOper#current_time}
  */
  readonly currentTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#number_of_cpu DataThunderSystemCpuCtrlCpuOper#number_of_cpu}
  */
  readonly numberOfCpu?: number;
  /**
  * cpu_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#cpu_usage DataThunderSystemCpuCtrlCpuOper#cpu_usage}
  */
  readonly cpuUsage?: DataThunderSystemCpuCtrlCpuOperOperCpuUsage[] | cdktf.IResolvable;
}

export function dataThunderSystemCpuCtrlCpuOperOperToTerraform(struct?: DataThunderSystemCpuCtrlCpuOperOperOutputReference | DataThunderSystemCpuCtrlCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_time: cdktf.stringToTerraform(struct!.currentTime),
    number_of_cpu: cdktf.numberToTerraform(struct!.numberOfCpu),
    cpu_usage: cdktf.listMapper(dataThunderSystemCpuCtrlCpuOperOperCpuUsageToTerraform, true)(struct!.cpuUsage),
  }
}


export function dataThunderSystemCpuCtrlCpuOperOperToHclTerraform(struct?: DataThunderSystemCpuCtrlCpuOperOperOutputReference | DataThunderSystemCpuCtrlCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_time: {
      value: cdktf.stringToHclTerraform(struct!.currentTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_cpu: {
      value: cdktf.numberToHclTerraform(struct!.numberOfCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_usage: {
      value: cdktf.listMapperHcl(dataThunderSystemCpuCtrlCpuOperOperCpuUsageToHclTerraform, true)(struct!.cpuUsage),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemCpuCtrlCpuOperOperCpuUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCpuCtrlCpuOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemCpuCtrlCpuOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentTime = this._currentTime;
    }
    if (this._numberOfCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpu = this._numberOfCpu;
    }
    if (this._cpuUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCpuCtrlCpuOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentTime = undefined;
      this._numberOfCpu = undefined;
      this._cpuUsage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentTime = value.currentTime;
      this._numberOfCpu = value.numberOfCpu;
      this._cpuUsage.internalValue = value.cpuUsage;
    }
  }

  // current_time - computed: false, optional: true, required: false
  private _currentTime?: string; 
  public get currentTime() {
    return this.getStringAttribute('current_time');
  }
  public set currentTime(value: string) {
    this._currentTime = value;
  }
  public resetCurrentTime() {
    this._currentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentTimeInput() {
    return this._currentTime;
  }

  // number_of_cpu - computed: false, optional: true, required: false
  private _numberOfCpu?: number; 
  public get numberOfCpu() {
    return this.getNumberAttribute('number_of_cpu');
  }
  public set numberOfCpu(value: number) {
    this._numberOfCpu = value;
  }
  public resetNumberOfCpu() {
    this._numberOfCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuInput() {
    return this._numberOfCpu;
  }

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage = new DataThunderSystemCpuCtrlCpuOperOperCpuUsageList(this, "cpu_usage", false);
  public get cpuUsage() {
    return this._cpuUsage;
  }
  public putCpuUsage(value: DataThunderSystemCpuCtrlCpuOperOperCpuUsage[] | cdktf.IResolvable) {
    this._cpuUsage.internalValue = value;
  }
  public resetCpuUsage() {
    this._cpuUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper thunder_system_cpu_ctrl_cpu_oper}
*/
export class DataThunderSystemCpuCtrlCpuOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_cpu_ctrl_cpu_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemCpuCtrlCpuOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemCpuCtrlCpuOper to import
  * @param importFromId The id of the existing DataThunderSystemCpuCtrlCpuOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemCpuCtrlCpuOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_cpu_ctrl_cpu_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_ctrl_cpu_oper thunder_system_cpu_ctrl_cpu_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemCpuCtrlCpuOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemCpuCtrlCpuOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_cpu_ctrl_cpu_oper',
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
  private _oper = new DataThunderSystemCpuCtrlCpuOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemCpuCtrlCpuOperOper) {
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
      oper: dataThunderSystemCpuCtrlCpuOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemCpuCtrlCpuOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemCpuCtrlCpuOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
