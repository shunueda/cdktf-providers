// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItemPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add this property to the selected folder and to all of artifacts and folders under this folder. Default to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties#is_recursive ItemProperties#is_recursive}
  */
  readonly isRecursive?: boolean | cdktf.IResolvable;
  /**
  * The relative path of the item (file/folder/repository). Leave unset for repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties#item_path ItemProperties#item_path}
  */
  readonly itemPath?: string;
  /**
  * Map of key and list of values.
  * 
  * ~>Keys are limited up to 255 characters and values are limited up to 2,400 characters. Using properties with values over this limit might cause backend issues.
  * 
  * ~>The following special characters are forbidden in the key field: `)(}{][*+^$/~``!@#%&<>;=,±§` and the space character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties#properties ItemProperties#properties}
  */
  readonly properties: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Respository key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties#repo_key ItemProperties#repo_key}
  */
  readonly repoKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties artifactory_item_properties}
*/
export class ItemProperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_item_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItemProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItemProperties to import
  * @param importFromId The id of the existing ItemProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItemProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_item_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/item_properties artifactory_item_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItemPropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: ItemPropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_item_properties',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isRecursive = config.isRecursive;
    this._itemPath = config.itemPath;
    this._properties = config.properties;
    this._repoKey = config.repoKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // is_recursive - computed: true, optional: true, required: false
  private _isRecursive?: boolean | cdktf.IResolvable; 
  public get isRecursive() {
    return this.getBooleanAttribute('is_recursive');
  }
  public set isRecursive(value: boolean | cdktf.IResolvable) {
    this._isRecursive = value;
  }
  public resetIsRecursive() {
    this._isRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecursiveInput() {
    return this._isRecursive;
  }

  // item_path - computed: false, optional: true, required: false
  private _itemPath?: string; 
  public get itemPath() {
    return this.getStringAttribute('item_path');
  }
  public set itemPath(value: string) {
    this._itemPath = value;
  }
  public resetItemPath() {
    this._itemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemPathInput() {
    return this._itemPath;
  }

  // properties - computed: false, optional: false, required: true
  private _properties?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get properties() {
    return this.interpolationForAttribute('properties');
  }
  public set properties(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // repo_key - computed: false, optional: false, required: true
  private _repoKey?: string; 
  public get repoKey() {
    return this.getStringAttribute('repo_key');
  }
  public set repoKey(value: string) {
    this._repoKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoKeyInput() {
    return this._repoKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_recursive: cdktf.booleanToTerraform(this._isRecursive),
      item_path: cdktf.stringToTerraform(this._itemPath),
      properties: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._properties),
      repo_key: cdktf.stringToTerraform(this._repoKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_recursive: {
        value: cdktf.booleanToHclTerraform(this._isRecursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      item_path: {
        value: cdktf.stringToHclTerraform(this._itemPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      repo_key: {
        value: cdktf.stringToHclTerraform(this._repoKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
