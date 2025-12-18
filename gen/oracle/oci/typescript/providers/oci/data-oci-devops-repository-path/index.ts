// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsRepositoryPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path#display_name DataOciDevopsRepositoryPath#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path#folder_path DataOciDevopsRepositoryPath#folder_path}
  */
  readonly folderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path#id DataOciDevopsRepositoryPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path#paths_in_subtree DataOciDevopsRepositoryPath#paths_in_subtree}
  */
  readonly pathsInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path#ref DataOciDevopsRepositoryPath#ref}
  */
  readonly ref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path#repository_id DataOciDevopsRepositoryPath#repository_id}
  */
  readonly repositoryId: string;
}
export interface DataOciDevopsRepositoryPathItems {
}

export function dataOciDevopsRepositoryPathItemsToTerraform(struct?: DataOciDevopsRepositoryPathItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryPathItemsToHclTerraform(struct?: DataOciDevopsRepositoryPathItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryPathItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryPathItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryPathItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sha - computed: true, optional: false, required: false
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // submodule_git_url - computed: true, optional: false, required: false
  public get submoduleGitUrl() {
    return this.getStringAttribute('submodule_git_url');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDevopsRepositoryPathItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryPathItemsOutputReference {
    return new DataOciDevopsRepositoryPathItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path oci_devops_repository_path}
*/
export class DataOciDevopsRepositoryPath extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_repository_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDevopsRepositoryPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDevopsRepositoryPath to import
  * @param importFromId The id of the existing DataOciDevopsRepositoryPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDevopsRepositoryPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_repository_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_repository_path oci_devops_repository_path} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsRepositoryPathConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsRepositoryPathConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_repository_path',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._folderPath = config.folderPath;
    this._id = config.id;
    this._pathsInSubtree = config.pathsInSubtree;
    this._ref = config.ref;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // folder_path - computed: false, optional: true, required: false
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  public resetFolderPath() {
    this._folderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsRepositoryPathItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // paths_in_subtree - computed: false, optional: true, required: false
  private _pathsInSubtree?: boolean | cdktf.IResolvable; 
  public get pathsInSubtree() {
    return this.getBooleanAttribute('paths_in_subtree');
  }
  public set pathsInSubtree(value: boolean | cdktf.IResolvable) {
    this._pathsInSubtree = value;
  }
  public resetPathsInSubtree() {
    this._pathsInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInSubtreeInput() {
    return this._pathsInSubtree;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      id: cdktf.stringToTerraform(this._id),
      paths_in_subtree: cdktf.booleanToTerraform(this._pathsInSubtree),
      ref: cdktf.stringToTerraform(this._ref),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_path: {
        value: cdktf.stringToHclTerraform(this._folderPath),
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
      paths_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._pathsInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
