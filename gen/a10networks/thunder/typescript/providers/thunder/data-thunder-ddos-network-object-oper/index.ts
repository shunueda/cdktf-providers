// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosNetworkObjectOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#id DataThunderDdosNetworkObjectOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#object_name DataThunderDdosNetworkObjectOper#object_name}
  */
  readonly objectName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#oper DataThunderDdosNetworkObjectOper#oper}
  */
  readonly oper?: DataThunderDdosNetworkObjectOperOper;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#topk_destinations DataThunderDdosNetworkObjectOper#topk_destinations}
  */
  readonly topkDestinations?: DataThunderDdosNetworkObjectOperTopkDestinations;
}
export interface DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#current DataThunderDdosNetworkObjectOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#max DataThunderDdosNetworkObjectOper#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#threshold DataThunderDdosNetworkObjectOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueToTerraform(struct?: DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current: cdktf.stringToTerraform(struct!.current),
    max: cdktf.stringToTerraform(struct!.max),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function dataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueToHclTerraform(struct?: DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current: {
      value: cdktf.stringToHclTerraform(struct!.current),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._current !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._current = undefined;
      this._max = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._current = value.current;
      this._max = value.max;
      this._threshold = value.threshold;
    }
  }

  // current - computed: false, optional: true, required: false
  private _current?: string; 
  public get current() {
    return this.getStringAttribute('current');
  }
  public set current(value: string) {
    this._current = value;
  }
  public resetCurrent() {
    this._current = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentInput() {
    return this._current;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueOutputReference {
    return new DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNetworkObjectOperOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#indicator_index DataThunderDdosNetworkObjectOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#indicator_name DataThunderDdosNetworkObjectOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#is_anomaly DataThunderDdosNetworkObjectOper#is_anomaly}
  */
  readonly isAnomaly?: number;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#value DataThunderDdosNetworkObjectOper#value}
  */
  readonly value?: DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue[] | cdktf.IResolvable;
}

export function dataThunderDdosNetworkObjectOperOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosNetworkObjectOperOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    is_anomaly: cdktf.numberToTerraform(struct!.isAnomaly),
    value: cdktf.listMapper(dataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueToTerraform, true)(struct!.value),
  }
}


export function dataThunderDdosNetworkObjectOperOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosNetworkObjectOperOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    is_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.isAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.listMapperHcl(dataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNetworkObjectOperOperEntryListIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._isAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnomaly = this._isAnomaly;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperOperEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._isAnomaly = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._isAnomaly = value.isAnomaly;
      this._value.internalValue = value.value;
    }
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

  // is_anomaly - computed: false, optional: true, required: false
  private _isAnomaly?: number; 
  public get isAnomaly() {
    return this.getNumberAttribute('is_anomaly');
  }
  public set isAnomaly(value: number) {
    this._isAnomaly = value;
  }
  public resetIsAnomaly() {
    this._isAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnomalyInput() {
    return this._isAnomaly;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataThunderDdosNetworkObjectOperOperEntryListIndicatorsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataThunderDdosNetworkObjectOperOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNetworkObjectOperOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNetworkObjectOperOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosNetworkObjectOperOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNetworkObjectOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#address DataThunderDdosNetworkObjectOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#agent_group_name DataThunderDdosNetworkObjectOper#agent_group_name}
  */
  readonly agentGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#children_count DataThunderDdosNetworkObjectOper#children_count}
  */
  readonly childrenCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#de_es_timestamp DataThunderDdosNetworkObjectOper#de_es_timestamp}
  */
  readonly deEsTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#display_filter DataThunderDdosNetworkObjectOper#display_filter}
  */
  readonly displayFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#es_timestamp DataThunderDdosNetworkObjectOper#es_timestamp}
  */
  readonly esTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#histogram_mode DataThunderDdosNetworkObjectOper#histogram_mode}
  */
  readonly histogramMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#is_anomaly DataThunderDdosNetworkObjectOper#is_anomaly}
  */
  readonly isAnomaly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#is_histogram_learning_done DataThunderDdosNetworkObjectOper#is_histogram_learning_done}
  */
  readonly isHistogramLearningDone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#is_learning_done DataThunderDdosNetworkObjectOper#is_learning_done}
  */
  readonly isLearningDone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#operational_mode DataThunderDdosNetworkObjectOper#operational_mode}
  */
  readonly operationalMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#port DataThunderDdosNetworkObjectOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#port_range_end DataThunderDdosNetworkObjectOper#port_range_end}
  */
  readonly portRangeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#port_range_start DataThunderDdosNetworkObjectOper#port_range_start}
  */
  readonly portRangeStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#service_protocol DataThunderDdosNetworkObjectOper#service_protocol}
  */
  readonly serviceProtocol?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#indicators DataThunderDdosNetworkObjectOper#indicators}
  */
  readonly indicators?: DataThunderDdosNetworkObjectOperOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosNetworkObjectOperOperEntryListStructToTerraform(struct?: DataThunderDdosNetworkObjectOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    agent_group_name: cdktf.stringToTerraform(struct!.agentGroupName),
    children_count: cdktf.numberToTerraform(struct!.childrenCount),
    de_es_timestamp: cdktf.stringToTerraform(struct!.deEsTimestamp),
    display_filter: cdktf.stringToTerraform(struct!.displayFilter),
    es_timestamp: cdktf.stringToTerraform(struct!.esTimestamp),
    histogram_mode: cdktf.numberToTerraform(struct!.histogramMode),
    is_anomaly: cdktf.numberToTerraform(struct!.isAnomaly),
    is_histogram_learning_done: cdktf.numberToTerraform(struct!.isHistogramLearningDone),
    is_learning_done: cdktf.numberToTerraform(struct!.isLearningDone),
    operational_mode: cdktf.numberToTerraform(struct!.operationalMode),
    port: cdktf.numberToTerraform(struct!.port),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    service_protocol: cdktf.stringToTerraform(struct!.serviceProtocol),
    indicators: cdktf.listMapper(dataThunderDdosNetworkObjectOperOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosNetworkObjectOperOperEntryListStructToHclTerraform(struct?: DataThunderDdosNetworkObjectOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_group_name: {
      value: cdktf.stringToHclTerraform(struct!.agentGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    children_count: {
      value: cdktf.numberToHclTerraform(struct!.childrenCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    de_es_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.deEsTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_filter: {
      value: cdktf.stringToHclTerraform(struct!.displayFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    es_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.esTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    histogram_mode: {
      value: cdktf.numberToHclTerraform(struct!.histogramMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.isAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_histogram_learning_done: {
      value: cdktf.numberToHclTerraform(struct!.isHistogramLearningDone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_learning_done: {
      value: cdktf.numberToHclTerraform(struct!.isLearningDone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operational_mode: {
      value: cdktf.numberToHclTerraform(struct!.operationalMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_protocol: {
      value: cdktf.stringToHclTerraform(struct!.serviceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosNetworkObjectOperOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectOperOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNetworkObjectOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._agentGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGroupName = this._agentGroupName;
    }
    if (this._childrenCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.childrenCount = this._childrenCount;
    }
    if (this._deEsTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deEsTimestamp = this._deEsTimestamp;
    }
    if (this._displayFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFilter = this._displayFilter;
    }
    if (this._esTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTimestamp = this._esTimestamp;
    }
    if (this._histogramMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramMode = this._histogramMode;
    }
    if (this._isAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnomaly = this._isAnomaly;
    }
    if (this._isHistogramLearningDone !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHistogramLearningDone = this._isHistogramLearningDone;
    }
    if (this._isLearningDone !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLearningDone = this._isLearningDone;
    }
    if (this._operationalMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalMode = this._operationalMode;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._serviceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProtocol = this._serviceProtocol;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._agentGroupName = undefined;
      this._childrenCount = undefined;
      this._deEsTimestamp = undefined;
      this._displayFilter = undefined;
      this._esTimestamp = undefined;
      this._histogramMode = undefined;
      this._isAnomaly = undefined;
      this._isHistogramLearningDone = undefined;
      this._isLearningDone = undefined;
      this._operationalMode = undefined;
      this._port = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._serviceProtocol = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._agentGroupName = value.agentGroupName;
      this._childrenCount = value.childrenCount;
      this._deEsTimestamp = value.deEsTimestamp;
      this._displayFilter = value.displayFilter;
      this._esTimestamp = value.esTimestamp;
      this._histogramMode = value.histogramMode;
      this._isAnomaly = value.isAnomaly;
      this._isHistogramLearningDone = value.isHistogramLearningDone;
      this._isLearningDone = value.isLearningDone;
      this._operationalMode = value.operationalMode;
      this._port = value.port;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._serviceProtocol = value.serviceProtocol;
      this._indicators.internalValue = value.indicators;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // agent_group_name - computed: false, optional: true, required: false
  private _agentGroupName?: string; 
  public get agentGroupName() {
    return this.getStringAttribute('agent_group_name');
  }
  public set agentGroupName(value: string) {
    this._agentGroupName = value;
  }
  public resetAgentGroupName() {
    this._agentGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGroupNameInput() {
    return this._agentGroupName;
  }

  // children_count - computed: false, optional: true, required: false
  private _childrenCount?: number; 
  public get childrenCount() {
    return this.getNumberAttribute('children_count');
  }
  public set childrenCount(value: number) {
    this._childrenCount = value;
  }
  public resetChildrenCount() {
    this._childrenCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenCountInput() {
    return this._childrenCount;
  }

  // de_es_timestamp - computed: false, optional: true, required: false
  private _deEsTimestamp?: string; 
  public get deEsTimestamp() {
    return this.getStringAttribute('de_es_timestamp');
  }
  public set deEsTimestamp(value: string) {
    this._deEsTimestamp = value;
  }
  public resetDeEsTimestamp() {
    this._deEsTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deEsTimestampInput() {
    return this._deEsTimestamp;
  }

  // display_filter - computed: false, optional: true, required: false
  private _displayFilter?: string; 
  public get displayFilter() {
    return this.getStringAttribute('display_filter');
  }
  public set displayFilter(value: string) {
    this._displayFilter = value;
  }
  public resetDisplayFilter() {
    this._displayFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFilterInput() {
    return this._displayFilter;
  }

  // es_timestamp - computed: false, optional: true, required: false
  private _esTimestamp?: string; 
  public get esTimestamp() {
    return this.getStringAttribute('es_timestamp');
  }
  public set esTimestamp(value: string) {
    this._esTimestamp = value;
  }
  public resetEsTimestamp() {
    this._esTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTimestampInput() {
    return this._esTimestamp;
  }

  // histogram_mode - computed: false, optional: true, required: false
  private _histogramMode?: number; 
  public get histogramMode() {
    return this.getNumberAttribute('histogram_mode');
  }
  public set histogramMode(value: number) {
    this._histogramMode = value;
  }
  public resetHistogramMode() {
    this._histogramMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramModeInput() {
    return this._histogramMode;
  }

  // is_anomaly - computed: false, optional: true, required: false
  private _isAnomaly?: number; 
  public get isAnomaly() {
    return this.getNumberAttribute('is_anomaly');
  }
  public set isAnomaly(value: number) {
    this._isAnomaly = value;
  }
  public resetIsAnomaly() {
    this._isAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnomalyInput() {
    return this._isAnomaly;
  }

  // is_histogram_learning_done - computed: false, optional: true, required: false
  private _isHistogramLearningDone?: number; 
  public get isHistogramLearningDone() {
    return this.getNumberAttribute('is_histogram_learning_done');
  }
  public set isHistogramLearningDone(value: number) {
    this._isHistogramLearningDone = value;
  }
  public resetIsHistogramLearningDone() {
    this._isHistogramLearningDone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHistogramLearningDoneInput() {
    return this._isHistogramLearningDone;
  }

  // is_learning_done - computed: false, optional: true, required: false
  private _isLearningDone?: number; 
  public get isLearningDone() {
    return this.getNumberAttribute('is_learning_done');
  }
  public set isLearningDone(value: number) {
    this._isLearningDone = value;
  }
  public resetIsLearningDone() {
    this._isLearningDone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLearningDoneInput() {
    return this._isLearningDone;
  }

  // operational_mode - computed: false, optional: true, required: false
  private _operationalMode?: number; 
  public get operationalMode() {
    return this.getNumberAttribute('operational_mode');
  }
  public set operationalMode(value: number) {
    this._operationalMode = value;
  }
  public resetOperationalMode() {
    this._operationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalModeInput() {
    return this._operationalMode;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_range_end - computed: false, optional: true, required: false
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  public resetPortRangeEnd() {
    this._portRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: true, required: false
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  public resetPortRangeStart() {
    this._portRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
  }

  // service_protocol - computed: false, optional: true, required: false
  private _serviceProtocol?: string; 
  public get serviceProtocol() {
    return this.getStringAttribute('service_protocol');
  }
  public set serviceProtocol(value: string) {
    this._serviceProtocol = value;
  }
  public resetServiceProtocol() {
    this._serviceProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProtocolInput() {
    return this._serviceProtocol;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosNetworkObjectOperOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosNetworkObjectOperOperEntryListIndicators[] | cdktf.IResolvable) {
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

export class DataThunderDdosNetworkObjectOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNetworkObjectOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNetworkObjectOperOperEntryListStructOutputReference {
    return new DataThunderDdosNetworkObjectOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNetworkObjectOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#agent_group_details DataThunderDdosNetworkObjectOper#agent_group_details}
  */
  readonly agentGroupDetails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#anomaly_ip_list DataThunderDdosNetworkObjectOper#anomaly_ip_list}
  */
  readonly anomalyIpList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#details DataThunderDdosNetworkObjectOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#discovered_ip_list DataThunderDdosNetworkObjectOper#discovered_ip_list}
  */
  readonly discoveredIpList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#discovered_list DataThunderDdosNetworkObjectOper#discovered_list}
  */
  readonly discoveredList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#entry_count DataThunderDdosNetworkObjectOper#entry_count}
  */
  readonly entryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#ipv4 DataThunderDdosNetworkObjectOper#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#port_end DataThunderDdosNetworkObjectOper#port_end}
  */
  readonly portEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#port_start DataThunderDdosNetworkObjectOper#port_start}
  */
  readonly portStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#protocol DataThunderDdosNetworkObjectOper#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#single_layer_discovered_list DataThunderDdosNetworkObjectOper#single_layer_discovered_list}
  */
  readonly singleLayerDiscoveredList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#sport DataThunderDdosNetworkObjectOper#sport}
  */
  readonly sport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#sport_list DataThunderDdosNetworkObjectOper#sport_list}
  */
  readonly sportList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#subnet_ip_addr DataThunderDdosNetworkObjectOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#subnet_ipv6_addr DataThunderDdosNetworkObjectOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#total_details DataThunderDdosNetworkObjectOper#total_details}
  */
  readonly totalDetails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#trusted_details DataThunderDdosNetworkObjectOper#trusted_details}
  */
  readonly trustedDetails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#victim_list DataThunderDdosNetworkObjectOper#victim_list}
  */
  readonly victimList?: number;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#entry_list DataThunderDdosNetworkObjectOper#entry_list}
  */
  readonly entryList?: DataThunderDdosNetworkObjectOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosNetworkObjectOperOperToTerraform(struct?: DataThunderDdosNetworkObjectOperOperOutputReference | DataThunderDdosNetworkObjectOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_group_details: cdktf.numberToTerraform(struct!.agentGroupDetails),
    anomaly_ip_list: cdktf.numberToTerraform(struct!.anomalyIpList),
    details: cdktf.numberToTerraform(struct!.details),
    discovered_ip_list: cdktf.numberToTerraform(struct!.discoveredIpList),
    discovered_list: cdktf.numberToTerraform(struct!.discoveredList),
    entry_count: cdktf.numberToTerraform(struct!.entryCount),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    port_end: cdktf.numberToTerraform(struct!.portEnd),
    port_start: cdktf.numberToTerraform(struct!.portStart),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    single_layer_discovered_list: cdktf.numberToTerraform(struct!.singleLayerDiscoveredList),
    sport: cdktf.numberToTerraform(struct!.sport),
    sport_list: cdktf.numberToTerraform(struct!.sportList),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    total_details: cdktf.numberToTerraform(struct!.totalDetails),
    trusted_details: cdktf.numberToTerraform(struct!.trustedDetails),
    victim_list: cdktf.numberToTerraform(struct!.victimList),
    entry_list: cdktf.listMapper(dataThunderDdosNetworkObjectOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderDdosNetworkObjectOperOperToHclTerraform(struct?: DataThunderDdosNetworkObjectOperOperOutputReference | DataThunderDdosNetworkObjectOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_group_details: {
      value: cdktf.numberToHclTerraform(struct!.agentGroupDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anomaly_ip_list: {
      value: cdktf.numberToHclTerraform(struct!.anomalyIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    details: {
      value: cdktf.numberToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    discovered_ip_list: {
      value: cdktf.numberToHclTerraform(struct!.discoveredIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    discovered_list: {
      value: cdktf.numberToHclTerraform(struct!.discoveredList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_count: {
      value: cdktf.numberToHclTerraform(struct!.entryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_end: {
      value: cdktf.numberToHclTerraform(struct!.portEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_start: {
      value: cdktf.numberToHclTerraform(struct!.portStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_layer_discovered_list: {
      value: cdktf.numberToHclTerraform(struct!.singleLayerDiscoveredList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport: {
      value: cdktf.numberToHclTerraform(struct!.sport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_list: {
      value: cdktf.numberToHclTerraform(struct!.sportList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_details: {
      value: cdktf.numberToHclTerraform(struct!.totalDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trusted_details: {
      value: cdktf.numberToHclTerraform(struct!.trustedDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    victim_list: {
      value: cdktf.numberToHclTerraform(struct!.victimList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosNetworkObjectOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNetworkObjectOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentGroupDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGroupDetails = this._agentGroupDetails;
    }
    if (this._anomalyIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyIpList = this._anomalyIpList;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._discoveredIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredIpList = this._discoveredIpList;
    }
    if (this._discoveredList !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredList = this._discoveredList;
    }
    if (this._entryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCount = this._entryCount;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._portEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEnd = this._portEnd;
    }
    if (this._portStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStart = this._portStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._singleLayerDiscoveredList !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleLayerDiscoveredList = this._singleLayerDiscoveredList;
    }
    if (this._sport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sport = this._sport;
    }
    if (this._sportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportList = this._sportList;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._totalDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDetails = this._totalDetails;
    }
    if (this._trustedDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedDetails = this._trustedDetails;
    }
    if (this._victimList !== undefined) {
      hasAnyValues = true;
      internalValueResult.victimList = this._victimList;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentGroupDetails = undefined;
      this._anomalyIpList = undefined;
      this._details = undefined;
      this._discoveredIpList = undefined;
      this._discoveredList = undefined;
      this._entryCount = undefined;
      this._ipv4 = undefined;
      this._portEnd = undefined;
      this._portStart = undefined;
      this._protocol = undefined;
      this._singleLayerDiscoveredList = undefined;
      this._sport = undefined;
      this._sportList = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._totalDetails = undefined;
      this._trustedDetails = undefined;
      this._victimList = undefined;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentGroupDetails = value.agentGroupDetails;
      this._anomalyIpList = value.anomalyIpList;
      this._details = value.details;
      this._discoveredIpList = value.discoveredIpList;
      this._discoveredList = value.discoveredList;
      this._entryCount = value.entryCount;
      this._ipv4 = value.ipv4;
      this._portEnd = value.portEnd;
      this._portStart = value.portStart;
      this._protocol = value.protocol;
      this._singleLayerDiscoveredList = value.singleLayerDiscoveredList;
      this._sport = value.sport;
      this._sportList = value.sportList;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._totalDetails = value.totalDetails;
      this._trustedDetails = value.trustedDetails;
      this._victimList = value.victimList;
      this._entryList.internalValue = value.entryList;
    }
  }

  // agent_group_details - computed: false, optional: true, required: false
  private _agentGroupDetails?: number; 
  public get agentGroupDetails() {
    return this.getNumberAttribute('agent_group_details');
  }
  public set agentGroupDetails(value: number) {
    this._agentGroupDetails = value;
  }
  public resetAgentGroupDetails() {
    this._agentGroupDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGroupDetailsInput() {
    return this._agentGroupDetails;
  }

  // anomaly_ip_list - computed: false, optional: true, required: false
  private _anomalyIpList?: number; 
  public get anomalyIpList() {
    return this.getNumberAttribute('anomaly_ip_list');
  }
  public set anomalyIpList(value: number) {
    this._anomalyIpList = value;
  }
  public resetAnomalyIpList() {
    this._anomalyIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyIpListInput() {
    return this._anomalyIpList;
  }

  // details - computed: false, optional: true, required: false
  private _details?: number; 
  public get details() {
    return this.getNumberAttribute('details');
  }
  public set details(value: number) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // discovered_ip_list - computed: false, optional: true, required: false
  private _discoveredIpList?: number; 
  public get discoveredIpList() {
    return this.getNumberAttribute('discovered_ip_list');
  }
  public set discoveredIpList(value: number) {
    this._discoveredIpList = value;
  }
  public resetDiscoveredIpList() {
    this._discoveredIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredIpListInput() {
    return this._discoveredIpList;
  }

  // discovered_list - computed: false, optional: true, required: false
  private _discoveredList?: number; 
  public get discoveredList() {
    return this.getNumberAttribute('discovered_list');
  }
  public set discoveredList(value: number) {
    this._discoveredList = value;
  }
  public resetDiscoveredList() {
    this._discoveredList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredListInput() {
    return this._discoveredList;
  }

  // entry_count - computed: false, optional: true, required: false
  private _entryCount?: number; 
  public get entryCount() {
    return this.getNumberAttribute('entry_count');
  }
  public set entryCount(value: number) {
    this._entryCount = value;
  }
  public resetEntryCount() {
    this._entryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCountInput() {
    return this._entryCount;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // port_end - computed: false, optional: true, required: false
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  public resetPortEnd() {
    this._portEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // port_start - computed: false, optional: true, required: false
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  public resetPortStart() {
    this._portStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // single_layer_discovered_list - computed: false, optional: true, required: false
  private _singleLayerDiscoveredList?: number; 
  public get singleLayerDiscoveredList() {
    return this.getNumberAttribute('single_layer_discovered_list');
  }
  public set singleLayerDiscoveredList(value: number) {
    this._singleLayerDiscoveredList = value;
  }
  public resetSingleLayerDiscoveredList() {
    this._singleLayerDiscoveredList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLayerDiscoveredListInput() {
    return this._singleLayerDiscoveredList;
  }

  // sport - computed: false, optional: true, required: false
  private _sport?: number; 
  public get sport() {
    return this.getNumberAttribute('sport');
  }
  public set sport(value: number) {
    this._sport = value;
  }
  public resetSport() {
    this._sport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportInput() {
    return this._sport;
  }

  // sport_list - computed: false, optional: true, required: false
  private _sportList?: number; 
  public get sportList() {
    return this.getNumberAttribute('sport_list');
  }
  public set sportList(value: number) {
    this._sportList = value;
  }
  public resetSportList() {
    this._sportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportListInput() {
    return this._sportList;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // total_details - computed: false, optional: true, required: false
  private _totalDetails?: number; 
  public get totalDetails() {
    return this.getNumberAttribute('total_details');
  }
  public set totalDetails(value: number) {
    this._totalDetails = value;
  }
  public resetTotalDetails() {
    this._totalDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDetailsInput() {
    return this._totalDetails;
  }

  // trusted_details - computed: false, optional: true, required: false
  private _trustedDetails?: number; 
  public get trustedDetails() {
    return this.getNumberAttribute('trusted_details');
  }
  public set trustedDetails(value: number) {
    this._trustedDetails = value;
  }
  public resetTrustedDetails() {
    this._trustedDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedDetailsInput() {
    return this._trustedDetails;
  }

  // victim_list - computed: false, optional: true, required: false
  private _victimList?: number; 
  public get victimList() {
    return this.getNumberAttribute('victim_list');
  }
  public set victimList(value: number) {
    this._victimList = value;
  }
  public resetVictimList() {
    this._victimList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victimListInput() {
    return this._victimList;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderDdosNetworkObjectOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosNetworkObjectOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}
export interface DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#address DataThunderDdosNetworkObjectOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#rate DataThunderDdosNetworkObjectOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsToTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsToHclTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._rate = value.rate;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
}

export class DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsOutputReference {
    return new DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#indicator_index DataThunderDdosNetworkObjectOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#indicator_name DataThunderDdosNetworkObjectOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#destinations DataThunderDdosNetworkObjectOper#destinations}
  */
  readonly destinations?: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable;
}

export function dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsToTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    destinations: cdktf.listMapper(dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsToHclTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    destinations: {
      value: cdktf.listMapperHcl(dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._destinations.internalValue = value.destinations;
    }
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

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}

export class DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsOutputReference {
    return new DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNetworkObjectOperTopkDestinationsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#reset_time DataThunderDdosNetworkObjectOper#reset_time}
  */
  readonly resetTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#topk_type DataThunderDdosNetworkObjectOper#topk_type}
  */
  readonly topkType?: number;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#indicators DataThunderDdosNetworkObjectOper#indicators}
  */
  readonly indicators?: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosNetworkObjectOperTopkDestinationsOperToTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOperOutputReference | DataThunderDdosNetworkObjectOperTopkDestinationsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reset_time: cdktf.numberToTerraform(struct!.resetTime),
    topk_type: cdktf.numberToTerraform(struct!.topkType),
    indicators: cdktf.listMapper(dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosNetworkObjectOperTopkDestinationsOperToHclTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOperOutputReference | DataThunderDdosNetworkObjectOperTopkDestinationsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reset_time: {
      value: cdktf.numberToHclTerraform(struct!.resetTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_type: {
      value: cdktf.numberToHclTerraform(struct!.topkType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperTopkDestinationsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNetworkObjectOperTopkDestinationsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resetTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTime = this._resetTime;
    }
    if (this._topkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkType = this._topkType;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperTopkDestinationsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resetTime = undefined;
      this._topkType = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resetTime = value.resetTime;
      this._topkType = value.topkType;
      this._indicators.internalValue = value.indicators;
    }
  }

  // reset_time - computed: false, optional: true, required: false
  private _resetTime?: number; 
  public get resetTime() {
    return this.getNumberAttribute('reset_time');
  }
  public set resetTime(value: number) {
    this._resetTime = value;
  }
  public resetResetTime() {
    this._resetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeInput() {
    return this._resetTime;
  }

  // topk_type - computed: false, optional: true, required: false
  private _topkType?: number; 
  public get topkType() {
    return this.getNumberAttribute('topk_type');
  }
  public set topkType(value: number) {
    this._topkType = value;
  }
  public resetTopkType() {
    this._topkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkTypeInput() {
    return this._topkType;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosNetworkObjectOperTopkDestinationsOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosNetworkObjectOperTopkDestinations {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#oper DataThunderDdosNetworkObjectOper#oper}
  */
  readonly oper?: DataThunderDdosNetworkObjectOperTopkDestinationsOper;
}

export function dataThunderDdosNetworkObjectOperTopkDestinationsToTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOutputReference | DataThunderDdosNetworkObjectOperTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosNetworkObjectOperTopkDestinationsOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosNetworkObjectOperTopkDestinationsToHclTerraform(struct?: DataThunderDdosNetworkObjectOperTopkDestinationsOutputReference | DataThunderDdosNetworkObjectOperTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosNetworkObjectOperTopkDestinationsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectOperTopkDestinationsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectOperTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNetworkObjectOperTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectOperTopkDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosNetworkObjectOperTopkDestinationsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosNetworkObjectOperTopkDestinationsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper thunder_ddos_network_object_oper}
*/
export class DataThunderDdosNetworkObjectOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosNetworkObjectOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosNetworkObjectOper to import
  * @param importFromId The id of the existing DataThunderDdosNetworkObjectOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosNetworkObjectOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_oper thunder_ddos_network_object_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosNetworkObjectOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosNetworkObjectOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_oper',
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
    this._objectName = config.objectName;
    this._oper.internalValue = config.oper;
    this._topkDestinations.internalValue = config.topkDestinations;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosNetworkObjectOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosNetworkObjectOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DataThunderDdosNetworkObjectOperTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DataThunderDdosNetworkObjectOperTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_name: cdktf.stringToTerraform(this._objectName),
      oper: dataThunderDdosNetworkObjectOperOperToTerraform(this._oper.internalValue),
      topk_destinations: dataThunderDdosNetworkObjectOperTopkDestinationsToTerraform(this._topkDestinations.internalValue),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosNetworkObjectOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosNetworkObjectOperOperList",
      },
      topk_destinations: {
        value: dataThunderDdosNetworkObjectOperTopkDestinationsToHclTerraform(this._topkDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosNetworkObjectOperTopkDestinationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
