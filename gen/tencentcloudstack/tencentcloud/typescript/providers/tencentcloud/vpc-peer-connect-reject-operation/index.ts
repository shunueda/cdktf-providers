// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_peer_connect_reject_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeerConnectRejectOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_peer_connect_reject_operation#id VpcPeerConnectRejectOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Peer connection unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_peer_connect_reject_operation#peering_connection_id VpcPeerConnectRejectOperation#peering_connection_id}
  */
  readonly peeringConnectionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_peer_connect_reject_operation tencentcloud_vpc_peer_connect_reject_operation}
*/
export class VpcPeerConnectRejectOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_peer_connect_reject_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPeerConnectRejectOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPeerConnectRejectOperation to import
  * @param importFromId The id of the existing VpcPeerConnectRejectOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_peer_connect_reject_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPeerConnectRejectOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_peer_connect_reject_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_peer_connect_reject_operation tencentcloud_vpc_peer_connect_reject_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeerConnectRejectOperationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeerConnectRejectOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_peer_connect_reject_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._peeringConnectionId = config.peeringConnectionId;
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

  // peering_connection_id - computed: false, optional: false, required: true
  private _peeringConnectionId?: string; 
  public get peeringConnectionId() {
    return this.getStringAttribute('peering_connection_id');
  }
  public set peeringConnectionId(value: string) {
    this._peeringConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringConnectionIdInput() {
    return this._peeringConnectionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      peering_connection_id: cdktf.stringToTerraform(this._peeringConnectionId),
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
      peering_connection_id: {
        value: cdktf.stringToHclTerraform(this._peeringConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
