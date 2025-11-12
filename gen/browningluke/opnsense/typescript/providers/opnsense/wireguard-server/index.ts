// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WireguardServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disables installation of routes. Usually you only enable this to do own routing decisions via a local gateway and gateway rules. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#disable_routes WireguardServer#disable_routes}
  */
  readonly disableRoutes?: boolean | cdktf.IResolvable;
  /**
  * The interface specific DNS servers. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#dns WireguardServer#dns}
  */
  readonly dns?: string[];
  /**
  * Enable this server. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#enabled WireguardServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The gateway IP here when using Disable Routes feature. You also have to add this as a gateway in OPNsense. Must be set when `disable_routes` is `true`. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#gateway WireguardServer#gateway}
  */
  readonly gateway?: string;
  /**
  * The interface MTU for this interface. Set to `-1` to use the MTU from main interface. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#mtu WireguardServer#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#name WireguardServer#name}
  */
  readonly name: string;
  /**
  * List of peer IDs for this server. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#peers WireguardServer#peers}
  */
  readonly peers?: string[];
  /**
  * The fixed port for this instance to listen on. The standard port range starts at 51820. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#port WireguardServer#port}
  */
  readonly port?: number;
  /**
  * Private key of this server. Must be a 256-bit base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#private_key WireguardServer#private_key}
  */
  readonly privateKey: string;
  /**
  * Public key of this server. Must be a 256-bit base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#public_key WireguardServer#public_key}
  */
  readonly publicKey: string;
  /**
  * List of addresses to configure on the tunnel adapter. Please use CIDR notation like `"10.0.0.1/24"`. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#tunnel_address WireguardServer#tunnel_address}
  */
  readonly tunnelAddress?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server opnsense_wireguard_server}
*/
export class WireguardServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_wireguard_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WireguardServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WireguardServer to import
  * @param importFromId The id of the existing WireguardServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WireguardServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_wireguard_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_server opnsense_wireguard_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WireguardServerConfig
  */
  public constructor(scope: Construct, id: string, config: WireguardServerConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_wireguard_server',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableRoutes = config.disableRoutes;
    this._dns = config.dns;
    this._enabled = config.enabled;
    this._gateway = config.gateway;
    this._mtu = config.mtu;
    this._name = config.name;
    this._peers = config.peers;
    this._port = config.port;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
    this._tunnelAddress = config.tunnelAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_routes - computed: true, optional: true, required: false
  private _disableRoutes?: boolean | cdktf.IResolvable; 
  public get disableRoutes() {
    return this.getBooleanAttribute('disable_routes');
  }
  public set disableRoutes(value: boolean | cdktf.IResolvable) {
    this._disableRoutes = value;
  }
  public resetDisableRoutes() {
    this._disableRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRoutesInput() {
    return this._disableRoutes;
  }

  // dns - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // mtu - computed: true, optional: true, required: false
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

  // peers - computed: true, optional: true, required: false
  private _peers?: string[]; 
  public get peers() {
    return cdktf.Fn.tolist(this.getListAttribute('peers'));
  }
  public set peers(value: string[]) {
    this._peers = value;
  }
  public resetPeers() {
    this._peers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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

  // tunnel_address - computed: true, optional: true, required: false
  private _tunnelAddress?: string[]; 
  public get tunnelAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_address'));
  }
  public set tunnelAddress(value: string[]) {
    this._tunnelAddress = value;
  }
  public resetTunnelAddress() {
    this._tunnelAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAddressInput() {
    return this._tunnelAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_routes: cdktf.booleanToTerraform(this._disableRoutes),
      dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gateway: cdktf.stringToTerraform(this._gateway),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      peers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peers),
      port: cdktf.numberToTerraform(this._port),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
      tunnel_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_routes: {
        value: cdktf.booleanToHclTerraform(this._disableRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnelAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
