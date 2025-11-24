// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The to be stored in the file. Use <code>source</code> to upload files from the local disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file#content StorageFile#content}
  */
  readonly content?: string;
  /**
  * Specifies the content type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file#content_type StorageFile#content_type}
  */
  readonly contentType?: string;
  /**
  * The path of the file within the storage zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file#path StorageFile#path}
  */
  readonly path: string;
  /**
  * The path in the local disk for the file to be uploaded to the storage zone. Use <code>content</code> to define the content directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file#source StorageFile#source}
  */
  readonly source?: string;
  /**
  * The ID of the storage zone where the file is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file#zone StorageFile#zone}
  */
  readonly zone: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file bunnynet_storage_file}
*/
export class StorageFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_storage_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageFile to import
  * @param importFromId The id of the existing StorageFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_storage_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/storage_file bunnynet_storage_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageFileConfig
  */
  public constructor(scope: Construct, id: string, config: StorageFileConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_storage_file',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._contentType = config.contentType;
    this._path = config.path;
    this._source = config.source;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
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

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
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

  // zone - computed: false, optional: false, required: true
  private _zone?: number; 
  public get zone() {
    return this.getNumberAttribute('zone');
  }
  public set zone(value: number) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      content_type: cdktf.stringToTerraform(this._contentType),
      path: cdktf.stringToTerraform(this._path),
      source: cdktf.stringToTerraform(this._source),
      zone: cdktf.numberToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      zone: {
        value: cdktf.numberToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
