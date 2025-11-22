// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricRouteAggregationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filters for the Data Source Search Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#filter DataEquinixFabricRouteAggregations#filter}
  */
  readonly filter: DataEquinixFabricRouteAggregationsFilter;
  /**
  * Pagination details for the returned route aggregations list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#pagination DataEquinixFabricRouteAggregations#pagination}
  */
  readonly pagination?: DataEquinixFabricRouteAggregationsPagination;
  /**
  * Filters for the Data Source Search Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#sort DataEquinixFabricRouteAggregations#sort}
  */
  readonly sort?: DataEquinixFabricRouteAggregationsSort;
}
export interface DataEquinixFabricRouteAggregationsDataChange {
}

export function dataEquinixFabricRouteAggregationsDataChangeToTerraform(struct?: DataEquinixFabricRouteAggregationsDataChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricRouteAggregationsDataChangeToHclTerraform(struct?: DataEquinixFabricRouteAggregationsDataChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricRouteAggregationsDataChangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricRouteAggregationsDataChange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricRouteAggregationsDataChange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataEquinixFabricRouteAggregationsDataChangeLog {
}

export function dataEquinixFabricRouteAggregationsDataChangeLogToTerraform(struct?: DataEquinixFabricRouteAggregationsDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricRouteAggregationsDataChangeLogToHclTerraform(struct?: DataEquinixFabricRouteAggregationsDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricRouteAggregationsDataChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricRouteAggregationsDataChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricRouteAggregationsDataChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}
export interface DataEquinixFabricRouteAggregationsDataProject {
}

export function dataEquinixFabricRouteAggregationsDataProjectToTerraform(struct?: DataEquinixFabricRouteAggregationsDataProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricRouteAggregationsDataProjectToHclTerraform(struct?: DataEquinixFabricRouteAggregationsDataProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricRouteAggregationsDataProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricRouteAggregationsDataProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricRouteAggregationsDataProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface DataEquinixFabricRouteAggregationsData {
}

export function dataEquinixFabricRouteAggregationsDataToTerraform(struct?: DataEquinixFabricRouteAggregationsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricRouteAggregationsDataToHclTerraform(struct?: DataEquinixFabricRouteAggregationsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricRouteAggregationsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricRouteAggregationsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricRouteAggregationsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change - computed: true, optional: false, required: false
  private _change = new DataEquinixFabricRouteAggregationsDataChangeOutputReference(this, "change");
  public get change() {
    return this._change;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new DataEquinixFabricRouteAggregationsDataChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // connections_count - computed: true, optional: false, required: false
  public get connectionsCount() {
    return this.getNumberAttribute('connections_count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: false, required: false
  private _project = new DataEquinixFabricRouteAggregationsDataProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }

  // rules_count - computed: true, optional: false, required: false
  public get rulesCount() {
    return this.getNumberAttribute('rules_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataEquinixFabricRouteAggregationsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricRouteAggregationsDataOutputReference {
    return new DataEquinixFabricRouteAggregationsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricRouteAggregationsFilter {
  /**
  * Operators to use on your filtered field with the values given. One of [ =, !=, >, >=, <, <=, BETWEEN, NOT BETWEEN, LIKE, NOT LIKE, IN, NOT IN, IS NOT NULL, IS NULL]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#operator DataEquinixFabricRouteAggregations#operator}
  */
  readonly operator: string;
  /**
  * possible field names to use on filters. One of [/type /name /project/projectId /uuid /state]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#property DataEquinixFabricRouteAggregations#property}
  */
  readonly property: string;
  /**
  * The values that you want to apply the property+operator combination to in order to filter your data search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#values DataEquinixFabricRouteAggregations#values}
  */
  readonly values: string[];
}

export function dataEquinixFabricRouteAggregationsFilterToTerraform(struct?: DataEquinixFabricRouteAggregationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataEquinixFabricRouteAggregationsFilterToHclTerraform(struct?: DataEquinixFabricRouteAggregationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
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

export class DataEquinixFabricRouteAggregationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricRouteAggregationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricRouteAggregationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
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
export interface DataEquinixFabricRouteAggregationsPagination {
  /**
  * Maximum number of search results returned per page. Number must be between 1 and 100, and the default is 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#limit DataEquinixFabricRouteAggregations#limit}
  */
  readonly limit?: number;
  /**
  * Index of the first item returned in the response. The default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#offset DataEquinixFabricRouteAggregations#offset}
  */
  readonly offset?: number;
}

export function dataEquinixFabricRouteAggregationsPaginationToTerraform(struct?: DataEquinixFabricRouteAggregationsPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
  }
}


export function dataEquinixFabricRouteAggregationsPaginationToHclTerraform(struct?: DataEquinixFabricRouteAggregationsPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricRouteAggregationsPaginationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricRouteAggregationsPagination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricRouteAggregationsPagination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._offset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._offset = value.offset;
    }
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface DataEquinixFabricRouteAggregationsSort {
  /**
  * The sorting direction. Can be one of: [DESC, ASC], Defaults to DESC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#direction DataEquinixFabricRouteAggregations#direction}
  */
  readonly direction?: string;
  /**
  * The property name to use in sorting. One of [/type /name /project/projectId /uuid /state] Defaults to /name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#property DataEquinixFabricRouteAggregations#property}
  */
  readonly property?: string;
}

export function dataEquinixFabricRouteAggregationsSortToTerraform(struct?: DataEquinixFabricRouteAggregationsSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function dataEquinixFabricRouteAggregationsSortToHclTerraform(struct?: DataEquinixFabricRouteAggregationsSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricRouteAggregationsSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricRouteAggregationsSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricRouteAggregationsSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._property = value.property;
    }
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

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations equinix_fabric_route_aggregations}
*/
export class DataEquinixFabricRouteAggregations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_route_aggregations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricRouteAggregations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricRouteAggregations to import
  * @param importFromId The id of the existing DataEquinixFabricRouteAggregations that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricRouteAggregations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_route_aggregations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_route_aggregations equinix_fabric_route_aggregations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricRouteAggregationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricRouteAggregationsConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_route_aggregations',
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
    this._filter.internalValue = config.filter;
    this._pagination.internalValue = config.pagination;
    this._sort.internalValue = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataEquinixFabricRouteAggregationsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DataEquinixFabricRouteAggregationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataEquinixFabricRouteAggregationsFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pagination - computed: false, optional: true, required: false
  private _pagination = new DataEquinixFabricRouteAggregationsPaginationOutputReference(this, "pagination");
  public get pagination() {
    return this._pagination;
  }
  public putPagination(value: DataEquinixFabricRouteAggregationsPagination) {
    this._pagination.internalValue = value;
  }
  public resetPagination() {
    this._pagination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationInput() {
    return this._pagination.internalValue;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new DataEquinixFabricRouteAggregationsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DataEquinixFabricRouteAggregationsSort) {
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
      filter: dataEquinixFabricRouteAggregationsFilterToTerraform(this._filter.internalValue),
      pagination: dataEquinixFabricRouteAggregationsPaginationToTerraform(this._pagination.internalValue),
      sort: dataEquinixFabricRouteAggregationsSortToTerraform(this._sort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataEquinixFabricRouteAggregationsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricRouteAggregationsFilter",
      },
      pagination: {
        value: dataEquinixFabricRouteAggregationsPaginationToHclTerraform(this._pagination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricRouteAggregationsPagination",
      },
      sort: {
        value: dataEquinixFabricRouteAggregationsSortToHclTerraform(this._sort.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricRouteAggregationsSort",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
