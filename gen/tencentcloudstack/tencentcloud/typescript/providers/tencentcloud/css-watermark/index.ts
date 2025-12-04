// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssWatermarkConfig extends cdktf.TerraformMetaArguments {
  /**
  * height of the picture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#height CssWatermark#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#id CssWatermark#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * watermark url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#picture_url CssWatermark#picture_url}
  */
  readonly pictureUrl: string;
  /**
  * watermark name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#watermark_name CssWatermark#watermark_name}
  */
  readonly watermarkName: string;
  /**
  * width of the picture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#width CssWatermark#width}
  */
  readonly width?: number;
  /**
  * x position of the picture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#x_position CssWatermark#x_position}
  */
  readonly xPosition?: number;
  /**
  * y position of the picture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#y_position CssWatermark#y_position}
  */
  readonly yPosition?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark tencentcloud_css_watermark}
*/
export class CssWatermark extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_watermark";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssWatermark resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssWatermark to import
  * @param importFromId The id of the existing CssWatermark that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssWatermark to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_watermark", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/css_watermark tencentcloud_css_watermark} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssWatermarkConfig
  */
  public constructor(scope: Construct, id: string, config: CssWatermarkConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_watermark',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._height = config.height;
    this._id = config.id;
    this._pictureUrl = config.pictureUrl;
    this._watermarkName = config.watermarkName;
    this._width = config.width;
    this._xPosition = config.xPosition;
    this._yPosition = config.yPosition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // picture_url - computed: false, optional: false, required: true
  private _pictureUrl?: string; 
  public get pictureUrl() {
    return this.getStringAttribute('picture_url');
  }
  public set pictureUrl(value: string) {
    this._pictureUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pictureUrlInput() {
    return this._pictureUrl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // watermark_name - computed: false, optional: false, required: true
  private _watermarkName?: string; 
  public get watermarkName() {
    return this.getStringAttribute('watermark_name');
  }
  public set watermarkName(value: string) {
    this._watermarkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkNameInput() {
    return this._watermarkName;
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

  // x_position - computed: false, optional: true, required: false
  private _xPosition?: number; 
  public get xPosition() {
    return this.getNumberAttribute('x_position');
  }
  public set xPosition(value: number) {
    this._xPosition = value;
  }
  public resetXPosition() {
    this._xPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPositionInput() {
    return this._xPosition;
  }

  // y_position - computed: false, optional: true, required: false
  private _yPosition?: number; 
  public get yPosition() {
    return this.getNumberAttribute('y_position');
  }
  public set yPosition(value: number) {
    this._yPosition = value;
  }
  public resetYPosition() {
    this._yPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPositionInput() {
    return this._yPosition;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      height: cdktf.numberToTerraform(this._height),
      id: cdktf.stringToTerraform(this._id),
      picture_url: cdktf.stringToTerraform(this._pictureUrl),
      watermark_name: cdktf.stringToTerraform(this._watermarkName),
      width: cdktf.numberToTerraform(this._width),
      x_position: cdktf.numberToTerraform(this._xPosition),
      y_position: cdktf.numberToTerraform(this._yPosition),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      height: {
        value: cdktf.numberToHclTerraform(this._height),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      picture_url: {
        value: cdktf.stringToHclTerraform(this._pictureUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watermark_name: {
        value: cdktf.stringToHclTerraform(this._watermarkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      x_position: {
        value: cdktf.numberToHclTerraform(this._xPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      y_position: {
        value: cdktf.numberToHclTerraform(this._yPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
