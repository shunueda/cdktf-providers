// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosPatternRecognitionCpuOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#id DataThunderDdosPatternRecognitionCpuOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#oper DataThunderDdosPatternRecognitionCpuOper#oper}
  */
  readonly oper?: DataThunderDdosPatternRecognitionCpuOperOper;
}
export interface DataThunderDdosPatternRecognitionCpuOperOperCpuInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#cpu_id DataThunderDdosPatternRecognitionCpuOper#cpu_id}
  */
  readonly cpuId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#sec1 DataThunderDdosPatternRecognitionCpuOper#sec1}
  */
  readonly sec1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#sec10 DataThunderDdosPatternRecognitionCpuOper#sec10}
  */
  readonly sec10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#sec30 DataThunderDdosPatternRecognitionCpuOper#sec30}
  */
  readonly sec30?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#sec5 DataThunderDdosPatternRecognitionCpuOper#sec5}
  */
  readonly sec5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#sec60 DataThunderDdosPatternRecognitionCpuOper#sec60}
  */
  readonly sec60?: number;
}

export function dataThunderDdosPatternRecognitionCpuOperOperCpuInfoToTerraform(struct?: DataThunderDdosPatternRecognitionCpuOperOperCpuInfo | cdktf.IResolvable): any {
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


export function dataThunderDdosPatternRecognitionCpuOperOperCpuInfoToHclTerraform(struct?: DataThunderDdosPatternRecognitionCpuOperOperCpuInfo | cdktf.IResolvable): any {
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

export class DataThunderDdosPatternRecognitionCpuOperOperCpuInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosPatternRecognitionCpuOperOperCpuInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosPatternRecognitionCpuOperOperCpuInfo | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosPatternRecognitionCpuOperOperCpuInfoList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosPatternRecognitionCpuOperOperCpuInfo[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosPatternRecognitionCpuOperOperCpuInfoOutputReference {
    return new DataThunderDdosPatternRecognitionCpuOperOperCpuInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosPatternRecognitionCpuOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#number_of_cpus DataThunderDdosPatternRecognitionCpuOper#number_of_cpus}
  */
  readonly numberOfCpus?: number;
  /**
  * cpu_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#cpu_info DataThunderDdosPatternRecognitionCpuOper#cpu_info}
  */
  readonly cpuInfo?: DataThunderDdosPatternRecognitionCpuOperOperCpuInfo[] | cdktf.IResolvable;
}

export function dataThunderDdosPatternRecognitionCpuOperOperToTerraform(struct?: DataThunderDdosPatternRecognitionCpuOperOperOutputReference | DataThunderDdosPatternRecognitionCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_cpus: cdktf.numberToTerraform(struct!.numberOfCpus),
    cpu_info: cdktf.listMapper(dataThunderDdosPatternRecognitionCpuOperOperCpuInfoToTerraform, true)(struct!.cpuInfo),
  }
}


export function dataThunderDdosPatternRecognitionCpuOperOperToHclTerraform(struct?: DataThunderDdosPatternRecognitionCpuOperOperOutputReference | DataThunderDdosPatternRecognitionCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_cpus: {
      value: cdktf.numberToHclTerraform(struct!.numberOfCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_info: {
      value: cdktf.listMapperHcl(dataThunderDdosPatternRecognitionCpuOperOperCpuInfoToHclTerraform, true)(struct!.cpuInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosPatternRecognitionCpuOperOperCpuInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosPatternRecognitionCpuOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosPatternRecognitionCpuOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpus = this._numberOfCpus;
    }
    if (this._cpuInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuInfo = this._cpuInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosPatternRecognitionCpuOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfCpus = undefined;
      this._cpuInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfCpus = value.numberOfCpus;
      this._cpuInfo.internalValue = value.cpuInfo;
    }
  }

  // number_of_cpus - computed: false, optional: true, required: false
  private _numberOfCpus?: number; 
  public get numberOfCpus() {
    return this.getNumberAttribute('number_of_cpus');
  }
  public set numberOfCpus(value: number) {
    this._numberOfCpus = value;
  }
  public resetNumberOfCpus() {
    this._numberOfCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpusInput() {
    return this._numberOfCpus;
  }

  // cpu_info - computed: false, optional: true, required: false
  private _cpuInfo = new DataThunderDdosPatternRecognitionCpuOperOperCpuInfoList(this, "cpu_info", false);
  public get cpuInfo() {
    return this._cpuInfo;
  }
  public putCpuInfo(value: DataThunderDdosPatternRecognitionCpuOperOperCpuInfo[] | cdktf.IResolvable) {
    this._cpuInfo.internalValue = value;
  }
  public resetCpuInfo() {
    this._cpuInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInfoInput() {
    return this._cpuInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper thunder_ddos_pattern_recognition_cpu_oper}
*/
export class DataThunderDdosPatternRecognitionCpuOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_pattern_recognition_cpu_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosPatternRecognitionCpuOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosPatternRecognitionCpuOper to import
  * @param importFromId The id of the existing DataThunderDdosPatternRecognitionCpuOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosPatternRecognitionCpuOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_pattern_recognition_cpu_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_cpu_oper thunder_ddos_pattern_recognition_cpu_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosPatternRecognitionCpuOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosPatternRecognitionCpuOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_pattern_recognition_cpu_oper',
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
  private _oper = new DataThunderDdosPatternRecognitionCpuOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosPatternRecognitionCpuOperOper) {
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
      oper: dataThunderDdosPatternRecognitionCpuOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosPatternRecognitionCpuOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosPatternRecognitionCpuOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
