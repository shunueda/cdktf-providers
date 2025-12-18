// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access key to use when applying changes. This value can also be provided as `storage_access_key` specified in provider config (explicitly or within `shared_credentials_file`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#access_key StorageObject#access_key}
  */
  readonly accessKey?: string;
  /**
  * The [predefined ACL](https://yandex.cloud/docs/storage/concepts/acl#predefined_acls) to apply. Defaults to `private`.
  * 
  * ~> To change ACL after creation, the service account to which used access and secret keys correspond should have `storage.admin` role, though this role is not necessary to be able to create an object with any ACL.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#acl StorageObject#acl}
  */
  readonly acl?: string;
  /**
  * The name of the containing bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#bucket StorageObject#bucket}
  */
  readonly bucket: string;
  /**
  * Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. Conflicts with `source` and `content_base64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#content StorageObject#content}
  */
  readonly content?: string;
  /**
  * Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file. Conflicts with `source` and `content`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#content_base64 StorageObject#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * A standard MIME type describing the format of the object data, e.g. `application/octet-stream`. All Valid MIME Types are valid for this input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#content_type StorageObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#id StorageObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the object once it is in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#key StorageObject#key}
  */
  readonly key: string;
  /**
  * Specifies a [legal hold status](https://yandex.cloud/docs/storage/concepts/object-lock#types) of an object. Requires `object_lock_configuration` to be enabled on a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#object_lock_legal_hold_status StorageObject#object_lock_legal_hold_status}
  */
  readonly objectLockLegalHoldStatus?: string;
  /**
  * Specifies a type of object lock. One of `["GOVERNANCE", "COMPLIANCE"]`. It must be set simultaneously with `object_lock_retain_until_date`. Requires `object_lock_configuration` to be enabled on a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#object_lock_mode StorageObject#object_lock_mode}
  */
  readonly objectLockMode?: string;
  /**
  * Specifies date and time in RTC3339 format until which an object is to be locked. It must be set simultaneously with `object_lock_mode`. Requires `object_lock_configuration` to be enabled on a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#object_lock_retain_until_date StorageObject#object_lock_retain_until_date}
  */
  readonly objectLockRetainUntilDate?: string;
  /**
  * The secret key to use when applying changes. This value can also be provided as `storage_secret_key` specified in provider config (explicitly or within `shared_credentials_file`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#secret_key StorageObject#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The path to a file that will be read and uploaded as raw bytes for the object content. Conflicts with `content` and `content_base64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#source StorageObject#source}
  */
  readonly source?: string;
  /**
  * Used to trigger object update when the source content changes. So the only meaningful value is `filemd5("path/to/source"). The value is only stored in state and not saved by Yandex Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#source_hash StorageObject#source_hash}
  */
  readonly sourceHash?: string;
  /**
  * The `tags` object for setting tags (or labels) for bucket. See [Tags](https://yandex.cloud/docs/storage/concepts/tags) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#tags StorageObject#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object yandex_storage_object}
*/
export class StorageObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_storage_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageObject to import
  * @param importFromId The id of the existing StorageObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_storage_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/storage_object yandex_storage_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageObjectConfig
  */
  public constructor(scope: Construct, id: string, config: StorageObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_storage_object',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._content = config.content;
    this._contentBase64 = config.contentBase64;
    this._contentType = config.contentType;
    this._id = config.id;
    this._key = config.key;
    this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._secretKey = config.secretKey;
    this._source = config.source;
    this._sourceHash = config.sourceHash;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

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

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
  }

  // content_type - computed: true, optional: true, required: false
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

  // object_lock_legal_hold_status - computed: false, optional: true, required: false
  private _objectLockLegalHoldStatus?: string; 
  public get objectLockLegalHoldStatus() {
    return this.getStringAttribute('object_lock_legal_hold_status');
  }
  public set objectLockLegalHoldStatus(value: string) {
    this._objectLockLegalHoldStatus = value;
  }
  public resetObjectLockLegalHoldStatus() {
    this._objectLockLegalHoldStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockLegalHoldStatusInput() {
    return this._objectLockLegalHoldStatus;
  }

  // object_lock_mode - computed: false, optional: true, required: false
  private _objectLockMode?: string; 
  public get objectLockMode() {
    return this.getStringAttribute('object_lock_mode');
  }
  public set objectLockMode(value: string) {
    this._objectLockMode = value;
  }
  public resetObjectLockMode() {
    this._objectLockMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockModeInput() {
    return this._objectLockMode;
  }

  // object_lock_retain_until_date - computed: false, optional: true, required: false
  private _objectLockRetainUntilDate?: string; 
  public get objectLockRetainUntilDate() {
    return this.getStringAttribute('object_lock_retain_until_date');
  }
  public set objectLockRetainUntilDate(value: string) {
    this._objectLockRetainUntilDate = value;
  }
  public resetObjectLockRetainUntilDate() {
    this._objectLockRetainUntilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockRetainUntilDateInput() {
    return this._objectLockRetainUntilDate;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_hash - computed: false, optional: true, required: false
  private _sourceHash?: string; 
  public get sourceHash() {
    return this.getStringAttribute('source_hash');
  }
  public set sourceHash(value: string) {
    this._sourceHash = value;
  }
  public resetSourceHash() {
    this._sourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHashInput() {
    return this._sourceHash;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      content: cdktf.stringToTerraform(this._content),
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      content_type: cdktf.stringToTerraform(this._contentType),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
      object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
      object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      source: cdktf.stringToTerraform(this._source),
      source_hash: cdktf.stringToTerraform(this._sourceHash),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_base64: {
        value: cdktf.stringToHclTerraform(this._contentBase64),
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
      object_lock_legal_hold_status: {
        value: cdktf.stringToHclTerraform(this._objectLockLegalHoldStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_lock_mode: {
        value: cdktf.stringToHclTerraform(this._objectLockMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_lock_retain_until_date: {
        value: cdktf.stringToHclTerraform(this._objectLockRetainUntilDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
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
      source_hash: {
        value: cdktf.stringToHclTerraform(this._sourceHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
