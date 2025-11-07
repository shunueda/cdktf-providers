// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the admin folder. Admin Folder name should be unique within the same parent folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_folder#name AdminFolder#name}
  */
  readonly name: string;
  /**
  * Path of the parent admin folder. Please note that the parent path should not end with a `\`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_folder#parent_path AdminFolder#parent_path}
  */
  readonly parentPath?: string;
  /**
  * Set of types of the admin folder. Available values are `ContainsApplications`, `ContainsMachineCatalogs`, `ContainsDeliveryGroups`, and `ContainsApplicationGroups`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_folder#type AdminFolder#type}
  */
  readonly type: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_folder citrix_admin_folder}
*/
export class AdminFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_admin_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminFolder to import
  * @param importFromId The id of the existing AdminFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_admin_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_folder citrix_admin_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminFolderConfig
  */
  public constructor(scope: Construct, id: string, config: AdminFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_admin_folder',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parentPath = config.parentPath;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parent_path - computed: false, optional: true, required: false
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  public resetParentPath() {
    this._parentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // total_application_groups - computed: true, optional: false, required: false
  public get totalApplicationGroups() {
    return this.getNumberAttribute('total_application_groups');
  }

  // total_applications - computed: true, optional: false, required: false
  public get totalApplications() {
    return this.getNumberAttribute('total_applications');
  }

  // total_delivery_groups - computed: true, optional: false, required: false
  public get totalDeliveryGroups() {
    return this.getNumberAttribute('total_delivery_groups');
  }

  // total_machine_catalogs - computed: true, optional: false, required: false
  public get totalMachineCatalogs() {
    return this.getNumberAttribute('total_machine_catalogs');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string[]; 
  public get type() {
    return cdktf.Fn.tolist(this.getListAttribute('type'));
  }
  public set type(value: string[]) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parent_path: cdktf.stringToTerraform(this._parentPath),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_path: {
        value: cdktf.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
