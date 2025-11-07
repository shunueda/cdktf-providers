// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/branding_theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0BrandingThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/branding_theme#id DataAuth0BrandingTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAuth0BrandingThemeBorders {
}

export function dataAuth0BrandingThemeBordersToTerraform(struct?: DataAuth0BrandingThemeBorders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeBordersToHclTerraform(struct?: DataAuth0BrandingThemeBorders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeBordersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeBorders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeBorders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_border_radius - computed: true, optional: false, required: false
  public get buttonBorderRadius() {
    return this.getNumberAttribute('button_border_radius');
  }

  // button_border_weight - computed: true, optional: false, required: false
  public get buttonBorderWeight() {
    return this.getNumberAttribute('button_border_weight');
  }

  // buttons_style - computed: true, optional: false, required: false
  public get buttonsStyle() {
    return this.getStringAttribute('buttons_style');
  }

  // input_border_radius - computed: true, optional: false, required: false
  public get inputBorderRadius() {
    return this.getNumberAttribute('input_border_radius');
  }

  // input_border_weight - computed: true, optional: false, required: false
  public get inputBorderWeight() {
    return this.getNumberAttribute('input_border_weight');
  }

  // inputs_style - computed: true, optional: false, required: false
  public get inputsStyle() {
    return this.getStringAttribute('inputs_style');
  }

  // show_widget_shadow - computed: true, optional: false, required: false
  public get showWidgetShadow() {
    return this.getBooleanAttribute('show_widget_shadow');
  }

  // widget_border_weight - computed: true, optional: false, required: false
  public get widgetBorderWeight() {
    return this.getNumberAttribute('widget_border_weight');
  }

  // widget_corner_radius - computed: true, optional: false, required: false
  public get widgetCornerRadius() {
    return this.getNumberAttribute('widget_corner_radius');
  }
}

export class DataAuth0BrandingThemeBordersList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeBordersOutputReference {
    return new DataAuth0BrandingThemeBordersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeColors {
}

export function dataAuth0BrandingThemeColorsToTerraform(struct?: DataAuth0BrandingThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeColorsToHclTerraform(struct?: DataAuth0BrandingThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_focus_color - computed: true, optional: false, required: false
  public get baseFocusColor() {
    return this.getStringAttribute('base_focus_color');
  }

  // base_hover_color - computed: true, optional: false, required: false
  public get baseHoverColor() {
    return this.getStringAttribute('base_hover_color');
  }

  // body_text - computed: true, optional: false, required: false
  public get bodyText() {
    return this.getStringAttribute('body_text');
  }

  // captcha_widget_theme - computed: true, optional: false, required: false
  public get captchaWidgetTheme() {
    return this.getStringAttribute('captcha_widget_theme');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // icons - computed: true, optional: false, required: false
  public get icons() {
    return this.getStringAttribute('icons');
  }

  // input_background - computed: true, optional: false, required: false
  public get inputBackground() {
    return this.getStringAttribute('input_background');
  }

  // input_border - computed: true, optional: false, required: false
  public get inputBorder() {
    return this.getStringAttribute('input_border');
  }

  // input_filled_text - computed: true, optional: false, required: false
  public get inputFilledText() {
    return this.getStringAttribute('input_filled_text');
  }

  // input_labels_placeholders - computed: true, optional: false, required: false
  public get inputLabelsPlaceholders() {
    return this.getStringAttribute('input_labels_placeholders');
  }

  // links_focused_components - computed: true, optional: false, required: false
  public get linksFocusedComponents() {
    return this.getStringAttribute('links_focused_components');
  }

  // primary_button - computed: true, optional: false, required: false
  public get primaryButton() {
    return this.getStringAttribute('primary_button');
  }

  // primary_button_label - computed: true, optional: false, required: false
  public get primaryButtonLabel() {
    return this.getStringAttribute('primary_button_label');
  }

  // secondary_button_border - computed: true, optional: false, required: false
  public get secondaryButtonBorder() {
    return this.getStringAttribute('secondary_button_border');
  }

  // secondary_button_label - computed: true, optional: false, required: false
  public get secondaryButtonLabel() {
    return this.getStringAttribute('secondary_button_label');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getStringAttribute('success');
  }

  // widget_background - computed: true, optional: false, required: false
  public get widgetBackground() {
    return this.getStringAttribute('widget_background');
  }

  // widget_border - computed: true, optional: false, required: false
  public get widgetBorder() {
    return this.getStringAttribute('widget_border');
  }
}

export class DataAuth0BrandingThemeColorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeColorsOutputReference {
    return new DataAuth0BrandingThemeColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeFontsBodyText {
}

export function dataAuth0BrandingThemeFontsBodyTextToTerraform(struct?: DataAuth0BrandingThemeFontsBodyText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeFontsBodyTextToHclTerraform(struct?: DataAuth0BrandingThemeFontsBodyText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeFontsBodyTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeFontsBodyText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeFontsBodyText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bold - computed: true, optional: false, required: false
  public get bold() {
    return this.getBooleanAttribute('bold');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAuth0BrandingThemeFontsBodyTextList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeFontsBodyTextOutputReference {
    return new DataAuth0BrandingThemeFontsBodyTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeFontsButtonsText {
}

export function dataAuth0BrandingThemeFontsButtonsTextToTerraform(struct?: DataAuth0BrandingThemeFontsButtonsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeFontsButtonsTextToHclTerraform(struct?: DataAuth0BrandingThemeFontsButtonsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeFontsButtonsTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeFontsButtonsText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeFontsButtonsText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bold - computed: true, optional: false, required: false
  public get bold() {
    return this.getBooleanAttribute('bold');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAuth0BrandingThemeFontsButtonsTextList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeFontsButtonsTextOutputReference {
    return new DataAuth0BrandingThemeFontsButtonsTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeFontsInputLabels {
}

export function dataAuth0BrandingThemeFontsInputLabelsToTerraform(struct?: DataAuth0BrandingThemeFontsInputLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeFontsInputLabelsToHclTerraform(struct?: DataAuth0BrandingThemeFontsInputLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeFontsInputLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeFontsInputLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeFontsInputLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bold - computed: true, optional: false, required: false
  public get bold() {
    return this.getBooleanAttribute('bold');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAuth0BrandingThemeFontsInputLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeFontsInputLabelsOutputReference {
    return new DataAuth0BrandingThemeFontsInputLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeFontsLinks {
}

export function dataAuth0BrandingThemeFontsLinksToTerraform(struct?: DataAuth0BrandingThemeFontsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeFontsLinksToHclTerraform(struct?: DataAuth0BrandingThemeFontsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeFontsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeFontsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeFontsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bold - computed: true, optional: false, required: false
  public get bold() {
    return this.getBooleanAttribute('bold');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAuth0BrandingThemeFontsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeFontsLinksOutputReference {
    return new DataAuth0BrandingThemeFontsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeFontsSubtitle {
}

export function dataAuth0BrandingThemeFontsSubtitleToTerraform(struct?: DataAuth0BrandingThemeFontsSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeFontsSubtitleToHclTerraform(struct?: DataAuth0BrandingThemeFontsSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeFontsSubtitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeFontsSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeFontsSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bold - computed: true, optional: false, required: false
  public get bold() {
    return this.getBooleanAttribute('bold');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAuth0BrandingThemeFontsSubtitleList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeFontsSubtitleOutputReference {
    return new DataAuth0BrandingThemeFontsSubtitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeFontsTitle {
}

export function dataAuth0BrandingThemeFontsTitleToTerraform(struct?: DataAuth0BrandingThemeFontsTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeFontsTitleToHclTerraform(struct?: DataAuth0BrandingThemeFontsTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeFontsTitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeFontsTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeFontsTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bold - computed: true, optional: false, required: false
  public get bold() {
    return this.getBooleanAttribute('bold');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAuth0BrandingThemeFontsTitleList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeFontsTitleOutputReference {
    return new DataAuth0BrandingThemeFontsTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeFonts {
}

export function dataAuth0BrandingThemeFontsToTerraform(struct?: DataAuth0BrandingThemeFonts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeFontsToHclTerraform(struct?: DataAuth0BrandingThemeFonts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeFontsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeFonts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeFonts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_text - computed: true, optional: false, required: false
  private _bodyText = new DataAuth0BrandingThemeFontsBodyTextList(this, "body_text", false);
  public get bodyText() {
    return this._bodyText;
  }

  // buttons_text - computed: true, optional: false, required: false
  private _buttonsText = new DataAuth0BrandingThemeFontsButtonsTextList(this, "buttons_text", false);
  public get buttonsText() {
    return this._buttonsText;
  }

  // font_url - computed: true, optional: false, required: false
  public get fontUrl() {
    return this.getStringAttribute('font_url');
  }

  // input_labels - computed: true, optional: false, required: false
  private _inputLabels = new DataAuth0BrandingThemeFontsInputLabelsList(this, "input_labels", false);
  public get inputLabels() {
    return this._inputLabels;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataAuth0BrandingThemeFontsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // links_style - computed: true, optional: false, required: false
  public get linksStyle() {
    return this.getStringAttribute('links_style');
  }

  // reference_text_size - computed: true, optional: false, required: false
  public get referenceTextSize() {
    return this.getNumberAttribute('reference_text_size');
  }

  // subtitle - computed: true, optional: false, required: false
  private _subtitle = new DataAuth0BrandingThemeFontsSubtitleList(this, "subtitle", false);
  public get subtitle() {
    return this._subtitle;
  }

  // title - computed: true, optional: false, required: false
  private _title = new DataAuth0BrandingThemeFontsTitleList(this, "title", false);
  public get title() {
    return this._title;
  }
}

export class DataAuth0BrandingThemeFontsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeFontsOutputReference {
    return new DataAuth0BrandingThemeFontsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemePageBackground {
}

export function dataAuth0BrandingThemePageBackgroundToTerraform(struct?: DataAuth0BrandingThemePageBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemePageBackgroundToHclTerraform(struct?: DataAuth0BrandingThemePageBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemePageBackgroundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemePageBackground | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemePageBackground | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // background_image_url - computed: true, optional: false, required: false
  public get backgroundImageUrl() {
    return this.getStringAttribute('background_image_url');
  }

  // page_layout - computed: true, optional: false, required: false
  public get pageLayout() {
    return this.getStringAttribute('page_layout');
  }
}

export class DataAuth0BrandingThemePageBackgroundList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemePageBackgroundOutputReference {
    return new DataAuth0BrandingThemePageBackgroundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0BrandingThemeWidget {
}

export function dataAuth0BrandingThemeWidgetToTerraform(struct?: DataAuth0BrandingThemeWidget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0BrandingThemeWidgetToHclTerraform(struct?: DataAuth0BrandingThemeWidget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0BrandingThemeWidgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0BrandingThemeWidget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0BrandingThemeWidget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_text_alignment - computed: true, optional: false, required: false
  public get headerTextAlignment() {
    return this.getStringAttribute('header_text_alignment');
  }

  // logo_height - computed: true, optional: false, required: false
  public get logoHeight() {
    return this.getNumberAttribute('logo_height');
  }

  // logo_position - computed: true, optional: false, required: false
  public get logoPosition() {
    return this.getStringAttribute('logo_position');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // social_buttons_layout - computed: true, optional: false, required: false
  public get socialButtonsLayout() {
    return this.getStringAttribute('social_buttons_layout');
  }
}

export class DataAuth0BrandingThemeWidgetList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0BrandingThemeWidgetOutputReference {
    return new DataAuth0BrandingThemeWidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/branding_theme auth0_branding_theme}
*/
export class DataAuth0BrandingTheme extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_branding_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuth0BrandingTheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuth0BrandingTheme to import
  * @param importFromId The id of the existing DataAuth0BrandingTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/branding_theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0BrandingTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_branding_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/branding_theme auth0_branding_theme} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuth0BrandingThemeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuth0BrandingThemeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_branding_theme',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
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

  // borders - computed: true, optional: false, required: false
  private _borders = new DataAuth0BrandingThemeBordersList(this, "borders", false);
  public get borders() {
    return this._borders;
  }

  // colors - computed: true, optional: false, required: false
  private _colors = new DataAuth0BrandingThemeColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fonts - computed: true, optional: false, required: false
  private _fonts = new DataAuth0BrandingThemeFontsList(this, "fonts", false);
  public get fonts() {
    return this._fonts;
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

  // page_background - computed: true, optional: false, required: false
  private _pageBackground = new DataAuth0BrandingThemePageBackgroundList(this, "page_background", false);
  public get pageBackground() {
    return this._pageBackground;
  }

  // widget - computed: true, optional: false, required: false
  private _widget = new DataAuth0BrandingThemeWidgetList(this, "widget", false);
  public get widget() {
    return this._widget;
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
