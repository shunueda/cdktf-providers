// https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapDataDirConfig extends cdktf.TerraformMetaArguments {
  /**
  * Directory to intialize a genesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir#data_dir BootstrapDataDir#data_dir}
  */
  readonly dataDir: string;
  /**
  * Genesis file content in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir#genesis BootstrapDataDir#genesis}
  */
  readonly genesis: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir#id BootstrapDataDir#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance name of the node. This must be the same as the value in geth node config. Default is `geth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir#instance_name BootstrapDataDir#instance_name}
  */
  readonly instanceName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir quorum_bootstrap_data_dir}
*/
export class BootstrapDataDir extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "quorum_bootstrap_data_dir";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootstrapDataDir resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootstrapDataDir to import
  * @param importFromId The id of the existing BootstrapDataDir that should be imported. Refer to the {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootstrapDataDir to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "quorum_bootstrap_data_dir", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_data_dir quorum_bootstrap_data_dir} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapDataDirConfig
  */
  public constructor(scope: Construct, id: string, config: BootstrapDataDirConfig) {
    super(scope, id, {
      terraformResourceType: 'quorum_bootstrap_data_dir',
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
    this._dataDir = config.dataDir;
    this._genesis = config.genesis;
    this._id = config.id;
    this._instanceName = config.instanceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_dir - computed: false, optional: false, required: true
  private _dataDir?: string; 
  public get dataDir() {
    return this.getStringAttribute('data_dir');
  }
  public set dataDir(value: string) {
    this._dataDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDirInput() {
    return this._dataDir;
  }

  // data_dir_abs - computed: true, optional: false, required: false
  public get dataDirAbs() {
    return this.getStringAttribute('data_dir_abs');
  }

  // genesis - computed: false, optional: false, required: true
  private _genesis?: string; 
  public get genesis() {
    return this.getStringAttribute('genesis');
  }
  public set genesis(value: string) {
    this._genesis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get genesisInput() {
    return this._genesis;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_dir: cdktf.stringToTerraform(this._dataDir),
      genesis: cdktf.stringToTerraform(this._genesis),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_dir: {
        value: cdktf.stringToHclTerraform(this._dataDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      genesis: {
        value: cdktf.stringToHclTerraform(this._genesis),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
