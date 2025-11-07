// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayL2VpnTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connector initation mode of the session describing how a connection is made. Needs to be set only if `session_mode` is set to `SERVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#connector_initiation_mode NsxtEdgegatewayL2VpnTunnel#connector_initiation_mode}
  */
  readonly connectorInitiationMode?: string;
  /**
  * Description of the L2 VPN Tunnel session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#description NsxtEdgegatewayL2VpnTunnel#description}
  */
  readonly description?: string;
  /**
  * Edge Gateway ID for the tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#edge_gateway_id NsxtEdgegatewayL2VpnTunnel#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Status of the L2 VPN Tunnel session. Always set to `true` for CLIENT sessions. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#enabled NsxtEdgegatewayL2VpnTunnel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#id NsxtEdgegatewayL2VpnTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local endpoint IP of the tunnel session, the IP must be sub-allocated to the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#local_endpoint_ip NsxtEdgegatewayL2VpnTunnel#local_endpoint_ip}
  */
  readonly localEndpointIp: string;
  /**
  * Name of the L2 VPN Tunnel session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#name NsxtEdgegatewayL2VpnTunnel#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#org NsxtEdgegatewayL2VpnTunnel#org}
  */
  readonly org?: string;
  /**
  * Base64 encoded string of the full configuration of the tunnel provided by the SERVER session. It is a computed field for SERVER sessions and is a required field for CLIENT sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#peer_code NsxtEdgegatewayL2VpnTunnel#peer_code}
  */
  readonly peerCode?: string;
  /**
  * Pre-shared key used for authentication, needs to be provided only for`SERVER` sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#pre_shared_key NsxtEdgegatewayL2VpnTunnel#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * The IP address of the remote endpoint, which corresponds to the deviceon the remote site terminating the VPN tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#remote_endpoint_ip NsxtEdgegatewayL2VpnTunnel#remote_endpoint_ip}
  */
  readonly remoteEndpointIp: string;
  /**
  * Mode of the tunnel session, must be CLIENT or SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#session_mode NsxtEdgegatewayL2VpnTunnel#session_mode}
  */
  readonly sessionMode: string;
  /**
  * Network CIDR block over which the session interfaces. Only relevant if `session_mode` is set to `SERVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#tunnel_interface NsxtEdgegatewayL2VpnTunnel#tunnel_interface}
  */
  readonly tunnelInterface?: string;
  /**
  * stretched_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#stretched_network NsxtEdgegatewayL2VpnTunnel#stretched_network}
  */
  readonly stretchedNetwork?: NsxtEdgegatewayL2VpnTunnelStretchedNetwork[] | cdktf.IResolvable;
}
export interface NsxtEdgegatewayL2VpnTunnelStretchedNetwork {
  /**
  * ID of the Org VDC network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#network_id NsxtEdgegatewayL2VpnTunnel#network_id}
  */
  readonly networkId: string;
  /**
  * Tunnel ID of the network for the tunnel. Read-only for `SERVER` sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#tunnel_id NsxtEdgegatewayL2VpnTunnel#tunnel_id}
  */
  readonly tunnelId?: number;
}

export function nsxtEdgegatewayL2VpnTunnelStretchedNetworkToTerraform(struct?: NsxtEdgegatewayL2VpnTunnelStretchedNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tunnel_id: cdktf.numberToTerraform(struct!.tunnelId),
  }
}


export function nsxtEdgegatewayL2VpnTunnelStretchedNetworkToHclTerraform(struct?: NsxtEdgegatewayL2VpnTunnelStretchedNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_id: {
      value: cdktf.numberToHclTerraform(struct!.tunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewayL2VpnTunnelStretchedNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NsxtEdgegatewayL2VpnTunnelStretchedNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewayL2VpnTunnelStretchedNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._tunnelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._tunnelId = value.tunnelId;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tunnel_id - computed: true, optional: true, required: false
  private _tunnelId?: number; 
  public get tunnelId() {
    return this.getNumberAttribute('tunnel_id');
  }
  public set tunnelId(value: number) {
    this._tunnelId = value;
  }
  public resetTunnelId() {
    this._tunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }
}

export class NsxtEdgegatewayL2VpnTunnelStretchedNetworkList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewayL2VpnTunnelStretchedNetwork[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NsxtEdgegatewayL2VpnTunnelStretchedNetworkOutputReference {
    return new NsxtEdgegatewayL2VpnTunnelStretchedNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel vcd_nsxt_edgegateway_l2_vpn_tunnel}
*/
export class NsxtEdgegatewayL2VpnTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_l2_vpn_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayL2VpnTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayL2VpnTunnel to import
  * @param importFromId The id of the existing NsxtEdgegatewayL2VpnTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayL2VpnTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_l2_vpn_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_l2_vpn_tunnel vcd_nsxt_edgegateway_l2_vpn_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayL2VpnTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayL2VpnTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_l2_vpn_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorInitiationMode = config.connectorInitiationMode;
    this._description = config.description;
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._localEndpointIp = config.localEndpointIp;
    this._name = config.name;
    this._org = config.org;
    this._peerCode = config.peerCode;
    this._preSharedKey = config.preSharedKey;
    this._remoteEndpointIp = config.remoteEndpointIp;
    this._sessionMode = config.sessionMode;
    this._tunnelInterface = config.tunnelInterface;
    this._stretchedNetwork.internalValue = config.stretchedNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_initiation_mode - computed: false, optional: true, required: false
  private _connectorInitiationMode?: string; 
  public get connectorInitiationMode() {
    return this.getStringAttribute('connector_initiation_mode');
  }
  public set connectorInitiationMode(value: string) {
    this._connectorInitiationMode = value;
  }
  public resetConnectorInitiationMode() {
    this._connectorInitiationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInitiationModeInput() {
    return this._connectorInitiationMode;
  }

  // description - computed: false, optional: true, required: false
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

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // local_endpoint_ip - computed: false, optional: false, required: true
  private _localEndpointIp?: string; 
  public get localEndpointIp() {
    return this.getStringAttribute('local_endpoint_ip');
  }
  public set localEndpointIp(value: string) {
    this._localEndpointIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localEndpointIpInput() {
    return this._localEndpointIp;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // peer_code - computed: true, optional: true, required: false
  private _peerCode?: string; 
  public get peerCode() {
    return this.getStringAttribute('peer_code');
  }
  public set peerCode(value: string) {
    this._peerCode = value;
  }
  public resetPeerCode() {
    this._peerCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCodeInput() {
    return this._peerCode;
  }

  // pre_shared_key - computed: false, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // remote_endpoint_ip - computed: false, optional: false, required: true
  private _remoteEndpointIp?: string; 
  public get remoteEndpointIp() {
    return this.getStringAttribute('remote_endpoint_ip');
  }
  public set remoteEndpointIp(value: string) {
    this._remoteEndpointIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteEndpointIpInput() {
    return this._remoteEndpointIp;
  }

  // session_mode - computed: false, optional: false, required: true
  private _sessionMode?: string; 
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }
  public set sessionMode(value: string) {
    this._sessionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionModeInput() {
    return this._sessionMode;
  }

  // tunnel_interface - computed: true, optional: true, required: false
  private _tunnelInterface?: string; 
  public get tunnelInterface() {
    return this.getStringAttribute('tunnel_interface');
  }
  public set tunnelInterface(value: string) {
    this._tunnelInterface = value;
  }
  public resetTunnelInterface() {
    this._tunnelInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceInput() {
    return this._tunnelInterface;
  }

  // stretched_network - computed: false, optional: true, required: false
  private _stretchedNetwork = new NsxtEdgegatewayL2VpnTunnelStretchedNetworkList(this, "stretched_network", true);
  public get stretchedNetwork() {
    return this._stretchedNetwork;
  }
  public putStretchedNetwork(value: NsxtEdgegatewayL2VpnTunnelStretchedNetwork[] | cdktf.IResolvable) {
    this._stretchedNetwork.internalValue = value;
  }
  public resetStretchedNetwork() {
    this._stretchedNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchedNetworkInput() {
    return this._stretchedNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_initiation_mode: cdktf.stringToTerraform(this._connectorInitiationMode),
      description: cdktf.stringToTerraform(this._description),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      local_endpoint_ip: cdktf.stringToTerraform(this._localEndpointIp),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      peer_code: cdktf.stringToTerraform(this._peerCode),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      remote_endpoint_ip: cdktf.stringToTerraform(this._remoteEndpointIp),
      session_mode: cdktf.stringToTerraform(this._sessionMode),
      tunnel_interface: cdktf.stringToTerraform(this._tunnelInterface),
      stretched_network: cdktf.listMapper(nsxtEdgegatewayL2VpnTunnelStretchedNetworkToTerraform, true)(this._stretchedNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_initiation_mode: {
        value: cdktf.stringToHclTerraform(this._connectorInitiationMode),
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
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      local_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._localEndpointIp),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_code: {
        value: cdktf.stringToHclTerraform(this._peerCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._preSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._remoteEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_mode: {
        value: cdktf.stringToHclTerraform(this._sessionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface: {
        value: cdktf.stringToHclTerraform(this._tunnelInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stretched_network: {
        value: cdktf.listMapperHcl(nsxtEdgegatewayL2VpnTunnelStretchedNetworkToHclTerraform, true)(this._stretchedNetwork.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtEdgegatewayL2VpnTunnelStretchedNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
