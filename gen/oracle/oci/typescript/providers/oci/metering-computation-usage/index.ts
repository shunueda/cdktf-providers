// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeteringComputationUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#compartment_depth MeteringComputationUsage#compartment_depth}
  */
  readonly compartmentDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#filter MeteringComputationUsage#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#granularity MeteringComputationUsage#granularity}
  */
  readonly granularity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#group_by MeteringComputationUsage#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#id MeteringComputationUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#is_aggregate_by_time MeteringComputationUsage#is_aggregate_by_time}
  */
  readonly isAggregateByTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#query_type MeteringComputationUsage#query_type}
  */
  readonly queryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#tenant_id MeteringComputationUsage#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#time_usage_ended MeteringComputationUsage#time_usage_ended}
  */
  readonly timeUsageEnded: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#time_usage_started MeteringComputationUsage#time_usage_started}
  */
  readonly timeUsageStarted: string;
  /**
  * forecast block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#forecast MeteringComputationUsage#forecast}
  */
  readonly forecast?: MeteringComputationUsageForecast;
  /**
  * group_by_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#group_by_tag MeteringComputationUsage#group_by_tag}
  */
  readonly groupByTag?: MeteringComputationUsageGroupByTag[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#timeouts MeteringComputationUsage#timeouts}
  */
  readonly timeouts?: MeteringComputationUsageTimeouts;
}
export interface MeteringComputationUsageItemsTags {
}

export function meteringComputationUsageItemsTagsToTerraform(struct?: MeteringComputationUsageItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function meteringComputationUsageItemsTagsToHclTerraform(struct?: MeteringComputationUsageItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MeteringComputationUsageItemsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeteringComputationUsageItemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageItemsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class MeteringComputationUsageItemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): MeteringComputationUsageItemsTagsOutputReference {
    return new MeteringComputationUsageItemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationUsageItems {
}

export function meteringComputationUsageItemsToTerraform(struct?: MeteringComputationUsageItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function meteringComputationUsageItemsToHclTerraform(struct?: MeteringComputationUsageItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MeteringComputationUsageItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeteringComputationUsageItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad - computed: true, optional: false, required: false
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // attributed_cost - computed: true, optional: false, required: false
  public get attributedCost() {
    return this.getStringAttribute('attributed_cost');
  }

  // attributed_usage - computed: true, optional: false, required: false
  public get attributedUsage() {
    return this.getStringAttribute('attributed_usage');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: false
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // compartment_path - computed: true, optional: false, required: false
  public get compartmentPath() {
    return this.getStringAttribute('compartment_path');
  }

  // computed_amount - computed: true, optional: false, required: false
  public get computedAmount() {
    return this.getNumberAttribute('computed_amount');
  }

  // computed_quantity - computed: true, optional: false, required: false
  public get computedQuantity() {
    return this.getNumberAttribute('computed_quantity');
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // discount - computed: true, optional: false, required: false
  public get discount() {
    return this.getNumberAttribute('discount');
  }

  // is_forecast - computed: true, optional: false, required: false
  public get isForecast() {
    return this.getBooleanAttribute('is_forecast');
  }

  // list_rate - computed: true, optional: false, required: false
  public get listRate() {
    return this.getNumberAttribute('list_rate');
  }

  // overage - computed: true, optional: false, required: false
  public get overage() {
    return this.getStringAttribute('overage');
  }

  // overages_flag - computed: true, optional: false, required: false
  public get overagesFlag() {
    return this.getStringAttribute('overages_flag');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // sku_part_number - computed: true, optional: false, required: false
  public get skuPartNumber() {
    return this.getStringAttribute('sku_part_number');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new MeteringComputationUsageItemsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // time_usage_ended - computed: true, optional: false, required: false
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }

  // time_usage_started - computed: true, optional: false, required: false
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // unit_price - computed: true, optional: false, required: false
  public get unitPrice() {
    return this.getNumberAttribute('unit_price');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class MeteringComputationUsageItemsList extends cdktf.ComplexList {

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
  public get(index: number): MeteringComputationUsageItemsOutputReference {
    return new MeteringComputationUsageItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationUsageForecast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#forecast_type MeteringComputationUsage#forecast_type}
  */
  readonly forecastType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#time_forecast_ended MeteringComputationUsage#time_forecast_ended}
  */
  readonly timeForecastEnded: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#time_forecast_started MeteringComputationUsage#time_forecast_started}
  */
  readonly timeForecastStarted?: string;
}

export function meteringComputationUsageForecastToTerraform(struct?: MeteringComputationUsageForecastOutputReference | MeteringComputationUsageForecast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forecast_type: cdktf.stringToTerraform(struct!.forecastType),
    time_forecast_ended: cdktf.stringToTerraform(struct!.timeForecastEnded),
    time_forecast_started: cdktf.stringToTerraform(struct!.timeForecastStarted),
  }
}


export function meteringComputationUsageForecastToHclTerraform(struct?: MeteringComputationUsageForecastOutputReference | MeteringComputationUsageForecast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forecast_type: {
      value: cdktf.stringToHclTerraform(struct!.forecastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_forecast_ended: {
      value: cdktf.stringToHclTerraform(struct!.timeForecastEnded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_forecast_started: {
      value: cdktf.stringToHclTerraform(struct!.timeForecastStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationUsageForecastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationUsageForecast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forecastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastType = this._forecastType;
    }
    if (this._timeForecastEnded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeForecastEnded = this._timeForecastEnded;
    }
    if (this._timeForecastStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeForecastStarted = this._timeForecastStarted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageForecast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forecastType = undefined;
      this._timeForecastEnded = undefined;
      this._timeForecastStarted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forecastType = value.forecastType;
      this._timeForecastEnded = value.timeForecastEnded;
      this._timeForecastStarted = value.timeForecastStarted;
    }
  }

  // forecast_type - computed: true, optional: true, required: false
  private _forecastType?: string; 
  public get forecastType() {
    return this.getStringAttribute('forecast_type');
  }
  public set forecastType(value: string) {
    this._forecastType = value;
  }
  public resetForecastType() {
    this._forecastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastTypeInput() {
    return this._forecastType;
  }

  // time_forecast_ended - computed: false, optional: false, required: true
  private _timeForecastEnded?: string; 
  public get timeForecastEnded() {
    return this.getStringAttribute('time_forecast_ended');
  }
  public set timeForecastEnded(value: string) {
    this._timeForecastEnded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeForecastEndedInput() {
    return this._timeForecastEnded;
  }

  // time_forecast_started - computed: true, optional: true, required: false
  private _timeForecastStarted?: string; 
  public get timeForecastStarted() {
    return this.getStringAttribute('time_forecast_started');
  }
  public set timeForecastStarted(value: string) {
    this._timeForecastStarted = value;
  }
  public resetTimeForecastStarted() {
    this._timeForecastStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeForecastStartedInput() {
    return this._timeForecastStarted;
  }
}
export interface MeteringComputationUsageGroupByTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#key MeteringComputationUsage#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#namespace MeteringComputationUsage#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#value MeteringComputationUsage#value}
  */
  readonly value?: string;
}

export function meteringComputationUsageGroupByTagToTerraform(struct?: MeteringComputationUsageGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function meteringComputationUsageGroupByTagToHclTerraform(struct?: MeteringComputationUsageGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationUsageGroupByTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeteringComputationUsageGroupByTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageGroupByTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._namespace = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MeteringComputationUsageGroupByTagList extends cdktf.ComplexList {
  public internalValue? : MeteringComputationUsageGroupByTag[] | cdktf.IResolvable

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
  public get(index: number): MeteringComputationUsageGroupByTagOutputReference {
    return new MeteringComputationUsageGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationUsageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#create MeteringComputationUsage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#delete MeteringComputationUsage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#update MeteringComputationUsage#update}
  */
  readonly update?: string;
}

export function meteringComputationUsageTimeoutsToTerraform(struct?: MeteringComputationUsageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function meteringComputationUsageTimeoutsToHclTerraform(struct?: MeteringComputationUsageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationUsageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MeteringComputationUsageTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationUsageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage oci_metering_computation_usage}
*/
export class MeteringComputationUsage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeteringComputationUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeteringComputationUsage to import
  * @param importFromId The id of the existing MeteringComputationUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeteringComputationUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_usage oci_metering_computation_usage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeteringComputationUsageConfig
  */
  public constructor(scope: Construct, id: string, config: MeteringComputationUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_usage',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentDepth = config.compartmentDepth;
    this._filter = config.filter;
    this._granularity = config.granularity;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._isAggregateByTime = config.isAggregateByTime;
    this._queryType = config.queryType;
    this._tenantId = config.tenantId;
    this._timeUsageEnded = config.timeUsageEnded;
    this._timeUsageStarted = config.timeUsageStarted;
    this._forecast.internalValue = config.forecast;
    this._groupByTag.internalValue = config.groupByTag;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_depth - computed: true, optional: true, required: false
  private _compartmentDepth?: number; 
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }
  public set compartmentDepth(value: number) {
    this._compartmentDepth = value;
  }
  public resetCompartmentDepth() {
    this._compartmentDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentDepthInput() {
    return this._compartmentDepth;
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

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
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

  // is_aggregate_by_time - computed: true, optional: true, required: false
  private _isAggregateByTime?: boolean | cdktf.IResolvable; 
  public get isAggregateByTime() {
    return this.getBooleanAttribute('is_aggregate_by_time');
  }
  public set isAggregateByTime(value: boolean | cdktf.IResolvable) {
    this._isAggregateByTime = value;
  }
  public resetIsAggregateByTime() {
    this._isAggregateByTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAggregateByTimeInput() {
    return this._isAggregateByTime;
  }

  // items - computed: true, optional: false, required: false
  private _items = new MeteringComputationUsageItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // query_type - computed: true, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // time_usage_ended - computed: false, optional: false, required: true
  private _timeUsageEnded?: string; 
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }
  public set timeUsageEnded(value: string) {
    this._timeUsageEnded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageEndedInput() {
    return this._timeUsageEnded;
  }

  // time_usage_started - computed: false, optional: false, required: true
  private _timeUsageStarted?: string; 
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }
  public set timeUsageStarted(value: string) {
    this._timeUsageStarted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageStartedInput() {
    return this._timeUsageStarted;
  }

  // forecast - computed: false, optional: true, required: false
  private _forecast = new MeteringComputationUsageForecastOutputReference(this, "forecast");
  public get forecast() {
    return this._forecast;
  }
  public putForecast(value: MeteringComputationUsageForecast) {
    this._forecast.internalValue = value;
  }
  public resetForecast() {
    this._forecast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastInput() {
    return this._forecast.internalValue;
  }

  // group_by_tag - computed: false, optional: true, required: false
  private _groupByTag = new MeteringComputationUsageGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }
  public putGroupByTag(value: MeteringComputationUsageGroupByTag[] | cdktf.IResolvable) {
    this._groupByTag.internalValue = value;
  }
  public resetGroupByTag() {
    this._groupByTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTagInput() {
    return this._groupByTag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MeteringComputationUsageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MeteringComputationUsageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_depth: cdktf.numberToTerraform(this._compartmentDepth),
      filter: cdktf.stringToTerraform(this._filter),
      granularity: cdktf.stringToTerraform(this._granularity),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      is_aggregate_by_time: cdktf.booleanToTerraform(this._isAggregateByTime),
      query_type: cdktf.stringToTerraform(this._queryType),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      time_usage_ended: cdktf.stringToTerraform(this._timeUsageEnded),
      time_usage_started: cdktf.stringToTerraform(this._timeUsageStarted),
      forecast: meteringComputationUsageForecastToTerraform(this._forecast.internalValue),
      group_by_tag: cdktf.listMapper(meteringComputationUsageGroupByTagToTerraform, true)(this._groupByTag.internalValue),
      timeouts: meteringComputationUsageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_depth: {
        value: cdktf.numberToHclTerraform(this._compartmentDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granularity: {
        value: cdktf.stringToHclTerraform(this._granularity),
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
      is_aggregate_by_time: {
        value: cdktf.booleanToHclTerraform(this._isAggregateByTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query_type: {
        value: cdktf.stringToHclTerraform(this._queryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_usage_ended: {
        value: cdktf.stringToHclTerraform(this._timeUsageEnded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_usage_started: {
        value: cdktf.stringToHclTerraform(this._timeUsageStarted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forecast: {
        value: meteringComputationUsageForecastToHclTerraform(this._forecast.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeteringComputationUsageForecastList",
      },
      group_by_tag: {
        value: cdktf.listMapperHcl(meteringComputationUsageGroupByTagToHclTerraform, true)(this._groupByTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeteringComputationUsageGroupByTagList",
      },
      timeouts: {
        value: meteringComputationUsageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MeteringComputationUsageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
