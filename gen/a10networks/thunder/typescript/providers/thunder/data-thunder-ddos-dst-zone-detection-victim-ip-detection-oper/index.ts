// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneDetectionVictimIpDetectionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#id DataThunderDdosDstZoneDetectionVictimIpDetectionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#zone_name DataThunderDdosDstZoneDetectionVictimIpDetectionOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#oper DataThunderDdosDstZoneDetectionVictimIpDetectionOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOper;
}
export interface DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#current DataThunderDdosDstZoneDetectionVictimIpDetectionOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#threshold DataThunderDdosDstZoneDetectionVictimIpDetectionOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueToTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current: cdktf.stringToTerraform(struct!.current),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueToHclTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._current !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._current = undefined;
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

export class DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueOutputReference {
    return new DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#indicator_index DataThunderDdosDstZoneDetectionVictimIpDetectionOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#indicator_name DataThunderDdosDstZoneDetectionVictimIpDetectionOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#is_anomaly DataThunderDdosDstZoneDetectionVictimIpDetectionOper#is_anomaly}
  */
  readonly isAnomaly?: number;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#value DataThunderDdosDstZoneDetectionVictimIpDetectionOper#value}
  */
  readonly value?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    is_anomaly: cdktf.numberToTerraform(struct!.isAnomaly),
    value: cdktf.listMapper(dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueToTerraform, true)(struct!.value),
  }
}


export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators | cdktf.IResolvable | undefined) {
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
  private _value = new DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsValue[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#de_escalation_timestamp DataThunderDdosDstZoneDetectionVictimIpDetectionOper#de_escalation_timestamp}
  */
  readonly deEscalationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#escalation_timestamp DataThunderDdosDstZoneDetectionVictimIpDetectionOper#escalation_timestamp}
  */
  readonly escalationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#ip_address_str DataThunderDdosDstZoneDetectionVictimIpDetectionOper#ip_address_str}
  */
  readonly ipAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#is_histogram_learning_done DataThunderDdosDstZoneDetectionVictimIpDetectionOper#is_histogram_learning_done}
  */
  readonly isHistogramLearningDone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#is_ip_anomaly DataThunderDdosDstZoneDetectionVictimIpDetectionOper#is_ip_anomaly}
  */
  readonly isIpAnomaly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#is_learning_done DataThunderDdosDstZoneDetectionVictimIpDetectionOper#is_learning_done}
  */
  readonly isLearningDone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#is_static_threshold DataThunderDdosDstZoneDetectionVictimIpDetectionOper#is_static_threshold}
  */
  readonly isStaticThreshold?: number;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#indicators DataThunderDdosDstZoneDetectionVictimIpDetectionOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructToTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    de_escalation_timestamp: cdktf.stringToTerraform(struct!.deEscalationTimestamp),
    escalation_timestamp: cdktf.stringToTerraform(struct!.escalationTimestamp),
    ip_address_str: cdktf.stringToTerraform(struct!.ipAddressStr),
    is_histogram_learning_done: cdktf.numberToTerraform(struct!.isHistogramLearningDone),
    is_ip_anomaly: cdktf.numberToTerraform(struct!.isIpAnomaly),
    is_learning_done: cdktf.numberToTerraform(struct!.isLearningDone),
    is_static_threshold: cdktf.numberToTerraform(struct!.isStaticThreshold),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    de_escalation_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.deEscalationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalation_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.escalationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_str: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_histogram_learning_done: {
      value: cdktf.numberToHclTerraform(struct!.isHistogramLearningDone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_ip_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.isIpAnomaly),
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
    is_static_threshold: {
      value: cdktf.numberToHclTerraform(struct!.isStaticThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deEscalationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deEscalationTimestamp = this._deEscalationTimestamp;
    }
    if (this._escalationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationTimestamp = this._escalationTimestamp;
    }
    if (this._ipAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressStr = this._ipAddressStr;
    }
    if (this._isHistogramLearningDone !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHistogramLearningDone = this._isHistogramLearningDone;
    }
    if (this._isIpAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIpAnomaly = this._isIpAnomaly;
    }
    if (this._isLearningDone !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLearningDone = this._isLearningDone;
    }
    if (this._isStaticThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStaticThreshold = this._isStaticThreshold;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deEscalationTimestamp = undefined;
      this._escalationTimestamp = undefined;
      this._ipAddressStr = undefined;
      this._isHistogramLearningDone = undefined;
      this._isIpAnomaly = undefined;
      this._isLearningDone = undefined;
      this._isStaticThreshold = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deEscalationTimestamp = value.deEscalationTimestamp;
      this._escalationTimestamp = value.escalationTimestamp;
      this._ipAddressStr = value.ipAddressStr;
      this._isHistogramLearningDone = value.isHistogramLearningDone;
      this._isIpAnomaly = value.isIpAnomaly;
      this._isLearningDone = value.isLearningDone;
      this._isStaticThreshold = value.isStaticThreshold;
      this._indicators.internalValue = value.indicators;
    }
  }

  // de_escalation_timestamp - computed: false, optional: true, required: false
  private _deEscalationTimestamp?: string; 
  public get deEscalationTimestamp() {
    return this.getStringAttribute('de_escalation_timestamp');
  }
  public set deEscalationTimestamp(value: string) {
    this._deEscalationTimestamp = value;
  }
  public resetDeEscalationTimestamp() {
    this._deEscalationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deEscalationTimestampInput() {
    return this._deEscalationTimestamp;
  }

  // escalation_timestamp - computed: false, optional: true, required: false
  private _escalationTimestamp?: string; 
  public get escalationTimestamp() {
    return this.getStringAttribute('escalation_timestamp');
  }
  public set escalationTimestamp(value: string) {
    this._escalationTimestamp = value;
  }
  public resetEscalationTimestamp() {
    this._escalationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationTimestampInput() {
    return this._escalationTimestamp;
  }

  // ip_address_str - computed: false, optional: true, required: false
  private _ipAddressStr?: string; 
  public get ipAddressStr() {
    return this.getStringAttribute('ip_address_str');
  }
  public set ipAddressStr(value: string) {
    this._ipAddressStr = value;
  }
  public resetIpAddressStr() {
    this._ipAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressStrInput() {
    return this._ipAddressStr;
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

  // is_ip_anomaly - computed: false, optional: true, required: false
  private _isIpAnomaly?: number; 
  public get isIpAnomaly() {
    return this.getNumberAttribute('is_ip_anomaly');
  }
  public set isIpAnomaly(value: number) {
    this._isIpAnomaly = value;
  }
  public resetIsIpAnomaly() {
    this._isIpAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpAnomalyInput() {
    return this._isIpAnomaly;
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

  // is_static_threshold - computed: false, optional: true, required: false
  private _isStaticThreshold?: number; 
  public get isStaticThreshold() {
    return this.getNumberAttribute('is_static_threshold');
  }
  public set isStaticThreshold(value: number) {
    this._isStaticThreshold = value;
  }
  public resetIsStaticThreshold() {
    this._isStaticThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStaticThresholdInput() {
    return this._isStaticThreshold;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListIndicators[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructOutputReference {
    return new DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionVictimIpDetectionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#active_list DataThunderDdosDstZoneDetectionVictimIpDetectionOper#active_list}
  */
  readonly activeList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#ip_entry_count DataThunderDdosDstZoneDetectionVictimIpDetectionOper#ip_entry_count}
  */
  readonly ipEntryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#ipv4_ip DataThunderDdosDstZoneDetectionVictimIpDetectionOper#ipv4_ip}
  */
  readonly ipv4Ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#ipv6_ip DataThunderDdosDstZoneDetectionVictimIpDetectionOper#ipv6_ip}
  */
  readonly ipv6Ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#total_ip_entry_count DataThunderDdosDstZoneDetectionVictimIpDetectionOper#total_ip_entry_count}
  */
  readonly totalIpEntryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#victim_list DataThunderDdosDstZoneDetectionVictimIpDetectionOper#victim_list}
  */
  readonly victimList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#with_selected_details DataThunderDdosDstZoneDetectionVictimIpDetectionOper#with_selected_details}
  */
  readonly withSelectedDetails?: number;
  /**
  * ip_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#ip_entry_list DataThunderDdosDstZoneDetectionVictimIpDetectionOper#ip_entry_list}
  */
  readonly ipEntryList?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperToTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperOutputReference | DataThunderDdosDstZoneDetectionVictimIpDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_list: cdktf.numberToTerraform(struct!.activeList),
    ip_entry_count: cdktf.numberToTerraform(struct!.ipEntryCount),
    ipv4_ip: cdktf.stringToTerraform(struct!.ipv4Ip),
    ipv6_ip: cdktf.stringToTerraform(struct!.ipv6Ip),
    total_ip_entry_count: cdktf.numberToTerraform(struct!.totalIpEntryCount),
    victim_list: cdktf.numberToTerraform(struct!.victimList),
    with_selected_details: cdktf.numberToTerraform(struct!.withSelectedDetails),
    ip_entry_list: cdktf.listMapper(dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructToTerraform, true)(struct!.ipEntryList),
  }
}


export function dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperToHclTerraform(struct?: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperOutputReference | DataThunderDdosDstZoneDetectionVictimIpDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_list: {
      value: cdktf.numberToHclTerraform(struct!.activeList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.ipEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_ip_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.totalIpEntryCount),
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
    with_selected_details: {
      value: cdktf.numberToHclTerraform(struct!.withSelectedDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructToHclTerraform, true)(struct!.ipEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionVictimIpDetectionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeList = this._activeList;
    }
    if (this._ipEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEntryCount = this._ipEntryCount;
    }
    if (this._ipv4Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Ip = this._ipv4Ip;
    }
    if (this._ipv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Ip = this._ipv6Ip;
    }
    if (this._totalIpEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalIpEntryCount = this._totalIpEntryCount;
    }
    if (this._victimList !== undefined) {
      hasAnyValues = true;
      internalValueResult.victimList = this._victimList;
    }
    if (this._withSelectedDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.withSelectedDetails = this._withSelectedDetails;
    }
    if (this._ipEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEntryList = this._ipEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeList = undefined;
      this._ipEntryCount = undefined;
      this._ipv4Ip = undefined;
      this._ipv6Ip = undefined;
      this._totalIpEntryCount = undefined;
      this._victimList = undefined;
      this._withSelectedDetails = undefined;
      this._ipEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeList = value.activeList;
      this._ipEntryCount = value.ipEntryCount;
      this._ipv4Ip = value.ipv4Ip;
      this._ipv6Ip = value.ipv6Ip;
      this._totalIpEntryCount = value.totalIpEntryCount;
      this._victimList = value.victimList;
      this._withSelectedDetails = value.withSelectedDetails;
      this._ipEntryList.internalValue = value.ipEntryList;
    }
  }

  // active_list - computed: false, optional: true, required: false
  private _activeList?: number; 
  public get activeList() {
    return this.getNumberAttribute('active_list');
  }
  public set activeList(value: number) {
    this._activeList = value;
  }
  public resetActiveList() {
    this._activeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeListInput() {
    return this._activeList;
  }

  // ip_entry_count - computed: false, optional: true, required: false
  private _ipEntryCount?: number; 
  public get ipEntryCount() {
    return this.getNumberAttribute('ip_entry_count');
  }
  public set ipEntryCount(value: number) {
    this._ipEntryCount = value;
  }
  public resetIpEntryCount() {
    this._ipEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEntryCountInput() {
    return this._ipEntryCount;
  }

  // ipv4_ip - computed: false, optional: true, required: false
  private _ipv4Ip?: string; 
  public get ipv4Ip() {
    return this.getStringAttribute('ipv4_ip');
  }
  public set ipv4Ip(value: string) {
    this._ipv4Ip = value;
  }
  public resetIpv4Ip() {
    this._ipv4Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IpInput() {
    return this._ipv4Ip;
  }

  // ipv6_ip - computed: false, optional: true, required: false
  private _ipv6Ip?: string; 
  public get ipv6Ip() {
    return this.getStringAttribute('ipv6_ip');
  }
  public set ipv6Ip(value: string) {
    this._ipv6Ip = value;
  }
  public resetIpv6Ip() {
    this._ipv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IpInput() {
    return this._ipv6Ip;
  }

  // total_ip_entry_count - computed: false, optional: true, required: false
  private _totalIpEntryCount?: number; 
  public get totalIpEntryCount() {
    return this.getNumberAttribute('total_ip_entry_count');
  }
  public set totalIpEntryCount(value: number) {
    this._totalIpEntryCount = value;
  }
  public resetTotalIpEntryCount() {
    this._totalIpEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalIpEntryCountInput() {
    return this._totalIpEntryCount;
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

  // with_selected_details - computed: false, optional: true, required: false
  private _withSelectedDetails?: number; 
  public get withSelectedDetails() {
    return this.getNumberAttribute('with_selected_details');
  }
  public set withSelectedDetails(value: number) {
    this._withSelectedDetails = value;
  }
  public resetWithSelectedDetails() {
    this._withSelectedDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSelectedDetailsInput() {
    return this._withSelectedDetails;
  }

  // ip_entry_list - computed: false, optional: true, required: false
  private _ipEntryList = new DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStructList(this, "ip_entry_list", false);
  public get ipEntryList() {
    return this._ipEntryList;
  }
  public putIpEntryList(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperIpEntryListStruct[] | cdktf.IResolvable) {
    this._ipEntryList.internalValue = value;
  }
  public resetIpEntryList() {
    this._ipEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEntryListInput() {
    return this._ipEntryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper thunder_ddos_dst_zone_detection_victim_ip_detection_oper}
*/
export class DataThunderDdosDstZoneDetectionVictimIpDetectionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection_victim_ip_detection_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneDetectionVictimIpDetectionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneDetectionVictimIpDetectionOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneDetectionVictimIpDetectionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneDetectionVictimIpDetectionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection_victim_ip_detection_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_victim_ip_detection_oper thunder_ddos_dst_zone_detection_victim_ip_detection_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneDetectionVictimIpDetectionOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneDetectionVictimIpDetectionOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection_victim_ip_detection_oper',
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
  private _oper = new DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneDetectionVictimIpDetectionOperOper) {
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
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperToTerraform(this._oper.internalValue),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZoneDetectionVictimIpDetectionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneDetectionVictimIpDetectionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
