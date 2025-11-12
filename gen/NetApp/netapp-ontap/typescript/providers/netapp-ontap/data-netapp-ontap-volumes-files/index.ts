// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapVolumesFilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The file offset to start reading from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#byte_offset DataNetappOntapVolumesFiles#byte_offset}
  */
  readonly byteOffset?: number;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#cx_profile_name DataNetappOntapVolumesFiles#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * The name of the file or directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#name DataNetappOntapVolumesFiles#name}
  */
  readonly name?: string;
  /**
  * Whether the file can be overwritten
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#overwrite_enabled DataNetappOntapVolumesFiles#overwrite_enabled}
  */
  readonly overwriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Relative path of a file or directory in the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#path DataNetappOntapVolumesFiles#path}
  */
  readonly path: string;
  /**
  * svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#svm_name DataNetappOntapVolumesFiles#svm_name}
  */
  readonly svmName: string;
  /**
  * Volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#volume_name DataNetappOntapVolumesFiles#volume_name}
  */
  readonly volumeName: string;
}
export interface DataNetappOntapVolumesFilesStorageVolumesFiles {
}

export function dataNetappOntapVolumesFilesStorageVolumesFilesToTerraform(struct?: DataNetappOntapVolumesFilesStorageVolumesFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapVolumesFilesStorageVolumesFilesToHclTerraform(struct?: DataNetappOntapVolumesFilesStorageVolumesFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapVolumesFilesStorageVolumesFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNetappOntapVolumesFilesStorageVolumesFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapVolumesFilesStorageVolumesFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes_used - computed: true, optional: false, required: false
  public get bytesUsed() {
    return this.getNumberAttribute('bytes_used');
  }

  // cx_profile_name - computed: true, optional: false, required: false
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // hard_links_count - computed: true, optional: false, required: false
  public get hardLinksCount() {
    return this.getNumberAttribute('hard_links_count');
  }

  // inode_number - computed: true, optional: false, required: false
  public get inodeNumber() {
    return this.getNumberAttribute('inode_number');
  }

  // is_empty - computed: true, optional: false, required: false
  public get isEmpty() {
    return this.getBooleanAttribute('is_empty');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overwrite_enabled - computed: true, optional: false, required: false
  public get overwriteEnabled() {
    return this.getBooleanAttribute('overwrite_enabled');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getNumberAttribute('owner_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataNetappOntapVolumesFilesStorageVolumesFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapVolumesFilesStorageVolumesFilesOutputReference {
    return new DataNetappOntapVolumesFilesStorageVolumesFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files netapp-ontap_volumes_files}
*/
export class DataNetappOntapVolumesFiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_volumes_files";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapVolumesFiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapVolumesFiles to import
  * @param importFromId The id of the existing DataNetappOntapVolumesFiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapVolumesFiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_volumes_files", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volumes_files netapp-ontap_volumes_files} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapVolumesFilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapVolumesFilesConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_volumes_files',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._byteOffset = config.byteOffset;
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
    this._overwriteEnabled = config.overwriteEnabled;
    this._path = config.path;
    this._svmName = config.svmName;
    this._volumeName = config.volumeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // byte_offset - computed: false, optional: true, required: false
  private _byteOffset?: number; 
  public get byteOffset() {
    return this.getNumberAttribute('byte_offset');
  }
  public set byteOffset(value: number) {
    this._byteOffset = value;
  }
  public resetByteOffset() {
    this._byteOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteOffsetInput() {
    return this._byteOffset;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overwrite_enabled - computed: false, optional: true, required: false
  private _overwriteEnabled?: boolean | cdktf.IResolvable; 
  public get overwriteEnabled() {
    return this.getBooleanAttribute('overwrite_enabled');
  }
  public set overwriteEnabled(value: boolean | cdktf.IResolvable) {
    this._overwriteEnabled = value;
  }
  public resetOverwriteEnabled() {
    this._overwriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteEnabledInput() {
    return this._overwriteEnabled;
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

  // storage_volumes_files - computed: true, optional: false, required: false
  private _storageVolumesFiles = new DataNetappOntapVolumesFilesStorageVolumesFilesList(this, "storage_volumes_files", false);
  public get storageVolumesFiles() {
    return this._storageVolumesFiles;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byte_offset: cdktf.numberToTerraform(this._byteOffset),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
      overwrite_enabled: cdktf.booleanToTerraform(this._overwriteEnabled),
      path: cdktf.stringToTerraform(this._path),
      svm_name: cdktf.stringToTerraform(this._svmName),
      volume_name: cdktf.stringToTerraform(this._volumeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byte_offset: {
        value: cdktf.numberToHclTerraform(this._byteOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
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
      overwrite_enabled: {
        value: cdktf.booleanToHclTerraform(this._overwriteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_name: {
        value: cdktf.stringToHclTerraform(this._volumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
