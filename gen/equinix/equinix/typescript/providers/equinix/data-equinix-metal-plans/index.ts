// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalPlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#id DataEquinixMetalPlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#filter DataEquinixMetalPlans#filter}
  */
  readonly filter?: DataEquinixMetalPlansFilter[] | cdktf.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#sort DataEquinixMetalPlans#sort}
  */
  readonly sort?: DataEquinixMetalPlansSort[] | cdktf.IResolvable;
}
export interface DataEquinixMetalPlansPlans {
}

export function dataEquinixMetalPlansPlansToTerraform(struct?: DataEquinixMetalPlansPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixMetalPlansPlansToHclTerraform(struct?: DataEquinixMetalPlansPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixMetalPlansPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixMetalPlansPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixMetalPlansPlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_in - computed: true, optional: false, required: false
  public get availableIn() {
    return cdktf.Fn.tolist(this.getListAttribute('available_in'));
  }

  // available_in_metros - computed: true, optional: false, required: false
  public get availableInMetros() {
    return cdktf.Fn.tolist(this.getListAttribute('available_in_metros'));
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // deployment_types - computed: true, optional: false, required: false
  public get deploymentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_types'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // legacy - computed: true, optional: false, required: false
  public get legacy() {
    return this.getBooleanAttribute('legacy');
  }

  // line - computed: true, optional: false, required: false
  public get line() {
    return this.getStringAttribute('line');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pricing_hour - computed: true, optional: false, required: false
  public get pricingHour() {
    return this.getNumberAttribute('pricing_hour');
  }

  // pricing_month - computed: true, optional: false, required: false
  public get pricingMonth() {
    return this.getNumberAttribute('pricing_month');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

export class DataEquinixMetalPlansPlansList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixMetalPlansPlansOutputReference {
    return new DataEquinixMetalPlansPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixMetalPlansFilter {
  /**
  * If is set to true, the values are joined with an AND, and the requests returns only the results that match all specified values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#all DataEquinixMetalPlans#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The attribute used to filter. Filter attributes are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#attribute DataEquinixMetalPlans#attribute}
  */
  readonly attribute: string;
  /**
  * The type of comparison to apply. One of: in (default), re, substring, less_than, less_than_or_equal, greater_than, greater_than_or_equal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#match_by DataEquinixMetalPlans#match_by}
  */
  readonly matchBy?: string;
  /**
  * The filter values. Filter values are case-sensitive. If you specify multiple values for a filter, the values are joined with an OR by default, and the request returns all results that match any of the specified values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#values DataEquinixMetalPlans#values}
  */
  readonly values: string[];
}

export function dataEquinixMetalPlansFilterToTerraform(struct?: DataEquinixMetalPlansFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    attribute: cdktf.stringToTerraform(struct!.attribute),
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataEquinixMetalPlansFilterToHclTerraform(struct?: DataEquinixMetalPlansFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_by: {
      value: cdktf.stringToHclTerraform(struct!.matchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataEquinixMetalPlansFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixMetalPlansFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._matchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBy = this._matchBy;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixMetalPlansFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._attribute = undefined;
      this._matchBy = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._attribute = value.attribute;
      this._matchBy = value.matchBy;
      this._values = value.values;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
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

export class DataEquinixMetalPlansFilterList extends cdktf.ComplexList {
  public internalValue? : DataEquinixMetalPlansFilter[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixMetalPlansFilterOutputReference {
    return new DataEquinixMetalPlansFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixMetalPlansSort {
  /**
  * The attribute used to sort the results. Sort attributes are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#attribute DataEquinixMetalPlans#attribute}
  */
  readonly attribute: string;
  /**
  * Sort results in ascending or descending order. Strings are sorted in alphabetical order. One of: asc, desc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#direction DataEquinixMetalPlans#direction}
  */
  readonly direction?: string;
}

export function dataEquinixMetalPlansSortToTerraform(struct?: DataEquinixMetalPlansSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    direction: cdktf.stringToTerraform(struct!.direction),
  }
}


export function dataEquinixMetalPlansSortToHclTerraform(struct?: DataEquinixMetalPlansSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixMetalPlansSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixMetalPlansSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixMetalPlansSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._direction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._direction = value.direction;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }
}

export class DataEquinixMetalPlansSortList extends cdktf.ComplexList {
  public internalValue? : DataEquinixMetalPlansSort[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixMetalPlansSortOutputReference {
    return new DataEquinixMetalPlansSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans equinix_metal_plans}
*/
export class DataEquinixMetalPlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_plans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalPlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalPlans to import
  * @param importFromId The id of the existing DataEquinixMetalPlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalPlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_plans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_plans equinix_metal_plans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalPlansConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalPlansConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_plans',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
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
    this._filter.internalValue = config.filter;
    this._sort.internalValue = config.sort;
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

  // plans - computed: true, optional: false, required: false
  private _plans = new DataEquinixMetalPlansPlansList(this, "plans", false);
  public get plans() {
    return this._plans;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataEquinixMetalPlansFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataEquinixMetalPlansFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new DataEquinixMetalPlansSortList(this, "sort", false);
  public get sort() {
    return this._sort;
  }
  public putSort(value: DataEquinixMetalPlansSort[] | cdktf.IResolvable) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataEquinixMetalPlansFilterToTerraform, true)(this._filter.internalValue),
      sort: cdktf.listMapper(dataEquinixMetalPlansSortToTerraform, true)(this._sort.internalValue),
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
      filter: {
        value: cdktf.listMapperHcl(dataEquinixMetalPlansFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataEquinixMetalPlansFilterList",
      },
      sort: {
        value: cdktf.listMapperHcl(dataEquinixMetalPlansSortToHclTerraform, true)(this._sort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEquinixMetalPlansSortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
