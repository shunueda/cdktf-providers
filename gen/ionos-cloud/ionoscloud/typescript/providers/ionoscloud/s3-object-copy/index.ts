// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectCopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}
  */
  readonly bucket: string;
  /**
  * Can be used to specify caching behavior along the request/reply chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Specifies presentational information for the object copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * The natural language or languages of the intended audience for the object copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * A standard MIME type describing the format of the contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}
  */
  readonly contentType?: string;
  /**
  * Copies the object if its entity tag (ETag) matches the specified tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}
  */
  readonly copyIfMatch?: string;
  /**
  * Copies the object if it has been modified since the specified time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}
  */
  readonly copyIfModifiedSince?: string;
  /**
  * Copies the object if its entity tag (ETag) is different than the specified ETag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}
  */
  readonly copyIfNoneMatch?: string;
  /**
  * Copies the object if it hasn't been modified since the specified time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}
  */
  readonly copyIfUnmodifiedSince?: string;
  /**
  * The date and time at which the object copy is no longer cacheable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}
  */
  readonly expires?: string;
  /**
  * Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. You must explicitly pass a value of true for this parameter to delete the object copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * The key of the object copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#key S3ObjectCopy#key}
  */
  readonly key: string;
  /**
  * A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}
  */
  readonly metadataDirective?: string;
  /**
  * Specifies whether a legal hold will be applied to this object copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}
  */
  readonly objectLockLegalHold?: string;
  /**
  * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}
  */
  readonly objectLockMode?: string;
  /**
  *  The date and time when you want this object copy's Object Copy Lock to expire. Must be formatted as a timestamp parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}
  */
  readonly objectLockRetainUntilDate?: string;
  /**
  * The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}
  */
  readonly serverSideEncryption?: string;
  /**
  * Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}
  */
  readonly serverSideEncryptionCustomerAlgorithm?: string;
  /**
  * Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}
  */
  readonly serverSideEncryptionCustomerKey?: string;
  /**
  * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}
  */
  readonly serverSideEncryptionCustomerKeyMd5?: string;
  /**
  * The key of the source object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#source S3ObjectCopy#source}
  */
  readonly source: string;
  /**
  * Specifies the algorithm to use to when decrypting the source object (e.g., AES256).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}
  */
  readonly sourceCustomerAlgorithm?: string;
  /**
  * Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}
  */
  readonly sourceCustomerKey?: string;
  /**
  * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}
  */
  readonly sourceCustomerKeyMd5?: string;
  /**
  * The storage class of the object copy. Valid value is 'STANDARD'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}
  */
  readonly taggingDirective?: string;
  /**
  * The tag-set for the object copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. IONOS Object Storage Object Copy Storage stores the value of this header in the object copy metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}
  */
  readonly websiteRedirect?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy ionoscloud_s3_object_copy}
*/
export class S3ObjectCopy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_s3_object_copy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ObjectCopy to import
  * @param importFromId The id of the existing S3ObjectCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ObjectCopy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_s3_object_copy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_object_copy ionoscloud_s3_object_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ObjectCopyConfig
  */
  public constructor(scope: Construct, id: string, config: S3ObjectCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_s3_object_copy',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
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
    this._cacheControl = config.cacheControl;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._copyIfMatch = config.copyIfMatch;
    this._copyIfModifiedSince = config.copyIfModifiedSince;
    this._copyIfNoneMatch = config.copyIfNoneMatch;
    this._copyIfUnmodifiedSince = config.copyIfUnmodifiedSince;
    this._expires = config.expires;
    this._forceDestroy = config.forceDestroy;
    this._key = config.key;
    this._metadata = config.metadata;
    this._metadataDirective = config.metadataDirective;
    this._objectLockLegalHold = config.objectLockLegalHold;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._serverSideEncryption = config.serverSideEncryption;
    this._serverSideEncryptionCustomerAlgorithm = config.serverSideEncryptionCustomerAlgorithm;
    this._serverSideEncryptionCustomerKey = config.serverSideEncryptionCustomerKey;
    this._serverSideEncryptionCustomerKeyMd5 = config.serverSideEncryptionCustomerKeyMd5;
    this._source = config.source;
    this._sourceCustomerAlgorithm = config.sourceCustomerAlgorithm;
    this._sourceCustomerKey = config.sourceCustomerKey;
    this._sourceCustomerKeyMd5 = config.sourceCustomerKeyMd5;
    this._storageClass = config.storageClass;
    this._taggingDirective = config.taggingDirective;
    this._tags = config.tags;
    this._websiteRedirect = config.websiteRedirect;
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

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
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

  // copy_if_match - computed: false, optional: true, required: false
  private _copyIfMatch?: string; 
  public get copyIfMatch() {
    return this.getStringAttribute('copy_if_match');
  }
  public set copyIfMatch(value: string) {
    this._copyIfMatch = value;
  }
  public resetCopyIfMatch() {
    this._copyIfMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfMatchInput() {
    return this._copyIfMatch;
  }

  // copy_if_modified_since - computed: false, optional: true, required: false
  private _copyIfModifiedSince?: string; 
  public get copyIfModifiedSince() {
    return this.getStringAttribute('copy_if_modified_since');
  }
  public set copyIfModifiedSince(value: string) {
    this._copyIfModifiedSince = value;
  }
  public resetCopyIfModifiedSince() {
    this._copyIfModifiedSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfModifiedSinceInput() {
    return this._copyIfModifiedSince;
  }

  // copy_if_none_match - computed: false, optional: true, required: false
  private _copyIfNoneMatch?: string; 
  public get copyIfNoneMatch() {
    return this.getStringAttribute('copy_if_none_match');
  }
  public set copyIfNoneMatch(value: string) {
    this._copyIfNoneMatch = value;
  }
  public resetCopyIfNoneMatch() {
    this._copyIfNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfNoneMatchInput() {
    return this._copyIfNoneMatch;
  }

  // copy_if_unmodified_since - computed: false, optional: true, required: false
  private _copyIfUnmodifiedSince?: string; 
  public get copyIfUnmodifiedSince() {
    return this.getStringAttribute('copy_if_unmodified_since');
  }
  public set copyIfUnmodifiedSince(value: string) {
    this._copyIfUnmodifiedSince = value;
  }
  public resetCopyIfUnmodifiedSince() {
    this._copyIfUnmodifiedSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfUnmodifiedSinceInput() {
    return this._copyIfUnmodifiedSince;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // force_destroy - computed: true, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_directive - computed: false, optional: true, required: false
  private _metadataDirective?: string; 
  public get metadataDirective() {
    return this.getStringAttribute('metadata_directive');
  }
  public set metadataDirective(value: string) {
    this._metadataDirective = value;
  }
  public resetMetadataDirective() {
    this._metadataDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataDirectiveInput() {
    return this._metadataDirective;
  }

  // object_lock_legal_hold - computed: false, optional: true, required: false
  private _objectLockLegalHold?: string; 
  public get objectLockLegalHold() {
    return this.getStringAttribute('object_lock_legal_hold');
  }
  public set objectLockLegalHold(value: string) {
    this._objectLockLegalHold = value;
  }
  public resetObjectLockLegalHold() {
    this._objectLockLegalHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockLegalHoldInput() {
    return this._objectLockLegalHold;
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

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: string; 
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: string) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }

  // server_side_encryption_customer_algorithm - computed: false, optional: true, required: false
  private _serverSideEncryptionCustomerAlgorithm?: string; 
  public get serverSideEncryptionCustomerAlgorithm() {
    return this.getStringAttribute('server_side_encryption_customer_algorithm');
  }
  public set serverSideEncryptionCustomerAlgorithm(value: string) {
    this._serverSideEncryptionCustomerAlgorithm = value;
  }
  public resetServerSideEncryptionCustomerAlgorithm() {
    this._serverSideEncryptionCustomerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionCustomerAlgorithmInput() {
    return this._serverSideEncryptionCustomerAlgorithm;
  }

  // server_side_encryption_customer_key - computed: false, optional: true, required: false
  private _serverSideEncryptionCustomerKey?: string; 
  public get serverSideEncryptionCustomerKey() {
    return this.getStringAttribute('server_side_encryption_customer_key');
  }
  public set serverSideEncryptionCustomerKey(value: string) {
    this._serverSideEncryptionCustomerKey = value;
  }
  public resetServerSideEncryptionCustomerKey() {
    this._serverSideEncryptionCustomerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionCustomerKeyInput() {
    return this._serverSideEncryptionCustomerKey;
  }

  // server_side_encryption_customer_key_md5 - computed: false, optional: true, required: false
  private _serverSideEncryptionCustomerKeyMd5?: string; 
  public get serverSideEncryptionCustomerKeyMd5() {
    return this.getStringAttribute('server_side_encryption_customer_key_md5');
  }
  public set serverSideEncryptionCustomerKeyMd5(value: string) {
    this._serverSideEncryptionCustomerKeyMd5 = value;
  }
  public resetServerSideEncryptionCustomerKeyMd5() {
    this._serverSideEncryptionCustomerKeyMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionCustomerKeyMd5Input() {
    return this._serverSideEncryptionCustomerKeyMd5;
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

  // source_customer_algorithm - computed: false, optional: true, required: false
  private _sourceCustomerAlgorithm?: string; 
  public get sourceCustomerAlgorithm() {
    return this.getStringAttribute('source_customer_algorithm');
  }
  public set sourceCustomerAlgorithm(value: string) {
    this._sourceCustomerAlgorithm = value;
  }
  public resetSourceCustomerAlgorithm() {
    this._sourceCustomerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCustomerAlgorithmInput() {
    return this._sourceCustomerAlgorithm;
  }

  // source_customer_key - computed: false, optional: true, required: false
  private _sourceCustomerKey?: string; 
  public get sourceCustomerKey() {
    return this.getStringAttribute('source_customer_key');
  }
  public set sourceCustomerKey(value: string) {
    this._sourceCustomerKey = value;
  }
  public resetSourceCustomerKey() {
    this._sourceCustomerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCustomerKeyInput() {
    return this._sourceCustomerKey;
  }

  // source_customer_key_md5 - computed: false, optional: true, required: false
  private _sourceCustomerKeyMd5?: string; 
  public get sourceCustomerKeyMd5() {
    return this.getStringAttribute('source_customer_key_md5');
  }
  public set sourceCustomerKeyMd5(value: string) {
    this._sourceCustomerKeyMd5 = value;
  }
  public resetSourceCustomerKeyMd5() {
    this._sourceCustomerKeyMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCustomerKeyMd5Input() {
    return this._sourceCustomerKeyMd5;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tagging_directive - computed: false, optional: true, required: false
  private _taggingDirective?: string; 
  public get taggingDirective() {
    return this.getStringAttribute('tagging_directive');
  }
  public set taggingDirective(value: string) {
    this._taggingDirective = value;
  }
  public resetTaggingDirective() {
    this._taggingDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingDirectiveInput() {
    return this._taggingDirective;
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // website_redirect - computed: false, optional: true, required: false
  private _websiteRedirect?: string; 
  public get websiteRedirect() {
    return this.getStringAttribute('website_redirect');
  }
  public set websiteRedirect(value: string) {
    this._websiteRedirect = value;
  }
  public resetWebsiteRedirect() {
    this._websiteRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteRedirectInput() {
    return this._websiteRedirect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      copy_if_match: cdktf.stringToTerraform(this._copyIfMatch),
      copy_if_modified_since: cdktf.stringToTerraform(this._copyIfModifiedSince),
      copy_if_none_match: cdktf.stringToTerraform(this._copyIfNoneMatch),
      copy_if_unmodified_since: cdktf.stringToTerraform(this._copyIfUnmodifiedSince),
      expires: cdktf.stringToTerraform(this._expires),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      key: cdktf.stringToTerraform(this._key),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      metadata_directive: cdktf.stringToTerraform(this._metadataDirective),
      object_lock_legal_hold: cdktf.stringToTerraform(this._objectLockLegalHold),
      object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
      object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
      server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
      server_side_encryption_customer_algorithm: cdktf.stringToTerraform(this._serverSideEncryptionCustomerAlgorithm),
      server_side_encryption_customer_key: cdktf.stringToTerraform(this._serverSideEncryptionCustomerKey),
      server_side_encryption_customer_key_md5: cdktf.stringToTerraform(this._serverSideEncryptionCustomerKeyMd5),
      source: cdktf.stringToTerraform(this._source),
      source_customer_algorithm: cdktf.stringToTerraform(this._sourceCustomerAlgorithm),
      source_customer_key: cdktf.stringToTerraform(this._sourceCustomerKey),
      source_customer_key_md5: cdktf.stringToTerraform(this._sourceCustomerKeyMd5),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tagging_directive: cdktf.stringToTerraform(this._taggingDirective),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
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
      cache_control: {
        value: cdktf.stringToHclTerraform(this._cacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_disposition: {
        value: cdktf.stringToHclTerraform(this._contentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktf.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_language: {
        value: cdktf.stringToHclTerraform(this._contentLanguage),
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
      copy_if_match: {
        value: cdktf.stringToHclTerraform(this._copyIfMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_if_modified_since: {
        value: cdktf.stringToHclTerraform(this._copyIfModifiedSince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_if_none_match: {
        value: cdktf.stringToHclTerraform(this._copyIfNoneMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_if_unmodified_since: {
        value: cdktf.stringToHclTerraform(this._copyIfUnmodifiedSince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires: {
        value: cdktf.stringToHclTerraform(this._expires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata_directive: {
        value: cdktf.stringToHclTerraform(this._metadataDirective),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_lock_legal_hold: {
        value: cdktf.stringToHclTerraform(this._objectLockLegalHold),
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
      server_side_encryption: {
        value: cdktf.stringToHclTerraform(this._serverSideEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_side_encryption_customer_algorithm: {
        value: cdktf.stringToHclTerraform(this._serverSideEncryptionCustomerAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_side_encryption_customer_key: {
        value: cdktf.stringToHclTerraform(this._serverSideEncryptionCustomerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_side_encryption_customer_key_md5: {
        value: cdktf.stringToHclTerraform(this._serverSideEncryptionCustomerKeyMd5),
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
      source_customer_algorithm: {
        value: cdktf.stringToHclTerraform(this._sourceCustomerAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_customer_key: {
        value: cdktf.stringToHclTerraform(this._sourceCustomerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_customer_key_md5: {
        value: cdktf.stringToHclTerraform(this._sourceCustomerKeyMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tagging_directive: {
        value: cdktf.stringToHclTerraform(this._taggingDirective),
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
      website_redirect: {
        value: cdktf.stringToHclTerraform(this._websiteRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
