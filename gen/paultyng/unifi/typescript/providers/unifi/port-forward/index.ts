// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The destination port for the forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#dst_port PortForward#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Specifies whether the port forwarding rule is enabled or not. Defaults to `true`. This will attribute will be removed in a future release. Instead of disabling a port forwarding rule you can remove it from your configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#enabled PortForward#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 address to forward traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#fwd_ip PortForward#fwd_ip}
  */
  readonly fwdIp?: string;
  /**
  * The port to forward traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#fwd_port PortForward#fwd_port}
  */
  readonly fwdPort?: string;
  /**
  * Specifies whether to log forwarded traffic or not. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#log PortForward#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * The name of the port forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#name PortForward#name}
  */
  readonly name?: string;
  /**
  * The port forwarding interface. Can be `wan`, `wan2`, or `both`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#port_forward_interface PortForward#port_forward_interface}
  */
  readonly portForwardInterface?: string;
  /**
  * The protocol for the port forwarding rule. Can be `tcp`, `udp`, or `tcp_udp`. Defaults to `tcp_udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#protocol PortForward#protocol}
  */
  readonly protocol?: string;
  /**
  * The name of the site to associate the port forwarding rule with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#site PortForward#site}
  */
  readonly site?: string;
  /**
  * The source IPv4 address (or CIDR) of the port forwarding rule. For all traffic, specify `any`. Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#src_ip PortForward#src_ip}
  */
  readonly srcIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward unifi_port_forward}
*/
export class PortForward extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_port_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortForward to import
  * @param importFromId The id of the existing PortForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_port_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_forward unifi_port_forward} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortForwardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PortForwardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unifi_port_forward',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstPort = config.dstPort;
    this._enabled = config.enabled;
    this._fwdIp = config.fwdIp;
    this._fwdPort = config.fwdPort;
    this._log = config.log;
    this._name = config.name;
    this._portForwardInterface = config.portForwardInterface;
    this._protocol = config.protocol;
    this._site = config.site;
    this._srcIp = config.srcIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
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

  // fwd_ip - computed: false, optional: true, required: false
  private _fwdIp?: string; 
  public get fwdIp() {
    return this.getStringAttribute('fwd_ip');
  }
  public set fwdIp(value: string) {
    this._fwdIp = value;
  }
  public resetFwdIp() {
    this._fwdIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIpInput() {
    return this._fwdIp;
  }

  // fwd_port - computed: false, optional: true, required: false
  private _fwdPort?: string; 
  public get fwdPort() {
    return this.getStringAttribute('fwd_port');
  }
  public set fwdPort(value: string) {
    this._fwdPort = value;
  }
  public resetFwdPort() {
    this._fwdPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPortInput() {
    return this._fwdPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // port_forward_interface - computed: false, optional: true, required: false
  private _portForwardInterface?: string; 
  public get portForwardInterface() {
    return this.getStringAttribute('port_forward_interface');
  }
  public set portForwardInterface(value: string) {
    this._portForwardInterface = value;
  }
  public resetPortForwardInterface() {
    this._portForwardInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardInterfaceInput() {
    return this._portForwardInterface;
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

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_port: cdktf.stringToTerraform(this._dstPort),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fwd_ip: cdktf.stringToTerraform(this._fwdIp),
      fwd_port: cdktf.stringToTerraform(this._fwdPort),
      log: cdktf.booleanToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      port_forward_interface: cdktf.stringToTerraform(this._portForwardInterface),
      protocol: cdktf.stringToTerraform(this._protocol),
      site: cdktf.stringToTerraform(this._site),
      src_ip: cdktf.stringToTerraform(this._srcIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
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
      fwd_ip: {
        value: cdktf.stringToHclTerraform(this._fwdIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_port: {
        value: cdktf.stringToHclTerraform(this._fwdPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.booleanToHclTerraform(this._log),
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
      port_forward_interface: {
        value: cdktf.stringToHclTerraform(this._portForwardInterface),
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ip: {
        value: cdktf.stringToHclTerraform(this._srcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
