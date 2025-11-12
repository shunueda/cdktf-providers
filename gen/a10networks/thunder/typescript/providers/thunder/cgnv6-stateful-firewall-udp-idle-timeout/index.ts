// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6StatefulFirewallUdpIdleTimeoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fast aging for idle sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout#fast Cgnv6StatefulFirewallUdpIdleTimeout#fast}
  */
  readonly fast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout#id Cgnv6StatefulFirewallUdpIdleTimeout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle timeout for IPv4 and IPv6 TCP established sessions (Idle timeout for IPv4 and IPv6 TCP established sessions (default: 300 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout#idle_timeout_val_port_range Cgnv6StatefulFirewallUdpIdleTimeout#idle_timeout_val_port_range}
  */
  readonly idleTimeoutValPortRange?: number;
  /**
  * Single Destination Port or Port Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout#port Cgnv6StatefulFirewallUdpIdleTimeout#port}
  */
  readonly port: number;
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout#port_end Cgnv6StatefulFirewallUdpIdleTimeout#port_end}
  */
  readonly portEnd: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout#uuid Cgnv6StatefulFirewallUdpIdleTimeout#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout thunder_cgnv6_stateful_firewall_udp_idle_timeout}
*/
export class Cgnv6StatefulFirewallUdpIdleTimeout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_udp_idle_timeout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6StatefulFirewallUdpIdleTimeout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6StatefulFirewallUdpIdleTimeout to import
  * @param importFromId The id of the existing Cgnv6StatefulFirewallUdpIdleTimeout that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6StatefulFirewallUdpIdleTimeout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_udp_idle_timeout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_udp_idle_timeout thunder_cgnv6_stateful_firewall_udp_idle_timeout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6StatefulFirewallUdpIdleTimeoutConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6StatefulFirewallUdpIdleTimeoutConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_udp_idle_timeout',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fast = config.fast;
    this._id = config.id;
    this._idleTimeoutValPortRange = config.idleTimeoutValPortRange;
    this._port = config.port;
    this._portEnd = config.portEnd;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fast - computed: false, optional: true, required: false
  private _fast?: number; 
  public get fast() {
    return this.getNumberAttribute('fast');
  }
  public set fast(value: number) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
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

  // idle_timeout_val_port_range - computed: false, optional: true, required: false
  private _idleTimeoutValPortRange?: number; 
  public get idleTimeoutValPortRange() {
    return this.getNumberAttribute('idle_timeout_val_port_range');
  }
  public set idleTimeoutValPortRange(value: number) {
    this._idleTimeoutValPortRange = value;
  }
  public resetIdleTimeoutValPortRange() {
    this._idleTimeoutValPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutValPortRangeInput() {
    return this._idleTimeoutValPortRange;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_end - computed: false, optional: false, required: true
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fast: cdktf.numberToTerraform(this._fast),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout_val_port_range: cdktf.numberToTerraform(this._idleTimeoutValPortRange),
      port: cdktf.numberToTerraform(this._port),
      port_end: cdktf.numberToTerraform(this._portEnd),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fast: {
        value: cdktf.numberToHclTerraform(this._fast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout_val_port_range: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutValPortRange),
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
      port_end: {
        value: cdktf.numberToHclTerraform(this._portEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
