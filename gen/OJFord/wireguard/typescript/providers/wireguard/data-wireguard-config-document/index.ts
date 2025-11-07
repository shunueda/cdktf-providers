// https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWireguardConfigDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPs (or CIDR) to be assigned to the interface. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#addresses DataWireguardConfigDocument#addresses}
  */
  readonly addresses?: string[];
  /**
  * IPs or hostnames of Domain Name Servers to set as the interface's DNS search domains. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#dns DataWireguardConfigDocument#dns}
  */
  readonly dns?: string[];
  /**
  * A 32-bit fwmark for outgoing packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#firewall_mark DataWireguardConfigDocument#firewall_mark}
  */
  readonly firewallMark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#id DataWireguardConfigDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#listen_port DataWireguardConfigDocument#listen_port}
  */
  readonly listenPort?: number;
  /**
  * Manual MTU to override automatic discovery. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#mtu DataWireguardConfigDocument#mtu}
  */
  readonly mtu?: number;
  /**
  * Scripts to run before tearing down the interface. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#post_down DataWireguardConfigDocument#post_down}
  */
  readonly postDown?: string[];
  /**
  * Scripts to run after setting up the interface. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#post_up DataWireguardConfigDocument#post_up}
  */
  readonly postUp?: string[];
  /**
  * Scripts to run before tearing down the interface. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#pre_down DataWireguardConfigDocument#pre_down}
  */
  readonly preDown?: string[];
  /**
  * Script to run before setting up the interface. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#pre_up DataWireguardConfigDocument#pre_up}
  */
  readonly preUp?: string[];
  /**
  * The base64 private key for this peer's interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#private_key DataWireguardConfigDocument#private_key}
  */
  readonly privateKey?: string;
  /**
  * Controls the routing table (or "off") to which routes are added. (`wg-quick`/apps only.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#routing_table DataWireguardConfigDocument#routing_table}
  */
  readonly routingTable?: string;
  /**
  * peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#peer DataWireguardConfigDocument#peer}
  */
  readonly peer?: DataWireguardConfigDocumentPeer[] | cdktf.IResolvable;
}
export interface DataWireguardConfigDocumentPeer {
  /**
  * IPs (or CIDR) allowed for traffic to/from this peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#allowed_ips DataWireguardConfigDocument#allowed_ips}
  */
  readonly allowedIps?: string[];
  /**
  * A description for this peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#description DataWireguardConfigDocument#description}
  */
  readonly description?: string;
  /**
  * An endpoint IP:port or hostname:port at which this peer can be reached initially.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#endpoint DataWireguardConfigDocument#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Period in seconds (or "off") after which to ping the peer to keep a stateful firewall or NAT mapping valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#persistent_keepalive DataWireguardConfigDocument#persistent_keepalive}
  */
  readonly persistentKeepalive?: number;
  /**
  * A base64 preshared key from this peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#preshared_key DataWireguardConfigDocument#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * The base64 public key for this peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#public_key DataWireguardConfigDocument#public_key}
  */
  readonly publicKey: string;
}

export function dataWireguardConfigDocumentPeerToTerraform(struct?: DataWireguardConfigDocumentPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIps),
    description: cdktf.stringToTerraform(struct!.description),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    persistent_keepalive: cdktf.numberToTerraform(struct!.persistentKeepalive),
    preshared_key: cdktf.stringToTerraform(struct!.presharedKey),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function dataWireguardConfigDocumentPeerToHclTerraform(struct?: DataWireguardConfigDocumentPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.persistentKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preshared_key: {
      value: cdktf.stringToHclTerraform(struct!.presharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWireguardConfigDocumentPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWireguardConfigDocumentPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIps = this._allowedIps;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._persistentKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentKeepalive = this._persistentKeepalive;
    }
    if (this._presharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.presharedKey = this._presharedKey;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWireguardConfigDocumentPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIps = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._persistentKeepalive = undefined;
      this._presharedKey = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIps = value.allowedIps;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._persistentKeepalive = value.persistentKeepalive;
      this._presharedKey = value.presharedKey;
      this._publicKey = value.publicKey;
    }
  }

  // allowed_ips - computed: false, optional: true, required: false
  private _allowedIps?: string[]; 
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[]) {
    this._allowedIps = value;
  }
  public resetAllowedIps() {
    this._allowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // persistent_keepalive - computed: false, optional: true, required: false
  private _persistentKeepalive?: number; 
  public get persistentKeepalive() {
    return this.getNumberAttribute('persistent_keepalive');
  }
  public set persistentKeepalive(value: number) {
    this._persistentKeepalive = value;
  }
  public resetPersistentKeepalive() {
    this._persistentKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentKeepaliveInput() {
    return this._persistentKeepalive;
  }

  // preshared_key - computed: false, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}

export class DataWireguardConfigDocumentPeerList extends cdktf.ComplexList {
  public internalValue? : DataWireguardConfigDocumentPeer[] | cdktf.IResolvable

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
  public get(index: number): DataWireguardConfigDocumentPeerOutputReference {
    return new DataWireguardConfigDocumentPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document wireguard_config_document}
*/
export class DataWireguardConfigDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wireguard_config_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWireguardConfigDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWireguardConfigDocument to import
  * @param importFromId The id of the existing DataWireguardConfigDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWireguardConfigDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wireguard_config_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/data-sources/config_document wireguard_config_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWireguardConfigDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWireguardConfigDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wireguard_config_document',
      terraformGeneratorMetadata: {
        providerName: 'wireguard',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses = config.addresses;
    this._dns = config.dns;
    this._firewallMark = config.firewallMark;
    this._id = config.id;
    this._listenPort = config.listenPort;
    this._mtu = config.mtu;
    this._postDown = config.postDown;
    this._postUp = config.postUp;
    this._preDown = config.preDown;
    this._preUp = config.preUp;
    this._privateKey = config.privateKey;
    this._routingTable = config.routingTable;
    this._peer.internalValue = config.peer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('addresses'));
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // conf - computed: true, optional: false, required: false
  public get conf() {
    return this.getStringAttribute('conf');
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return cdktf.Fn.tolist(this.getListAttribute('dns'));
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // firewall_mark - computed: false, optional: true, required: false
  private _firewallMark?: string; 
  public get firewallMark() {
    return this.getStringAttribute('firewall_mark');
  }
  public set firewallMark(value: string) {
    this._firewallMark = value;
  }
  public resetFirewallMark() {
    this._firewallMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallMarkInput() {
    return this._firewallMark;
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

  // listen_port - computed: false, optional: true, required: false
  private _listenPort?: number; 
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }
  public set listenPort(value: number) {
    this._listenPort = value;
  }
  public resetListenPort() {
    this._listenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // post_down - computed: false, optional: true, required: false
  private _postDown?: string[]; 
  public get postDown() {
    return this.getListAttribute('post_down');
  }
  public set postDown(value: string[]) {
    this._postDown = value;
  }
  public resetPostDown() {
    this._postDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postDownInput() {
    return this._postDown;
  }

  // post_up - computed: false, optional: true, required: false
  private _postUp?: string[]; 
  public get postUp() {
    return this.getListAttribute('post_up');
  }
  public set postUp(value: string[]) {
    this._postUp = value;
  }
  public resetPostUp() {
    this._postUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postUpInput() {
    return this._postUp;
  }

  // pre_down - computed: false, optional: true, required: false
  private _preDown?: string[]; 
  public get preDown() {
    return this.getListAttribute('pre_down');
  }
  public set preDown(value: string[]) {
    this._preDown = value;
  }
  public resetPreDown() {
    this._preDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preDownInput() {
    return this._preDown;
  }

  // pre_up - computed: false, optional: true, required: false
  private _preUp?: string[]; 
  public get preUp() {
    return this.getListAttribute('pre_up');
  }
  public set preUp(value: string[]) {
    this._preUp = value;
  }
  public resetPreUp() {
    this._preUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preUpInput() {
    return this._preUp;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // routing_table - computed: false, optional: true, required: false
  private _routingTable?: string; 
  public get routingTable() {
    return this.getStringAttribute('routing_table');
  }
  public set routingTable(value: string) {
    this._routingTable = value;
  }
  public resetRoutingTable() {
    this._routingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable;
  }

  // peer - computed: false, optional: true, required: false
  private _peer = new DataWireguardConfigDocumentPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: DataWireguardConfigDocumentPeer[] | cdktf.IResolvable) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
      firewall_mark: cdktf.stringToTerraform(this._firewallMark),
      id: cdktf.stringToTerraform(this._id),
      listen_port: cdktf.numberToTerraform(this._listenPort),
      mtu: cdktf.numberToTerraform(this._mtu),
      post_down: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postDown),
      post_up: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postUp),
      pre_down: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preDown),
      pre_up: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preUp),
      private_key: cdktf.stringToTerraform(this._privateKey),
      routing_table: cdktf.stringToTerraform(this._routingTable),
      peer: cdktf.listMapper(dataWireguardConfigDocumentPeerToTerraform, true)(this._peer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firewall_mark: {
        value: cdktf.stringToHclTerraform(this._firewallMark),
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
      listen_port: {
        value: cdktf.numberToHclTerraform(this._listenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_down: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postDown),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      post_up: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postUp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pre_down: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preDown),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pre_up: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preUp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_table: {
        value: cdktf.stringToHclTerraform(this._routingTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer: {
        value: cdktf.listMapperHcl(dataWireguardConfigDocumentPeerToHclTerraform, true)(this._peer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWireguardConfigDocumentPeerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
