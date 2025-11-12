// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomWidgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#extra_params CustomWidget#extra_params}
  */
  readonly extraParams: CustomWidgetExtraParams;
  /**
  * An internal, unique name for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#name CustomWidget#name}
  */
  readonly name: string;
  /**
  * If set to true, it is a shared widget (can be viewed by any member of your Orca org). If set to false, it is a personal widget (can be viewed only by you, not other members of your Orca org).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#organization_level CustomWidget#organization_level}
  */
  readonly organizationLevel: boolean | cdktf.IResolvable;
}
export interface CustomWidgetExtraParamsSettingsField {
  /**
  * Name of the grouping method. For inventory-based queries, a common value is 'CloudAccount.Name'. To see other options, please use Chrome DevTools and the Orca UI to monitor what values this can be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#name CustomWidget#name}
  */
  readonly name: string;
  /**
  * The name's type (normally 'str' for string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#type CustomWidget#type}
  */
  readonly type: string;
}

export function customWidgetExtraParamsSettingsFieldToTerraform(struct?: CustomWidgetExtraParamsSettingsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function customWidgetExtraParamsSettingsFieldToHclTerraform(struct?: CustomWidgetExtraParamsSettingsField | cdktf.IResolvable): any {
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

export class CustomWidgetExtraParamsSettingsFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomWidgetExtraParamsSettingsField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomWidgetExtraParamsSettingsField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
export interface CustomWidgetExtraParamsSettingsRequestParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#enable_pagination CustomWidget#enable_pagination}
  */
  readonly enablePagination?: boolean | cdktf.IResolvable;
  /**
  * How to group the returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#group_by CustomWidget#group_by}
  */
  readonly groupBy: string[];
  /**
  * How to group the returned results. Do not use this option with the table-type widget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#group_by_list CustomWidget#group_by_list}
  */
  readonly groupByList?: string[];
  /**
  * Number of items returned in query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#limit CustomWidget#limit}
  */
  readonly limit?: number;
  /**
  * How the returned items are ordered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#order_by CustomWidget#order_by}
  */
  readonly orderBy?: string[];
  /**
  * Discovery query that the widget will use for its data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#query CustomWidget#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#start_at_index CustomWidget#start_at_index}
  */
  readonly startAtIndex?: number;
}

export function customWidgetExtraParamsSettingsRequestParamsToTerraform(struct?: CustomWidgetExtraParamsSettingsRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_pagination: cdktf.booleanToTerraform(struct!.enablePagination),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_by_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByList),
    limit: cdktf.numberToTerraform(struct!.limit),
    order_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orderBy),
    query: cdktf.stringToTerraform(struct!.query),
    start_at_index: cdktf.numberToTerraform(struct!.startAtIndex),
  }
}


export function customWidgetExtraParamsSettingsRequestParamsToHclTerraform(struct?: CustomWidgetExtraParamsSettingsRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_pagination: {
      value: cdktf.booleanToHclTerraform(struct!.enablePagination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_by_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orderBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_at_index: {
      value: cdktf.numberToHclTerraform(struct!.startAtIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomWidgetExtraParamsSettingsRequestParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomWidgetExtraParamsSettingsRequestParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePagination !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePagination = this._enablePagination;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._groupByList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByList = this._groupByList;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._startAtIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAtIndex = this._startAtIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomWidgetExtraParamsSettingsRequestParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePagination = undefined;
      this._groupBy = undefined;
      this._groupByList = undefined;
      this._limit = undefined;
      this._orderBy = undefined;
      this._query = undefined;
      this._startAtIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePagination = value.enablePagination;
      this._groupBy = value.groupBy;
      this._groupByList = value.groupByList;
      this._limit = value.limit;
      this._orderBy = value.orderBy;
      this._query = value.query;
      this._startAtIndex = value.startAtIndex;
    }
  }

  // enable_pagination - computed: false, optional: true, required: false
  private _enablePagination?: boolean | cdktf.IResolvable; 
  public get enablePagination() {
    return this.getBooleanAttribute('enable_pagination');
  }
  public set enablePagination(value: boolean | cdktf.IResolvable) {
    this._enablePagination = value;
  }
  public resetEnablePagination() {
    this._enablePagination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePaginationInput() {
    return this._enablePagination;
  }

  // group_by - computed: false, optional: false, required: true
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // group_by_list - computed: false, optional: true, required: false
  private _groupByList?: string[]; 
  public get groupByList() {
    return this.getListAttribute('group_by_list');
  }
  public set groupByList(value: string[]) {
    this._groupByList = value;
  }
  public resetGroupByList() {
    this._groupByList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByListInput() {
    return this._groupByList;
  }

  // limit - computed: false, optional: true, required: false
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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string[]; 
  public get orderBy() {
    return this.getListAttribute('order_by');
  }
  public set orderBy(value: string[]) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
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

  // start_at_index - computed: false, optional: true, required: false
  private _startAtIndex?: number; 
  public get startAtIndex() {
    return this.getNumberAttribute('start_at_index');
  }
  public set startAtIndex(value: number) {
    this._startAtIndex = value;
  }
  public resetStartAtIndex() {
    this._startAtIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtIndexInput() {
    return this._startAtIndex;
  }
}
export interface CustomWidgetExtraParamsSettings {
  /**
  * Columns of the table. Required for table-type widgets. Not supported for donut-type widgets. First column to appear in the list will be the first column in the table widget; same thing for the next column in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#columns CustomWidget#columns}
  */
  readonly columns?: string[];
  /**
  * The name and type are also required here for grouping. This field is only required for donut-type widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#field CustomWidget#field}
  */
  readonly field?: CustomWidgetExtraParamsSettingsField;
  /**
  * These settings define the query and the grouping for the widget. For inventory-based queries, a common setting is to set 'group_by' to 'Type' and 'group_by_list' to 'CloudAccount.Name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#request_params CustomWidget#request_params}
  */
  readonly requestParams: CustomWidgetExtraParamsSettingsRequestParams;
}

export function customWidgetExtraParamsSettingsToTerraform(struct?: CustomWidgetExtraParamsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    field: customWidgetExtraParamsSettingsFieldToTerraform(struct!.field),
    request_params: customWidgetExtraParamsSettingsRequestParamsToTerraform(struct!.requestParams),
  }
}


export function customWidgetExtraParamsSettingsToHclTerraform(struct?: CustomWidgetExtraParamsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field: {
      value: customWidgetExtraParamsSettingsFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomWidgetExtraParamsSettingsField",
    },
    request_params: {
      value: customWidgetExtraParamsSettingsRequestParamsToHclTerraform(struct!.requestParams),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomWidgetExtraParamsSettingsRequestParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomWidgetExtraParamsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomWidgetExtraParamsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._requestParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestParams = this._requestParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomWidgetExtraParamsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._field.internalValue = undefined;
      this._requestParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._field.internalValue = value.field;
      this._requestParams.internalValue = value.requestParams;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
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

  // field - computed: false, optional: true, required: false
  private _field = new CustomWidgetExtraParamsSettingsFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: CustomWidgetExtraParamsSettingsField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // request_params - computed: false, optional: false, required: true
  private _requestParams = new CustomWidgetExtraParamsSettingsRequestParamsOutputReference(this, "request_params");
  public get requestParams() {
    return this._requestParams;
  }
  public putRequestParams(value: CustomWidgetExtraParamsSettingsRequestParams) {
    this._requestParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParamsInput() {
    return this._requestParams.internalValue;
  }
}
export interface CustomWidgetExtraParams {
  /**
  * Default size of the widget. Possible values are sm (small), md (medium), or lg (large).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#default_size CustomWidget#default_size}
  */
  readonly defaultSize: string;
  /**
  * Custom widget description (the text that appears in the info bubble).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#description CustomWidget#description}
  */
  readonly description: string;
  /**
  * When no objects are returned by the widget's underlying Discovery query, the widget would present this message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#empty_state_message CustomWidget#empty_state_message}
  */
  readonly emptyStateMessage: string;
  /**
  * Should be set to true for a widget you are creating for the first time in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#is_new CustomWidget#is_new}
  */
  readonly isNew: boolean | cdktf.IResolvable;
  /**
  * These are the settings for the custom widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#settings CustomWidget#settings}
  */
  readonly settings: CustomWidgetExtraParamsSettings;
  /**
  * Custom widget subtitle that will be presented in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#subtitle CustomWidget#subtitle}
  */
  readonly subtitle: string;
  /**
  * Type of custom widget to create. Valid values are `donut` and `table`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#type CustomWidget#type}
  */
  readonly type: string;
}

export function customWidgetExtraParamsToTerraform(struct?: CustomWidgetExtraParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_size: cdktf.stringToTerraform(struct!.defaultSize),
    description: cdktf.stringToTerraform(struct!.description),
    empty_state_message: cdktf.stringToTerraform(struct!.emptyStateMessage),
    is_new: cdktf.booleanToTerraform(struct!.isNew),
    settings: customWidgetExtraParamsSettingsToTerraform(struct!.settings),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function customWidgetExtraParamsToHclTerraform(struct?: CustomWidgetExtraParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_size: {
      value: cdktf.stringToHclTerraform(struct!.defaultSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_state_message: {
      value: cdktf.stringToHclTerraform(struct!.emptyStateMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_new: {
      value: cdktf.booleanToHclTerraform(struct!.isNew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: customWidgetExtraParamsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomWidgetExtraParamsSettings",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
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

export class CustomWidgetExtraParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomWidgetExtraParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSize = this._defaultSize;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._emptyStateMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyStateMessage = this._emptyStateMessage;
    }
    if (this._isNew !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNew = this._isNew;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomWidgetExtraParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSize = undefined;
      this._description = undefined;
      this._emptyStateMessage = undefined;
      this._isNew = undefined;
      this._settings.internalValue = undefined;
      this._subtitle = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSize = value.defaultSize;
      this._description = value.description;
      this._emptyStateMessage = value.emptyStateMessage;
      this._isNew = value.isNew;
      this._settings.internalValue = value.settings;
      this._subtitle = value.subtitle;
      this._type = value.type;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // default_size - computed: false, optional: false, required: true
  private _defaultSize?: string; 
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }
  public set defaultSize(value: string) {
    this._defaultSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSizeInput() {
    return this._defaultSize;
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

  // empty_state_message - computed: false, optional: false, required: true
  private _emptyStateMessage?: string; 
  public get emptyStateMessage() {
    return this.getStringAttribute('empty_state_message');
  }
  public set emptyStateMessage(value: string) {
    this._emptyStateMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyStateMessageInput() {
    return this._emptyStateMessage;
  }

  // is_new - computed: false, optional: false, required: true
  private _isNew?: boolean | cdktf.IResolvable; 
  public get isNew() {
    return this.getBooleanAttribute('is_new');
  }
  public set isNew(value: boolean | cdktf.IResolvable) {
    this._isNew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewInput() {
    return this._isNew;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new CustomWidgetExtraParamsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CustomWidgetExtraParamsSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // subtitle - computed: false, optional: false, required: true
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
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

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget orcasecurity_custom_widget}
*/
export class CustomWidget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_custom_widget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomWidget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomWidget to import
  * @param importFromId The id of the existing CustomWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomWidget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_custom_widget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/custom_widget orcasecurity_custom_widget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomWidgetConfig
  */
  public constructor(scope: Construct, id: string, config: CustomWidgetConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_custom_widget',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.23',
        providerVersionConstraint: '0.0.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extraParams.internalValue = config.extraParams;
    this._name = config.name;
    this._organizationLevel = config.organizationLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_params - computed: false, optional: false, required: true
  private _extraParams = new CustomWidgetExtraParamsOutputReference(this, "extra_params");
  public get extraParams() {
    return this._extraParams;
  }
  public putExtraParams(value: CustomWidgetExtraParams) {
    this._extraParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization_level - computed: false, optional: false, required: true
  private _organizationLevel?: boolean | cdktf.IResolvable; 
  public get organizationLevel() {
    return this.getBooleanAttribute('organization_level');
  }
  public set organizationLevel(value: boolean | cdktf.IResolvable) {
    this._organizationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationLevelInput() {
    return this._organizationLevel;
  }

  // view_type - computed: true, optional: false, required: false
  public get viewType() {
    return this.getStringAttribute('view_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extra_params: customWidgetExtraParamsToTerraform(this._extraParams.internalValue),
      name: cdktf.stringToTerraform(this._name),
      organization_level: cdktf.booleanToTerraform(this._organizationLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_params: {
        value: customWidgetExtraParamsToHclTerraform(this._extraParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomWidgetExtraParams",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_level: {
        value: cdktf.booleanToHclTerraform(this._organizationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
