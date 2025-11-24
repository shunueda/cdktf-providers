// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullzoneOptimizerClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * The aspect ratio for image optimization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#aspect_ratio PullzoneOptimizerClass#aspect_ratio}
  */
  readonly aspectRatio?: string;
  /**
  * Indicates whether automatic optimization for images is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#auto_optimize PullzoneOptimizerClass#auto_optimize}
  */
  readonly autoOptimize?: string;
  /**
  * The level of blur to apply to images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#blur PullzoneOptimizerClass#blur}
  */
  readonly blur?: number;
  /**
  * The brightness adjustment for images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#brightness PullzoneOptimizerClass#brightness}
  */
  readonly brightness?: number;
  /**
  * The contrast adjustment for images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#contrast PullzoneOptimizerClass#contrast}
  */
  readonly contrast?: number;
  /**
  * The cropping settings for images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#crop PullzoneOptimizerClass#crop}
  */
  readonly crop?: string;
  /**
  * The gravity setting for cropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#crop_gravity PullzoneOptimizerClass#crop_gravity}
  */
  readonly cropGravity?: string;
  /**
  * Indicates whether to flip images horizontally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#flip PullzoneOptimizerClass#flip}
  */
  readonly flip?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to flip images vertically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#flop PullzoneOptimizerClass#flop}
  */
  readonly flop?: boolean | cdktf.IResolvable;
  /**
  * The height to which images should be resized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#height PullzoneOptimizerClass#height}
  */
  readonly height?: number;
  /**
  * The hue adjustment for images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#hue PullzoneOptimizerClass#hue}
  */
  readonly hue?: number;
  /**
  * The name of the optimizer class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#name PullzoneOptimizerClass#name}
  */
  readonly name: string;
  /**
  * The ID of the linked pull zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#pullzone PullzoneOptimizerClass#pullzone}
  */
  readonly pullzone: number;
  /**
  * The quality setting for image optimization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#quality PullzoneOptimizerClass#quality}
  */
  readonly quality?: number;
  /**
  * The saturation adjustment for images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#saturation PullzoneOptimizerClass#saturation}
  */
  readonly saturation?: number;
  /**
  * The level of sepia tone to apply to images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#sepia PullzoneOptimizerClass#sepia}
  */
  readonly sepia?: number;
  /**
  * Indicates whether to sharpen images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#sharpen PullzoneOptimizerClass#sharpen}
  */
  readonly sharpen?: boolean | cdktf.IResolvable;
  /**
  * The width to which images should be resized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#width PullzoneOptimizerClass#width}
  */
  readonly width?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class bunnynet_pullzone_optimizer_class}
*/
export class PullzoneOptimizerClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone_optimizer_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PullzoneOptimizerClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PullzoneOptimizerClass to import
  * @param importFromId The id of the existing PullzoneOptimizerClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PullzoneOptimizerClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone_optimizer_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_optimizer_class bunnynet_pullzone_optimizer_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullzoneOptimizerClassConfig
  */
  public constructor(scope: Construct, id: string, config: PullzoneOptimizerClassConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone_optimizer_class',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aspectRatio = config.aspectRatio;
    this._autoOptimize = config.autoOptimize;
    this._blur = config.blur;
    this._brightness = config.brightness;
    this._contrast = config.contrast;
    this._crop = config.crop;
    this._cropGravity = config.cropGravity;
    this._flip = config.flip;
    this._flop = config.flop;
    this._height = config.height;
    this._hue = config.hue;
    this._name = config.name;
    this._pullzone = config.pullzone;
    this._quality = config.quality;
    this._saturation = config.saturation;
    this._sepia = config.sepia;
    this._sharpen = config.sharpen;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aspect_ratio - computed: false, optional: true, required: false
  private _aspectRatio?: string; 
  public get aspectRatio() {
    return this.getStringAttribute('aspect_ratio');
  }
  public set aspectRatio(value: string) {
    this._aspectRatio = value;
  }
  public resetAspectRatio() {
    this._aspectRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectRatioInput() {
    return this._aspectRatio;
  }

  // auto_optimize - computed: false, optional: true, required: false
  private _autoOptimize?: string; 
  public get autoOptimize() {
    return this.getStringAttribute('auto_optimize');
  }
  public set autoOptimize(value: string) {
    this._autoOptimize = value;
  }
  public resetAutoOptimize() {
    this._autoOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoOptimizeInput() {
    return this._autoOptimize;
  }

  // blur - computed: false, optional: true, required: false
  private _blur?: number; 
  public get blur() {
    return this.getNumberAttribute('blur');
  }
  public set blur(value: number) {
    this._blur = value;
  }
  public resetBlur() {
    this._blur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blurInput() {
    return this._blur;
  }

  // brightness - computed: false, optional: true, required: false
  private _brightness?: number; 
  public get brightness() {
    return this.getNumberAttribute('brightness');
  }
  public set brightness(value: number) {
    this._brightness = value;
  }
  public resetBrightness() {
    this._brightness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brightnessInput() {
    return this._brightness;
  }

  // contrast - computed: false, optional: true, required: false
  private _contrast?: number; 
  public get contrast() {
    return this.getNumberAttribute('contrast');
  }
  public set contrast(value: number) {
    this._contrast = value;
  }
  public resetContrast() {
    this._contrast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contrastInput() {
    return this._contrast;
  }

  // crop - computed: false, optional: true, required: false
  private _crop?: string; 
  public get crop() {
    return this.getStringAttribute('crop');
  }
  public set crop(value: string) {
    this._crop = value;
  }
  public resetCrop() {
    this._crop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cropInput() {
    return this._crop;
  }

  // crop_gravity - computed: false, optional: true, required: false
  private _cropGravity?: string; 
  public get cropGravity() {
    return this.getStringAttribute('crop_gravity');
  }
  public set cropGravity(value: string) {
    this._cropGravity = value;
  }
  public resetCropGravity() {
    this._cropGravity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cropGravityInput() {
    return this._cropGravity;
  }

  // flip - computed: false, optional: true, required: false
  private _flip?: boolean | cdktf.IResolvable; 
  public get flip() {
    return this.getBooleanAttribute('flip');
  }
  public set flip(value: boolean | cdktf.IResolvable) {
    this._flip = value;
  }
  public resetFlip() {
    this._flip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flipInput() {
    return this._flip;
  }

  // flop - computed: false, optional: true, required: false
  private _flop?: boolean | cdktf.IResolvable; 
  public get flop() {
    return this.getBooleanAttribute('flop');
  }
  public set flop(value: boolean | cdktf.IResolvable) {
    this._flop = value;
  }
  public resetFlop() {
    this._flop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flopInput() {
    return this._flop;
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

  // hue - computed: false, optional: true, required: false
  private _hue?: number; 
  public get hue() {
    return this.getNumberAttribute('hue');
  }
  public set hue(value: number) {
    this._hue = value;
  }
  public resetHue() {
    this._hue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hueInput() {
    return this._hue;
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

  // pullzone - computed: false, optional: false, required: true
  private _pullzone?: number; 
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }
  public set pullzone(value: number) {
    this._pullzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneInput() {
    return this._pullzone;
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

  // saturation - computed: false, optional: true, required: false
  private _saturation?: number; 
  public get saturation() {
    return this.getNumberAttribute('saturation');
  }
  public set saturation(value: number) {
    this._saturation = value;
  }
  public resetSaturation() {
    this._saturation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saturationInput() {
    return this._saturation;
  }

  // sepia - computed: false, optional: true, required: false
  private _sepia?: number; 
  public get sepia() {
    return this.getNumberAttribute('sepia');
  }
  public set sepia(value: number) {
    this._sepia = value;
  }
  public resetSepia() {
    this._sepia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sepiaInput() {
    return this._sepia;
  }

  // sharpen - computed: false, optional: true, required: false
  private _sharpen?: boolean | cdktf.IResolvable; 
  public get sharpen() {
    return this.getBooleanAttribute('sharpen');
  }
  public set sharpen(value: boolean | cdktf.IResolvable) {
    this._sharpen = value;
  }
  public resetSharpen() {
    this._sharpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharpenInput() {
    return this._sharpen;
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
      aspect_ratio: cdktf.stringToTerraform(this._aspectRatio),
      auto_optimize: cdktf.stringToTerraform(this._autoOptimize),
      blur: cdktf.numberToTerraform(this._blur),
      brightness: cdktf.numberToTerraform(this._brightness),
      contrast: cdktf.numberToTerraform(this._contrast),
      crop: cdktf.stringToTerraform(this._crop),
      crop_gravity: cdktf.stringToTerraform(this._cropGravity),
      flip: cdktf.booleanToTerraform(this._flip),
      flop: cdktf.booleanToTerraform(this._flop),
      height: cdktf.numberToTerraform(this._height),
      hue: cdktf.numberToTerraform(this._hue),
      name: cdktf.stringToTerraform(this._name),
      pullzone: cdktf.numberToTerraform(this._pullzone),
      quality: cdktf.numberToTerraform(this._quality),
      saturation: cdktf.numberToTerraform(this._saturation),
      sepia: cdktf.numberToTerraform(this._sepia),
      sharpen: cdktf.booleanToTerraform(this._sharpen),
      width: cdktf.numberToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aspect_ratio: {
        value: cdktf.stringToHclTerraform(this._aspectRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_optimize: {
        value: cdktf.stringToHclTerraform(this._autoOptimize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blur: {
        value: cdktf.numberToHclTerraform(this._blur),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      brightness: {
        value: cdktf.numberToHclTerraform(this._brightness),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contrast: {
        value: cdktf.numberToHclTerraform(this._contrast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crop: {
        value: cdktf.stringToHclTerraform(this._crop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crop_gravity: {
        value: cdktf.stringToHclTerraform(this._cropGravity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flip: {
        value: cdktf.booleanToHclTerraform(this._flip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flop: {
        value: cdktf.booleanToHclTerraform(this._flop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      height: {
        value: cdktf.numberToHclTerraform(this._height),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hue: {
        value: cdktf.numberToHclTerraform(this._hue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pullzone: {
        value: cdktf.numberToHclTerraform(this._pullzone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quality: {
        value: cdktf.numberToHclTerraform(this._quality),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      saturation: {
        value: cdktf.numberToHclTerraform(this._saturation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sepia: {
        value: cdktf.numberToHclTerraform(this._sepia),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sharpen: {
        value: cdktf.booleanToHclTerraform(this._sharpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
