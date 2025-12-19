// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLacpPassthroughConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough#id NetworkLacpPassthrough#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Peer member to forward received LACP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough#peer_from NetworkLacpPassthrough#peer_from}
  */
  readonly peerFrom: number;
  /**
  * Peer member to forward received LACP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough#peer_to NetworkLacpPassthrough#peer_to}
  */
  readonly peerTo: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough#uuid NetworkLacpPassthrough#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough thunder_network_lacp_passthrough}
*/
export class NetworkLacpPassthrough extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_lacp_passthrough";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLacpPassthrough resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLacpPassthrough to import
  * @param importFromId The id of the existing NetworkLacpPassthrough that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLacpPassthrough to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_lacp_passthrough", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_lacp_passthrough thunder_network_lacp_passthrough} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLacpPassthroughConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkLacpPassthroughConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_lacp_passthrough',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._peerFrom = config.peerFrom;
    this._peerTo = config.peerTo;
    this._uuid = config.uuid;
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

  // peer_from - computed: false, optional: false, required: true
  private _peerFrom?: number; 
  public get peerFrom() {
    return this.getNumberAttribute('peer_from');
  }
  public set peerFrom(value: number) {
    this._peerFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerFromInput() {
    return this._peerFrom;
  }

  // peer_to - computed: false, optional: false, required: true
  private _peerTo?: number; 
  public get peerTo() {
    return this.getNumberAttribute('peer_to');
  }
  public set peerTo(value: number) {
    this._peerTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerToInput() {
    return this._peerTo;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      peer_from: cdktf.numberToTerraform(this._peerFrom),
      peer_to: cdktf.numberToTerraform(this._peerTo),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      peer_from: {
        value: cdktf.numberToHclTerraform(this._peerFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_to: {
        value: cdktf.numberToHclTerraform(this._peerTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
