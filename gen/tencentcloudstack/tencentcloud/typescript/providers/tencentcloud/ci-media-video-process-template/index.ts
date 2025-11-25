// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaVideoProcessTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#bucket CiMediaVideoProcessTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#id CiMediaVideoProcessTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#name CiMediaVideoProcessTemplate#name}
  */
  readonly name: string;
  /**
  * color_enhance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#color_enhance CiMediaVideoProcessTemplate#color_enhance}
  */
  readonly colorEnhance?: CiMediaVideoProcessTemplateColorEnhance;
  /**
  * ms_sharpen block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#ms_sharpen CiMediaVideoProcessTemplate#ms_sharpen}
  */
  readonly msSharpen?: CiMediaVideoProcessTemplateMsSharpen;
}
export interface CiMediaVideoProcessTemplateColorEnhance {
  /**
  * Contrast, value range: [0, 100], empty string (indicates automatic analysis).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#contrast CiMediaVideoProcessTemplate#contrast}
  */
  readonly contrast?: string;
  /**
  * colorcorrection, value range: [0, 100], empty string (indicating automatic analysis).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#correction CiMediaVideoProcessTemplate#correction}
  */
  readonly correction?: string;
  /**
  * Whether color enhancement is turned on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#enable CiMediaVideoProcessTemplate#enable}
  */
  readonly enable?: string;
  /**
  * Saturation, value range: [0, 100], empty string (indicating automatic analysis).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#saturation CiMediaVideoProcessTemplate#saturation}
  */
  readonly saturation?: string;
}

export function ciMediaVideoProcessTemplateColorEnhanceToTerraform(struct?: CiMediaVideoProcessTemplateColorEnhanceOutputReference | CiMediaVideoProcessTemplateColorEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contrast: cdktf.stringToTerraform(struct!.contrast),
    correction: cdktf.stringToTerraform(struct!.correction),
    enable: cdktf.stringToTerraform(struct!.enable),
    saturation: cdktf.stringToTerraform(struct!.saturation),
  }
}


export function ciMediaVideoProcessTemplateColorEnhanceToHclTerraform(struct?: CiMediaVideoProcessTemplateColorEnhanceOutputReference | CiMediaVideoProcessTemplateColorEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contrast: {
      value: cdktf.stringToHclTerraform(struct!.contrast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correction: {
      value: cdktf.stringToHclTerraform(struct!.correction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saturation: {
      value: cdktf.stringToHclTerraform(struct!.saturation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaVideoProcessTemplateColorEnhanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaVideoProcessTemplateColorEnhance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contrast !== undefined) {
      hasAnyValues = true;
      internalValueResult.contrast = this._contrast;
    }
    if (this._correction !== undefined) {
      hasAnyValues = true;
      internalValueResult.correction = this._correction;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._saturation !== undefined) {
      hasAnyValues = true;
      internalValueResult.saturation = this._saturation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaVideoProcessTemplateColorEnhance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contrast = undefined;
      this._correction = undefined;
      this._enable = undefined;
      this._saturation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contrast = value.contrast;
      this._correction = value.correction;
      this._enable = value.enable;
      this._saturation = value.saturation;
    }
  }

  // contrast - computed: false, optional: true, required: false
  private _contrast?: string; 
  public get contrast() {
    return this.getStringAttribute('contrast');
  }
  public set contrast(value: string) {
    this._contrast = value;
  }
  public resetContrast() {
    this._contrast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contrastInput() {
    return this._contrast;
  }

  // correction - computed: false, optional: true, required: false
  private _correction?: string; 
  public get correction() {
    return this.getStringAttribute('correction');
  }
  public set correction(value: string) {
    this._correction = value;
  }
  public resetCorrection() {
    this._correction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correctionInput() {
    return this._correction;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // saturation - computed: false, optional: true, required: false
  private _saturation?: string; 
  public get saturation() {
    return this.getStringAttribute('saturation');
  }
  public set saturation(value: string) {
    this._saturation = value;
  }
  public resetSaturation() {
    this._saturation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saturationInput() {
    return this._saturation;
  }
}
export interface CiMediaVideoProcessTemplateMsSharpen {
  /**
  * Whether detail enhancement is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#enable CiMediaVideoProcessTemplate#enable}
  */
  readonly enable?: string;
  /**
  * Enhancement level, value range: [0, 10], empty string (indicates automatic analysis).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#sharpen_level CiMediaVideoProcessTemplate#sharpen_level}
  */
  readonly sharpenLevel?: string;
}

export function ciMediaVideoProcessTemplateMsSharpenToTerraform(struct?: CiMediaVideoProcessTemplateMsSharpenOutputReference | CiMediaVideoProcessTemplateMsSharpen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    sharpen_level: cdktf.stringToTerraform(struct!.sharpenLevel),
  }
}


export function ciMediaVideoProcessTemplateMsSharpenToHclTerraform(struct?: CiMediaVideoProcessTemplateMsSharpenOutputReference | CiMediaVideoProcessTemplateMsSharpen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sharpen_level: {
      value: cdktf.stringToHclTerraform(struct!.sharpenLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaVideoProcessTemplateMsSharpenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaVideoProcessTemplateMsSharpen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sharpenLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharpenLevel = this._sharpenLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaVideoProcessTemplateMsSharpen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._sharpenLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._sharpenLevel = value.sharpenLevel;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // sharpen_level - computed: false, optional: true, required: false
  private _sharpenLevel?: string; 
  public get sharpenLevel() {
    return this.getStringAttribute('sharpen_level');
  }
  public set sharpenLevel(value: string) {
    this._sharpenLevel = value;
  }
  public resetSharpenLevel() {
    this._sharpenLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharpenLevelInput() {
    return this._sharpenLevel;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template tencentcloud_ci_media_video_process_template}
*/
export class CiMediaVideoProcessTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_video_process_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaVideoProcessTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaVideoProcessTemplate to import
  * @param importFromId The id of the existing CiMediaVideoProcessTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaVideoProcessTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_video_process_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_video_process_template tencentcloud_ci_media_video_process_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaVideoProcessTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaVideoProcessTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_video_process_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._colorEnhance.internalValue = config.colorEnhance;
    this._msSharpen.internalValue = config.msSharpen;
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

  // color_enhance - computed: false, optional: true, required: false
  private _colorEnhance = new CiMediaVideoProcessTemplateColorEnhanceOutputReference(this, "color_enhance");
  public get colorEnhance() {
    return this._colorEnhance;
  }
  public putColorEnhance(value: CiMediaVideoProcessTemplateColorEnhance) {
    this._colorEnhance.internalValue = value;
  }
  public resetColorEnhance() {
    this._colorEnhance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorEnhanceInput() {
    return this._colorEnhance.internalValue;
  }

  // ms_sharpen - computed: false, optional: true, required: false
  private _msSharpen = new CiMediaVideoProcessTemplateMsSharpenOutputReference(this, "ms_sharpen");
  public get msSharpen() {
    return this._msSharpen;
  }
  public putMsSharpen(value: CiMediaVideoProcessTemplateMsSharpen) {
    this._msSharpen.internalValue = value;
  }
  public resetMsSharpen() {
    this._msSharpen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msSharpenInput() {
    return this._msSharpen.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      color_enhance: ciMediaVideoProcessTemplateColorEnhanceToTerraform(this._colorEnhance.internalValue),
      ms_sharpen: ciMediaVideoProcessTemplateMsSharpenToTerraform(this._msSharpen.internalValue),
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
      color_enhance: {
        value: ciMediaVideoProcessTemplateColorEnhanceToHclTerraform(this._colorEnhance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaVideoProcessTemplateColorEnhanceList",
      },
      ms_sharpen: {
        value: ciMediaVideoProcessTemplateMsSharpenToHclTerraform(this._msSharpen.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaVideoProcessTemplateMsSharpenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
