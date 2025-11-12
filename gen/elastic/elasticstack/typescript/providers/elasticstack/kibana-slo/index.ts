// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSloConfig extends cdktf.TerraformMetaArguments {
  /**
  * An `occurrences` budgeting method uses the number of good and total events during the time window. A `timeslices` budgeting method uses the number of good slices and total slices during the time window. A slice is an arbitrary time window (smaller than the overall SLO time window) that is either considered good or bad, calculated from the timeslice threshold and the ratio of good over total events that happened during the slice window. A budgeting method is required and must be either occurrences or timeslices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#budgeting_method KibanaSlo#budgeting_method}
  */
  readonly budgetingMethod: string;
  /**
  * A description for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#description KibanaSlo#description}
  */
  readonly description: string;
  /**
  * Optional group by fields to use to generate an SLO per distinct value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#group_by KibanaSlo#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#id KibanaSlo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#name KibanaSlo#name}
  */
  readonly name: string;
  /**
  * An ID (8 to 48 characters) that contains only letters, numbers, hyphens, and underscores. If omitted, a UUIDv1 will be generated server-side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#slo_id KibanaSlo#slo_id}
  */
  readonly sloId?: string;
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#space_id KibanaSlo#space_id}
  */
  readonly spaceId?: string;
  /**
  * The tags for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#tags KibanaSlo#tags}
  */
  readonly tags?: string[];
  /**
  * apm_availability_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#apm_availability_indicator KibanaSlo#apm_availability_indicator}
  */
  readonly apmAvailabilityIndicator?: KibanaSloApmAvailabilityIndicator;
  /**
  * apm_latency_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#apm_latency_indicator KibanaSlo#apm_latency_indicator}
  */
  readonly apmLatencyIndicator?: KibanaSloApmLatencyIndicator;
  /**
  * histogram_custom_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#histogram_custom_indicator KibanaSlo#histogram_custom_indicator}
  */
  readonly histogramCustomIndicator?: KibanaSloHistogramCustomIndicator;
  /**
  * kql_custom_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#kql_custom_indicator KibanaSlo#kql_custom_indicator}
  */
  readonly kqlCustomIndicator?: KibanaSloKqlCustomIndicator;
  /**
  * metric_custom_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#metric_custom_indicator KibanaSlo#metric_custom_indicator}
  */
  readonly metricCustomIndicator?: KibanaSloMetricCustomIndicator;
  /**
  * objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#objective KibanaSlo#objective}
  */
  readonly objective: KibanaSloObjective;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#settings KibanaSlo#settings}
  */
  readonly settings?: KibanaSloSettings;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#time_window KibanaSlo#time_window}
  */
  readonly timeWindow: KibanaSloTimeWindow;
  /**
  * timeslice_metric_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#timeslice_metric_indicator KibanaSlo#timeslice_metric_indicator}
  */
  readonly timesliceMetricIndicator?: KibanaSloTimesliceMetricIndicator;
}
export interface KibanaSloApmAvailabilityIndicator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#environment KibanaSlo#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#index KibanaSlo#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#service KibanaSlo#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#transaction_name KibanaSlo#transaction_name}
  */
  readonly transactionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#transaction_type KibanaSlo#transaction_type}
  */
  readonly transactionType: string;
}

export function kibanaSloApmAvailabilityIndicatorToTerraform(struct?: KibanaSloApmAvailabilityIndicatorOutputReference | KibanaSloApmAvailabilityIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    filter: cdktf.stringToTerraform(struct!.filter),
    index: cdktf.stringToTerraform(struct!.index),
    service: cdktf.stringToTerraform(struct!.service),
    transaction_name: cdktf.stringToTerraform(struct!.transactionName),
    transaction_type: cdktf.stringToTerraform(struct!.transactionType),
  }
}


export function kibanaSloApmAvailabilityIndicatorToHclTerraform(struct?: KibanaSloApmAvailabilityIndicatorOutputReference | KibanaSloApmAvailabilityIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_name: {
      value: cdktf.stringToHclTerraform(struct!.transactionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_type: {
      value: cdktf.stringToHclTerraform(struct!.transactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloApmAvailabilityIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloApmAvailabilityIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._transactionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionName = this._transactionName;
    }
    if (this._transactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionType = this._transactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloApmAvailabilityIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environment = undefined;
      this._filter = undefined;
      this._index = undefined;
      this._service = undefined;
      this._transactionName = undefined;
      this._transactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environment = value.environment;
      this._filter = value.filter;
      this._index = value.index;
      this._service = value.service;
      this._transactionName = value.transactionName;
      this._transactionType = value.transactionType;
    }
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // transaction_name - computed: false, optional: false, required: true
  private _transactionName?: string; 
  public get transactionName() {
    return this.getStringAttribute('transaction_name');
  }
  public set transactionName(value: string) {
    this._transactionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionNameInput() {
    return this._transactionName;
  }

  // transaction_type - computed: false, optional: false, required: true
  private _transactionType?: string; 
  public get transactionType() {
    return this.getStringAttribute('transaction_type');
  }
  public set transactionType(value: string) {
    this._transactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionTypeInput() {
    return this._transactionType;
  }
}
export interface KibanaSloApmLatencyIndicator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#environment KibanaSlo#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#index KibanaSlo#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#service KibanaSlo#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#threshold KibanaSlo#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#transaction_name KibanaSlo#transaction_name}
  */
  readonly transactionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#transaction_type KibanaSlo#transaction_type}
  */
  readonly transactionType: string;
}

export function kibanaSloApmLatencyIndicatorToTerraform(struct?: KibanaSloApmLatencyIndicatorOutputReference | KibanaSloApmLatencyIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    filter: cdktf.stringToTerraform(struct!.filter),
    index: cdktf.stringToTerraform(struct!.index),
    service: cdktf.stringToTerraform(struct!.service),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    transaction_name: cdktf.stringToTerraform(struct!.transactionName),
    transaction_type: cdktf.stringToTerraform(struct!.transactionType),
  }
}


export function kibanaSloApmLatencyIndicatorToHclTerraform(struct?: KibanaSloApmLatencyIndicatorOutputReference | KibanaSloApmLatencyIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_name: {
      value: cdktf.stringToHclTerraform(struct!.transactionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_type: {
      value: cdktf.stringToHclTerraform(struct!.transactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloApmLatencyIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloApmLatencyIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._transactionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionName = this._transactionName;
    }
    if (this._transactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionType = this._transactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloApmLatencyIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environment = undefined;
      this._filter = undefined;
      this._index = undefined;
      this._service = undefined;
      this._threshold = undefined;
      this._transactionName = undefined;
      this._transactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environment = value.environment;
      this._filter = value.filter;
      this._index = value.index;
      this._service = value.service;
      this._threshold = value.threshold;
      this._transactionName = value.transactionName;
      this._transactionType = value.transactionType;
    }
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // transaction_name - computed: false, optional: false, required: true
  private _transactionName?: string; 
  public get transactionName() {
    return this.getStringAttribute('transaction_name');
  }
  public set transactionName(value: string) {
    this._transactionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionNameInput() {
    return this._transactionName;
  }

  // transaction_type - computed: false, optional: false, required: true
  private _transactionType?: string; 
  public get transactionType() {
    return this.getStringAttribute('transaction_type');
  }
  public set transactionType(value: string) {
    this._transactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionTypeInput() {
    return this._transactionType;
  }
}
export interface KibanaSloHistogramCustomIndicatorGood {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#aggregation KibanaSlo#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#field KibanaSlo#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#from KibanaSlo#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#to KibanaSlo#to}
  */
  readonly to?: number;
}

export function kibanaSloHistogramCustomIndicatorGoodToTerraform(struct?: KibanaSloHistogramCustomIndicatorGoodOutputReference | KibanaSloHistogramCustomIndicatorGood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    field: cdktf.stringToTerraform(struct!.field),
    filter: cdktf.stringToTerraform(struct!.filter),
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function kibanaSloHistogramCustomIndicatorGoodToHclTerraform(struct?: KibanaSloHistogramCustomIndicatorGoodOutputReference | KibanaSloHistogramCustomIndicatorGood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloHistogramCustomIndicatorGoodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloHistogramCustomIndicatorGood | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloHistogramCustomIndicatorGood | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._field = undefined;
      this._filter = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._field = value.field;
      this._filter = value.filter;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface KibanaSloHistogramCustomIndicatorTotal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#aggregation KibanaSlo#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#field KibanaSlo#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#from KibanaSlo#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#to KibanaSlo#to}
  */
  readonly to?: number;
}

export function kibanaSloHistogramCustomIndicatorTotalToTerraform(struct?: KibanaSloHistogramCustomIndicatorTotalOutputReference | KibanaSloHistogramCustomIndicatorTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    field: cdktf.stringToTerraform(struct!.field),
    filter: cdktf.stringToTerraform(struct!.filter),
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function kibanaSloHistogramCustomIndicatorTotalToHclTerraform(struct?: KibanaSloHistogramCustomIndicatorTotalOutputReference | KibanaSloHistogramCustomIndicatorTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloHistogramCustomIndicatorTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloHistogramCustomIndicatorTotal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloHistogramCustomIndicatorTotal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._field = undefined;
      this._filter = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._field = value.field;
      this._filter = value.filter;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface KibanaSloHistogramCustomIndicator {
  /**
  * Optional data view id to use for this indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#data_view_id KibanaSlo#data_view_id}
  */
  readonly dataViewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#index KibanaSlo#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#timestamp_field KibanaSlo#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * good block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#good KibanaSlo#good}
  */
  readonly good: KibanaSloHistogramCustomIndicatorGood;
  /**
  * total block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#total KibanaSlo#total}
  */
  readonly total: KibanaSloHistogramCustomIndicatorTotal;
}

export function kibanaSloHistogramCustomIndicatorToTerraform(struct?: KibanaSloHistogramCustomIndicatorOutputReference | KibanaSloHistogramCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_view_id: cdktf.stringToTerraform(struct!.dataViewId),
    filter: cdktf.stringToTerraform(struct!.filter),
    index: cdktf.stringToTerraform(struct!.index),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    good: kibanaSloHistogramCustomIndicatorGoodToTerraform(struct!.good),
    total: kibanaSloHistogramCustomIndicatorTotalToTerraform(struct!.total),
  }
}


export function kibanaSloHistogramCustomIndicatorToHclTerraform(struct?: KibanaSloHistogramCustomIndicatorOutputReference | KibanaSloHistogramCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_view_id: {
      value: cdktf.stringToHclTerraform(struct!.dataViewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    good: {
      value: kibanaSloHistogramCustomIndicatorGoodToHclTerraform(struct!.good),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloHistogramCustomIndicatorGoodList",
    },
    total: {
      value: kibanaSloHistogramCustomIndicatorTotalToHclTerraform(struct!.total),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloHistogramCustomIndicatorTotalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloHistogramCustomIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloHistogramCustomIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataViewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataViewId = this._dataViewId;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._good?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.good = this._good?.internalValue;
    }
    if (this._total?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloHistogramCustomIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataViewId = undefined;
      this._filter = undefined;
      this._index = undefined;
      this._timestampField = undefined;
      this._good.internalValue = undefined;
      this._total.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataViewId = value.dataViewId;
      this._filter = value.filter;
      this._index = value.index;
      this._timestampField = value.timestampField;
      this._good.internalValue = value.good;
      this._total.internalValue = value.total;
    }
  }

  // data_view_id - computed: false, optional: true, required: false
  private _dataViewId?: string; 
  public get dataViewId() {
    return this.getStringAttribute('data_view_id');
  }
  public set dataViewId(value: string) {
    this._dataViewId = value;
  }
  public resetDataViewId() {
    this._dataViewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataViewIdInput() {
    return this._dataViewId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // timestamp_field - computed: false, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // good - computed: false, optional: false, required: true
  private _good = new KibanaSloHistogramCustomIndicatorGoodOutputReference(this, "good");
  public get good() {
    return this._good;
  }
  public putGood(value: KibanaSloHistogramCustomIndicatorGood) {
    this._good.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodInput() {
    return this._good.internalValue;
  }

  // total - computed: false, optional: false, required: true
  private _total = new KibanaSloHistogramCustomIndicatorTotalOutputReference(this, "total");
  public get total() {
    return this._total;
  }
  public putTotal(value: KibanaSloHistogramCustomIndicatorTotal) {
    this._total.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total.internalValue;
  }
}
export interface KibanaSloKqlCustomIndicator {
  /**
  * Optional data view id to use for this indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#data_view_id KibanaSlo#data_view_id}
  */
  readonly dataViewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#good KibanaSlo#good}
  */
  readonly good?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#index KibanaSlo#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#timestamp_field KibanaSlo#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#total KibanaSlo#total}
  */
  readonly total?: string;
}

export function kibanaSloKqlCustomIndicatorToTerraform(struct?: KibanaSloKqlCustomIndicatorOutputReference | KibanaSloKqlCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_view_id: cdktf.stringToTerraform(struct!.dataViewId),
    filter: cdktf.stringToTerraform(struct!.filter),
    good: cdktf.stringToTerraform(struct!.good),
    index: cdktf.stringToTerraform(struct!.index),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    total: cdktf.stringToTerraform(struct!.total),
  }
}


export function kibanaSloKqlCustomIndicatorToHclTerraform(struct?: KibanaSloKqlCustomIndicatorOutputReference | KibanaSloKqlCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_view_id: {
      value: cdktf.stringToHclTerraform(struct!.dataViewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    good: {
      value: cdktf.stringToHclTerraform(struct!.good),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.stringToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloKqlCustomIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloKqlCustomIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataViewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataViewId = this._dataViewId;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._good !== undefined) {
      hasAnyValues = true;
      internalValueResult.good = this._good;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloKqlCustomIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataViewId = undefined;
      this._filter = undefined;
      this._good = undefined;
      this._index = undefined;
      this._timestampField = undefined;
      this._total = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataViewId = value.dataViewId;
      this._filter = value.filter;
      this._good = value.good;
      this._index = value.index;
      this._timestampField = value.timestampField;
      this._total = value.total;
    }
  }

  // data_view_id - computed: false, optional: true, required: false
  private _dataViewId?: string; 
  public get dataViewId() {
    return this.getStringAttribute('data_view_id');
  }
  public set dataViewId(value: string) {
    this._dataViewId = value;
  }
  public resetDataViewId() {
    this._dataViewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataViewIdInput() {
    return this._dataViewId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // good - computed: false, optional: true, required: false
  private _good?: string; 
  public get good() {
    return this.getStringAttribute('good');
  }
  public set good(value: string) {
    this._good = value;
  }
  public resetGood() {
    this._good = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodInput() {
    return this._good;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // timestamp_field - computed: false, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // total - computed: false, optional: true, required: false
  private _total?: string; 
  public get total() {
    return this.getStringAttribute('total');
  }
  public set total(value: string) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }
}
export interface KibanaSloMetricCustomIndicatorGoodMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#aggregation KibanaSlo#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#field KibanaSlo#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#name KibanaSlo#name}
  */
  readonly name: string;
}

export function kibanaSloMetricCustomIndicatorGoodMetricsToTerraform(struct?: KibanaSloMetricCustomIndicatorGoodMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    field: cdktf.stringToTerraform(struct!.field),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kibanaSloMetricCustomIndicatorGoodMetricsToHclTerraform(struct?: KibanaSloMetricCustomIndicatorGoodMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloMetricCustomIndicatorGoodMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSloMetricCustomIndicatorGoodMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloMetricCustomIndicatorGoodMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._field = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._field = value.field;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class KibanaSloMetricCustomIndicatorGoodMetricsList extends cdktf.ComplexList {
  public internalValue? : KibanaSloMetricCustomIndicatorGoodMetrics[] | cdktf.IResolvable

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
  public get(index: number): KibanaSloMetricCustomIndicatorGoodMetricsOutputReference {
    return new KibanaSloMetricCustomIndicatorGoodMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSloMetricCustomIndicatorGood {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#equation KibanaSlo#equation}
  */
  readonly equation: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#metrics KibanaSlo#metrics}
  */
  readonly metrics: KibanaSloMetricCustomIndicatorGoodMetrics[] | cdktf.IResolvable;
}

export function kibanaSloMetricCustomIndicatorGoodToTerraform(struct?: KibanaSloMetricCustomIndicatorGoodOutputReference | KibanaSloMetricCustomIndicatorGood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equation: cdktf.stringToTerraform(struct!.equation),
    metrics: cdktf.listMapper(kibanaSloMetricCustomIndicatorGoodMetricsToTerraform, true)(struct!.metrics),
  }
}


export function kibanaSloMetricCustomIndicatorGoodToHclTerraform(struct?: KibanaSloMetricCustomIndicatorGoodOutputReference | KibanaSloMetricCustomIndicatorGood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equation: {
      value: cdktf.stringToHclTerraform(struct!.equation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktf.listMapperHcl(kibanaSloMetricCustomIndicatorGoodMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloMetricCustomIndicatorGoodMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloMetricCustomIndicatorGoodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloMetricCustomIndicatorGood | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equation !== undefined) {
      hasAnyValues = true;
      internalValueResult.equation = this._equation;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloMetricCustomIndicatorGood | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._equation = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._equation = value.equation;
      this._metrics.internalValue = value.metrics;
    }
  }

  // equation - computed: false, optional: false, required: true
  private _equation?: string; 
  public get equation() {
    return this.getStringAttribute('equation');
  }
  public set equation(value: string) {
    this._equation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get equationInput() {
    return this._equation;
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new KibanaSloMetricCustomIndicatorGoodMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: KibanaSloMetricCustomIndicatorGoodMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface KibanaSloMetricCustomIndicatorTotalMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#aggregation KibanaSlo#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#field KibanaSlo#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#name KibanaSlo#name}
  */
  readonly name: string;
}

export function kibanaSloMetricCustomIndicatorTotalMetricsToTerraform(struct?: KibanaSloMetricCustomIndicatorTotalMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    field: cdktf.stringToTerraform(struct!.field),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kibanaSloMetricCustomIndicatorTotalMetricsToHclTerraform(struct?: KibanaSloMetricCustomIndicatorTotalMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloMetricCustomIndicatorTotalMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSloMetricCustomIndicatorTotalMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloMetricCustomIndicatorTotalMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._field = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._field = value.field;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class KibanaSloMetricCustomIndicatorTotalMetricsList extends cdktf.ComplexList {
  public internalValue? : KibanaSloMetricCustomIndicatorTotalMetrics[] | cdktf.IResolvable

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
  public get(index: number): KibanaSloMetricCustomIndicatorTotalMetricsOutputReference {
    return new KibanaSloMetricCustomIndicatorTotalMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSloMetricCustomIndicatorTotal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#equation KibanaSlo#equation}
  */
  readonly equation: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#metrics KibanaSlo#metrics}
  */
  readonly metrics: KibanaSloMetricCustomIndicatorTotalMetrics[] | cdktf.IResolvable;
}

export function kibanaSloMetricCustomIndicatorTotalToTerraform(struct?: KibanaSloMetricCustomIndicatorTotalOutputReference | KibanaSloMetricCustomIndicatorTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equation: cdktf.stringToTerraform(struct!.equation),
    metrics: cdktf.listMapper(kibanaSloMetricCustomIndicatorTotalMetricsToTerraform, true)(struct!.metrics),
  }
}


export function kibanaSloMetricCustomIndicatorTotalToHclTerraform(struct?: KibanaSloMetricCustomIndicatorTotalOutputReference | KibanaSloMetricCustomIndicatorTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equation: {
      value: cdktf.stringToHclTerraform(struct!.equation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktf.listMapperHcl(kibanaSloMetricCustomIndicatorTotalMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloMetricCustomIndicatorTotalMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloMetricCustomIndicatorTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloMetricCustomIndicatorTotal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equation !== undefined) {
      hasAnyValues = true;
      internalValueResult.equation = this._equation;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloMetricCustomIndicatorTotal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._equation = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._equation = value.equation;
      this._metrics.internalValue = value.metrics;
    }
  }

  // equation - computed: false, optional: false, required: true
  private _equation?: string; 
  public get equation() {
    return this.getStringAttribute('equation');
  }
  public set equation(value: string) {
    this._equation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get equationInput() {
    return this._equation;
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new KibanaSloMetricCustomIndicatorTotalMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: KibanaSloMetricCustomIndicatorTotalMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface KibanaSloMetricCustomIndicator {
  /**
  * Optional data view id to use for this indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#data_view_id KibanaSlo#data_view_id}
  */
  readonly dataViewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#index KibanaSlo#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#timestamp_field KibanaSlo#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * good block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#good KibanaSlo#good}
  */
  readonly good: KibanaSloMetricCustomIndicatorGood;
  /**
  * total block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#total KibanaSlo#total}
  */
  readonly total: KibanaSloMetricCustomIndicatorTotal;
}

export function kibanaSloMetricCustomIndicatorToTerraform(struct?: KibanaSloMetricCustomIndicatorOutputReference | KibanaSloMetricCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_view_id: cdktf.stringToTerraform(struct!.dataViewId),
    filter: cdktf.stringToTerraform(struct!.filter),
    index: cdktf.stringToTerraform(struct!.index),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    good: kibanaSloMetricCustomIndicatorGoodToTerraform(struct!.good),
    total: kibanaSloMetricCustomIndicatorTotalToTerraform(struct!.total),
  }
}


export function kibanaSloMetricCustomIndicatorToHclTerraform(struct?: KibanaSloMetricCustomIndicatorOutputReference | KibanaSloMetricCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_view_id: {
      value: cdktf.stringToHclTerraform(struct!.dataViewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    good: {
      value: kibanaSloMetricCustomIndicatorGoodToHclTerraform(struct!.good),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloMetricCustomIndicatorGoodList",
    },
    total: {
      value: kibanaSloMetricCustomIndicatorTotalToHclTerraform(struct!.total),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloMetricCustomIndicatorTotalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloMetricCustomIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloMetricCustomIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataViewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataViewId = this._dataViewId;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._good?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.good = this._good?.internalValue;
    }
    if (this._total?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloMetricCustomIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataViewId = undefined;
      this._filter = undefined;
      this._index = undefined;
      this._timestampField = undefined;
      this._good.internalValue = undefined;
      this._total.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataViewId = value.dataViewId;
      this._filter = value.filter;
      this._index = value.index;
      this._timestampField = value.timestampField;
      this._good.internalValue = value.good;
      this._total.internalValue = value.total;
    }
  }

  // data_view_id - computed: false, optional: true, required: false
  private _dataViewId?: string; 
  public get dataViewId() {
    return this.getStringAttribute('data_view_id');
  }
  public set dataViewId(value: string) {
    this._dataViewId = value;
  }
  public resetDataViewId() {
    this._dataViewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataViewIdInput() {
    return this._dataViewId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // timestamp_field - computed: false, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // good - computed: false, optional: false, required: true
  private _good = new KibanaSloMetricCustomIndicatorGoodOutputReference(this, "good");
  public get good() {
    return this._good;
  }
  public putGood(value: KibanaSloMetricCustomIndicatorGood) {
    this._good.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodInput() {
    return this._good.internalValue;
  }

  // total - computed: false, optional: false, required: true
  private _total = new KibanaSloMetricCustomIndicatorTotalOutputReference(this, "total");
  public get total() {
    return this._total;
  }
  public putTotal(value: KibanaSloMetricCustomIndicatorTotal) {
    this._total.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total.internalValue;
  }
}
export interface KibanaSloObjective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#target KibanaSlo#target}
  */
  readonly target: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#timeslice_target KibanaSlo#timeslice_target}
  */
  readonly timesliceTarget?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#timeslice_window KibanaSlo#timeslice_window}
  */
  readonly timesliceWindow?: string;
}

export function kibanaSloObjectiveToTerraform(struct?: KibanaSloObjectiveOutputReference | KibanaSloObjective): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.numberToTerraform(struct!.target),
    timeslice_target: cdktf.numberToTerraform(struct!.timesliceTarget),
    timeslice_window: cdktf.stringToTerraform(struct!.timesliceWindow),
  }
}


export function kibanaSloObjectiveToHclTerraform(struct?: KibanaSloObjectiveOutputReference | KibanaSloObjective): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeslice_target: {
      value: cdktf.numberToHclTerraform(struct!.timesliceTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeslice_window: {
      value: cdktf.stringToHclTerraform(struct!.timesliceWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloObjectiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloObjective | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timesliceTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.timesliceTarget = this._timesliceTarget;
    }
    if (this._timesliceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timesliceWindow = this._timesliceWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloObjective | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
      this._timesliceTarget = undefined;
      this._timesliceWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
      this._timesliceTarget = value.timesliceTarget;
      this._timesliceWindow = value.timesliceWindow;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeslice_target - computed: false, optional: true, required: false
  private _timesliceTarget?: number; 
  public get timesliceTarget() {
    return this.getNumberAttribute('timeslice_target');
  }
  public set timesliceTarget(value: number) {
    this._timesliceTarget = value;
  }
  public resetTimesliceTarget() {
    this._timesliceTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesliceTargetInput() {
    return this._timesliceTarget;
  }

  // timeslice_window - computed: false, optional: true, required: false
  private _timesliceWindow?: string; 
  public get timesliceWindow() {
    return this.getStringAttribute('timeslice_window');
  }
  public set timesliceWindow(value: string) {
    this._timesliceWindow = value;
  }
  public resetTimesliceWindow() {
    this._timesliceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesliceWindowInput() {
    return this._timesliceWindow;
  }
}
export interface KibanaSloSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#frequency KibanaSlo#frequency}
  */
  readonly frequency?: string;
  /**
  * Prevents the underlying ES transform from attempting to backfill data on start, which can sometimes be resource-intensive or time-consuming and unnecessary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#prevent_initial_backfill KibanaSlo#prevent_initial_backfill}
  */
  readonly preventInitialBackfill?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#sync_delay KibanaSlo#sync_delay}
  */
  readonly syncDelay?: string;
}

export function kibanaSloSettingsToTerraform(struct?: KibanaSloSettingsOutputReference | KibanaSloSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    prevent_initial_backfill: cdktf.booleanToTerraform(struct!.preventInitialBackfill),
    sync_delay: cdktf.stringToTerraform(struct!.syncDelay),
  }
}


export function kibanaSloSettingsToHclTerraform(struct?: KibanaSloSettingsOutputReference | KibanaSloSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevent_initial_backfill: {
      value: cdktf.booleanToHclTerraform(struct!.preventInitialBackfill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_delay: {
      value: cdktf.stringToHclTerraform(struct!.syncDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._preventInitialBackfill !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventInitialBackfill = this._preventInitialBackfill;
    }
    if (this._syncDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDelay = this._syncDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._preventInitialBackfill = undefined;
      this._syncDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._preventInitialBackfill = value.preventInitialBackfill;
      this._syncDelay = value.syncDelay;
    }
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // prevent_initial_backfill - computed: false, optional: true, required: false
  private _preventInitialBackfill?: boolean | cdktf.IResolvable; 
  public get preventInitialBackfill() {
    return this.getBooleanAttribute('prevent_initial_backfill');
  }
  public set preventInitialBackfill(value: boolean | cdktf.IResolvable) {
    this._preventInitialBackfill = value;
  }
  public resetPreventInitialBackfill() {
    this._preventInitialBackfill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventInitialBackfillInput() {
    return this._preventInitialBackfill;
  }

  // sync_delay - computed: true, optional: true, required: false
  private _syncDelay?: string; 
  public get syncDelay() {
    return this.getStringAttribute('sync_delay');
  }
  public set syncDelay(value: string) {
    this._syncDelay = value;
  }
  public resetSyncDelay() {
    this._syncDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDelayInput() {
    return this._syncDelay;
  }
}
export interface KibanaSloTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#duration KibanaSlo#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#type KibanaSlo#type}
  */
  readonly type: string;
}

export function kibanaSloTimeWindowToTerraform(struct?: KibanaSloTimeWindowOutputReference | KibanaSloTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kibanaSloTimeWindowToHclTerraform(struct?: KibanaSloTimeWindowOutputReference | KibanaSloTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._type = value.type;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface KibanaSloTimesliceMetricIndicatorMetricMetrics {
  /**
  * The aggregation type for this metric. One of: sum, avg, min, max, value_count, percentile, doc_count. Determines which other fields are required:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#aggregation KibanaSlo#aggregation}
  */
  readonly aggregation: string;
  /**
  * Field to aggregate. Required for aggregations: sum, avg, min, max, value_count, percentile. Must NOT be set for doc_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#field KibanaSlo#field}
  */
  readonly field?: string;
  /**
  * Optional KQL filter for this metric. Supported for all aggregations except doc_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * The unique name for this metric. Used as a variable in the equation field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#name KibanaSlo#name}
  */
  readonly name: string;
  /**
  * Percentile value (e.g., 99). Required if aggregation is 'percentile'. Must NOT be set for other aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#percentile KibanaSlo#percentile}
  */
  readonly percentile?: number;
}

export function kibanaSloTimesliceMetricIndicatorMetricMetricsToTerraform(struct?: KibanaSloTimesliceMetricIndicatorMetricMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    field: cdktf.stringToTerraform(struct!.field),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    percentile: cdktf.numberToTerraform(struct!.percentile),
  }
}


export function kibanaSloTimesliceMetricIndicatorMetricMetricsToHclTerraform(struct?: KibanaSloTimesliceMetricIndicatorMetricMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloTimesliceMetricIndicatorMetricMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSloTimesliceMetricIndicatorMetricMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloTimesliceMetricIndicatorMetricMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._field = undefined;
      this._filter = undefined;
      this._name = undefined;
      this._percentile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._field = value.field;
      this._filter = value.filter;
      this._name = value.name;
      this._percentile = value.percentile;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }
}

export class KibanaSloTimesliceMetricIndicatorMetricMetricsList extends cdktf.ComplexList {
  public internalValue? : KibanaSloTimesliceMetricIndicatorMetricMetrics[] | cdktf.IResolvable

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
  public get(index: number): KibanaSloTimesliceMetricIndicatorMetricMetricsOutputReference {
    return new KibanaSloTimesliceMetricIndicatorMetricMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSloTimesliceMetricIndicatorMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#comparator KibanaSlo#comparator}
  */
  readonly comparator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#equation KibanaSlo#equation}
  */
  readonly equation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#threshold KibanaSlo#threshold}
  */
  readonly threshold: number;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#metrics KibanaSlo#metrics}
  */
  readonly metrics: KibanaSloTimesliceMetricIndicatorMetricMetrics[] | cdktf.IResolvable;
}

export function kibanaSloTimesliceMetricIndicatorMetricToTerraform(struct?: KibanaSloTimesliceMetricIndicatorMetricOutputReference | KibanaSloTimesliceMetricIndicatorMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    equation: cdktf.stringToTerraform(struct!.equation),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    metrics: cdktf.listMapper(kibanaSloTimesliceMetricIndicatorMetricMetricsToTerraform, true)(struct!.metrics),
  }
}


export function kibanaSloTimesliceMetricIndicatorMetricToHclTerraform(struct?: KibanaSloTimesliceMetricIndicatorMetricOutputReference | KibanaSloTimesliceMetricIndicatorMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equation: {
      value: cdktf.stringToHclTerraform(struct!.equation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(kibanaSloTimesliceMetricIndicatorMetricMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloTimesliceMetricIndicatorMetricMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloTimesliceMetricIndicatorMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloTimesliceMetricIndicatorMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._equation !== undefined) {
      hasAnyValues = true;
      internalValueResult.equation = this._equation;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloTimesliceMetricIndicatorMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._equation = undefined;
      this._threshold = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._equation = value.equation;
      this._threshold = value.threshold;
      this._metrics.internalValue = value.metrics;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // equation - computed: false, optional: false, required: true
  private _equation?: string; 
  public get equation() {
    return this.getStringAttribute('equation');
  }
  public set equation(value: string) {
    this._equation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get equationInput() {
    return this._equation;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new KibanaSloTimesliceMetricIndicatorMetricMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: KibanaSloTimesliceMetricIndicatorMetricMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface KibanaSloTimesliceMetricIndicator {
  /**
  * Optional data view id to use for this indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#data_view_id KibanaSlo#data_view_id}
  */
  readonly dataViewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#filter KibanaSlo#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#index KibanaSlo#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#timestamp_field KibanaSlo#timestamp_field}
  */
  readonly timestampField: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#metric KibanaSlo#metric}
  */
  readonly metric: KibanaSloTimesliceMetricIndicatorMetric;
}

export function kibanaSloTimesliceMetricIndicatorToTerraform(struct?: KibanaSloTimesliceMetricIndicatorOutputReference | KibanaSloTimesliceMetricIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_view_id: cdktf.stringToTerraform(struct!.dataViewId),
    filter: cdktf.stringToTerraform(struct!.filter),
    index: cdktf.stringToTerraform(struct!.index),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    metric: kibanaSloTimesliceMetricIndicatorMetricToTerraform(struct!.metric),
  }
}


export function kibanaSloTimesliceMetricIndicatorToHclTerraform(struct?: KibanaSloTimesliceMetricIndicatorOutputReference | KibanaSloTimesliceMetricIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_view_id: {
      value: cdktf.stringToHclTerraform(struct!.dataViewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: kibanaSloTimesliceMetricIndicatorMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSloTimesliceMetricIndicatorMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSloTimesliceMetricIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSloTimesliceMetricIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataViewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataViewId = this._dataViewId;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSloTimesliceMetricIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataViewId = undefined;
      this._filter = undefined;
      this._index = undefined;
      this._timestampField = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataViewId = value.dataViewId;
      this._filter = value.filter;
      this._index = value.index;
      this._timestampField = value.timestampField;
      this._metric.internalValue = value.metric;
    }
  }

  // data_view_id - computed: false, optional: true, required: false
  private _dataViewId?: string; 
  public get dataViewId() {
    return this.getStringAttribute('data_view_id');
  }
  public set dataViewId(value: string) {
    this._dataViewId = value;
  }
  public resetDataViewId() {
    this._dataViewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataViewIdInput() {
    return this._dataViewId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // timestamp_field - computed: false, optional: false, required: true
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new KibanaSloTimesliceMetricIndicatorMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: KibanaSloTimesliceMetricIndicatorMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo elasticstack_kibana_slo}
*/
export class KibanaSlo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSlo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSlo to import
  * @param importFromId The id of the existing KibanaSlo that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSlo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_slo elasticstack_kibana_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSloConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSloConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_slo',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._budgetingMethod = config.budgetingMethod;
    this._description = config.description;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._name = config.name;
    this._sloId = config.sloId;
    this._spaceId = config.spaceId;
    this._tags = config.tags;
    this._apmAvailabilityIndicator.internalValue = config.apmAvailabilityIndicator;
    this._apmLatencyIndicator.internalValue = config.apmLatencyIndicator;
    this._histogramCustomIndicator.internalValue = config.histogramCustomIndicator;
    this._kqlCustomIndicator.internalValue = config.kqlCustomIndicator;
    this._metricCustomIndicator.internalValue = config.metricCustomIndicator;
    this._objective.internalValue = config.objective;
    this._settings.internalValue = config.settings;
    this._timeWindow.internalValue = config.timeWindow;
    this._timesliceMetricIndicator.internalValue = config.timesliceMetricIndicator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budgeting_method - computed: false, optional: false, required: true
  private _budgetingMethod?: string; 
  public get budgetingMethod() {
    return this.getStringAttribute('budgeting_method');
  }
  public set budgetingMethod(value: string) {
    this._budgetingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetingMethodInput() {
    return this._budgetingMethod;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // slo_id - computed: true, optional: true, required: false
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  public resetSloId() {
    this._sloId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // apm_availability_indicator - computed: false, optional: true, required: false
  private _apmAvailabilityIndicator = new KibanaSloApmAvailabilityIndicatorOutputReference(this, "apm_availability_indicator");
  public get apmAvailabilityIndicator() {
    return this._apmAvailabilityIndicator;
  }
  public putApmAvailabilityIndicator(value: KibanaSloApmAvailabilityIndicator) {
    this._apmAvailabilityIndicator.internalValue = value;
  }
  public resetApmAvailabilityIndicator() {
    this._apmAvailabilityIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmAvailabilityIndicatorInput() {
    return this._apmAvailabilityIndicator.internalValue;
  }

  // apm_latency_indicator - computed: false, optional: true, required: false
  private _apmLatencyIndicator = new KibanaSloApmLatencyIndicatorOutputReference(this, "apm_latency_indicator");
  public get apmLatencyIndicator() {
    return this._apmLatencyIndicator;
  }
  public putApmLatencyIndicator(value: KibanaSloApmLatencyIndicator) {
    this._apmLatencyIndicator.internalValue = value;
  }
  public resetApmLatencyIndicator() {
    this._apmLatencyIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmLatencyIndicatorInput() {
    return this._apmLatencyIndicator.internalValue;
  }

  // histogram_custom_indicator - computed: false, optional: true, required: false
  private _histogramCustomIndicator = new KibanaSloHistogramCustomIndicatorOutputReference(this, "histogram_custom_indicator");
  public get histogramCustomIndicator() {
    return this._histogramCustomIndicator;
  }
  public putHistogramCustomIndicator(value: KibanaSloHistogramCustomIndicator) {
    this._histogramCustomIndicator.internalValue = value;
  }
  public resetHistogramCustomIndicator() {
    this._histogramCustomIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramCustomIndicatorInput() {
    return this._histogramCustomIndicator.internalValue;
  }

  // kql_custom_indicator - computed: false, optional: true, required: false
  private _kqlCustomIndicator = new KibanaSloKqlCustomIndicatorOutputReference(this, "kql_custom_indicator");
  public get kqlCustomIndicator() {
    return this._kqlCustomIndicator;
  }
  public putKqlCustomIndicator(value: KibanaSloKqlCustomIndicator) {
    this._kqlCustomIndicator.internalValue = value;
  }
  public resetKqlCustomIndicator() {
    this._kqlCustomIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlCustomIndicatorInput() {
    return this._kqlCustomIndicator.internalValue;
  }

  // metric_custom_indicator - computed: false, optional: true, required: false
  private _metricCustomIndicator = new KibanaSloMetricCustomIndicatorOutputReference(this, "metric_custom_indicator");
  public get metricCustomIndicator() {
    return this._metricCustomIndicator;
  }
  public putMetricCustomIndicator(value: KibanaSloMetricCustomIndicator) {
    this._metricCustomIndicator.internalValue = value;
  }
  public resetMetricCustomIndicator() {
    this._metricCustomIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCustomIndicatorInput() {
    return this._metricCustomIndicator.internalValue;
  }

  // objective - computed: false, optional: false, required: true
  private _objective = new KibanaSloObjectiveOutputReference(this, "objective");
  public get objective() {
    return this._objective;
  }
  public putObjective(value: KibanaSloObjective) {
    this._objective.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new KibanaSloSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: KibanaSloSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow = new KibanaSloTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: KibanaSloTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }

  // timeslice_metric_indicator - computed: false, optional: true, required: false
  private _timesliceMetricIndicator = new KibanaSloTimesliceMetricIndicatorOutputReference(this, "timeslice_metric_indicator");
  public get timesliceMetricIndicator() {
    return this._timesliceMetricIndicator;
  }
  public putTimesliceMetricIndicator(value: KibanaSloTimesliceMetricIndicator) {
    this._timesliceMetricIndicator.internalValue = value;
  }
  public resetTimesliceMetricIndicator() {
    this._timesliceMetricIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesliceMetricIndicatorInput() {
    return this._timesliceMetricIndicator.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      budgeting_method: cdktf.stringToTerraform(this._budgetingMethod),
      description: cdktf.stringToTerraform(this._description),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      slo_id: cdktf.stringToTerraform(this._sloId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      apm_availability_indicator: kibanaSloApmAvailabilityIndicatorToTerraform(this._apmAvailabilityIndicator.internalValue),
      apm_latency_indicator: kibanaSloApmLatencyIndicatorToTerraform(this._apmLatencyIndicator.internalValue),
      histogram_custom_indicator: kibanaSloHistogramCustomIndicatorToTerraform(this._histogramCustomIndicator.internalValue),
      kql_custom_indicator: kibanaSloKqlCustomIndicatorToTerraform(this._kqlCustomIndicator.internalValue),
      metric_custom_indicator: kibanaSloMetricCustomIndicatorToTerraform(this._metricCustomIndicator.internalValue),
      objective: kibanaSloObjectiveToTerraform(this._objective.internalValue),
      settings: kibanaSloSettingsToTerraform(this._settings.internalValue),
      time_window: kibanaSloTimeWindowToTerraform(this._timeWindow.internalValue),
      timeslice_metric_indicator: kibanaSloTimesliceMetricIndicatorToTerraform(this._timesliceMetricIndicator.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      budgeting_method: {
        value: cdktf.stringToHclTerraform(this._budgetingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      slo_id: {
        value: cdktf.stringToHclTerraform(this._sloId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      apm_availability_indicator: {
        value: kibanaSloApmAvailabilityIndicatorToHclTerraform(this._apmAvailabilityIndicator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloApmAvailabilityIndicatorList",
      },
      apm_latency_indicator: {
        value: kibanaSloApmLatencyIndicatorToHclTerraform(this._apmLatencyIndicator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloApmLatencyIndicatorList",
      },
      histogram_custom_indicator: {
        value: kibanaSloHistogramCustomIndicatorToHclTerraform(this._histogramCustomIndicator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloHistogramCustomIndicatorList",
      },
      kql_custom_indicator: {
        value: kibanaSloKqlCustomIndicatorToHclTerraform(this._kqlCustomIndicator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloKqlCustomIndicatorList",
      },
      metric_custom_indicator: {
        value: kibanaSloMetricCustomIndicatorToHclTerraform(this._metricCustomIndicator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloMetricCustomIndicatorList",
      },
      objective: {
        value: kibanaSloObjectiveToHclTerraform(this._objective.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloObjectiveList",
      },
      settings: {
        value: kibanaSloSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloSettingsList",
      },
      time_window: {
        value: kibanaSloTimeWindowToHclTerraform(this._timeWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloTimeWindowList",
      },
      timeslice_metric_indicator: {
        value: kibanaSloTimesliceMetricIndicatorToHclTerraform(this._timesliceMetricIndicator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSloTimesliceMetricIndicatorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
