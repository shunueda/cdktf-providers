// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the type of form.  Options are `CUSTOM` (allows the form to be built with fields that do not map specifically to the PingOne directory attributes).  Defaults to `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#category Form#category}
  */
  readonly category?: string;
  /**
  * An integer that specifies the number of columns in the form (min = `1`; max = `4`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#cols Form#cols}
  */
  readonly cols: number;
  /**
  * A single object that specifies the form configuration elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#components Form#components}
  */
  readonly components: FormComponents;
  /**
  * A string that specifies the description of the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#description Form#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to manage the form in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#environment_id Form#environment_id}
  */
  readonly environmentId: string;
  /**
  * A boolean that specifies whether optional fields are highlighted in the rendered form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#mark_optional Form#mark_optional}
  */
  readonly markOptional?: boolean | cdktf.IResolvable;
  /**
  * A boolean that specifies whether required fields are highlighted in the rendered form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#mark_required Form#mark_required}
  */
  readonly markRequired?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the form name, which must be provided and must be unique within an environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#name Form#name}
  */
  readonly name: string;
  /**
  * A string that specifies how to translate the text strings in the form.  Options are `DEFAULT_VALUE`, `KEY`, `TRANSLATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#translation_method Form#translation_method}
  */
  readonly translationMethod?: string;
}
export interface FormComponentsFieldsOptions {
  /**
  * A string that specifies the option's label in the form field that is shown to the end user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#label Form#label}
  */
  readonly label: string;
  /**
  * A string that specifies the option's value in the form field that is posted as form data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#value Form#value}
  */
  readonly value: string;
}

export function formComponentsFieldsOptionsToTerraform(struct?: FormComponentsFieldsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function formComponentsFieldsOptionsToHclTerraform(struct?: FormComponentsFieldsOptions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FormComponentsFieldsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FormComponentsFieldsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormComponentsFieldsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FormComponentsFieldsOptionsList extends cdktf.ComplexList {
  public internalValue? : FormComponentsFieldsOptions[] | cdktf.IResolvable

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
  public get(index: number): FormComponentsFieldsOptionsOutputReference {
    return new FormComponentsFieldsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FormComponentsFieldsPosition {
  /**
  * An integer that specifies the column position of the form field in the form  (min = `0`; max = `3`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#col Form#col}
  */
  readonly col: number;
  /**
  * An integer that specifies the row position of the form field in the form (maximum number is `50`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#row Form#row}
  */
  readonly row: number;
  /**
  * An integer that specifies the width of the form field in the form (in percentage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#width Form#width}
  */
  readonly width?: number;
}

export function formComponentsFieldsPositionToTerraform(struct?: FormComponentsFieldsPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    col: cdktf.numberToTerraform(struct!.col),
    row: cdktf.numberToTerraform(struct!.row),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function formComponentsFieldsPositionToHclTerraform(struct?: FormComponentsFieldsPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    col: {
      value: cdktf.numberToHclTerraform(struct!.col),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    row: {
      value: cdktf.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FormComponentsFieldsPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FormComponentsFieldsPosition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._col !== undefined) {
      hasAnyValues = true;
      internalValueResult.col = this._col;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormComponentsFieldsPosition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._col = undefined;
      this._row = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._col = value.col;
      this._row = value.row;
      this._width = value.width;
    }
  }

  // col - computed: false, optional: false, required: true
  private _col?: number; 
  public get col() {
    return this.getNumberAttribute('col');
  }
  public set col(value: number) {
    this._col = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colInput() {
    return this._col;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface FormComponentsFieldsStylesPadding {
  /**
  * An integer that specifies the bottom padding (in pixels) to apply to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#bottom Form#bottom}
  */
  readonly bottom?: number;
  /**
  * An integer that specifies the left padding (in pixels) to apply to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#left Form#left}
  */
  readonly left?: number;
  /**
  * An integer that specifies the right padding (in pixels) to apply to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#right Form#right}
  */
  readonly right?: number;
  /**
  * An integer that specifies the top padding (in pixels) to apply to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#top Form#top}
  */
  readonly top?: number;
}

export function formComponentsFieldsStylesPaddingToTerraform(struct?: FormComponentsFieldsStylesPadding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktf.numberToTerraform(struct!.bottom),
    left: cdktf.numberToTerraform(struct!.left),
    right: cdktf.numberToTerraform(struct!.right),
    top: cdktf.numberToTerraform(struct!.top),
  }
}


export function formComponentsFieldsStylesPaddingToHclTerraform(struct?: FormComponentsFieldsStylesPadding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bottom: {
      value: cdktf.numberToHclTerraform(struct!.bottom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    left: {
      value: cdktf.numberToHclTerraform(struct!.left),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    right: {
      value: cdktf.numberToHclTerraform(struct!.right),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top: {
      value: cdktf.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FormComponentsFieldsStylesPaddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FormComponentsFieldsStylesPadding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormComponentsFieldsStylesPadding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bottom = undefined;
      this._left = undefined;
      this._right = undefined;
      this._top = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bottom = value.bottom;
      this._left = value.left;
      this._right = value.right;
      this._top = value.top;
    }
  }

  // bottom - computed: false, optional: true, required: false
  private _bottom?: number; 
  public get bottom() {
    return this.getNumberAttribute('bottom');
  }
  public set bottom(value: number) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
  }

  // left - computed: false, optional: true, required: false
  private _left?: number; 
  public get left() {
    return this.getNumberAttribute('left');
  }
  public set left(value: number) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // right - computed: false, optional: true, required: false
  private _right?: number; 
  public get right() {
    return this.getNumberAttribute('right');
  }
  public set right(value: number) {
    this._right = value;
  }
  public resetRight() {
    this._right = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }

  // top - computed: false, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }
}
export interface FormComponentsFieldsStyles {
  /**
  * A string that specifies the button alignment.  Options are `CENTER`, `LEFT`, `RIGHT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#alignment Form#alignment}
  */
  readonly alignment?: string;
  /**
  * A string that specifies the button background color. The value must be a valid hexadecimal color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#background_color Form#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * A string that specifies the button border color. The value must be a valid hexadecimal color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#border_color Form#border_color}
  */
  readonly borderColor?: string;
  /**
  * A boolean that specifies whether the button is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#enabled Form#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * An integer that specifies a custom height of the field (in pixels) when displayed in the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#height Form#height}
  */
  readonly height?: number;
  /**
  * A single object that specifies custom padding styles for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#padding Form#padding}
  */
  readonly padding?: FormComponentsFieldsStylesPadding;
  /**
  * A string that specifies the button text color. The value must be a valid hexadecimal color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#text_color Form#text_color}
  */
  readonly textColor?: string;
  /**
  * An integer that specifies the button width. Set as a percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#width Form#width}
  */
  readonly width?: number;
  /**
  * A string that specifies the unit to apply to the `width` parameter.  Options are `PERCENT`, `PIXELS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#width_unit Form#width_unit}
  */
  readonly widthUnit?: string;
}

export function formComponentsFieldsStylesToTerraform(struct?: FormComponentsFieldsStyles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment: cdktf.stringToTerraform(struct!.alignment),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    border_color: cdktf.stringToTerraform(struct!.borderColor),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    height: cdktf.numberToTerraform(struct!.height),
    padding: formComponentsFieldsStylesPaddingToTerraform(struct!.padding),
    text_color: cdktf.stringToTerraform(struct!.textColor),
    width: cdktf.numberToTerraform(struct!.width),
    width_unit: cdktf.stringToTerraform(struct!.widthUnit),
  }
}


export function formComponentsFieldsStylesToHclTerraform(struct?: FormComponentsFieldsStyles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment: {
      value: cdktf.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_color: {
      value: cdktf.stringToHclTerraform(struct!.borderColor),
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
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    padding: {
      value: formComponentsFieldsStylesPaddingToHclTerraform(struct!.padding),
      isBlock: true,
      type: "struct",
      storageClassType: "FormComponentsFieldsStylesPadding",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width_unit: {
      value: cdktf.stringToHclTerraform(struct!.widthUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FormComponentsFieldsStylesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FormComponentsFieldsStyles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._borderColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderColor = this._borderColor;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._padding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding?.internalValue;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthUnit = this._widthUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormComponentsFieldsStyles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignment = undefined;
      this._backgroundColor = undefined;
      this._borderColor = undefined;
      this._enabled = undefined;
      this._height = undefined;
      this._padding.internalValue = undefined;
      this._textColor = undefined;
      this._width = undefined;
      this._widthUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignment = value.alignment;
      this._backgroundColor = value.backgroundColor;
      this._borderColor = value.borderColor;
      this._enabled = value.enabled;
      this._height = value.height;
      this._padding.internalValue = value.padding;
      this._textColor = value.textColor;
      this._width = value.width;
      this._widthUnit = value.widthUnit;
    }
  }

  // alignment - computed: false, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // border_color - computed: false, optional: true, required: false
  private _borderColor?: string; 
  public get borderColor() {
    return this.getStringAttribute('border_color');
  }
  public set borderColor(value: string) {
    this._borderColor = value;
  }
  public resetBorderColor() {
    this._borderColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderColorInput() {
    return this._borderColor;
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

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // padding - computed: false, optional: true, required: false
  private _padding = new FormComponentsFieldsStylesPaddingOutputReference(this, "padding");
  public get padding() {
    return this._padding;
  }
  public putPadding(value: FormComponentsFieldsStylesPadding) {
    this._padding.internalValue = value;
  }
  public resetPadding() {
    this._padding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding.internalValue;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_unit - computed: false, optional: true, required: false
  private _widthUnit?: string; 
  public get widthUnit() {
    return this.getStringAttribute('width_unit');
  }
  public set widthUnit(value: string) {
    this._widthUnit = value;
  }
  public resetWidthUnit() {
    this._widthUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthUnitInput() {
    return this._widthUnit;
  }
}
export interface FormComponentsFieldsValidation {
  /**
  * A string that specifies the error message to be displayed when the field validation fails.  When configuring this parameter, the `regex` parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#error_message Form#error_message}
  */
  readonly errorMessage?: string;
  /**
  * A string that specifies a validation regular expression. The expression must be a valid regular expression string. This is a required property when the validation type is `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#regex Form#regex}
  */
  readonly regex?: string;
  /**
  * A string that specifies the validation type.  Options are `CUSTOM`, `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#type Form#type}
  */
  readonly type: string;
}

export function formComponentsFieldsValidationToTerraform(struct?: FormComponentsFieldsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
    regex: cdktf.stringToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function formComponentsFieldsValidationToHclTerraform(struct?: FormComponentsFieldsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_message: {
      value: cdktf.stringToHclTerraform(struct!.errorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
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

export class FormComponentsFieldsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FormComponentsFieldsValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormComponentsFieldsValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorMessage = undefined;
      this._regex = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorMessage = value.errorMessage;
      this._regex = value.regex;
      this._type = value.type;
    }
  }

  // error_message - computed: false, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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
export interface FormComponentsFields {
  /**
  * **Required** when the `type` is one of `QR_CODE`, `RECAPTCHA_V2`.  A string that specifies the reCAPTCHA alignment.  Options are `CENTER`, `LEFT`, `RIGHT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#alignment Form#alignment}
  */
  readonly alignment?: string;
  /**
  * Optional when the `type` is one of `CHECKBOX`, `COMBOBOX`, `DROPDOWN`, `PASSWORD`, `PASSWORD_VERIFY`, `RADIO`, `TEXT`.  A boolean that specifies whether the linked directory attribute is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#attribute_disabled Form#attribute_disabled}
  */
  readonly attributeDisabled?: boolean | cdktf.IResolvable;
  /**
  * Optional when the `type` is one of `SLATE_TEXTBLOB`, `TEXTBLOB`.  A string that specifies the field's content (for example, escaped JSON string when the field type is `SLATE_TEXTBLOB` - use `jsonencode` to convert JSON to escaped JSON string.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#content Form#content}
  */
  readonly content?: string;
  /**
  * **Required** when the `type` is one of `CHECKBOX`, `COMBOBOX`, `DROPDOWN`, `FLOW_BUTTON`, `FLOW_LINK`, `PASSWORD`, `PASSWORD_VERIFY`, `QR_CODE`, `RADIO`, `TEXT`.  A string that specifies an identifier for the field component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#key Form#key}
  */
  readonly key?: string;
  /**
  * **Required** when the `type` is one of `CHECKBOX`, `COMBOBOX`, `DROPDOWN`, `FLOW_BUTTON`, `FLOW_LINK`, `PASSWORD`, `PASSWORD_VERIFY`, `RADIO`, `SUBMIT_BUTTON`, `TEXT`.  A string that specifies the field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#label Form#label}
  */
  readonly label?: string;
  /**
  * Optional when the `type` is one of `CHECKBOX`, `COMBOBOX`, `DROPDOWN`, `PASSWORD`, `PASSWORD_VERIFY`, `RADIO`, `TEXT`.  A string that specifies how the field is rendered.  Options are `DEFAULT`, `FLOAT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#label_mode Form#label_mode}
  */
  readonly labelMode?: string;
  /**
  * Optional when the `type` is one of `PASSWORD_VERIFY`.  A string that when a second field for verifies password is used, this property specifies the field label for that verify field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#label_password_verify Form#label_password_verify}
  */
  readonly labelPasswordVerify?: string;
  /**
  * **Required** when the `type` is one of `CHECKBOX`, `RADIO`, optional when the `type` is one of `COMBOBOX`, `DROPDOWN`, `PASSWORD`, `PASSWORD_VERIFY`, `TEXT`.  A string that specifies layout attributes for radio button and checkbox fields.  Options are `HORIZONTAL`, `VERTICAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#layout Form#layout}
  */
  readonly layout?: string;
  /**
  * **Required** when the `type` is one of `CHECKBOX`, `COMBOBOX`, `DROPDOWN`, `RADIO`.  An array of objects that specifies the unique list of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#options Form#options}
  */
  readonly options?: FormComponentsFieldsOptions[] | cdktf.IResolvable;
  /**
  * A single object that specifies the position of the form field in the form.  The combination of `col` and `row` must be unique between form fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#position Form#position}
  */
  readonly position: FormComponentsFieldsPosition;
  /**
  * **Required** when the `type` is one of `QR_CODE`.  A string that specifies the QR Code type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#qr_code_type Form#qr_code_type}
  */
  readonly qrCodeType?: string;
  /**
  * Optional when the `type` is one of `CHECKBOX`, `COMBOBOX`, `DROPDOWN`, `PASSWORD`, `PASSWORD_VERIFY`, `RADIO`, `TEXT`.  A boolean that specifies whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#required Form#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Optional when the `type` is one of `QR_CODE`.  A boolean that specifies the border visibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#show_border Form#show_border}
  */
  readonly showBorder?: boolean | cdktf.IResolvable;
  /**
  * Optional when the `type` is one of `PASSWORD`, `PASSWORD_VERIFY`.  A boolean that specifies whether to display password requirements to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#show_password_requirements Form#show_password_requirements}
  */
  readonly showPasswordRequirements?: boolean | cdktf.IResolvable;
  /**
  * **Required** when the `type` is one of `RECAPTCHA_V2`.  A string that specifies the reCAPTCHA size.  Options are `COMPACT`, `NORMAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#size Form#size}
  */
  readonly size?: string;
  /**
  * Optional when the `type` is one of `FLOW_BUTTON`, `FLOW_LINK`, `SUBMIT_BUTTON`.  A single object that describes style settings for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#styles Form#styles}
  */
  readonly styles?: FormComponentsFieldsStyles;
  /**
  * **Required** when the `type` is one of `RECAPTCHA_V2`.  A string that specifies the reCAPTCHA theme.  Options are `DARK`, `LIGHT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#theme Form#theme}
  */
  readonly theme?: string;
  /**
  * A string that specifies the type of form field.  Options are `CHECKBOX`, `COMBOBOX`, `DIVIDER`, `DROPDOWN`, `EMPTY_FIELD`, `ERROR_DISPLAY`, `FLOW_BUTTON`, `FLOW_LINK`, `PASSWORD`, `PASSWORD_VERIFY`, `QR_CODE`, `RADIO`, `RECAPTCHA_V2`, `SLATE_TEXTBLOB`, `SUBMIT_BUTTON`, `TEXT`, `TEXTBLOB`.  The `TEXTBLOB` form field type has been deprecated and will be removed in a future release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#type Form#type}
  */
  readonly type: string;
  /**
  * **Required** when the `type` is one of `TEXT`, optional when the `type` is one of `PASSWORD`, `PASSWORD_VERIFY`.  An object containing validation data for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#validation Form#validation}
  */
  readonly validation?: FormComponentsFieldsValidation;
}

export function formComponentsFieldsToTerraform(struct?: FormComponentsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment: cdktf.stringToTerraform(struct!.alignment),
    attribute_disabled: cdktf.booleanToTerraform(struct!.attributeDisabled),
    content: cdktf.stringToTerraform(struct!.content),
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.stringToTerraform(struct!.label),
    label_mode: cdktf.stringToTerraform(struct!.labelMode),
    label_password_verify: cdktf.stringToTerraform(struct!.labelPasswordVerify),
    layout: cdktf.stringToTerraform(struct!.layout),
    options: cdktf.listMapper(formComponentsFieldsOptionsToTerraform, false)(struct!.options),
    position: formComponentsFieldsPositionToTerraform(struct!.position),
    qr_code_type: cdktf.stringToTerraform(struct!.qrCodeType),
    required: cdktf.booleanToTerraform(struct!.required),
    show_border: cdktf.booleanToTerraform(struct!.showBorder),
    show_password_requirements: cdktf.booleanToTerraform(struct!.showPasswordRequirements),
    size: cdktf.stringToTerraform(struct!.size),
    styles: formComponentsFieldsStylesToTerraform(struct!.styles),
    theme: cdktf.stringToTerraform(struct!.theme),
    type: cdktf.stringToTerraform(struct!.type),
    validation: formComponentsFieldsValidationToTerraform(struct!.validation),
  }
}


export function formComponentsFieldsToHclTerraform(struct?: FormComponentsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment: {
      value: cdktf.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.attributeDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_mode: {
      value: cdktf.stringToHclTerraform(struct!.labelMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_password_verify: {
      value: cdktf.stringToHclTerraform(struct!.labelPasswordVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: cdktf.stringToHclTerraform(struct!.layout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(formComponentsFieldsOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "set",
      storageClassType: "FormComponentsFieldsOptionsList",
    },
    position: {
      value: formComponentsFieldsPositionToHclTerraform(struct!.position),
      isBlock: true,
      type: "struct",
      storageClassType: "FormComponentsFieldsPosition",
    },
    qr_code_type: {
      value: cdktf.stringToHclTerraform(struct!.qrCodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_border: {
      value: cdktf.booleanToHclTerraform(struct!.showBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_password_requirements: {
      value: cdktf.booleanToHclTerraform(struct!.showPasswordRequirements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    styles: {
      value: formComponentsFieldsStylesToHclTerraform(struct!.styles),
      isBlock: true,
      type: "struct",
      storageClassType: "FormComponentsFieldsStyles",
    },
    theme: {
      value: cdktf.stringToHclTerraform(struct!.theme),
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
    validation: {
      value: formComponentsFieldsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "FormComponentsFieldsValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FormComponentsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FormComponentsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._attributeDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDisabled = this._attributeDisabled;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._labelMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMode = this._labelMode;
    }
    if (this._labelPasswordVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelPasswordVerify = this._labelPasswordVerify;
    }
    if (this._layout !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._position?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position?.internalValue;
    }
    if (this._qrCodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.qrCodeType = this._qrCodeType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._showBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.showBorder = this._showBorder;
    }
    if (this._showPasswordRequirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPasswordRequirements = this._showPasswordRequirements;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._styles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.styles = this._styles?.internalValue;
    }
    if (this._theme !== undefined) {
      hasAnyValues = true;
      internalValueResult.theme = this._theme;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormComponentsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignment = undefined;
      this._attributeDisabled = undefined;
      this._content = undefined;
      this._key = undefined;
      this._label = undefined;
      this._labelMode = undefined;
      this._labelPasswordVerify = undefined;
      this._layout = undefined;
      this._options.internalValue = undefined;
      this._position.internalValue = undefined;
      this._qrCodeType = undefined;
      this._required = undefined;
      this._showBorder = undefined;
      this._showPasswordRequirements = undefined;
      this._size = undefined;
      this._styles.internalValue = undefined;
      this._theme = undefined;
      this._type = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignment = value.alignment;
      this._attributeDisabled = value.attributeDisabled;
      this._content = value.content;
      this._key = value.key;
      this._label = value.label;
      this._labelMode = value.labelMode;
      this._labelPasswordVerify = value.labelPasswordVerify;
      this._layout = value.layout;
      this._options.internalValue = value.options;
      this._position.internalValue = value.position;
      this._qrCodeType = value.qrCodeType;
      this._required = value.required;
      this._showBorder = value.showBorder;
      this._showPasswordRequirements = value.showPasswordRequirements;
      this._size = value.size;
      this._styles.internalValue = value.styles;
      this._theme = value.theme;
      this._type = value.type;
      this._validation.internalValue = value.validation;
    }
  }

  // alignment - computed: false, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // attribute_disabled - computed: true, optional: true, required: false
  private _attributeDisabled?: boolean | cdktf.IResolvable; 
  public get attributeDisabled() {
    return this.getBooleanAttribute('attribute_disabled');
  }
  public set attributeDisabled(value: boolean | cdktf.IResolvable) {
    this._attributeDisabled = value;
  }
  public resetAttributeDisabled() {
    this._attributeDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDisabledInput() {
    return this._attributeDisabled;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // label - computed: false, optional: true, required: false
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

  // label_mode - computed: false, optional: true, required: false
  private _labelMode?: string; 
  public get labelMode() {
    return this.getStringAttribute('label_mode');
  }
  public set labelMode(value: string) {
    this._labelMode = value;
  }
  public resetLabelMode() {
    this._labelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeInput() {
    return this._labelMode;
  }

  // label_password_verify - computed: false, optional: true, required: false
  private _labelPasswordVerify?: string; 
  public get labelPasswordVerify() {
    return this.getStringAttribute('label_password_verify');
  }
  public set labelPasswordVerify(value: string) {
    this._labelPasswordVerify = value;
  }
  public resetLabelPasswordVerify() {
    this._labelPasswordVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPasswordVerifyInput() {
    return this._labelPasswordVerify;
  }

  // layout - computed: false, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // options - computed: false, optional: true, required: false
  private _options = new FormComponentsFieldsOptionsList(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: FormComponentsFieldsOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // other_option_attribute_disabled - computed: true, optional: false, required: false
  public get otherOptionAttributeDisabled() {
    return this.getBooleanAttribute('other_option_attribute_disabled');
  }

  // other_option_enabled - computed: true, optional: false, required: false
  public get otherOptionEnabled() {
    return this.getBooleanAttribute('other_option_enabled');
  }

  // other_option_input_label - computed: true, optional: false, required: false
  public get otherOptionInputLabel() {
    return this.getStringAttribute('other_option_input_label');
  }

  // other_option_key - computed: true, optional: false, required: false
  public get otherOptionKey() {
    return this.getStringAttribute('other_option_key');
  }

  // other_option_label - computed: true, optional: false, required: false
  public get otherOptionLabel() {
    return this.getStringAttribute('other_option_label');
  }

  // position - computed: false, optional: false, required: true
  private _position = new FormComponentsFieldsPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: FormComponentsFieldsPosition) {
    this._position.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // qr_code_type - computed: false, optional: true, required: false
  private _qrCodeType?: string; 
  public get qrCodeType() {
    return this.getStringAttribute('qr_code_type');
  }
  public set qrCodeType(value: string) {
    this._qrCodeType = value;
  }
  public resetQrCodeType() {
    this._qrCodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qrCodeTypeInput() {
    return this._qrCodeType;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // show_border - computed: true, optional: true, required: false
  private _showBorder?: boolean | cdktf.IResolvable; 
  public get showBorder() {
    return this.getBooleanAttribute('show_border');
  }
  public set showBorder(value: boolean | cdktf.IResolvable) {
    this._showBorder = value;
  }
  public resetShowBorder() {
    this._showBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBorderInput() {
    return this._showBorder;
  }

  // show_password_requirements - computed: true, optional: true, required: false
  private _showPasswordRequirements?: boolean | cdktf.IResolvable; 
  public get showPasswordRequirements() {
    return this.getBooleanAttribute('show_password_requirements');
  }
  public set showPasswordRequirements(value: boolean | cdktf.IResolvable) {
    this._showPasswordRequirements = value;
  }
  public resetShowPasswordRequirements() {
    this._showPasswordRequirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPasswordRequirementsInput() {
    return this._showPasswordRequirements;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // styles - computed: false, optional: true, required: false
  private _styles = new FormComponentsFieldsStylesOutputReference(this, "styles");
  public get styles() {
    return this._styles;
  }
  public putStyles(value: FormComponentsFieldsStyles) {
    this._styles.internalValue = value;
  }
  public resetStyles() {
    this._styles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stylesInput() {
    return this._styles.internalValue;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
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

  // validation - computed: false, optional: true, required: false
  private _validation = new FormComponentsFieldsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: FormComponentsFieldsValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

export class FormComponentsFieldsList extends cdktf.ComplexList {
  public internalValue? : FormComponentsFields[] | cdktf.IResolvable

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
  public get(index: number): FormComponentsFieldsOutputReference {
    return new FormComponentsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FormComponents {
  /**
  * An ordered list of objects that specifies the form fields that make up the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#fields Form#fields}
  */
  readonly fields: FormComponentsFields[] | cdktf.IResolvable;
}

export function formComponentsToTerraform(struct?: FormComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(formComponentsFieldsToTerraform, false)(struct!.fields),
  }
}


export function formComponentsToHclTerraform(struct?: FormComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(formComponentsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "FormComponentsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FormComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FormComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new FormComponentsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: FormComponentsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form pingone_form}
*/
export class Form extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_form";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Form resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Form to import
  * @param importFromId The id of the existing Form that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Form to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_form", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/form pingone_form} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormConfig
  */
  public constructor(scope: Construct, id: string, config: FormConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_form',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._cols = config.cols;
    this._components.internalValue = config.components;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._markOptional = config.markOptional;
    this._markRequired = config.markRequired;
    this._name = config.name;
    this._translationMethod = config.translationMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cols - computed: false, optional: false, required: true
  private _cols?: number; 
  public get cols() {
    return this.getNumberAttribute('cols');
  }
  public set cols(value: number) {
    this._cols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colsInput() {
    return this._cols;
  }

  // components - computed: false, optional: false, required: true
  private _components = new FormComponentsOutputReference(this, "components");
  public get components() {
    return this._components;
  }
  public putComponents(value: FormComponents) {
    this._components.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // field_types - computed: true, optional: false, required: false
  public get fieldTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('field_types'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mark_optional - computed: true, optional: true, required: false
  private _markOptional?: boolean | cdktf.IResolvable; 
  public get markOptional() {
    return this.getBooleanAttribute('mark_optional');
  }
  public set markOptional(value: boolean | cdktf.IResolvable) {
    this._markOptional = value;
  }
  public resetMarkOptional() {
    this._markOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markOptionalInput() {
    return this._markOptional;
  }

  // mark_required - computed: true, optional: true, required: false
  private _markRequired?: boolean | cdktf.IResolvable; 
  public get markRequired() {
    return this.getBooleanAttribute('mark_required');
  }
  public set markRequired(value: boolean | cdktf.IResolvable) {
    this._markRequired = value;
  }
  public resetMarkRequired() {
    this._markRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markRequiredInput() {
    return this._markRequired;
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

  // translation_method - computed: false, optional: true, required: false
  private _translationMethod?: string; 
  public get translationMethod() {
    return this.getStringAttribute('translation_method');
  }
  public set translationMethod(value: string) {
    this._translationMethod = value;
  }
  public resetTranslationMethod() {
    this._translationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationMethodInput() {
    return this._translationMethod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      cols: cdktf.numberToTerraform(this._cols),
      components: formComponentsToTerraform(this._components.internalValue),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      mark_optional: cdktf.booleanToTerraform(this._markOptional),
      mark_required: cdktf.booleanToTerraform(this._markRequired),
      name: cdktf.stringToTerraform(this._name),
      translation_method: cdktf.stringToTerraform(this._translationMethod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cols: {
        value: cdktf.numberToHclTerraform(this._cols),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      components: {
        value: formComponentsToHclTerraform(this._components.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FormComponents",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mark_optional: {
        value: cdktf.booleanToHclTerraform(this._markOptional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mark_required: {
        value: cdktf.booleanToHclTerraform(this._markRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translation_method: {
        value: cdktf.stringToHclTerraform(this._translationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
