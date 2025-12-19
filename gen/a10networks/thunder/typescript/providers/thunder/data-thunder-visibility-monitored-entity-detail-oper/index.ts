// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonitoredEntityDetailOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#id DataThunderVisibilityMonitoredEntityDetailOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * debug block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#debug DataThunderVisibilityMonitoredEntityDetailOper#debug}
  */
  readonly debug?: DataThunderVisibilityMonitoredEntityDetailOperDebug;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#oper DataThunderVisibilityMonitoredEntityDetailOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityDetailOperOper;
}
export interface DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#anomaly DataThunderVisibilityMonitoredEntityDetailOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#current DataThunderVisibilityMonitoredEntityDetailOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#max DataThunderVisibilityMonitoredEntityDetailOper#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mean DataThunderVisibilityMonitoredEntityDetailOper#mean}
  */
  readonly mean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#metric_name DataThunderVisibilityMonitoredEntityDetailOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#min DataThunderVisibilityMonitoredEntityDetailOper#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#std_dev DataThunderVisibilityMonitoredEntityDetailOper#std_dev}
  */
  readonly stdDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#threshold DataThunderVisibilityMonitoredEntityDetailOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#anomaly DataThunderVisibilityMonitoredEntityDetailOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#current DataThunderVisibilityMonitoredEntityDetailOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#max DataThunderVisibilityMonitoredEntityDetailOper#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mean DataThunderVisibilityMonitoredEntityDetailOper#mean}
  */
  readonly mean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#metric_name DataThunderVisibilityMonitoredEntityDetailOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#min DataThunderVisibilityMonitoredEntityDetailOper#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#std_dev DataThunderVisibilityMonitoredEntityDetailOper#std_dev}
  */
  readonly stdDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#threshold DataThunderVisibilityMonitoredEntityDetailOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_key DataThunderVisibilityMonitoredEntityDetailOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#flat_oid DataThunderVisibilityMonitoredEntityDetailOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ha_state DataThunderVisibilityMonitoredEntityDetailOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv4_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv6_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_port DataThunderVisibilityMonitoredEntityDetailOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_proto DataThunderVisibilityMonitoredEntityDetailOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mode DataThunderVisibilityMonitoredEntityDetailOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#uuid DataThunderVisibilityMonitoredEntityDetailOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_metric_list DataThunderVisibilityMonitoredEntityDetailOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_key DataThunderVisibilityMonitoredEntityDetailOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#flat_oid DataThunderVisibilityMonitoredEntityDetailOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ha_state DataThunderVisibilityMonitoredEntityDetailOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv4_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv6_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_port DataThunderVisibilityMonitoredEntityDetailOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_proto DataThunderVisibilityMonitoredEntityDetailOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mode DataThunderVisibilityMonitoredEntityDetailOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#uuid DataThunderVisibilityMonitoredEntityDetailOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_metric_list DataThunderVisibilityMonitoredEntityDetailOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#sec_entity_list DataThunderVisibilityMonitoredEntityDetailOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructList",
    },
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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
  private _secEntityList = new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperDebugOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#all_keys DataThunderVisibilityMonitoredEntityDetailOper#all_keys}
  */
  readonly allKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#primary_keys DataThunderVisibilityMonitoredEntityDetailOper#primary_keys}
  */
  readonly primaryKeys?: number;
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mon_entity_list DataThunderVisibilityMonitoredEntityDetailOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperOutputReference | DataThunderVisibilityMonitoredEntityDetailOperDebugOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_keys: cdktf.numberToTerraform(struct!.allKeys),
    primary_keys: cdktf.numberToTerraform(struct!.primaryKeys),
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperDebugOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOperOutputReference | DataThunderVisibilityMonitoredEntityDetailOperDebugOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperDebugOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOper | undefined) {
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
  private _monEntityList = new DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOperMonEntityListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityMonitoredEntityDetailOperDebug {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#oper DataThunderVisibilityMonitoredEntityDetailOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityDetailOperDebugOper;
}

export function dataThunderVisibilityMonitoredEntityDetailOperDebugToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOutputReference | DataThunderVisibilityMonitoredEntityDetailOperDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntityDetailOperDebugOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperDebugToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperDebugOutputReference | DataThunderVisibilityMonitoredEntityDetailOperDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntityDetailOperDebugOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperDebugOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailOperDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperDebug | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperDebug | undefined) {
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
  private _oper = new DataThunderVisibilityMonitoredEntityDetailOperDebugOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityDetailOperDebugOper) {
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
export interface DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#anomaly DataThunderVisibilityMonitoredEntityDetailOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#current DataThunderVisibilityMonitoredEntityDetailOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#metric_name DataThunderVisibilityMonitoredEntityDetailOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#threshold DataThunderVisibilityMonitoredEntityDetailOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anomaly: cdktf.stringToTerraform(struct!.anomaly),
    current: cdktf.stringToTerraform(struct!.current),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
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

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anomaly = undefined;
      this._current = undefined;
      this._metricName = undefined;
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
      this._metricName = value.metricName;
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

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#anomaly DataThunderVisibilityMonitoredEntityDetailOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#current DataThunderVisibilityMonitoredEntityDetailOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#metric_name DataThunderVisibilityMonitoredEntityDetailOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#threshold DataThunderVisibilityMonitoredEntityDetailOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anomaly: cdktf.stringToTerraform(struct!.anomaly),
    current: cdktf.stringToTerraform(struct!.current),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
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

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anomaly = undefined;
      this._current = undefined;
      this._metricName = undefined;
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
      this._metricName = value.metricName;
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

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_key DataThunderVisibilityMonitoredEntityDetailOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#flat_oid DataThunderVisibilityMonitoredEntityDetailOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ha_state DataThunderVisibilityMonitoredEntityDetailOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv4_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv6_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_port DataThunderVisibilityMonitoredEntityDetailOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_proto DataThunderVisibilityMonitoredEntityDetailOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mode DataThunderVisibilityMonitoredEntityDetailOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#uuid DataThunderVisibilityMonitoredEntityDetailOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_metric_list DataThunderVisibilityMonitoredEntityDetailOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_key DataThunderVisibilityMonitoredEntityDetailOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#flat_oid DataThunderVisibilityMonitoredEntityDetailOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ha_state DataThunderVisibilityMonitoredEntityDetailOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv4_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#ipv6_addr DataThunderVisibilityMonitoredEntityDetailOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_port DataThunderVisibilityMonitoredEntityDetailOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#l4_proto DataThunderVisibilityMonitoredEntityDetailOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mode DataThunderVisibilityMonitoredEntityDetailOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#uuid DataThunderVisibilityMonitoredEntityDetailOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#entity_metric_list DataThunderVisibilityMonitoredEntityDetailOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#sec_entity_list DataThunderVisibilityMonitoredEntityDetailOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructList",
    },
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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
  private _secEntityList = new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityDetailOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#all_keys DataThunderVisibilityMonitoredEntityDetailOper#all_keys}
  */
  readonly allKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#primary_keys DataThunderVisibilityMonitoredEntityDetailOper#primary_keys}
  */
  readonly primaryKeys?: number;
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#mon_entity_list DataThunderVisibilityMonitoredEntityDetailOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityDetailOperOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperOutputReference | DataThunderVisibilityMonitoredEntityDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_keys: cdktf.numberToTerraform(struct!.allKeys),
    primary_keys: cdktf.numberToTerraform(struct!.primaryKeys),
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityDetailOperOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityDetailOperOperOutputReference | DataThunderVisibilityMonitoredEntityDetailOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityDetailOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityDetailOperOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityDetailOperOper | undefined) {
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
  private _monEntityList = new DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntityDetailOperOperMonEntityListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper thunder_visibility_monitored_entity_detail_oper}
*/
export class DataThunderVisibilityMonitoredEntityDetailOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity_detail_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonitoredEntityDetailOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonitoredEntityDetailOper to import
  * @param importFromId The id of the existing DataThunderVisibilityMonitoredEntityDetailOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonitoredEntityDetailOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity_detail_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_detail_oper thunder_visibility_monitored_entity_detail_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonitoredEntityDetailOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonitoredEntityDetailOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity_detail_oper',
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
    this._debug.internalValue = config.debug;
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

  // debug - computed: false, optional: true, required: false
  private _debug = new DataThunderVisibilityMonitoredEntityDetailOperDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataThunderVisibilityMonitoredEntityDetailOperDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntityDetailOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityDetailOperOper) {
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
      debug: dataThunderVisibilityMonitoredEntityDetailOperDebugToTerraform(this._debug.internalValue),
      oper: dataThunderVisibilityMonitoredEntityDetailOperOperToTerraform(this._oper.internalValue),
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
      debug: {
        value: dataThunderVisibilityMonitoredEntityDetailOperDebugToHclTerraform(this._debug.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperDebugList",
      },
      oper: {
        value: dataThunderVisibilityMonitoredEntityDetailOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityDetailOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
