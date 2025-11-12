// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HsmPartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Name or ID of the HSM connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_partition#hsm_connection HsmPartition#hsm_connection}
  */
  readonly hsmConnection?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_partition ciphertrust_hsm_partition}
*/
export class HsmPartition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_hsm_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HsmPartition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HsmPartition to import
  * @param importFromId The id of the existing HsmPartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HsmPartition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_hsm_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_partition ciphertrust_hsm_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HsmPartitionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HsmPartitionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_hsm_partition',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hsmConnection = config.hsmConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hsm_connection - computed: false, optional: true, required: false
  private _hsmConnection?: string; 
  public get hsmConnection() {
    return this.getStringAttribute('hsm_connection');
  }
  public set hsmConnection(value: string) {
    this._hsmConnection = value;
  }
  public resetHsmConnection() {
    this._hsmConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmConnectionInput() {
    return this._hsmConnection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hsm_connection: cdktf.stringToTerraform(this._hsmConnection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hsm_connection: {
        value: cdktf.stringToHclTerraform(this._hsmConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
