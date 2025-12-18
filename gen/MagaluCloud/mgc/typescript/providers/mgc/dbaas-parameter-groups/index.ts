// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasParameterGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the parameters group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups#description DbaasParameterGroups#description}
  */
  readonly description?: string;
  /**
  * Type of database engine to use (e.g., 'mysql', 'postgresql'). Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups#engine_name DbaasParameterGroups#engine_name}
  */
  readonly engineName: string;
  /**
  * Version of the database engine (e.g., '8.0', '13.3'). Must be compatible with the selected engine_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups#engine_version DbaasParameterGroups#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Name of the parameters group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups#name DbaasParameterGroups#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups mgc_dbaas_parameter_groups}
*/
export class DbaasParameterGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_dbaas_parameter_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasParameterGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasParameterGroups to import
  * @param importFromId The id of the existing DbaasParameterGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasParameterGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_dbaas_parameter_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameter_groups mgc_dbaas_parameter_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasParameterGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasParameterGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_dbaas_parameter_groups',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._engineName = config.engineName;
    this._engineVersion = config.engineVersion;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // engine_name - computed: false, optional: false, required: true
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      engine_name: cdktf.stringToTerraform(this._engineName),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_name: {
        value: cdktf.stringToHclTerraform(this._engineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
