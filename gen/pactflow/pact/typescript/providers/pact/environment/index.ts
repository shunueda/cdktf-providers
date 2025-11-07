// https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment#display_name Environment#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * Is this environment a production environment?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment#production Environment#production}
  */
  readonly production?: boolean | cdktf.IResolvable;
  /**
  * A list of teams (as uuids) that may use the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment#teams Environment#teams}
  */
  readonly teams?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment pact_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pact_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pact_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/environment pact_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'pact_environment',
      terraformGeneratorMetadata: {
        providerName: 'pact',
        providerVersion: '0.10.0'
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
    this._id = config.id;
    this._name = config.name;
    this._production = config.production;
    this._teams = config.teams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // production - computed: false, optional: true, required: false
  private _production?: boolean | cdktf.IResolvable; 
  public get production() {
    return this.getBooleanAttribute('production');
  }
  public set production(value: boolean | cdktf.IResolvable) {
    this._production = value;
  }
  public resetProduction() {
    this._production = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      production: cdktf.booleanToTerraform(this._production),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
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
      production: {
        value: cdktf.booleanToHclTerraform(this._production),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
