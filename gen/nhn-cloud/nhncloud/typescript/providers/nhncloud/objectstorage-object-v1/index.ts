// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectstorageObjectV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#container_name ObjectstorageObjectV1#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#content ObjectstorageObjectV1#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#content_disposition ObjectstorageObjectV1#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#content_encoding ObjectstorageObjectV1#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#content_type ObjectstorageObjectV1#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#copy_from ObjectstorageObjectV1#copy_from}
  */
  readonly copyFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#delete_after ObjectstorageObjectV1#delete_after}
  */
  readonly deleteAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#delete_at ObjectstorageObjectV1#delete_at}
  */
  readonly deleteAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#detect_content_type ObjectstorageObjectV1#detect_content_type}
  */
  readonly detectContentType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#etag ObjectstorageObjectV1#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#id ObjectstorageObjectV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#metadata ObjectstorageObjectV1#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#name ObjectstorageObjectV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#object_manifest ObjectstorageObjectV1#object_manifest}
  */
  readonly objectManifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#region ObjectstorageObjectV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#source ObjectstorageObjectV1#source}
  */
  readonly source?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1 nhncloud_objectstorage_object_v1}
*/
export class ObjectstorageObjectV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_objectstorage_object_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectstorageObjectV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectstorageObjectV1 to import
  * @param importFromId The id of the existing ObjectstorageObjectV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectstorageObjectV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_objectstorage_object_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/objectstorage_object_v1 nhncloud_objectstorage_object_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectstorageObjectV1Config
  */
  public constructor(scope: Construct, id: string, config: ObjectstorageObjectV1Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_objectstorage_object_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerName = config.containerName;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentType = config.contentType;
    this._copyFrom = config.copyFrom;
    this._deleteAfter = config.deleteAfter;
    this._deleteAt = config.deleteAt;
    this._detectContentType = config.detectContentType;
    this._etag = config.etag;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._objectManifest = config.objectManifest;
    this._region = config.region;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // content_length - computed: true, optional: false, required: false
  public get contentLength() {
    return this.getNumberAttribute('content_length');
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

  // copy_from - computed: false, optional: true, required: false
  private _copyFrom?: string; 
  public get copyFrom() {
    return this.getStringAttribute('copy_from');
  }
  public set copyFrom(value: string) {
    this._copyFrom = value;
  }
  public resetCopyFrom() {
    this._copyFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromInput() {
    return this._copyFrom;
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // delete_after - computed: false, optional: true, required: false
  private _deleteAfter?: number; 
  public get deleteAfter() {
    return this.getNumberAttribute('delete_after');
  }
  public set deleteAfter(value: number) {
    this._deleteAfter = value;
  }
  public resetDeleteAfter() {
    this._deleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInput() {
    return this._deleteAfter;
  }

  // delete_at - computed: true, optional: true, required: false
  private _deleteAt?: string; 
  public get deleteAt() {
    return this.getStringAttribute('delete_at');
  }
  public set deleteAt(value: string) {
    this._deleteAt = value;
  }
  public resetDeleteAt() {
    this._deleteAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAtInput() {
    return this._deleteAt;
  }

  // detect_content_type - computed: false, optional: true, required: false
  private _detectContentType?: boolean | cdktf.IResolvable; 
  public get detectContentType() {
    return this.getBooleanAttribute('detect_content_type');
  }
  public set detectContentType(value: boolean | cdktf.IResolvable) {
    this._detectContentType = value;
  }
  public resetDetectContentType() {
    this._detectContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectContentTypeInput() {
    return this._detectContentType;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_manifest - computed: true, optional: true, required: false
  private _objectManifest?: string; 
  public get objectManifest() {
    return this.getStringAttribute('object_manifest');
  }
  public set objectManifest(value: string) {
    this._objectManifest = value;
  }
  public resetObjectManifest() {
    this._objectManifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectManifestInput() {
    return this._objectManifest;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // trans_id - computed: true, optional: false, required: false
  public get transId() {
    return this.getStringAttribute('trans_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_name: cdktf.stringToTerraform(this._containerName),
      content: cdktf.stringToTerraform(this._content),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_type: cdktf.stringToTerraform(this._contentType),
      copy_from: cdktf.stringToTerraform(this._copyFrom),
      delete_after: cdktf.numberToTerraform(this._deleteAfter),
      delete_at: cdktf.stringToTerraform(this._deleteAt),
      detect_content_type: cdktf.booleanToTerraform(this._detectContentType),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      object_manifest: cdktf.stringToTerraform(this._objectManifest),
      region: cdktf.stringToTerraform(this._region),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_name: {
        value: cdktf.stringToHclTerraform(this._containerName),
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
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_from: {
        value: cdktf.stringToHclTerraform(this._copyFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_after: {
        value: cdktf.numberToHclTerraform(this._deleteAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_at: {
        value: cdktf.stringToHclTerraform(this._deleteAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_content_type: {
        value: cdktf.booleanToHclTerraform(this._detectContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_manifest: {
        value: cdktf.stringToHclTerraform(this._objectManifest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
