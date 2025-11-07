// https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketServerSideEncryptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket on which to setup server side encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption#bucket S3BucketServerSideEncryption#bucket}
  */
  readonly bucket: string;
  /**
  * Server side encryption type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption#encryption_type S3BucketServerSideEncryption#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption#id S3BucketServerSideEncryption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * KMS key id to use for server side encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption#kms_key_id S3BucketServerSideEncryption#kms_key_id}
  */
  readonly kmsKeyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption minio_s3_bucket_server_side_encryption}
*/
export class S3BucketServerSideEncryption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_s3_bucket_server_side_encryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketServerSideEncryption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketServerSideEncryption to import
  * @param importFromId The id of the existing S3BucketServerSideEncryption that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketServerSideEncryption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_s3_bucket_server_side_encryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/s3_bucket_server_side_encryption minio_s3_bucket_server_side_encryption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketServerSideEncryptionConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketServerSideEncryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_s3_bucket_server_side_encryption',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '3.11.3'
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
    this._encryptionType = config.encryptionType;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
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

  // encryption_type - computed: false, optional: false, required: true
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
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

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      encryption_type: cdktf.stringToTerraform(this._encryptionType),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
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
      encryption_type: {
        value: cdktf.stringToHclTerraform(this._encryptionType),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
