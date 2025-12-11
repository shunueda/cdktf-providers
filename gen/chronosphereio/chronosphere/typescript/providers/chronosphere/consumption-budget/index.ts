// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#consumption_config_id ConsumptionBudget#consumption_config_id}
  */
  readonly consumptionConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#default_priority ConsumptionBudget#default_priority}
  */
  readonly defaultPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#id ConsumptionBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#name ConsumptionBudget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#notification_policy_id ConsumptionBudget#notification_policy_id}
  */
  readonly notificationPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#partition_slug_path ConsumptionBudget#partition_slug_path}
  */
  readonly partitionSlugPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#resource ConsumptionBudget#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#slug ConsumptionBudget#slug}
  */
  readonly slug?: string;
  /**
  * alert_action_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#alert_action_config ConsumptionBudget#alert_action_config}
  */
  readonly alertActionConfig?: ConsumptionBudgetAlertActionConfig;
  /**
  * priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#priority ConsumptionBudget#priority}
  */
  readonly priority?: ConsumptionBudgetPriority[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#threshold ConsumptionBudget#threshold}
  */
  readonly threshold?: ConsumptionBudgetThreshold[] | cdktf.IResolvable;
}
export interface ConsumptionBudgetAlertActionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#annotations ConsumptionBudget#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#instant_rate_sustain_secs ConsumptionBudget#instant_rate_sustain_secs}
  */
  readonly instantRateSustainSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#labels ConsumptionBudget#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function consumptionBudgetAlertActionConfigToTerraform(struct?: ConsumptionBudgetAlertActionConfigOutputReference | ConsumptionBudgetAlertActionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    instant_rate_sustain_secs: cdktf.numberToTerraform(struct!.instantRateSustainSecs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function consumptionBudgetAlertActionConfigToHclTerraform(struct?: ConsumptionBudgetAlertActionConfigOutputReference | ConsumptionBudgetAlertActionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instant_rate_sustain_secs: {
      value: cdktf.numberToHclTerraform(struct!.instantRateSustainSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetAlertActionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsumptionBudgetAlertActionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._instantRateSustainSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantRateSustainSecs = this._instantRateSustainSecs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetAlertActionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._instantRateSustainSecs = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._instantRateSustainSecs = value.instantRateSustainSecs;
      this._labels = value.labels;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // instant_rate_sustain_secs - computed: false, optional: true, required: false
  private _instantRateSustainSecs?: number; 
  public get instantRateSustainSecs() {
    return this.getNumberAttribute('instant_rate_sustain_secs');
  }
  public set instantRateSustainSecs(value: number) {
    this._instantRateSustainSecs = value;
  }
  public resetInstantRateSustainSecs() {
    this._instantRateSustainSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantRateSustainSecsInput() {
    return this._instantRateSustainSecs;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface ConsumptionBudgetPriorityFilterLogFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#query ConsumptionBudget#query}
  */
  readonly query: string;
}

export function consumptionBudgetPriorityFilterLogFilterToTerraform(struct?: ConsumptionBudgetPriorityFilterLogFilterOutputReference | ConsumptionBudgetPriorityFilterLogFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function consumptionBudgetPriorityFilterLogFilterToHclTerraform(struct?: ConsumptionBudgetPriorityFilterLogFilterOutputReference | ConsumptionBudgetPriorityFilterLogFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetPriorityFilterLogFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsumptionBudgetPriorityFilterLogFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetPriorityFilterLogFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface ConsumptionBudgetPriorityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#dataset_id ConsumptionBudget#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * log_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#log_filter ConsumptionBudget#log_filter}
  */
  readonly logFilter?: ConsumptionBudgetPriorityFilterLogFilter;
}

export function consumptionBudgetPriorityFilterToTerraform(struct?: ConsumptionBudgetPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    log_filter: consumptionBudgetPriorityFilterLogFilterToTerraform(struct!.logFilter),
  }
}


export function consumptionBudgetPriorityFilterToHclTerraform(struct?: ConsumptionBudgetPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_filter: {
      value: consumptionBudgetPriorityFilterLogFilterToHclTerraform(struct!.logFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionBudgetPriorityFilterLogFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetPriorityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsumptionBudgetPriorityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._logFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFilter = this._logFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetPriorityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._logFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._logFilter.internalValue = value.logFilter;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // log_filter - computed: false, optional: true, required: false
  private _logFilter = new ConsumptionBudgetPriorityFilterLogFilterOutputReference(this, "log_filter");
  public get logFilter() {
    return this._logFilter;
  }
  public putLogFilter(value: ConsumptionBudgetPriorityFilterLogFilter) {
    this._logFilter.internalValue = value;
  }
  public resetLogFilter() {
    this._logFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterInput() {
    return this._logFilter.internalValue;
  }
}

export class ConsumptionBudgetPriorityFilterList extends cdktf.ComplexList {
  public internalValue? : ConsumptionBudgetPriorityFilter[] | cdktf.IResolvable

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
  public get(index: number): ConsumptionBudgetPriorityFilterOutputReference {
    return new ConsumptionBudgetPriorityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsumptionBudgetPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#priority ConsumptionBudget#priority}
  */
  readonly priority?: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#filter ConsumptionBudget#filter}
  */
  readonly filter?: ConsumptionBudgetPriorityFilter[] | cdktf.IResolvable;
}

export function consumptionBudgetPriorityToTerraform(struct?: ConsumptionBudgetPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    filter: cdktf.listMapper(consumptionBudgetPriorityFilterToTerraform, true)(struct!.filter),
  }
}


export function consumptionBudgetPriorityToHclTerraform(struct?: ConsumptionBudgetPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.listMapperHcl(consumptionBudgetPriorityFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionBudgetPriorityFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetPriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsumptionBudgetPriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetPriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._filter.internalValue = value.filter;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ConsumptionBudgetPriorityFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ConsumptionBudgetPriorityFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class ConsumptionBudgetPriorityList extends cdktf.ComplexList {
  public internalValue? : ConsumptionBudgetPriority[] | cdktf.IResolvable

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
  public get(index: number): ConsumptionBudgetPriorityOutputReference {
    return new ConsumptionBudgetPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsumptionBudgetThresholdInstantRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#fixed_value_per_sec ConsumptionBudget#fixed_value_per_sec}
  */
  readonly fixedValuePerSec?: number;
}

export function consumptionBudgetThresholdInstantRateToTerraform(struct?: ConsumptionBudgetThresholdInstantRateOutputReference | ConsumptionBudgetThresholdInstantRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value_per_sec: cdktf.numberToTerraform(struct!.fixedValuePerSec),
  }
}


export function consumptionBudgetThresholdInstantRateToHclTerraform(struct?: ConsumptionBudgetThresholdInstantRateOutputReference | ConsumptionBudgetThresholdInstantRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.fixedValuePerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetThresholdInstantRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsumptionBudgetThresholdInstantRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValuePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValuePerSec = this._fixedValuePerSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetThresholdInstantRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValuePerSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValuePerSec = value.fixedValuePerSec;
    }
  }

  // fixed_value_per_sec - computed: false, optional: true, required: false
  private _fixedValuePerSec?: number; 
  public get fixedValuePerSec() {
    return this.getNumberAttribute('fixed_value_per_sec');
  }
  public set fixedValuePerSec(value: number) {
    this._fixedValuePerSec = value;
  }
  public resetFixedValuePerSec() {
    this._fixedValuePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValuePerSecInput() {
    return this._fixedValuePerSec;
  }
}
export interface ConsumptionBudgetThresholdVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#fixed_value ConsumptionBudget#fixed_value}
  */
  readonly fixedValue?: number;
}

export function consumptionBudgetThresholdVolumeToTerraform(struct?: ConsumptionBudgetThresholdVolumeOutputReference | ConsumptionBudgetThresholdVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
  }
}


export function consumptionBudgetThresholdVolumeToHclTerraform(struct?: ConsumptionBudgetThresholdVolumeOutputReference | ConsumptionBudgetThresholdVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetThresholdVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsumptionBudgetThresholdVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetThresholdVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }
}
export interface ConsumptionBudgetThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#action ConsumptionBudget#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#type ConsumptionBudget#type}
  */
  readonly type?: string;
  /**
  * instant_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#instant_rate ConsumptionBudget#instant_rate}
  */
  readonly instantRate?: ConsumptionBudgetThresholdInstantRate;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#volume ConsumptionBudget#volume}
  */
  readonly volume?: ConsumptionBudgetThresholdVolume;
}

export function consumptionBudgetThresholdToTerraform(struct?: ConsumptionBudgetThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    type: cdktf.stringToTerraform(struct!.type),
    instant_rate: consumptionBudgetThresholdInstantRateToTerraform(struct!.instantRate),
    volume: consumptionBudgetThresholdVolumeToTerraform(struct!.volume),
  }
}


export function consumptionBudgetThresholdToHclTerraform(struct?: ConsumptionBudgetThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instant_rate: {
      value: consumptionBudgetThresholdInstantRateToHclTerraform(struct!.instantRate),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionBudgetThresholdInstantRateList",
    },
    volume: {
      value: consumptionBudgetThresholdVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionBudgetThresholdVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionBudgetThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsumptionBudgetThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._instantRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantRate = this._instantRate?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionBudgetThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._type = undefined;
      this._instantRate.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._type = value.type;
      this._instantRate.internalValue = value.instantRate;
      this._volume.internalValue = value.volume;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // instant_rate - computed: false, optional: true, required: false
  private _instantRate = new ConsumptionBudgetThresholdInstantRateOutputReference(this, "instant_rate");
  public get instantRate() {
    return this._instantRate;
  }
  public putInstantRate(value: ConsumptionBudgetThresholdInstantRate) {
    this._instantRate.internalValue = value;
  }
  public resetInstantRate() {
    this._instantRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantRateInput() {
    return this._instantRate.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ConsumptionBudgetThresholdVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ConsumptionBudgetThresholdVolume) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class ConsumptionBudgetThresholdList extends cdktf.ComplexList {
  public internalValue? : ConsumptionBudgetThreshold[] | cdktf.IResolvable

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
  public get(index: number): ConsumptionBudgetThresholdOutputReference {
    return new ConsumptionBudgetThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget chronosphere_consumption_budget}
*/
export class ConsumptionBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_consumption_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsumptionBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsumptionBudget to import
  * @param importFromId The id of the existing ConsumptionBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsumptionBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_consumption_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_budget chronosphere_consumption_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumptionBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumptionBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_consumption_budget',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumptionConfigId = config.consumptionConfigId;
    this._defaultPriority = config.defaultPriority;
    this._id = config.id;
    this._name = config.name;
    this._notificationPolicyId = config.notificationPolicyId;
    this._partitionSlugPath = config.partitionSlugPath;
    this._resource = config.resource;
    this._slug = config.slug;
    this._alertActionConfig.internalValue = config.alertActionConfig;
    this._priority.internalValue = config.priority;
    this._threshold.internalValue = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumption_config_id - computed: false, optional: false, required: true
  private _consumptionConfigId?: string; 
  public get consumptionConfigId() {
    return this.getStringAttribute('consumption_config_id');
  }
  public set consumptionConfigId(value: string) {
    this._consumptionConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionConfigIdInput() {
    return this._consumptionConfigId;
  }

  // default_priority - computed: false, optional: true, required: false
  private _defaultPriority?: number; 
  public get defaultPriority() {
    return this.getNumberAttribute('default_priority');
  }
  public set defaultPriority(value: number) {
    this._defaultPriority = value;
  }
  public resetDefaultPriority() {
    this._defaultPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPriorityInput() {
    return this._defaultPriority;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification_policy_id - computed: false, optional: true, required: false
  private _notificationPolicyId?: string; 
  public get notificationPolicyId() {
    return this.getStringAttribute('notification_policy_id');
  }
  public set notificationPolicyId(value: string) {
    this._notificationPolicyId = value;
  }
  public resetNotificationPolicyId() {
    this._notificationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPolicyIdInput() {
    return this._notificationPolicyId;
  }

  // partition_slug_path - computed: false, optional: true, required: false
  private _partitionSlugPath?: string; 
  public get partitionSlugPath() {
    return this.getStringAttribute('partition_slug_path');
  }
  public set partitionSlugPath(value: string) {
    this._partitionSlugPath = value;
  }
  public resetPartitionSlugPath() {
    this._partitionSlugPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSlugPathInput() {
    return this._partitionSlugPath;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // alert_action_config - computed: false, optional: true, required: false
  private _alertActionConfig = new ConsumptionBudgetAlertActionConfigOutputReference(this, "alert_action_config");
  public get alertActionConfig() {
    return this._alertActionConfig;
  }
  public putAlertActionConfig(value: ConsumptionBudgetAlertActionConfig) {
    this._alertActionConfig.internalValue = value;
  }
  public resetAlertActionConfig() {
    this._alertActionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertActionConfigInput() {
    return this._alertActionConfig.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority = new ConsumptionBudgetPriorityList(this, "priority", false);
  public get priority() {
    return this._priority;
  }
  public putPriority(value: ConsumptionBudgetPriority[] | cdktf.IResolvable) {
    this._priority.internalValue = value;
  }
  public resetPriority() {
    this._priority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new ConsumptionBudgetThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: ConsumptionBudgetThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumption_config_id: cdktf.stringToTerraform(this._consumptionConfigId),
      default_priority: cdktf.numberToTerraform(this._defaultPriority),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_policy_id: cdktf.stringToTerraform(this._notificationPolicyId),
      partition_slug_path: cdktf.stringToTerraform(this._partitionSlugPath),
      resource: cdktf.stringToTerraform(this._resource),
      slug: cdktf.stringToTerraform(this._slug),
      alert_action_config: consumptionBudgetAlertActionConfigToTerraform(this._alertActionConfig.internalValue),
      priority: cdktf.listMapper(consumptionBudgetPriorityToTerraform, true)(this._priority.internalValue),
      threshold: cdktf.listMapper(consumptionBudgetThresholdToTerraform, true)(this._threshold.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumption_config_id: {
        value: cdktf.stringToHclTerraform(this._consumptionConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_priority: {
        value: cdktf.numberToHclTerraform(this._defaultPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_policy_id: {
        value: cdktf.stringToHclTerraform(this._notificationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_slug_path: {
        value: cdktf.stringToHclTerraform(this._partitionSlugPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_action_config: {
        value: consumptionBudgetAlertActionConfigToHclTerraform(this._alertActionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConsumptionBudgetAlertActionConfigList",
      },
      priority: {
        value: cdktf.listMapperHcl(consumptionBudgetPriorityToHclTerraform, true)(this._priority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConsumptionBudgetPriorityList",
      },
      threshold: {
        value: cdktf.listMapperHcl(consumptionBudgetThresholdToHclTerraform, true)(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConsumptionBudgetThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
