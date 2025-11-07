// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonitoredEntityDetailDebugOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#id DataThunderVisibilityMonitoredEntityDetailDebugOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#oper DataThunderVisibilityMonitoredEntityDetailDebugOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityDetailDebugOperOper;
}
export interface DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#anomaly DataThunderVisibilityMonitoredEntityDetailDebugOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#current DataThunderVisibilityMonitoredEntityDetailDebugOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#max DataThunderVisibilityMonitoredEntityDetailDebugOper#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#mean DataThunderVisibilityMonitoredEntityDetailDebugOper#mean}
  */
  readonly mean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#metric_name DataThunderVisibilityMonitoredEntityDetailDebugOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#min DataThunderVisibilityMonitoredEntityDetailDebugOper#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#std_dev DataThunderVisibilityMonitoredEntityDetailDebugOper#std_dev}
  */
  readonly stdDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#threshold DataThunderVisibilityMonitoredEntityDetailDebugOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anomaly: cdktf.stringToTerraform(struct!.anomaly),
    current: cdktf.stringToTerraform(struct!.current),
    max: cdktf.stringToTerraform(struct!.max),
    mean: cdktf.stringToTerraform(struct!.mean),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min: cdktf.stringToTerraform(struct!.min),
    std_dev: cdktf.stringToTerraform(struct!.stdDev),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anomaly: {
      value: cdktf.stringToHclTerraform(struct!.anomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    mean: {
      value: cdktf.stringToHclTerraform(struct!.mean),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    std_dev: {
      value: cdktf.stringToHclTerraform(struct!.stdDev),
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

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomaly = this._anomaly;
    }
    if (this._current !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._mean !== undefined) {
      hasAnyValues = true;
      internalValueResult.mean = this._mean;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._stdDev !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdDev = this._stdDev;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anomaly = undefined;
      this._current = undefined;
      this._max = undefined;
      this._mean = undefined;
      this._metricName = undefined;
      this._min = undefined;
      this._stdDev = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anomaly = value.anomaly;
      this._current = value.current;
      this._max = value.max;
      this._mean = value.mean;
      this._metricName = value.metricName;
      this._min = value.min;
      this._stdDev = value.stdDev;
      this._threshold = value.threshold;
    }
  }

  // anomaly - computed: false, optional: true, required: false
  private _anomaly?: string; 
  public get anomaly() {
    return this.getStringAttribute('anomaly');
  }
  public set anomaly(value: string) {
    this._anomaly = value;
  }
  public resetAnomaly() {
    this._anomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly;
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

  // mean - computed: false, optional: true, required: false
  private _mean?: string; 
  public get mean() {
    return this.getStringAttribute('mean');
  }
  public set mean(value: string) {
    this._mean = value;
  }
  public resetMean() {
    this._mean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meanInput() {
    return this._mean;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // std_dev - computed: false, optional: true, required: false
  private _stdDev?: string; 
  public get stdDev() {
    return this.getStringAttribute('std_dev');
  }
  public set stdDev(value: string) {
    this._stdDev = value;
  }
  public resetStdDev() {
    this._stdDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdDevInput() {
    return this._stdDev;
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

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#anomaly DataThunderVisibilityMonitoredEntityDetailDebugOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#current DataThunderVisibilityMonitoredEntityDetailDebugOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#max DataThunderVisibilityMonitoredEntityDetailDebugOper#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#mean DataThunderVisibilityMonitoredEntityDetailDebugOper#mean}
  */
  readonly mean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#metric_name DataThunderVisibilityMonitoredEntityDetailDebugOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#min DataThunderVisibilityMonitoredEntityDetailDebugOper#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#std_dev DataThunderVisibilityMonitoredEntityDetailDebugOper#std_dev}
  */
  readonly stdDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#threshold DataThunderVisibilityMonitoredEntityDetailDebugOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anomaly: cdktf.stringToTerraform(struct!.anomaly),
    current: cdktf.stringToTerraform(struct!.current),
    max: cdktf.stringToTerraform(struct!.max),
    mean: cdktf.stringToTerraform(struct!.mean),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min: cdktf.stringToTerraform(struct!.min),
    std_dev: cdktf.stringToTerraform(struct!.stdDev),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anomaly: {
      value: cdktf.stringToHclTerraform(struct!.anomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    mean: {
      value: cdktf.stringToHclTerraform(struct!.mean),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    std_dev: {
      value: cdktf.stringToHclTerraform(struct!.stdDev),
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

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomaly = this._anomaly;
    }
    if (this._current !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._mean !== undefined) {
      hasAnyValues = true;
      internalValueResult.mean = this._mean;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._stdDev !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdDev = this._stdDev;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anomaly = undefined;
      this._current = undefined;
      this._max = undefined;
      this._mean = undefined;
      this._metricName = undefined;
      this._min = undefined;
      this._stdDev = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anomaly = value.anomaly;
      this._current = value.current;
      this._max = value.max;
      this._mean = value.mean;
      this._metricName = value.metricName;
      this._min = value.min;
      this._stdDev = value.stdDev;
      this._threshold = value.threshold;
    }
  }

  // anomaly - computed: false, optional: true, required: false
  private _anomaly?: string; 
  public get anomaly() {
    return this.getStringAttribute('anomaly');
  }
  public set anomaly(value: string) {
    this._anomaly = value;
  }
  public resetAnomaly() {
    this._anomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly;
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

  // mean - computed: false, optional: true, required: false
  private _mean?: string; 
  public get mean() {
    return this.getStringAttribute('mean');
  }
  public set mean(value: string) {
    this._mean = value;
  }
  public resetMean() {
    this._mean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meanInput() {
    return this._mean;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // std_dev - computed: false, optional: true, required: false
  private _stdDev?: string; 
  public get stdDev() {
    return this.getStringAttribute('std_dev');
  }
  public set stdDev(value: string) {
    this._stdDev = value;
  }
  public resetStdDev() {
    this._stdDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdDevInput() {
    return this._stdDev;
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

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#entity_key DataThunderVisibilityMonitoredEntityDetailDebugOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#flat_oid DataThunderVisibilityMonitoredEntityDetailDebugOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#ha_state DataThunderVisibilityMonitoredEntityDetailDebugOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#ipv4_addr DataThunderVisibilityMonitoredEntityDetailDebugOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#ipv6_addr DataThunderVisibilityMonitoredEntityDetailDebugOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#l4_port DataThunderVisibilityMonitoredEntityDetailDebugOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#l4_proto DataThunderVisibilityMonitoredEntityDetailDebugOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#mode DataThunderVisibilityMonitoredEntityDetailDebugOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#uuid DataThunderVisibilityMonitoredEntityDetailDebugOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#entity_metric_list DataThunderVisibilityMonitoredEntityDetailDebugOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_key: cdktf.stringToTerraform(struct!.entityKey),
    flat_oid: cdktf.numberToTerraform(struct!.flatOid),
    ha_state: cdktf.stringToTerraform(struct!.haState),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    mode: cdktf.stringToTerraform(struct!.mode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_key: {
      value: cdktf.stringToHclTerraform(struct!.entityKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flat_oid: {
      value: cdktf.numberToHclTerraform(struct!.flatOid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_state: {
      value: cdktf.stringToHclTerraform(struct!.haState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_port: {
      value: cdktf.numberToHclTerraform(struct!.l4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_proto: {
      value: cdktf.stringToHclTerraform(struct!.l4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_metric_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
    }
    if (this._flatOid !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatOid = this._flatOid;
    }
    if (this._haState !== undefined) {
      hasAnyValues = true;
      internalValueResult.haState = this._haState;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._l4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Port = this._l4Port;
    }
    if (this._l4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Proto = this._l4Proto;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._entityMetricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityMetricList = this._entityMetricList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityKey = undefined;
      this._flatOid = undefined;
      this._haState = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._mode = undefined;
      this._uuid = undefined;
      this._entityMetricList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityKey = value.entityKey;
      this._flatOid = value.flatOid;
      this._haState = value.haState;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._mode = value.mode;
      this._uuid = value.uuid;
      this._entityMetricList.internalValue = value.entityMetricList;
    }
  }

  // entity_key - computed: false, optional: true, required: false
  private _entityKey?: string; 
  public get entityKey() {
    return this.getStringAttribute('entity_key');
  }
  public set entityKey(value: string) {
    this._entityKey = value;
  }
  public resetEntityKey() {
    this._entityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityKeyInput() {
    return this._entityKey;
  }

  // flat_oid - computed: false, optional: true, required: false
  private _flatOid?: number; 
  public get flatOid() {
    return this.getNumberAttribute('flat_oid');
  }
  public set flatOid(value: number) {
    this._flatOid = value;
  }
  public resetFlatOid() {
    this._flatOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatOidInput() {
    return this._flatOid;
  }

  // ha_state - computed: false, optional: true, required: false
  private _haState?: string; 
  public get haState() {
    return this.getStringAttribute('ha_state');
  }
  public set haState(value: string) {
    this._haState = value;
  }
  public resetHaState() {
    this._haState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStateInput() {
    return this._haState;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // l4_port - computed: false, optional: true, required: false
  private _l4Port?: number; 
  public get l4Port() {
    return this.getNumberAttribute('l4_port');
  }
  public set l4Port(value: number) {
    this._l4Port = value;
  }
  public resetL4Port() {
    this._l4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PortInput() {
    return this._l4Port;
  }

  // l4_proto - computed: false, optional: true, required: false
  private _l4Proto?: string; 
  public get l4Proto() {
    return this.getStringAttribute('l4_proto');
  }
  public set l4Proto(value: string) {
    this._l4Proto = value;
  }
  public resetL4Proto() {
    this._l4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtoInput() {
    return this._l4Proto;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // entity_metric_list - computed: false, optional: true, required: false
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
    this._entityMetricList.internalValue = value;
  }
  public resetEntityMetricList() {
    this._entityMetricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityMetricListInput() {
    return this._entityMetricList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#entity_key DataThunderVisibilityMonitoredEntityDetailDebugOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#flat_oid DataThunderVisibilityMonitoredEntityDetailDebugOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#ha_state DataThunderVisibilityMonitoredEntityDetailDebugOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#ipv4_addr DataThunderVisibilityMonitoredEntityDetailDebugOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#ipv6_addr DataThunderVisibilityMonitoredEntityDetailDebugOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#l4_port DataThunderVisibilityMonitoredEntityDetailDebugOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#l4_proto DataThunderVisibilityMonitoredEntityDetailDebugOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#mode DataThunderVisibilityMonitoredEntityDetailDebugOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#uuid DataThunderVisibilityMonitoredEntityDetailDebugOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#entity_metric_list DataThunderVisibilityMonitoredEntityDetailDebugOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#sec_entity_list DataThunderVisibilityMonitoredEntityDetailDebugOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_key: cdktf.stringToTerraform(struct!.entityKey),
    flat_oid: cdktf.numberToTerraform(struct!.flatOid),
    ha_state: cdktf.stringToTerraform(struct!.haState),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    mode: cdktf.stringToTerraform(struct!.mode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_key: {
      value: cdktf.stringToHclTerraform(struct!.entityKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flat_oid: {
      value: cdktf.numberToHclTerraform(struct!.flatOid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_state: {
      value: cdktf.stringToHclTerraform(struct!.haState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_port: {
      value: cdktf.numberToHclTerraform(struct!.l4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_proto: {
      value: cdktf.stringToHclTerraform(struct!.l4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_metric_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructList",
    },
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
    }
    if (this._flatOid !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatOid = this._flatOid;
    }
    if (this._haState !== undefined) {
      hasAnyValues = true;
      internalValueResult.haState = this._haState;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._l4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Port = this._l4Port;
    }
    if (this._l4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Proto = this._l4Proto;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._entityMetricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityMetricList = this._entityMetricList?.internalValue;
    }
    if (this._secEntityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secEntityList = this._secEntityList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityKey = undefined;
      this._flatOid = undefined;
      this._haState = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._mode = undefined;
      this._uuid = undefined;
      this._entityMetricList.internalValue = undefined;
      this._secEntityList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityKey = value.entityKey;
      this._flatOid = value.flatOid;
      this._haState = value.haState;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._mode = value.mode;
      this._uuid = value.uuid;
      this._entityMetricList.internalValue = value.entityMetricList;
      this._secEntityList.internalValue = value.secEntityList;
    }
  }

  // entity_key - computed: false, optional: true, required: false
  private _entityKey?: string; 
  public get entityKey() {
    return this.getStringAttribute('entity_key');
  }
  public set entityKey(value: string) {
    this._entityKey = value;
  }
  public resetEntityKey() {
    this._entityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityKeyInput() {
    return this._entityKey;
  }

  // flat_oid - computed: false, optional: true, required: false
  private _flatOid?: number; 
  public get flatOid() {
    return this.getNumberAttribute('flat_oid');
  }
  public set flatOid(value: number) {
    this._flatOid = value;
  }
  public resetFlatOid() {
    this._flatOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatOidInput() {
    return this._flatOid;
  }

  // ha_state - computed: false, optional: true, required: false
  private _haState?: string; 
  public get haState() {
    return this.getStringAttribute('ha_state');
  }
  public set haState(value: string) {
    this._haState = value;
  }
  public resetHaState() {
    this._haState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStateInput() {
    return this._haState;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // l4_port - computed: false, optional: true, required: false
  private _l4Port?: number; 
  public get l4Port() {
    return this.getNumberAttribute('l4_port');
  }
  public set l4Port(value: number) {
    this._l4Port = value;
  }
  public resetL4Port() {
    this._l4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PortInput() {
    return this._l4Port;
  }

  // l4_proto - computed: false, optional: true, required: false
  private _l4Proto?: string; 
  public get l4Proto() {
    return this.getStringAttribute('l4_proto');
  }
  public set l4Proto(value: string) {
    this._l4Proto = value;
  }
  public resetL4Proto() {
    this._l4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtoInput() {
    return this._l4Proto;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // entity_metric_list - computed: false, optional: true, required: false
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
    this._entityMetricList.internalValue = value;
  }
  public resetEntityMetricList() {
    this._entityMetricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityMetricListInput() {
    return this._entityMetricList.internalValue;
  }

  // sec_entity_list - computed: false, optional: true, required: false
  private _secEntityList = new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
    this._secEntityList.internalValue = value;
  }
  public resetSecEntityList() {
    this._secEntityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secEntityListInput() {
    return this._secEntityList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailDebugOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#all_keys DataThunderVisibilityMonitoredEntityDetailDebugOper#all_keys}
  */
  readonly allKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#primary_keys DataThunderVisibilityMonitoredEntityDetailDebugOper#primary_keys}
  */
  readonly primaryKeys?: number;
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#mon_entity_list DataThunderVisibilityMonitoredEntityDetailDebugOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperOutputReference | DataThunderVisibilityMonitoredEntityDetailDebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_keys: cdktf.numberToTerraform(struct!.allKeys),
    primary_keys: cdktf.numberToTerraform(struct!.primaryKeys),
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailDebugOperOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailDebugOperOperOutputReference | DataThunderVisibilityMonitoredEntityDetailDebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_keys: {
      value: cdktf.numberToHclTerraform(struct!.allKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_keys: {
      value: cdktf.numberToHclTerraform(struct!.primaryKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mon_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailDebugOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailDebugOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.allKeys = this._allKeys;
    }
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._monEntityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityList = this._monEntityList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allKeys = undefined;
      this._primaryKeys = undefined;
      this._monEntityList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allKeys = value.allKeys;
      this._primaryKeys = value.primaryKeys;
      this._monEntityList.internalValue = value.monEntityList;
    }
  }

  // all_keys - computed: false, optional: true, required: false
  private _allKeys?: number; 
  public get allKeys() {
    return this.getNumberAttribute('all_keys');
  }
  public set allKeys(value: number) {
    this._allKeys = value;
  }
  public resetAllKeys() {
    this._allKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allKeysInput() {
    return this._allKeys;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: number; 
  public get primaryKeys() {
    return this.getNumberAttribute('primary_keys');
  }
  public set primaryKeys(value: number) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // mon_entity_list - computed: false, optional: true, required: false
  private _monEntityList = new DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOperMonEntityListStruct[] | cdktf.IResolvable) {
    this._monEntityList.internalValue = value;
  }
  public resetMonEntityList() {
    this._monEntityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityListInput() {
    return this._monEntityList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper thunder_visibility_monitored_entity_detail_debug_oper}
*/
export class DataThunderVisibilityMonitoredEntityDetailDebugOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity_detail_debug_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonitoredEntityDetailDebugOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonitoredEntityDetailDebugOper to import
  * @param importFromId The id of the existing DataThunderVisibilityMonitoredEntityDetailDebugOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonitoredEntityDetailDebugOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity_detail_debug_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_monitored_entity_detail_debug_oper thunder_visibility_monitored_entity_detail_debug_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonitoredEntityDetailDebugOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonitoredEntityDetailDebugOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity_detail_debug_oper',
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
  private _oper = new DataThunderVisibilityMonitoredEntityDetailDebugOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityDetailDebugOperOper) {
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
      oper: dataThunderVisibilityMonitoredEntityDetailDebugOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityMonitoredEntityDetailDebugOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityDetailDebugOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
