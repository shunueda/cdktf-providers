// https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectCopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}
  */
  readonly copyIfMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}
  */
  readonly copyIfModifiedSince?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}
  */
  readonly copyIfNoneMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}
  */
  readonly copyIfUnmodifiedSince?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#id S3ObjectCopy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#key S3ObjectCopy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}
  */
  readonly metadataDirective?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}
  */
  readonly objectLockMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}
  */
  readonly objectLockRetainUntilDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#source S3ObjectCopy#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}
  */
  readonly taggingDirective?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy lyvecloud_s3_object_copy}
*/
export class S3ObjectCopy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lyvecloud_s3_object_copy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ObjectCopy to import
  * @param importFromId The id of the existing S3ObjectCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ObjectCopy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lyvecloud_s3_object_copy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/s3_object_copy lyvecloud_s3_object_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ObjectCopyConfig
  */
  public constructor(scope: Construct, id: string, config: S3ObjectCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'lyvecloud_s3_object_copy',
      terraformGeneratorMetadata: {
        providerName: 'lyvecloud',
        providerVersion: '0.2.2'
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
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._key = config.key;
    this._metadata = config.metadata;
    this._metadataDirective = config.metadataDirective;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._source = config.source;
    this._taggingDirective = config.taggingDirective;
    this._tags = config.tags;
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

  // cache_control - computed: true, optional: true, required: false
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

  // content_disposition - computed: true, optional: true, required: false
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

  // content_encoding - computed: true, optional: true, required: false
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

  // content_language - computed: true, optional: true, required: false
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

  // force_destroy - computed: false, optional: true, required: false
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata - computed: true, optional: true, required: false
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

  // object_lock_mode - computed: true, optional: true, required: false
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

  // object_lock_retain_until_date - computed: true, optional: true, required: false
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

  // source_version_id - computed: true, optional: false, required: false
  public get sourceVersionId() {
    return this.getStringAttribute('source_version_id');
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

  // tags - computed: true, optional: true, required: false
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
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      metadata_directive: cdktf.stringToTerraform(this._metadataDirective),
      object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
      object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
      source: cdktf.stringToTerraform(this._source),
      tagging_directive: cdktf.stringToTerraform(this._taggingDirective),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
