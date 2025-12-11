// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringBaselineableMetricsEvaluateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}
  */
  readonly baselineableMetricId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}
  */
  readonly resourceId: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#items DataOciStackMonitoringBaselineableMetricsEvaluate#items}
  */
  readonly items: DataOciStackMonitoringBaselineableMetricsEvaluateItems[] | cdktf.IResolvable;
}
export interface DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints {
}

export function dataOciStackMonitoringBaselineableMetricsEvaluateDataPointsToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringBaselineableMetricsEvaluateDataPointsToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anomaly - computed: true, optional: false, required: false
  public get anomaly() {
    return this.getNumberAttribute('anomaly');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints {
}

export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anomaly - computed: true, optional: false, required: false
  public get anomaly() {
    return this.getNumberAttribute('anomaly');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}
  */
  readonly timestamp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}
  */
  readonly value: number;
}

export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestamp = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestamp = value.timestamp;
      this._value = value.value;
    }
  }

  // timestamp - computed: false, optional: false, required: true
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList extends cdktf.ComplexList {
  public internalValue? : DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints[] | cdktf.IResolvable

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}
  */
  readonly timestamp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}
  */
  readonly value: number;
}

export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestamp = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestamp = value.timestamp;
      this._value = value.value;
    }
  }

  // timestamp - computed: false, optional: false, required: true
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList extends cdktf.ComplexList {
  public internalValue? : DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints[] | cdktf.IResolvable

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringBaselineableMetricsEvaluateItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#dimensions DataOciStackMonitoringBaselineableMetricsEvaluate#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * evaluation_data_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#evaluation_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#evaluation_data_points}
  */
  readonly evaluationDataPoints: DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints[] | cdktf.IResolvable;
  /**
  * training_data_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#training_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#training_data_points}
  */
  readonly trainingDataPoints: DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints[] | cdktf.IResolvable;
}

export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsToTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_data_points: cdktf.listMapper(dataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsToTerraform, true)(struct!.evaluationDataPoints),
    training_data_points: cdktf.listMapper(dataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsToTerraform, true)(struct!.trainingDataPoints),
  }
}


export function dataOciStackMonitoringBaselineableMetricsEvaluateItemsToHclTerraform(struct?: DataOciStackMonitoringBaselineableMetricsEvaluateItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    evaluation_data_points: {
      value: cdktf.listMapperHcl(dataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsToHclTerraform, true)(struct!.evaluationDataPoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList",
    },
    training_data_points: {
      value: cdktf.listMapperHcl(dataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsToHclTerraform, true)(struct!.trainingDataPoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringBaselineableMetricsEvaluateItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._evaluationDataPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationDataPoints = this._evaluationDataPoints?.internalValue;
    }
    if (this._trainingDataPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingDataPoints = this._trainingDataPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringBaselineableMetricsEvaluateItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._evaluationDataPoints.internalValue = undefined;
      this._trainingDataPoints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._evaluationDataPoints.internalValue = value.evaluationDataPoints;
      this._trainingDataPoints.internalValue = value.trainingDataPoints;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // evaluation_data_points - computed: false, optional: false, required: true
  private _evaluationDataPoints = new DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList(this, "evaluation_data_points", false);
  public get evaluationDataPoints() {
    return this._evaluationDataPoints;
  }
  public putEvaluationDataPoints(value: DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints[] | cdktf.IResolvable) {
    this._evaluationDataPoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationDataPointsInput() {
    return this._evaluationDataPoints.internalValue;
  }

  // training_data_points - computed: false, optional: false, required: true
  private _trainingDataPoints = new DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList(this, "training_data_points", false);
  public get trainingDataPoints() {
    return this._trainingDataPoints;
  }
  public putTrainingDataPoints(value: DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints[] | cdktf.IResolvable) {
    this._trainingDataPoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingDataPointsInput() {
    return this._trainingDataPoints.internalValue;
  }
}

export class DataOciStackMonitoringBaselineableMetricsEvaluateItemsList extends cdktf.ComplexList {
  public internalValue? : DataOciStackMonitoringBaselineableMetricsEvaluateItems[] | cdktf.IResolvable

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
  public get(index: number): DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference {
    return new DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate oci_stack_monitoring_baselineable_metrics_evaluate}
*/
export class DataOciStackMonitoringBaselineableMetricsEvaluate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_baselineable_metrics_evaluate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetricsEvaluate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringBaselineableMetricsEvaluate to import
  * @param importFromId The id of the existing DataOciStackMonitoringBaselineableMetricsEvaluate that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringBaselineableMetricsEvaluate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_baselineable_metrics_evaluate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate oci_stack_monitoring_baselineable_metrics_evaluate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringBaselineableMetricsEvaluateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringBaselineableMetricsEvaluateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_baselineable_metrics_evaluate',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baselineableMetricId = config.baselineableMetricId;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._items.internalValue = config.items;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baselineable_metric_id - computed: false, optional: false, required: true
  private _baselineableMetricId?: string; 
  public get baselineableMetricId() {
    return this.getStringAttribute('baselineable_metric_id');
  }
  public set baselineableMetricId(value: string) {
    this._baselineableMetricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineableMetricIdInput() {
    return this._baselineableMetricId;
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // items - computed: false, optional: false, required: true
  private _items = new DataOciStackMonitoringBaselineableMetricsEvaluateItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataOciStackMonitoringBaselineableMetricsEvaluateItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baselineable_metric_id: cdktf.stringToTerraform(this._baselineableMetricId),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      items: cdktf.listMapper(dataOciStackMonitoringBaselineableMetricsEvaluateItemsToTerraform, true)(this._items.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baselineable_metric_id: {
        value: cdktf.stringToHclTerraform(this._baselineableMetricId),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      items: {
        value: cdktf.listMapperHcl(dataOciStackMonitoringBaselineableMetricsEvaluateItemsToHclTerraform, true)(this._items.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOciStackMonitoringBaselineableMetricsEvaluateItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
