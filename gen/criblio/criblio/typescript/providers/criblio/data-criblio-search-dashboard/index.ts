// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/search_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioSearchDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique ID to GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/search_dashboard#id DataCriblioSearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCriblioSearchDashboardElementsDashboardElementConfig {
}

export function dataCriblioSearchDashboardElementsDashboardElementConfigToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementConfigToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // markdown - computed: true, optional: false, required: false
  public get markdown() {
    return this.getStringAttribute('markdown');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementLayout {
}

export function dataCriblioSearchDashboardElementsDashboardElementLayoutToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementLayoutToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementLayout | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementSearch {
}

export function dataCriblioSearchDashboardElementsDashboardElementSearchToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementSearchToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // local_id - computed: true, optional: false, required: false
  public get localId() {
    return this.getStringAttribute('local_id');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementTitleAction {
}

export function dataCriblioSearchDashboardElementsDashboardElementTitleActionToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementTitleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementTitleActionToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementTitleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementTitleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementTitleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementTitleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // open_in_new_tab - computed: true, optional: false, required: false
  public get openInNewTab() {
    return this.getBooleanAttribute('open_in_new_tab');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElement {
}

export function dataCriblioSearchDashboardElementsDashboardElementToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCriblioSearchDashboardElementsDashboardElementConfigOutputReference(this, "config");
  public get config() {
    return this._config;
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

  // layout - computed: true, optional: false, required: false
  private _layout = new DataCriblioSearchDashboardElementsDashboardElementLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }

  // search - computed: true, optional: false, required: false
  private _search = new DataCriblioSearchDashboardElementsDashboardElementSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }

  // title_action - computed: true, optional: false, required: false
  private _titleAction = new DataCriblioSearchDashboardElementsDashboardElementTitleActionOutputReference(this, "title_action");
  public get titleAction() {
    return this._titleAction;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // variant - computed: true, optional: false, required: false
  public get variant() {
    return this.getStringAttribute('variant');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earliest - computed: true, optional: false, required: false
  private _earliest = new DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValue {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  private _defaultValue = new DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputConfig {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputConfigToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputConfigToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  private _defaultValue = new DataCriblioSearchDashboardElementsDashboardElementInputConfigDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementInputLayout {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputLayoutToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputLayoutToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputLayout | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInline {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earliest - computed: true, optional: false, required: false
  private _earliest = new DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestOutputReference(this, "latest");
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySaved {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySavedToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySaved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySavedToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySaved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySavedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySaved | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySaved | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValues {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValuesToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValuesToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValues | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementInputSearch {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputSearchToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputSearchToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // search_query_inline - computed: true, optional: false, required: false
  private _searchQueryInline = new DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryInlineOutputReference(this, "search_query_inline");
  public get searchQueryInline() {
    return this._searchQueryInline;
  }

  // search_query_saved - computed: true, optional: false, required: false
  private _searchQuerySaved = new DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQuerySavedOutputReference(this, "search_query_saved");
  public get searchQuerySaved() {
    return this._searchQuerySaved;
  }

  // search_query_values - computed: true, optional: false, required: false
  private _searchQueryValues = new DataCriblioSearchDashboardElementsDashboardElementInputSearchSearchQueryValuesOutputReference(this, "search_query_values");
  public get searchQueryValues() {
    return this._searchQueryValues;
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementInputTitleAction {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputTitleActionToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputTitleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputTitleActionToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInputTitleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputTitleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInputTitleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInputTitleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // open_in_new_tab - computed: true, optional: false, required: false
  public get openInNewTab() {
    return this.getBooleanAttribute('open_in_new_tab');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementInput {
}

export function dataCriblioSearchDashboardElementsDashboardElementInputToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementInputToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCriblioSearchDashboardElementsDashboardElementInputConfigOutputReference(this, "config");
  public get config() {
    return this._config;
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

  // input_id - computed: true, optional: false, required: false
  public get inputId() {
    return this.getStringAttribute('input_id');
  }

  // layout - computed: true, optional: false, required: false
  private _layout = new DataCriblioSearchDashboardElementsDashboardElementInputLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }

  // search - computed: true, optional: false, required: false
  private _search = new DataCriblioSearchDashboardElementsDashboardElementInputSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // title_action - computed: true, optional: false, required: false
  private _titleAction = new DataCriblioSearchDashboardElementsDashboardElementInputTitleActionOutputReference(this, "title_action");
  public get titleAction() {
    return this._titleAction;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationLayout {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationLayoutToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationLayoutToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationLayout | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earliest - computed: true, optional: false, required: false
  private _earliest = new DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestOutputReference(this, "latest");
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
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues | undefined) {
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
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationSearch {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationSearchToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // search_query_inline - computed: true, optional: false, required: false
  private _searchQueryInline = new DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineOutputReference(this, "search_query_inline");
  public get searchQueryInline() {
    return this._searchQueryInline;
  }

  // search_query_saved - computed: true, optional: false, required: false
  private _searchQuerySaved = new DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedOutputReference(this, "search_query_saved");
  public get searchQuerySaved() {
    return this._searchQuerySaved;
  }

  // search_query_values - computed: true, optional: false, required: false
  private _searchQueryValues = new DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesOutputReference(this, "search_query_values");
  public get searchQueryValues() {
    return this._searchQueryValues;
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementVisualizationTitleAction {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationTitleActionToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationTitleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationTitleActionToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualizationTitleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationTitleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualizationTitleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualizationTitleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // open_in_new_tab - computed: true, optional: false, required: false
  public get openInNewTab() {
    return this.getBooleanAttribute('open_in_new_tab');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataCriblioSearchDashboardElementsDashboardElementVisualization {
}

export function dataCriblioSearchDashboardElementsDashboardElementVisualizationToTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardElementsDashboardElementVisualizationToHclTerraform(struct?: DataCriblioSearchDashboardElementsDashboardElementVisualization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardElementsDashboardElementVisualizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardElementsDashboardElementVisualization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardElementsDashboardElementVisualization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new cdktf.StringMap(this, "config");
  public get config() {
    return this._config;
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

  // layout - computed: true, optional: false, required: false
  private _layout = new DataCriblioSearchDashboardElementsDashboardElementVisualizationLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }

  // search - computed: true, optional: false, required: false
  private _search = new DataCriblioSearchDashboardElementsDashboardElementVisualizationSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // title_action - computed: true, optional: false, required: false
  private _titleAction = new DataCriblioSearchDashboardElementsDashboardElementVisualizationTitleActionOutputReference(this, "title_action");
  public get titleAction() {
    return this._titleAction;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // dashboard_element - computed: true, optional: false, required: false
  private _dashboardElement = new DataCriblioSearchDashboardElementsDashboardElementOutputReference(this, "dashboard_element");
  public get dashboardElement() {
    return this._dashboardElement;
  }

  // dashboard_element_input - computed: true, optional: false, required: false
  private _dashboardElementInput = new DataCriblioSearchDashboardElementsDashboardElementInputOutputReference(this, "dashboard_element_input");
  public get dashboardElementInput() {
    return this._dashboardElementInput;
  }

  // dashboard_element_visualization - computed: true, optional: false, required: false
  private _dashboardElementVisualization = new DataCriblioSearchDashboardElementsDashboardElementVisualizationOutputReference(this, "dashboard_element_visualization");
  public get dashboardElementVisualization() {
    return this._dashboardElementVisualization;
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
export interface DataCriblioSearchDashboardGroupsAction {
}

export function dataCriblioSearchDashboardGroupsActionToTerraform(struct?: DataCriblioSearchDashboardGroupsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardGroupsActionToHclTerraform(struct?: DataCriblioSearchDashboardGroupsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardGroupsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioSearchDashboardGroupsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardGroupsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // params - computed: true, optional: false, required: false
  private _params = new cdktf.StringMap(this, "params");
  public get params() {
    return this._params;
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}
export interface DataCriblioSearchDashboardGroups {
}

export function dataCriblioSearchDashboardGroupsToTerraform(struct?: DataCriblioSearchDashboardGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioSearchDashboardGroupsToHclTerraform(struct?: DataCriblioSearchDashboardGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioSearchDashboardGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCriblioSearchDashboardGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioSearchDashboardGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataCriblioSearchDashboardGroupsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // collapsed - computed: true, optional: false, required: false
  public get collapsed() {
    return this.getBooleanAttribute('collapsed');
  }

  // input_id - computed: true, optional: false, required: false
  public get inputId() {
    return this.getStringAttribute('input_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataCriblioSearchDashboardGroupsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCriblioSearchDashboardGroupsOutputReference {
    return new DataCriblioSearchDashboardGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
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
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/search_dashboard criblio_search_dashboard}
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
  * @param importFromId The id of the existing DataCriblioSearchDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/search_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioSearchDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/search_dashboard criblio_search_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioSearchDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioSearchDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_search_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataCriblioSearchDashboardElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataCriblioSearchDashboardGroupsMap(this, "groups");
  public get groups() {
    return this._groups;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // refresh_rate - computed: true, optional: false, required: false
  public get refreshRate() {
    return this.getNumberAttribute('refresh_rate');
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
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
