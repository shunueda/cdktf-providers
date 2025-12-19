// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstEntryL4TypeProgressionTrackingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#dst_entry_name DataThunderDdosDstEntryL4TypeProgressionTrackingOper#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#id DataThunderDdosDstEntryL4TypeProgressionTrackingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#protocol DataThunderDdosDstEntryL4TypeProgressionTrackingOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#oper DataThunderDdosDstEntryL4TypeProgressionTrackingOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOper;
}
export interface DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#average DataThunderDdosDstEntryL4TypeProgressionTrackingOper#average}
  */
  readonly average?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#indicator_index DataThunderDdosDstEntryL4TypeProgressionTrackingOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#indicator_name DataThunderDdosDstEntryL4TypeProgressionTrackingOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#maximum DataThunderDdosDstEntryL4TypeProgressionTrackingOper#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#minimum DataThunderDdosDstEntryL4TypeProgressionTrackingOper#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#num_sample DataThunderDdosDstEntryL4TypeProgressionTrackingOper#num_sample}
  */
  readonly numSample?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#standard_deviation DataThunderDdosDstEntryL4TypeProgressionTrackingOper#standard_deviation}
  */
  readonly standardDeviation?: string;
}

export function dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsToTerraform(struct?: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.stringToTerraform(struct!.average),
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    num_sample: cdktf.numberToTerraform(struct!.numSample),
    standard_deviation: cdktf.stringToTerraform(struct!.standardDeviation),
  }
}


export function dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.stringToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_sample: {
      value: cdktf.numberToHclTerraform(struct!.numSample),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_deviation: {
      value: cdktf.stringToHclTerraform(struct!.standardDeviation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._numSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSample = this._numSample;
    }
    if (this._standardDeviation !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardDeviation = this._standardDeviation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._numSample = undefined;
      this._standardDeviation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._numSample = value.numSample;
      this._standardDeviation = value.standardDeviation;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: string; 
  public get average() {
    return this.getStringAttribute('average');
  }
  public set average(value: string) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // num_sample - computed: false, optional: true, required: false
  private _numSample?: number; 
  public get numSample() {
    return this.getNumberAttribute('num_sample');
  }
  public set numSample(value: number) {
    this._numSample = value;
  }
  public resetNumSample() {
    this._numSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSampleInput() {
    return this._numSample;
  }

  // standard_deviation - computed: false, optional: true, required: false
  private _standardDeviation?: string; 
  public get standardDeviation() {
    return this.getStringAttribute('standard_deviation');
  }
  public set standardDeviation(value: string) {
    this._standardDeviation = value;
  }
  public resetStandardDeviation() {
    this._standardDeviation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardDeviationInput() {
    return this._standardDeviation;
  }
}

export class DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsOutputReference {
    return new DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryL4TypeProgressionTrackingOperOper {
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#indicators DataThunderDdosDstEntryL4TypeProgressionTrackingOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperToTerraform(struct?: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperOutputReference | DataThunderDdosDstEntryL4TypeProgressionTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicators: cdktf.listMapper(dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperToHclTerraform(struct?: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperOutputReference | DataThunderDdosDstEntryL4TypeProgressionTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryL4TypeProgressionTrackingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indicators.internalValue = value.indicators;
    }
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper thunder_ddos_dst_entry_l4_type_progression_tracking_oper}
*/
export class DataThunderDdosDstEntryL4TypeProgressionTrackingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_l4_type_progression_tracking_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstEntryL4TypeProgressionTrackingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstEntryL4TypeProgressionTrackingOper to import
  * @param importFromId The id of the existing DataThunderDdosDstEntryL4TypeProgressionTrackingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstEntryL4TypeProgressionTrackingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_l4_type_progression_tracking_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_progression_tracking_oper thunder_ddos_dst_entry_l4_type_progression_tracking_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstEntryL4TypeProgressionTrackingOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstEntryL4TypeProgressionTrackingOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_l4_type_progression_tracking_oper',
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
    this._dstEntryName = config.dstEntryName;
    this._id = config.id;
    this._protocol = config.protocol;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryL4TypeProgressionTrackingOperOper) {
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
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      oper: dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstEntryL4TypeProgressionTrackingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryL4TypeProgressionTrackingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
