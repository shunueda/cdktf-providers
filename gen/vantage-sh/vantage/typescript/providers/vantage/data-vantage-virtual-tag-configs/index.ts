// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/virtual_tag_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageVirtualTagConfigsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeys {
}

export function dataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeysToTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeysToHclTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeys | undefined) {
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

  // providers - computed: true, optional: false, required: false
  public get providers() {
    return this.getListAttribute('providers');
  }
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeysOutputReference {
    return new DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregation {
}

export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregationToTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregationToHclTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}
export interface DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetric {
}

export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricToTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricToHclTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }
}
export interface DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentages {
}

export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentagesToTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentagesToHclTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pct - computed: true, optional: false, required: false
  public get pct() {
    return this.getNumberAttribute('pct');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentagesList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentagesOutputReference {
    return new DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageVirtualTagConfigsVirtualTagConfigsValues {
}

export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesToTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageVirtualTagConfigsVirtualTagConfigsValuesToHclTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageVirtualTagConfigsVirtualTagConfigsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageVirtualTagConfigsVirtualTagConfigsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_metric_token - computed: true, optional: false, required: false
  public get businessMetricToken() {
    return this.getStringAttribute('business_metric_token');
  }

  // cost_metric - computed: true, optional: false, required: false
  private _costMetric = new DataVantageVirtualTagConfigsVirtualTagConfigsValuesCostMetricOutputReference(this, "cost_metric");
  public get costMetric() {
    return this._costMetric;
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // percentages - computed: true, optional: false, required: false
  private _percentages = new DataVantageVirtualTagConfigsVirtualTagConfigsValuesPercentagesList(this, "percentages", false);
  public get percentages() {
    return this._percentages;
  }
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageVirtualTagConfigsVirtualTagConfigsValuesOutputReference {
    return new DataVantageVirtualTagConfigsVirtualTagConfigsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageVirtualTagConfigsVirtualTagConfigs {
}

export function dataVantageVirtualTagConfigsVirtualTagConfigsToTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageVirtualTagConfigsVirtualTagConfigsToHclTerraform(struct?: DataVantageVirtualTagConfigsVirtualTagConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageVirtualTagConfigsVirtualTagConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageVirtualTagConfigsVirtualTagConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backfill_until - computed: true, optional: false, required: false
  public get backfillUntil() {
    return this.getStringAttribute('backfill_until');
  }

  // collapsed_tag_keys - computed: true, optional: false, required: false
  private _collapsedTagKeys = new DataVantageVirtualTagConfigsVirtualTagConfigsCollapsedTagKeysList(this, "collapsed_tag_keys", false);
  public get collapsedTagKeys() {
    return this._collapsedTagKeys;
  }

  // created_by_token - computed: true, optional: false, required: false
  public get createdByToken() {
    return this.getStringAttribute('created_by_token');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // overridable - computed: true, optional: false, required: false
  public get overridable() {
    return this.getBooleanAttribute('overridable');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataVantageVirtualTagConfigsVirtualTagConfigsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataVantageVirtualTagConfigsVirtualTagConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageVirtualTagConfigsVirtualTagConfigsOutputReference {
    return new DataVantageVirtualTagConfigsVirtualTagConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/virtual_tag_configs vantage_virtual_tag_configs}
*/
export class DataVantageVirtualTagConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_virtual_tag_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageVirtualTagConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageVirtualTagConfigs to import
  * @param importFromId The id of the existing DataVantageVirtualTagConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/virtual_tag_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageVirtualTagConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_virtual_tag_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/virtual_tag_configs vantage_virtual_tag_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageVirtualTagConfigsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageVirtualTagConfigsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_virtual_tag_configs',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.70',
        providerVersionConstraint: '0.1.70'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // virtual_tag_configs - computed: true, optional: false, required: false
  private _virtualTagConfigs = new DataVantageVirtualTagConfigsVirtualTagConfigsList(this, "virtual_tag_configs", false);
  public get virtualTagConfigs() {
    return this._virtualTagConfigs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
