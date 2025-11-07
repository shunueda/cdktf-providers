// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwConnectPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of BGP Inside CIDR Blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#bgp_inside_cidrs AwsTgwConnectPeer#bgp_inside_cidrs}
  */
  readonly bgpInsideCidrs: string[];
  /**
  * Connect Attachment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#connect_attachment_id AwsTgwConnectPeer#connect_attachment_id}
  */
  readonly connectAttachmentId: string;
  /**
  * Connect Peer Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#connect_peer_name AwsTgwConnectPeer#connect_peer_name}
  */
  readonly connectPeerName: string;
  /**
  * AWS TGW Connect connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#connection_name AwsTgwConnectPeer#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#id AwsTgwConnectPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Peer AS Number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#peer_as_number AwsTgwConnectPeer#peer_as_number}
  */
  readonly peerAsNumber: string;
  /**
  * Peer GRE IP Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#peer_gre_address AwsTgwConnectPeer#peer_gre_address}
  */
  readonly peerGreAddress: string;
  /**
  * AWS TGW GRE IP Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#tgw_gre_address AwsTgwConnectPeer#tgw_gre_address}
  */
  readonly tgwGreAddress?: string;
  /**
  * AWS TGW Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#tgw_name AwsTgwConnectPeer#tgw_name}
  */
  readonly tgwName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer aviatrix_aws_tgw_connect_peer}
*/
export class AwsTgwConnectPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_connect_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwConnectPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwConnectPeer to import
  * @param importFromId The id of the existing AwsTgwConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwConnectPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_connect_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_connect_peer aviatrix_aws_tgw_connect_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwConnectPeerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwConnectPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_connect_peer',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpInsideCidrs = config.bgpInsideCidrs;
    this._connectAttachmentId = config.connectAttachmentId;
    this._connectPeerName = config.connectPeerName;
    this._connectionName = config.connectionName;
    this._id = config.id;
    this._peerAsNumber = config.peerAsNumber;
    this._peerGreAddress = config.peerGreAddress;
    this._tgwGreAddress = config.tgwGreAddress;
    this._tgwName = config.tgwName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_inside_cidrs - computed: false, optional: false, required: true
  private _bgpInsideCidrs?: string[]; 
  public get bgpInsideCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_inside_cidrs'));
  }
  public set bgpInsideCidrs(value: string[]) {
    this._bgpInsideCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInsideCidrsInput() {
    return this._bgpInsideCidrs;
  }

  // connect_attachment_id - computed: false, optional: false, required: true
  private _connectAttachmentId?: string; 
  public get connectAttachmentId() {
    return this.getStringAttribute('connect_attachment_id');
  }
  public set connectAttachmentId(value: string) {
    this._connectAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectAttachmentIdInput() {
    return this._connectAttachmentId;
  }

  // connect_peer_id - computed: true, optional: false, required: false
  public get connectPeerId() {
    return this.getStringAttribute('connect_peer_id');
  }

  // connect_peer_name - computed: false, optional: false, required: true
  private _connectPeerName?: string; 
  public get connectPeerName() {
    return this.getStringAttribute('connect_peer_name');
  }
  public set connectPeerName(value: string) {
    this._connectPeerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectPeerNameInput() {
    return this._connectPeerName;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
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

  // peer_as_number - computed: false, optional: false, required: true
  private _peerAsNumber?: string; 
  public get peerAsNumber() {
    return this.getStringAttribute('peer_as_number');
  }
  public set peerAsNumber(value: string) {
    this._peerAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsNumberInput() {
    return this._peerAsNumber;
  }

  // peer_gre_address - computed: false, optional: false, required: true
  private _peerGreAddress?: string; 
  public get peerGreAddress() {
    return this.getStringAttribute('peer_gre_address');
  }
  public set peerGreAddress(value: string) {
    this._peerGreAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGreAddressInput() {
    return this._peerGreAddress;
  }

  // tgw_gre_address - computed: false, optional: true, required: false
  private _tgwGreAddress?: string; 
  public get tgwGreAddress() {
    return this.getStringAttribute('tgw_gre_address');
  }
  public set tgwGreAddress(value: string) {
    this._tgwGreAddress = value;
  }
  public resetTgwGreAddress() {
    this._tgwGreAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwGreAddressInput() {
    return this._tgwGreAddress;
  }

  // tgw_name - computed: false, optional: false, required: true
  private _tgwName?: string; 
  public get tgwName() {
    return this.getStringAttribute('tgw_name');
  }
  public set tgwName(value: string) {
    this._tgwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwNameInput() {
    return this._tgwName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_inside_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bgpInsideCidrs),
      connect_attachment_id: cdktf.stringToTerraform(this._connectAttachmentId),
      connect_peer_name: cdktf.stringToTerraform(this._connectPeerName),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      id: cdktf.stringToTerraform(this._id),
      peer_as_number: cdktf.stringToTerraform(this._peerAsNumber),
      peer_gre_address: cdktf.stringToTerraform(this._peerGreAddress),
      tgw_gre_address: cdktf.stringToTerraform(this._tgwGreAddress),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_inside_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bgpInsideCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connect_attachment_id: {
        value: cdktf.stringToHclTerraform(this._connectAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_peer_name: {
        value: cdktf.stringToHclTerraform(this._connectPeerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
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
      peer_as_number: {
        value: cdktf.stringToHclTerraform(this._peerAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_gre_address: {
        value: cdktf.stringToHclTerraform(this._peerGreAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_gre_address: {
        value: cdktf.stringToHclTerraform(this._tgwGreAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_name: {
        value: cdktf.stringToHclTerraform(this._tgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
