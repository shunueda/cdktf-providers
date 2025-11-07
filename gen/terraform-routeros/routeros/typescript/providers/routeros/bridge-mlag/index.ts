// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgeMlagConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag#___path___ BridgeMlag#___path___}
  */
  readonly path?: string;
  /**
  * The bridge interface where MLAG is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag#bridge BridgeMlag#bridge}
  */
  readonly bridge: string;
  /**
  * This setting controls how often heartbeat messages are sent to check the connection between peers. If no heartbeat message is received for three intervals in a row, the peer logs a warning about potential communication problems. If set to none, heartbeat messages are not sent at all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag#heartbeat BridgeMlag#heartbeat}
  */
  readonly heartbeat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag#id BridgeMlag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An interface that will be used as a peer port. Both peer devices are using inter-chassis communication over these peer ports to establish MLAG and update the host table. Peer port should be isolated on a different untagged VLAN using a pvid setting. Peer port can be configured as a bonding interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag#peer_port BridgeMlag#peer_port}
  */
  readonly peerPort: string;
  /**
  * This setting changes the priority for selecting the primary MLAG node. A lower number means higher priority. If both MLAG nodes have the same priority, the one with the lowest bridge MAC address will become the primary device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag#priority BridgeMlag#priority}
  */
  readonly priority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag routeros_bridge_mlag}
*/
export class BridgeMlag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_bridge_mlag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BridgeMlag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BridgeMlag to import
  * @param importFromId The id of the existing BridgeMlag that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BridgeMlag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_bridge_mlag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/bridge_mlag routeros_bridge_mlag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgeMlagConfig
  */
  public constructor(scope: Construct, id: string, config: BridgeMlagConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_bridge_mlag',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._bridge = config.bridge;
    this._heartbeat = config.heartbeat;
    this._id = config.id;
    this._peerPort = config.peerPort;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // bridge - computed: false, optional: false, required: true
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // heartbeat - computed: false, optional: true, required: false
  private _heartbeat?: string; 
  public get heartbeat() {
    return this.getStringAttribute('heartbeat');
  }
  public set heartbeat(value: string) {
    this._heartbeat = value;
  }
  public resetHeartbeat() {
    this._heartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatInput() {
    return this._heartbeat;
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

  // peer_port - computed: false, optional: false, required: true
  private _peerPort?: string; 
  public get peerPort() {
    return this.getStringAttribute('peer_port');
  }
  public set peerPort(value: string) {
    this._peerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPortInput() {
    return this._peerPort;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      bridge: cdktf.stringToTerraform(this._bridge),
      heartbeat: cdktf.stringToTerraform(this._heartbeat),
      id: cdktf.stringToTerraform(this._id),
      peer_port: cdktf.stringToTerraform(this._peerPort),
      priority: cdktf.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heartbeat: {
        value: cdktf.stringToHclTerraform(this._heartbeat),
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
      peer_port: {
        value: cdktf.stringToHclTerraform(this._peerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
