// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiBucketPicStyleConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style#bucket CiBucketPicStyle#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style#id CiBucketPicStyle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * style details, example: mageMogr2/grayscale/1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style#style_body CiBucketPicStyle#style_body}
  */
  readonly styleBody: string;
  /**
  * style name, style names are case-sensitive, and a combination of uppercase and lowercase letters, numbers, and `$ + _ ( )` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style#style_name CiBucketPicStyle#style_name}
  */
  readonly styleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style tencentcloud_ci_bucket_pic_style}
*/
export class CiBucketPicStyle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_bucket_pic_style";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiBucketPicStyle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiBucketPicStyle to import
  * @param importFromId The id of the existing CiBucketPicStyle that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiBucketPicStyle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_bucket_pic_style", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_bucket_pic_style tencentcloud_ci_bucket_pic_style} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiBucketPicStyleConfig
  */
  public constructor(scope: Construct, id: string, config: CiBucketPicStyleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_bucket_pic_style',
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
    this._bucket = config.bucket;
    this._id = config.id;
    this._styleBody = config.styleBody;
    this._styleName = config.styleName;
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

  // style_body - computed: false, optional: false, required: true
  private _styleBody?: string; 
  public get styleBody() {
    return this.getStringAttribute('style_body');
  }
  public set styleBody(value: string) {
    this._styleBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get styleBodyInput() {
    return this._styleBody;
  }

  // style_name - computed: false, optional: false, required: true
  private _styleName?: string; 
  public get styleName() {
    return this.getStringAttribute('style_name');
  }
  public set styleName(value: string) {
    this._styleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get styleNameInput() {
    return this._styleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      style_body: cdktf.stringToTerraform(this._styleBody),
      style_name: cdktf.stringToTerraform(this._styleName),
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
      style_body: {
        value: cdktf.stringToHclTerraform(this._styleBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      style_name: {
        value: cdktf.stringToHclTerraform(this._styleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
