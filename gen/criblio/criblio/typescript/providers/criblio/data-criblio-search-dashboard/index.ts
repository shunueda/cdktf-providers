// https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/search_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioSearchDashboardConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCriblioSearchDashboardElementsElementLayout {
}

export function dataCriblioSearchDashboardElementsElementLayoutToTerraform(struct?: DataCriblioSearchDashboardElementsElementLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementLayoutToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // h - computed: true, optional: false, required: false
  public get h() {
    return this.getNumberAttribute('h');
  }

  // w - computed: true, optional: false, required: false
  public get w() {
    return this.getNumberAttribute('w');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }
}
export interface DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliest {
}

export function dataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliestToTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliestToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatest {
}

export function dataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatestToTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatestToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataCriblioSearchDashboardElementsElementSearchSearchQueryInline {
}

export function dataCriblioSearchDashboardElementsElementSearchSearchQueryInlineToTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementSearchSearchQueryInlineToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementSearchSearchQueryInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementSearchSearchQueryInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earliest - computed: true, optional: false, required: false
  private _earliest = new DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }

  // parent_search_id - computed: true, optional: false, required: false
  public get parentSearchId() {
    return this.getStringAttribute('parent_search_id');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioSearchDashboardElementsElementSearchSearchQuerySaved {
}

export function dataCriblioSearchDashboardElementsElementSearchSearchQuerySavedToTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQuerySaved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementSearchSearchQuerySavedToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQuerySaved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementSearchSearchQuerySavedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementSearchSearchQuerySaved | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementSearchSearchQuerySaved | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_id - computed: true, optional: false, required: false
  public get queryId() {
    return this.getStringAttribute('query_id');
  }

  // run_mode - computed: true, optional: false, required: false
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioSearchDashboardElementsElementSearchSearchQueryValues {
}

export function dataCriblioSearchDashboardElementsElementSearchSearchQueryValuesToTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementSearchSearchQueryValuesToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementSearchSearchQueryValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementSearchSearchQueryValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementSearchSearchQueryValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementSearchSearchQueryValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataCriblioSearchDashboardElementsElementSearch {
}

export function dataCriblioSearchDashboardElementsElementSearchToTerraform(struct?: DataCriblioSearchDashboardElementsElementSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementSearchToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // search_query_inline - computed: true, optional: false, required: false
  private _searchQueryInline = new DataCriblioSearchDashboardElementsElementSearchSearchQueryInlineOutputReference(this, "search_query_inline");
  public get searchQueryInline() {
    return this._searchQueryInline;
  }

  // search_query_saved - computed: true, optional: false, required: false
  private _searchQuerySaved = new DataCriblioSearchDashboardElementsElementSearchSearchQuerySavedOutputReference(this, "search_query_saved");
  public get searchQuerySaved() {
    return this._searchQuerySaved;
  }

  // search_query_values - computed: true, optional: false, required: false
  private _searchQueryValues = new DataCriblioSearchDashboardElementsElementSearchSearchQueryValuesOutputReference(this, "search_query_values");
  public get searchQueryValues() {
    return this._searchQueryValues;
  }
}
export interface DataCriblioSearchDashboardElementsElement {
}

export function dataCriblioSearchDashboardElementsElementToTerraform(struct?: DataCriblioSearchDashboardElementsElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementToHclTerraform(struct?: DataCriblioSearchDashboardElementsElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElement | undefined) {
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

  // empty - computed: true, optional: false, required: false
  public get empty() {
    return this.getBooleanAttribute('empty');
  }

  // hide_panel - computed: true, optional: false, required: false
  public get hidePanel() {
    return this.getBooleanAttribute('hide_panel');
  }

  // horizontal_chart - computed: true, optional: false, required: false
  public get horizontalChart() {
    return this.getBooleanAttribute('horizontal_chart');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // input_id - computed: true, optional: false, required: false
  public get inputId() {
    return this.getStringAttribute('input_id');
  }

  // layout - computed: true, optional: false, required: false
  private _layout = new DataCriblioSearchDashboardElementsElementLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }

  // search - computed: true, optional: false, required: false
  private _search = new DataCriblioSearchDashboardElementsElementSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  private _value = new cdktf.StringMap(this, "value");
  public get value() {
    return this._value;
  }

  // variant - computed: true, optional: false, required: false
  public get variant() {
    return this.getStringAttribute('variant');
  }
}
export interface DataCriblioSearchDashboardElementsElementMarkdownLayout {
}

export function dataCriblioSearchDashboardElementsElementMarkdownLayoutToTerraform(struct?: DataCriblioSearchDashboardElementsElementMarkdownLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementMarkdownLayoutToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementMarkdownLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementMarkdownLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementMarkdownLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementMarkdownLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // h - computed: true, optional: false, required: false
  public get h() {
    return this.getNumberAttribute('h');
  }

  // w - computed: true, optional: false, required: false
  public get w() {
    return this.getNumberAttribute('w');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }
}
export interface DataCriblioSearchDashboardElementsElementMarkdown {
}

export function dataCriblioSearchDashboardElementsElementMarkdownToTerraform(struct?: DataCriblioSearchDashboardElementsElementMarkdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsElementMarkdownToHclTerraform(struct?: DataCriblioSearchDashboardElementsElementMarkdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsElementMarkdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsElementMarkdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsElementMarkdown | undefined) {
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

  // empty - computed: true, optional: false, required: false
  public get empty() {
    return this.getBooleanAttribute('empty');
  }

  // hide_panel - computed: true, optional: false, required: false
  public get hidePanel() {
    return this.getBooleanAttribute('hide_panel');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // layout - computed: true, optional: false, required: false
  private _layout = new DataCriblioSearchDashboardElementsElementMarkdownLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variant - computed: true, optional: false, required: false
  public get variant() {
    return this.getStringAttribute('variant');
  }
}
export interface DataCriblioSearchDashboardElements {
}

export function dataCriblioSearchDashboardElementsToTerraform(struct?: DataCriblioSearchDashboardElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsToHclTerraform(struct?: DataCriblioSearchDashboardElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioSearchDashboardElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element - computed: true, optional: false, required: false
  private _element = new DataCriblioSearchDashboardElementsElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }

  // element_markdown - computed: true, optional: false, required: false
  private _elementMarkdown = new DataCriblioSearchDashboardElementsElementMarkdownOutputReference(this, "element_markdown");
  public get elementMarkdown() {
    return this._elementMarkdown;
  }
}

export class DataCriblioSearchDashboardElementsList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioSearchDashboardElementsOutputReference {
    return new DataCriblioSearchDashboardElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioSearchDashboardScheduleNotifications {
}

export function dataCriblioSearchDashboardScheduleNotificationsToTerraform(struct?: DataCriblioSearchDashboardScheduleNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardScheduleNotificationsToHclTerraform(struct?: DataCriblioSearchDashboardScheduleNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardScheduleNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardScheduleNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardScheduleNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export interface DataCriblioSearchDashboardSchedule {
}

export function dataCriblioSearchDashboardScheduleToTerraform(struct?: DataCriblioSearchDashboardSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardScheduleToHclTerraform(struct?: DataCriblioSearchDashboardSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_schedule - computed: true, optional: false, required: false
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // keep_last_n - computed: true, optional: false, required: false
  public get keepLastN() {
    return this.getNumberAttribute('keep_last_n');
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new DataCriblioSearchDashboardScheduleNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }

  // tz - computed: true, optional: false, required: false
  public get tz() {
    return this.getStringAttribute('tz');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/search_dashboard criblio_search_dashboard}
*/
export class DataCriblioSearchDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_search_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioSearchDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioSearchDashboard to import
  * @param importFromId The id of the existing DataCriblioSearchDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/search_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioSearchDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/search_dashboard criblio_search_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioSearchDashboardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCriblioSearchDashboardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'criblio_search_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.18.21',
        providerVersionConstraint: '1.18.21'
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

  // cache_ttl_seconds - computed: true, optional: false, required: false
  public get cacheTtlSeconds() {
    return this.getNumberAttribute('cache_ttl_seconds');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_created_by - computed: true, optional: false, required: false
  public get displayCreatedBy() {
    return this.getStringAttribute('display_created_by');
  }

  // display_modified_by - computed: true, optional: false, required: false
  public get displayModifiedBy() {
    return this.getStringAttribute('display_modified_by');
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataCriblioSearchDashboardElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getNumberAttribute('modified');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pack_id - computed: true, optional: false, required: false
  public get packId() {
    return this.getStringAttribute('pack_id');
  }

  // refresh_rate - computed: true, optional: false, required: false
  public get refreshRate() {
    return this.getNumberAttribute('refresh_rate');
  }

  // resolved_dataset_ids - computed: true, optional: false, required: false
  public get resolvedDatasetIds() {
    return this.getListAttribute('resolved_dataset_ids');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCriblioSearchDashboardScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
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
