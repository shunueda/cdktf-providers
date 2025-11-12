// https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/data-sources/bootstrap_node_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataQuorumBootstrapNodeKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/data-sources/bootstrap_node_key#id DataQuorumBootstrapNodeKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This hex value encodes the private key of a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/data-sources/bootstrap_node_key#node_key_hex DataQuorumBootstrapNodeKey#node_key_hex}
  */
  readonly nodeKeyHex: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/data-sources/bootstrap_node_key quorum_bootstrap_node_key}
*/
export class DataQuorumBootstrapNodeKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "quorum_bootstrap_node_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataQuorumBootstrapNodeKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataQuorumBootstrapNodeKey to import
  * @param importFromId The id of the existing DataQuorumBootstrapNodeKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/data-sources/bootstrap_node_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataQuorumBootstrapNodeKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "quorum_bootstrap_node_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/data-sources/bootstrap_node_key quorum_bootstrap_node_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataQuorumBootstrapNodeKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataQuorumBootstrapNodeKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'quorum_bootstrap_node_key',
      terraformGeneratorMetadata: {
        providerName: 'quorum',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
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
    this._nodeKeyHex = config.nodeKeyHex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hex_node_id - computed: true, optional: false, required: false
  public get hexNodeId() {
    return this.getStringAttribute('hex_node_id');
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

  // istanbul_address - computed: true, optional: false, required: false
  public get istanbulAddress() {
    return this.getStringAttribute('istanbul_address');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_key_hex - computed: false, optional: false, required: true
  private _nodeKeyHex?: string; 
  public get nodeKeyHex() {
    return this.getStringAttribute('node_key_hex');
  }
  public set nodeKeyHex(value: string) {
    this._nodeKeyHex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKeyHexInput() {
    return this._nodeKeyHex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      node_key_hex: cdktf.stringToTerraform(this._nodeKeyHex),
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
      node_key_hex: {
        value: cdktf.stringToHclTerraform(this._nodeKeyHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
