// https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#base_dir EdgeConfigurations#base_dir}
  */
  readonly baseDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#category EdgeConfigurations#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#edge_group_ids EdgeConfigurations#edge_group_ids}
  */
  readonly edgeGroupIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#file_path EdgeConfigurations#file_path}
  */
  readonly filePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#id EdgeConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#name EdgeConfigurations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#type EdgeConfigurations#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations portainer_edge_configurations}
*/
export class EdgeConfigurations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_edge_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeConfigurations to import
  * @param importFromId The id of the existing EdgeConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_edge_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/edge_configurations portainer_edge_configurations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_edge_configurations',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.1',
        providerVersionConstraint: '1.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDir = config.baseDir;
    this._category = config.category;
    this._edgeGroupIds = config.edgeGroupIds;
    this._filePath = config.filePath;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dir - computed: false, optional: true, required: false
  private _baseDir?: string; 
  public get baseDir() {
    return this.getStringAttribute('base_dir');
  }
  public set baseDir(value: string) {
    this._baseDir = value;
  }
  public resetBaseDir() {
    this._baseDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDirInput() {
    return this._baseDir;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // edge_group_ids - computed: false, optional: false, required: true
  private _edgeGroupIds?: number[]; 
  public get edgeGroupIds() {
    return this.getNumberListAttribute('edge_group_ids');
  }
  public set edgeGroupIds(value: number[]) {
    this._edgeGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGroupIdsInput() {
    return this._edgeGroupIds;
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
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
      base_dir: cdktf.stringToTerraform(this._baseDir),
      category: cdktf.stringToTerraform(this._category),
      edge_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._edgeGroupIds),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_dir: {
        value: cdktf.stringToHclTerraform(this._baseDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._edgeGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
