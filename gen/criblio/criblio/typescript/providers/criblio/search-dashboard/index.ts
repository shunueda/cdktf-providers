// https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time to live (TTL) for the dashboard; reset after each use. Leave empty to never expire. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#cache_ttl_seconds SearchDashboard#cache_ttl_seconds}
  */
  readonly cacheTtlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#category SearchDashboard#category}
  */
  readonly category?: string;
  /**
  * Description of the dashboard. Optional. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#description SearchDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#elements SearchDashboard#elements}
  */
  readonly elements: SearchDashboardElements[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#groups SearchDashboard#groups}
  */
  readonly groups?: { [key: string]: SearchDashboardGroups } | cdktf.IResolvable;
  /**
  * Unique ID to PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#id SearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#name SearchDashboard#name}
  */
  readonly name: string;
  /**
  * Auto-refresh rate in milliseconds. Optional. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#refresh_rate SearchDashboard#refresh_rate}
  */
  readonly refreshRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#schedule SearchDashboard#schedule}
  */
  readonly schedule?: SearchDashboardSchedule;
}
export interface SearchDashboardElementsDashboardElementConfig {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#markdown SearchDashboard#markdown}
  */
  readonly markdown?: string;
}

export function searchDashboardElementsDashboardElementConfigToTerraform(struct?: SearchDashboardElementsDashboardElementConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    markdown: cdktf.stringToTerraform(struct!.markdown),
  }
}


export function searchDashboardElementsDashboardElementConfigToHclTerraform(struct?: SearchDashboardElementsDashboardElementConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    markdown: {
      value: cdktf.stringToHclTerraform(struct!.markdown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._markdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.markdown = this._markdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._markdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._markdown = value.markdown;
    }
  }

  // markdown - computed: true, optional: true, required: false
  private _markdown?: string; 
  public get markdown() {
    return this.getStringAttribute('markdown');
  }
  public set markdown(value: string) {
    this._markdown = value;
  }
  public resetMarkdown() {
    this._markdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markdownInput() {
    return this._markdown;
  }
}
export interface SearchDashboardElementsDashboardElementLayout {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#h SearchDashboard#h}
  */
  readonly h?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#w SearchDashboard#w}
  */
  readonly w?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#x SearchDashboard#x}
  */
  readonly x?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#y SearchDashboard#y}
  */
  readonly y?: number;
}

export function searchDashboardElementsDashboardElementLayoutToTerraform(struct?: SearchDashboardElementsDashboardElementLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    w: cdktf.numberToTerraform(struct!.w),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function searchDashboardElementsDashboardElementLayoutToHclTerraform(struct?: SearchDashboardElementsDashboardElementLayout | cdktf.IResolvable): any {
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

export class SearchDashboardElementsDashboardElementLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
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

  public set internalValue(value: SearchDashboardElementsDashboardElementLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h = undefined;
      this._w = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h = value.h;
      this._w = value.w;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // h - computed: true, optional: true, required: false
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  public resetH() {
    this._h = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // w - computed: true, optional: true, required: false
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  public resetW() {
    this._w = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }

  // x - computed: true, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: true, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface SearchDashboardElementsDashboardElementSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#alias SearchDashboard#alias}
  */
  readonly alias?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#local_id SearchDashboard#local_id}
  */
  readonly localId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#query SearchDashboard#query}
  */
  readonly query?: string;
}

export function searchDashboardElementsDashboardElementSearchToTerraform(struct?: SearchDashboardElementsDashboardElementSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    local_id: cdktf.stringToTerraform(struct!.localId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function searchDashboardElementsDashboardElementSearchToHclTerraform(struct?: SearchDashboardElementsDashboardElementSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_id: {
      value: cdktf.stringToHclTerraform(struct!.localId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._localId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._localId = value.localId;
      this._query = value.query;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // local_id - computed: true, optional: true, required: false
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface SearchDashboardElementsDashboardElementTitleAction {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#label SearchDashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#open_in_new_tab SearchDashboard#open_in_new_tab}
  */
  readonly openInNewTab?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#url SearchDashboard#url}
  */
  readonly url?: string;
}

export function searchDashboardElementsDashboardElementTitleActionToTerraform(struct?: SearchDashboardElementsDashboardElementTitleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    open_in_new_tab: cdktf.booleanToTerraform(struct!.openInNewTab),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function searchDashboardElementsDashboardElementTitleActionToHclTerraform(struct?: SearchDashboardElementsDashboardElementTitleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_in_new_tab: {
      value: cdktf.booleanToHclTerraform(struct!.openInNewTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementTitleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementTitleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._openInNewTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.openInNewTab = this._openInNewTab;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementTitleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._openInNewTab = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._openInNewTab = value.openInNewTab;
      this._url = value.url;
    }
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // open_in_new_tab - computed: true, optional: true, required: false
  private _openInNewTab?: boolean | cdktf.IResolvable; 
  public get openInNewTab() {
    return this.getBooleanAttribute('open_in_new_tab');
  }
  public set openInNewTab(value: boolean | cdktf.IResolvable) {
    this._openInNewTab = value;
  }
  public resetOpenInNewTab() {
    this._openInNewTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInNewTabInput() {
    return this._openInNewTab;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SearchDashboardElementsDashboardElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#config SearchDashboard#config}
  */
  readonly config?: SearchDashboardElementsDashboardElementConfig;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#hide_panel SearchDashboard#hide_panel}
  */
  readonly hidePanel?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#horizontal_chart SearchDashboard#horizontal_chart}
  */
  readonly horizontalChart?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#id SearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#layout SearchDashboard#layout}
  */
  readonly layout?: SearchDashboardElementsDashboardElementLayout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search SearchDashboard#search}
  */
  readonly search?: SearchDashboardElementsDashboardElementSearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#title_action SearchDashboard#title_action}
  */
  readonly titleAction?: SearchDashboardElementsDashboardElementTitleAction;
  /**
  * Not Null; must be one of ["markdown.copilot", "markdown.default"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
  /**
  * Not Null; must be "markdown"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#variant SearchDashboard#variant}
  */
  readonly variant?: string;
}

export function searchDashboardElementsDashboardElementToTerraform(struct?: SearchDashboardElementsDashboardElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: searchDashboardElementsDashboardElementConfigToTerraform(struct!.config),
    hide_panel: cdktf.booleanToTerraform(struct!.hidePanel),
    horizontal_chart: cdktf.booleanToTerraform(struct!.horizontalChart),
    id: cdktf.stringToTerraform(struct!.id),
    layout: searchDashboardElementsDashboardElementLayoutToTerraform(struct!.layout),
    search: searchDashboardElementsDashboardElementSearchToTerraform(struct!.search),
    title_action: searchDashboardElementsDashboardElementTitleActionToTerraform(struct!.titleAction),
    type: cdktf.stringToTerraform(struct!.type),
    variant: cdktf.stringToTerraform(struct!.variant),
  }
}


export function searchDashboardElementsDashboardElementToHclTerraform(struct?: SearchDashboardElementsDashboardElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: searchDashboardElementsDashboardElementConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementConfig",
    },
    hide_panel: {
      value: cdktf.booleanToHclTerraform(struct!.hidePanel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    horizontal_chart: {
      value: cdktf.booleanToHclTerraform(struct!.horizontalChart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: searchDashboardElementsDashboardElementLayoutToHclTerraform(struct!.layout),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementLayout",
    },
    search: {
      value: searchDashboardElementsDashboardElementSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementSearch",
    },
    title_action: {
      value: searchDashboardElementsDashboardElementTitleActionToHclTerraform(struct!.titleAction),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementTitleAction",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant: {
      value: cdktf.stringToHclTerraform(struct!.variant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._hidePanel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePanel = this._hidePanel;
    }
    if (this._horizontalChart !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalChart = this._horizontalChart;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._titleAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleAction = this._titleAction?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._hidePanel = undefined;
      this._horizontalChart = undefined;
      this._id = undefined;
      this._layout.internalValue = undefined;
      this._search.internalValue = undefined;
      this._titleAction.internalValue = undefined;
      this._type = undefined;
      this._variant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._hidePanel = value.hidePanel;
      this._horizontalChart = value.horizontalChart;
      this._id = value.id;
      this._layout.internalValue = value.layout;
      this._search.internalValue = value.search;
      this._titleAction.internalValue = value.titleAction;
      this._type = value.type;
      this._variant = value.variant;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new SearchDashboardElementsDashboardElementConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SearchDashboardElementsDashboardElementConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // hide_panel - computed: true, optional: true, required: false
  private _hidePanel?: boolean | cdktf.IResolvable; 
  public get hidePanel() {
    return this.getBooleanAttribute('hide_panel');
  }
  public set hidePanel(value: boolean | cdktf.IResolvable) {
    this._hidePanel = value;
  }
  public resetHidePanel() {
    this._hidePanel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePanelInput() {
    return this._hidePanel;
  }

  // horizontal_chart - computed: true, optional: true, required: false
  private _horizontalChart?: boolean | cdktf.IResolvable; 
  public get horizontalChart() {
    return this.getBooleanAttribute('horizontal_chart');
  }
  public set horizontalChart(value: boolean | cdktf.IResolvable) {
    this._horizontalChart = value;
  }
  public resetHorizontalChart() {
    this._horizontalChart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalChartInput() {
    return this._horizontalChart;
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

  // layout - computed: true, optional: true, required: false
  private _layout = new SearchDashboardElementsDashboardElementLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: SearchDashboardElementsDashboardElementLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // search - computed: true, optional: true, required: false
  private _search = new SearchDashboardElementsDashboardElementSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: SearchDashboardElementsDashboardElementSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // title_action - computed: true, optional: true, required: false
  private _titleAction = new SearchDashboardElementsDashboardElementTitleActionOutputReference(this, "title_action");
  public get titleAction() {
    return this._titleAction;
  }
  public putTitleAction(value: SearchDashboardElementsDashboardElementTitleAction) {
    this._titleAction.internalValue = value;
  }
  public resetTitleAction() {
    this._titleAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleActionInput() {
    return this._titleAction.internalValue;
  }

  // type - computed: true, optional: true, required: false
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

  // variant - computed: true, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }
}
export interface SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestToTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._str = value.str;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestToTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._str = value.str;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#earliest SearchDashboard#earliest}
  */
  readonly earliest?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#latest SearchDashboard#latest}
  */
  readonly latest?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#timezone SearchDashboard#timezone}
  */
  readonly timezone?: string;
}

export function searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueToTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestToTerraform(struct!.earliest),
    latest: searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestToTerraform(struct!.latest),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestToHclTerraform(struct!.earliest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest",
    },
    latest: {
      value: searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestToHclTerraform(struct!.latest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest?.internalValue;
    }
    if (this._latest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest?.internalValue;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest.internalValue = undefined;
      this._latest.internalValue = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest.internalValue = value.earliest;
      this._latest.internalValue = value.latest;
      this._timezone = value.timezone;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest = new SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }
  public putEarliest(value: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueEarliest) {
    this._earliest.internalValue = value;
  }
  public resetEarliest() {
    this._earliest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest.internalValue;
  }

  // latest - computed: true, optional: true, required: false
  private _latest = new SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }
  public putLatest(value: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueLatest) {
    this._latest.internalValue = value;
  }
  public resetLatest() {
    this._latest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest.internalValue;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface SearchDashboardElementsDashboardElementInputConfigDefaultValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#default_value SearchDashboard#default_value}
  */
  readonly defaultValue?: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsDashboardElementInputConfigDefaultValueToTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueToTerraform(struct!.defaultValue),
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsDashboardElementInputConfigDefaultValueToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputConfigDefaultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: searchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputConfigDefaultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputConfigDefaultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputConfigDefaultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = undefined;
      this._number = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = value.defaultValue;
      this._number = value.number;
      this._str = value.str;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue = new SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: SearchDashboardElementsDashboardElementInputConfigDefaultValueDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface SearchDashboardElementsDashboardElementInputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#default_value SearchDashboard#default_value}
  */
  readonly defaultValue?: SearchDashboardElementsDashboardElementInputConfigDefaultValue;
}

export function searchDashboardElementsDashboardElementInputConfigToTerraform(struct?: SearchDashboardElementsDashboardElementInputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: searchDashboardElementsDashboardElementInputConfigDefaultValueToTerraform(struct!.defaultValue),
  }
}


export function searchDashboardElementsDashboardElementInputConfigToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: searchDashboardElementsDashboardElementInputConfigDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputConfigDefaultValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = value.defaultValue;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue = new SearchDashboardElementsDashboardElementInputConfigDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: SearchDashboardElementsDashboardElementInputConfigDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }
}
export interface SearchDashboardElementsDashboardElementInputLayout {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#h SearchDashboard#h}
  */
  readonly h?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#w SearchDashboard#w}
  */
  readonly w?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#x SearchDashboard#x}
  */
  readonly x?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#y SearchDashboard#y}
  */
  readonly y?: number;
}

export function searchDashboardElementsDashboardElementInputLayoutToTerraform(struct?: SearchDashboardElementsDashboardElementInputLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    w: cdktf.numberToTerraform(struct!.w),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function searchDashboardElementsDashboardElementInputLayoutToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputLayout | cdktf.IResolvable): any {
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

export class SearchDashboardElementsDashboardElementInputLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
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

  public set internalValue(value: SearchDashboardElementsDashboardElementInputLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h = undefined;
      this._w = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h = value.h;
      this._w = value.w;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // h - computed: true, optional: true, required: false
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  public resetH() {
    this._h = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // w - computed: true, optional: true, required: false
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  public resetW() {
    this._w = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }

  // x - computed: true, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: true, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestToTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._str = value.str;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestToTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._str = value.str;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface SearchDashboardElementsDashboardElementInputSearchSearchQueryInline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#earliest SearchDashboard#earliest}
  */
  readonly earliest?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#latest SearchDashboard#latest}
  */
  readonly latest?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest;
  /**
  * Parent search ID for the search query. Optional. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#parent_search_id SearchDashboard#parent_search_id}
  */
  readonly parentSearchId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#query SearchDashboard#query}
  */
  readonly query?: string;
  /**
  * Sample rate for the search query. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#sample_rate SearchDashboard#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#timezone SearchDashboard#timezone}
  */
  readonly timezone?: string;
  /**
  * Not Null; must be "inline"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsDashboardElementInputSearchSearchQueryInlineToTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: searchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestToTerraform(struct!.earliest),
    latest: searchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestToTerraform(struct!.latest),
    parent_search_id: cdktf.stringToTerraform(struct!.parentSearchId),
    query: cdktf.stringToTerraform(struct!.query),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDashboardElementsDashboardElementInputSearchSearchQueryInlineToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: searchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestToHclTerraform(struct!.earliest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest",
    },
    latest: {
      value: searchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestToHclTerraform(struct!.latest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest",
    },
    parent_search_id: {
      value: cdktf.stringToHclTerraform(struct!.parentSearchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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

export class SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputSearchSearchQueryInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest?.internalValue;
    }
    if (this._latest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest?.internalValue;
    }
    if (this._parentSearchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentSearchId = this._parentSearchId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest.internalValue = undefined;
      this._latest.internalValue = undefined;
      this._parentSearchId = undefined;
      this._query = undefined;
      this._sampleRate = undefined;
      this._timezone = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest.internalValue = value.earliest;
      this._latest.internalValue = value.latest;
      this._parentSearchId = value.parentSearchId;
      this._query = value.query;
      this._sampleRate = value.sampleRate;
      this._timezone = value.timezone;
      this._type = value.type;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest = new SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }
  public putEarliest(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineEarliest) {
    this._earliest.internalValue = value;
  }
  public resetEarliest() {
    this._earliest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest.internalValue;
  }

  // latest - computed: true, optional: true, required: false
  private _latest = new SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }
  public putLatest(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineLatest) {
    this._latest.internalValue = value;
  }
  public resetLatest() {
    this._latest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest.internalValue;
  }

  // parent_search_id - computed: true, optional: true, required: false
  private _parentSearchId?: string; 
  public get parentSearchId() {
    return this.getStringAttribute('parent_search_id');
  }
  public set parentSearchId(value: string) {
    this._parentSearchId = value;
  }
  public resetParentSearchId() {
    this._parentSearchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentSearchIdInput() {
    return this._parentSearchId;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#query SearchDashboard#query}
  */
  readonly query?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#query_id SearchDashboard#query_id}
  */
  readonly queryId?: string;
  /**
  * must be one of ["newSearch", "lastRun"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#run_mode SearchDashboard#run_mode}
  */
  readonly runMode?: string;
  /**
  * Not Null; must be "saved"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsDashboardElementInputSearchSearchQuerySavedToTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    query_id: cdktf.stringToTerraform(struct!.queryId),
    run_mode: cdktf.stringToTerraform(struct!.runMode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDashboardElementsDashboardElementInputSearchSearchQuerySavedToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_id: {
      value: cdktf.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_mode: {
      value: cdktf.stringToHclTerraform(struct!.runMode),
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

export class SearchDashboardElementsDashboardElementInputSearchSearchQuerySavedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._runMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runMode = this._runMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._queryId = undefined;
      this._runMode = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._queryId = value.queryId;
      this._runMode = value.runMode;
      this._type = value.type;
    }
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_id - computed: true, optional: true, required: false
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  public resetQueryId() {
    this._queryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // run_mode - computed: true, optional: true, required: false
  private _runMode?: string; 
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }
  public set runMode(value: string) {
    this._runMode = value;
  }
  public resetRunMode() {
    this._runMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDashboardElementsDashboardElementInputSearchSearchQueryValues {
  /**
  * Not Null; must be "values"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#values SearchDashboard#values}
  */
  readonly values?: string[];
}

export function searchDashboardElementsDashboardElementInputSearchSearchQueryValuesToTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function searchDashboardElementsDashboardElementInputSearchSearchQueryValuesToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputSearchSearchQueryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class SearchDashboardElementsDashboardElementInputSearchSearchQueryValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputSearchSearchQueryValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // type - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SearchDashboardElementsDashboardElementInputSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search_query_inline SearchDashboard#search_query_inline}
  */
  readonly searchQueryInline?: SearchDashboardElementsDashboardElementInputSearchSearchQueryInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search_query_saved SearchDashboard#search_query_saved}
  */
  readonly searchQuerySaved?: SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search_query_values SearchDashboard#search_query_values}
  */
  readonly searchQueryValues?: SearchDashboardElementsDashboardElementInputSearchSearchQueryValues;
}

export function searchDashboardElementsDashboardElementInputSearchToTerraform(struct?: SearchDashboardElementsDashboardElementInputSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_query_inline: searchDashboardElementsDashboardElementInputSearchSearchQueryInlineToTerraform(struct!.searchQueryInline),
    search_query_saved: searchDashboardElementsDashboardElementInputSearchSearchQuerySavedToTerraform(struct!.searchQuerySaved),
    search_query_values: searchDashboardElementsDashboardElementInputSearchSearchQueryValuesToTerraform(struct!.searchQueryValues),
  }
}


export function searchDashboardElementsDashboardElementInputSearchToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_query_inline: {
      value: searchDashboardElementsDashboardElementInputSearchSearchQueryInlineToHclTerraform(struct!.searchQueryInline),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputSearchSearchQueryInline",
    },
    search_query_saved: {
      value: searchDashboardElementsDashboardElementInputSearchSearchQuerySavedToHclTerraform(struct!.searchQuerySaved),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved",
    },
    search_query_values: {
      value: searchDashboardElementsDashboardElementInputSearchSearchQueryValuesToHclTerraform(struct!.searchQueryValues),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputSearchSearchQueryValues",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchQueryInline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQueryInline = this._searchQueryInline?.internalValue;
    }
    if (this._searchQuerySaved?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuerySaved = this._searchQuerySaved?.internalValue;
    }
    if (this._searchQueryValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQueryValues = this._searchQueryValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._searchQueryInline.internalValue = undefined;
      this._searchQuerySaved.internalValue = undefined;
      this._searchQueryValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._searchQueryInline.internalValue = value.searchQueryInline;
      this._searchQuerySaved.internalValue = value.searchQuerySaved;
      this._searchQueryValues.internalValue = value.searchQueryValues;
    }
  }

  // search_query_inline - computed: true, optional: true, required: false
  private _searchQueryInline = new SearchDashboardElementsDashboardElementInputSearchSearchQueryInlineOutputReference(this, "search_query_inline");
  public get searchQueryInline() {
    return this._searchQueryInline;
  }
  public putSearchQueryInline(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryInline) {
    this._searchQueryInline.internalValue = value;
  }
  public resetSearchQueryInline() {
    this._searchQueryInline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInlineInput() {
    return this._searchQueryInline.internalValue;
  }

  // search_query_saved - computed: true, optional: true, required: false
  private _searchQuerySaved = new SearchDashboardElementsDashboardElementInputSearchSearchQuerySavedOutputReference(this, "search_query_saved");
  public get searchQuerySaved() {
    return this._searchQuerySaved;
  }
  public putSearchQuerySaved(value: SearchDashboardElementsDashboardElementInputSearchSearchQuerySaved) {
    this._searchQuerySaved.internalValue = value;
  }
  public resetSearchQuerySaved() {
    this._searchQuerySaved.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQuerySavedInput() {
    return this._searchQuerySaved.internalValue;
  }

  // search_query_values - computed: true, optional: true, required: false
  private _searchQueryValues = new SearchDashboardElementsDashboardElementInputSearchSearchQueryValuesOutputReference(this, "search_query_values");
  public get searchQueryValues() {
    return this._searchQueryValues;
  }
  public putSearchQueryValues(value: SearchDashboardElementsDashboardElementInputSearchSearchQueryValues) {
    this._searchQueryValues.internalValue = value;
  }
  public resetSearchQueryValues() {
    this._searchQueryValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryValuesInput() {
    return this._searchQueryValues.internalValue;
  }
}
export interface SearchDashboardElementsDashboardElementInputTitleAction {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#label SearchDashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#open_in_new_tab SearchDashboard#open_in_new_tab}
  */
  readonly openInNewTab?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#url SearchDashboard#url}
  */
  readonly url?: string;
}

export function searchDashboardElementsDashboardElementInputTitleActionToTerraform(struct?: SearchDashboardElementsDashboardElementInputTitleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    open_in_new_tab: cdktf.booleanToTerraform(struct!.openInNewTab),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function searchDashboardElementsDashboardElementInputTitleActionToHclTerraform(struct?: SearchDashboardElementsDashboardElementInputTitleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_in_new_tab: {
      value: cdktf.booleanToHclTerraform(struct!.openInNewTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementInputTitleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInputTitleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._openInNewTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.openInNewTab = this._openInNewTab;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInputTitleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._openInNewTab = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._openInNewTab = value.openInNewTab;
      this._url = value.url;
    }
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // open_in_new_tab - computed: true, optional: true, required: false
  private _openInNewTab?: boolean | cdktf.IResolvable; 
  public get openInNewTab() {
    return this.getBooleanAttribute('open_in_new_tab');
  }
  public set openInNewTab(value: boolean | cdktf.IResolvable) {
    this._openInNewTab = value;
  }
  public resetOpenInNewTab() {
    this._openInNewTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInNewTabInput() {
    return this._openInNewTab;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SearchDashboardElementsDashboardElementInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#config SearchDashboard#config}
  */
  readonly config?: SearchDashboardElementsDashboardElementInputConfig;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#hide_panel SearchDashboard#hide_panel}
  */
  readonly hidePanel?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#horizontal_chart SearchDashboard#horizontal_chart}
  */
  readonly horizontalChart?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#id SearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#input_id SearchDashboard#input_id}
  */
  readonly inputId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#layout SearchDashboard#layout}
  */
  readonly layout?: SearchDashboardElementsDashboardElementInputLayout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search SearchDashboard#search}
  */
  readonly search?: SearchDashboardElementsDashboardElementInputSearch;
  /**
  * Title of the element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#title SearchDashboard#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#title_action SearchDashboard#title_action}
  */
  readonly titleAction?: SearchDashboardElementsDashboardElementInputTitleAction;
  /**
  * Not Null; must be one of ["input.timerange", "input.dropdown", "input.text", "input.number"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsDashboardElementInputToTerraform(struct?: SearchDashboardElementsDashboardElementInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: searchDashboardElementsDashboardElementInputConfigToTerraform(struct!.config),
    hide_panel: cdktf.booleanToTerraform(struct!.hidePanel),
    horizontal_chart: cdktf.booleanToTerraform(struct!.horizontalChart),
    id: cdktf.stringToTerraform(struct!.id),
    input_id: cdktf.stringToTerraform(struct!.inputId),
    layout: searchDashboardElementsDashboardElementInputLayoutToTerraform(struct!.layout),
    search: searchDashboardElementsDashboardElementInputSearchToTerraform(struct!.search),
    title: cdktf.stringToTerraform(struct!.title),
    title_action: searchDashboardElementsDashboardElementInputTitleActionToTerraform(struct!.titleAction),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDashboardElementsDashboardElementInputToHclTerraform(struct?: SearchDashboardElementsDashboardElementInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: searchDashboardElementsDashboardElementInputConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputConfig",
    },
    hide_panel: {
      value: cdktf.booleanToHclTerraform(struct!.hidePanel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    horizontal_chart: {
      value: cdktf.booleanToHclTerraform(struct!.horizontalChart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_id: {
      value: cdktf.stringToHclTerraform(struct!.inputId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: searchDashboardElementsDashboardElementInputLayoutToHclTerraform(struct!.layout),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputLayout",
    },
    search: {
      value: searchDashboardElementsDashboardElementInputSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputSearch",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_action: {
      value: searchDashboardElementsDashboardElementInputTitleActionToHclTerraform(struct!.titleAction),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInputTitleAction",
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

export class SearchDashboardElementsDashboardElementInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._hidePanel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePanel = this._hidePanel;
    }
    if (this._horizontalChart !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalChart = this._horizontalChart;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputId = this._inputId;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleAction = this._titleAction?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._hidePanel = undefined;
      this._horizontalChart = undefined;
      this._id = undefined;
      this._inputId = undefined;
      this._layout.internalValue = undefined;
      this._search.internalValue = undefined;
      this._title = undefined;
      this._titleAction.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._hidePanel = value.hidePanel;
      this._horizontalChart = value.horizontalChart;
      this._id = value.id;
      this._inputId = value.inputId;
      this._layout.internalValue = value.layout;
      this._search.internalValue = value.search;
      this._title = value.title;
      this._titleAction.internalValue = value.titleAction;
      this._type = value.type;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new SearchDashboardElementsDashboardElementInputConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SearchDashboardElementsDashboardElementInputConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // hide_panel - computed: true, optional: true, required: false
  private _hidePanel?: boolean | cdktf.IResolvable; 
  public get hidePanel() {
    return this.getBooleanAttribute('hide_panel');
  }
  public set hidePanel(value: boolean | cdktf.IResolvable) {
    this._hidePanel = value;
  }
  public resetHidePanel() {
    this._hidePanel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePanelInput() {
    return this._hidePanel;
  }

  // horizontal_chart - computed: true, optional: true, required: false
  private _horizontalChart?: boolean | cdktf.IResolvable; 
  public get horizontalChart() {
    return this.getBooleanAttribute('horizontal_chart');
  }
  public set horizontalChart(value: boolean | cdktf.IResolvable) {
    this._horizontalChart = value;
  }
  public resetHorizontalChart() {
    this._horizontalChart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalChartInput() {
    return this._horizontalChart;
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

  // input_id - computed: true, optional: true, required: false
  private _inputId?: string; 
  public get inputId() {
    return this.getStringAttribute('input_id');
  }
  public set inputId(value: string) {
    this._inputId = value;
  }
  public resetInputId() {
    this._inputId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputIdInput() {
    return this._inputId;
  }

  // layout - computed: true, optional: true, required: false
  private _layout = new SearchDashboardElementsDashboardElementInputLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: SearchDashboardElementsDashboardElementInputLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // search - computed: true, optional: true, required: false
  private _search = new SearchDashboardElementsDashboardElementInputSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: SearchDashboardElementsDashboardElementInputSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_action - computed: true, optional: true, required: false
  private _titleAction = new SearchDashboardElementsDashboardElementInputTitleActionOutputReference(this, "title_action");
  public get titleAction() {
    return this._titleAction;
  }
  public putTitleAction(value: SearchDashboardElementsDashboardElementInputTitleAction) {
    this._titleAction.internalValue = value;
  }
  public resetTitleAction() {
    this._titleAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleActionInput() {
    return this._titleAction.internalValue;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDashboardElementsDashboardElementVisualizationLayout {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#h SearchDashboard#h}
  */
  readonly h?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#w SearchDashboard#w}
  */
  readonly w?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#x SearchDashboard#x}
  */
  readonly x?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#y SearchDashboard#y}
  */
  readonly y?: number;
}

export function searchDashboardElementsDashboardElementVisualizationLayoutToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    w: cdktf.numberToTerraform(struct!.w),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function searchDashboardElementsDashboardElementVisualizationLayoutToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationLayout | cdktf.IResolvable): any {
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

export class SearchDashboardElementsDashboardElementVisualizationLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
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

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h = undefined;
      this._w = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h = value.h;
      this._w = value.w;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // h - computed: true, optional: true, required: false
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  public resetH() {
    this._h = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // w - computed: true, optional: true, required: false
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  public resetW() {
    this._w = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }

  // x - computed: true, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: true, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._str = value.str;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._str = value.str;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#earliest SearchDashboard#earliest}
  */
  readonly earliest?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#latest SearchDashboard#latest}
  */
  readonly latest?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest;
  /**
  * Parent search ID for the search query. Optional. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#parent_search_id SearchDashboard#parent_search_id}
  */
  readonly parentSearchId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#query SearchDashboard#query}
  */
  readonly query?: string;
  /**
  * Sample rate for the search query. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#sample_rate SearchDashboard#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#timezone SearchDashboard#timezone}
  */
  readonly timezone?: string;
  /**
  * Not Null; must be "inline"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestToTerraform(struct!.earliest),
    latest: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestToTerraform(struct!.latest),
    parent_search_id: cdktf.stringToTerraform(struct!.parentSearchId),
    query: cdktf.stringToTerraform(struct!.query),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestToHclTerraform(struct!.earliest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest",
    },
    latest: {
      value: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestToHclTerraform(struct!.latest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest",
    },
    parent_search_id: {
      value: cdktf.stringToHclTerraform(struct!.parentSearchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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

export class SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest?.internalValue;
    }
    if (this._latest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest?.internalValue;
    }
    if (this._parentSearchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentSearchId = this._parentSearchId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest.internalValue = undefined;
      this._latest.internalValue = undefined;
      this._parentSearchId = undefined;
      this._query = undefined;
      this._sampleRate = undefined;
      this._timezone = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest.internalValue = value.earliest;
      this._latest.internalValue = value.latest;
      this._parentSearchId = value.parentSearchId;
      this._query = value.query;
      this._sampleRate = value.sampleRate;
      this._timezone = value.timezone;
      this._type = value.type;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest = new SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }
  public putEarliest(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineEarliest) {
    this._earliest.internalValue = value;
  }
  public resetEarliest() {
    this._earliest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest.internalValue;
  }

  // latest - computed: true, optional: true, required: false
  private _latest = new SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }
  public putLatest(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineLatest) {
    this._latest.internalValue = value;
  }
  public resetLatest() {
    this._latest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest.internalValue;
  }

  // parent_search_id - computed: true, optional: true, required: false
  private _parentSearchId?: string; 
  public get parentSearchId() {
    return this.getStringAttribute('parent_search_id');
  }
  public set parentSearchId(value: string) {
    this._parentSearchId = value;
  }
  public resetParentSearchId() {
    this._parentSearchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentSearchIdInput() {
    return this._parentSearchId;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#query SearchDashboard#query}
  */
  readonly query?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#query_id SearchDashboard#query_id}
  */
  readonly queryId?: string;
  /**
  * must be one of ["newSearch", "lastRun"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#run_mode SearchDashboard#run_mode}
  */
  readonly runMode?: string;
  /**
  * Not Null; must be "saved"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    query_id: cdktf.stringToTerraform(struct!.queryId),
    run_mode: cdktf.stringToTerraform(struct!.runMode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_id: {
      value: cdktf.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_mode: {
      value: cdktf.stringToHclTerraform(struct!.runMode),
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

export class SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._runMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runMode = this._runMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._queryId = undefined;
      this._runMode = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._queryId = value.queryId;
      this._runMode = value.runMode;
      this._type = value.type;
    }
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_id - computed: true, optional: true, required: false
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  public resetQueryId() {
    this._queryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // run_mode - computed: true, optional: true, required: false
  private _runMode?: string; 
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }
  public set runMode(value: string) {
    this._runMode = value;
  }
  public resetRunMode() {
    this._runMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues {
  /**
  * Not Null; must be "values"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#values SearchDashboard#values}
  */
  readonly values?: string[];
}

export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function searchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // type - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SearchDashboardElementsDashboardElementVisualizationSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search_query_inline SearchDashboard#search_query_inline}
  */
  readonly searchQueryInline?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search_query_saved SearchDashboard#search_query_saved}
  */
  readonly searchQuerySaved?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search_query_values SearchDashboard#search_query_values}
  */
  readonly searchQueryValues?: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues;
}

export function searchDashboardElementsDashboardElementVisualizationSearchToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_query_inline: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineToTerraform(struct!.searchQueryInline),
    search_query_saved: searchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedToTerraform(struct!.searchQuerySaved),
    search_query_values: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesToTerraform(struct!.searchQueryValues),
  }
}


export function searchDashboardElementsDashboardElementVisualizationSearchToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_query_inline: {
      value: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineToHclTerraform(struct!.searchQueryInline),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline",
    },
    search_query_saved: {
      value: searchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedToHclTerraform(struct!.searchQuerySaved),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved",
    },
    search_query_values: {
      value: searchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesToHclTerraform(struct!.searchQueryValues),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementVisualizationSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchQueryInline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQueryInline = this._searchQueryInline?.internalValue;
    }
    if (this._searchQuerySaved?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuerySaved = this._searchQuerySaved?.internalValue;
    }
    if (this._searchQueryValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQueryValues = this._searchQueryValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._searchQueryInline.internalValue = undefined;
      this._searchQuerySaved.internalValue = undefined;
      this._searchQueryValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._searchQueryInline.internalValue = value.searchQueryInline;
      this._searchQuerySaved.internalValue = value.searchQuerySaved;
      this._searchQueryValues.internalValue = value.searchQueryValues;
    }
  }

  // search_query_inline - computed: true, optional: true, required: false
  private _searchQueryInline = new SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInlineOutputReference(this, "search_query_inline");
  public get searchQueryInline() {
    return this._searchQueryInline;
  }
  public putSearchQueryInline(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryInline) {
    this._searchQueryInline.internalValue = value;
  }
  public resetSearchQueryInline() {
    this._searchQueryInline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInlineInput() {
    return this._searchQueryInline.internalValue;
  }

  // search_query_saved - computed: true, optional: true, required: false
  private _searchQuerySaved = new SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySavedOutputReference(this, "search_query_saved");
  public get searchQuerySaved() {
    return this._searchQuerySaved;
  }
  public putSearchQuerySaved(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQuerySaved) {
    this._searchQuerySaved.internalValue = value;
  }
  public resetSearchQuerySaved() {
    this._searchQuerySaved.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQuerySavedInput() {
    return this._searchQuerySaved.internalValue;
  }

  // search_query_values - computed: true, optional: true, required: false
  private _searchQueryValues = new SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValuesOutputReference(this, "search_query_values");
  public get searchQueryValues() {
    return this._searchQueryValues;
  }
  public putSearchQueryValues(value: SearchDashboardElementsDashboardElementVisualizationSearchSearchQueryValues) {
    this._searchQueryValues.internalValue = value;
  }
  public resetSearchQueryValues() {
    this._searchQueryValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryValuesInput() {
    return this._searchQueryValues.internalValue;
  }
}
export interface SearchDashboardElementsDashboardElementVisualizationTitleAction {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#label SearchDashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#open_in_new_tab SearchDashboard#open_in_new_tab}
  */
  readonly openInNewTab?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#url SearchDashboard#url}
  */
  readonly url?: string;
}

export function searchDashboardElementsDashboardElementVisualizationTitleActionToTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationTitleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    open_in_new_tab: cdktf.booleanToTerraform(struct!.openInNewTab),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function searchDashboardElementsDashboardElementVisualizationTitleActionToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualizationTitleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_in_new_tab: {
      value: cdktf.booleanToHclTerraform(struct!.openInNewTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsDashboardElementVisualizationTitleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualizationTitleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._openInNewTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.openInNewTab = this._openInNewTab;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualizationTitleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._openInNewTab = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._openInNewTab = value.openInNewTab;
      this._url = value.url;
    }
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // open_in_new_tab - computed: true, optional: true, required: false
  private _openInNewTab?: boolean | cdktf.IResolvable; 
  public get openInNewTab() {
    return this.getBooleanAttribute('open_in_new_tab');
  }
  public set openInNewTab(value: boolean | cdktf.IResolvable) {
    this._openInNewTab = value;
  }
  public resetOpenInNewTab() {
    this._openInNewTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInNewTabInput() {
    return this._openInNewTab;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SearchDashboardElementsDashboardElementVisualization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#config SearchDashboard#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#hide_panel SearchDashboard#hide_panel}
  */
  readonly hidePanel?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#horizontal_chart SearchDashboard#horizontal_chart}
  */
  readonly horizontalChart?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#id SearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#layout SearchDashboard#layout}
  */
  readonly layout?: SearchDashboardElementsDashboardElementVisualizationLayout;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#search SearchDashboard#search}
  */
  readonly search?: SearchDashboardElementsDashboardElementVisualizationSearch;
  /**
  * Title of the element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#title SearchDashboard#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#title_action SearchDashboard#title_action}
  */
  readonly titleAction?: SearchDashboardElementsDashboardElementVisualizationTitleAction;
  /**
  * Not Null; must be one of ["chart.area", "chart.column", "chart.funnel", "chart.gauge", "chart.horizontalBar", "chart.line", "chart.map", "chart.pie", "chart.scatter", "counter.single", "list.events", "list.table", "custom.throughputMetrics", "custom.flowMatrix"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsDashboardElementVisualizationToTerraform(struct?: SearchDashboardElementsDashboardElementVisualization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    hide_panel: cdktf.booleanToTerraform(struct!.hidePanel),
    horizontal_chart: cdktf.booleanToTerraform(struct!.horizontalChart),
    id: cdktf.stringToTerraform(struct!.id),
    layout: searchDashboardElementsDashboardElementVisualizationLayoutToTerraform(struct!.layout),
    search: searchDashboardElementsDashboardElementVisualizationSearchToTerraform(struct!.search),
    title: cdktf.stringToTerraform(struct!.title),
    title_action: searchDashboardElementsDashboardElementVisualizationTitleActionToTerraform(struct!.titleAction),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDashboardElementsDashboardElementVisualizationToHclTerraform(struct?: SearchDashboardElementsDashboardElementVisualization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hide_panel: {
      value: cdktf.booleanToHclTerraform(struct!.hidePanel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    horizontal_chart: {
      value: cdktf.booleanToHclTerraform(struct!.horizontalChart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: searchDashboardElementsDashboardElementVisualizationLayoutToHclTerraform(struct!.layout),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationLayout",
    },
    search: {
      value: searchDashboardElementsDashboardElementVisualizationSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationSearch",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_action: {
      value: searchDashboardElementsDashboardElementVisualizationTitleActionToHclTerraform(struct!.titleAction),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualizationTitleAction",
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

export class SearchDashboardElementsDashboardElementVisualizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsDashboardElementVisualization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._hidePanel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePanel = this._hidePanel;
    }
    if (this._horizontalChart !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalChart = this._horizontalChart;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleAction = this._titleAction?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsDashboardElementVisualization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._hidePanel = undefined;
      this._horizontalChart = undefined;
      this._id = undefined;
      this._layout.internalValue = undefined;
      this._search.internalValue = undefined;
      this._title = undefined;
      this._titleAction.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._hidePanel = value.hidePanel;
      this._horizontalChart = value.horizontalChart;
      this._id = value.id;
      this._layout.internalValue = value.layout;
      this._search.internalValue = value.search;
      this._title = value.title;
      this._titleAction.internalValue = value.titleAction;
      this._type = value.type;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // hide_panel - computed: true, optional: true, required: false
  private _hidePanel?: boolean | cdktf.IResolvable; 
  public get hidePanel() {
    return this.getBooleanAttribute('hide_panel');
  }
  public set hidePanel(value: boolean | cdktf.IResolvable) {
    this._hidePanel = value;
  }
  public resetHidePanel() {
    this._hidePanel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePanelInput() {
    return this._hidePanel;
  }

  // horizontal_chart - computed: true, optional: true, required: false
  private _horizontalChart?: boolean | cdktf.IResolvable; 
  public get horizontalChart() {
    return this.getBooleanAttribute('horizontal_chart');
  }
  public set horizontalChart(value: boolean | cdktf.IResolvable) {
    this._horizontalChart = value;
  }
  public resetHorizontalChart() {
    this._horizontalChart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalChartInput() {
    return this._horizontalChart;
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

  // layout - computed: true, optional: true, required: false
  private _layout = new SearchDashboardElementsDashboardElementVisualizationLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: SearchDashboardElementsDashboardElementVisualizationLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // search - computed: true, optional: true, required: false
  private _search = new SearchDashboardElementsDashboardElementVisualizationSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: SearchDashboardElementsDashboardElementVisualizationSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_action - computed: true, optional: true, required: false
  private _titleAction = new SearchDashboardElementsDashboardElementVisualizationTitleActionOutputReference(this, "title_action");
  public get titleAction() {
    return this._titleAction;
  }
  public putTitleAction(value: SearchDashboardElementsDashboardElementVisualizationTitleAction) {
    this._titleAction.internalValue = value;
  }
  public resetTitleAction() {
    this._titleAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleActionInput() {
    return this._titleAction.internalValue;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDashboardElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#dashboard_element SearchDashboard#dashboard_element}
  */
  readonly dashboardElement?: SearchDashboardElementsDashboardElement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#dashboard_element_input SearchDashboard#dashboard_element_input}
  */
  readonly dashboardElementInput?: SearchDashboardElementsDashboardElementInput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#dashboard_element_visualization SearchDashboard#dashboard_element_visualization}
  */
  readonly dashboardElementVisualization?: SearchDashboardElementsDashboardElementVisualization;
}

export function searchDashboardElementsToTerraform(struct?: SearchDashboardElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_element: searchDashboardElementsDashboardElementToTerraform(struct!.dashboardElement),
    dashboard_element_input: searchDashboardElementsDashboardElementInputToTerraform(struct!.dashboardElementInput),
    dashboard_element_visualization: searchDashboardElementsDashboardElementVisualizationToTerraform(struct!.dashboardElementVisualization),
  }
}


export function searchDashboardElementsToHclTerraform(struct?: SearchDashboardElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_element: {
      value: searchDashboardElementsDashboardElementToHclTerraform(struct!.dashboardElement),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElement",
    },
    dashboard_element_input: {
      value: searchDashboardElementsDashboardElementInputToHclTerraform(struct!.dashboardElementInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementInput",
    },
    dashboard_element_visualization: {
      value: searchDashboardElementsDashboardElementVisualizationToHclTerraform(struct!.dashboardElementVisualization),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsDashboardElementVisualization",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDashboardElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardElement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardElement = this._dashboardElement?.internalValue;
    }
    if (this._dashboardElementInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardElementInput = this._dashboardElementInput?.internalValue;
    }
    if (this._dashboardElementVisualization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardElementVisualization = this._dashboardElementVisualization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardElement.internalValue = undefined;
      this._dashboardElementInput.internalValue = undefined;
      this._dashboardElementVisualization.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardElement.internalValue = value.dashboardElement;
      this._dashboardElementInput.internalValue = value.dashboardElementInput;
      this._dashboardElementVisualization.internalValue = value.dashboardElementVisualization;
    }
  }

  // dashboard_element - computed: false, optional: true, required: false
  private _dashboardElement = new SearchDashboardElementsDashboardElementOutputReference(this, "dashboard_element");
  public get dashboardElement() {
    return this._dashboardElement;
  }
  public putDashboardElement(value: SearchDashboardElementsDashboardElement) {
    this._dashboardElement.internalValue = value;
  }
  public resetDashboardElement() {
    this._dashboardElement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardElementTfInput() {
    return this._dashboardElement.internalValue;
  }

  // dashboard_element_input - computed: false, optional: true, required: false
  private _dashboardElementInput = new SearchDashboardElementsDashboardElementInputOutputReference(this, "dashboard_element_input");
  public get dashboardElementInput() {
    return this._dashboardElementInput;
  }
  public putDashboardElementInput(value: SearchDashboardElementsDashboardElementInput) {
    this._dashboardElementInput.internalValue = value;
  }
  public resetDashboardElementInput() {
    this._dashboardElementInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardElementInputInput() {
    return this._dashboardElementInput.internalValue;
  }

  // dashboard_element_visualization - computed: false, optional: true, required: false
  private _dashboardElementVisualization = new SearchDashboardElementsDashboardElementVisualizationOutputReference(this, "dashboard_element_visualization");
  public get dashboardElementVisualization() {
    return this._dashboardElementVisualization;
  }
  public putDashboardElementVisualization(value: SearchDashboardElementsDashboardElementVisualization) {
    this._dashboardElementVisualization.internalValue = value;
  }
  public resetDashboardElementVisualization() {
    this._dashboardElementVisualization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardElementVisualizationInput() {
    return this._dashboardElementVisualization.internalValue;
  }
}

export class SearchDashboardElementsList extends cdktf.ComplexList {
  public internalValue? : SearchDashboardElements[] | cdktf.IResolvable

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
  public get(index: number): SearchDashboardElementsOutputReference {
    return new SearchDashboardElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDashboardGroupsAction {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#label SearchDashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#params SearchDashboard#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#target SearchDashboard#target}
  */
  readonly target?: string;
}

export function searchDashboardGroupsActionToTerraform(struct?: SearchDashboardGroupsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function searchDashboardGroupsActionToHclTerraform(struct?: SearchDashboardGroupsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardGroupsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardGroupsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardGroupsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._params = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._params = value.params;
      this._target = value.target;
    }
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // params - computed: true, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface SearchDashboardGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#action SearchDashboard#action}
  */
  readonly action?: SearchDashboardGroupsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#collapsed SearchDashboard#collapsed}
  */
  readonly collapsed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#input_id SearchDashboard#input_id}
  */
  readonly inputId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#title SearchDashboard#title}
  */
  readonly title?: string;
}

export function searchDashboardGroupsToTerraform(struct?: SearchDashboardGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: searchDashboardGroupsActionToTerraform(struct!.action),
    collapsed: cdktf.booleanToTerraform(struct!.collapsed),
    input_id: cdktf.stringToTerraform(struct!.inputId),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function searchDashboardGroupsToHclTerraform(struct?: SearchDashboardGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: searchDashboardGroupsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardGroupsAction",
    },
    collapsed: {
      value: cdktf.booleanToHclTerraform(struct!.collapsed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_id: {
      value: cdktf.stringToHclTerraform(struct!.inputId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SearchDashboardGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._collapsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.collapsed = this._collapsed;
    }
    if (this._inputId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputId = this._inputId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._collapsed = undefined;
      this._inputId = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._collapsed = value.collapsed;
      this._inputId = value.inputId;
      this._title = value.title;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action = new SearchDashboardGroupsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SearchDashboardGroupsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // collapsed - computed: true, optional: true, required: false
  private _collapsed?: boolean | cdktf.IResolvable; 
  public get collapsed() {
    return this.getBooleanAttribute('collapsed');
  }
  public set collapsed(value: boolean | cdktf.IResolvable) {
    this._collapsed = value;
  }
  public resetCollapsed() {
    this._collapsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collapsedInput() {
    return this._collapsed;
  }

  // input_id - computed: true, optional: true, required: false
  private _inputId?: string; 
  public get inputId() {
    return this.getStringAttribute('input_id');
  }
  public set inputId(value: string) {
    this._inputId = value;
  }
  public resetInputId() {
    this._inputId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputIdInput() {
    return this._inputId;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class SearchDashboardGroupsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SearchDashboardGroups } | cdktf.IResolvable

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
  public get(key: string): SearchDashboardGroupsOutputReference {
    return new SearchDashboardGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SearchDashboardScheduleNotifications {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#disabled SearchDashboard#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function searchDashboardScheduleNotificationsToTerraform(struct?: SearchDashboardScheduleNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function searchDashboardScheduleNotificationsToHclTerraform(struct?: SearchDashboardScheduleNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardScheduleNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardScheduleNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardScheduleNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface SearchDashboardSchedule {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#cron_schedule SearchDashboard#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#enabled SearchDashboard#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#keep_last_n SearchDashboard#keep_last_n}
  */
  readonly keepLastN?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#notifications SearchDashboard#notifications}
  */
  readonly notifications?: SearchDashboardScheduleNotifications;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#tz SearchDashboard#tz}
  */
  readonly tz?: string;
}

export function searchDashboardScheduleToTerraform(struct?: SearchDashboardSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    keep_last_n: cdktf.numberToTerraform(struct!.keepLastN),
    notifications: searchDashboardScheduleNotificationsToTerraform(struct!.notifications),
    tz: cdktf.stringToTerraform(struct!.tz),
  }
}


export function searchDashboardScheduleToHclTerraform(struct?: SearchDashboardSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_last_n: {
      value: cdktf.numberToHclTerraform(struct!.keepLastN),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notifications: {
      value: searchDashboardScheduleNotificationsToHclTerraform(struct!.notifications),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardScheduleNotifications",
    },
    tz: {
      value: cdktf.stringToHclTerraform(struct!.tz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keepLastN !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepLastN = this._keepLastN;
    }
    if (this._notifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications?.internalValue;
    }
    if (this._tz !== undefined) {
      hasAnyValues = true;
      internalValueResult.tz = this._tz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._keepLastN = undefined;
      this._notifications.internalValue = undefined;
      this._tz = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._keepLastN = value.keepLastN;
      this._notifications.internalValue = value.notifications;
      this._tz = value.tz;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // keep_last_n - computed: true, optional: true, required: false
  private _keepLastN?: number; 
  public get keepLastN() {
    return this.getNumberAttribute('keep_last_n');
  }
  public set keepLastN(value: number) {
    this._keepLastN = value;
  }
  public resetKeepLastN() {
    this._keepLastN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLastNInput() {
    return this._keepLastN;
  }

  // notifications - computed: true, optional: true, required: false
  private _notifications = new SearchDashboardScheduleNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: SearchDashboardScheduleNotifications) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // tz - computed: true, optional: true, required: false
  private _tz?: string; 
  public get tz() {
    return this.getStringAttribute('tz');
  }
  public set tz(value: string) {
    this._tz = value;
  }
  public resetTz() {
    this._tz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard criblio_search_dashboard}
*/
export class SearchDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_search_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchDashboard to import
  * @param importFromId The id of the existing SearchDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_dashboard criblio_search_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: SearchDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_search_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.72',
        providerVersionConstraint: '1.20.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheTtlSeconds = config.cacheTtlSeconds;
    this._category = config.category;
    this._description = config.description;
    this._elements.internalValue = config.elements;
    this._groups.internalValue = config.groups;
    this._id = config.id;
    this._name = config.name;
    this._refreshRate = config.refreshRate;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_ttl_seconds - computed: true, optional: true, required: false
  private _cacheTtlSeconds?: number; 
  public get cacheTtlSeconds() {
    return this.getNumberAttribute('cache_ttl_seconds');
  }
  public set cacheTtlSeconds(value: number) {
    this._cacheTtlSeconds = value;
  }
  public resetCacheTtlSeconds() {
    this._cacheTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlSecondsInput() {
    return this._cacheTtlSeconds;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new SearchDashboardElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: SearchDashboardElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }

  // groups - computed: true, optional: true, required: false
  private _groups = new SearchDashboardGroupsMap(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: { [key: string]: SearchDashboardGroups } | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
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

  // refresh_rate - computed: true, optional: true, required: false
  private _refreshRate?: number; 
  public get refreshRate() {
    return this.getNumberAttribute('refresh_rate');
  }
  public set refreshRate(value: number) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new SearchDashboardScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SearchDashboardSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_ttl_seconds: cdktf.numberToTerraform(this._cacheTtlSeconds),
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      elements: cdktf.listMapper(searchDashboardElementsToTerraform, false)(this._elements.internalValue),
      groups: cdktf.hashMapper(searchDashboardGroupsToTerraform)(this._groups.internalValue),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      refresh_rate: cdktf.numberToTerraform(this._refreshRate),
      schedule: searchDashboardScheduleToTerraform(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_ttl_seconds: {
        value: cdktf.numberToHclTerraform(this._cacheTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elements: {
        value: cdktf.listMapperHcl(searchDashboardElementsToHclTerraform, false)(this._elements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SearchDashboardElementsList",
      },
      groups: {
        value: cdktf.hashMapperHcl(searchDashboardGroupsToHclTerraform)(this._groups.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SearchDashboardGroupsMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_rate: {
        value: cdktf.numberToHclTerraform(this._refreshRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: searchDashboardScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDashboardSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
