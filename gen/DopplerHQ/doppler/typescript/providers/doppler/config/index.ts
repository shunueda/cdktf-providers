// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler environment where the config is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config#environment Config#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config#id Config#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not the Doppler config can be inherited by other configs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config#inheritable Config#inheritable}
  */
  readonly inheritable?: boolean | cdktf.IResolvable;
  /**
  * A list of other Doppler config descriptors that this config inherits from. Descriptors match the format "project.config" (e.g. backend.stg), which is most easily retrieved as the computed descriptor of a doppler_config resource (e.g. doppler_config.backend_stg.descriptor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config#inherits Config#inherits}
  */
  readonly inherits?: string[];
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config#name Config#name}
  */
  readonly name: string;
  /**
  * The name of the Doppler project where the config is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config#project Config#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config doppler_config}
*/
export class Config extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Config resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Config to import
  * @param importFromId The id of the existing Config that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Config to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/config doppler_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_config',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._id = config.id;
    this._inheritable = config.inheritable;
    this._inherits = config.inherits;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // descriptor - computed: true, optional: false, required: false
  public get descriptor() {
    return this.getStringAttribute('descriptor');
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // inheritable - computed: false, optional: true, required: false
  private _inheritable?: boolean | cdktf.IResolvable; 
  public get inheritable() {
    return this.getBooleanAttribute('inheritable');
  }
  public set inheritable(value: boolean | cdktf.IResolvable) {
    this._inheritable = value;
  }
  public resetInheritable() {
    this._inheritable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritableInput() {
    return this._inheritable;
  }

  // inherits - computed: false, optional: true, required: false
  private _inherits?: string[]; 
  public get inherits() {
    return this.getListAttribute('inherits');
  }
  public set inherits(value: string[]) {
    this._inherits = value;
  }
  public resetInherits() {
    this._inherits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritsInput() {
    return this._inherits;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      inheritable: cdktf.booleanToTerraform(this._inheritable),
      inherits: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inherits),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      inheritable: {
        value: cdktf.booleanToHclTerraform(this._inheritable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inherits: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inherits),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
