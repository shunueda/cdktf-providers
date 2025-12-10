// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaWatermarkTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#bucket CiMediaWatermarkTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#id CiMediaWatermarkTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#name CiMediaWatermarkTemplate#name}
  */
  readonly name: string;
  /**
  * watermark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#watermark CiMediaWatermarkTemplate#watermark}
  */
  readonly watermark: CiMediaWatermarkTemplateWatermark;
}
export interface CiMediaWatermarkTemplateWatermarkImage {
  /**
  * Whether the background image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#background CiMediaWatermarkTemplate#background}
  */
  readonly background: string;
  /**
  * High, 1: When the Mode is Original, it does not support setting the width of the watermark image, 2: When the Mode is Proportion, the unit is %, the value range of the background image: [100 300]; the value range of the foreground image: [1 100], relative to Video width, up to 4096px, 3: When Mode is Fixed, the unit is px, value range: [8, 4096], 4: If only Width is set, Height is calculated according to the proportion of the watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#height CiMediaWatermarkTemplate#height}
  */
  readonly height?: string;
  /**
  * Size mode, Original: original size, Proportion: proportional, Fixed: fixed size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#mode CiMediaWatermarkTemplate#mode}
  */
  readonly mode: string;
  /**
  * Transparency, value range: [1 100], unit %.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#transparency CiMediaWatermarkTemplate#transparency}
  */
  readonly transparency: string;
  /**
  * Address of watermark map (pass in after Urlencode is required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#url CiMediaWatermarkTemplate#url}
  */
  readonly url: string;
  /**
  * Width, 1: When the Mode is Original, it does not support setting the width of the watermark image, 2: When the Mode is Proportion, the unit is %, the value range of the background image: [100 300]; the value range of the foreground image: [1 100], relative to Video width, up to 4096px, 3: When Mode is Fixed, the unit is px, value range: [8, 4096], 4: If only Width is set, Height is calculated according to the proportion of the watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#width CiMediaWatermarkTemplate#width}
  */
  readonly width?: string;
}

export function ciMediaWatermarkTemplateWatermarkImageToTerraform(struct?: CiMediaWatermarkTemplateWatermarkImageOutputReference | CiMediaWatermarkTemplateWatermarkImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background: cdktf.stringToTerraform(struct!.background),
    height: cdktf.stringToTerraform(struct!.height),
    mode: cdktf.stringToTerraform(struct!.mode),
    transparency: cdktf.stringToTerraform(struct!.transparency),
    url: cdktf.stringToTerraform(struct!.url),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function ciMediaWatermarkTemplateWatermarkImageToHclTerraform(struct?: CiMediaWatermarkTemplateWatermarkImageOutputReference | CiMediaWatermarkTemplateWatermarkImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background: {
      value: cdktf.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparency: {
      value: cdktf.stringToHclTerraform(struct!.transparency),
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
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaWatermarkTemplateWatermarkImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaWatermarkTemplateWatermarkImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._transparency !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparency = this._transparency;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaWatermarkTemplateWatermarkImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._background = undefined;
      this._height = undefined;
      this._mode = undefined;
      this._transparency = undefined;
      this._url = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._background = value.background;
      this._height = value.height;
      this._mode = value.mode;
      this._transparency = value.transparency;
      this._url = value.url;
      this._width = value.width;
    }
  }

  // background - computed: false, optional: false, required: true
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // transparency - computed: false, optional: false, required: true
  private _transparency?: string; 
  public get transparency() {
    return this.getStringAttribute('transparency');
  }
  public set transparency(value: string) {
    this._transparency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transparencyInput() {
    return this._transparency;
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

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
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
export interface CiMediaWatermarkTemplateWatermarkText {
  /**
  * Font color, format: 0xRRGGBB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#font_color CiMediaWatermarkTemplate#font_color}
  */
  readonly fontColor: string;
  /**
  * Font size, value range: [5 100], unit px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#font_size CiMediaWatermarkTemplate#font_size}
  */
  readonly fontSize: string;
  /**
  * font type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#font_type CiMediaWatermarkTemplate#font_type}
  */
  readonly fontType: string;
  /**
  * Watermark content, the length does not exceed 64 characters, only supports Chinese, English, numbers, _, - and *.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#text CiMediaWatermarkTemplate#text}
  */
  readonly text: string;
  /**
  * Transparency, value range: [1 100], unit %.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#transparency CiMediaWatermarkTemplate#transparency}
  */
  readonly transparency: string;
}

export function ciMediaWatermarkTemplateWatermarkTextToTerraform(struct?: CiMediaWatermarkTemplateWatermarkTextOutputReference | CiMediaWatermarkTemplateWatermarkText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    font_type: cdktf.stringToTerraform(struct!.fontType),
    text: cdktf.stringToTerraform(struct!.text),
    transparency: cdktf.stringToTerraform(struct!.transparency),
  }
}


export function ciMediaWatermarkTemplateWatermarkTextToHclTerraform(struct?: CiMediaWatermarkTemplateWatermarkTextOutputReference | CiMediaWatermarkTemplateWatermarkText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    font_color: {
      value: cdktf.stringToHclTerraform(struct!.fontColor),
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
    font_type: {
      value: cdktf.stringToHclTerraform(struct!.fontType),
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
    transparency: {
      value: cdktf.stringToHclTerraform(struct!.transparency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaWatermarkTemplateWatermarkTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaWatermarkTemplateWatermarkText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontType = this._fontType;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._transparency !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparency = this._transparency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaWatermarkTemplateWatermarkText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontSize = undefined;
      this._fontType = undefined;
      this._text = undefined;
      this._transparency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontSize = value.fontSize;
      this._fontType = value.fontType;
      this._text = value.text;
      this._transparency = value.transparency;
    }
  }

  // font_color - computed: false, optional: false, required: true
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_size - computed: false, optional: false, required: true
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_type - computed: false, optional: false, required: true
  private _fontType?: string; 
  public get fontType() {
    return this.getStringAttribute('font_type');
  }
  public set fontType(value: string) {
    this._fontType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontTypeInput() {
    return this._fontType;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // transparency - computed: false, optional: false, required: true
  private _transparency?: string; 
  public get transparency() {
    return this.getStringAttribute('transparency');
  }
  public set transparency(value: string) {
    this._transparency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transparencyInput() {
    return this._transparency;
  }
}
export interface CiMediaWatermarkTemplateWatermark {
  /**
  * Horizontal offset, 1: In the picture watermark, if Background is true, when locMode is Relativity, it is %, value range: [-300 0]; when locMode is Absolute, it is px, value range: [-4096 0] ], 2: In the picture watermark, if Background is false, when locMode is Relativity, it is %, value range: [0 100]; when locMode is Absolute, it is px, value range: [0 4096], 3: In text watermark, when locMode is Relativity, it is %, value range: [0 100]; when locMode is Absolute, it is px, value range: [0 4096], 4: When Pos is Top, Bottom and Center, the parameter is invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#dx CiMediaWatermarkTemplate#dx}
  */
  readonly dx: string;
  /**
  * Vertical offset, 1: In the picture watermark, if Background is true, when locMode is Relativity, it is %, value range: [-300 0]; when locMode is Absolute, it is px, value range: [-4096 0] ],2: In the picture watermark, if Background is false, when locMode is Relativity, it is %, value range: [0 100]; when locMode is Absolute, it is px, value range: [0 4096],3: In text watermark, when locMode is Relativity, it is %, value range: [0 100]; when locMode is Absolute, it is px, value range: [0 4096], 4: When Pos is Left, Right and Center, the parameter is invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#dy CiMediaWatermarkTemplate#dy}
  */
  readonly dy: string;
  /**
  * Watermark end time, 1: [0 video duration], 2: unit is second, 3: support float format, execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#end_time CiMediaWatermarkTemplate#end_time}
  */
  readonly endTime?: string;
  /**
  * Offset method, Relativity: proportional, Absolute: fixed position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#loc_mode CiMediaWatermarkTemplate#loc_mode}
  */
  readonly locMode: string;
  /**
  * Reference position, TopRight, TopLeft, BottomRight, BottomLeft, Left, Right, Top, Bottom, Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#pos CiMediaWatermarkTemplate#pos}
  */
  readonly pos: string;
  /**
  * Watermark start time, 1: [0 video duration], 2: unit is second, 3: support float format, execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#start_time CiMediaWatermarkTemplate#start_time}
  */
  readonly startTime?: string;
  /**
  * Watermark type, Text: text watermark, Image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#type CiMediaWatermarkTemplate#type}
  */
  readonly type: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#image CiMediaWatermarkTemplate#image}
  */
  readonly image?: CiMediaWatermarkTemplateWatermarkImage;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#text CiMediaWatermarkTemplate#text}
  */
  readonly text?: CiMediaWatermarkTemplateWatermarkText;
}

export function ciMediaWatermarkTemplateWatermarkToTerraform(struct?: CiMediaWatermarkTemplateWatermarkOutputReference | CiMediaWatermarkTemplateWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dx: cdktf.stringToTerraform(struct!.dx),
    dy: cdktf.stringToTerraform(struct!.dy),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    loc_mode: cdktf.stringToTerraform(struct!.locMode),
    pos: cdktf.stringToTerraform(struct!.pos),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    type: cdktf.stringToTerraform(struct!.type),
    image: ciMediaWatermarkTemplateWatermarkImageToTerraform(struct!.image),
    text: ciMediaWatermarkTemplateWatermarkTextToTerraform(struct!.text),
  }
}


export function ciMediaWatermarkTemplateWatermarkToHclTerraform(struct?: CiMediaWatermarkTemplateWatermarkOutputReference | CiMediaWatermarkTemplateWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dx: {
      value: cdktf.stringToHclTerraform(struct!.dx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dy: {
      value: cdktf.stringToHclTerraform(struct!.dy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loc_mode: {
      value: cdktf.stringToHclTerraform(struct!.locMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pos: {
      value: cdktf.stringToHclTerraform(struct!.pos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
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
    image: {
      value: ciMediaWatermarkTemplateWatermarkImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaWatermarkTemplateWatermarkImageList",
    },
    text: {
      value: ciMediaWatermarkTemplateWatermarkTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaWatermarkTemplateWatermarkTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaWatermarkTemplateWatermarkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaWatermarkTemplateWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dx = this._dx;
    }
    if (this._dy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dy = this._dy;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._locMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.locMode = this._locMode;
    }
    if (this._pos !== undefined) {
      hasAnyValues = true;
      internalValueResult.pos = this._pos;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaWatermarkTemplateWatermark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dx = undefined;
      this._dy = undefined;
      this._endTime = undefined;
      this._locMode = undefined;
      this._pos = undefined;
      this._startTime = undefined;
      this._type = undefined;
      this._image.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dx = value.dx;
      this._dy = value.dy;
      this._endTime = value.endTime;
      this._locMode = value.locMode;
      this._pos = value.pos;
      this._startTime = value.startTime;
      this._type = value.type;
      this._image.internalValue = value.image;
      this._text.internalValue = value.text;
    }
  }

  // dx - computed: false, optional: false, required: true
  private _dx?: string; 
  public get dx() {
    return this.getStringAttribute('dx');
  }
  public set dx(value: string) {
    this._dx = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxInput() {
    return this._dx;
  }

  // dy - computed: false, optional: false, required: true
  private _dy?: string; 
  public get dy() {
    return this.getStringAttribute('dy');
  }
  public set dy(value: string) {
    this._dy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dyInput() {
    return this._dy;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // loc_mode - computed: false, optional: false, required: true
  private _locMode?: string; 
  public get locMode() {
    return this.getStringAttribute('loc_mode');
  }
  public set locMode(value: string) {
    this._locMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locModeInput() {
    return this._locMode;
  }

  // pos - computed: false, optional: false, required: true
  private _pos?: string; 
  public get pos() {
    return this.getStringAttribute('pos');
  }
  public set pos(value: string) {
    this._pos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get posInput() {
    return this._pos;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // image - computed: false, optional: true, required: false
  private _image = new CiMediaWatermarkTemplateWatermarkImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: CiMediaWatermarkTemplateWatermarkImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new CiMediaWatermarkTemplateWatermarkTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: CiMediaWatermarkTemplateWatermarkText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template tencentcloud_ci_media_watermark_template}
*/
export class CiMediaWatermarkTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_watermark_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaWatermarkTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaWatermarkTemplate to import
  * @param importFromId The id of the existing CiMediaWatermarkTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaWatermarkTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_watermark_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ci_media_watermark_template tencentcloud_ci_media_watermark_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaWatermarkTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaWatermarkTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_watermark_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._watermark.internalValue = config.watermark;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // watermark - computed: false, optional: false, required: true
  private _watermark = new CiMediaWatermarkTemplateWatermarkOutputReference(this, "watermark");
  public get watermark() {
    return this._watermark;
  }
  public putWatermark(value: CiMediaWatermarkTemplateWatermark) {
    this._watermark.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkInput() {
    return this._watermark.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      watermark: ciMediaWatermarkTemplateWatermarkToTerraform(this._watermark.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watermark: {
        value: ciMediaWatermarkTemplateWatermarkToHclTerraform(this._watermark.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaWatermarkTemplateWatermarkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
