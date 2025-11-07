// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#id Reports#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#parameters Reports#parameters}
  */
  readonly parameters: ReportsParameters;
}
export interface ReportsItemExecutions {
}

export function reportsItemExecutionsToTerraform(struct?: ReportsItemExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportsItemExecutionsToHclTerraform(struct?: ReportsItemExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportsItemExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsItemExecutions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsItemExecutions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.getListAttribute('errors');
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // process_status - computed: true, optional: false, required: false
  public get processStatus() {
    return this.getStringAttribute('process_status');
  }

  // request_status - computed: true, optional: false, required: false
  public get requestStatus() {
    return this.getStringAttribute('request_status');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getListAttribute('warnings');
  }
}

export class ReportsItemExecutionsList extends cdktf.ComplexList {

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
  public get(index: number): ReportsItemExecutionsOutputReference {
    return new ReportsItemExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsItemViewFieldGroupsFields {
}

export function reportsItemViewFieldGroupsFieldsToTerraform(struct?: ReportsItemViewFieldGroupsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportsItemViewFieldGroupsFieldsToHclTerraform(struct?: ReportsItemViewFieldGroupsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportsItemViewFieldGroupsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsItemViewFieldGroupsFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsItemViewFieldGroupsFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ReportsItemViewFieldGroupsFieldsList extends cdktf.ComplexList {

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
  public get(index: number): ReportsItemViewFieldGroupsFieldsOutputReference {
    return new ReportsItemViewFieldGroupsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsItemViewFieldGroups {
}

export function reportsItemViewFieldGroupsToTerraform(struct?: ReportsItemViewFieldGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportsItemViewFieldGroupsToHclTerraform(struct?: ReportsItemViewFieldGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportsItemViewFieldGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsItemViewFieldGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsItemViewFieldGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_group_display_name - computed: true, optional: false, required: false
  public get fieldGroupDisplayName() {
    return this.getStringAttribute('field_group_display_name');
  }

  // field_group_name - computed: true, optional: false, required: false
  public get fieldGroupName() {
    return this.getStringAttribute('field_group_name');
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new ReportsItemViewFieldGroupsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
}

export class ReportsItemViewFieldGroupsList extends cdktf.ComplexList {

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
  public get(index: number): ReportsItemViewFieldGroupsOutputReference {
    return new ReportsItemViewFieldGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsItemViewFilters {
}

export function reportsItemViewFiltersToTerraform(struct?: ReportsItemViewFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportsItemViewFiltersToHclTerraform(struct?: ReportsItemViewFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportsItemViewFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsItemViewFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsItemViewFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class ReportsItemViewFiltersList extends cdktf.ComplexList {

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
  public get(index: number): ReportsItemViewFiltersOutputReference {
    return new ReportsItemViewFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsItemViewFormat {
}

export function reportsItemViewFormatToTerraform(struct?: ReportsItemViewFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportsItemViewFormatToHclTerraform(struct?: ReportsItemViewFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportsItemViewFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsItemViewFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsItemViewFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // format_type - computed: true, optional: false, required: false
  public get formatType() {
    return this.getStringAttribute('format_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ReportsItemViewFormatList extends cdktf.ComplexList {

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
  public get(index: number): ReportsItemViewFormatOutputReference {
    return new ReportsItemViewFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsItemView {
}

export function reportsItemViewToTerraform(struct?: ReportsItemView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportsItemViewToHclTerraform(struct?: ReportsItemView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportsItemViewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsItemView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsItemView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // field_groups - computed: true, optional: false, required: false
  private _fieldGroups = new ReportsItemViewFieldGroupsList(this, "field_groups", false);
  public get fieldGroups() {
    return this._fieldGroups;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new ReportsItemViewFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // format - computed: true, optional: false, required: false
  private _format = new ReportsItemViewFormatList(this, "format", false);
  public get format() {
    return this._format;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // view_id - computed: true, optional: false, required: false
  public get viewId() {
    return this.getStringAttribute('view_id');
  }

  // view_info - computed: true, optional: false, required: false
  public get viewInfo() {
    return this.getStringAttribute('view_info');
  }
}

export class ReportsItemViewList extends cdktf.ComplexList {

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
  public get(index: number): ReportsItemViewOutputReference {
    return new ReportsItemViewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsItem {
}

export function reportsItemToTerraform(struct?: ReportsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportsItemToHclTerraform(struct?: ReportsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_category - computed: true, optional: false, required: false
  public get dataCategory() {
    return this.getStringAttribute('data_category');
  }

  // deliveries - computed: true, optional: false, required: false
  public get deliveries() {
    return this.getListAttribute('deliveries');
  }

  // execution_count - computed: true, optional: false, required: false
  public get executionCount() {
    return this.getNumberAttribute('execution_count');
  }

  // executions - computed: true, optional: false, required: false
  private _executions = new ReportsItemExecutionsList(this, "executions", false);
  public get executions() {
    return this._executions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // report_id - computed: true, optional: false, required: false
  public get reportId() {
    return this.getStringAttribute('report_id');
  }

  // report_was_executed - computed: true, optional: false, required: false
  public get reportWasExecuted() {
    return this.getStringAttribute('report_was_executed');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getListAttribute('schedule');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // view - computed: true, optional: false, required: false
  private _view = new ReportsItemViewList(this, "view", false);
  public get view() {
    return this._view;
  }

  // view_group_id - computed: true, optional: false, required: false
  public get viewGroupId() {
    return this.getStringAttribute('view_group_id');
  }

  // view_group_version - computed: true, optional: false, required: false
  public get viewGroupVersion() {
    return this.getStringAttribute('view_group_version');
  }
}

export class ReportsItemList extends cdktf.ComplexList {

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
  public get(index: number): ReportsItemOutputReference {
    return new ReportsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsParametersViewFieldGroupsFields {
  /**
  * field label/displayname
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#display_name Reports#display_name}
  */
  readonly displayName?: string;
  /**
  * field name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#name Reports#name}
  */
  readonly name?: string;
}

export function reportsParametersViewFieldGroupsFieldsToTerraform(struct?: ReportsParametersViewFieldGroupsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function reportsParametersViewFieldGroupsFieldsToHclTerraform(struct?: ReportsParametersViewFieldGroupsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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

export class ReportsParametersViewFieldGroupsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsParametersViewFieldGroupsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsParametersViewFieldGroupsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class ReportsParametersViewFieldGroupsFieldsList extends cdktf.ComplexList {
  public internalValue? : ReportsParametersViewFieldGroupsFields[] | cdktf.IResolvable

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
  public get(index: number): ReportsParametersViewFieldGroupsFieldsOutputReference {
    return new ReportsParametersViewFieldGroupsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsParametersViewFieldGroups {
  /**
  * Field group label/displayname for user
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#field_group_display_name Reports#field_group_display_name}
  */
  readonly fieldGroupDisplayName?: string;
  /**
  * Field group name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#field_group_name Reports#field_group_name}
  */
  readonly fieldGroupName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#fields Reports#fields}
  */
  readonly fields?: ReportsParametersViewFieldGroupsFields[] | cdktf.IResolvable;
}

export function reportsParametersViewFieldGroupsToTerraform(struct?: ReportsParametersViewFieldGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_group_display_name: cdktf.stringToTerraform(struct!.fieldGroupDisplayName),
    field_group_name: cdktf.stringToTerraform(struct!.fieldGroupName),
    fields: cdktf.listMapper(reportsParametersViewFieldGroupsFieldsToTerraform, true)(struct!.fields),
  }
}


export function reportsParametersViewFieldGroupsToHclTerraform(struct?: ReportsParametersViewFieldGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_group_display_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldGroupDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_group_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(reportsParametersViewFieldGroupsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "ReportsParametersViewFieldGroupsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportsParametersViewFieldGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsParametersViewFieldGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldGroupDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldGroupDisplayName = this._fieldGroupDisplayName;
    }
    if (this._fieldGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldGroupName = this._fieldGroupName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsParametersViewFieldGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldGroupDisplayName = undefined;
      this._fieldGroupName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldGroupDisplayName = value.fieldGroupDisplayName;
      this._fieldGroupName = value.fieldGroupName;
      this._fields.internalValue = value.fields;
    }
  }

  // field_group_display_name - computed: false, optional: true, required: false
  private _fieldGroupDisplayName?: string; 
  public get fieldGroupDisplayName() {
    return this.getStringAttribute('field_group_display_name');
  }
  public set fieldGroupDisplayName(value: string) {
    this._fieldGroupDisplayName = value;
  }
  public resetFieldGroupDisplayName() {
    this._fieldGroupDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldGroupDisplayNameInput() {
    return this._fieldGroupDisplayName;
  }

  // field_group_name - computed: false, optional: true, required: false
  private _fieldGroupName?: string; 
  public get fieldGroupName() {
    return this.getStringAttribute('field_group_name');
  }
  public set fieldGroupName(value: string) {
    this._fieldGroupName = value;
  }
  public resetFieldGroupName() {
    this._fieldGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldGroupNameInput() {
    return this._fieldGroupName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new ReportsParametersViewFieldGroupsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: ReportsParametersViewFieldGroupsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class ReportsParametersViewFieldGroupsList extends cdktf.ComplexList {
  public internalValue? : ReportsParametersViewFieldGroups[] | cdktf.IResolvable

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
  public get(index: number): ReportsParametersViewFieldGroupsOutputReference {
    return new ReportsParametersViewFieldGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsParametersViewFilters {
  /**
  * filter label/displayname
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#display_name Reports#display_name}
  */
  readonly displayName?: string;
  /**
  * filter name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#name Reports#name}
  */
  readonly name?: string;
  /**
  * filter type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#type Reports#type}
  */
  readonly type?: string;
  /**
  * value of filter. data type is based on the filter type. Use the filter definitions from the view to fetch the options for a filter.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#value Reports#value}
  */
  readonly value?: string[];
}

export function reportsParametersViewFiltersToTerraform(struct?: ReportsParametersViewFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function reportsParametersViewFiltersToHclTerraform(struct?: ReportsParametersViewFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportsParametersViewFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportsParametersViewFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsParametersViewFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class ReportsParametersViewFiltersList extends cdktf.ComplexList {
  public internalValue? : ReportsParametersViewFilters[] | cdktf.IResolvable

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
  public get(index: number): ReportsParametersViewFiltersOutputReference {
    return new ReportsParametersViewFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportsParametersViewFormat {
  /**
  * format type of report
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#format_type Reports#format_type}
  */
  readonly formatType?: string;
  /**
  * format name of report
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#name Reports#name}
  */
  readonly name?: string;
}

export function reportsParametersViewFormatToTerraform(struct?: ReportsParametersViewFormatOutputReference | ReportsParametersViewFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format_type: cdktf.stringToTerraform(struct!.formatType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function reportsParametersViewFormatToHclTerraform(struct?: ReportsParametersViewFormatOutputReference | ReportsParametersViewFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
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

export class ReportsParametersViewFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportsParametersViewFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsParametersViewFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formatType = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formatType = value.formatType;
      this._name = value.name;
    }
  }

  // format_type - computed: false, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
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
}
export interface ReportsParametersView {
  /**
  * view name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#name Reports#name}
  */
  readonly name?: string;
  /**
  * view Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#view_id Reports#view_id}
  */
  readonly viewId?: string;
  /**
  * field_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#field_groups Reports#field_groups}
  */
  readonly fieldGroups?: ReportsParametersViewFieldGroups[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#filters Reports#filters}
  */
  readonly filters?: ReportsParametersViewFilters[] | cdktf.IResolvable;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#format Reports#format}
  */
  readonly format?: ReportsParametersViewFormat;
}

export function reportsParametersViewToTerraform(struct?: ReportsParametersViewOutputReference | ReportsParametersView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    view_id: cdktf.stringToTerraform(struct!.viewId),
    field_groups: cdktf.listMapper(reportsParametersViewFieldGroupsToTerraform, true)(struct!.fieldGroups),
    filters: cdktf.listMapper(reportsParametersViewFiltersToTerraform, true)(struct!.filters),
    format: reportsParametersViewFormatToTerraform(struct!.format),
  }
}


export function reportsParametersViewToHclTerraform(struct?: ReportsParametersViewOutputReference | ReportsParametersView): any {
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
    view_id: {
      value: cdktf.stringToHclTerraform(struct!.viewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_groups: {
      value: cdktf.listMapperHcl(reportsParametersViewFieldGroupsToHclTerraform, true)(struct!.fieldGroups),
      isBlock: true,
      type: "list",
      storageClassType: "ReportsParametersViewFieldGroupsList",
    },
    filters: {
      value: cdktf.listMapperHcl(reportsParametersViewFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "ReportsParametersViewFiltersList",
    },
    format: {
      value: reportsParametersViewFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "list",
      storageClassType: "ReportsParametersViewFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportsParametersViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportsParametersView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._viewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewId = this._viewId;
    }
    if (this._fieldGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldGroups = this._fieldGroups?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsParametersView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._viewId = undefined;
      this._fieldGroups.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._format.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._viewId = value.viewId;
      this._fieldGroups.internalValue = value.fieldGroups;
      this._filters.internalValue = value.filters;
      this._format.internalValue = value.format;
    }
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

  // view_id - computed: false, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }

  // field_groups - computed: false, optional: true, required: false
  private _fieldGroups = new ReportsParametersViewFieldGroupsList(this, "field_groups", false);
  public get fieldGroups() {
    return this._fieldGroups;
  }
  public putFieldGroups(value: ReportsParametersViewFieldGroups[] | cdktf.IResolvable) {
    this._fieldGroups.internalValue = value;
  }
  public resetFieldGroups() {
    this._fieldGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldGroupsInput() {
    return this._fieldGroups.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ReportsParametersViewFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ReportsParametersViewFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new ReportsParametersViewFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: ReportsParametersViewFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }
}
export interface ReportsParameters {
  /**
  * Array of available delivery channels
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#deliveries Reports#deliveries}
  */
  readonly deliveries?: string[];
  /**
  * report name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#name Reports#name}
  */
  readonly name?: string;
  /**
  * reportId path parameter. reportId of report
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#report_id Reports#report_id}
  */
  readonly reportId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#schedule Reports#schedule}
  */
  readonly schedule?: string[];
  /**
  * array of tags for report
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#tags Reports#tags}
  */
  readonly tags?: string[];
  /**
  * viewGroupId of the viewgroup for the report
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#view_group_id Reports#view_group_id}
  */
  readonly viewGroupId?: string;
  /**
  * version of viewgroup for the report
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#view_group_version Reports#view_group_version}
  */
  readonly viewGroupVersion?: string;
  /**
  * view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#view Reports#view}
  */
  readonly view?: ReportsParametersView;
}

export function reportsParametersToTerraform(struct?: ReportsParametersOutputReference | ReportsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deliveries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deliveries),
    name: cdktf.stringToTerraform(struct!.name),
    report_id: cdktf.stringToTerraform(struct!.reportId),
    schedule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schedule),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    view_group_id: cdktf.stringToTerraform(struct!.viewGroupId),
    view_group_version: cdktf.stringToTerraform(struct!.viewGroupVersion),
    view: reportsParametersViewToTerraform(struct!.view),
  }
}


export function reportsParametersToHclTerraform(struct?: ReportsParametersOutputReference | ReportsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deliveries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deliveries),
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
    report_id: {
      value: cdktf.stringToHclTerraform(struct!.reportId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schedule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    view_group_id: {
      value: cdktf.stringToHclTerraform(struct!.viewGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_group_version: {
      value: cdktf.stringToHclTerraform(struct!.viewGroupVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: reportsParametersViewToHclTerraform(struct!.view),
      isBlock: true,
      type: "list",
      storageClassType: "ReportsParametersViewList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveries !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveries = this._deliveries;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reportId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportId = this._reportId;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._viewGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewGroupId = this._viewGroupId;
    }
    if (this._viewGroupVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewGroupVersion = this._viewGroupVersion;
    }
    if (this._view?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveries = undefined;
      this._name = undefined;
      this._reportId = undefined;
      this._schedule = undefined;
      this._tags = undefined;
      this._viewGroupId = undefined;
      this._viewGroupVersion = undefined;
      this._view.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveries = value.deliveries;
      this._name = value.name;
      this._reportId = value.reportId;
      this._schedule = value.schedule;
      this._tags = value.tags;
      this._viewGroupId = value.viewGroupId;
      this._viewGroupVersion = value.viewGroupVersion;
      this._view.internalValue = value.view;
    }
  }

  // deliveries - computed: false, optional: true, required: false
  private _deliveries?: string[]; 
  public get deliveries() {
    return this.getListAttribute('deliveries');
  }
  public set deliveries(value: string[]) {
    this._deliveries = value;
  }
  public resetDeliveries() {
    this._deliveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveriesInput() {
    return this._deliveries;
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

  // report_id - computed: false, optional: false, required: true
  private _reportId?: string; 
  public get reportId() {
    return this.getStringAttribute('report_id');
  }
  public set reportId(value: string) {
    this._reportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportIdInput() {
    return this._reportId;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string[]; 
  public get schedule() {
    return this.getListAttribute('schedule');
  }
  public set schedule(value: string[]) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // view_group_id - computed: false, optional: true, required: false
  private _viewGroupId?: string; 
  public get viewGroupId() {
    return this.getStringAttribute('view_group_id');
  }
  public set viewGroupId(value: string) {
    this._viewGroupId = value;
  }
  public resetViewGroupId() {
    this._viewGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewGroupIdInput() {
    return this._viewGroupId;
  }

  // view_group_version - computed: false, optional: true, required: false
  private _viewGroupVersion?: string; 
  public get viewGroupVersion() {
    return this.getStringAttribute('view_group_version');
  }
  public set viewGroupVersion(value: string) {
    this._viewGroupVersion = value;
  }
  public resetViewGroupVersion() {
    this._viewGroupVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewGroupVersionInput() {
    return this._viewGroupVersion;
  }

  // view - computed: false, optional: true, required: false
  private _view = new ReportsParametersViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: ReportsParametersView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports dnacenter_reports}
*/
export class Reports extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_reports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Reports resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Reports to import
  * @param importFromId The id of the existing Reports that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Reports to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_reports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reports dnacenter_reports} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportsConfig
  */
  public constructor(scope: Construct, id: string, config: ReportsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_reports',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new ReportsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new ReportsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ReportsParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: reportsParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: reportsParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportsParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
