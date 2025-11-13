// https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataB2BucketFileSignedUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url#bucket_id DataB2BucketFileSignedUrl#bucket_id}
  */
  readonly bucketId: string;
  /**
  * The duration for which the presigned URL is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url#duration DataB2BucketFileSignedUrl#duration}
  */
  readonly duration?: number;
  /**
  * The file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url#file_name DataB2BucketFileSignedUrl#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url#id DataB2BucketFileSignedUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url b2_bucket_file_signed_url}
*/
export class DataB2BucketFileSignedUrl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b2_bucket_file_signed_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataB2BucketFileSignedUrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataB2BucketFileSignedUrl to import
  * @param importFromId The id of the existing DataB2BucketFileSignedUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataB2BucketFileSignedUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b2_bucket_file_signed_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/data-sources/bucket_file_signed_url b2_bucket_file_signed_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataB2BucketFileSignedUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataB2BucketFileSignedUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'b2_bucket_file_signed_url',
      terraformGeneratorMetadata: {
        providerName: 'b2',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._duration = config.duration;
    this._fileName = config.fileName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // signed_url - computed: true, optional: false, required: false
  public get signedUrl() {
    return this.getStringAttribute('signed_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      duration: cdktf.numberToTerraform(this._duration),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
