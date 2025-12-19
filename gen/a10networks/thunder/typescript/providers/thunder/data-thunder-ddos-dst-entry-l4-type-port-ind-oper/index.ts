// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstEntryL4TypePortIndOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#dst_entry_name DataThunderDdosDstEntryL4TypePortIndOper#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#id DataThunderDdosDstEntryL4TypePortIndOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#protocol DataThunderDdosDstEntryL4TypePortIndOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#oper DataThunderDdosDstEntryL4TypePortIndOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryL4TypePortIndOperOper;
}
export interface DataThunderDdosDstEntryL4TypePortIndOperOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#entry_average DataThunderDdosDstEntryL4TypePortIndOper#entry_average}
  */
  readonly entryAverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#entry_maximum DataThunderDdosDstEntryL4TypePortIndOper#entry_maximum}
  */
  readonly entryMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#entry_minimum DataThunderDdosDstEntryL4TypePortIndOper#entry_minimum}
  */
  readonly entryMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#entry_non_zero_minimum DataThunderDdosDstEntryL4TypePortIndOper#entry_non_zero_minimum}
  */
  readonly entryNonZeroMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#indicator_index DataThunderDdosDstEntryL4TypePortIndOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#indicator_name DataThunderDdosDstEntryL4TypePortIndOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#rate DataThunderDdosDstEntryL4TypePortIndOper#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#src_maximum DataThunderDdosDstEntryL4TypePortIndOper#src_maximum}
  */
  readonly srcMaximum?: string;
}

export function dataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsToTerraform(struct?: DataThunderDdosDstEntryL4TypePortIndOperOperIndicators | cdktf.IResolvable): any {
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


export function dataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryL4TypePortIndOperOperIndicators | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryL4TypePortIndOperOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryL4TypePortIndOperOperIndicators | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryL4TypePortIndOperOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsOutputReference {
    return new DataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryL4TypePortIndOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#detection_data_source DataThunderDdosDstEntryL4TypePortIndOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#indicators DataThunderDdosDstEntryL4TypePortIndOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryL4TypePortIndOperOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryL4TypePortIndOperOperToTerraform(struct?: DataThunderDdosDstEntryL4TypePortIndOperOperOutputReference | DataThunderDdosDstEntryL4TypePortIndOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    indicators: cdktf.listMapper(dataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryL4TypePortIndOperOperToHclTerraform(struct?: DataThunderDdosDstEntryL4TypePortIndOperOperOutputReference | DataThunderDdosDstEntryL4TypePortIndOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryL4TypePortIndOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryL4TypePortIndOperOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryL4TypePortIndOperOper | undefined) {
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
  private _indicators = new DataThunderDdosDstEntryL4TypePortIndOperOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryL4TypePortIndOperOperIndicators[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper thunder_ddos_dst_entry_l4_type_port_ind_oper}
*/
export class DataThunderDdosDstEntryL4TypePortIndOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_l4_type_port_ind_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstEntryL4TypePortIndOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstEntryL4TypePortIndOper to import
  * @param importFromId The id of the existing DataThunderDdosDstEntryL4TypePortIndOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstEntryL4TypePortIndOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_l4_type_port_ind_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_oper thunder_ddos_dst_entry_l4_type_port_ind_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstEntryL4TypePortIndOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstEntryL4TypePortIndOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_l4_type_port_ind_oper',
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
  private _oper = new DataThunderDdosDstEntryL4TypePortIndOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryL4TypePortIndOperOper) {
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
      oper: dataThunderDdosDstEntryL4TypePortIndOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosDstEntryL4TypePortIndOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryL4TypePortIndOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
