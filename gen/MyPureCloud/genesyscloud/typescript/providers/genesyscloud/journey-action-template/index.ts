// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JourneyActionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the action template's functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#description JourneyActionTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#id JourneyActionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The media type of the action configured by the action template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#media_type JourneyActionTemplate#media_type}
  */
  readonly mediaType: string;
  /**
  * Name of the action template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#name JourneyActionTemplate#name}
  */
  readonly name: string;
  /**
  * The state of the action template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#state JourneyActionTemplate#state}
  */
  readonly state: string;
  /**
  * content_offer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#content_offer JourneyActionTemplate#content_offer}
  */
  readonly contentOffer?: JourneyActionTemplateContentOffer[] | cdktf.IResolvable;
}
export interface JourneyActionTemplateContentOfferCallToAction {
  /**
  * Where should the URL be opened when the user clicks on the call to action button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#target JourneyActionTemplate#target}
  */
  readonly target?: string;
  /**
  * Text displayed on the call to action button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#text JourneyActionTemplate#text}
  */
  readonly text?: string;
  /**
  * URL to open when user clicks on the call to action button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#url JourneyActionTemplate#url}
  */
  readonly url: string;
}

export function journeyActionTemplateContentOfferCallToActionToTerraform(struct?: JourneyActionTemplateContentOfferCallToAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    text: cdktf.stringToTerraform(struct!.text),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function journeyActionTemplateContentOfferCallToActionToHclTerraform(struct?: JourneyActionTemplateContentOfferCallToAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class JourneyActionTemplateContentOfferCallToActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferCallToAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferCallToAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._text = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._text = value.text;
      this._url = value.url;
    }
  }

  // target - computed: false, optional: true, required: false
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class JourneyActionTemplateContentOfferCallToActionList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferCallToAction[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferCallToActionOutputReference {
    return new JourneyActionTemplateContentOfferCallToActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStyleBody {
  /**
  * Color of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#color JourneyActionTemplate#color}
  */
  readonly color?: string;
  /**
  * Font of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font JourneyActionTemplate#font}
  */
  readonly font?: string;
  /**
  * Font size of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font_size JourneyActionTemplate#font_size}
  */
  readonly fontSize?: string;
  /**
  * Text alignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#text_align JourneyActionTemplate#text_align}
  */
  readonly textAlign?: string;
}

export function journeyActionTemplateContentOfferStyleBodyToTerraform(struct?: JourneyActionTemplateContentOfferStyleBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    font: cdktf.stringToTerraform(struct!.font),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    text_align: cdktf.stringToTerraform(struct!.textAlign),
  }
}


export function journeyActionTemplateContentOfferStyleBodyToHclTerraform(struct?: JourneyActionTemplateContentOfferStyleBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font: {
      value: cdktf.stringToHclTerraform(struct!.font),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_align: {
      value: cdktf.stringToHclTerraform(struct!.textAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStyleBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStyleBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._font !== undefined) {
      hasAnyValues = true;
      internalValueResult.font = this._font;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferStyleBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._font = undefined;
      this._fontSize = undefined;
      this._textAlign = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._font = value.font;
      this._fontSize = value.fontSize;
      this._textAlign = value.textAlign;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // font - computed: false, optional: true, required: false
  private _font?: string; 
  public get font() {
    return this.getStringAttribute('font');
  }
  public set font(value: string) {
    this._font = value;
  }
  public resetFont() {
    this._font = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontInput() {
    return this._font;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // text_align - computed: false, optional: true, required: false
  private _textAlign?: string; 
  public get textAlign() {
    return this.getStringAttribute('text_align');
  }
  public set textAlign(value: string) {
    this._textAlign = value;
  }
  public resetTextAlign() {
    this._textAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignInput() {
    return this._textAlign;
  }
}

export class JourneyActionTemplateContentOfferStyleBodyList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStyleBody[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStyleBodyOutputReference {
    return new JourneyActionTemplateContentOfferStyleBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStyleCloseButton {
  /**
  * Color of button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#color JourneyActionTemplate#color}
  */
  readonly color?: string;
  /**
  * Opacity of button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#opacity JourneyActionTemplate#opacity}
  */
  readonly opacity?: number;
}

export function journeyActionTemplateContentOfferStyleCloseButtonToTerraform(struct?: JourneyActionTemplateContentOfferStyleCloseButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    opacity: cdktf.numberToTerraform(struct!.opacity),
  }
}


export function journeyActionTemplateContentOfferStyleCloseButtonToHclTerraform(struct?: JourneyActionTemplateContentOfferStyleCloseButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opacity: {
      value: cdktf.numberToHclTerraform(struct!.opacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStyleCloseButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStyleCloseButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferStyleCloseButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._opacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._opacity = value.opacity;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity?: number; 
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }
  public set opacity(value: number) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }
}

export class JourneyActionTemplateContentOfferStyleCloseButtonList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStyleCloseButton[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStyleCloseButtonOutputReference {
    return new JourneyActionTemplateContentOfferStyleCloseButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStyleCtaButton {
  /**
  * Background color of the CTA button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#background_color JourneyActionTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Color of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#color JourneyActionTemplate#color}
  */
  readonly color?: string;
  /**
  * Font of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font JourneyActionTemplate#font}
  */
  readonly font?: string;
  /**
  * Font size of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font_size JourneyActionTemplate#font_size}
  */
  readonly fontSize?: string;
  /**
  * Text alignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#text_align JourneyActionTemplate#text_align}
  */
  readonly textAlign?: string;
}

export function journeyActionTemplateContentOfferStyleCtaButtonToTerraform(struct?: JourneyActionTemplateContentOfferStyleCtaButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    color: cdktf.stringToTerraform(struct!.color),
    font: cdktf.stringToTerraform(struct!.font),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    text_align: cdktf.stringToTerraform(struct!.textAlign),
  }
}


export function journeyActionTemplateContentOfferStyleCtaButtonToHclTerraform(struct?: JourneyActionTemplateContentOfferStyleCtaButton | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font: {
      value: cdktf.stringToHclTerraform(struct!.font),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_align: {
      value: cdktf.stringToHclTerraform(struct!.textAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStyleCtaButtonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStyleCtaButton | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._font !== undefined) {
      hasAnyValues = true;
      internalValueResult.font = this._font;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferStyleCtaButton | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._color = undefined;
      this._font = undefined;
      this._fontSize = undefined;
      this._textAlign = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._color = value.color;
      this._font = value.font;
      this._fontSize = value.fontSize;
      this._textAlign = value.textAlign;
    }
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

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // font - computed: false, optional: true, required: false
  private _font?: string; 
  public get font() {
    return this.getStringAttribute('font');
  }
  public set font(value: string) {
    this._font = value;
  }
  public resetFont() {
    this._font = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontInput() {
    return this._font;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // text_align - computed: false, optional: true, required: false
  private _textAlign?: string; 
  public get textAlign() {
    return this.getStringAttribute('text_align');
  }
  public set textAlign(value: string) {
    this._textAlign = value;
  }
  public resetTextAlign() {
    this._textAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignInput() {
    return this._textAlign;
  }
}

export class JourneyActionTemplateContentOfferStyleCtaButtonList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStyleCtaButton[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStyleCtaButtonOutputReference {
    return new JourneyActionTemplateContentOfferStyleCtaButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStyleHeadline {
  /**
  * Color of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#color JourneyActionTemplate#color}
  */
  readonly color?: string;
  /**
  * Font of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font JourneyActionTemplate#font}
  */
  readonly font?: string;
  /**
  * Font size of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font_size JourneyActionTemplate#font_size}
  */
  readonly fontSize?: string;
  /**
  * Text alignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#text_align JourneyActionTemplate#text_align}
  */
  readonly textAlign?: string;
}

export function journeyActionTemplateContentOfferStyleHeadlineToTerraform(struct?: JourneyActionTemplateContentOfferStyleHeadline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    font: cdktf.stringToTerraform(struct!.font),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    text_align: cdktf.stringToTerraform(struct!.textAlign),
  }
}


export function journeyActionTemplateContentOfferStyleHeadlineToHclTerraform(struct?: JourneyActionTemplateContentOfferStyleHeadline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font: {
      value: cdktf.stringToHclTerraform(struct!.font),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_align: {
      value: cdktf.stringToHclTerraform(struct!.textAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStyleHeadlineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStyleHeadline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._font !== undefined) {
      hasAnyValues = true;
      internalValueResult.font = this._font;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferStyleHeadline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._font = undefined;
      this._fontSize = undefined;
      this._textAlign = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._font = value.font;
      this._fontSize = value.fontSize;
      this._textAlign = value.textAlign;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // font - computed: false, optional: true, required: false
  private _font?: string; 
  public get font() {
    return this.getStringAttribute('font');
  }
  public set font(value: string) {
    this._font = value;
  }
  public resetFont() {
    this._font = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontInput() {
    return this._font;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // text_align - computed: false, optional: true, required: false
  private _textAlign?: string; 
  public get textAlign() {
    return this.getStringAttribute('text_align');
  }
  public set textAlign(value: string) {
    this._textAlign = value;
  }
  public resetTextAlign() {
    this._textAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignInput() {
    return this._textAlign;
  }
}

export class JourneyActionTemplateContentOfferStyleHeadlineList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStyleHeadline[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStyleHeadlineOutputReference {
    return new JourneyActionTemplateContentOfferStyleHeadlineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStyleOffer {
  /**
  * Background color of the offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#background_color JourneyActionTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Text color of the offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#color JourneyActionTemplate#color}
  */
  readonly color?: string;
  /**
  * Padding of the offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#padding JourneyActionTemplate#padding}
  */
  readonly padding?: string;
}

export function journeyActionTemplateContentOfferStyleOfferToTerraform(struct?: JourneyActionTemplateContentOfferStyleOffer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    color: cdktf.stringToTerraform(struct!.color),
    padding: cdktf.stringToTerraform(struct!.padding),
  }
}


export function journeyActionTemplateContentOfferStyleOfferToHclTerraform(struct?: JourneyActionTemplateContentOfferStyleOffer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.stringToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStyleOfferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStyleOffer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferStyleOffer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._color = undefined;
      this._padding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._color = value.color;
      this._padding = value.padding;
    }
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

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: string; 
  public get padding() {
    return this.getStringAttribute('padding');
  }
  public set padding(value: string) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }
}

export class JourneyActionTemplateContentOfferStyleOfferList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStyleOffer[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStyleOfferOutputReference {
    return new JourneyActionTemplateContentOfferStyleOfferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStylePosition {
  /**
  * Bottom positioning offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#bottom JourneyActionTemplate#bottom}
  */
  readonly bottom?: string;
  /**
  * Left positioning offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#left JourneyActionTemplate#left}
  */
  readonly left?: string;
  /**
  * Right positioning offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#right JourneyActionTemplate#right}
  */
  readonly right?: string;
  /**
  * Top positioning offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#top JourneyActionTemplate#top}
  */
  readonly top?: string;
}

export function journeyActionTemplateContentOfferStylePositionToTerraform(struct?: JourneyActionTemplateContentOfferStylePosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktf.stringToTerraform(struct!.bottom),
    left: cdktf.stringToTerraform(struct!.left),
    right: cdktf.stringToTerraform(struct!.right),
    top: cdktf.stringToTerraform(struct!.top),
  }
}


export function journeyActionTemplateContentOfferStylePositionToHclTerraform(struct?: JourneyActionTemplateContentOfferStylePosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bottom: {
      value: cdktf.stringToHclTerraform(struct!.bottom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    left: {
      value: cdktf.stringToHclTerraform(struct!.left),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right: {
      value: cdktf.stringToHclTerraform(struct!.right),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top: {
      value: cdktf.stringToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStylePositionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStylePosition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JourneyActionTemplateContentOfferStylePosition | cdktf.IResolvable | undefined) {
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
  private _bottom?: string; 
  public get bottom() {
    return this.getStringAttribute('bottom');
  }
  public set bottom(value: string) {
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
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
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
  private _right?: string; 
  public get right() {
    return this.getStringAttribute('right');
  }
  public set right(value: string) {
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
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
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

export class JourneyActionTemplateContentOfferStylePositionList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStylePosition[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStylePositionOutputReference {
    return new JourneyActionTemplateContentOfferStylePositionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStyleTitle {
  /**
  * Color of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#color JourneyActionTemplate#color}
  */
  readonly color?: string;
  /**
  * Font of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font JourneyActionTemplate#font}
  */
  readonly font?: string;
  /**
  * Font size of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#font_size JourneyActionTemplate#font_size}
  */
  readonly fontSize?: string;
  /**
  * Text alignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#text_align JourneyActionTemplate#text_align}
  */
  readonly textAlign?: string;
}

export function journeyActionTemplateContentOfferStyleTitleToTerraform(struct?: JourneyActionTemplateContentOfferStyleTitle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    font: cdktf.stringToTerraform(struct!.font),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    text_align: cdktf.stringToTerraform(struct!.textAlign),
  }
}


export function journeyActionTemplateContentOfferStyleTitleToHclTerraform(struct?: JourneyActionTemplateContentOfferStyleTitle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font: {
      value: cdktf.stringToHclTerraform(struct!.font),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_align: {
      value: cdktf.stringToHclTerraform(struct!.textAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStyleTitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStyleTitle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._font !== undefined) {
      hasAnyValues = true;
      internalValueResult.font = this._font;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferStyleTitle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._font = undefined;
      this._fontSize = undefined;
      this._textAlign = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._font = value.font;
      this._fontSize = value.fontSize;
      this._textAlign = value.textAlign;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // font - computed: false, optional: true, required: false
  private _font?: string; 
  public get font() {
    return this.getStringAttribute('font');
  }
  public set font(value: string) {
    this._font = value;
  }
  public resetFont() {
    this._font = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontInput() {
    return this._font;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // text_align - computed: false, optional: true, required: false
  private _textAlign?: string; 
  public get textAlign() {
    return this.getStringAttribute('text_align');
  }
  public set textAlign(value: string) {
    this._textAlign = value;
  }
  public resetTextAlign() {
    this._textAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignInput() {
    return this._textAlign;
  }
}

export class JourneyActionTemplateContentOfferStyleTitleList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStyleTitle[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStyleTitleOutputReference {
    return new JourneyActionTemplateContentOfferStyleTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOfferStyle {
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#body JourneyActionTemplate#body}
  */
  readonly body?: JourneyActionTemplateContentOfferStyleBody[] | cdktf.IResolvable;
  /**
  * close_button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#close_button JourneyActionTemplate#close_button}
  */
  readonly closeButton?: JourneyActionTemplateContentOfferStyleCloseButton[] | cdktf.IResolvable;
  /**
  * cta_button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#cta_button JourneyActionTemplate#cta_button}
  */
  readonly ctaButton?: JourneyActionTemplateContentOfferStyleCtaButton[] | cdktf.IResolvable;
  /**
  * headline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#headline JourneyActionTemplate#headline}
  */
  readonly headline?: JourneyActionTemplateContentOfferStyleHeadline[] | cdktf.IResolvable;
  /**
  * offer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#offer JourneyActionTemplate#offer}
  */
  readonly offer?: JourneyActionTemplateContentOfferStyleOffer[] | cdktf.IResolvable;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#position JourneyActionTemplate#position}
  */
  readonly position?: JourneyActionTemplateContentOfferStylePosition[] | cdktf.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#title JourneyActionTemplate#title}
  */
  readonly title?: JourneyActionTemplateContentOfferStyleTitle[] | cdktf.IResolvable;
}

export function journeyActionTemplateContentOfferStyleToTerraform(struct?: JourneyActionTemplateContentOfferStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.listMapper(journeyActionTemplateContentOfferStyleBodyToTerraform, true)(struct!.body),
    close_button: cdktf.listMapper(journeyActionTemplateContentOfferStyleCloseButtonToTerraform, true)(struct!.closeButton),
    cta_button: cdktf.listMapper(journeyActionTemplateContentOfferStyleCtaButtonToTerraform, true)(struct!.ctaButton),
    headline: cdktf.listMapper(journeyActionTemplateContentOfferStyleHeadlineToTerraform, true)(struct!.headline),
    offer: cdktf.listMapper(journeyActionTemplateContentOfferStyleOfferToTerraform, true)(struct!.offer),
    position: cdktf.listMapper(journeyActionTemplateContentOfferStylePositionToTerraform, true)(struct!.position),
    title: cdktf.listMapper(journeyActionTemplateContentOfferStyleTitleToTerraform, true)(struct!.title),
  }
}


export function journeyActionTemplateContentOfferStyleToHclTerraform(struct?: JourneyActionTemplateContentOfferStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStyleBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStyleBodyList",
    },
    close_button: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStyleCloseButtonToHclTerraform, true)(struct!.closeButton),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStyleCloseButtonList",
    },
    cta_button: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStyleCtaButtonToHclTerraform, true)(struct!.ctaButton),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStyleCtaButtonList",
    },
    headline: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStyleHeadlineToHclTerraform, true)(struct!.headline),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStyleHeadlineList",
    },
    offer: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStyleOfferToHclTerraform, true)(struct!.offer),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStyleOfferList",
    },
    position: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStylePositionToHclTerraform, true)(struct!.position),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStylePositionList",
    },
    title: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStyleTitleToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStyleTitleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferStyleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOfferStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._closeButton?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeButton = this._closeButton?.internalValue;
    }
    if (this._ctaButton?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctaButton = this._ctaButton?.internalValue;
    }
    if (this._headline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headline = this._headline?.internalValue;
    }
    if (this._offer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer?.internalValue;
    }
    if (this._position?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOfferStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._closeButton.internalValue = undefined;
      this._ctaButton.internalValue = undefined;
      this._headline.internalValue = undefined;
      this._offer.internalValue = undefined;
      this._position.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._closeButton.internalValue = value.closeButton;
      this._ctaButton.internalValue = value.ctaButton;
      this._headline.internalValue = value.headline;
      this._offer.internalValue = value.offer;
      this._position.internalValue = value.position;
      this._title.internalValue = value.title;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new JourneyActionTemplateContentOfferStyleBodyList(this, "body", true);
  public get body() {
    return this._body;
  }
  public putBody(value: JourneyActionTemplateContentOfferStyleBody[] | cdktf.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // close_button - computed: false, optional: true, required: false
  private _closeButton = new JourneyActionTemplateContentOfferStyleCloseButtonList(this, "close_button", true);
  public get closeButton() {
    return this._closeButton;
  }
  public putCloseButton(value: JourneyActionTemplateContentOfferStyleCloseButton[] | cdktf.IResolvable) {
    this._closeButton.internalValue = value;
  }
  public resetCloseButton() {
    this._closeButton.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeButtonInput() {
    return this._closeButton.internalValue;
  }

  // cta_button - computed: false, optional: true, required: false
  private _ctaButton = new JourneyActionTemplateContentOfferStyleCtaButtonList(this, "cta_button", true);
  public get ctaButton() {
    return this._ctaButton;
  }
  public putCtaButton(value: JourneyActionTemplateContentOfferStyleCtaButton[] | cdktf.IResolvable) {
    this._ctaButton.internalValue = value;
  }
  public resetCtaButton() {
    this._ctaButton.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctaButtonInput() {
    return this._ctaButton.internalValue;
  }

  // headline - computed: false, optional: true, required: false
  private _headline = new JourneyActionTemplateContentOfferStyleHeadlineList(this, "headline", true);
  public get headline() {
    return this._headline;
  }
  public putHeadline(value: JourneyActionTemplateContentOfferStyleHeadline[] | cdktf.IResolvable) {
    this._headline.internalValue = value;
  }
  public resetHeadline() {
    this._headline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlineInput() {
    return this._headline.internalValue;
  }

  // offer - computed: false, optional: true, required: false
  private _offer = new JourneyActionTemplateContentOfferStyleOfferList(this, "offer", true);
  public get offer() {
    return this._offer;
  }
  public putOffer(value: JourneyActionTemplateContentOfferStyleOffer[] | cdktf.IResolvable) {
    this._offer.internalValue = value;
  }
  public resetOffer() {
    this._offer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new JourneyActionTemplateContentOfferStylePositionList(this, "position", true);
  public get position() {
    return this._position;
  }
  public putPosition(value: JourneyActionTemplateContentOfferStylePosition[] | cdktf.IResolvable) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new JourneyActionTemplateContentOfferStyleTitleList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: JourneyActionTemplateContentOfferStyleTitle[] | cdktf.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }
}

export class JourneyActionTemplateContentOfferStyleList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOfferStyle[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferStyleOutputReference {
    return new JourneyActionTemplateContentOfferStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionTemplateContentOffer {
  /**
  * Body text of the content offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#body JourneyActionTemplate#body}
  */
  readonly body?: string;
  /**
  * The display mode used by Genesys Widgets when displaying the content offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#display_mode JourneyActionTemplate#display_mode}
  */
  readonly displayMode: string;
  /**
  * Headline displayed above the body text of the content offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#headline JourneyActionTemplate#headline}
  */
  readonly headline?: string;
  /**
  * URL for image displayed on the content offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#image_url JourneyActionTemplate#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The layout mode used by Genesys Widgets when displaying the content offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#layout_mode JourneyActionTemplate#layout_mode}
  */
  readonly layoutMode: string;
  /**
  * Title in the header of the content offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#title JourneyActionTemplate#title}
  */
  readonly title?: string;
  /**
  * call_to_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#call_to_action JourneyActionTemplate#call_to_action}
  */
  readonly callToAction?: JourneyActionTemplateContentOfferCallToAction[] | cdktf.IResolvable;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#style JourneyActionTemplate#style}
  */
  readonly style?: JourneyActionTemplateContentOfferStyle[] | cdktf.IResolvable;
}

export function journeyActionTemplateContentOfferToTerraform(struct?: JourneyActionTemplateContentOffer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
    headline: cdktf.stringToTerraform(struct!.headline),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    layout_mode: cdktf.stringToTerraform(struct!.layoutMode),
    title: cdktf.stringToTerraform(struct!.title),
    call_to_action: cdktf.listMapper(journeyActionTemplateContentOfferCallToActionToTerraform, true)(struct!.callToAction),
    style: cdktf.listMapper(journeyActionTemplateContentOfferStyleToTerraform, true)(struct!.style),
  }
}


export function journeyActionTemplateContentOfferToHclTerraform(struct?: JourneyActionTemplateContentOffer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_mode: {
      value: cdktf.stringToHclTerraform(struct!.displayMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headline: {
      value: cdktf.stringToHclTerraform(struct!.headline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout_mode: {
      value: cdktf.stringToHclTerraform(struct!.layoutMode),
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
    call_to_action: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferCallToActionToHclTerraform, true)(struct!.callToAction),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferCallToActionList",
    },
    style: {
      value: cdktf.listMapperHcl(journeyActionTemplateContentOfferStyleToHclTerraform, true)(struct!.style),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionTemplateContentOfferStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionTemplateContentOfferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionTemplateContentOffer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    if (this._headline !== undefined) {
      hasAnyValues = true;
      internalValueResult.headline = this._headline;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._layoutMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutMode = this._layoutMode;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._callToAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callToAction = this._callToAction?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionTemplateContentOffer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._displayMode = undefined;
      this._headline = undefined;
      this._imageUrl = undefined;
      this._layoutMode = undefined;
      this._title = undefined;
      this._callToAction.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._displayMode = value.displayMode;
      this._headline = value.headline;
      this._imageUrl = value.imageUrl;
      this._layoutMode = value.layoutMode;
      this._title = value.title;
      this._callToAction.internalValue = value.callToAction;
      this._style.internalValue = value.style;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // display_mode - computed: false, optional: false, required: true
  private _displayMode?: string; 
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
  public set displayMode(value: string) {
    this._displayMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayModeInput() {
    return this._displayMode;
  }

  // headline - computed: false, optional: true, required: false
  private _headline?: string; 
  public get headline() {
    return this.getStringAttribute('headline');
  }
  public set headline(value: string) {
    this._headline = value;
  }
  public resetHeadline() {
    this._headline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlineInput() {
    return this._headline;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // layout_mode - computed: false, optional: false, required: true
  private _layoutMode?: string; 
  public get layoutMode() {
    return this.getStringAttribute('layout_mode');
  }
  public set layoutMode(value: string) {
    this._layoutMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutModeInput() {
    return this._layoutMode;
  }

  // title - computed: false, optional: true, required: false
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

  // call_to_action - computed: false, optional: true, required: false
  private _callToAction = new JourneyActionTemplateContentOfferCallToActionList(this, "call_to_action", true);
  public get callToAction() {
    return this._callToAction;
  }
  public putCallToAction(value: JourneyActionTemplateContentOfferCallToAction[] | cdktf.IResolvable) {
    this._callToAction.internalValue = value;
  }
  public resetCallToAction() {
    this._callToAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callToActionInput() {
    return this._callToAction.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new JourneyActionTemplateContentOfferStyleList(this, "style", true);
  public get style() {
    return this._style;
  }
  public putStyle(value: JourneyActionTemplateContentOfferStyle[] | cdktf.IResolvable) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}

export class JourneyActionTemplateContentOfferList extends cdktf.ComplexList {
  public internalValue? : JourneyActionTemplateContentOffer[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionTemplateContentOfferOutputReference {
    return new JourneyActionTemplateContentOfferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template genesyscloud_journey_action_template}
*/
export class JourneyActionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_journey_action_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JourneyActionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JourneyActionTemplate to import
  * @param importFromId The id of the existing JourneyActionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JourneyActionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_journey_action_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_action_template genesyscloud_journey_action_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JourneyActionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: JourneyActionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_journey_action_template',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._mediaType = config.mediaType;
    this._name = config.name;
    this._state = config.state;
    this._contentOffer.internalValue = config.contentOffer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // content_offer - computed: false, optional: true, required: false
  private _contentOffer = new JourneyActionTemplateContentOfferList(this, "content_offer", true);
  public get contentOffer() {
    return this._contentOffer;
  }
  public putContentOffer(value: JourneyActionTemplateContentOffer[] | cdktf.IResolvable) {
    this._contentOffer.internalValue = value;
  }
  public resetContentOffer() {
    this._contentOffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentOfferInput() {
    return this._contentOffer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      media_type: cdktf.stringToTerraform(this._mediaType),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      content_offer: cdktf.listMapper(journeyActionTemplateContentOfferToTerraform, true)(this._contentOffer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_type: {
        value: cdktf.stringToHclTerraform(this._mediaType),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_offer: {
        value: cdktf.listMapperHcl(journeyActionTemplateContentOfferToHclTerraform, true)(this._contentOffer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionTemplateContentOfferList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
