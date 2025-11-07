// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciObjectstorageObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}
  */
  readonly base64EncodeContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}
  */
  readonly contentLengthLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}
  */
  readonly httpResponseCacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}
  */
  readonly httpResponseContentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}
  */
  readonly httpResponseContentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}
  */
  readonly httpResponseContentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}
  */
  readonly httpResponseContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}
  */
  readonly httpResponseExpires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}
  */
  readonly versionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object oci_objectstorage_object}
*/
export class DataOciObjectstorageObject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_objectstorage_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciObjectstorageObject to import
  * @param importFromId The id of the existing DataOciObjectstorageObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciObjectstorageObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_objectstorage_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/objectstorage_object oci_objectstorage_object} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciObjectstorageObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciObjectstorageObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64EncodeContent = config.base64EncodeContent;
    this._bucket = config.bucket;
    this._contentLengthLimit = config.contentLengthLimit;
    this._httpResponseCacheControl = config.httpResponseCacheControl;
    this._httpResponseContentDisposition = config.httpResponseContentDisposition;
    this._httpResponseContentEncoding = config.httpResponseContentEncoding;
    this._httpResponseContentLanguage = config.httpResponseContentLanguage;
    this._httpResponseContentType = config.httpResponseContentType;
    this._httpResponseExpires = config.httpResponseExpires;
    this._id = config.id;
    this._namespace = config.namespace;
    this._object = config.object;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean | cdktf.IResolvable; 
  public get base64EncodeContent() {
    return this.getBooleanAttribute('base64_encode_content');
  }
  public set base64EncodeContent(value: boolean | cdktf.IResolvable) {
    this._base64EncodeContent = value;
  }
  public resetBase64EncodeContent() {
    this._base64EncodeContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeContentInput() {
    return this._base64EncodeContent;
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

  // cache_control - computed: true, optional: false, required: false
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_disposition - computed: true, optional: false, required: false
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: false
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_language - computed: true, optional: false, required: false
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }

  // content_length - computed: true, optional: false, required: false
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }

  // content_length_limit - computed: false, optional: true, required: false
  private _contentLengthLimit?: number; 
  public get contentLengthLimit() {
    return this.getNumberAttribute('content_length_limit');
  }
  public set contentLengthLimit(value: number) {
    this._contentLengthLimit = value;
  }
  public resetContentLengthLimit() {
    this._contentLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthLimitInput() {
    return this._contentLengthLimit;
  }

  // content_md5 - computed: true, optional: false, required: false
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // http_response_cache_control - computed: false, optional: true, required: false
  private _httpResponseCacheControl?: string; 
  public get httpResponseCacheControl() {
    return this.getStringAttribute('http_response_cache_control');
  }
  public set httpResponseCacheControl(value: string) {
    this._httpResponseCacheControl = value;
  }
  public resetHttpResponseCacheControl() {
    this._httpResponseCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCacheControlInput() {
    return this._httpResponseCacheControl;
  }

  // http_response_content_disposition - computed: false, optional: true, required: false
  private _httpResponseContentDisposition?: string; 
  public get httpResponseContentDisposition() {
    return this.getStringAttribute('http_response_content_disposition');
  }
  public set httpResponseContentDisposition(value: string) {
    this._httpResponseContentDisposition = value;
  }
  public resetHttpResponseContentDisposition() {
    this._httpResponseContentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseContentDispositionInput() {
    return this._httpResponseContentDisposition;
  }

  // http_response_content_encoding - computed: false, optional: true, required: false
  private _httpResponseContentEncoding?: string; 
  public get httpResponseContentEncoding() {
    return this.getStringAttribute('http_response_content_encoding');
  }
  public set httpResponseContentEncoding(value: string) {
    this._httpResponseContentEncoding = value;
  }
  public resetHttpResponseContentEncoding() {
    this._httpResponseContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseContentEncodingInput() {
    return this._httpResponseContentEncoding;
  }

  // http_response_content_language - computed: false, optional: true, required: false
  private _httpResponseContentLanguage?: string; 
  public get httpResponseContentLanguage() {
    return this.getStringAttribute('http_response_content_language');
  }
  public set httpResponseContentLanguage(value: string) {
    this._httpResponseContentLanguage = value;
  }
  public resetHttpResponseContentLanguage() {
    this._httpResponseContentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseContentLanguageInput() {
    return this._httpResponseContentLanguage;
  }

  // http_response_content_type - computed: false, optional: true, required: false
  private _httpResponseContentType?: string; 
  public get httpResponseContentType() {
    return this.getStringAttribute('http_response_content_type');
  }
  public set httpResponseContentType(value: string) {
    this._httpResponseContentType = value;
  }
  public resetHttpResponseContentType() {
    this._httpResponseContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseContentTypeInput() {
    return this._httpResponseContentType;
  }

  // http_response_expires - computed: false, optional: true, required: false
  private _httpResponseExpires?: string; 
  public get httpResponseExpires() {
    return this.getStringAttribute('http_response_expires');
  }
  public set httpResponseExpires(value: string) {
    this._httpResponseExpires = value;
  }
  public resetHttpResponseExpires() {
    this._httpResponseExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseExpiresInput() {
    return this._httpResponseExpires;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // storage_tier - computed: true, optional: false, required: false
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: cdktf.booleanToTerraform(this._base64EncodeContent),
      bucket: cdktf.stringToTerraform(this._bucket),
      content_length_limit: cdktf.numberToTerraform(this._contentLengthLimit),
      http_response_cache_control: cdktf.stringToTerraform(this._httpResponseCacheControl),
      http_response_content_disposition: cdktf.stringToTerraform(this._httpResponseContentDisposition),
      http_response_content_encoding: cdktf.stringToTerraform(this._httpResponseContentEncoding),
      http_response_content_language: cdktf.stringToTerraform(this._httpResponseContentLanguage),
      http_response_content_type: cdktf.stringToTerraform(this._httpResponseContentType),
      http_response_expires: cdktf.stringToTerraform(this._httpResponseExpires),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      object: cdktf.stringToTerraform(this._object),
      version_id: cdktf.stringToTerraform(this._versionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64_encode_content: {
        value: cdktf.booleanToHclTerraform(this._base64EncodeContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_length_limit: {
        value: cdktf.numberToHclTerraform(this._contentLengthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_response_cache_control: {
        value: cdktf.stringToHclTerraform(this._httpResponseCacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_content_disposition: {
        value: cdktf.stringToHclTerraform(this._httpResponseContentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_content_encoding: {
        value: cdktf.stringToHclTerraform(this._httpResponseContentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_content_language: {
        value: cdktf.stringToHclTerraform(this._httpResponseContentLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_content_type: {
        value: cdktf.stringToHclTerraform(this._httpResponseContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_expires: {
        value: cdktf.stringToHclTerraform(this._httpResponseExpires),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.stringToHclTerraform(this._object),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
