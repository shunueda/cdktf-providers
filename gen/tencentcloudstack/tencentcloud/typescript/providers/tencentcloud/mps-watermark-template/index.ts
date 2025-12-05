// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsWatermarkTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#comment MpsWatermarkTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Origin position, optional value:TopLeft: Indicates that the origin of the coordinates is at the upper left corner of the video image, and the origin of the watermark is the upper left corner of the picture or text.TopRight: Indicates that the origin of the coordinates is at the upper right corner of the video image, and the origin of the watermark is at the upper right corner of the picture or text.BottomLeft: Indicates that the origin of the coordinates is at the lower left corner of the video image, and the origin of the watermark is the lower left corner of the picture or text.BottomRight: Indicates that the origin of the coordinates is at the lower right corner of the video image, and the origin of the watermark is at the lower right corner of the picture or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#coordinate_origin MpsWatermarkTemplate#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#id MpsWatermarkTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Watermark template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#name MpsWatermarkTemplate#name}
  */
  readonly name?: string;
  /**
  * Watermark type, optional value:image, text, svg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#type MpsWatermarkTemplate#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark from the origin of the coordinates of the video image. Support %, px two formats.When the string ends with %, it means that the watermark XPos specifies a percentage for the video width, such as 10% means that XPos is 10% of the video width.When the string ends with px, it means that the watermark XPos is the specified pixel, such as 100px means that the XPos is 100 pixels.Default value: 0px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#x_pos MpsWatermarkTemplate#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark from the origin of the coordinates of the video image. Support %, px two formats.When the string ends with %, it means that the watermark YPos specifies a percentage for the video height, such as 10% means that YPos is 10% of the video height.When the string ends with px, it means that the watermark YPos is the specified pixel, such as 100px means that the YPos is 100 pixels.Default value: 0px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#y_pos MpsWatermarkTemplate#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#image_template MpsWatermarkTemplate#image_template}
  */
  readonly imageTemplate?: MpsWatermarkTemplateImageTemplate;
  /**
  * svg_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#svg_template MpsWatermarkTemplate#svg_template}
  */
  readonly svgTemplate?: MpsWatermarkTemplateSvgTemplate;
  /**
  * text_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#text_template MpsWatermarkTemplate#text_template}
  */
  readonly textTemplate?: MpsWatermarkTemplateTextTemplate;
}
export interface MpsWatermarkTemplateImageTemplate {
  /**
  * The height of the watermark. Support %, px two formats:When the string ends with %, it means that the watermark Height is the percentage size of the video height, such as 10% means that the Height is 10% of the video height.When the string ends with px, it means that the watermark Height unit is pixel, such as 100px means that the Height is 100 pixels. The value range is 0 or [8, 4096].Default value: 0px. Indicates that Height is scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#height MpsWatermarkTemplate#height}
  */
  readonly height?: string;
  /**
  * Watermark image[Base64](https://tools.ietf.org/html/rfc4648) encoded string. Support jpeg, png image format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#image_content MpsWatermarkTemplate#image_content}
  */
  readonly imageContent: string;
  /**
  * Watermark repeat type. Usage scenario: The watermark is a dynamic image. Ranges:once: After the dynamic watermark is played, it will no longer appear.repeat_last_frame: After the watermark is played, stay on the last frame.repeat: the watermark loops until the end of the video (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#repeat_type MpsWatermarkTemplate#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * The width of the watermark. Support %, px two formats:When the string ends with %, it means that the watermark Width is a percentage of the video width, such as 10% means that the Width is 10% of the video width.When the string ends with px, it means that the watermark Width unit is pixel, such as 100px means that the Width is 100 pixels. The value range is [8, 4096].Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#width MpsWatermarkTemplate#width}
  */
  readonly width?: string;
}

export function mpsWatermarkTemplateImageTemplateToTerraform(struct?: MpsWatermarkTemplateImageTemplateOutputReference | MpsWatermarkTemplateImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    image_content: cdktf.stringToTerraform(struct!.imageContent),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function mpsWatermarkTemplateImageTemplateToHclTerraform(struct?: MpsWatermarkTemplateImageTemplateOutputReference | MpsWatermarkTemplateImageTemplate): any {
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

export class MpsWatermarkTemplateImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWatermarkTemplateImageTemplate | undefined {
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
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsWatermarkTemplateImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._imageContent = undefined;
      this._repeatType = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._imageContent = value.imageContent;
      this._repeatType = value.repeatType;
      this._width = value.width;
    }
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

  // repeat_type - computed: false, optional: true, required: false
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
export interface MpsWatermarkTemplateSvgTemplate {
  /**
  * The height of the watermark, supports px, W%, H%, S%, L% six formats:When the string ends with px, it means that the watermark Height unit is pixels, such as 100px means that the Height is 100 pixels; when filling 0px and Width is not 0px, it means that the height of the watermark is proportionally scaled according to the original SVG image; when both Width and Height are filled When 0px, it means that the height of the watermark takes the height of the original SVG image.When the string ends with W%, it means that the watermark Height is a percentage of the video width, such as 10W% means that the Height is 10% of the video width.When the string ends with H%, it means that the watermark Height is the percentage size of the video height, such as 10H% means that the Height is 10% of the video height.When the string ends with S%, it means that the watermark Height is the percentage size of the short side of the video, such as 10S% means that the Height is 10% of the short side of the video.When the string ends with L%, it means that the watermark Height is the percentage size of the long side of the video, such as 10L% means that the Height is 10% of the long side of the video.When the string ends with %, the meaning is the same as H%.Default value: 0px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#height MpsWatermarkTemplate#height}
  */
  readonly height?: string;
  /**
  * The width of the watermark, supports px, %, W%, H%, S%, L% six formats.When the string ends with px, it means that the watermark Width unit is pixels, such as 100px means that the Width is 100 pixels; when filling 0px and the Height is not 0px, it means that the width of the watermark is proportionally scaled according to the original SVG image; when both Width and Height are filled When 0px, it means that the width of the watermark takes the width of the original SVG image.When the string ends with W%, it means that the watermark Width is a percentage of the video width, such as 10W% means that the Width is 10% of the video width.When the string ends with H%, it means that the watermark Width is a percentage of the video height, such as 10H% means that the Width is 10% of the video height.When the string ends with S%, it means that the watermark Width is the percentage size of the short side of the video, such as 10S% means that the Width is 10% of the short side of the video.When the string ends with L%, it means that the watermark Width is the percentage size of the long side of the video, such as 10L% means that the Width is 10% of the long side of the video.When the string ends with %, it has the same meaning as W%.Default value: 10W%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#width MpsWatermarkTemplate#width}
  */
  readonly width?: string;
}

export function mpsWatermarkTemplateSvgTemplateToTerraform(struct?: MpsWatermarkTemplateSvgTemplateOutputReference | MpsWatermarkTemplateSvgTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function mpsWatermarkTemplateSvgTemplateToHclTerraform(struct?: MpsWatermarkTemplateSvgTemplateOutputReference | MpsWatermarkTemplateSvgTemplate): any {
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

export class MpsWatermarkTemplateSvgTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWatermarkTemplateSvgTemplate | undefined {
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

  public set internalValue(value: MpsWatermarkTemplateSvgTemplate | undefined) {
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
export interface MpsWatermarkTemplateTextTemplate {
  /**
  * Text transparency, value range: (0, 1].0: fully transparent.1: fully opaque.Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#font_alpha MpsWatermarkTemplate#font_alpha}
  */
  readonly fontAlpha: number;
  /**
  * Font color, format: 0xRRGGBB, default value: 0xFFFFFF (white).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#font_color MpsWatermarkTemplate#font_color}
  */
  readonly fontColor: string;
  /**
  * Font size, format: Npx, N is a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#font_size MpsWatermarkTemplate#font_size}
  */
  readonly fontSize: string;
  /**
  * Font type, currently supports two:simkai.ttf: can support Chinese and English.arial.ttf: English only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#font_type MpsWatermarkTemplate#font_type}
  */
  readonly fontType: string;
}

export function mpsWatermarkTemplateTextTemplateToTerraform(struct?: MpsWatermarkTemplateTextTemplateOutputReference | MpsWatermarkTemplateTextTemplate): any {
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


export function mpsWatermarkTemplateTextTemplateToHclTerraform(struct?: MpsWatermarkTemplateTextTemplateOutputReference | MpsWatermarkTemplateTextTemplate): any {
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

export class MpsWatermarkTemplateTextTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWatermarkTemplateTextTemplate | undefined {
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

  public set internalValue(value: MpsWatermarkTemplateTextTemplate | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template tencentcloud_mps_watermark_template}
*/
export class MpsWatermarkTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_watermark_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsWatermarkTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsWatermarkTemplate to import
  * @param importFromId The id of the existing MpsWatermarkTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsWatermarkTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_watermark_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mps_watermark_template tencentcloud_mps_watermark_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsWatermarkTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MpsWatermarkTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_watermark_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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

  // comment - computed: false, optional: true, required: false
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

  // coordinate_origin - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // x_pos - computed: false, optional: true, required: false
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

  // y_pos - computed: false, optional: true, required: false
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
  private _imageTemplate = new MpsWatermarkTemplateImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsWatermarkTemplateImageTemplate) {
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
  private _svgTemplate = new MpsWatermarkTemplateSvgTemplateOutputReference(this, "svg_template");
  public get svgTemplate() {
    return this._svgTemplate;
  }
  public putSvgTemplate(value: MpsWatermarkTemplateSvgTemplate) {
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
  private _textTemplate = new MpsWatermarkTemplateTextTemplateOutputReference(this, "text_template");
  public get textTemplate() {
    return this._textTemplate;
  }
  public putTextTemplate(value: MpsWatermarkTemplateTextTemplate) {
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
      type: cdktf.stringToTerraform(this._type),
      x_pos: cdktf.stringToTerraform(this._xPos),
      y_pos: cdktf.stringToTerraform(this._yPos),
      image_template: mpsWatermarkTemplateImageTemplateToTerraform(this._imageTemplate.internalValue),
      svg_template: mpsWatermarkTemplateSvgTemplateToTerraform(this._svgTemplate.internalValue),
      text_template: mpsWatermarkTemplateTextTemplateToTerraform(this._textTemplate.internalValue),
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
        value: mpsWatermarkTemplateImageTemplateToHclTerraform(this._imageTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsWatermarkTemplateImageTemplateList",
      },
      svg_template: {
        value: mpsWatermarkTemplateSvgTemplateToHclTerraform(this._svgTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsWatermarkTemplateSvgTemplateList",
      },
      text_template: {
        value: mpsWatermarkTemplateTextTemplateToHclTerraform(this._textTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsWatermarkTemplateTextTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
