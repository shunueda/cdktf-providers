// https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device types permitted to connect to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#allowed_devices Server#allowed_devices}
  */
  readonly allowedDevices?: string;
  /**
  * Network address for the private network that will be created for clients. This network cannot conflict with any existing local networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#bind_address Server#bind_address}
  */
  readonly bindAddress?: string;
  /**
  * Block outside DNS on Windows clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#block_outside_dns Server#block_outside_dns}
  */
  readonly blockOutsideDns?: boolean | cdktf.IResolvable;
  /**
  * The cipher for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#cipher Server#cipher}
  */
  readonly cipher?: string;
  /**
  * Show server debugging information in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#debug Server#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Require administrator to approve every client device using TPM or Apple Secure Enclave
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#device_auth Server#device_auth}
  */
  readonly deviceAuth?: boolean | cdktf.IResolvable;
  /**
  * Size of DH parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#dh_param_bits Server#dh_param_bits}
  */
  readonly dhParamBits?: number;
  /**
  * Map the vpn clients ip address to the .vpn domain such as example_user.example_org.vpn This will conflict with the DNS port if systemd-resolve is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#dns_mapping Server#dns_mapping}
  */
  readonly dnsMapping?: boolean | cdktf.IResolvable;
  /**
  * Enter list of DNS servers applied on the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#dns_servers Server#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Block VPN server ports by default and open port for client IP address after authenticating with HTTPS request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#dynamic_firewall Server#dynamic_firewall}
  */
  readonly dynamicFirewall?: boolean | cdktf.IResolvable;
  /**
  * Enter list of groups to allow connections from. Names are case sensitive. If empty all groups will able to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#groups Server#groups}
  */
  readonly groups?: string[];
  /**
  * The hash for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#hash Server#hash}
  */
  readonly hash?: string;
  /**
  * The list of attached hosts to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#host_ids Server#host_ids}
  */
  readonly hostIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disconnects users after the specified number of seconds of inactivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#inactive_timeout Server#inactive_timeout}
  */
  readonly inactiveTimeout?: number;
  /**
  * Enable inter-client routing across hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#inter_client Server#inter_client}
  */
  readonly interClient?: boolean | cdktf.IResolvable;
  /**
  * Enables IPv6 on server, requires IPv6 network interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#ipv6 Server#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Time in between pings used when multiple users have the same network link to failover to another user when one network link fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#link_ping_interval Server#link_ping_interval}
  */
  readonly linkPingInterval?: number;
  /**
  * Optional, ping timeout used when multiple users have the same network link to failover to another user when one network link fails..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#link_ping_timeout Server#link_ping_timeout}
  */
  readonly linkPingTimeout?: number;
  /**
  * Maximum number of clients connected to a server or to each server replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#max_clients Server#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Maximum number of devices per client connected to a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#max_devices Server#max_devices}
  */
  readonly maxDevices?: number;
  /**
  * MSS fix value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#mss_fix Server#mss_fix}
  */
  readonly mssFix?: number;
  /**
  * Allow users to connect with multiple devices concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#multi_device Server#multi_device}
  */
  readonly multiDevice?: boolean | cdktf.IResolvable;
  /**
  * The name of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#name Server#name}
  */
  readonly name: string;
  /**
  * Network address for the private network that will be created for clients. This network cannot conflict with any existing local networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#network Server#network}
  */
  readonly network?: string;
  /**
  * Ending network address for the bridged VPN client IP addresses. Must be in the subnet of the server network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#network_end Server#network_end}
  */
  readonly networkEnd?: string;
  /**
  * Sets network mode. Bridged mode is not recommended using it will impact performance and client support will be limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#network_mode Server#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Starting network address for the bridged VPN client IP addresses. Must be in the subnet of the server network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#network_start Server#network_start}
  */
  readonly networkStart?: string;
  /**
  * Network address for the private network that will be created for clients. This network cannot conflict with any existing local networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#network_wg Server#network_wg}
  */
  readonly networkWg?: string;
  /**
  * The list of attached organizations to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#organization_ids Server#organization_ids}
  */
  readonly organizationIds?: string[];
  /**
  * Enables two-step authentication using Google Authenticator. Verification code is entered as the user password when connecting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#otp_auth Server#otp_auth}
  */
  readonly otpAuth?: boolean | cdktf.IResolvable;
  /**
  * Interval to ping client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#ping_interval Server#ping_interval}
  */
  readonly pingInterval?: number;
  /**
  * Timeout for client ping. Must be greater then ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#ping_timeout Server#ping_timeout}
  */
  readonly pingTimeout?: number;
  /**
  * The port for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#port Server#port}
  */
  readonly port?: number;
  /**
  * Network address for the private network that will be created for clients. This network cannot conflict with any existing local networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#port_wg Server#port_wg}
  */
  readonly portWg?: number;
  /**
  * Messages that will be shown after connect to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#pre_connect_msg Server#pre_connect_msg}
  */
  readonly preConnectMsg?: string;
  /**
  * The protocol for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#protocol Server#protocol}
  */
  readonly protocol?: string;
  /**
  * Replicate server across multiple hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#replica_count Server#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Prevent traffic from networks not specified in the servers routes from being tunneled over the vpn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#restrict_routes Server#restrict_routes}
  */
  readonly restrictRoutes?: boolean | cdktf.IResolvable;
  /**
  * DNS search domain for clients. Separate multiple search domains by a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#search_domain Server#search_domain}
  */
  readonly searchDomain?: string;
  /**
  * Disconnect users after the specified number of seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#session_timeout Server#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Require client to authenticate with single sign-on provider on each connection using web browser. Requires client to have access to Pritunl web server port and running updated Pritunl Client. Single sign-on provider must already be configured for this feature to work properly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#sso_auth Server#sso_auth}
  */
  readonly ssoAuth?: boolean | cdktf.IResolvable;
  /**
  * The status of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#status Server#status}
  */
  readonly status?: string;
  /**
  * Use VXLan for routing client-to-client traffic with replicated servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#vxlan Server#vxlan}
  */
  readonly vxlan?: boolean | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#route Server#route}
  */
  readonly route?: ServerRoute[] | cdktf.IResolvable;
}
export interface ServerRoute {
  /**
  * Comment for route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#comment Server#comment}
  */
  readonly comment?: string;
  /**
  * NAT vpn traffic destined to this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#nat Server#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Net Gateway vpn traffic destined to this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#net_gateway Server#net_gateway}
  */
  readonly netGateway?: boolean | cdktf.IResolvable;
  /**
  * Network address with subnet to route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#network Server#network}
  */
  readonly network: string;
}

export function serverRouteToTerraform(struct?: ServerRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    nat: cdktf.booleanToTerraform(struct!.nat),
    net_gateway: cdktf.booleanToTerraform(struct!.netGateway),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function serverRouteToHclTerraform(struct?: ServerRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: cdktf.booleanToHclTerraform(struct!.nat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.netGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._netGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.netGateway = this._netGateway;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._nat = undefined;
      this._netGateway = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._nat = value.nat;
      this._netGateway = value.netGateway;
      this._network = value.network;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // nat - computed: true, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // net_gateway - computed: true, optional: true, required: false
  private _netGateway?: boolean | cdktf.IResolvable; 
  public get netGateway() {
    return this.getBooleanAttribute('net_gateway');
  }
  public set netGateway(value: boolean | cdktf.IResolvable) {
    this._netGateway = value;
  }
  public resetNetGateway() {
    this._netGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netGatewayInput() {
    return this._netGateway;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class ServerRouteList extends cdktf.ComplexList {
  public internalValue? : ServerRoute[] | cdktf.IResolvable

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
  public get(index: number): ServerRouteOutputReference {
    return new ServerRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server pritunl_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pritunl_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pritunl_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/server pritunl_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'pritunl_server',
      terraformGeneratorMetadata: {
        providerName: 'pritunl',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedDevices = config.allowedDevices;
    this._bindAddress = config.bindAddress;
    this._blockOutsideDns = config.blockOutsideDns;
    this._cipher = config.cipher;
    this._debug = config.debug;
    this._deviceAuth = config.deviceAuth;
    this._dhParamBits = config.dhParamBits;
    this._dnsMapping = config.dnsMapping;
    this._dnsServers = config.dnsServers;
    this._dynamicFirewall = config.dynamicFirewall;
    this._groups = config.groups;
    this._hash = config.hash;
    this._hostIds = config.hostIds;
    this._id = config.id;
    this._inactiveTimeout = config.inactiveTimeout;
    this._interClient = config.interClient;
    this._ipv6 = config.ipv6;
    this._linkPingInterval = config.linkPingInterval;
    this._linkPingTimeout = config.linkPingTimeout;
    this._maxClients = config.maxClients;
    this._maxDevices = config.maxDevices;
    this._mssFix = config.mssFix;
    this._multiDevice = config.multiDevice;
    this._name = config.name;
    this._network = config.network;
    this._networkEnd = config.networkEnd;
    this._networkMode = config.networkMode;
    this._networkStart = config.networkStart;
    this._networkWg = config.networkWg;
    this._organizationIds = config.organizationIds;
    this._otpAuth = config.otpAuth;
    this._pingInterval = config.pingInterval;
    this._pingTimeout = config.pingTimeout;
    this._port = config.port;
    this._portWg = config.portWg;
    this._preConnectMsg = config.preConnectMsg;
    this._protocol = config.protocol;
    this._replicaCount = config.replicaCount;
    this._restrictRoutes = config.restrictRoutes;
    this._searchDomain = config.searchDomain;
    this._sessionTimeout = config.sessionTimeout;
    this._ssoAuth = config.ssoAuth;
    this._status = config.status;
    this._vxlan = config.vxlan;
    this._route.internalValue = config.route;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_devices - computed: false, optional: true, required: false
  private _allowedDevices?: string; 
  public get allowedDevices() {
    return this.getStringAttribute('allowed_devices');
  }
  public set allowedDevices(value: string) {
    this._allowedDevices = value;
  }
  public resetAllowedDevices() {
    this._allowedDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDevicesInput() {
    return this._allowedDevices;
  }

  // bind_address - computed: false, optional: true, required: false
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  public resetBindAddress() {
    this._bindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }

  // block_outside_dns - computed: false, optional: true, required: false
  private _blockOutsideDns?: boolean | cdktf.IResolvable; 
  public get blockOutsideDns() {
    return this.getBooleanAttribute('block_outside_dns');
  }
  public set blockOutsideDns(value: boolean | cdktf.IResolvable) {
    this._blockOutsideDns = value;
  }
  public resetBlockOutsideDns() {
    this._blockOutsideDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOutsideDnsInput() {
    return this._blockOutsideDns;
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // device_auth - computed: false, optional: true, required: false
  private _deviceAuth?: boolean | cdktf.IResolvable; 
  public get deviceAuth() {
    return this.getBooleanAttribute('device_auth');
  }
  public set deviceAuth(value: boolean | cdktf.IResolvable) {
    this._deviceAuth = value;
  }
  public resetDeviceAuth() {
    this._deviceAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAuthInput() {
    return this._deviceAuth;
  }

  // dh_param_bits - computed: true, optional: true, required: false
  private _dhParamBits?: number; 
  public get dhParamBits() {
    return this.getNumberAttribute('dh_param_bits');
  }
  public set dhParamBits(value: number) {
    this._dhParamBits = value;
  }
  public resetDhParamBits() {
    this._dhParamBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhParamBitsInput() {
    return this._dhParamBits;
  }

  // dns_mapping - computed: false, optional: true, required: false
  private _dnsMapping?: boolean | cdktf.IResolvable; 
  public get dnsMapping() {
    return this.getBooleanAttribute('dns_mapping');
  }
  public set dnsMapping(value: boolean | cdktf.IResolvable) {
    this._dnsMapping = value;
  }
  public resetDnsMapping() {
    this._dnsMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMappingInput() {
    return this._dnsMapping;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // dynamic_firewall - computed: false, optional: true, required: false
  private _dynamicFirewall?: boolean | cdktf.IResolvable; 
  public get dynamicFirewall() {
    return this.getBooleanAttribute('dynamic_firewall');
  }
  public set dynamicFirewall(value: boolean | cdktf.IResolvable) {
    this._dynamicFirewall = value;
  }
  public resetDynamicFirewall() {
    this._dynamicFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFirewallInput() {
    return this._dynamicFirewall;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // host_ids - computed: true, optional: true, required: false
  private _hostIds?: string[]; 
  public get hostIds() {
    return this.getListAttribute('host_ids');
  }
  public set hostIds(value: string[]) {
    this._hostIds = value;
  }
  public resetHostIds() {
    this._hostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
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

  // inactive_timeout - computed: false, optional: true, required: false
  private _inactiveTimeout?: number; 
  public get inactiveTimeout() {
    return this.getNumberAttribute('inactive_timeout');
  }
  public set inactiveTimeout(value: number) {
    this._inactiveTimeout = value;
  }
  public resetInactiveTimeout() {
    this._inactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveTimeoutInput() {
    return this._inactiveTimeout;
  }

  // inter_client - computed: false, optional: true, required: false
  private _interClient?: boolean | cdktf.IResolvable; 
  public get interClient() {
    return this.getBooleanAttribute('inter_client');
  }
  public set interClient(value: boolean | cdktf.IResolvable) {
    this._interClient = value;
  }
  public resetInterClient() {
    this._interClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interClientInput() {
    return this._interClient;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // link_ping_interval - computed: true, optional: true, required: false
  private _linkPingInterval?: number; 
  public get linkPingInterval() {
    return this.getNumberAttribute('link_ping_interval');
  }
  public set linkPingInterval(value: number) {
    this._linkPingInterval = value;
  }
  public resetLinkPingInterval() {
    this._linkPingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPingIntervalInput() {
    return this._linkPingInterval;
  }

  // link_ping_timeout - computed: true, optional: true, required: false
  private _linkPingTimeout?: number; 
  public get linkPingTimeout() {
    return this.getNumberAttribute('link_ping_timeout');
  }
  public set linkPingTimeout(value: number) {
    this._linkPingTimeout = value;
  }
  public resetLinkPingTimeout() {
    this._linkPingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPingTimeoutInput() {
    return this._linkPingTimeout;
  }

  // max_clients - computed: true, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
  }

  // max_devices - computed: false, optional: true, required: false
  private _maxDevices?: number; 
  public get maxDevices() {
    return this.getNumberAttribute('max_devices');
  }
  public set maxDevices(value: number) {
    this._maxDevices = value;
  }
  public resetMaxDevices() {
    this._maxDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDevicesInput() {
    return this._maxDevices;
  }

  // mss_fix - computed: false, optional: true, required: false
  private _mssFix?: number; 
  public get mssFix() {
    return this.getNumberAttribute('mss_fix');
  }
  public set mssFix(value: number) {
    this._mssFix = value;
  }
  public resetMssFix() {
    this._mssFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssFixInput() {
    return this._mssFix;
  }

  // multi_device - computed: false, optional: true, required: false
  private _multiDevice?: boolean | cdktf.IResolvable; 
  public get multiDevice() {
    return this.getBooleanAttribute('multi_device');
  }
  public set multiDevice(value: boolean | cdktf.IResolvable) {
    this._multiDevice = value;
  }
  public resetMultiDevice() {
    this._multiDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDeviceInput() {
    return this._multiDevice;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_end - computed: false, optional: true, required: false
  private _networkEnd?: string; 
  public get networkEnd() {
    return this.getStringAttribute('network_end');
  }
  public set networkEnd(value: string) {
    this._networkEnd = value;
  }
  public resetNetworkEnd() {
    this._networkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndInput() {
    return this._networkEnd;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // network_start - computed: false, optional: true, required: false
  private _networkStart?: string; 
  public get networkStart() {
    return this.getStringAttribute('network_start');
  }
  public set networkStart(value: string) {
    this._networkStart = value;
  }
  public resetNetworkStart() {
    this._networkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkStartInput() {
    return this._networkStart;
  }

  // network_wg - computed: false, optional: true, required: false
  private _networkWg?: string; 
  public get networkWg() {
    return this.getStringAttribute('network_wg');
  }
  public set networkWg(value: string) {
    this._networkWg = value;
  }
  public resetNetworkWg() {
    this._networkWg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWgInput() {
    return this._networkWg;
  }

  // organization_ids - computed: false, optional: true, required: false
  private _organizationIds?: string[]; 
  public get organizationIds() {
    return this.getListAttribute('organization_ids');
  }
  public set organizationIds(value: string[]) {
    this._organizationIds = value;
  }
  public resetOrganizationIds() {
    this._organizationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdsInput() {
    return this._organizationIds;
  }

  // otp_auth - computed: false, optional: true, required: false
  private _otpAuth?: boolean | cdktf.IResolvable; 
  public get otpAuth() {
    return this.getBooleanAttribute('otp_auth');
  }
  public set otpAuth(value: boolean | cdktf.IResolvable) {
    this._otpAuth = value;
  }
  public resetOtpAuth() {
    this._otpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpAuthInput() {
    return this._otpAuth;
  }

  // ping_interval - computed: true, optional: true, required: false
  private _pingInterval?: number; 
  public get pingInterval() {
    return this.getNumberAttribute('ping_interval');
  }
  public set pingInterval(value: number) {
    this._pingInterval = value;
  }
  public resetPingInterval() {
    this._pingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingIntervalInput() {
    return this._pingInterval;
  }

  // ping_timeout - computed: true, optional: true, required: false
  private _pingTimeout?: number; 
  public get pingTimeout() {
    return this.getNumberAttribute('ping_timeout');
  }
  public set pingTimeout(value: number) {
    this._pingTimeout = value;
  }
  public resetPingTimeout() {
    this._pingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingTimeoutInput() {
    return this._pingTimeout;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_wg - computed: false, optional: true, required: false
  private _portWg?: number; 
  public get portWg() {
    return this.getNumberAttribute('port_wg');
  }
  public set portWg(value: number) {
    this._portWg = value;
  }
  public resetPortWg() {
    this._portWg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portWgInput() {
    return this._portWg;
  }

  // pre_connect_msg - computed: false, optional: true, required: false
  private _preConnectMsg?: string; 
  public get preConnectMsg() {
    return this.getStringAttribute('pre_connect_msg');
  }
  public set preConnectMsg(value: string) {
    this._preConnectMsg = value;
  }
  public resetPreConnectMsg() {
    this._preConnectMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preConnectMsgInput() {
    return this._preConnectMsg;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // restrict_routes - computed: false, optional: true, required: false
  private _restrictRoutes?: boolean | cdktf.IResolvable; 
  public get restrictRoutes() {
    return this.getBooleanAttribute('restrict_routes');
  }
  public set restrictRoutes(value: boolean | cdktf.IResolvable) {
    this._restrictRoutes = value;
  }
  public resetRestrictRoutes() {
    this._restrictRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictRoutesInput() {
    return this._restrictRoutes;
  }

  // search_domain - computed: false, optional: true, required: false
  private _searchDomain?: string; 
  public get searchDomain() {
    return this.getStringAttribute('search_domain');
  }
  public set searchDomain(value: string) {
    this._searchDomain = value;
  }
  public resetSearchDomain() {
    this._searchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainInput() {
    return this._searchDomain;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // sso_auth - computed: false, optional: true, required: false
  private _ssoAuth?: boolean | cdktf.IResolvable; 
  public get ssoAuth() {
    return this.getBooleanAttribute('sso_auth');
  }
  public set ssoAuth(value: boolean | cdktf.IResolvable) {
    this._ssoAuth = value;
  }
  public resetSsoAuth() {
    this._ssoAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAuthInput() {
    return this._ssoAuth;
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

  // vxlan - computed: false, optional: true, required: false
  private _vxlan?: boolean | cdktf.IResolvable; 
  public get vxlan() {
    return this.getBooleanAttribute('vxlan');
  }
  public set vxlan(value: boolean | cdktf.IResolvable) {
    this._vxlan = value;
  }
  public resetVxlan() {
    this._vxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan;
  }

  // route - computed: false, optional: true, required: false
  private _route = new ServerRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: ServerRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_devices: cdktf.stringToTerraform(this._allowedDevices),
      bind_address: cdktf.stringToTerraform(this._bindAddress),
      block_outside_dns: cdktf.booleanToTerraform(this._blockOutsideDns),
      cipher: cdktf.stringToTerraform(this._cipher),
      debug: cdktf.booleanToTerraform(this._debug),
      device_auth: cdktf.booleanToTerraform(this._deviceAuth),
      dh_param_bits: cdktf.numberToTerraform(this._dhParamBits),
      dns_mapping: cdktf.booleanToTerraform(this._dnsMapping),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      dynamic_firewall: cdktf.booleanToTerraform(this._dynamicFirewall),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      hash: cdktf.stringToTerraform(this._hash),
      host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostIds),
      id: cdktf.stringToTerraform(this._id),
      inactive_timeout: cdktf.numberToTerraform(this._inactiveTimeout),
      inter_client: cdktf.booleanToTerraform(this._interClient),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      link_ping_interval: cdktf.numberToTerraform(this._linkPingInterval),
      link_ping_timeout: cdktf.numberToTerraform(this._linkPingTimeout),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      max_devices: cdktf.numberToTerraform(this._maxDevices),
      mss_fix: cdktf.numberToTerraform(this._mssFix),
      multi_device: cdktf.booleanToTerraform(this._multiDevice),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      network_end: cdktf.stringToTerraform(this._networkEnd),
      network_mode: cdktf.stringToTerraform(this._networkMode),
      network_start: cdktf.stringToTerraform(this._networkStart),
      network_wg: cdktf.stringToTerraform(this._networkWg),
      organization_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationIds),
      otp_auth: cdktf.booleanToTerraform(this._otpAuth),
      ping_interval: cdktf.numberToTerraform(this._pingInterval),
      ping_timeout: cdktf.numberToTerraform(this._pingTimeout),
      port: cdktf.numberToTerraform(this._port),
      port_wg: cdktf.numberToTerraform(this._portWg),
      pre_connect_msg: cdktf.stringToTerraform(this._preConnectMsg),
      protocol: cdktf.stringToTerraform(this._protocol),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      restrict_routes: cdktf.booleanToTerraform(this._restrictRoutes),
      search_domain: cdktf.stringToTerraform(this._searchDomain),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      sso_auth: cdktf.booleanToTerraform(this._ssoAuth),
      status: cdktf.stringToTerraform(this._status),
      vxlan: cdktf.booleanToTerraform(this._vxlan),
      route: cdktf.listMapper(serverRouteToTerraform, true)(this._route.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_devices: {
        value: cdktf.stringToHclTerraform(this._allowedDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_address: {
        value: cdktf.stringToHclTerraform(this._bindAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_outside_dns: {
        value: cdktf.booleanToHclTerraform(this._blockOutsideDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_auth: {
        value: cdktf.booleanToHclTerraform(this._deviceAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dh_param_bits: {
        value: cdktf.numberToHclTerraform(this._dhParamBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_mapping: {
        value: cdktf.booleanToHclTerraform(this._dnsMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dynamic_firewall: {
        value: cdktf.booleanToHclTerraform(this._dynamicFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hash: {
        value: cdktf.stringToHclTerraform(this._hash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactive_timeout: {
        value: cdktf.numberToHclTerraform(this._inactiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inter_client: {
        value: cdktf.booleanToHclTerraform(this._interClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link_ping_interval: {
        value: cdktf.numberToHclTerraform(this._linkPingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_ping_timeout: {
        value: cdktf.numberToHclTerraform(this._linkPingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_clients: {
        value: cdktf.numberToHclTerraform(this._maxClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_devices: {
        value: cdktf.numberToHclTerraform(this._maxDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mss_fix: {
        value: cdktf.numberToHclTerraform(this._mssFix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_device: {
        value: cdktf.booleanToHclTerraform(this._multiDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_end: {
        value: cdktf.stringToHclTerraform(this._networkEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_mode: {
        value: cdktf.stringToHclTerraform(this._networkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_start: {
        value: cdktf.stringToHclTerraform(this._networkStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_wg: {
        value: cdktf.stringToHclTerraform(this._networkWg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      otp_auth: {
        value: cdktf.booleanToHclTerraform(this._otpAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ping_interval: {
        value: cdktf.numberToHclTerraform(this._pingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ping_timeout: {
        value: cdktf.numberToHclTerraform(this._pingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_wg: {
        value: cdktf.numberToHclTerraform(this._portWg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_connect_msg: {
        value: cdktf.stringToHclTerraform(this._preConnectMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_count: {
        value: cdktf.numberToHclTerraform(this._replicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_routes: {
        value: cdktf.booleanToHclTerraform(this._restrictRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search_domain: {
        value: cdktf.stringToHclTerraform(this._searchDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sso_auth: {
        value: cdktf.booleanToHclTerraform(this._ssoAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan: {
        value: cdktf.booleanToHclTerraform(this._vxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route: {
        value: cdktf.listMapperHcl(serverRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
