// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonitoredEntityOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#id DataThunderVisibilityMonitoredEntityOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#detail DataThunderVisibilityMonitoredEntityOper#detail}
  */
  readonly detail?: DataThunderVisibilityMonitoredEntityOperDetail;
  /**
  * mon_topk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mon_topk DataThunderVisibilityMonitoredEntityOper#mon_topk}
  */
  readonly monTopk?: DataThunderVisibilityMonitoredEntityOperMonTopk;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperOper;
  /**
  * secondary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#secondary DataThunderVisibilityMonitoredEntityOper#secondary}
  */
  readonly secondary?: DataThunderVisibilityMonitoredEntityOperSecondary;
  /**
  * sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#sessions DataThunderVisibilityMonitoredEntityOper#sessions}
  */
  readonly sessions?: DataThunderVisibilityMonitoredEntityOperSessions;
}
export interface DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#anomaly DataThunderVisibilityMonitoredEntityOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#current DataThunderVisibilityMonitoredEntityOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#max DataThunderVisibilityMonitoredEntityOper#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mean DataThunderVisibilityMonitoredEntityOper#mean}
  */
  readonly mean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#min DataThunderVisibilityMonitoredEntityOper#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#std_dev DataThunderVisibilityMonitoredEntityOper#std_dev}
  */
  readonly stdDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#threshold DataThunderVisibilityMonitoredEntityOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#anomaly DataThunderVisibilityMonitoredEntityOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#current DataThunderVisibilityMonitoredEntityOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#max DataThunderVisibilityMonitoredEntityOper#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mean DataThunderVisibilityMonitoredEntityOper#mean}
  */
  readonly mean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#min DataThunderVisibilityMonitoredEntityOper#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#std_dev DataThunderVisibilityMonitoredEntityOper#std_dev}
  */
  readonly stdDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#threshold DataThunderVisibilityMonitoredEntityOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#flat_oid DataThunderVisibilityMonitoredEntityOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ha_state DataThunderVisibilityMonitoredEntityOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mode DataThunderVisibilityMonitoredEntityOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#uuid DataThunderVisibilityMonitoredEntityOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_metric_list DataThunderVisibilityMonitoredEntityOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#flat_oid DataThunderVisibilityMonitoredEntityOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ha_state DataThunderVisibilityMonitoredEntityOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mode DataThunderVisibilityMonitoredEntityOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#uuid DataThunderVisibilityMonitoredEntityOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_metric_list DataThunderVisibilityMonitoredEntityOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#sec_entity_list DataThunderVisibilityMonitoredEntityOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructList",
    },
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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
  private _secEntityList = new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailDebugOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#all_keys DataThunderVisibilityMonitoredEntityOper#all_keys}
  */
  readonly allKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#primary_keys DataThunderVisibilityMonitoredEntityOper#primary_keys}
  */
  readonly primaryKeys?: number;
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mon_entity_list DataThunderVisibilityMonitoredEntityOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperOutputReference | DataThunderVisibilityMonitoredEntityOperDetailDebugOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_keys: cdktf.numberToTerraform(struct!.allKeys),
    primary_keys: cdktf.numberToTerraform(struct!.primaryKeys),
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailDebugOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOperOutputReference | DataThunderVisibilityMonitoredEntityOperDetailDebugOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailDebugOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOper | undefined) {
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
  private _monEntityList = new DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOperMonEntityListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityMonitoredEntityOperDetailDebug {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperDetailDebugOper;
}

export function dataThunderVisibilityMonitoredEntityOperDetailDebugToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOutputReference | DataThunderVisibilityMonitoredEntityOperDetailDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntityOperDetailDebugOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailDebugToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailDebugOutputReference | DataThunderVisibilityMonitoredEntityOperDetailDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperDetailDebugOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailDebugOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailDebug | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailDebug | undefined) {
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
  private _oper = new DataThunderVisibilityMonitoredEntityOperDetailDebugOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperDetailDebugOper) {
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
export interface DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#anomaly DataThunderVisibilityMonitoredEntityOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#current DataThunderVisibilityMonitoredEntityOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#threshold DataThunderVisibilityMonitoredEntityOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#anomaly DataThunderVisibilityMonitoredEntityOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#current DataThunderVisibilityMonitoredEntityOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#threshold DataThunderVisibilityMonitoredEntityOper#threshold}
  */
  readonly threshold?: string;
}

export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#flat_oid DataThunderVisibilityMonitoredEntityOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ha_state DataThunderVisibilityMonitoredEntityOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mode DataThunderVisibilityMonitoredEntityOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#uuid DataThunderVisibilityMonitoredEntityOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_metric_list DataThunderVisibilityMonitoredEntityOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#flat_oid DataThunderVisibilityMonitoredEntityOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ha_state DataThunderVisibilityMonitoredEntityOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mode DataThunderVisibilityMonitoredEntityOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#uuid DataThunderVisibilityMonitoredEntityOper#uuid}
  */
  readonly uuid?: string;
  /**
  * entity_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_metric_list DataThunderVisibilityMonitoredEntityOper#entity_metric_list}
  */
  readonly entityMetricList?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#sec_entity_list DataThunderVisibilityMonitoredEntityOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct | cdktf.IResolvable): any {
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
    entity_metric_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructToTerraform, true)(struct!.entityMetricList),
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructToHclTerraform, true)(struct!.entityMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructList",
    },
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct | cdktf.IResolvable | undefined) {
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
  private _entityMetricList = new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStructList(this, "entity_metric_list", false);
  public get entityMetricList() {
    return this._entityMetricList;
  }
  public putEntityMetricList(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListEntityMetricListStruct[] | cdktf.IResolvable) {
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
  private _secEntityList = new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperDetailOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#all_keys DataThunderVisibilityMonitoredEntityOper#all_keys}
  */
  readonly allKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#primary_keys DataThunderVisibilityMonitoredEntityOper#primary_keys}
  */
  readonly primaryKeys?: number;
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mon_entity_list DataThunderVisibilityMonitoredEntityOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperDetailOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperOutputReference | DataThunderVisibilityMonitoredEntityOperDetailOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_keys: cdktf.numberToTerraform(struct!.allKeys),
    primary_keys: cdktf.numberToTerraform(struct!.primaryKeys),
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOperOutputReference | DataThunderVisibilityMonitoredEntityOperDetailOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetailOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetailOper | undefined) {
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
  private _monEntityList = new DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntityOperDetailOperMonEntityListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityMonitoredEntityOperDetail {
  /**
  * debug block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#debug DataThunderVisibilityMonitoredEntityOper#debug}
  */
  readonly debug?: DataThunderVisibilityMonitoredEntityOperDetailDebug;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperDetailOper;
}

export function dataThunderVisibilityMonitoredEntityOperDetailToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOutputReference | DataThunderVisibilityMonitoredEntityOperDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: dataThunderVisibilityMonitoredEntityOperDetailDebugToTerraform(struct!.debug),
    oper: dataThunderVisibilityMonitoredEntityOperDetailOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntityOperDetailToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperDetailOutputReference | DataThunderVisibilityMonitoredEntityOperDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: dataThunderVisibilityMonitoredEntityOperDetailDebugToHclTerraform(struct!.debug),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailDebugList",
    },
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperDetailOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debug.internalValue = undefined;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debug.internalValue = value.debug;
      this._oper.internalValue = value.oper;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new DataThunderVisibilityMonitoredEntityOperDetailDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataThunderVisibilityMonitoredEntityOperDetailDebug) {
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
  private _oper = new DataThunderVisibilityMonitoredEntityOperDetailOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperDetailOper) {
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
export interface DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ip_addr DataThunderVisibilityMonitoredEntityOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_value DataThunderVisibilityMonitoredEntityOper#metric_value}
  */
  readonly metricValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#port DataThunderVisibilityMonitoredEntityOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#protocol DataThunderVisibilityMonitoredEntityOper#protocol}
  */
  readonly protocol?: string;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktf.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._metricValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._metricValue = value.metricValue;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#topk_list DataThunderVisibilityMonitoredEntityOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._topkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkList = this._topkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._topkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._topkList.internalValue = value.topkList;
    }
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

  // topk_list - computed: false, optional: true, required: false
  private _topkList = new DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
    this._topkList.internalValue = value;
  }
  public resetTopkList() {
    this._topkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkListInput() {
    return this._topkList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperMonTopkOper {
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_topk_list DataThunderVisibilityMonitoredEntityOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOperOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopkOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOperOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopkOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopkOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTopkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopkList = this._metricTopkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopkOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricTopkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricTopkList.internalValue = value.metricTopkList;
    }
  }

  // metric_topk_list - computed: false, optional: true, required: false
  private _metricTopkList = new DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonitoredEntityOperMonTopkOperMetricTopkListStruct[] | cdktf.IResolvable) {
    this._metricTopkList.internalValue = value;
  }
  public resetMetricTopkList() {
    this._metricTopkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTopkListInput() {
    return this._metricTopkList.internalValue;
  }
}
export interface DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ip_addr DataThunderVisibilityMonitoredEntityOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_value DataThunderVisibilityMonitoredEntityOper#metric_value}
  */
  readonly metricValue?: string;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktf.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._metricValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._metricValue = value.metricValue;
    }
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#topk_list DataThunderVisibilityMonitoredEntityOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._topkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkList = this._topkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._topkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._topkList.internalValue = value.topkList;
    }
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

  // topk_list - computed: false, optional: true, required: false
  private _topkList = new DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
    this._topkList.internalValue = value;
  }
  public resetTopkList() {
    this._topkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkListInput() {
    return this._topkList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_topk_list DataThunderVisibilityMonitoredEntityOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    metric_topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._metricTopkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopkList = this._metricTopkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._metricTopkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._metricTopkList.internalValue = value.metricTopkList;
    }
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

  // metric_topk_list - computed: false, optional: true, required: false
  private _metricTopkList = new DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperMetricTopkListStruct[] | cdktf.IResolvable) {
    this._metricTopkList.internalValue = value;
  }
  public resetMetricTopkList() {
    this._metricTopkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTopkListInput() {
    return this._metricTopkList.internalValue;
  }
}
export interface DataThunderVisibilityMonitoredEntityOperMonTopkSources {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOper;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkSourcesToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopkSources | undefined) {
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
  private _oper = new DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOper) {
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
export interface DataThunderVisibilityMonitoredEntityOperMonTopk {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperMonTopkOper;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#sources DataThunderVisibilityMonitoredEntityOper#sources}
  */
  readonly sources?: DataThunderVisibilityMonitoredEntityOperMonTopkSources;
}

export function dataThunderVisibilityMonitoredEntityOperMonTopkToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntityOperMonTopkOperToTerraform(struct!.oper),
    sources: dataThunderVisibilityMonitoredEntityOperMonTopkSourcesToTerraform(struct!.sources),
  }
}


export function dataThunderVisibilityMonitoredEntityOperMonTopkToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperMonTopkOutputReference | DataThunderVisibilityMonitoredEntityOperMonTopk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperMonTopkOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkOperList",
    },
    sources: {
      value: dataThunderVisibilityMonitoredEntityOperMonTopkSourcesToHclTerraform(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperMonTopkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperMonTopk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperMonTopk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
      this._sources.internalValue = value.sources;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntityOperMonTopkOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperMonTopkOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataThunderVisibilityMonitoredEntityOperMonTopkSourcesOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataThunderVisibilityMonitoredEntityOperMonTopkSources) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#flat_oid DataThunderVisibilityMonitoredEntityOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ha_state DataThunderVisibilityMonitoredEntityOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mode DataThunderVisibilityMonitoredEntityOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#uuid DataThunderVisibilityMonitoredEntityOper#uuid}
  */
  readonly uuid?: string;
}

export function dataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
  }
}


export function dataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
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
}

export class DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#flat_oid DataThunderVisibilityMonitoredEntityOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ha_state DataThunderVisibilityMonitoredEntityOper#ha_state}
  */
  readonly haState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mode DataThunderVisibilityMonitoredEntityOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#uuid DataThunderVisibilityMonitoredEntityOper#uuid}
  */
  readonly uuid?: string;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#sec_entity_list DataThunderVisibilityMonitoredEntityOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct | cdktf.IResolvable): any {
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
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct | cdktf.IResolvable): any {
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
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct | cdktf.IResolvable | undefined {
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
    if (this._secEntityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secEntityList = this._secEntityList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct | cdktf.IResolvable | undefined) {
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

  // sec_entity_list - computed: false, optional: true, required: false
  private _secEntityList = new DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntityOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntityOperOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#all_keys DataThunderVisibilityMonitoredEntityOper#all_keys}
  */
  readonly allKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#primary_keys DataThunderVisibilityMonitoredEntityOper#primary_keys}
  */
  readonly primaryKeys?: number;
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mon_entity_list DataThunderVisibilityMonitoredEntityOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperOperOutputReference | DataThunderVisibilityMonitoredEntityOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_keys: cdktf.numberToTerraform(struct!.allKeys),
    primary_keys: cdktf.numberToTerraform(struct!.primaryKeys),
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperOperOutputReference | DataThunderVisibilityMonitoredEntityOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperOper | undefined) {
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
  private _monEntityList = new DataThunderVisibilityMonitoredEntityOperOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntityOperOperMonEntityListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ip_addr DataThunderVisibilityMonitoredEntityOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_value DataThunderVisibilityMonitoredEntityOper#metric_value}
  */
  readonly metricValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#port DataThunderVisibilityMonitoredEntityOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#protocol DataThunderVisibilityMonitoredEntityOper#protocol}
  */
  readonly protocol?: string;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktf.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._metricValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._metricValue = value.metricValue;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#topk_list DataThunderVisibilityMonitoredEntityOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._topkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkList = this._topkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._topkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._topkList.internalValue = value.topkList;
    }
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

  // topk_list - computed: false, optional: true, required: false
  private _topkList = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
    this._topkList.internalValue = value;
  }
  public resetTopkList() {
    this._topkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkListInput() {
    return this._topkList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_topk_list DataThunderVisibilityMonitoredEntityOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    metric_topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._metricTopkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopkList = this._metricTopkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._metricTopkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._metricTopkList.internalValue = value.metricTopkList;
    }
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

  // metric_topk_list - computed: false, optional: true, required: false
  private _metricTopkList = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperMetricTopkListStruct[] | cdktf.IResolvable) {
    this._metricTopkList.internalValue = value;
  }
  public resetMetricTopkList() {
    this._metricTopkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTopkListInput() {
    return this._metricTopkList.internalValue;
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ip_addr DataThunderVisibilityMonitoredEntityOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_value DataThunderVisibilityMonitoredEntityOper#metric_value}
  */
  readonly metricValue?: string;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktf.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._metricValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._metricValue = value.metricValue;
    }
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_name DataThunderVisibilityMonitoredEntityOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#topk_list DataThunderVisibilityMonitoredEntityOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._topkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkList = this._topkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._topkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._topkList.internalValue = value.topkList;
    }
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

  // topk_list - computed: false, optional: true, required: false
  private _topkList = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
    this._topkList.internalValue = value;
  }
  public resetTopkList() {
    this._topkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkListInput() {
    return this._topkList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#metric_topk_list DataThunderVisibilityMonitoredEntityOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    metric_topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._metricTopkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopkList = this._metricTopkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._metricTopkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._metricTopkList.internalValue = value.metricTopkList;
    }
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

  // metric_topk_list - computed: false, optional: true, required: false
  private _metricTopkList = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperMetricTopkListStruct[] | cdktf.IResolvable) {
    this._metricTopkList.internalValue = value;
  }
  public resetMetricTopkList() {
    this._metricTopkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTopkListInput() {
    return this._metricTopkList.internalValue;
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSources {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOper;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSources | undefined) {
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
  private _oper = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOper) {
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
export interface DataThunderVisibilityMonitoredEntityOperSecondaryMonTopk {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOper;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#sources DataThunderVisibilityMonitoredEntityOper#sources}
  */
  readonly sources?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSources;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperToTerraform(struct!.oper),
    sources: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesToTerraform(struct!.sources),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryMonTopk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperList",
    },
    sources: {
      value: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesToHclTerraform(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryMonTopk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
      this._sources.internalValue = value.sources;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSourcesOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkSources) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondaryOper {
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryOperOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryOperOutputReference | DataThunderVisibilityMonitoredEntityOperSecondaryOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondaryOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondaryOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSecondary {
  /**
  * mon_topk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mon_topk DataThunderVisibilityMonitoredEntityOper#mon_topk}
  */
  readonly monTopk?: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopk;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperSecondaryOper;
}

export function dataThunderVisibilityMonitoredEntityOperSecondaryToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryOutputReference | DataThunderVisibilityMonitoredEntityOperSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mon_topk: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkToTerraform(struct!.monTopk),
    oper: dataThunderVisibilityMonitoredEntityOperSecondaryOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSecondaryToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSecondaryOutputReference | DataThunderVisibilityMonitoredEntityOperSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mon_topk: {
      value: dataThunderVisibilityMonitoredEntityOperSecondaryMonTopkToHclTerraform(struct!.monTopk),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkList",
    },
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperSecondaryOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSecondary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monTopk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monTopk = this._monTopk?.internalValue;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSecondary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monTopk.internalValue = undefined;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monTopk.internalValue = value.monTopk;
      this._oper.internalValue = value.oper;
    }
  }

  // mon_topk - computed: false, optional: true, required: false
  private _monTopk = new DataThunderVisibilityMonitoredEntityOperSecondaryMonTopkOutputReference(this, "mon_topk");
  public get monTopk() {
    return this._monTopk;
  }
  public putMonTopk(value: DataThunderVisibilityMonitoredEntityOperSecondaryMonTopk) {
    this._monTopk.internalValue = value;
  }
  public resetMonTopk() {
    this._monTopk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monTopkInput() {
    return this._monTopk.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntityOperSecondaryOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperSecondaryOper) {
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
export interface DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_dst_ip DataThunderVisibilityMonitoredEntityOper#fwd_dst_ip}
  */
  readonly fwdDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_dst_port DataThunderVisibilityMonitoredEntityOper#fwd_dst_port}
  */
  readonly fwdDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_src_ip DataThunderVisibilityMonitoredEntityOper#fwd_src_ip}
  */
  readonly fwdSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_src_port DataThunderVisibilityMonitoredEntityOper#fwd_src_port}
  */
  readonly fwdSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#proto DataThunderVisibilityMonitoredEntityOper#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_dst_ip DataThunderVisibilityMonitoredEntityOper#rev_dst_ip}
  */
  readonly revDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_dst_port DataThunderVisibilityMonitoredEntityOper#rev_dst_port}
  */
  readonly revDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_src_ip DataThunderVisibilityMonitoredEntityOper#rev_src_ip}
  */
  readonly revSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_src_port DataThunderVisibilityMonitoredEntityOper#rev_src_port}
  */
  readonly revSrcPort?: number;
}

export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_dst_ip: cdktf.stringToTerraform(struct!.fwdDstIp),
    fwd_dst_port: cdktf.numberToTerraform(struct!.fwdDstPort),
    fwd_src_ip: cdktf.stringToTerraform(struct!.fwdSrcIp),
    fwd_src_port: cdktf.numberToTerraform(struct!.fwdSrcPort),
    proto: cdktf.stringToTerraform(struct!.proto),
    rev_dst_ip: cdktf.stringToTerraform(struct!.revDstIp),
    rev_dst_port: cdktf.numberToTerraform(struct!.revDstPort),
    rev_src_ip: cdktf.stringToTerraform(struct!.revSrcIp),
    rev_src_port: cdktf.numberToTerraform(struct!.revSrcPort),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_src_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.revDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.revDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.revSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_src_port: {
      value: cdktf.numberToHclTerraform(struct!.revSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstIp = this._fwdDstIp;
    }
    if (this._fwdDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstPort = this._fwdDstPort;
    }
    if (this._fwdSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcIp = this._fwdSrcIp;
    }
    if (this._fwdSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcPort = this._fwdSrcPort;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._revDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstIp = this._revDstIp;
    }
    if (this._revDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstPort = this._revDstPort;
    }
    if (this._revSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcIp = this._revSrcIp;
    }
    if (this._revSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcPort = this._revSrcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdDstIp = undefined;
      this._fwdDstPort = undefined;
      this._fwdSrcIp = undefined;
      this._fwdSrcPort = undefined;
      this._proto = undefined;
      this._revDstIp = undefined;
      this._revDstPort = undefined;
      this._revSrcIp = undefined;
      this._revSrcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdDstIp = value.fwdDstIp;
      this._fwdDstPort = value.fwdDstPort;
      this._fwdSrcIp = value.fwdSrcIp;
      this._fwdSrcPort = value.fwdSrcPort;
      this._proto = value.proto;
      this._revDstIp = value.revDstIp;
      this._revDstPort = value.revDstPort;
      this._revSrcIp = value.revSrcIp;
      this._revSrcPort = value.revSrcPort;
    }
  }

  // fwd_dst_ip - computed: false, optional: true, required: false
  private _fwdDstIp?: string; 
  public get fwdDstIp() {
    return this.getStringAttribute('fwd_dst_ip');
  }
  public set fwdDstIp(value: string) {
    this._fwdDstIp = value;
  }
  public resetFwdDstIp() {
    this._fwdDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstIpInput() {
    return this._fwdDstIp;
  }

  // fwd_dst_port - computed: false, optional: true, required: false
  private _fwdDstPort?: number; 
  public get fwdDstPort() {
    return this.getNumberAttribute('fwd_dst_port');
  }
  public set fwdDstPort(value: number) {
    this._fwdDstPort = value;
  }
  public resetFwdDstPort() {
    this._fwdDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstPortInput() {
    return this._fwdDstPort;
  }

  // fwd_src_ip - computed: false, optional: true, required: false
  private _fwdSrcIp?: string; 
  public get fwdSrcIp() {
    return this.getStringAttribute('fwd_src_ip');
  }
  public set fwdSrcIp(value: string) {
    this._fwdSrcIp = value;
  }
  public resetFwdSrcIp() {
    this._fwdSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcIpInput() {
    return this._fwdSrcIp;
  }

  // fwd_src_port - computed: false, optional: true, required: false
  private _fwdSrcPort?: number; 
  public get fwdSrcPort() {
    return this.getNumberAttribute('fwd_src_port');
  }
  public set fwdSrcPort(value: number) {
    this._fwdSrcPort = value;
  }
  public resetFwdSrcPort() {
    this._fwdSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcPortInput() {
    return this._fwdSrcPort;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // rev_dst_ip - computed: false, optional: true, required: false
  private _revDstIp?: string; 
  public get revDstIp() {
    return this.getStringAttribute('rev_dst_ip');
  }
  public set revDstIp(value: string) {
    this._revDstIp = value;
  }
  public resetRevDstIp() {
    this._revDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstIpInput() {
    return this._revDstIp;
  }

  // rev_dst_port - computed: false, optional: true, required: false
  private _revDstPort?: number; 
  public get revDstPort() {
    return this.getNumberAttribute('rev_dst_port');
  }
  public set revDstPort(value: number) {
    this._revDstPort = value;
  }
  public resetRevDstPort() {
    this._revDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstPortInput() {
    return this._revDstPort;
  }

  // rev_src_ip - computed: false, optional: true, required: false
  private _revSrcIp?: string; 
  public get revSrcIp() {
    return this.getStringAttribute('rev_src_ip');
  }
  public set revSrcIp(value: string) {
    this._revSrcIp = value;
  }
  public resetRevSrcIp() {
    this._revSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcIpInput() {
    return this._revSrcIp;
  }

  // rev_src_port - computed: false, optional: true, required: false
  private _revSrcPort?: number; 
  public get revSrcPort() {
    return this.getNumberAttribute('rev_src_port');
  }
  public set revSrcPort(value: number) {
    this._revSrcPort = value;
  }
  public resetRevSrcPort() {
    this._revSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcPortInput() {
    return this._revSrcPort;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#session_list DataThunderVisibilityMonitoredEntityOper#session_list}
  */
  readonly sessionList?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_key: cdktf.stringToTerraform(struct!.entityKey),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    session_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
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
    session_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
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
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityKey = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._sessionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityKey = value.entityKey;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._sessionList.internalValue = value.sessionList;
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

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_dst_ip DataThunderVisibilityMonitoredEntityOper#fwd_dst_ip}
  */
  readonly fwdDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_dst_port DataThunderVisibilityMonitoredEntityOper#fwd_dst_port}
  */
  readonly fwdDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_src_ip DataThunderVisibilityMonitoredEntityOper#fwd_src_ip}
  */
  readonly fwdSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#fwd_src_port DataThunderVisibilityMonitoredEntityOper#fwd_src_port}
  */
  readonly fwdSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#proto DataThunderVisibilityMonitoredEntityOper#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_dst_ip DataThunderVisibilityMonitoredEntityOper#rev_dst_ip}
  */
  readonly revDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_dst_port DataThunderVisibilityMonitoredEntityOper#rev_dst_port}
  */
  readonly revDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_src_ip DataThunderVisibilityMonitoredEntityOper#rev_src_ip}
  */
  readonly revSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#rev_src_port DataThunderVisibilityMonitoredEntityOper#rev_src_port}
  */
  readonly revSrcPort?: number;
}

export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_dst_ip: cdktf.stringToTerraform(struct!.fwdDstIp),
    fwd_dst_port: cdktf.numberToTerraform(struct!.fwdDstPort),
    fwd_src_ip: cdktf.stringToTerraform(struct!.fwdSrcIp),
    fwd_src_port: cdktf.numberToTerraform(struct!.fwdSrcPort),
    proto: cdktf.stringToTerraform(struct!.proto),
    rev_dst_ip: cdktf.stringToTerraform(struct!.revDstIp),
    rev_dst_port: cdktf.numberToTerraform(struct!.revDstPort),
    rev_src_ip: cdktf.stringToTerraform(struct!.revSrcIp),
    rev_src_port: cdktf.numberToTerraform(struct!.revSrcPort),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_src_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.revDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.revDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.revSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_src_port: {
      value: cdktf.numberToHclTerraform(struct!.revSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstIp = this._fwdDstIp;
    }
    if (this._fwdDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstPort = this._fwdDstPort;
    }
    if (this._fwdSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcIp = this._fwdSrcIp;
    }
    if (this._fwdSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcPort = this._fwdSrcPort;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._revDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstIp = this._revDstIp;
    }
    if (this._revDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstPort = this._revDstPort;
    }
    if (this._revSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcIp = this._revSrcIp;
    }
    if (this._revSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcPort = this._revSrcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdDstIp = undefined;
      this._fwdDstPort = undefined;
      this._fwdSrcIp = undefined;
      this._fwdSrcPort = undefined;
      this._proto = undefined;
      this._revDstIp = undefined;
      this._revDstPort = undefined;
      this._revSrcIp = undefined;
      this._revSrcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdDstIp = value.fwdDstIp;
      this._fwdDstPort = value.fwdDstPort;
      this._fwdSrcIp = value.fwdSrcIp;
      this._fwdSrcPort = value.fwdSrcPort;
      this._proto = value.proto;
      this._revDstIp = value.revDstIp;
      this._revDstPort = value.revDstPort;
      this._revSrcIp = value.revSrcIp;
      this._revSrcPort = value.revSrcPort;
    }
  }

  // fwd_dst_ip - computed: false, optional: true, required: false
  private _fwdDstIp?: string; 
  public get fwdDstIp() {
    return this.getStringAttribute('fwd_dst_ip');
  }
  public set fwdDstIp(value: string) {
    this._fwdDstIp = value;
  }
  public resetFwdDstIp() {
    this._fwdDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstIpInput() {
    return this._fwdDstIp;
  }

  // fwd_dst_port - computed: false, optional: true, required: false
  private _fwdDstPort?: number; 
  public get fwdDstPort() {
    return this.getNumberAttribute('fwd_dst_port');
  }
  public set fwdDstPort(value: number) {
    this._fwdDstPort = value;
  }
  public resetFwdDstPort() {
    this._fwdDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstPortInput() {
    return this._fwdDstPort;
  }

  // fwd_src_ip - computed: false, optional: true, required: false
  private _fwdSrcIp?: string; 
  public get fwdSrcIp() {
    return this.getStringAttribute('fwd_src_ip');
  }
  public set fwdSrcIp(value: string) {
    this._fwdSrcIp = value;
  }
  public resetFwdSrcIp() {
    this._fwdSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcIpInput() {
    return this._fwdSrcIp;
  }

  // fwd_src_port - computed: false, optional: true, required: false
  private _fwdSrcPort?: number; 
  public get fwdSrcPort() {
    return this.getNumberAttribute('fwd_src_port');
  }
  public set fwdSrcPort(value: number) {
    this._fwdSrcPort = value;
  }
  public resetFwdSrcPort() {
    this._fwdSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcPortInput() {
    return this._fwdSrcPort;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // rev_dst_ip - computed: false, optional: true, required: false
  private _revDstIp?: string; 
  public get revDstIp() {
    return this.getStringAttribute('rev_dst_ip');
  }
  public set revDstIp(value: string) {
    this._revDstIp = value;
  }
  public resetRevDstIp() {
    this._revDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstIpInput() {
    return this._revDstIp;
  }

  // rev_dst_port - computed: false, optional: true, required: false
  private _revDstPort?: number; 
  public get revDstPort() {
    return this.getNumberAttribute('rev_dst_port');
  }
  public set revDstPort(value: number) {
    this._revDstPort = value;
  }
  public resetRevDstPort() {
    this._revDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstPortInput() {
    return this._revDstPort;
  }

  // rev_src_ip - computed: false, optional: true, required: false
  private _revSrcIp?: string; 
  public get revSrcIp() {
    return this.getStringAttribute('rev_src_ip');
  }
  public set revSrcIp(value: string) {
    this._revSrcIp = value;
  }
  public resetRevSrcIp() {
    this._revSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcIpInput() {
    return this._revSrcIp;
  }

  // rev_src_port - computed: false, optional: true, required: false
  private _revSrcPort?: number; 
  public get revSrcPort() {
    return this.getNumberAttribute('rev_src_port');
  }
  public set revSrcPort(value: number) {
    this._revSrcPort = value;
  }
  public resetRevSrcPort() {
    this._revSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcPortInput() {
    return this._revSrcPort;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#entity_key DataThunderVisibilityMonitoredEntityOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv4_addr DataThunderVisibilityMonitoredEntityOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#ipv6_addr DataThunderVisibilityMonitoredEntityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_port DataThunderVisibilityMonitoredEntityOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#l4_proto DataThunderVisibilityMonitoredEntityOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#sec_entity_list DataThunderVisibilityMonitoredEntityOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#session_list DataThunderVisibilityMonitoredEntityOper#session_list}
  */
  readonly sessionList?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_key: cdktf.stringToTerraform(struct!.entityKey),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
    session_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct | cdktf.IResolvable): any {
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
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructList",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
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
    if (this._secEntityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secEntityList = this._secEntityList?.internalValue;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityKey = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._secEntityList.internalValue = undefined;
      this._sessionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityKey = value.entityKey;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._secEntityList.internalValue = value.secEntityList;
      this._sessionList.internalValue = value.sessionList;
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

  // sec_entity_list - computed: false, optional: true, required: false
  private _secEntityList = new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
    this._secEntityList.internalValue = value;
  }
  public resetSecEntityList() {
    this._secEntityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secEntityListInput() {
    return this._secEntityList.internalValue;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityOperSessionsOper {
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#mon_entity_list DataThunderVisibilityMonitoredEntityOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityOperSessionsOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperOutputReference | DataThunderVisibilityMonitoredEntityOperSessionsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSessionsOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOperOutputReference | DataThunderVisibilityMonitoredEntityOperSessionsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mon_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSessionsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monEntityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityList = this._monEntityList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSessionsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monEntityList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monEntityList.internalValue = value.monEntityList;
    }
  }

  // mon_entity_list - computed: false, optional: true, required: false
  private _monEntityList = new DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntityOperSessionsOperMonEntityListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityMonitoredEntityOperSessions {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#oper DataThunderVisibilityMonitoredEntityOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityOperSessionsOper;
}

export function dataThunderVisibilityMonitoredEntityOperSessionsToTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOutputReference | DataThunderVisibilityMonitoredEntityOperSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntityOperSessionsOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntityOperSessionsToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityOperSessionsOutputReference | DataThunderVisibilityMonitoredEntityOperSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntityOperSessionsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityOperSessionsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityOperSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityOperSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityOperSessions | undefined) {
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
  private _oper = new DataThunderVisibilityMonitoredEntityOperSessionsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperSessionsOper) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper thunder_visibility_monitored_entity_oper}
*/
export class DataThunderVisibilityMonitoredEntityOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonitoredEntityOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonitoredEntityOper to import
  * @param importFromId The id of the existing DataThunderVisibilityMonitoredEntityOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonitoredEntityOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_oper thunder_visibility_monitored_entity_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonitoredEntityOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonitoredEntityOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity_oper',
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
    this._detail.internalValue = config.detail;
    this._monTopk.internalValue = config.monTopk;
    this._oper.internalValue = config.oper;
    this._secondary.internalValue = config.secondary;
    this._sessions.internalValue = config.sessions;
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

  // detail - computed: false, optional: true, required: false
  private _detail = new DataThunderVisibilityMonitoredEntityOperDetailOutputReference(this, "detail");
  public get detail() {
    return this._detail;
  }
  public putDetail(value: DataThunderVisibilityMonitoredEntityOperDetail) {
    this._detail.internalValue = value;
  }
  public resetDetail() {
    this._detail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail.internalValue;
  }

  // mon_topk - computed: false, optional: true, required: false
  private _monTopk = new DataThunderVisibilityMonitoredEntityOperMonTopkOutputReference(this, "mon_topk");
  public get monTopk() {
    return this._monTopk;
  }
  public putMonTopk(value: DataThunderVisibilityMonitoredEntityOperMonTopk) {
    this._monTopk.internalValue = value;
  }
  public resetMonTopk() {
    this._monTopk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monTopkInput() {
    return this._monTopk.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntityOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary = new DataThunderVisibilityMonitoredEntityOperSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: DataThunderVisibilityMonitoredEntityOperSecondary) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }

  // sessions - computed: false, optional: true, required: false
  private _sessions = new DataThunderVisibilityMonitoredEntityOperSessionsOutputReference(this, "sessions");
  public get sessions() {
    return this._sessions;
  }
  public putSessions(value: DataThunderVisibilityMonitoredEntityOperSessions) {
    this._sessions.internalValue = value;
  }
  public resetSessions() {
    this._sessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      detail: dataThunderVisibilityMonitoredEntityOperDetailToTerraform(this._detail.internalValue),
      mon_topk: dataThunderVisibilityMonitoredEntityOperMonTopkToTerraform(this._monTopk.internalValue),
      oper: dataThunderVisibilityMonitoredEntityOperOperToTerraform(this._oper.internalValue),
      secondary: dataThunderVisibilityMonitoredEntityOperSecondaryToTerraform(this._secondary.internalValue),
      sessions: dataThunderVisibilityMonitoredEntityOperSessionsToTerraform(this._sessions.internalValue),
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
      detail: {
        value: dataThunderVisibilityMonitoredEntityOperDetailToHclTerraform(this._detail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityOperDetailList",
      },
      mon_topk: {
        value: dataThunderVisibilityMonitoredEntityOperMonTopkToHclTerraform(this._monTopk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityOperMonTopkList",
      },
      oper: {
        value: dataThunderVisibilityMonitoredEntityOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityOperOperList",
      },
      secondary: {
        value: dataThunderVisibilityMonitoredEntityOperSecondaryToHclTerraform(this._secondary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityOperSecondaryList",
      },
      sessions: {
        value: dataThunderVisibilityMonitoredEntityOperSessionsToHclTerraform(this._sessions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityOperSessionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
