// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentLibraryItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Content Library that this Content Library Item belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item#content_library_id ContentLibraryItem#content_library_id}
  */
  readonly contentLibraryId: string;
  /**
  * The description of the Content Library Item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item#description ContentLibraryItem#description}
  */
  readonly description?: string;
  /**
  * A single path to an OVA/ISO, or multiple paths for an OVF and its referenced files, to create the Content Library Item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item#file_paths ContentLibraryItem#file_paths}
  */
  readonly filePaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item#id ContentLibraryItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Content Library Item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item#name ContentLibraryItem#name}
  */
  readonly name: string;
  /**
  * When uploading the Content Library Item, this argument defines the size of the file chunks in which it is split on every upload request. It can possibly impact upload performance. Default 1 MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item#upload_piece_size ContentLibraryItem#upload_piece_size}
  */
  readonly uploadPieceSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item vcfa_content_library_item}
*/
export class ContentLibraryItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_content_library_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContentLibraryItem to import
  * @param importFromId The id of the existing ContentLibraryItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContentLibraryItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_content_library_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library_item vcfa_content_library_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentLibraryItemConfig
  */
  public constructor(scope: Construct, id: string, config: ContentLibraryItemConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_content_library_item',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentLibraryId = config.contentLibraryId;
    this._description = config.description;
    this._filePaths = config.filePaths;
    this._id = config.id;
    this._name = config.name;
    this._uploadPieceSize = config.uploadPieceSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_library_id - computed: false, optional: false, required: true
  private _contentLibraryId?: string; 
  public get contentLibraryId() {
    return this.getStringAttribute('content_library_id');
  }
  public set contentLibraryId(value: string) {
    this._contentLibraryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLibraryIdInput() {
    return this._contentLibraryId;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // file_paths - computed: false, optional: true, required: false
  private _filePaths?: string[]; 
  public get filePaths() {
    return cdktf.Fn.tolist(this.getListAttribute('file_paths'));
  }
  public set filePaths(value: string[]) {
    this._filePaths = value;
  }
  public resetFilePaths() {
    this._filePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths;
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

  // image_identifier - computed: true, optional: false, required: false
  public get imageIdentifier() {
    return this.getStringAttribute('image_identifier');
  }

  // is_published - computed: true, optional: false, required: false
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }

  // is_subscribed - computed: true, optional: false, required: false
  public get isSubscribed() {
    return this.getBooleanAttribute('is_subscribed');
  }

  // item_type - computed: true, optional: false, required: false
  public get itemType() {
    return this.getStringAttribute('item_type');
  }

  // last_successful_sync - computed: true, optional: false, required: false
  public get lastSuccessfulSync() {
    return this.getStringAttribute('last_successful_sync');
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

  // owner_org_id - computed: true, optional: false, required: false
  public get ownerOrgId() {
    return this.getStringAttribute('owner_org_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // upload_piece_size - computed: false, optional: true, required: false
  private _uploadPieceSize?: number; 
  public get uploadPieceSize() {
    return this.getNumberAttribute('upload_piece_size');
  }
  public set uploadPieceSize(value: number) {
    this._uploadPieceSize = value;
  }
  public resetUploadPieceSize() {
    this._uploadPieceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPieceSizeInput() {
    return this._uploadPieceSize;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_library_id: cdktf.stringToTerraform(this._contentLibraryId),
      description: cdktf.stringToTerraform(this._description),
      file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filePaths),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      upload_piece_size: cdktf.numberToTerraform(this._uploadPieceSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_library_id: {
        value: cdktf.stringToHclTerraform(this._contentLibraryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filePaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_piece_size: {
        value: cdktf.numberToHclTerraform(this._uploadPieceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
