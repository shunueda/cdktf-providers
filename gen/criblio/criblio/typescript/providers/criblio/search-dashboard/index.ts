// https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#cache_ttl_seconds SearchDashboard#cache_ttl_seconds}
  */
  readonly cacheTtlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#category SearchDashboard#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#created SearchDashboard#created}
  */
  readonly created: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#created_by SearchDashboard#created_by}
  */
  readonly createdBy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#description SearchDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#display_created_by SearchDashboard#display_created_by}
  */
  readonly displayCreatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#display_modified_by SearchDashboard#display_modified_by}
  */
  readonly displayModifiedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#elements SearchDashboard#elements}
  */
  readonly elements: SearchDashboardElements[] | cdktf.IResolvable;
  /**
  * Unique ID to PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#id SearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#modified SearchDashboard#modified}
  */
  readonly modified: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#modified_by SearchDashboard#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#name SearchDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#pack_id SearchDashboard#pack_id}
  */
  readonly packId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#refresh_rate SearchDashboard#refresh_rate}
  */
  readonly refreshRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#resolved_dataset_ids SearchDashboard#resolved_dataset_ids}
  */
  readonly resolvedDatasetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#schedule SearchDashboard#schedule}
  */
  readonly schedule?: SearchDashboardSchedule;
}
export interface SearchDashboardElementsElementLayout {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#h SearchDashboard#h}
  */
  readonly h?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#w SearchDashboard#w}
  */
  readonly w?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#x SearchDashboard#x}
  */
  readonly x?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#y SearchDashboard#y}
  */
  readonly y?: number;
}

export function searchDashboardElementsElementLayoutToTerraform(struct?: SearchDashboardElementsElementLayout | cdktf.IResolvable): any {
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


export function searchDashboardElementsElementLayoutToHclTerraform(struct?: SearchDashboardElementsElementLayout | cdktf.IResolvable): any {
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

export class SearchDashboardElementsElementLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementLayout | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementLayout | cdktf.IResolvable | undefined) {
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
export interface SearchDashboardElementsElementSearchSearchQueryInlineEarliest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsElementSearchSearchQueryInlineEarliestToTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryInlineEarliest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsElementSearchSearchQueryInlineEarliestToHclTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryInlineEarliest | cdktf.IResolvable): any {
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

export class SearchDashboardElementsElementSearchSearchQueryInlineEarliestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementSearchSearchQueryInlineEarliest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementSearchSearchQueryInlineEarliest | cdktf.IResolvable | undefined) {
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
export interface SearchDashboardElementsElementSearchSearchQueryInlineLatest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#number SearchDashboard#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#str SearchDashboard#str}
  */
  readonly str?: string;
}

export function searchDashboardElementsElementSearchSearchQueryInlineLatestToTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryInlineLatest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function searchDashboardElementsElementSearchSearchQueryInlineLatestToHclTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryInlineLatest | cdktf.IResolvable): any {
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

export class SearchDashboardElementsElementSearchSearchQueryInlineLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementSearchSearchQueryInlineLatest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementSearchSearchQueryInlineLatest | cdktf.IResolvable | undefined) {
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
export interface SearchDashboardElementsElementSearchSearchQueryInline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#earliest SearchDashboard#earliest}
  */
  readonly earliest?: SearchDashboardElementsElementSearchSearchQueryInlineEarliest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#latest SearchDashboard#latest}
  */
  readonly latest?: SearchDashboardElementsElementSearchSearchQueryInlineLatest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#parent_search_id SearchDashboard#parent_search_id}
  */
  readonly parentSearchId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#query SearchDashboard#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#sample_rate SearchDashboard#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#timezone SearchDashboard#timezone}
  */
  readonly timezone?: string;
  /**
  * Not Null; must be "inline"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsElementSearchSearchQueryInlineToTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: searchDashboardElementsElementSearchSearchQueryInlineEarliestToTerraform(struct!.earliest),
    latest: searchDashboardElementsElementSearchSearchQueryInlineLatestToTerraform(struct!.latest),
    parent_search_id: cdktf.stringToTerraform(struct!.parentSearchId),
    query: cdktf.stringToTerraform(struct!.query),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDashboardElementsElementSearchSearchQueryInlineToHclTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: searchDashboardElementsElementSearchSearchQueryInlineEarliestToHclTerraform(struct!.earliest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementSearchSearchQueryInlineEarliest",
    },
    latest: {
      value: searchDashboardElementsElementSearchSearchQueryInlineLatestToHclTerraform(struct!.latest),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementSearchSearchQueryInlineLatest",
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

export class SearchDashboardElementsElementSearchSearchQueryInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementSearchSearchQueryInline | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementSearchSearchQueryInline | cdktf.IResolvable | undefined) {
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
  private _earliest = new SearchDashboardElementsElementSearchSearchQueryInlineEarliestOutputReference(this, "earliest");
  public get earliest() {
    return this._earliest;
  }
  public putEarliest(value: SearchDashboardElementsElementSearchSearchQueryInlineEarliest) {
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
  private _latest = new SearchDashboardElementsElementSearchSearchQueryInlineLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }
  public putLatest(value: SearchDashboardElementsElementSearchSearchQueryInlineLatest) {
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
export interface SearchDashboardElementsElementSearchSearchQuerySaved {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#query SearchDashboard#query}
  */
  readonly query?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#query_id SearchDashboard#query_id}
  */
  readonly queryId?: string;
  /**
  * must be one of ["newSearch", "lastRun"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#run_mode SearchDashboard#run_mode}
  */
  readonly runMode?: string;
  /**
  * Not Null; must be "saved"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
}

export function searchDashboardElementsElementSearchSearchQuerySavedToTerraform(struct?: SearchDashboardElementsElementSearchSearchQuerySaved | cdktf.IResolvable): any {
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


export function searchDashboardElementsElementSearchSearchQuerySavedToHclTerraform(struct?: SearchDashboardElementsElementSearchSearchQuerySaved | cdktf.IResolvable): any {
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

export class SearchDashboardElementsElementSearchSearchQuerySavedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementSearchSearchQuerySaved | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementSearchSearchQuerySaved | cdktf.IResolvable | undefined) {
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
export interface SearchDashboardElementsElementSearchSearchQueryValues {
  /**
  * Not Null; must be "values"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#values SearchDashboard#values}
  */
  readonly values?: string[];
}

export function searchDashboardElementsElementSearchSearchQueryValuesToTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function searchDashboardElementsElementSearchSearchQueryValuesToHclTerraform(struct?: SearchDashboardElementsElementSearchSearchQueryValues | cdktf.IResolvable): any {
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

export class SearchDashboardElementsElementSearchSearchQueryValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementSearchSearchQueryValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementSearchSearchQueryValues | cdktf.IResolvable | undefined) {
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
export interface SearchDashboardElementsElementSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#search_query_inline SearchDashboard#search_query_inline}
  */
  readonly searchQueryInline?: SearchDashboardElementsElementSearchSearchQueryInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#search_query_saved SearchDashboard#search_query_saved}
  */
  readonly searchQuerySaved?: SearchDashboardElementsElementSearchSearchQuerySaved;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#search_query_values SearchDashboard#search_query_values}
  */
  readonly searchQueryValues?: SearchDashboardElementsElementSearchSearchQueryValues;
}

export function searchDashboardElementsElementSearchToTerraform(struct?: SearchDashboardElementsElementSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_query_inline: searchDashboardElementsElementSearchSearchQueryInlineToTerraform(struct!.searchQueryInline),
    search_query_saved: searchDashboardElementsElementSearchSearchQuerySavedToTerraform(struct!.searchQuerySaved),
    search_query_values: searchDashboardElementsElementSearchSearchQueryValuesToTerraform(struct!.searchQueryValues),
  }
}


export function searchDashboardElementsElementSearchToHclTerraform(struct?: SearchDashboardElementsElementSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_query_inline: {
      value: searchDashboardElementsElementSearchSearchQueryInlineToHclTerraform(struct!.searchQueryInline),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementSearchSearchQueryInline",
    },
    search_query_saved: {
      value: searchDashboardElementsElementSearchSearchQuerySavedToHclTerraform(struct!.searchQuerySaved),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementSearchSearchQuerySaved",
    },
    search_query_values: {
      value: searchDashboardElementsElementSearchSearchQueryValuesToHclTerraform(struct!.searchQueryValues),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementSearchSearchQueryValues",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDashboardElementsElementSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementSearch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementSearch | cdktf.IResolvable | undefined) {
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
  private _searchQueryInline = new SearchDashboardElementsElementSearchSearchQueryInlineOutputReference(this, "search_query_inline");
  public get searchQueryInline() {
    return this._searchQueryInline;
  }
  public putSearchQueryInline(value: SearchDashboardElementsElementSearchSearchQueryInline) {
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
  private _searchQuerySaved = new SearchDashboardElementsElementSearchSearchQuerySavedOutputReference(this, "search_query_saved");
  public get searchQuerySaved() {
    return this._searchQuerySaved;
  }
  public putSearchQuerySaved(value: SearchDashboardElementsElementSearchSearchQuerySaved) {
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
  private _searchQueryValues = new SearchDashboardElementsElementSearchSearchQueryValuesOutputReference(this, "search_query_values");
  public get searchQueryValues() {
    return this._searchQueryValues;
  }
  public putSearchQueryValues(value: SearchDashboardElementsElementSearchSearchQueryValues) {
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
export interface SearchDashboardElementsElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#config SearchDashboard#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#description SearchDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#empty SearchDashboard#empty}
  */
  readonly empty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#hide_panel SearchDashboard#hide_panel}
  */
  readonly hidePanel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#horizontal_chart SearchDashboard#horizontal_chart}
  */
  readonly horizontalChart?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#id SearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#index SearchDashboard#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#input_id SearchDashboard#input_id}
  */
  readonly inputId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#layout SearchDashboard#layout}
  */
  readonly layout?: SearchDashboardElementsElementLayout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#search SearchDashboard#search}
  */
  readonly search?: SearchDashboardElementsElementSearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#title SearchDashboard#title}
  */
  readonly title?: string;
  /**
  * Not Null; must be one of ["chart.line", "chart.column", "chart.horizontalBar", "chart.area", "chart.scatter", "chart.pie", "chart.funnel", "chart.gauge", "chart.map", "list.events", "list.table", "counter.single", "input.timerange", "input.dropdown", "input.text", "input.number"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#value SearchDashboard#value}
  */
  readonly value?: { [key: string]: string };
  /**
  * must be one of ["visualization", "input", "markdown"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#variant SearchDashboard#variant}
  */
  readonly variant?: string;
}

export function searchDashboardElementsElementToTerraform(struct?: SearchDashboardElementsElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    description: cdktf.stringToTerraform(struct!.description),
    empty: cdktf.booleanToTerraform(struct!.empty),
    hide_panel: cdktf.booleanToTerraform(struct!.hidePanel),
    horizontal_chart: cdktf.booleanToTerraform(struct!.horizontalChart),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.numberToTerraform(struct!.index),
    input_id: cdktf.stringToTerraform(struct!.inputId),
    layout: searchDashboardElementsElementLayoutToTerraform(struct!.layout),
    search: searchDashboardElementsElementSearchToTerraform(struct!.search),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
    variant: cdktf.stringToTerraform(struct!.variant),
  }
}


export function searchDashboardElementsElementToHclTerraform(struct?: SearchDashboardElementsElement | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty: {
      value: cdktf.booleanToHclTerraform(struct!.empty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_id: {
      value: cdktf.stringToHclTerraform(struct!.inputId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: searchDashboardElementsElementLayoutToHclTerraform(struct!.layout),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementLayout",
    },
    search: {
      value: searchDashboardElementsElementSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementSearch",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class SearchDashboardElementsElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._empty !== undefined) {
      hasAnyValues = true;
      internalValueResult.empty = this._empty;
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
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsElement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._description = undefined;
      this._empty = undefined;
      this._hidePanel = undefined;
      this._horizontalChart = undefined;
      this._id = undefined;
      this._index = undefined;
      this._inputId = undefined;
      this._layout.internalValue = undefined;
      this._search.internalValue = undefined;
      this._title = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._description = value.description;
      this._empty = value.empty;
      this._hidePanel = value.hidePanel;
      this._horizontalChart = value.horizontalChart;
      this._id = value.id;
      this._index = value.index;
      this._inputId = value.inputId;
      this._layout.internalValue = value.layout;
      this._search.internalValue = value.search;
      this._title = value.title;
      this._type = value.type;
      this._value = value.value;
      this._variant = value.variant;
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

  // empty - computed: true, optional: true, required: false
  private _empty?: boolean | cdktf.IResolvable; 
  public get empty() {
    return this.getBooleanAttribute('empty');
  }
  public set empty(value: boolean | cdktf.IResolvable) {
    this._empty = value;
  }
  public resetEmpty() {
    this._empty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInput() {
    return this._empty;
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

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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
  private _layout = new SearchDashboardElementsElementLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: SearchDashboardElementsElementLayout) {
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
  private _search = new SearchDashboardElementsElementSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: SearchDashboardElementsElementSearch) {
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

  // value - computed: true, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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
export interface SearchDashboardElementsElementMarkdownLayout {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#h SearchDashboard#h}
  */
  readonly h?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#w SearchDashboard#w}
  */
  readonly w?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#x SearchDashboard#x}
  */
  readonly x?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#y SearchDashboard#y}
  */
  readonly y?: number;
}

export function searchDashboardElementsElementMarkdownLayoutToTerraform(struct?: SearchDashboardElementsElementMarkdownLayout | cdktf.IResolvable): any {
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


export function searchDashboardElementsElementMarkdownLayoutToHclTerraform(struct?: SearchDashboardElementsElementMarkdownLayout | cdktf.IResolvable): any {
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

export class SearchDashboardElementsElementMarkdownLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementMarkdownLayout | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SearchDashboardElementsElementMarkdownLayout | cdktf.IResolvable | undefined) {
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
export interface SearchDashboardElementsElementMarkdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#description SearchDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#empty SearchDashboard#empty}
  */
  readonly empty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#hide_panel SearchDashboard#hide_panel}
  */
  readonly hidePanel?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#id SearchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#index SearchDashboard#index}
  */
  readonly index?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#layout SearchDashboard#layout}
  */
  readonly layout?: SearchDashboardElementsElementMarkdownLayout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#title SearchDashboard#title}
  */
  readonly title?: string;
  /**
  * Not Null; must be "markdown.default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#type SearchDashboard#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#value SearchDashboard#value}
  */
  readonly value?: string;
  /**
  * Not Null; must be "markdown"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#variant SearchDashboard#variant}
  */
  readonly variant?: string;
}

export function searchDashboardElementsElementMarkdownToTerraform(struct?: SearchDashboardElementsElementMarkdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    empty: cdktf.booleanToTerraform(struct!.empty),
    hide_panel: cdktf.booleanToTerraform(struct!.hidePanel),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.numberToTerraform(struct!.index),
    layout: searchDashboardElementsElementMarkdownLayoutToTerraform(struct!.layout),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    variant: cdktf.stringToTerraform(struct!.variant),
  }
}


export function searchDashboardElementsElementMarkdownToHclTerraform(struct?: SearchDashboardElementsElementMarkdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty: {
      value: cdktf.booleanToHclTerraform(struct!.empty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_panel: {
      value: cdktf.booleanToHclTerraform(struct!.hidePanel),
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
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    layout: {
      value: searchDashboardElementsElementMarkdownLayoutToHclTerraform(struct!.layout),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementMarkdownLayout",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
      value: cdktf.stringToHclTerraform(struct!.value),
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

export class SearchDashboardElementsElementMarkdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDashboardElementsElementMarkdown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._empty !== undefined) {
      hasAnyValues = true;
      internalValueResult.empty = this._empty;
    }
    if (this._hidePanel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePanel = this._hidePanel;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElementsElementMarkdown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._empty = undefined;
      this._hidePanel = undefined;
      this._id = undefined;
      this._index = undefined;
      this._layout.internalValue = undefined;
      this._title = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._empty = value.empty;
      this._hidePanel = value.hidePanel;
      this._id = value.id;
      this._index = value.index;
      this._layout.internalValue = value.layout;
      this._title = value.title;
      this._type = value.type;
      this._value = value.value;
      this._variant = value.variant;
    }
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

  // empty - computed: true, optional: true, required: false
  private _empty?: boolean | cdktf.IResolvable; 
  public get empty() {
    return this.getBooleanAttribute('empty');
  }
  public set empty(value: boolean | cdktf.IResolvable) {
    this._empty = value;
  }
  public resetEmpty() {
    this._empty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInput() {
    return this._empty;
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

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // layout - computed: true, optional: true, required: false
  private _layout = new SearchDashboardElementsElementMarkdownLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: SearchDashboardElementsElementMarkdownLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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
export interface SearchDashboardElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#element SearchDashboard#element}
  */
  readonly element?: SearchDashboardElementsElement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#element_markdown SearchDashboard#element_markdown}
  */
  readonly elementMarkdown?: SearchDashboardElementsElementMarkdown;
}

export function searchDashboardElementsToTerraform(struct?: SearchDashboardElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element: searchDashboardElementsElementToTerraform(struct!.element),
    element_markdown: searchDashboardElementsElementMarkdownToTerraform(struct!.elementMarkdown),
  }
}


export function searchDashboardElementsToHclTerraform(struct?: SearchDashboardElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element: {
      value: searchDashboardElementsElementToHclTerraform(struct!.element),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElement",
    },
    element_markdown: {
      value: searchDashboardElementsElementMarkdownToHclTerraform(struct!.elementMarkdown),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDashboardElementsElementMarkdown",
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
    if (this._element?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element?.internalValue;
    }
    if (this._elementMarkdown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementMarkdown = this._elementMarkdown?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDashboardElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._element.internalValue = undefined;
      this._elementMarkdown.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._element.internalValue = value.element;
      this._elementMarkdown.internalValue = value.elementMarkdown;
    }
  }

  // element - computed: false, optional: true, required: false
  private _element = new SearchDashboardElementsElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }
  public putElement(value: SearchDashboardElementsElement) {
    this._element.internalValue = value;
  }
  public resetElement() {
    this._element.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element.internalValue;
  }

  // element_markdown - computed: false, optional: true, required: false
  private _elementMarkdown = new SearchDashboardElementsElementMarkdownOutputReference(this, "element_markdown");
  public get elementMarkdown() {
    return this._elementMarkdown;
  }
  public putElementMarkdown(value: SearchDashboardElementsElementMarkdown) {
    this._elementMarkdown.internalValue = value;
  }
  public resetElementMarkdown() {
    this._elementMarkdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementMarkdownInput() {
    return this._elementMarkdown.internalValue;
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
export interface SearchDashboardScheduleNotifications {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#disabled SearchDashboard#disabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#cron_schedule SearchDashboard#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#enabled SearchDashboard#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#keep_last_n SearchDashboard#keep_last_n}
  */
  readonly keepLastN?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#notifications SearchDashboard#notifications}
  */
  readonly notifications?: SearchDashboardScheduleNotifications;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#tz SearchDashboard#tz}
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
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard criblio_search_dashboard}
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
  * @param importFromId The id of the existing SearchDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dashboard criblio_search_dashboard} Resource
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
        providerVersion: '1.20.48',
        providerVersionConstraint: '1.20.48'
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
    this._created = config.created;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._displayCreatedBy = config.displayCreatedBy;
    this._displayModifiedBy = config.displayModifiedBy;
    this._elements.internalValue = config.elements;
    this._id = config.id;
    this._modified = config.modified;
    this._modifiedBy = config.modifiedBy;
    this._name = config.name;
    this._packId = config.packId;
    this._refreshRate = config.refreshRate;
    this._resolvedDatasetIds = config.resolvedDatasetIds;
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

  // created - computed: false, optional: false, required: true
  private _created?: number; 
  public get created() {
    return this.getNumberAttribute('created');
  }
  public set created(value: number) {
    this._created = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // created_by - computed: false, optional: false, required: true
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // display_created_by - computed: true, optional: true, required: false
  private _displayCreatedBy?: string; 
  public get displayCreatedBy() {
    return this.getStringAttribute('display_created_by');
  }
  public set displayCreatedBy(value: string) {
    this._displayCreatedBy = value;
  }
  public resetDisplayCreatedBy() {
    this._displayCreatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayCreatedByInput() {
    return this._displayCreatedBy;
  }

  // display_modified_by - computed: true, optional: true, required: false
  private _displayModifiedBy?: string; 
  public get displayModifiedBy() {
    return this.getStringAttribute('display_modified_by');
  }
  public set displayModifiedBy(value: string) {
    this._displayModifiedBy = value;
  }
  public resetDisplayModifiedBy() {
    this._displayModifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayModifiedByInput() {
    return this._displayModifiedBy;
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

  // modified - computed: false, optional: false, required: true
  private _modified?: number; 
  public get modified() {
    return this.getNumberAttribute('modified');
  }
  public set modified(value: number) {
    this._modified = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // modified_by - computed: true, optional: true, required: false
  private _modifiedBy?: string; 
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }
  public set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  public resetModifiedBy() {
    this._modifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy;
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

  // pack_id - computed: true, optional: true, required: false
  private _packId?: string; 
  public get packId() {
    return this.getStringAttribute('pack_id');
  }
  public set packId(value: string) {
    this._packId = value;
  }
  public resetPackId() {
    this._packId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packIdInput() {
    return this._packId;
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

  // resolved_dataset_ids - computed: true, optional: true, required: false
  private _resolvedDatasetIds?: string[]; 
  public get resolvedDatasetIds() {
    return this.getListAttribute('resolved_dataset_ids');
  }
  public set resolvedDatasetIds(value: string[]) {
    this._resolvedDatasetIds = value;
  }
  public resetResolvedDatasetIds() {
    this._resolvedDatasetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedDatasetIdsInput() {
    return this._resolvedDatasetIds;
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
      created: cdktf.numberToTerraform(this._created),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      display_created_by: cdktf.stringToTerraform(this._displayCreatedBy),
      display_modified_by: cdktf.stringToTerraform(this._displayModifiedBy),
      elements: cdktf.listMapper(searchDashboardElementsToTerraform, false)(this._elements.internalValue),
      id: cdktf.stringToTerraform(this._id),
      modified: cdktf.numberToTerraform(this._modified),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      name: cdktf.stringToTerraform(this._name),
      pack_id: cdktf.stringToTerraform(this._packId),
      refresh_rate: cdktf.numberToTerraform(this._refreshRate),
      resolved_dataset_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resolvedDatasetIds),
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
      created: {
        value: cdktf.numberToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      display_created_by: {
        value: cdktf.stringToHclTerraform(this._displayCreatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_modified_by: {
        value: cdktf.stringToHclTerraform(this._displayModifiedBy),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified: {
        value: cdktf.numberToHclTerraform(this._modified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      modified_by: {
        value: cdktf.stringToHclTerraform(this._modifiedBy),
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
      pack_id: {
        value: cdktf.stringToHclTerraform(this._packId),
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
      resolved_dataset_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resolvedDatasetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
