// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OssBucketKmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms#bucket OssBucketKms#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms#id OssBucketKms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms#kms_data_encryption OssBucketKms#kms_data_encryption}
  */
  readonly kmsDataEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms#kms_master_key_id OssBucketKms#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms#sse_algorithm OssBucketKms#sse_algorithm}
  */
  readonly sseAlgorithm: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms alibabacloudstack_oss_bucket_kms}
*/
export class OssBucketKms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_oss_bucket_kms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OssBucketKms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OssBucketKms to import
  * @param importFromId The id of the existing OssBucketKms that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OssBucketKms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_oss_bucket_kms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/oss_bucket_kms alibabacloudstack_oss_bucket_kms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OssBucketKmsConfig
  */
  public constructor(scope: Construct, id: string, config: OssBucketKmsConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_oss_bucket_kms',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._kmsDataEncryption = config.kmsDataEncryption;
    this._kmsMasterKeyId = config.kmsMasterKeyId;
    this._sseAlgorithm = config.sseAlgorithm;
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

  // kms_data_encryption - computed: false, optional: true, required: false
  private _kmsDataEncryption?: string; 
  public get kmsDataEncryption() {
    return this.getStringAttribute('kms_data_encryption');
  }
  public set kmsDataEncryption(value: string) {
    this._kmsDataEncryption = value;
  }
  public resetKmsDataEncryption() {
    this._kmsDataEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsDataEncryptionInput() {
    return this._kmsDataEncryption;
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // sse_algorithm - computed: false, optional: false, required: true
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      kms_data_encryption: cdktf.stringToTerraform(this._kmsDataEncryption),
      kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
      sse_algorithm: cdktf.stringToTerraform(this._sseAlgorithm),
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
      kms_data_encryption: {
        value: cdktf.stringToHclTerraform(this._kmsDataEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_master_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsMasterKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sse_algorithm: {
        value: cdktf.stringToHclTerraform(this._sseAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
