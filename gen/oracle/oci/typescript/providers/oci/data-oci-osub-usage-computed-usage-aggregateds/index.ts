// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsubUsageComputedUsageAggregatedsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#compartment_id DataOciOsubUsageComputedUsageAggregateds#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#grouping DataOciOsubUsageComputedUsageAggregateds#grouping}
  */
  readonly grouping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#id DataOciOsubUsageComputedUsageAggregateds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#parent_product DataOciOsubUsageComputedUsageAggregateds#parent_product}
  */
  readonly parentProduct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#subscription_id DataOciOsubUsageComputedUsageAggregateds#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#time_from DataOciOsubUsageComputedUsageAggregateds#time_from}
  */
  readonly timeFrom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#time_to DataOciOsubUsageComputedUsageAggregateds#time_to}
  */
  readonly timeTo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#x_one_origin_region DataOciOsubUsageComputedUsageAggregateds#x_one_origin_region}
  */
  readonly xOneOriginRegion?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#filter DataOciOsubUsageComputedUsageAggregateds#filter}
  */
  readonly filter?: DataOciOsubUsageComputedUsageAggregatedsFilter[] | cdktf.IResolvable;
}
export interface DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct {
}

export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductToTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductToHclTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_category - computed: true, optional: false, required: false
  public get billingCategory() {
    return this.getStringAttribute('billing_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // provisioning_group - computed: true, optional: false, required: false
  public get provisioningGroup() {
    return this.getStringAttribute('provisioning_group');
  }

  // ucm_rate_card_part_type - computed: true, optional: false, required: false
  public get ucmRateCardPartType() {
    return this.getStringAttribute('ucm_rate_card_part_type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference {
    return new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages {
}

export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesToTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesToHclTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getStringAttribute('cost');
  }

  // cost_unrounded - computed: true, optional: false, required: false
  public get costUnrounded() {
    return this.getStringAttribute('cost_unrounded');
  }

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // time_metered_on - computed: true, optional: false, required: false
  public get timeMeteredOn() {
    return this.getStringAttribute('time_metered_on');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference {
    return new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct {
}

export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductToTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductToHclTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_category - computed: true, optional: false, required: false
  public get billingCategory() {
    return this.getStringAttribute('billing_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // provisioning_group - computed: true, optional: false, required: false
  public get provisioningGroup() {
    return this.getStringAttribute('provisioning_group');
  }

  // ucm_rate_card_part_type - computed: true, optional: false, required: false
  public get ucmRateCardPartType() {
    return this.getStringAttribute('ucm_rate_card_part_type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference {
    return new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds {
}

export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsToTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsToHclTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregated_computed_usages - computed: true, optional: false, required: false
  private _aggregatedComputedUsages = new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList(this, "aggregated_computed_usages", false);
  public get aggregatedComputedUsages() {
    return this._aggregatedComputedUsages;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // parent_product - computed: true, optional: false, required: false
  private _parentProduct = new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList(this, "parent_product", false);
  public get parentProduct() {
    return this._parentProduct;
  }

  // parent_subscribed_service_id - computed: true, optional: false, required: false
  public get parentSubscribedServiceId() {
    return this.getStringAttribute('parent_subscribed_service_id');
  }

  // plan_number - computed: true, optional: false, required: false
  public get planNumber() {
    return this.getStringAttribute('plan_number');
  }

  // pricing_model - computed: true, optional: false, required: false
  public get pricingModel() {
    return this.getStringAttribute('pricing_model');
  }

  // rate_card_id - computed: true, optional: false, required: false
  public get rateCardId() {
    return this.getStringAttribute('rate_card_id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference {
    return new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubUsageComputedUsageAggregatedsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#name DataOciOsubUsageComputedUsageAggregateds#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#regex DataOciOsubUsageComputedUsageAggregateds#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#values DataOciOsubUsageComputedUsageAggregateds#values}
  */
  readonly values: string[];
}

export function dataOciOsubUsageComputedUsageAggregatedsFilterToTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOsubUsageComputedUsageAggregatedsFilterToHclTerraform(struct?: DataOciOsubUsageComputedUsageAggregatedsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubUsageComputedUsageAggregatedsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubUsageComputedUsageAggregatedsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOsubUsageComputedUsageAggregatedsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsubUsageComputedUsageAggregatedsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference {
    return new DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds oci_osub_usage_computed_usage_aggregateds}
*/
export class DataOciOsubUsageComputedUsageAggregateds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osub_usage_computed_usage_aggregateds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsubUsageComputedUsageAggregateds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsubUsageComputedUsageAggregateds to import
  * @param importFromId The id of the existing DataOciOsubUsageComputedUsageAggregateds that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsubUsageComputedUsageAggregateds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osub_usage_computed_usage_aggregateds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_usage_computed_usage_aggregateds oci_osub_usage_computed_usage_aggregateds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsubUsageComputedUsageAggregatedsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsubUsageComputedUsageAggregatedsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osub_usage_computed_usage_aggregateds',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._grouping = config.grouping;
    this._id = config.id;
    this._parentProduct = config.parentProduct;
    this._subscriptionId = config.subscriptionId;
    this._timeFrom = config.timeFrom;
    this._timeTo = config.timeTo;
    this._xOneOriginRegion = config.xOneOriginRegion;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // computed_usage_aggregateds - computed: true, optional: false, required: false
  private _computedUsageAggregateds = new DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList(this, "computed_usage_aggregateds", false);
  public get computedUsageAggregateds() {
    return this._computedUsageAggregateds;
  }

  // grouping - computed: false, optional: true, required: false
  private _grouping?: string; 
  public get grouping() {
    return this.getStringAttribute('grouping');
  }
  public set grouping(value: string) {
    this._grouping = value;
  }
  public resetGrouping() {
    this._grouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingInput() {
    return this._grouping;
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

  // parent_product - computed: false, optional: true, required: false
  private _parentProduct?: string; 
  public get parentProduct() {
    return this.getStringAttribute('parent_product');
  }
  public set parentProduct(value: string) {
    this._parentProduct = value;
  }
  public resetParentProduct() {
    this._parentProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProductInput() {
    return this._parentProduct;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // time_from - computed: false, optional: false, required: true
  private _timeFrom?: string; 
  public get timeFrom() {
    return this.getStringAttribute('time_from');
  }
  public set timeFrom(value: string) {
    this._timeFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFromInput() {
    return this._timeFrom;
  }

  // time_to - computed: false, optional: false, required: true
  private _timeTo?: string; 
  public get timeTo() {
    return this.getStringAttribute('time_to');
  }
  public set timeTo(value: string) {
    this._timeTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToInput() {
    return this._timeTo;
  }

  // x_one_origin_region - computed: false, optional: true, required: false
  private _xOneOriginRegion?: string; 
  public get xOneOriginRegion() {
    return this.getStringAttribute('x_one_origin_region');
  }
  public set xOneOriginRegion(value: string) {
    this._xOneOriginRegion = value;
  }
  public resetXOneOriginRegion() {
    this._xOneOriginRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xOneOriginRegionInput() {
    return this._xOneOriginRegion;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsubUsageComputedUsageAggregatedsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsubUsageComputedUsageAggregatedsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      grouping: cdktf.stringToTerraform(this._grouping),
      id: cdktf.stringToTerraform(this._id),
      parent_product: cdktf.stringToTerraform(this._parentProduct),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_from: cdktf.stringToTerraform(this._timeFrom),
      time_to: cdktf.stringToTerraform(this._timeTo),
      x_one_origin_region: cdktf.stringToTerraform(this._xOneOriginRegion),
      filter: cdktf.listMapper(dataOciOsubUsageComputedUsageAggregatedsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grouping: {
        value: cdktf.stringToHclTerraform(this._grouping),
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
      parent_product: {
        value: cdktf.stringToHclTerraform(this._parentProduct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_from: {
        value: cdktf.stringToHclTerraform(this._timeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to: {
        value: cdktf.stringToHclTerraform(this._timeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_one_origin_region: {
        value: cdktf.stringToHclTerraform(this._xOneOriginRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsubUsageComputedUsageAggregatedsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsubUsageComputedUsageAggregatedsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
