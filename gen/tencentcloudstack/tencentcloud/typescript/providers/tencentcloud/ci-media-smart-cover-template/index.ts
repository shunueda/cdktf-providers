// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaSmartCoverTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#bucket CiMediaSmartCoverTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#id CiMediaSmartCoverTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#name CiMediaSmartCoverTemplate#name}
  */
  readonly name: string;
  /**
  * smart_cover block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#smart_cover CiMediaSmartCoverTemplate#smart_cover}
  */
  readonly smartCover: CiMediaSmartCoverTemplateSmartCover;
}
export interface CiMediaSmartCoverTemplateSmartCover {
  /**
  * Number of screenshots, [1,10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#count CiMediaSmartCoverTemplate#count}
  */
  readonly count?: string;
  /**
  * cover deduplication, true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#delete_duplicates CiMediaSmartCoverTemplate#delete_duplicates}
  */
  readonly deleteDuplicates?: string;
  /**
  * Image Format, value jpg, png, webp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#format CiMediaSmartCoverTemplate#format}
  */
  readonly format: string;
  /**
  * Height, value range: [128, 4096], unit: px, if only Height is set, Width is calculated according to the original video ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#height CiMediaSmartCoverTemplate#height}
  */
  readonly height?: string;
  /**
  * Width, value range: [128, 4096], unit: px, if only Width is set, Height is calculated according to the original ratio of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#width CiMediaSmartCoverTemplate#width}
  */
  readonly width?: string;
}

export function ciMediaSmartCoverTemplateSmartCoverToTerraform(struct?: CiMediaSmartCoverTemplateSmartCoverOutputReference | CiMediaSmartCoverTemplateSmartCover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    delete_duplicates: cdktf.stringToTerraform(struct!.deleteDuplicates),
    format: cdktf.stringToTerraform(struct!.format),
    height: cdktf.stringToTerraform(struct!.height),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function ciMediaSmartCoverTemplateSmartCoverToHclTerraform(struct?: CiMediaSmartCoverTemplateSmartCoverOutputReference | CiMediaSmartCoverTemplateSmartCover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_duplicates: {
      value: cdktf.stringToHclTerraform(struct!.deleteDuplicates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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

export class CiMediaSmartCoverTemplateSmartCoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaSmartCoverTemplateSmartCover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._deleteDuplicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDuplicates = this._deleteDuplicates;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
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

  public set internalValue(value: CiMediaSmartCoverTemplateSmartCover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._deleteDuplicates = undefined;
      this._format = undefined;
      this._height = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._deleteDuplicates = value.deleteDuplicates;
      this._format = value.format;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // delete_duplicates - computed: false, optional: true, required: false
  private _deleteDuplicates?: string; 
  public get deleteDuplicates() {
    return this.getStringAttribute('delete_duplicates');
  }
  public set deleteDuplicates(value: string) {
    this._deleteDuplicates = value;
  }
  public resetDeleteDuplicates() {
    this._deleteDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDuplicatesInput() {
    return this._deleteDuplicates;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template tencentcloud_ci_media_smart_cover_template}
*/
export class CiMediaSmartCoverTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_smart_cover_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaSmartCoverTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaSmartCoverTemplate to import
  * @param importFromId The id of the existing CiMediaSmartCoverTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaSmartCoverTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_smart_cover_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ci_media_smart_cover_template tencentcloud_ci_media_smart_cover_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaSmartCoverTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaSmartCoverTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_smart_cover_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._smartCover.internalValue = config.smartCover;
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

  // smart_cover - computed: false, optional: false, required: true
  private _smartCover = new CiMediaSmartCoverTemplateSmartCoverOutputReference(this, "smart_cover");
  public get smartCover() {
    return this._smartCover;
  }
  public putSmartCover(value: CiMediaSmartCoverTemplateSmartCover) {
    this._smartCover.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCoverInput() {
    return this._smartCover.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      smart_cover: ciMediaSmartCoverTemplateSmartCoverToTerraform(this._smartCover.internalValue),
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
      smart_cover: {
        value: ciMediaSmartCoverTemplateSmartCoverToHclTerraform(this._smartCover.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaSmartCoverTemplateSmartCoverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
