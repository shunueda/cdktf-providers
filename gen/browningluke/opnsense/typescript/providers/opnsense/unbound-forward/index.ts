// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnboundForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * If a domain is entered here, queries for this specific domain will be forwarded to the specified server. Set to `""` to forward all queries to the specified server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward#domain UnboundForward#domain}
  */
  readonly domain: string;
  /**
  * Enable this query forward.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward#enabled UnboundForward#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IP address of DNS server to forward all requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward#server_ip UnboundForward#server_ip}
  */
  readonly serverIp: string;
  /**
  * Port of DNS server, for usual DNS use `53`, if you use DoT set it to `853`. Defaults to `53`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward#server_port UnboundForward#server_port}
  */
  readonly serverPort?: number;
  /**
  * The Common Name of the DNS server (e.g. `dns.example.com`). This field is required to verify its TLS certificate. DNS-over-TLS is susceptible to man-in-the-middle attacks unless certificates can be verified. Set to `""` to accept self-signed yet also potentially fraudulent certificates. Must be set when `type` is `dot`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward#verify_cn UnboundForward#verify_cn}
  */
  readonly verifyCn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward opnsense_unbound_forward}
*/
export class UnboundForward extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_unbound_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnboundForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnboundForward to import
  * @param importFromId The id of the existing UnboundForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnboundForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_unbound_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_forward opnsense_unbound_forward} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnboundForwardConfig
  */
  public constructor(scope: Construct, id: string, config: UnboundForwardConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_unbound_forward',
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
    this._domain = config.domain;
    this._enabled = config.enabled;
    this._serverIp = config.serverIp;
    this._serverPort = config.serverPort;
    this._verifyCn = config.verifyCn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_ip - computed: false, optional: false, required: true
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
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

  // verify_cn - computed: true, optional: true, required: false
  private _verifyCn?: string; 
  public get verifyCn() {
    return this.getStringAttribute('verify_cn');
  }
  public set verifyCn(value: string) {
    this._verifyCn = value;
  }
  public resetVerifyCn() {
    this._verifyCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCnInput() {
    return this._verifyCn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      enabled: cdktf.booleanToTerraform(this._enabled),
      server_ip: cdktf.stringToTerraform(this._serverIp),
      server_port: cdktf.numberToTerraform(this._serverPort),
      verify_cn: cdktf.stringToTerraform(this._verifyCn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      server_ip: {
        value: cdktf.stringToHclTerraform(this._serverIp),
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
      verify_cn: {
        value: cdktf.stringToHclTerraform(this._verifyCn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
