// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressconnectBgpPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#auth_key ExpressconnectBgpPeer#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#bfd_multi_hop ExpressconnectBgpPeer#bfd_multi_hop}
  */
  readonly bfdMultiHop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#bgp_group_id ExpressconnectBgpPeer#bgp_group_id}
  */
  readonly bgpGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#bgp_peer_name ExpressconnectBgpPeer#bgp_peer_name}
  */
  readonly bgpPeerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#description ExpressconnectBgpPeer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#enable_bfd ExpressconnectBgpPeer#enable_bfd}
  */
  readonly enableBfd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#id ExpressconnectBgpPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#peer_ip_address ExpressconnectBgpPeer#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#router_id ExpressconnectBgpPeer#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#status ExpressconnectBgpPeer#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer alibabacloudstack_expressconnect_bgp_peer}
*/
export class ExpressconnectBgpPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_expressconnect_bgp_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressconnectBgpPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressconnectBgpPeer to import
  * @param importFromId The id of the existing ExpressconnectBgpPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressconnectBgpPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_expressconnect_bgp_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_bgp_peer alibabacloudstack_expressconnect_bgp_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressconnectBgpPeerConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressconnectBgpPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_expressconnect_bgp_peer',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authKey = config.authKey;
    this._bfdMultiHop = config.bfdMultiHop;
    this._bgpGroupId = config.bgpGroupId;
    this._bgpPeerName = config.bgpPeerName;
    this._description = config.description;
    this._enableBfd = config.enableBfd;
    this._id = config.id;
    this._peerIpAddress = config.peerIpAddress;
    this._routerId = config.routerId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // bfd_multi_hop - computed: false, optional: true, required: false
  private _bfdMultiHop?: number; 
  public get bfdMultiHop() {
    return this.getNumberAttribute('bfd_multi_hop');
  }
  public set bfdMultiHop(value: number) {
    this._bfdMultiHop = value;
  }
  public resetBfdMultiHop() {
    this._bfdMultiHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiHopInput() {
    return this._bfdMultiHop;
  }

  // bgp_group_id - computed: false, optional: false, required: true
  private _bgpGroupId?: string; 
  public get bgpGroupId() {
    return this.getStringAttribute('bgp_group_id');
  }
  public set bgpGroupId(value: string) {
    this._bgpGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpGroupIdInput() {
    return this._bgpGroupId;
  }

  // bgp_peer_id - computed: true, optional: false, required: false
  public get bgpPeerId() {
    return this.getStringAttribute('bgp_peer_id');
  }

  // bgp_peer_name - computed: true, optional: true, required: false
  private _bgpPeerName?: string; 
  public get bgpPeerName() {
    return this.getStringAttribute('bgp_peer_name');
  }
  public set bgpPeerName(value: string) {
    this._bgpPeerName = value;
  }
  public resetBgpPeerName() {
    this._bgpPeerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerNameInput() {
    return this._bgpPeerName;
  }

  // bgp_status - computed: true, optional: false, required: false
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_bfd - computed: false, optional: true, required: false
  private _enableBfd?: boolean | cdktf.IResolvable; 
  public get enableBfd() {
    return this.getBooleanAttribute('enable_bfd');
  }
  public set enableBfd(value: boolean | cdktf.IResolvable) {
    this._enableBfd = value;
  }
  public resetEnableBfd() {
    this._enableBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBfdInput() {
    return this._enableBfd;
  }

  // hold - computed: true, optional: false, required: false
  public get hold() {
    return this.getNumberAttribute('hold');
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

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // is_fake - computed: true, optional: false, required: false
  public get isFake() {
    return this.getBooleanAttribute('is_fake');
  }

  // keepalive - computed: true, optional: false, required: false
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }

  // local_asn - computed: true, optional: false, required: false
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // route_limit - computed: true, optional: false, required: false
  public get routeLimit() {
    return this.getNumberAttribute('route_limit');
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_key: cdktf.stringToTerraform(this._authKey),
      bfd_multi_hop: cdktf.numberToTerraform(this._bfdMultiHop),
      bgp_group_id: cdktf.stringToTerraform(this._bgpGroupId),
      bgp_peer_name: cdktf.stringToTerraform(this._bgpPeerName),
      description: cdktf.stringToTerraform(this._description),
      enable_bfd: cdktf.booleanToTerraform(this._enableBfd),
      id: cdktf.stringToTerraform(this._id),
      peer_ip_address: cdktf.stringToTerraform(this._peerIpAddress),
      router_id: cdktf.stringToTerraform(this._routerId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_multi_hop: {
        value: cdktf.numberToHclTerraform(this._bfdMultiHop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_group_id: {
        value: cdktf.stringToHclTerraform(this._bgpGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_peer_name: {
        value: cdktf.stringToHclTerraform(this._bgpPeerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_bfd: {
        value: cdktf.booleanToHclTerraform(this._enableBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ip_address: {
        value: cdktf.stringToHclTerraform(this._peerIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
