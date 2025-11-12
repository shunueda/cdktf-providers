// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthsignalThemeConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAuthsignalThemeBorders {
}

export function dataAuthsignalThemeBordersToTerraform(struct?: DataAuthsignalThemeBorders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeBordersToHclTerraform(struct?: DataAuthsignalThemeBorders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeBordersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeBorders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeBorders | undefined) {
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

  // button_border_width - computed: true, optional: false, required: false
  public get buttonBorderWidth() {
    return this.getNumberAttribute('button_border_width');
  }

  // card_border_radius - computed: true, optional: false, required: false
  public get cardBorderRadius() {
    return this.getNumberAttribute('card_border_radius');
  }

  // card_border_width - computed: true, optional: false, required: false
  public get cardBorderWidth() {
    return this.getNumberAttribute('card_border_width');
  }

  // container_border_radius - computed: true, optional: false, required: false
  public get containerBorderRadius() {
    return this.getNumberAttribute('container_border_radius');
  }

  // input_border_radius - computed: true, optional: false, required: false
  public get inputBorderRadius() {
    return this.getNumberAttribute('input_border_radius');
  }

  // input_border_width - computed: true, optional: false, required: false
  public get inputBorderWidth() {
    return this.getNumberAttribute('input_border_width');
  }
}
export interface DataAuthsignalThemeColors {
}

export function dataAuthsignalThemeColorsToTerraform(struct?: DataAuthsignalThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeColorsToHclTerraform(struct?: DataAuthsignalThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_text - computed: true, optional: false, required: false
  public get bodyText() {
    return this.getStringAttribute('body_text');
  }

  // button_primary_border - computed: true, optional: false, required: false
  public get buttonPrimaryBorder() {
    return this.getStringAttribute('button_primary_border');
  }

  // button_primary_text - computed: true, optional: false, required: false
  public get buttonPrimaryText() {
    return this.getStringAttribute('button_primary_text');
  }

  // button_secondary_background - computed: true, optional: false, required: false
  public get buttonSecondaryBackground() {
    return this.getStringAttribute('button_secondary_background');
  }

  // button_secondary_border - computed: true, optional: false, required: false
  public get buttonSecondaryBorder() {
    return this.getStringAttribute('button_secondary_border');
  }

  // button_secondary_text - computed: true, optional: false, required: false
  public get buttonSecondaryText() {
    return this.getStringAttribute('button_secondary_text');
  }

  // card_background - computed: true, optional: false, required: false
  public get cardBackground() {
    return this.getStringAttribute('card_background');
  }

  // card_border - computed: true, optional: false, required: false
  public get cardBorder() {
    return this.getStringAttribute('card_border');
  }

  // container_background - computed: true, optional: false, required: false
  public get containerBackground() {
    return this.getStringAttribute('container_background');
  }

  // container_border - computed: true, optional: false, required: false
  public get containerBorder() {
    return this.getStringAttribute('container_border');
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getStringAttribute('critical');
  }

  // divider - computed: true, optional: false, required: false
  public get divider() {
    return this.getStringAttribute('divider');
  }

  // focus - computed: true, optional: false, required: false
  public get focus() {
    return this.getStringAttribute('focus');
  }

  // heading_text - computed: true, optional: false, required: false
  public get headingText() {
    return this.getStringAttribute('heading_text');
  }

  // hover - computed: true, optional: false, required: false
  public get hover() {
    return this.getStringAttribute('hover');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // information - computed: true, optional: false, required: false
  public get information() {
    return this.getStringAttribute('information');
  }

  // input_background - computed: true, optional: false, required: false
  public get inputBackground() {
    return this.getStringAttribute('input_background');
  }

  // input_border - computed: true, optional: false, required: false
  public get inputBorder() {
    return this.getStringAttribute('input_border');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // loader - computed: true, optional: false, required: false
  public get loader() {
    return this.getStringAttribute('loader');
  }

  // positive - computed: true, optional: false, required: false
  public get positive() {
    return this.getStringAttribute('positive');
  }
}
export interface DataAuthsignalThemeContainer {
}

export function dataAuthsignalThemeContainerToTerraform(struct?: DataAuthsignalThemeContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeContainerToHclTerraform(struct?: DataAuthsignalThemeContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_alignment - computed: true, optional: false, required: false
  public get contentAlignment() {
    return this.getStringAttribute('content_alignment');
  }

  // logo_alignment - computed: true, optional: false, required: false
  public get logoAlignment() {
    return this.getStringAttribute('logo_alignment');
  }

  // logo_height - computed: true, optional: false, required: false
  public get logoHeight() {
    return this.getNumberAttribute('logo_height');
  }

  // logo_position - computed: true, optional: false, required: false
  public get logoPosition() {
    return this.getStringAttribute('logo_position');
  }

  // padding - computed: true, optional: false, required: false
  public get padding() {
    return this.getNumberAttribute('padding');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }
}
export interface DataAuthsignalThemeDarkModeBorders {
}

export function dataAuthsignalThemeDarkModeBordersToTerraform(struct?: DataAuthsignalThemeDarkModeBorders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeDarkModeBordersToHclTerraform(struct?: DataAuthsignalThemeDarkModeBorders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeDarkModeBordersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeDarkModeBorders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeDarkModeBorders | undefined) {
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

  // button_border_width - computed: true, optional: false, required: false
  public get buttonBorderWidth() {
    return this.getNumberAttribute('button_border_width');
  }

  // card_border_radius - computed: true, optional: false, required: false
  public get cardBorderRadius() {
    return this.getNumberAttribute('card_border_radius');
  }

  // card_border_width - computed: true, optional: false, required: false
  public get cardBorderWidth() {
    return this.getNumberAttribute('card_border_width');
  }

  // container_border_radius - computed: true, optional: false, required: false
  public get containerBorderRadius() {
    return this.getNumberAttribute('container_border_radius');
  }

  // input_border_radius - computed: true, optional: false, required: false
  public get inputBorderRadius() {
    return this.getNumberAttribute('input_border_radius');
  }

  // input_border_width - computed: true, optional: false, required: false
  public get inputBorderWidth() {
    return this.getNumberAttribute('input_border_width');
  }
}
export interface DataAuthsignalThemeDarkModeColors {
}

export function dataAuthsignalThemeDarkModeColorsToTerraform(struct?: DataAuthsignalThemeDarkModeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeDarkModeColorsToHclTerraform(struct?: DataAuthsignalThemeDarkModeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeDarkModeColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeDarkModeColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeDarkModeColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_text - computed: true, optional: false, required: false
  public get bodyText() {
    return this.getStringAttribute('body_text');
  }

  // button_primary_border - computed: true, optional: false, required: false
  public get buttonPrimaryBorder() {
    return this.getStringAttribute('button_primary_border');
  }

  // button_primary_text - computed: true, optional: false, required: false
  public get buttonPrimaryText() {
    return this.getStringAttribute('button_primary_text');
  }

  // button_secondary_background - computed: true, optional: false, required: false
  public get buttonSecondaryBackground() {
    return this.getStringAttribute('button_secondary_background');
  }

  // button_secondary_border - computed: true, optional: false, required: false
  public get buttonSecondaryBorder() {
    return this.getStringAttribute('button_secondary_border');
  }

  // button_secondary_text - computed: true, optional: false, required: false
  public get buttonSecondaryText() {
    return this.getStringAttribute('button_secondary_text');
  }

  // card_background - computed: true, optional: false, required: false
  public get cardBackground() {
    return this.getStringAttribute('card_background');
  }

  // card_border - computed: true, optional: false, required: false
  public get cardBorder() {
    return this.getStringAttribute('card_border');
  }

  // container_background - computed: true, optional: false, required: false
  public get containerBackground() {
    return this.getStringAttribute('container_background');
  }

  // container_border - computed: true, optional: false, required: false
  public get containerBorder() {
    return this.getStringAttribute('container_border');
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getStringAttribute('critical');
  }

  // divider - computed: true, optional: false, required: false
  public get divider() {
    return this.getStringAttribute('divider');
  }

  // focus - computed: true, optional: false, required: false
  public get focus() {
    return this.getStringAttribute('focus');
  }

  // heading_text - computed: true, optional: false, required: false
  public get headingText() {
    return this.getStringAttribute('heading_text');
  }

  // hover - computed: true, optional: false, required: false
  public get hover() {
    return this.getStringAttribute('hover');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // information - computed: true, optional: false, required: false
  public get information() {
    return this.getStringAttribute('information');
  }

  // input_background - computed: true, optional: false, required: false
  public get inputBackground() {
    return this.getStringAttribute('input_background');
  }

  // input_border - computed: true, optional: false, required: false
  public get inputBorder() {
    return this.getStringAttribute('input_border');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // loader - computed: true, optional: false, required: false
  public get loader() {
    return this.getStringAttribute('loader');
  }

  // positive - computed: true, optional: false, required: false
  public get positive() {
    return this.getStringAttribute('positive');
  }
}
export interface DataAuthsignalThemeDarkModeContainer {
}

export function dataAuthsignalThemeDarkModeContainerToTerraform(struct?: DataAuthsignalThemeDarkModeContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeDarkModeContainerToHclTerraform(struct?: DataAuthsignalThemeDarkModeContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeDarkModeContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeDarkModeContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeDarkModeContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_alignment - computed: true, optional: false, required: false
  public get contentAlignment() {
    return this.getStringAttribute('content_alignment');
  }

  // logo_alignment - computed: true, optional: false, required: false
  public get logoAlignment() {
    return this.getStringAttribute('logo_alignment');
  }

  // logo_height - computed: true, optional: false, required: false
  public get logoHeight() {
    return this.getNumberAttribute('logo_height');
  }

  // logo_position - computed: true, optional: false, required: false
  public get logoPosition() {
    return this.getStringAttribute('logo_position');
  }

  // padding - computed: true, optional: false, required: false
  public get padding() {
    return this.getNumberAttribute('padding');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }
}
export interface DataAuthsignalThemeDarkModePageBackground {
}

export function dataAuthsignalThemeDarkModePageBackgroundToTerraform(struct?: DataAuthsignalThemeDarkModePageBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeDarkModePageBackgroundToHclTerraform(struct?: DataAuthsignalThemeDarkModePageBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeDarkModePageBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeDarkModePageBackground | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeDarkModePageBackground | undefined) {
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
}
export interface DataAuthsignalThemeDarkModeTypographyDisplay {
}

export function dataAuthsignalThemeDarkModeTypographyDisplayToTerraform(struct?: DataAuthsignalThemeDarkModeTypographyDisplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeDarkModeTypographyDisplayToHclTerraform(struct?: DataAuthsignalThemeDarkModeTypographyDisplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeDarkModeTypographyDisplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeDarkModeTypographyDisplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeDarkModeTypographyDisplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_url - computed: true, optional: false, required: false
  public get fontUrl() {
    return this.getStringAttribute('font_url');
  }
}
export interface DataAuthsignalThemeDarkModeTypography {
}

export function dataAuthsignalThemeDarkModeTypographyToTerraform(struct?: DataAuthsignalThemeDarkModeTypography): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeDarkModeTypographyToHclTerraform(struct?: DataAuthsignalThemeDarkModeTypography): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeDarkModeTypographyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeDarkModeTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeDarkModeTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  private _display = new DataAuthsignalThemeDarkModeTypographyDisplayOutputReference(this, "display");
  public get display() {
    return this._display;
  }
}
export interface DataAuthsignalThemeDarkMode {
}

export function dataAuthsignalThemeDarkModeToTerraform(struct?: DataAuthsignalThemeDarkMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeDarkModeToHclTerraform(struct?: DataAuthsignalThemeDarkMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeDarkModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeDarkMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeDarkMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // borders - computed: true, optional: false, required: false
  private _borders = new DataAuthsignalThemeDarkModeBordersOutputReference(this, "borders");
  public get borders() {
    return this._borders;
  }

  // colors - computed: true, optional: false, required: false
  private _colors = new DataAuthsignalThemeDarkModeColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataAuthsignalThemeDarkModeContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }

  // favicon_url - computed: true, optional: false, required: false
  public get faviconUrl() {
    return this.getStringAttribute('favicon_url');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // page_background - computed: true, optional: false, required: false
  private _pageBackground = new DataAuthsignalThemeDarkModePageBackgroundOutputReference(this, "page_background");
  public get pageBackground() {
    return this._pageBackground;
  }

  // primary_color - computed: true, optional: false, required: false
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }

  // typography - computed: true, optional: false, required: false
  private _typography = new DataAuthsignalThemeDarkModeTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }

  // watermark_url - computed: true, optional: false, required: false
  public get watermarkUrl() {
    return this.getStringAttribute('watermark_url');
  }
}
export interface DataAuthsignalThemePageBackground {
}

export function dataAuthsignalThemePageBackgroundToTerraform(struct?: DataAuthsignalThemePageBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemePageBackgroundToHclTerraform(struct?: DataAuthsignalThemePageBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemePageBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemePageBackground | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemePageBackground | undefined) {
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
}
export interface DataAuthsignalThemeTypographyDisplay {
}

export function dataAuthsignalThemeTypographyDisplayToTerraform(struct?: DataAuthsignalThemeTypographyDisplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeTypographyDisplayToHclTerraform(struct?: DataAuthsignalThemeTypographyDisplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeTypographyDisplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeTypographyDisplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeTypographyDisplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_url - computed: true, optional: false, required: false
  public get fontUrl() {
    return this.getStringAttribute('font_url');
  }
}
export interface DataAuthsignalThemeTypography {
}

export function dataAuthsignalThemeTypographyToTerraform(struct?: DataAuthsignalThemeTypography): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthsignalThemeTypographyToHclTerraform(struct?: DataAuthsignalThemeTypography): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthsignalThemeTypographyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAuthsignalThemeTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthsignalThemeTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  private _display = new DataAuthsignalThemeTypographyDisplayOutputReference(this, "display");
  public get display() {
    return this._display;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/theme authsignal_theme}
*/
export class DataAuthsignalTheme extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthsignalTheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthsignalTheme to import
  * @param importFromId The id of the existing DataAuthsignalTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthsignalTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/theme authsignal_theme} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthsignalThemeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuthsignalThemeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'authsignal_theme',
      terraformGeneratorMetadata: {
        providerName: 'authsignal',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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

  // borders - computed: true, optional: false, required: false
  private _borders = new DataAuthsignalThemeBordersOutputReference(this, "borders");
  public get borders() {
    return this._borders;
  }

  // colors - computed: true, optional: false, required: false
  private _colors = new DataAuthsignalThemeColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataAuthsignalThemeContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }

  // dark_mode - computed: true, optional: false, required: false
  private _darkMode = new DataAuthsignalThemeDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }

  // favicon_url - computed: true, optional: false, required: false
  public get faviconUrl() {
    return this.getStringAttribute('favicon_url');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // page_background - computed: true, optional: false, required: false
  private _pageBackground = new DataAuthsignalThemePageBackgroundOutputReference(this, "page_background");
  public get pageBackground() {
    return this._pageBackground;
  }

  // primary_color - computed: true, optional: false, required: false
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }

  // typography - computed: true, optional: false, required: false
  private _typography = new DataAuthsignalThemeTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }

  // watermark_url - computed: true, optional: false, required: false
  public get watermarkUrl() {
    return this.getStringAttribute('watermark_url');
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
