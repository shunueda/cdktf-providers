// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug of the organization the dashboard belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#organization Dashboard#organization}
  */
  readonly organization: string;
  /**
  * Dashboard title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * widget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#widget Dashboard#widget}
  */
  readonly widget?: DashboardWidget[] | cdktf.IResolvable;
}
export interface DashboardWidgetLayout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#h Dashboard#h}
  */
  readonly h: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#min_h Dashboard#min_h}
  */
  readonly minH: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#w Dashboard#w}
  */
  readonly w: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#x Dashboard#x}
  */
  readonly x: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#y Dashboard#y}
  */
  readonly y: number;
}

export function dashboardWidgetLayoutToTerraform(struct?: DashboardWidgetLayoutOutputReference | DashboardWidgetLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    min_h: cdktf.numberToTerraform(struct!.minH),
    w: cdktf.numberToTerraform(struct!.w),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function dashboardWidgetLayoutToHclTerraform(struct?: DashboardWidgetLayoutOutputReference | DashboardWidgetLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h: {
      value: cdktf.numberToHclTerraform(struct!.h),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_h: {
      value: cdktf.numberToHclTerraform(struct!.minH),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w: {
      value: cdktf.numberToHclTerraform(struct!.w),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
    }
    if (this._minH !== undefined) {
      hasAnyValues = true;
      internalValueResult.minH = this._minH;
    }
    if (this._w !== undefined) {
      hasAnyValues = true;
      internalValueResult.w = this._w;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._h = undefined;
      this._minH = undefined;
      this._w = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._h = value.h;
      this._minH = value.minH;
      this._w = value.w;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // h - computed: false, optional: false, required: true
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // min_h - computed: false, optional: false, required: true
  private _minH?: number; 
  public get minH() {
    return this.getNumberAttribute('min_h');
  }
  public set minH(value: number) {
    this._minH = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minHInput() {
    return this._minH;
  }

  // w - computed: false, optional: false, required: true
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }

  // x - computed: false, optional: false, required: true
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: false, required: true
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface DashboardWidgetQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#aggregates Dashboard#aggregates}
  */
  readonly aggregates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#columns Dashboard#columns}
  */
  readonly columns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#conditions Dashboard#conditions}
  */
  readonly conditions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#field_aliases Dashboard#field_aliases}
  */
  readonly fieldAliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#fields Dashboard#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#order_by Dashboard#order_by}
  */
  readonly orderBy?: string;
}

export function dashboardWidgetQueryToTerraform(struct?: DashboardWidgetQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aggregates),
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    conditions: cdktf.stringToTerraform(struct!.conditions),
    field_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldAliases),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    name: cdktf.stringToTerraform(struct!.name),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
  }
}


export function dashboardWidgetQueryToHclTerraform(struct?: DashboardWidgetQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aggregates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    conditions: {
      value: cdktf.stringToHclTerraform(struct!.conditions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldAliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_by: {
      value: cdktf.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregates !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregates = this._aggregates;
    }
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    if (this._fieldAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldAliases = this._fieldAliases;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregates = undefined;
      this._columns = undefined;
      this._conditions = undefined;
      this._fieldAliases = undefined;
      this._fields = undefined;
      this._name = undefined;
      this._orderBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregates = value.aggregates;
      this._columns = value.columns;
      this._conditions = value.conditions;
      this._fieldAliases = value.fieldAliases;
      this._fields = value.fields;
      this._name = value.name;
      this._orderBy = value.orderBy;
    }
  }

  // aggregates - computed: true, optional: true, required: false
  private _aggregates?: string[]; 
  public get aggregates() {
    return cdktf.Fn.tolist(this.getListAttribute('aggregates'));
  }
  public set aggregates(value: string[]) {
    this._aggregates = value;
  }
  public resetAggregates() {
    this._aggregates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates;
  }

  // columns - computed: true, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return cdktf.Fn.tolist(this.getListAttribute('columns'));
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // field_aliases - computed: true, optional: true, required: false
  private _fieldAliases?: string[]; 
  public get fieldAliases() {
    return this.getListAttribute('field_aliases');
  }
  public set fieldAliases(value: string[]) {
    this._fieldAliases = value;
  }
  public resetFieldAliases() {
    this._fieldAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldAliasesInput() {
    return this._fieldAliases;
  }

  // fields - computed: true, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // order_by - computed: true, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }
}

export class DashboardWidgetQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryOutputReference {
    return new DashboardWidgetQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#display_type Dashboard#display_type}
  */
  readonly displayType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#widget_type Dashboard#widget_type}
  */
  readonly widgetType?: string;
  /**
  * layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#layout Dashboard#layout}
  */
  readonly layout: DashboardWidgetLayout;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardWidgetQuery[] | cdktf.IResolvable;
}

export function dashboardWidgetToTerraform(struct?: DashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_type: cdktf.stringToTerraform(struct!.displayType),
    interval: cdktf.stringToTerraform(struct!.interval),
    limit: cdktf.numberToTerraform(struct!.limit),
    title: cdktf.stringToTerraform(struct!.title),
    widget_type: cdktf.stringToTerraform(struct!.widgetType),
    layout: dashboardWidgetLayoutToTerraform(struct!.layout),
    query: cdktf.listMapper(dashboardWidgetQueryToTerraform, true)(struct!.query),
  }
}


export function dashboardWidgetToHclTerraform(struct?: DashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_type: {
      value: cdktf.stringToHclTerraform(struct!.displayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_type: {
      value: cdktf.stringToHclTerraform(struct!.widgetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: dashboardWidgetLayoutToHclTerraform(struct!.layout),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetLayoutList",
    },
    query: {
      value: cdktf.listMapperHcl(dashboardWidgetQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayType = this._displayType;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._widgetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetType = this._widgetType;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayType = undefined;
      this._interval = undefined;
      this._limit = undefined;
      this._title = undefined;
      this._widgetType = undefined;
      this._layout.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayType = value.displayType;
      this._interval = value.interval;
      this._limit = value.limit;
      this._title = value.title;
      this._widgetType = value.widgetType;
      this._layout.internalValue = value.layout;
      this._query.internalValue = value.query;
    }
  }

  // display_type - computed: false, optional: false, required: true
  private _displayType?: string; 
  public get displayType() {
    return this.getStringAttribute('display_type');
  }
  public set displayType(value: string) {
    this._displayType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeInput() {
    return this._displayType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // widget_type - computed: true, optional: true, required: false
  private _widgetType?: string; 
  public get widgetType() {
    return this.getStringAttribute('widget_type');
  }
  public set widgetType(value: string) {
    this._widgetType = value;
  }
  public resetWidgetType() {
    this._widgetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTypeInput() {
    return this._widgetType;
  }

  // layout - computed: false, optional: false, required: true
  private _layout = new DashboardWidgetLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: DashboardWidgetLayout) {
    this._layout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new DashboardWidgetQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class DashboardWidgetList extends cdktf.ComplexList {
  public internalValue? : DashboardWidget[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetOutputReference {
    return new DashboardWidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard sentry_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/dashboard sentry_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organization = config.organization;
    this._title = config.title;
    this._widget.internalValue = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // widget - computed: false, optional: true, required: false
  private _widget = new DashboardWidgetList(this, "widget", false);
  public get widget() {
    return this._widget;
  }
  public putWidget(value: DashboardWidget[] | cdktf.IResolvable) {
    this._widget.internalValue = value;
  }
  public resetWidget() {
    this._widget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization: cdktf.stringToTerraform(this._organization),
      title: cdktf.stringToTerraform(this._title),
      widget: cdktf.listMapper(dashboardWidgetToTerraform, true)(this._widget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      widget: {
        value: cdktf.listMapperHcl(dashboardWidgetToHclTerraform, true)(this._widget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardWidgetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
