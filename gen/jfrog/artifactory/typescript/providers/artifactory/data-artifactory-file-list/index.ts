// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryFileListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Get deep listing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#deep_listing DataArtifactoryFileList#deep_listing}
  */
  readonly deepListing?: boolean | cdktf.IResolvable;
  /**
  * Depth of the deep listing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#depth DataArtifactoryFileList#depth}
  */
  readonly depth?: number;
  /**
  * Path of the folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#folder_path DataArtifactoryFileList#folder_path}
  */
  readonly folderPath: string;
  /**
  * Include root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#include_root_path DataArtifactoryFileList#include_root_path}
  */
  readonly includeRootPath?: boolean | cdktf.IResolvable;
  /**
  * Include folders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#list_folders DataArtifactoryFileList#list_folders}
  */
  readonly listFolders?: boolean | cdktf.IResolvable;
  /**
  * Include metadata timestamps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#metadata_timestamps DataArtifactoryFileList#metadata_timestamps}
  */
  readonly metadataTimestamps?: boolean | cdktf.IResolvable;
  /**
  * Repository key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#repository_key DataArtifactoryFileList#repository_key}
  */
  readonly repositoryKey: string;
}
export interface DataArtifactoryFileListFilesMetadataTimestamps {
}

export function dataArtifactoryFileListFilesMetadataTimestampsToTerraform(struct?: DataArtifactoryFileListFilesMetadataTimestamps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataArtifactoryFileListFilesMetadataTimestampsToHclTerraform(struct?: DataArtifactoryFileListFilesMetadataTimestamps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataArtifactoryFileListFilesMetadataTimestampsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataArtifactoryFileListFilesMetadataTimestamps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataArtifactoryFileListFilesMetadataTimestamps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }
}
export interface DataArtifactoryFileListFiles {
}

export function dataArtifactoryFileListFilesToTerraform(struct?: DataArtifactoryFileListFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataArtifactoryFileListFilesToHclTerraform(struct?: DataArtifactoryFileListFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataArtifactoryFileListFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryFileListFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataArtifactoryFileListFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getBooleanAttribute('folder');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata_timestamps - computed: true, optional: false, required: false
  private _metadataTimestamps = new DataArtifactoryFileListFilesMetadataTimestampsOutputReference(this, "metadata_timestamps");
  public get metadataTimestamps() {
    return this._metadataTimestamps;
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // sha2 - computed: true, optional: false, required: false
  public get sha2() {
    return this.getStringAttribute('sha2');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataArtifactoryFileListFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataArtifactoryFileListFilesOutputReference {
    return new DataArtifactoryFileListFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list artifactory_file_list}
*/
export class DataArtifactoryFileList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_file_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryFileList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryFileList to import
  * @param importFromId The id of the existing DataArtifactoryFileList that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryFileList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_file_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/file_list artifactory_file_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryFileListConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryFileListConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_file_list',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1',
        providerVersionConstraint: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deepListing = config.deepListing;
    this._depth = config.depth;
    this._folderPath = config.folderPath;
    this._includeRootPath = config.includeRootPath;
    this._listFolders = config.listFolders;
    this._metadataTimestamps = config.metadataTimestamps;
    this._repositoryKey = config.repositoryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // deep_listing - computed: false, optional: true, required: false
  private _deepListing?: boolean | cdktf.IResolvable; 
  public get deepListing() {
    return this.getBooleanAttribute('deep_listing');
  }
  public set deepListing(value: boolean | cdktf.IResolvable) {
    this._deepListing = value;
  }
  public resetDeepListing() {
    this._deepListing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepListingInput() {
    return this._deepListing;
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // files - computed: true, optional: false, required: false
  private _files = new DataArtifactoryFileListFilesList(this, "files", false);
  public get files() {
    return this._files;
  }

  // folder_path - computed: false, optional: false, required: true
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
  }

  // include_root_path - computed: false, optional: true, required: false
  private _includeRootPath?: boolean | cdktf.IResolvable; 
  public get includeRootPath() {
    return this.getBooleanAttribute('include_root_path');
  }
  public set includeRootPath(value: boolean | cdktf.IResolvable) {
    this._includeRootPath = value;
  }
  public resetIncludeRootPath() {
    this._includeRootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRootPathInput() {
    return this._includeRootPath;
  }

  // list_folders - computed: false, optional: true, required: false
  private _listFolders?: boolean | cdktf.IResolvable; 
  public get listFolders() {
    return this.getBooleanAttribute('list_folders');
  }
  public set listFolders(value: boolean | cdktf.IResolvable) {
    this._listFolders = value;
  }
  public resetListFolders() {
    this._listFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listFoldersInput() {
    return this._listFolders;
  }

  // metadata_timestamps - computed: false, optional: true, required: false
  private _metadataTimestamps?: boolean | cdktf.IResolvable; 
  public get metadataTimestamps() {
    return this.getBooleanAttribute('metadata_timestamps');
  }
  public set metadataTimestamps(value: boolean | cdktf.IResolvable) {
    this._metadataTimestamps = value;
  }
  public resetMetadataTimestamps() {
    this._metadataTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataTimestampsInput() {
    return this._metadataTimestamps;
  }

  // repository_key - computed: false, optional: false, required: true
  private _repositoryKey?: string; 
  public get repositoryKey() {
    return this.getStringAttribute('repository_key');
  }
  public set repositoryKey(value: string) {
    this._repositoryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryKeyInput() {
    return this._repositoryKey;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deep_listing: cdktf.booleanToTerraform(this._deepListing),
      depth: cdktf.numberToTerraform(this._depth),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      include_root_path: cdktf.booleanToTerraform(this._includeRootPath),
      list_folders: cdktf.booleanToTerraform(this._listFolders),
      metadata_timestamps: cdktf.booleanToTerraform(this._metadataTimestamps),
      repository_key: cdktf.stringToTerraform(this._repositoryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deep_listing: {
        value: cdktf.booleanToHclTerraform(this._deepListing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      depth: {
        value: cdktf.numberToHclTerraform(this._depth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      folder_path: {
        value: cdktf.stringToHclTerraform(this._folderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_root_path: {
        value: cdktf.booleanToHclTerraform(this._includeRootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      list_folders: {
        value: cdktf.booleanToHclTerraform(this._listFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata_timestamps: {
        value: cdktf.booleanToHclTerraform(this._metadataTimestamps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_key: {
        value: cdktf.stringToHclTerraform(this._repositoryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
