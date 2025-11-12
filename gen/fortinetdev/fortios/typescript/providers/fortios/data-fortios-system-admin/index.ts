// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemAdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_admin#id DataFortiosSystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_admin#name DataFortiosSystemAdmin#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_admin#vdomparam DataFortiosSystemAdmin#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemAdminGuestUsergroups {
}

export function dataFortiosSystemAdminGuestUsergroupsToTerraform(struct?: DataFortiosSystemAdminGuestUsergroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminGuestUsergroupsToHclTerraform(struct?: DataFortiosSystemAdminGuestUsergroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminGuestUsergroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminGuestUsergroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminGuestUsergroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemAdminGuestUsergroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminGuestUsergroupsOutputReference {
    return new DataFortiosSystemAdminGuestUsergroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminGuiDashboardWidgetFilters {
}

export function dataFortiosSystemAdminGuiDashboardWidgetFiltersToTerraform(struct?: DataFortiosSystemAdminGuiDashboardWidgetFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminGuiDashboardWidgetFiltersToHclTerraform(struct?: DataFortiosSystemAdminGuiDashboardWidgetFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminGuiDashboardWidgetFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminGuiDashboardWidgetFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminGuiDashboardWidgetFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataFortiosSystemAdminGuiDashboardWidgetFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminGuiDashboardWidgetFiltersOutputReference {
    return new DataFortiosSystemAdminGuiDashboardWidgetFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminGuiDashboardWidget {
}

export function dataFortiosSystemAdminGuiDashboardWidgetToTerraform(struct?: DataFortiosSystemAdminGuiDashboardWidget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminGuiDashboardWidgetToHclTerraform(struct?: DataFortiosSystemAdminGuiDashboardWidget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminGuiDashboardWidgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminGuiDashboardWidget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminGuiDashboardWidget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fabric_device - computed: true, optional: false, required: false
  public get fabricDevice() {
    return this.getStringAttribute('fabric_device');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataFortiosSystemAdminGuiDashboardWidgetFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // industry - computed: true, optional: false, required: false
  public get industry() {
    return this.getStringAttribute('industry');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // report_by - computed: true, optional: false, required: false
  public get reportBy() {
    return this.getStringAttribute('report_by');
  }

  // sort_by - computed: true, optional: false, required: false
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }

  // timeframe - computed: true, optional: false, required: false
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // visualization - computed: true, optional: false, required: false
  public get visualization() {
    return this.getStringAttribute('visualization');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }

  // x_pos - computed: true, optional: false, required: false
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }

  // y_pos - computed: true, optional: false, required: false
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
}

export class DataFortiosSystemAdminGuiDashboardWidgetList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminGuiDashboardWidgetOutputReference {
    return new DataFortiosSystemAdminGuiDashboardWidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminGuiDashboard {
}

export function dataFortiosSystemAdminGuiDashboardToTerraform(struct?: DataFortiosSystemAdminGuiDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminGuiDashboardToHclTerraform(struct?: DataFortiosSystemAdminGuiDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminGuiDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminGuiDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminGuiDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getNumberAttribute('columns');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // layout_type - computed: true, optional: false, required: false
  public get layoutType() {
    return this.getStringAttribute('layout_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // widget - computed: true, optional: false, required: false
  private _widget = new DataFortiosSystemAdminGuiDashboardWidgetList(this, "widget", false);
  public get widget() {
    return this._widget;
  }
}

export class DataFortiosSystemAdminGuiDashboardList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminGuiDashboardOutputReference {
    return new DataFortiosSystemAdminGuiDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminGuiGlobalMenuFavorites {
}

export function dataFortiosSystemAdminGuiGlobalMenuFavoritesToTerraform(struct?: DataFortiosSystemAdminGuiGlobalMenuFavorites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminGuiGlobalMenuFavoritesToHclTerraform(struct?: DataFortiosSystemAdminGuiGlobalMenuFavorites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminGuiGlobalMenuFavoritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminGuiGlobalMenuFavorites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminGuiGlobalMenuFavorites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataFortiosSystemAdminGuiGlobalMenuFavoritesList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminGuiGlobalMenuFavoritesOutputReference {
    return new DataFortiosSystemAdminGuiGlobalMenuFavoritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminGuiNewFeatureAcknowledge {
}

export function dataFortiosSystemAdminGuiNewFeatureAcknowledgeToTerraform(struct?: DataFortiosSystemAdminGuiNewFeatureAcknowledge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminGuiNewFeatureAcknowledgeToHclTerraform(struct?: DataFortiosSystemAdminGuiNewFeatureAcknowledge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminGuiNewFeatureAcknowledgeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminGuiNewFeatureAcknowledge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminGuiNewFeatureAcknowledge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataFortiosSystemAdminGuiNewFeatureAcknowledgeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminGuiNewFeatureAcknowledgeOutputReference {
    return new DataFortiosSystemAdminGuiNewFeatureAcknowledgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminGuiVdomMenuFavorites {
}

export function dataFortiosSystemAdminGuiVdomMenuFavoritesToTerraform(struct?: DataFortiosSystemAdminGuiVdomMenuFavorites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminGuiVdomMenuFavoritesToHclTerraform(struct?: DataFortiosSystemAdminGuiVdomMenuFavorites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminGuiVdomMenuFavoritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminGuiVdomMenuFavorites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminGuiVdomMenuFavorites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataFortiosSystemAdminGuiVdomMenuFavoritesList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminGuiVdomMenuFavoritesOutputReference {
    return new DataFortiosSystemAdminGuiVdomMenuFavoritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminLoginTime {
}

export function dataFortiosSystemAdminLoginTimeToTerraform(struct?: DataFortiosSystemAdminLoginTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminLoginTimeToHclTerraform(struct?: DataFortiosSystemAdminLoginTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminLoginTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminLoginTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminLoginTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_failed_login - computed: true, optional: false, required: false
  public get lastFailedLogin() {
    return this.getStringAttribute('last_failed_login');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }

  // usr_name - computed: true, optional: false, required: false
  public get usrName() {
    return this.getStringAttribute('usr_name');
  }
}

export class DataFortiosSystemAdminLoginTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminLoginTimeOutputReference {
    return new DataFortiosSystemAdminLoginTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAdminVdom {
}

export function dataFortiosSystemAdminVdomToTerraform(struct?: DataFortiosSystemAdminVdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAdminVdomToHclTerraform(struct?: DataFortiosSystemAdminVdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAdminVdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAdminVdom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAdminVdom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemAdminVdomList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAdminVdomOutputReference {
    return new DataFortiosSystemAdminVdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_admin fortios_system_admin}
*/
export class DataFortiosSystemAdmin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemAdmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemAdmin to import
  * @param importFromId The id of the existing DataFortiosSystemAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemAdmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_admin fortios_system_admin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemAdminConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemAdminConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_admin',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: false, required: false
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }

  // accprofile_override - computed: true, optional: false, required: false
  public get accprofileOverride() {
    return this.getStringAttribute('accprofile_override');
  }

  // allow_remove_admin_session - computed: true, optional: false, required: false
  public get allowRemoveAdminSession() {
    return this.getStringAttribute('allow_remove_admin_session');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // email_to - computed: true, optional: false, required: false
  public get emailTo() {
    return this.getStringAttribute('email_to');
  }

  // force_password_change - computed: true, optional: false, required: false
  public get forcePasswordChange() {
    return this.getStringAttribute('force_password_change');
  }

  // fortitoken - computed: true, optional: false, required: false
  public get fortitoken() {
    return this.getStringAttribute('fortitoken');
  }

  // guest_auth - computed: true, optional: false, required: false
  public get guestAuth() {
    return this.getStringAttribute('guest_auth');
  }

  // guest_lang - computed: true, optional: false, required: false
  public get guestLang() {
    return this.getStringAttribute('guest_lang');
  }

  // guest_usergroups - computed: true, optional: false, required: false
  private _guestUsergroups = new DataFortiosSystemAdminGuestUsergroupsList(this, "guest_usergroups", false);
  public get guestUsergroups() {
    return this._guestUsergroups;
  }

  // gui_dashboard - computed: true, optional: false, required: false
  private _guiDashboard = new DataFortiosSystemAdminGuiDashboardList(this, "gui_dashboard", false);
  public get guiDashboard() {
    return this._guiDashboard;
  }

  // gui_global_menu_favorites - computed: true, optional: false, required: false
  private _guiGlobalMenuFavorites = new DataFortiosSystemAdminGuiGlobalMenuFavoritesList(this, "gui_global_menu_favorites", false);
  public get guiGlobalMenuFavorites() {
    return this._guiGlobalMenuFavorites;
  }

  // gui_new_feature_acknowledge - computed: true, optional: false, required: false
  private _guiNewFeatureAcknowledge = new DataFortiosSystemAdminGuiNewFeatureAcknowledgeList(this, "gui_new_feature_acknowledge", false);
  public get guiNewFeatureAcknowledge() {
    return this._guiNewFeatureAcknowledge;
  }

  // gui_vdom_menu_favorites - computed: true, optional: false, required: false
  private _guiVdomMenuFavorites = new DataFortiosSystemAdminGuiVdomMenuFavoritesList(this, "gui_vdom_menu_favorites", false);
  public get guiVdomMenuFavorites() {
    return this._guiVdomMenuFavorites;
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getNumberAttribute('hidden');
  }

  // history0 - computed: true, optional: false, required: false
  public get history0() {
    return this.getStringAttribute('history0');
  }

  // history1 - computed: true, optional: false, required: false
  public get history1() {
    return this.getStringAttribute('history1');
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

  // ip6_trusthost1 - computed: true, optional: false, required: false
  public get ip6Trusthost1() {
    return this.getStringAttribute('ip6_trusthost1');
  }

  // ip6_trusthost10 - computed: true, optional: false, required: false
  public get ip6Trusthost10() {
    return this.getStringAttribute('ip6_trusthost10');
  }

  // ip6_trusthost2 - computed: true, optional: false, required: false
  public get ip6Trusthost2() {
    return this.getStringAttribute('ip6_trusthost2');
  }

  // ip6_trusthost3 - computed: true, optional: false, required: false
  public get ip6Trusthost3() {
    return this.getStringAttribute('ip6_trusthost3');
  }

  // ip6_trusthost4 - computed: true, optional: false, required: false
  public get ip6Trusthost4() {
    return this.getStringAttribute('ip6_trusthost4');
  }

  // ip6_trusthost5 - computed: true, optional: false, required: false
  public get ip6Trusthost5() {
    return this.getStringAttribute('ip6_trusthost5');
  }

  // ip6_trusthost6 - computed: true, optional: false, required: false
  public get ip6Trusthost6() {
    return this.getStringAttribute('ip6_trusthost6');
  }

  // ip6_trusthost7 - computed: true, optional: false, required: false
  public get ip6Trusthost7() {
    return this.getStringAttribute('ip6_trusthost7');
  }

  // ip6_trusthost8 - computed: true, optional: false, required: false
  public get ip6Trusthost8() {
    return this.getStringAttribute('ip6_trusthost8');
  }

  // ip6_trusthost9 - computed: true, optional: false, required: false
  public get ip6Trusthost9() {
    return this.getStringAttribute('ip6_trusthost9');
  }

  // login_time - computed: true, optional: false, required: false
  private _loginTime = new DataFortiosSystemAdminLoginTimeList(this, "login_time", false);
  public get loginTime() {
    return this._loginTime;
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_expire - computed: true, optional: false, required: false
  public get passwordExpire() {
    return this.getStringAttribute('password_expire');
  }

  // peer_auth - computed: true, optional: false, required: false
  public get peerAuth() {
    return this.getStringAttribute('peer_auth');
  }

  // peer_group - computed: true, optional: false, required: false
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }

  // radius_vdom_override - computed: true, optional: false, required: false
  public get radiusVdomOverride() {
    return this.getStringAttribute('radius_vdom_override');
  }

  // remote_auth - computed: true, optional: false, required: false
  public get remoteAuth() {
    return this.getStringAttribute('remote_auth');
  }

  // remote_group - computed: true, optional: false, required: false
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // sms_custom_server - computed: true, optional: false, required: false
  public get smsCustomServer() {
    return this.getStringAttribute('sms_custom_server');
  }

  // sms_phone - computed: true, optional: false, required: false
  public get smsPhone() {
    return this.getStringAttribute('sms_phone');
  }

  // sms_server - computed: true, optional: false, required: false
  public get smsServer() {
    return this.getStringAttribute('sms_server');
  }

  // ssh_certificate - computed: true, optional: false, required: false
  public get sshCertificate() {
    return this.getStringAttribute('ssh_certificate');
  }

  // ssh_public_key1 - computed: true, optional: false, required: false
  public get sshPublicKey1() {
    return this.getStringAttribute('ssh_public_key1');
  }

  // ssh_public_key2 - computed: true, optional: false, required: false
  public get sshPublicKey2() {
    return this.getStringAttribute('ssh_public_key2');
  }

  // ssh_public_key3 - computed: true, optional: false, required: false
  public get sshPublicKey3() {
    return this.getStringAttribute('ssh_public_key3');
  }

  // trusthost1 - computed: true, optional: false, required: false
  public get trusthost1() {
    return this.getStringAttribute('trusthost1');
  }

  // trusthost10 - computed: true, optional: false, required: false
  public get trusthost10() {
    return this.getStringAttribute('trusthost10');
  }

  // trusthost2 - computed: true, optional: false, required: false
  public get trusthost2() {
    return this.getStringAttribute('trusthost2');
  }

  // trusthost3 - computed: true, optional: false, required: false
  public get trusthost3() {
    return this.getStringAttribute('trusthost3');
  }

  // trusthost4 - computed: true, optional: false, required: false
  public get trusthost4() {
    return this.getStringAttribute('trusthost4');
  }

  // trusthost5 - computed: true, optional: false, required: false
  public get trusthost5() {
    return this.getStringAttribute('trusthost5');
  }

  // trusthost6 - computed: true, optional: false, required: false
  public get trusthost6() {
    return this.getStringAttribute('trusthost6');
  }

  // trusthost7 - computed: true, optional: false, required: false
  public get trusthost7() {
    return this.getStringAttribute('trusthost7');
  }

  // trusthost8 - computed: true, optional: false, required: false
  public get trusthost8() {
    return this.getStringAttribute('trusthost8');
  }

  // trusthost9 - computed: true, optional: false, required: false
  public get trusthost9() {
    return this.getStringAttribute('trusthost9');
  }

  // two_factor - computed: true, optional: false, required: false
  public get twoFactor() {
    return this.getStringAttribute('two_factor');
  }

  // two_factor_authentication - computed: true, optional: false, required: false
  public get twoFactorAuthentication() {
    return this.getStringAttribute('two_factor_authentication');
  }

  // two_factor_notification - computed: true, optional: false, required: false
  public get twoFactorNotification() {
    return this.getStringAttribute('two_factor_notification');
  }

  // vdom - computed: true, optional: false, required: false
  private _vdom = new DataFortiosSystemAdminVdomList(this, "vdom", false);
  public get vdom() {
    return this._vdom;
  }

  // vdom_override - computed: true, optional: false, required: false
  public get vdomOverride() {
    return this.getStringAttribute('vdom_override');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // wildcard - computed: true, optional: false, required: false
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
