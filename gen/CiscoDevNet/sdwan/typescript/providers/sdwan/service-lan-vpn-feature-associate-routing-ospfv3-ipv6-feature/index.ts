// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6FeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature#feature_profile_id ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature#service_lan_vpn_feature_id ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
  /**
  * Service Routing OSPFv3 IPv6 Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature#service_routing_ospfv3_ipv6_feature_id ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature#service_routing_ospfv3_ipv6_feature_id}
  */
  readonly serviceRoutingOspfv3Ipv6FeatureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature}
*/
export class ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature to import
  * @param importFromId The id of the existing ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6Feature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6FeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLanVpnFeatureAssociateRoutingOspfv3Ipv6FeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv6_feature',
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
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
    this._serviceRoutingOspfv3Ipv6FeatureId = config.serviceRoutingOspfv3Ipv6FeatureId;
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

  // service_lan_vpn_feature_id - computed: false, optional: false, required: true
  private _serviceLanVpnFeatureId?: string; 
  public get serviceLanVpnFeatureId() {
    return this.getStringAttribute('service_lan_vpn_feature_id');
  }
  public set serviceLanVpnFeatureId(value: string) {
    this._serviceLanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLanVpnFeatureIdInput() {
    return this._serviceLanVpnFeatureId;
  }

  // service_routing_ospfv3_ipv6_feature_id - computed: false, optional: false, required: true
  private _serviceRoutingOspfv3Ipv6FeatureId?: string; 
  public get serviceRoutingOspfv3Ipv6FeatureId() {
    return this.getStringAttribute('service_routing_ospfv3_ipv6_feature_id');
  }
  public set serviceRoutingOspfv3Ipv6FeatureId(value: string) {
    this._serviceRoutingOspfv3Ipv6FeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoutingOspfv3Ipv6FeatureIdInput() {
    return this._serviceRoutingOspfv3Ipv6FeatureId;
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
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
      service_routing_ospfv3_ipv6_feature_id: cdktf.stringToTerraform(this._serviceRoutingOspfv3Ipv6FeatureId),
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
      service_lan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceLanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_routing_ospfv3_ipv6_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceRoutingOspfv3Ipv6FeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
