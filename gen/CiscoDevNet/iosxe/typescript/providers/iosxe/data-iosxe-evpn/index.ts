// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeEvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/evpn#device DataIosxeEvpn#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/evpn iosxe_evpn}
*/
export class DataIosxeEvpn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeEvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeEvpn to import
  * @param importFromId The id of the existing DataIosxeEvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeEvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/evpn iosxe_evpn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeEvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeEvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_evpn',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_gateway_mac_auto - computed: true, optional: false, required: false
  public get anycastGatewayMacAuto() {
    return this.getBooleanAttribute('anycast_gateway_mac_auto');
  }

  // default_gateway_advertise - computed: true, optional: false, required: false
  public get defaultGatewayAdvertise() {
    return this.getBooleanAttribute('default_gateway_advertise');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_duplication_limit - computed: true, optional: false, required: false
  public get ipDuplicationLimit() {
    return this.getNumberAttribute('ip_duplication_limit');
  }

  // ip_duplication_time - computed: true, optional: false, required: false
  public get ipDuplicationTime() {
    return this.getNumberAttribute('ip_duplication_time');
  }

  // logging_peer_state - computed: true, optional: false, required: false
  public get loggingPeerState() {
    return this.getBooleanAttribute('logging_peer_state');
  }

  // mac_duplication_limit - computed: true, optional: false, required: false
  public get macDuplicationLimit() {
    return this.getNumberAttribute('mac_duplication_limit');
  }

  // mac_duplication_time - computed: true, optional: false, required: false
  public get macDuplicationTime() {
    return this.getNumberAttribute('mac_duplication_time');
  }

  // replication_type_ingress - computed: true, optional: false, required: false
  public get replicationTypeIngress() {
    return this.getBooleanAttribute('replication_type_ingress');
  }

  // replication_type_mp2mp - computed: true, optional: false, required: false
  public get replicationTypeMp2Mp() {
    return this.getBooleanAttribute('replication_type_mp2mp');
  }

  // replication_type_p2mp - computed: true, optional: false, required: false
  public get replicationTypeP2Mp() {
    return this.getBooleanAttribute('replication_type_p2mp');
  }

  // replication_type_static - computed: true, optional: false, required: false
  public get replicationTypeStatic() {
    return this.getBooleanAttribute('replication_type_static');
  }

  // route_target_auto_vni - computed: true, optional: false, required: false
  public get routeTargetAutoVni() {
    return this.getBooleanAttribute('route_target_auto_vni');
  }

  // router_id_loopback - computed: true, optional: false, required: false
  public get routerIdLoopback() {
    return this.getNumberAttribute('router_id_loopback');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
