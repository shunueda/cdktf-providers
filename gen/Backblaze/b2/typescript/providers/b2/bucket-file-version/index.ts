// https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BucketFileVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#bucket_id BucketFileVersion#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Content type. If not set, it will be set based on the file extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#content_type BucketFileVersion#content_type}
  */
  readonly contentType?: string;
  /**
  * The custom information that is uploaded with the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#file_info BucketFileVersion#file_info}
  */
  readonly fileInfo?: { [key: string]: string };
  /**
  * The name of the B2 file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#file_name BucketFileVersion#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#id BucketFileVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path to the local file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#source BucketFileVersion#source}
  */
  readonly source: string;
  /**
  * server_side_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#server_side_encryption BucketFileVersion#server_side_encryption}
  */
  readonly serverSideEncryption?: BucketFileVersionServerSideEncryption;
}
export interface BucketFileVersionServerSideEncryptionKey {
  /**
  * Key identifier stored in file info metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#key_id BucketFileVersion#key_id}
  */
  readonly keyId?: string;
  /**
  * Secret key value, in standard Base 64 encoding (RFC 4648)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#secret_b64 BucketFileVersion#secret_b64}
  */
  readonly secretB64?: string;
}

export function bucketFileVersionServerSideEncryptionKeyToTerraform(struct?: BucketFileVersionServerSideEncryptionKeyOutputReference | BucketFileVersionServerSideEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    secret_b64: cdktf.stringToTerraform(struct!.secretB64),
  }
}


export function bucketFileVersionServerSideEncryptionKeyToHclTerraform(struct?: BucketFileVersionServerSideEncryptionKeyOutputReference | BucketFileVersionServerSideEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_b64: {
      value: cdktf.stringToHclTerraform(struct!.secretB64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketFileVersionServerSideEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketFileVersionServerSideEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._secretB64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretB64 = this._secretB64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketFileVersionServerSideEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._secretB64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._secretB64 = value.secretB64;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // secret_b64 - computed: false, optional: true, required: false
  private _secretB64?: string; 
  public get secretB64() {
    return this.getStringAttribute('secret_b64');
  }
  public set secretB64(value: string) {
    this._secretB64 = value;
  }
  public resetSecretB64() {
    this._secretB64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretB64Input() {
    return this._secretB64;
  }
}
export interface BucketFileVersionServerSideEncryption {
  /**
  * Server-side encryption algorithm. AES256 is the only one supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#algorithm BucketFileVersion#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Server-side encryption mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#mode BucketFileVersion#mode}
  */
  readonly mode?: string;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#key BucketFileVersion#key}
  */
  readonly key?: BucketFileVersionServerSideEncryptionKey;
}

export function bucketFileVersionServerSideEncryptionToTerraform(struct?: BucketFileVersionServerSideEncryptionOutputReference | BucketFileVersionServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    mode: cdktf.stringToTerraform(struct!.mode),
    key: bucketFileVersionServerSideEncryptionKeyToTerraform(struct!.key),
  }
}


export function bucketFileVersionServerSideEncryptionToHclTerraform(struct?: BucketFileVersionServerSideEncryptionOutputReference | BucketFileVersionServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: bucketFileVersionServerSideEncryptionKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "BucketFileVersionServerSideEncryptionKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketFileVersionServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketFileVersionServerSideEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketFileVersionServerSideEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._mode = undefined;
      this._key.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._mode = value.mode;
      this._key.internalValue = value.key;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // key - computed: false, optional: true, required: false
  private _key = new BucketFileVersionServerSideEncryptionKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: BucketFileVersionServerSideEncryptionKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version b2_bucket_file_version}
*/
export class BucketFileVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b2_bucket_file_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BucketFileVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BucketFileVersion to import
  * @param importFromId The id of the existing BucketFileVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BucketFileVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b2_bucket_file_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/resources/bucket_file_version b2_bucket_file_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BucketFileVersionConfig
  */
  public constructor(scope: Construct, id: string, config: BucketFileVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'b2_bucket_file_version',
      terraformGeneratorMetadata: {
        providerName: 'b2',
        providerVersion: '0.10.0'
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
    this._contentType = config.contentType;
    this._fileInfo = config.fileInfo;
    this._fileName = config.fileName;
    this._id = config.id;
    this._source = config.source;
    this._serverSideEncryption.internalValue = config.serverSideEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

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

  // content_md5 - computed: true, optional: false, required: false
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // content_sha1 - computed: true, optional: false, required: false
  public get contentSha1() {
    return this.getStringAttribute('content_sha1');
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // file_info - computed: true, optional: true, required: false
  private _fileInfo?: { [key: string]: string }; 
  public get fileInfo() {
    return this.getStringMapAttribute('file_info');
  }
  public set fileInfo(value: { [key: string]: string }) {
    this._fileInfo = value;
  }
  public resetFileInfo() {
    this._fileInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInfoInput() {
    return this._fileInfo;
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // upload_timestamp - computed: true, optional: false, required: false
  public get uploadTimestamp() {
    return this.getNumberAttribute('upload_timestamp');
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new BucketFileVersionServerSideEncryptionOutputReference(this, "server_side_encryption");
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public putServerSideEncryption(value: BucketFileVersionServerSideEncryption) {
    this._serverSideEncryption.internalValue = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      content_type: cdktf.stringToTerraform(this._contentType),
      file_info: cdktf.hashMapper(cdktf.stringToTerraform)(this._fileInfo),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      source: cdktf.stringToTerraform(this._source),
      server_side_encryption: bucketFileVersionServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
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
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_info: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._fileInfo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_side_encryption: {
        value: bucketFileVersionServerSideEncryptionToHclTerraform(this._serverSideEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BucketFileVersionServerSideEncryptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
