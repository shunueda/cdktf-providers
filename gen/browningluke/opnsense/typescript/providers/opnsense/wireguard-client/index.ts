// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WireguardClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable this client config. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#enabled WireguardClient#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The persistent keepalive interval in seconds. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#keep_alive WireguardClient#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * Name of the client config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#name WireguardClient#name}
  */
  readonly name: string;
  /**
  * Shared secret (PSK) for this peer. You can generate a key using `wg genpsk` on a client with WireGuard installed. Must be a 256-bit base64 string. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#psk WireguardClient#psk}
  */
  readonly psk?: string;
  /**
  * Public key of this client config. Must be a 256-bit base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#public_key WireguardClient#public_key}
  */
  readonly publicKey: string;
  /**
  * The public IP address the endpoint listens to. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#server_address WireguardClient#server_address}
  */
  readonly serverAddress?: string;
  /**
  * The port the endpoint listens to. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#server_port WireguardClient#server_port}
  */
  readonly serverPort?: number;
  /**
  * List of addresses allowed to pass trough the tunnel adapter. Please use CIDR notation like `"10.0.0.1/24"`. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#tunnel_address WireguardClient#tunnel_address}
  */
  readonly tunnelAddress: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client opnsense_wireguard_client}
*/
export class WireguardClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_wireguard_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WireguardClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WireguardClient to import
  * @param importFromId The id of the existing WireguardClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WireguardClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_wireguard_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/wireguard_client opnsense_wireguard_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WireguardClientConfig
  */
  public constructor(scope: Construct, id: string, config: WireguardClientConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_wireguard_client',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._keepAlive = config.keepAlive;
    this._name = config.name;
    this._psk = config.psk;
    this._publicKey = config.publicKey;
    this._serverAddress = config.serverAddress;
    this._serverPort = config.serverPort;
    this._tunnelAddress = config.tunnelAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_alive - computed: true, optional: true, required: false
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
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

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
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

  // server_address - computed: true, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // tunnel_address - computed: false, optional: false, required: true
  private _tunnelAddress?: string[]; 
  public get tunnelAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_address'));
  }
  public set tunnelAddress(value: string[]) {
    this._tunnelAddress = value;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      keep_alive: cdktf.numberToTerraform(this._keepAlive),
      name: cdktf.stringToTerraform(this._name),
      psk: cdktf.stringToTerraform(this._psk),
      public_key: cdktf.stringToTerraform(this._publicKey),
      server_address: cdktf.stringToTerraform(this._serverAddress),
      server_port: cdktf.numberToTerraform(this._serverPort),
      tunnel_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_alive: {
        value: cdktf.numberToHclTerraform(this._keepAlive),
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
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
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
      server_address: {
        value: cdktf.stringToHclTerraform(this._serverAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
