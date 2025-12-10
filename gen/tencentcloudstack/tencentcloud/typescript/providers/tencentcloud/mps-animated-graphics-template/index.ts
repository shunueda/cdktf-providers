// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsAnimatedGraphicsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#comment MpsAnimatedGraphicsTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Animation format, the values are gif and webp. Default is gif.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#format MpsAnimatedGraphicsTemplate#format}
  */
  readonly format?: string;
  /**
  * Frame rate, value range: [1, 30], unit: Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#fps MpsAnimatedGraphicsTemplate#fps}
  */
  readonly fps: number;
  /**
  * The maximum value of the animation height (or short side), value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#height MpsAnimatedGraphicsTemplate#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#id MpsAnimatedGraphicsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rotation diagram template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#name MpsAnimatedGraphicsTemplate#name}
  */
  readonly name?: string;
  /**
  * Image quality, value range: [1, 100], default value is 75.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#quality MpsAnimatedGraphicsTemplate#quality}
  */
  readonly quality?: number;
  /**
  * Adaptive resolution, optional value:open: At this time, Width represents the long side of the video, Height represents the short side of the video.close: At this point, Width represents the width of the video, and Height represents the height of the video.Default value: open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#resolution_adaptive MpsAnimatedGraphicsTemplate#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * The maximum value of the animation width (or long side), value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#width MpsAnimatedGraphicsTemplate#width}
  */
  readonly width?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template tencentcloud_mps_animated_graphics_template}
*/
export class MpsAnimatedGraphicsTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_animated_graphics_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsAnimatedGraphicsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsAnimatedGraphicsTemplate to import
  * @param importFromId The id of the existing MpsAnimatedGraphicsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsAnimatedGraphicsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_animated_graphics_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_animated_graphics_template tencentcloud_mps_animated_graphics_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsAnimatedGraphicsTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MpsAnimatedGraphicsTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_animated_graphics_template',
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
    this._comment = config.comment;
    this._format = config.format;
    this._fps = config.fps;
    this._height = config.height;
    this._id = config.id;
    this._name = config.name;
    this._quality = config.quality;
    this._resolutionAdaptive = config.resolutionAdaptive;
    this._width = config.width;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // fps - computed: false, optional: false, required: true
  private _fps?: number; 
  public get fps() {
    return this.getNumberAttribute('fps');
  }
  public set fps(value: number) {
    this._fps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsInput() {
    return this._fps;
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

  // quality - computed: false, optional: true, required: false
  private _quality?: number; 
  public get quality() {
    return this.getNumberAttribute('quality');
  }
  public set quality(value: number) {
    this._quality = value;
  }
  public resetQuality() {
    this._quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityInput() {
    return this._quality;
  }

  // resolution_adaptive - computed: false, optional: true, required: false
  private _resolutionAdaptive?: string; 
  public get resolutionAdaptive() {
    return this.getStringAttribute('resolution_adaptive');
  }
  public set resolutionAdaptive(value: string) {
    this._resolutionAdaptive = value;
  }
  public resetResolutionAdaptive() {
    this._resolutionAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionAdaptiveInput() {
    return this._resolutionAdaptive;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      format: cdktf.stringToTerraform(this._format),
      fps: cdktf.numberToTerraform(this._fps),
      height: cdktf.numberToTerraform(this._height),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      quality: cdktf.numberToTerraform(this._quality),
      resolution_adaptive: cdktf.stringToTerraform(this._resolutionAdaptive),
      width: cdktf.numberToTerraform(this._width),
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
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fps: {
        value: cdktf.numberToHclTerraform(this._fps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quality: {
        value: cdktf.numberToHclTerraform(this._quality),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolution_adaptive: {
        value: cdktf.stringToHclTerraform(this._resolutionAdaptive),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
