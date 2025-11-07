// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#bucket S3Object#bucket}
  */
  readonly bucket: string;
  /**
  * Can be used to specify caching behavior along the request/reply chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#cache_control S3Object#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * The utf-8 content of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#content S3Object#content}
  */
  readonly content?: string;
  /**
  * Specifies presentational information for the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#content_disposition S3Object#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#content_encoding S3Object#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * The natural language or languages of the intended audience for the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#content_language S3Object#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * A standard MIME type describing the format of the contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#content_type S3Object#content_type}
  */
  readonly contentType?: string;
  /**
  * The date and time at which the object is no longer cacheable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#expires S3Object#expires}
  */
  readonly expires?: string;
  /**
  * Specifies whether to delete the object even if it has a governance-type Object Lock in place. You must explicitly pass a value of true for this parameter to delete the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#force_destroy S3Object#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * The key of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#key S3Object#key}
  */
  readonly key: string;
  /**
  * A map of metadata to store with the object in IONOS Object Storage Object Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#metadata S3Object#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA Delete enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#mfa S3Object#mfa}
  */
  readonly mfa?: string;
  /**
  * Specifies whether a legal hold will be applied to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#object_lock_legal_hold S3Object#object_lock_legal_hold}
  */
  readonly objectLockLegalHold?: string;
  /**
  * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}
  */
  readonly objectLockMode?: string;
  /**
  *  The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}
  */
  readonly objectLockRetainUntilDate?: string;
  /**
  * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#request_payer S3Object#request_payer}
  */
  readonly requestPayer?: string;
  /**
  * The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}
  */
  readonly serverSideEncryption?: string;
  /**
  *  Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#server_side_encryption_context S3Object#server_side_encryption_context}
  */
  readonly serverSideEncryptionContext?: string;
  /**
  * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#server_side_encryption_customer_algorithm S3Object#server_side_encryption_customer_algorithm}
  */
  readonly serverSideEncryptionCustomerAlgorithm?: string;
  /**
  * Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#server_side_encryption_customer_key S3Object#server_side_encryption_customer_key}
  */
  readonly serverSideEncryptionCustomerKey?: string;
  /**
  * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IONOS Object Storage Object Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#server_side_encryption_customer_key_md5 S3Object#server_side_encryption_customer_key_md5}
  */
  readonly serverSideEncryptionCustomerKeyMd5?: string;
  /**
  * The path to the file to upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#source S3Object#source}
  */
  readonly source?: string;
  /**
  * The storage class of the object. Valid value is 'STANDARD'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#storage_class S3Object#storage_class}
  */
  readonly storageClass?: string;
  /**
  * The tag-set for the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#tags S3Object#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. IONOS Object Storage Object Storage stores the value of this header in the object metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#website_redirect S3Object#website_redirect}
  */
  readonly websiteRedirect?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object ionoscloud_s3_object}
*/
export class S3Object extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_s3_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Object to import
  * @param importFromId The id of the existing S3Object that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Object to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_s3_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/s3_object ionoscloud_s3_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ObjectConfig
  */
  public constructor(scope: Construct, id: string, config: S3ObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_s3_object',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20'
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
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._expires = config.expires;
    this._forceDestroy = config.forceDestroy;
    this._key = config.key;
    this._metadata = config.metadata;
    this._mfa = config.mfa;
    this._objectLockLegalHold = config.objectLockLegalHold;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._requestPayer = config.requestPayer;
    this._serverSideEncryption = config.serverSideEncryption;
    this._serverSideEncryptionContext = config.serverSideEncryptionContext;
    this._serverSideEncryptionCustomerAlgorithm = config.serverSideEncryptionCustomerAlgorithm;
    this._serverSideEncryptionCustomerKey = config.serverSideEncryptionCustomerKey;
    this._serverSideEncryptionCustomerKeyMd5 = config.serverSideEncryptionCustomerKeyMd5;
    this._source = config.source;
    this._storageClass = config.storageClass;
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

  // mfa - computed: false, optional: true, required: false
  private _mfa?: string; 
  public get mfa() {
    return this.getStringAttribute('mfa');
  }
  public set mfa(value: string) {
    this._mfa = value;
  }
  public resetMfa() {
    this._mfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa;
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

  // request_payer - computed: false, optional: true, required: false
  private _requestPayer?: string; 
  public get requestPayer() {
    return this.getStringAttribute('request_payer');
  }
  public set requestPayer(value: string) {
    this._requestPayer = value;
  }
  public resetRequestPayer() {
    this._requestPayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayerInput() {
    return this._requestPayer;
  }

  // server_side_encryption - computed: true, optional: true, required: false
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

  // server_side_encryption_context - computed: false, optional: true, required: false
  private _serverSideEncryptionContext?: string; 
  public get serverSideEncryptionContext() {
    return this.getStringAttribute('server_side_encryption_context');
  }
  public set serverSideEncryptionContext(value: string) {
    this._serverSideEncryptionContext = value;
  }
  public resetServerSideEncryptionContext() {
    this._serverSideEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionContextInput() {
    return this._serverSideEncryptionContext;
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
      content: cdktf.stringToTerraform(this._content),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      expires: cdktf.stringToTerraform(this._expires),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      key: cdktf.stringToTerraform(this._key),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      mfa: cdktf.stringToTerraform(this._mfa),
      object_lock_legal_hold: cdktf.stringToTerraform(this._objectLockLegalHold),
      object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
      object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
      request_payer: cdktf.stringToTerraform(this._requestPayer),
      server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
      server_side_encryption_context: cdktf.stringToTerraform(this._serverSideEncryptionContext),
      server_side_encryption_customer_algorithm: cdktf.stringToTerraform(this._serverSideEncryptionCustomerAlgorithm),
      server_side_encryption_customer_key: cdktf.stringToTerraform(this._serverSideEncryptionCustomerKey),
      server_side_encryption_customer_key_md5: cdktf.stringToTerraform(this._serverSideEncryptionCustomerKeyMd5),
      source: cdktf.stringToTerraform(this._source),
      storage_class: cdktf.stringToTerraform(this._storageClass),
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
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      mfa: {
        value: cdktf.stringToHclTerraform(this._mfa),
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
      request_payer: {
        value: cdktf.stringToHclTerraform(this._requestPayer),
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
      server_side_encryption_context: {
        value: cdktf.stringToHclTerraform(this._serverSideEncryptionContext),
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
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
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
