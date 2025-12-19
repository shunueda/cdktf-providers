// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#id DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#port_num DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#port_num}
  */
  readonly portNum: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#protocol DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#zone_name DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#oper DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOper;
}
export interface DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#average DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#average}
  */
  readonly average?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#indicator_index DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#indicator_name DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#maximum DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#minimum DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#num_sample DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#num_sample}
  */
  readonly numSample?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#standard_deviation DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#standard_deviation}
  */
  readonly standardDeviation?: string;
}

export function dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators | cdktf.IResolvable): any {
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


export function dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#learning_brief DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#learning_brief}
  */
  readonly learningBrief?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#learning_details DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#learning_details}
  */
  readonly learningDetails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#recommended_template DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#recommended_template}
  */
  readonly recommendedTemplate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#template_debug_table DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#template_debug_table}
  */
  readonly templateDebugTable?: number;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#indicators DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    learning_brief: cdktf.numberToTerraform(struct!.learningBrief),
    learning_details: cdktf.numberToTerraform(struct!.learningDetails),
    recommended_template: cdktf.numberToTerraform(struct!.recommendedTemplate),
    template_debug_table: cdktf.numberToTerraform(struct!.templateDebugTable),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    learning_brief: {
      value: cdktf.numberToHclTerraform(struct!.learningBrief),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learning_details: {
      value: cdktf.numberToHclTerraform(struct!.learningDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recommended_template: {
      value: cdktf.numberToHclTerraform(struct!.recommendedTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_debug_table: {
      value: cdktf.numberToHclTerraform(struct!.templateDebugTable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._learningBrief !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningBrief = this._learningBrief;
    }
    if (this._learningDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningDetails = this._learningDetails;
    }
    if (this._recommendedTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendedTemplate = this._recommendedTemplate;
    }
    if (this._templateDebugTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDebugTable = this._templateDebugTable;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._learningBrief = undefined;
      this._learningDetails = undefined;
      this._recommendedTemplate = undefined;
      this._templateDebugTable = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._learningBrief = value.learningBrief;
      this._learningDetails = value.learningDetails;
      this._recommendedTemplate = value.recommendedTemplate;
      this._templateDebugTable = value.templateDebugTable;
      this._indicators.internalValue = value.indicators;
    }
  }

  // learning_brief - computed: false, optional: true, required: false
  private _learningBrief?: number; 
  public get learningBrief() {
    return this.getNumberAttribute('learning_brief');
  }
  public set learningBrief(value: number) {
    this._learningBrief = value;
  }
  public resetLearningBrief() {
    this._learningBrief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningBriefInput() {
    return this._learningBrief;
  }

  // learning_details - computed: false, optional: true, required: false
  private _learningDetails?: number; 
  public get learningDetails() {
    return this.getNumberAttribute('learning_details');
  }
  public set learningDetails(value: number) {
    this._learningDetails = value;
  }
  public resetLearningDetails() {
    this._learningDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDetailsInput() {
    return this._learningDetails;
  }

  // recommended_template - computed: false, optional: true, required: false
  private _recommendedTemplate?: number; 
  public get recommendedTemplate() {
    return this.getNumberAttribute('recommended_template');
  }
  public set recommendedTemplate(value: number) {
    this._recommendedTemplate = value;
  }
  public resetRecommendedTemplate() {
    this._recommendedTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedTemplateInput() {
    return this._recommendedTemplate;
  }

  // template_debug_table - computed: false, optional: true, required: false
  private _templateDebugTable?: number; 
  public get templateDebugTable() {
    return this.getNumberAttribute('template_debug_table');
  }
  public set templateDebugTable(value: number) {
    this._templateDebugTable = value;
  }
  public resetTemplateDebugTable() {
    this._templateDebugTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDebugTableInput() {
    return this._templateDebugTable;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperIndicators[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper thunder_ddos_dst_zone_port_zone_service_progression_tracking_oper}
*/
export class DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_progression_tracking_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZonePortZoneServiceProgressionTrackingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_progression_tracking_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_zone_service_progression_tracking_oper thunder_ddos_dst_zone_port_zone_service_progression_tracking_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_progression_tracking_oper',
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
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._zoneName = config.zoneName;
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

  // port_num - computed: false, optional: false, required: true
  private _portNum?: string; 
  public get portNum() {
    return this.getStringAttribute('port_num');
  }
  public set portNum(value: string) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOper) {
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
      port_num: cdktf.stringToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperToTerraform(this._oper.internalValue),
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
      port_num: {
        value: cdktf.stringToHclTerraform(this._portNum),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceProgressionTrackingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
