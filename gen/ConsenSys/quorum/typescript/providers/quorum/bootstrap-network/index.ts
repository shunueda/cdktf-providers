// https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_network#id BootstrapNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of a new network. Directory name restriction applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_network#name BootstrapNetwork#name}
  */
  readonly name: string;
  /**
  * File system path to the directory on which new directory will be created. Default is current working directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_network#target_dir BootstrapNetwork#target_dir}
  */
  readonly targetDir?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_network quorum_bootstrap_network}
*/
export class BootstrapNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "quorum_bootstrap_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootstrapNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootstrapNetwork to import
  * @param importFromId The id of the existing BootstrapNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootstrapNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "quorum_bootstrap_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_network quorum_bootstrap_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: BootstrapNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'quorum_bootstrap_network',
      terraformGeneratorMetadata: {
        providerName: 'quorum',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._targetDir = config.targetDir;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_dir_abs - computed: true, optional: false, required: false
  public get networkDirAbs() {
    return this.getStringAttribute('network_dir_abs');
  }

  // target_dir - computed: false, optional: true, required: false
  private _targetDir?: string; 
  public get targetDir() {
    return this.getStringAttribute('target_dir');
  }
  public set targetDir(value: string) {
    this._targetDir = value;
  }
  public resetTargetDir() {
    this._targetDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDirInput() {
    return this._targetDir;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      target_dir: cdktf.stringToTerraform(this._targetDir),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      target_dir: {
        value: cdktf.stringToHclTerraform(this._targetDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
