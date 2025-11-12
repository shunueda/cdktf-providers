// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6FeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature#feature_profile_id TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Transport Routing OSPFv4 IPv6 Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature#transport_routing_ospfv3_ipv6_feature_id TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature#transport_routing_ospfv3_ipv6_feature_id}
  */
  readonly transportRoutingOspfv3Ipv6FeatureId: string;
  /**
  * Transport WAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature#transport_wan_vpn_feature_id TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature#transport_wan_vpn_feature_id}
  */
  readonly transportWanVpnFeatureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature sdwan_transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature}
*/
export class TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature to import
  * @param importFromId The id of the existing TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6Feature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature sdwan_transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6FeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportWanVpnFeatureAssociateRoutingOspfv3Ipv6FeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_wan_vpn_feature_associate_routing_ospfv3_ipv6_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._transportRoutingOspfv3Ipv6FeatureId = config.transportRoutingOspfv3Ipv6FeatureId;
    this._transportWanVpnFeatureId = config.transportWanVpnFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // transport_routing_ospfv3_ipv6_feature_id - computed: false, optional: false, required: true
  private _transportRoutingOspfv3Ipv6FeatureId?: string; 
  public get transportRoutingOspfv3Ipv6FeatureId() {
    return this.getStringAttribute('transport_routing_ospfv3_ipv6_feature_id');
  }
  public set transportRoutingOspfv3Ipv6FeatureId(value: string) {
    this._transportRoutingOspfv3Ipv6FeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportRoutingOspfv3Ipv6FeatureIdInput() {
    return this._transportRoutingOspfv3Ipv6FeatureId;
  }

  // transport_wan_vpn_feature_id - computed: false, optional: false, required: true
  private _transportWanVpnFeatureId?: string; 
  public get transportWanVpnFeatureId() {
    return this.getStringAttribute('transport_wan_vpn_feature_id');
  }
  public set transportWanVpnFeatureId(value: string) {
    this._transportWanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportWanVpnFeatureIdInput() {
    return this._transportWanVpnFeatureId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      transport_routing_ospfv3_ipv6_feature_id: cdktf.stringToTerraform(this._transportRoutingOspfv3Ipv6FeatureId),
      transport_wan_vpn_feature_id: cdktf.stringToTerraform(this._transportWanVpnFeatureId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_routing_ospfv3_ipv6_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportRoutingOspfv3Ipv6FeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_wan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportWanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
