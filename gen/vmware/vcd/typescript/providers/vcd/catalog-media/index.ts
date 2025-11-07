// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogMediaConfig extends cdktf.TerraformMetaArguments {
  /**
  * catalog name where to upload the Media file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#catalog CatalogMedia#catalog}
  */
  readonly catalog?: string;
  /**
  * ID of the catalog where to upload the Media file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#catalog_id CatalogMedia#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#description CatalogMedia#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#id CatalogMedia#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * absolute or relative path to Media file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#media_path CatalogMedia#media_path}
  */
  readonly mediaPath?: string;
  /**
  * Key and value pairs for catalog item metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#metadata CatalogMedia#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * media name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#name CatalogMedia#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#org CatalogMedia#org}
  */
  readonly org?: string;
  /**
  * shows upload progress in stdout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#show_upload_progress CatalogMedia#show_upload_progress}
  */
  readonly showUploadProgress?: boolean | cdktf.IResolvable;
  /**
  * If true, will allow uploading any file type, not only .ISO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#upload_any_file CatalogMedia#upload_any_file}
  */
  readonly uploadAnyFile?: boolean | cdktf.IResolvable;
  /**
  * size of upload file piece size in mega bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#upload_piece_size CatalogMedia#upload_piece_size}
  */
  readonly uploadPieceSize?: number;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#metadata_entry CatalogMedia#metadata_entry}
  */
  readonly metadataEntry?: CatalogMediaMetadataEntry[] | cdktf.IResolvable;
}
export interface CatalogMediaMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#is_system CatalogMedia#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#key CatalogMedia#key}
  */
  readonly key?: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#type CatalogMedia#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#user_access CatalogMedia#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#value CatalogMedia#value}
  */
  readonly value?: string;
}

export function catalogMediaMetadataEntryToTerraform(struct?: CatalogMediaMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function catalogMediaMetadataEntryToHclTerraform(struct?: CatalogMediaMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogMediaMetadataEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CatalogMediaMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogMediaMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CatalogMediaMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : CatalogMediaMetadataEntry[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CatalogMediaMetadataEntryOutputReference {
    return new CatalogMediaMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media vcd_catalog_media}
*/
export class CatalogMedia extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_catalog_media";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogMedia resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogMedia to import
  * @param importFromId The id of the existing CatalogMedia that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogMedia to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_catalog_media", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_media vcd_catalog_media} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogMediaConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogMediaConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_catalog_media',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalog = config.catalog;
    this._catalogId = config.catalogId;
    this._description = config.description;
    this._id = config.id;
    this._mediaPath = config.mediaPath;
    this._metadata = config.metadata;
    this._name = config.name;
    this._org = config.org;
    this._showUploadProgress = config.showUploadProgress;
    this._uploadAnyFile = config.uploadAnyFile;
    this._uploadPieceSize = config.uploadPieceSize;
    this._metadataEntry.internalValue = config.metadataEntry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // catalog_item_id - computed: true, optional: false, required: false
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
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

  // is_iso - computed: true, optional: false, required: false
  public get isIso() {
    return this.getBooleanAttribute('is_iso');
  }

  // is_published - computed: true, optional: false, required: false
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }

  // media_path - computed: false, optional: true, required: false
  private _mediaPath?: string; 
  public get mediaPath() {
    return this.getStringAttribute('media_path');
  }
  public set mediaPath(value: string) {
    this._mediaPath = value;
  }
  public resetMediaPath() {
    this._mediaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaPathInput() {
    return this._mediaPath;
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

  // org - computed: true, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // owner_name - computed: true, optional: false, required: false
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }

  // show_upload_progress - computed: false, optional: true, required: false
  private _showUploadProgress?: boolean | cdktf.IResolvable; 
  public get showUploadProgress() {
    return this.getBooleanAttribute('show_upload_progress');
  }
  public set showUploadProgress(value: boolean | cdktf.IResolvable) {
    this._showUploadProgress = value;
  }
  public resetShowUploadProgress() {
    this._showUploadProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUploadProgressInput() {
    return this._showUploadProgress;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_profile_name - computed: true, optional: false, required: false
  public get storageProfileName() {
    return this.getStringAttribute('storage_profile_name');
  }

  // upload_any_file - computed: false, optional: true, required: false
  private _uploadAnyFile?: boolean | cdktf.IResolvable; 
  public get uploadAnyFile() {
    return this.getBooleanAttribute('upload_any_file');
  }
  public set uploadAnyFile(value: boolean | cdktf.IResolvable) {
    this._uploadAnyFile = value;
  }
  public resetUploadAnyFile() {
    this._uploadAnyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadAnyFileInput() {
    return this._uploadAnyFile;
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

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new CatalogMediaMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: CatalogMediaMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog: cdktf.stringToTerraform(this._catalog),
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      media_path: cdktf.stringToTerraform(this._mediaPath),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      show_upload_progress: cdktf.booleanToTerraform(this._showUploadProgress),
      upload_any_file: cdktf.booleanToTerraform(this._uploadAnyFile),
      upload_piece_size: cdktf.numberToTerraform(this._uploadPieceSize),
      metadata_entry: cdktf.listMapper(catalogMediaMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_path: {
        value: cdktf.stringToHclTerraform(this._mediaPath),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_upload_progress: {
        value: cdktf.booleanToHclTerraform(this._showUploadProgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_any_file: {
        value: cdktf.booleanToHclTerraform(this._uploadAnyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_piece_size: {
        value: cdktf.numberToHclTerraform(this._uploadPieceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(catalogMediaMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CatalogMediaMetadataEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
