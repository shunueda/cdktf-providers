// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosObjectAbortMultipartUploadOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation#bucket CosObjectAbortMultipartUploadOperation#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation#id CosObjectAbortMultipartUploadOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation#key CosObjectAbortMultipartUploadOperation#key}
  */
  readonly key: string;
  /**
  * Multipart uploaded id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation#upload_id CosObjectAbortMultipartUploadOperation#upload_id}
  */
  readonly uploadId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation tencentcloud_cos_object_abort_multipart_upload_operation}
*/
export class CosObjectAbortMultipartUploadOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_object_abort_multipart_upload_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosObjectAbortMultipartUploadOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosObjectAbortMultipartUploadOperation to import
  * @param importFromId The id of the existing CosObjectAbortMultipartUploadOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosObjectAbortMultipartUploadOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_object_abort_multipart_upload_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cos_object_abort_multipart_upload_operation tencentcloud_cos_object_abort_multipart_upload_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosObjectAbortMultipartUploadOperationConfig
  */
  public constructor(scope: Construct, id: string, config: CosObjectAbortMultipartUploadOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_object_abort_multipart_upload_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._key = config.key;
    this._uploadId = config.uploadId;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // upload_id - computed: false, optional: false, required: true
  private _uploadId?: string; 
  public get uploadId() {
    return this.getStringAttribute('upload_id');
  }
  public set uploadId(value: string) {
    this._uploadId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIdInput() {
    return this._uploadId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      upload_id: cdktf.stringToTerraform(this._uploadId),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_id: {
        value: cdktf.stringToHclTerraform(this._uploadId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
