// https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Behavior type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#behavior Behavior#behavior}
  */
  readonly behavior: string;
  /**
  * Description for this behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#description Behavior#description}
  */
  readonly description?: string;
  /**
  * If true, the parent folder's behavior will be disabled for this folder and its children.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#disable_parent_folder_behavior Behavior#disable_parent_folder_behavior}
  */
  readonly disableParentFolderBehavior?: boolean | cdktf.IResolvable;
  /**
  * Name for this behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#name Behavior#name}
  */
  readonly name?: string;
  /**
  * Folder path.  Note that Behavior paths cannot be updated once initially set.  You will need to remove and re-create the behavior on the new path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#path Behavior#path}
  */
  readonly path: string;
  /**
  * Is behavior recursive?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#recursive Behavior#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Settings for this behavior.  See the section above for an example value to provide here.  Formatting is different for each Behavior type.  May be sent as nested JSON or a single JSON-encoded string.  If using XML encoding for the API call, this data must be sent as a JSON-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#value Behavior#value}
  */
  readonly value?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior files_behavior}
*/
export class Behavior extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_behavior";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Behavior resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Behavior to import
  * @param importFromId The id of the existing Behavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Behavior to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_behavior", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/behavior files_behavior} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: BehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'files_behavior',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.392',
        providerVersionConstraint: '0.1.392'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._behavior = config.behavior;
    this._description = config.description;
    this._disableParentFolderBehavior = config.disableParentFolderBehavior;
    this._name = config.name;
    this._path = config.path;
    this._recursive = config.recursive;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_url - computed: true, optional: false, required: false
  public get attachmentUrl() {
    return this.getStringAttribute('attachment_url');
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // description - computed: true, optional: true, required: false
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

  // disable_parent_folder_behavior - computed: true, optional: true, required: false
  private _disableParentFolderBehavior?: boolean | cdktf.IResolvable; 
  public get disableParentFolderBehavior() {
    return this.getBooleanAttribute('disable_parent_folder_behavior');
  }
  public set disableParentFolderBehavior(value: boolean | cdktf.IResolvable) {
    this._disableParentFolderBehavior = value;
  }
  public resetDisableParentFolderBehavior() {
    this._disableParentFolderBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableParentFolderBehaviorInput() {
    return this._disableParentFolderBehavior;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // recursive - computed: true, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // value - computed: true, optional: true, required: false
  private _value?: { [key: string]: any }; 
  public get value() {
    return this.getAnyMapAttribute('value');
  }
  public set value(value: { [key: string]: any }) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      behavior: cdktf.stringToTerraform(this._behavior),
      description: cdktf.stringToTerraform(this._description),
      disable_parent_folder_behavior: cdktf.booleanToTerraform(this._disableParentFolderBehavior),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      recursive: cdktf.booleanToTerraform(this._recursive),
      value: cdktf.hashMapper(cdktf.anyToTerraform)(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behavior: {
        value: cdktf.stringToHclTerraform(this._behavior),
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
      disable_parent_folder_behavior: {
        value: cdktf.booleanToHclTerraform(this._disableParentFolderBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      recursive: {
        value: cdktf.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._value),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
