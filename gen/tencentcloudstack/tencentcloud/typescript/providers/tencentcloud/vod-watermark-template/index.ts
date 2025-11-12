// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodWatermarkTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description. Length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#comment VodWatermarkTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Origin position. Valid values: TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text; TopRight: the origin of coordinates is in the top-right corner of the video, and the origin of the watermark is in the top-right corner of the image or text; BottomLeft: the origin of coordinates is in the bottom-left corner of the video, and the origin of the watermark is in the bottom-left corner of the image or text; BottomRight: the origin of coordinates is in the bottom-right corner of the video, and the origin of the watermark is in the bottom-right corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#coordinate_origin VodWatermarkTemplate#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#id VodWatermarkTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Watermarking template name. Length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#name VodWatermarkTemplate#name}
  */
  readonly name?: string;
  /**
  * The VOD [application](https://intl.cloud.tencent.com/document/product/266/14574) ID. For customers who activate VOD service from December 25, 2023, if they want to access resources in a VOD application (whether it's the default application or a newly created one), they must fill in this field with the application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#sub_app_id VodWatermarkTemplate#sub_app_id}
  */
  readonly subAppId: number;
  /**
  * Watermarking type. Valid values: image: image watermark; text: text watermark; svg: SVG watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#type VodWatermarkTemplate#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width; If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#x_pos VodWatermarkTemplate#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height; If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#y_pos VodWatermarkTemplate#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#image_template VodWatermarkTemplate#image_template}
  */
  readonly imageTemplate?: VodWatermarkTemplateImageTemplate;
  /**
  * svg_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#svg_template VodWatermarkTemplate#svg_template}
  */
  readonly svgTemplate?: VodWatermarkTemplateSvgTemplate;
  /**
  * text_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#text_template VodWatermarkTemplate#text_template}
  */
  readonly textTemplate?: VodWatermarkTemplateTextTemplate;
}
export interface VodWatermarkTemplateImageTemplate {
  /**
  * Watermark height. % and px formats are supported: If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;  If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px. Valid values: 0 or [8,4096]. Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#height VodWatermarkTemplate#height}
  */
  readonly height?: string;
  /**
  * The [Base64](https://tools.ietf.org/html/rfc4648) encoded string of a watermark image. Only JPEG, PNG, and GIF images are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#image_content VodWatermarkTemplate#image_content}
  */
  readonly imageContent: string;
  /**
  * Repeat type of an animated watermark. Valid values: once: no longer appears after watermark playback ends.  repeat_last_frame: stays on the last frame after watermark playback ends.  repeat (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#repeat_type VodWatermarkTemplate#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Image watermark transparency: 0: completely opaque  100: completely transparent Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#transparency VodWatermarkTemplate#transparency}
  */
  readonly transparency?: number;
  /**
  * Watermark width. % and px formats are supported: If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width. For example, `10%` means that `Width` is 10% of the video width;  If the string ends in px, the `Width` of the watermark will be in pixels. For example, `100px` means that `Width` is 100 pixels. Value range: [8, 4096]. Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#width VodWatermarkTemplate#width}
  */
  readonly width?: string;
}

export function vodWatermarkTemplateImageTemplateToTerraform(struct?: VodWatermarkTemplateImageTemplateOutputReference | VodWatermarkTemplateImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    image_content: cdktf.stringToTerraform(struct!.imageContent),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    transparency: cdktf.numberToTerraform(struct!.transparency),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function vodWatermarkTemplateImageTemplateToHclTerraform(struct?: VodWatermarkTemplateImageTemplateOutputReference | VodWatermarkTemplateImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_content: {
      value: cdktf.stringToHclTerraform(struct!.imageContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_type: {
      value: cdktf.stringToHclTerraform(struct!.repeatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparency: {
      value: cdktf.numberToHclTerraform(struct!.transparency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VodWatermarkTemplateImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodWatermarkTemplateImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._imageContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageContent = this._imageContent;
    }
    if (this._repeatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatType = this._repeatType;
    }
    if (this._transparency !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparency = this._transparency;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodWatermarkTemplateImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._imageContent = undefined;
      this._repeatType = undefined;
      this._transparency = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._imageContent = value.imageContent;
      this._repeatType = value.repeatType;
      this._transparency = value.transparency;
      this._width = value.width;
    }
  }

  // height - computed: true, optional: true, required: false
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

  // image_content - computed: false, optional: false, required: true
  private _imageContent?: string; 
  public get imageContent() {
    return this.getStringAttribute('image_content');
  }
  public set imageContent(value: string) {
    this._imageContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent;
  }

  // repeat_type - computed: true, optional: true, required: false
  private _repeatType?: string; 
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }
  public set repeatType(value: string) {
    this._repeatType = value;
  }
  public resetRepeatType() {
    this._repeatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTypeInput() {
    return this._repeatType;
  }

  // transparency - computed: true, optional: true, required: false
  private _transparency?: number; 
  public get transparency() {
    return this.getNumberAttribute('transparency');
  }
  public set transparency(value: number) {
    this._transparency = value;
  }
  public resetTransparency() {
    this._transparency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparencyInput() {
    return this._transparency;
  }

  // width - computed: true, optional: true, required: false
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
export interface VodWatermarkTemplateSvgTemplate {
  /**
  * Watermark height, which supports six formats of px, %, W%, H%, S%, and L%: If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px; if `0px` is entered and `Width` is not `0px`, the watermark height will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark height will be the height of the source SVG image;  If the string ends in `W%`, the `Height` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Height` is 10% of the video width;  If the string ends in `H%`, the `Height` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Height` is 10% of the video height;  If the string ends in `S%`, the `Height` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Height` is 10% of the short side of the video;  If the string ends in `L%`, the `Height` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Height` is 10% of the long side of the video;  If the string ends in %, the meaning is the same as `H%`. Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#height VodWatermarkTemplate#height}
  */
  readonly height?: string;
  /**
  * Watermark width, which supports six formats of px, %, W%, H%, S%, and L%: If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px; if `0px` is entered and `Height` is not `0px`, the watermark width will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark width will be the width of the source SVG image;  If the string ends in `W%`, the `Width` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Width` is 10% of the video width;  If the string ends in `H%`, the `Width` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Width` is 10% of the video height;  If the string ends in `S%`, the `Width` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Width` is 10% of the short side of the video;  If the string ends in `L%`, the `Width` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Width` is 10% of the long side of the video;  If the string ends in %, the meaning is the same as `W%`. Default value: 10W%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#width VodWatermarkTemplate#width}
  */
  readonly width?: string;
}

export function vodWatermarkTemplateSvgTemplateToTerraform(struct?: VodWatermarkTemplateSvgTemplateOutputReference | VodWatermarkTemplateSvgTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function vodWatermarkTemplateSvgTemplateToHclTerraform(struct?: VodWatermarkTemplateSvgTemplateOutputReference | VodWatermarkTemplateSvgTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
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

export class VodWatermarkTemplateSvgTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodWatermarkTemplateSvgTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodWatermarkTemplateSvgTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // height - computed: true, optional: true, required: false
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

  // width - computed: true, optional: true, required: false
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
export interface VodWatermarkTemplateTextTemplate {
  /**
  * Text transparency. Value range: (0, 1] 0: completely transparent  1: completely opaque Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#font_alpha VodWatermarkTemplate#font_alpha}
  */
  readonly fontAlpha: number;
  /**
  * Font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#font_color VodWatermarkTemplate#font_color}
  */
  readonly fontColor: string;
  /**
  * Font size in Npx format where N is a numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#font_size VodWatermarkTemplate#font_size}
  */
  readonly fontSize: string;
  /**
  * Font type. Currently, two types are supported: simkai.ttf: both Chinese and English are supported;  arial.ttf: only English is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#font_type VodWatermarkTemplate#font_type}
  */
  readonly fontType: string;
}

export function vodWatermarkTemplateTextTemplateToTerraform(struct?: VodWatermarkTemplateTextTemplateOutputReference | VodWatermarkTemplateTextTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_alpha: cdktf.numberToTerraform(struct!.fontAlpha),
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    font_type: cdktf.stringToTerraform(struct!.fontType),
  }
}


export function vodWatermarkTemplateTextTemplateToHclTerraform(struct?: VodWatermarkTemplateTextTemplateOutputReference | VodWatermarkTemplateTextTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    font_alpha: {
      value: cdktf.numberToHclTerraform(struct!.fontAlpha),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodWatermarkTemplateTextTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodWatermarkTemplateTextTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontAlpha !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontAlpha = this._fontAlpha;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodWatermarkTemplateTextTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontAlpha = undefined;
      this._fontColor = undefined;
      this._fontSize = undefined;
      this._fontType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontAlpha = value.fontAlpha;
      this._fontColor = value.fontColor;
      this._fontSize = value.fontSize;
      this._fontType = value.fontType;
    }
  }

  // font_alpha - computed: false, optional: false, required: true
  private _fontAlpha?: number; 
  public get fontAlpha() {
    return this.getNumberAttribute('font_alpha');
  }
  public set fontAlpha(value: number) {
    this._fontAlpha = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontAlphaInput() {
    return this._fontAlpha;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template tencentcloud_vod_watermark_template}
*/
export class VodWatermarkTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_watermark_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodWatermarkTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodWatermarkTemplate to import
  * @param importFromId The id of the existing VodWatermarkTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodWatermarkTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_watermark_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_watermark_template tencentcloud_vod_watermark_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodWatermarkTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VodWatermarkTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_watermark_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._coordinateOrigin = config.coordinateOrigin;
    this._id = config.id;
    this._name = config.name;
    this._subAppId = config.subAppId;
    this._type = config.type;
    this._xPos = config.xPos;
    this._yPos = config.yPos;
    this._imageTemplate.internalValue = config.imageTemplate;
    this._svgTemplate.internalValue = config.svgTemplate;
    this._textTemplate.internalValue = config.textTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // coordinate_origin - computed: true, optional: true, required: false
  private _coordinateOrigin?: string; 
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }
  public set coordinateOrigin(value: string) {
    this._coordinateOrigin = value;
  }
  public resetCoordinateOrigin() {
    this._coordinateOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateOriginInput() {
    return this._coordinateOrigin;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sub_app_id - computed: false, optional: false, required: true
  private _subAppId?: number; 
  public get subAppId() {
    return this.getNumberAttribute('sub_app_id');
  }
  public set subAppId(value: number) {
    this._subAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subAppIdInput() {
    return this._subAppId;
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

  // x_pos - computed: true, optional: true, required: false
  private _xPos?: string; 
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }
  public set xPos(value: string) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: true, optional: true, required: false
  private _yPos?: string; 
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
  public set yPos(value: string) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // image_template - computed: false, optional: true, required: false
  private _imageTemplate = new VodWatermarkTemplateImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: VodWatermarkTemplateImageTemplate) {
    this._imageTemplate.internalValue = value;
  }
  public resetImageTemplate() {
    this._imageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTemplateInput() {
    return this._imageTemplate.internalValue;
  }

  // svg_template - computed: false, optional: true, required: false
  private _svgTemplate = new VodWatermarkTemplateSvgTemplateOutputReference(this, "svg_template");
  public get svgTemplate() {
    return this._svgTemplate;
  }
  public putSvgTemplate(value: VodWatermarkTemplateSvgTemplate) {
    this._svgTemplate.internalValue = value;
  }
  public resetSvgTemplate() {
    this._svgTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svgTemplateInput() {
    return this._svgTemplate.internalValue;
  }

  // text_template - computed: false, optional: true, required: false
  private _textTemplate = new VodWatermarkTemplateTextTemplateOutputReference(this, "text_template");
  public get textTemplate() {
    return this._textTemplate;
  }
  public putTextTemplate(value: VodWatermarkTemplateTextTemplate) {
    this._textTemplate.internalValue = value;
  }
  public resetTextTemplate() {
    this._textTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      coordinate_origin: cdktf.stringToTerraform(this._coordinateOrigin),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      type: cdktf.stringToTerraform(this._type),
      x_pos: cdktf.stringToTerraform(this._xPos),
      y_pos: cdktf.stringToTerraform(this._yPos),
      image_template: vodWatermarkTemplateImageTemplateToTerraform(this._imageTemplate.internalValue),
      svg_template: vodWatermarkTemplateSvgTemplateToTerraform(this._svgTemplate.internalValue),
      text_template: vodWatermarkTemplateTextTemplateToTerraform(this._textTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coordinate_origin: {
        value: cdktf.stringToHclTerraform(this._coordinateOrigin),
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
      sub_app_id: {
        value: cdktf.numberToHclTerraform(this._subAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_pos: {
        value: cdktf.stringToHclTerraform(this._xPos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      y_pos: {
        value: cdktf.stringToHclTerraform(this._yPos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_template: {
        value: vodWatermarkTemplateImageTemplateToHclTerraform(this._imageTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodWatermarkTemplateImageTemplateList",
      },
      svg_template: {
        value: vodWatermarkTemplateSvgTemplateToHclTerraform(this._svgTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodWatermarkTemplateSvgTemplateList",
      },
      text_template: {
        value: vodWatermarkTemplateTextTemplateToHclTerraform(this._textTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodWatermarkTemplateTextTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
