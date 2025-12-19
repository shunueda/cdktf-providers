// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstEntryPortRangePortIndOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#dst_entry_name DataThunderDdosDstEntryPortRangePortIndOper#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#id DataThunderDdosDstEntryPortRangePortIndOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#port_range_end DataThunderDdosDstEntryPortRangePortIndOper#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#port_range_start DataThunderDdosDstEntryPortRangePortIndOper#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#protocol DataThunderDdosDstEntryPortRangePortIndOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#oper DataThunderDdosDstEntryPortRangePortIndOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortRangePortIndOperOper;
}
export interface DataThunderDdosDstEntryPortRangePortIndOperOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#entry_average DataThunderDdosDstEntryPortRangePortIndOper#entry_average}
  */
  readonly entryAverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#entry_maximum DataThunderDdosDstEntryPortRangePortIndOper#entry_maximum}
  */
  readonly entryMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#entry_minimum DataThunderDdosDstEntryPortRangePortIndOper#entry_minimum}
  */
  readonly entryMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#entry_non_zero_minimum DataThunderDdosDstEntryPortRangePortIndOper#entry_non_zero_minimum}
  */
  readonly entryNonZeroMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#indicator_index DataThunderDdosDstEntryPortRangePortIndOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#indicator_name DataThunderDdosDstEntryPortRangePortIndOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#rate DataThunderDdosDstEntryPortRangePortIndOper#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#src_maximum DataThunderDdosDstEntryPortRangePortIndOper#src_maximum}
  */
  readonly srcMaximum?: string;
}

export function dataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsToTerraform(struct?: DataThunderDdosDstEntryPortRangePortIndOperOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_average: cdktf.stringToTerraform(struct!.entryAverage),
    entry_maximum: cdktf.stringToTerraform(struct!.entryMaximum),
    entry_minimum: cdktf.stringToTerraform(struct!.entryMinimum),
    entry_non_zero_minimum: cdktf.stringToTerraform(struct!.entryNonZeroMinimum),
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    src_maximum: cdktf.stringToTerraform(struct!.srcMaximum),
  }
}


export function dataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryPortRangePortIndOperOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_average: {
      value: cdktf.stringToHclTerraform(struct!.entryAverage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_maximum: {
      value: cdktf.stringToHclTerraform(struct!.entryMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_minimum: {
      value: cdktf.stringToHclTerraform(struct!.entryMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_non_zero_minimum: {
      value: cdktf.stringToHclTerraform(struct!.entryNonZeroMinimum),
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
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_maximum: {
      value: cdktf.stringToHclTerraform(struct!.srcMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortRangePortIndOperOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryAverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAverage = this._entryAverage;
    }
    if (this._entryMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryMaximum = this._entryMaximum;
    }
    if (this._entryMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryMinimum = this._entryMinimum;
    }
    if (this._entryNonZeroMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryNonZeroMinimum = this._entryNonZeroMinimum;
    }
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._srcMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMaximum = this._srcMaximum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortRangePortIndOperOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryAverage = undefined;
      this._entryMaximum = undefined;
      this._entryMinimum = undefined;
      this._entryNonZeroMinimum = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._rate = undefined;
      this._srcMaximum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryAverage = value.entryAverage;
      this._entryMaximum = value.entryMaximum;
      this._entryMinimum = value.entryMinimum;
      this._entryNonZeroMinimum = value.entryNonZeroMinimum;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._rate = value.rate;
      this._srcMaximum = value.srcMaximum;
    }
  }

  // entry_average - computed: false, optional: true, required: false
  private _entryAverage?: string; 
  public get entryAverage() {
    return this.getStringAttribute('entry_average');
  }
  public set entryAverage(value: string) {
    this._entryAverage = value;
  }
  public resetEntryAverage() {
    this._entryAverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAverageInput() {
    return this._entryAverage;
  }

  // entry_maximum - computed: false, optional: true, required: false
  private _entryMaximum?: string; 
  public get entryMaximum() {
    return this.getStringAttribute('entry_maximum');
  }
  public set entryMaximum(value: string) {
    this._entryMaximum = value;
  }
  public resetEntryMaximum() {
    this._entryMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryMaximumInput() {
    return this._entryMaximum;
  }

  // entry_minimum - computed: false, optional: true, required: false
  private _entryMinimum?: string; 
  public get entryMinimum() {
    return this.getStringAttribute('entry_minimum');
  }
  public set entryMinimum(value: string) {
    this._entryMinimum = value;
  }
  public resetEntryMinimum() {
    this._entryMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryMinimumInput() {
    return this._entryMinimum;
  }

  // entry_non_zero_minimum - computed: false, optional: true, required: false
  private _entryNonZeroMinimum?: string; 
  public get entryNonZeroMinimum() {
    return this.getStringAttribute('entry_non_zero_minimum');
  }
  public set entryNonZeroMinimum(value: string) {
    this._entryNonZeroMinimum = value;
  }
  public resetEntryNonZeroMinimum() {
    this._entryNonZeroMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNonZeroMinimumInput() {
    return this._entryNonZeroMinimum;
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

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // src_maximum - computed: false, optional: true, required: false
  private _srcMaximum?: string; 
  public get srcMaximum() {
    return this.getStringAttribute('src_maximum');
  }
  public set srcMaximum(value: string) {
    this._srcMaximum = value;
  }
  public resetSrcMaximum() {
    this._srcMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMaximumInput() {
    return this._srcMaximum;
  }
}

export class DataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortRangePortIndOperOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsOutputReference {
    return new DataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortRangePortIndOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#detection_data_source DataThunderDdosDstEntryPortRangePortIndOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#indicators DataThunderDdosDstEntryPortRangePortIndOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryPortRangePortIndOperOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortRangePortIndOperOperToTerraform(struct?: DataThunderDdosDstEntryPortRangePortIndOperOperOutputReference | DataThunderDdosDstEntryPortRangePortIndOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    indicators: cdktf.listMapper(dataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryPortRangePortIndOperOperToHclTerraform(struct?: DataThunderDdosDstEntryPortRangePortIndOperOperOutputReference | DataThunderDdosDstEntryPortRangePortIndOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_data_source: {
      value: cdktf.stringToHclTerraform(struct!.detectionDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortRangePortIndOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortRangePortIndOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionDataSource = this._detectionDataSource;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortRangePortIndOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionDataSource = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionDataSource = value.detectionDataSource;
      this._indicators.internalValue = value.indicators;
    }
  }

  // detection_data_source - computed: false, optional: true, required: false
  private _detectionDataSource?: string; 
  public get detectionDataSource() {
    return this.getStringAttribute('detection_data_source');
  }
  public set detectionDataSource(value: string) {
    this._detectionDataSource = value;
  }
  public resetDetectionDataSource() {
    this._detectionDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionDataSourceInput() {
    return this._detectionDataSource;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstEntryPortRangePortIndOperOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryPortRangePortIndOperOperIndicators[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper thunder_ddos_dst_entry_port_range_port_ind_oper}
*/
export class DataThunderDdosDstEntryPortRangePortIndOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_port_range_port_ind_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstEntryPortRangePortIndOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstEntryPortRangePortIndOper to import
  * @param importFromId The id of the existing DataThunderDdosDstEntryPortRangePortIndOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstEntryPortRangePortIndOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_port_range_port_ind_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_port_ind_oper thunder_ddos_dst_entry_port_range_port_ind_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstEntryPortRangePortIndOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstEntryPortRangePortIndOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_port_range_port_ind_oper',
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
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
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

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: string; 
  public get portRangeStart() {
    return this.getStringAttribute('port_range_start');
  }
  public set portRangeStart(value: string) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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
  private _oper = new DataThunderDdosDstEntryPortRangePortIndOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortRangePortIndOperOper) {
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
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      oper: dataThunderDdosDstEntryPortRangePortIndOperOperToTerraform(this._oper.internalValue),
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
      port_range_end: {
        value: cdktf.stringToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_start: {
        value: cdktf.stringToHclTerraform(this._portRangeStart),
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
        value: dataThunderDdosDstEntryPortRangePortIndOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortRangePortIndOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
