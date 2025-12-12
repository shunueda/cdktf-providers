// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterConnectPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer#cen_id CenTransitRouterConnectPeer#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer#connect_attachment_id CenTransitRouterConnectPeer#connect_attachment_id}
  */
  readonly connectAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer#id CenTransitRouterConnectPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer#local_ip CenTransitRouterConnectPeer#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer#name CenTransitRouterConnectPeer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer#peer_ip CenTransitRouterConnectPeer#peer_ip}
  */
  readonly peerIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer alibabacloudstack_cen_transit_router_connect_peer}
*/
export class CenTransitRouterConnectPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_connect_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterConnectPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterConnectPeer to import
  * @param importFromId The id of the existing CenTransitRouterConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterConnectPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_connect_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_connect_peer alibabacloudstack_cen_transit_router_connect_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterConnectPeerConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterConnectPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_connect_peer',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenId = config.cenId;
    this._connectAttachmentId = config.connectAttachmentId;
    this._id = config.id;
    this._localIp = config.localIp;
    this._name = config.name;
    this._peerIp = config.peerIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
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

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peer_ip - computed: false, optional: false, required: true
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_id: cdktf.stringToTerraform(this._cenId),
      connect_attachment_id: cdktf.stringToTerraform(this._connectAttachmentId),
      id: cdktf.stringToTerraform(this._id),
      local_ip: cdktf.stringToTerraform(this._localIp),
      name: cdktf.stringToTerraform(this._name),
      peer_ip: cdktf.stringToTerraform(this._peerIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_attachment_id: {
        value: cdktf.stringToHclTerraform(this._connectAttachmentId),
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
      local_ip: {
        value: cdktf.stringToHclTerraform(this._localIp),
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
      peer_ip: {
        value: cdktf.stringToHclTerraform(this._peerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
