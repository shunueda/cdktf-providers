// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/forwardingoptions_evpn_vxlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingoptionsEvpnVxlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Routing instance if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/forwardingoptions_evpn_vxlan#routing_instance ForwardingoptionsEvpnVxlan#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Create VTEP tunnels to EVPN PE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/forwardingoptions_evpn_vxlan#shared_tunnels ForwardingoptionsEvpnVxlan#shared_tunnels}
  */
  readonly sharedTunnels?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/forwardingoptions_evpn_vxlan junos_forwardingoptions_evpn_vxlan}
*/
export class ForwardingoptionsEvpnVxlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_forwardingoptions_evpn_vxlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingoptionsEvpnVxlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingoptionsEvpnVxlan to import
  * @param importFromId The id of the existing ForwardingoptionsEvpnVxlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/forwardingoptions_evpn_vxlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingoptionsEvpnVxlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_forwardingoptions_evpn_vxlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/forwardingoptions_evpn_vxlan junos_forwardingoptions_evpn_vxlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingoptionsEvpnVxlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ForwardingoptionsEvpnVxlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_forwardingoptions_evpn_vxlan',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._routingInstance = config.routingInstance;
    this._sharedTunnels = config.sharedTunnels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // shared_tunnels - computed: false, optional: true, required: false
  private _sharedTunnels?: boolean | cdktf.IResolvable; 
  public get sharedTunnels() {
    return this.getBooleanAttribute('shared_tunnels');
  }
  public set sharedTunnels(value: boolean | cdktf.IResolvable) {
    this._sharedTunnels = value;
  }
  public resetSharedTunnels() {
    this._sharedTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedTunnelsInput() {
    return this._sharedTunnels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      shared_tunnels: cdktf.booleanToTerraform(this._sharedTunnels),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_tunnels: {
        value: cdktf.booleanToHclTerraform(this._sharedTunnels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
