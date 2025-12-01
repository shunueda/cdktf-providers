// https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#bucket_name S3Object#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Content of the object as a string. Use only one of content, content_base64, or source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#content S3Object#content}
  */
  readonly content?: string;
  /**
  * Base64-encoded content of the object. Use only one of content, content_base64, or source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#content_base64 S3Object#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Content type of the object, in the form of a MIME type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#content_type S3Object#content_type}
  */
  readonly contentType?: string;
  /**
  * ETag of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#etag S3Object#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#id S3Object#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#object_name S3Object#object_name}
  */
  readonly objectName: string;
  /**
  * Path to the file that will be uploaded. Use only one of content, content_base64, or source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#source S3Object#source}
  */
  readonly source?: string;
  /**
  * Version ID of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#version_id S3Object#version_id}
  */
  readonly versionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object minio_s3_object}
*/
export class S3Object extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_s3_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Object to import
  * @param importFromId The id of the existing S3Object that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Object to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_s3_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.11.5/docs/resources/s3_object minio_s3_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ObjectConfig
  */
  public constructor(scope: Construct, id: string, config: S3ObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_s3_object',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '3.11.5',
        providerVersionConstraint: '3.11.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._content = config.content;
    this._contentBase64 = config.contentBase64;
    this._contentType = config.contentType;
    this._etag = config.etag;
    this._id = config.id;
    this._objectName = config.objectName;
    this._source = config.source;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
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
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      content: cdktf.stringToTerraform(this._content),
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      content_type: cdktf.stringToTerraform(this._contentType),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      object_name: cdktf.stringToTerraform(this._objectName),
      source: cdktf.stringToTerraform(this._source),
      version_id: cdktf.stringToTerraform(this._versionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
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
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
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
