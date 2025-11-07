// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_gre_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportWanVpnInterfaceGreFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_gre_feature#feature_profile_id DataSdwanTransportWanVpnInterfaceGreFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_gre_feature#id DataSdwanTransportWanVpnInterfaceGreFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Transport WAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_gre_feature#transport_wan_vpn_feature_id DataSdwanTransportWanVpnInterfaceGreFeature#transport_wan_vpn_feature_id}
  */
  readonly transportWanVpnFeatureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_gre_feature sdwan_transport_wan_vpn_interface_gre_feature}
*/
export class DataSdwanTransportWanVpnInterfaceGreFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_wan_vpn_interface_gre_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportWanVpnInterfaceGreFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportWanVpnInterfaceGreFeature to import
  * @param importFromId The id of the existing DataSdwanTransportWanVpnInterfaceGreFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_gre_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportWanVpnInterfaceGreFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_wan_vpn_interface_gre_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_gre_feature sdwan_transport_wan_vpn_interface_gre_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportWanVpnInterfaceGreFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportWanVpnInterfaceGreFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_wan_vpn_interface_gre_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
    this._id = config.id;
    this._transportWanVpnFeatureId = config.transportWanVpnFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_tunnel_type - computed: true, optional: false, required: false
  public get applicationTunnelType() {
    return this.getStringAttribute('application_tunnel_type');
  }

  // application_tunnel_type_variable - computed: true, optional: false, required: false
  public get applicationTunnelTypeVariable() {
    return this.getStringAttribute('application_tunnel_type_variable');
  }

  // clear_dont_fragment - computed: true, optional: false, required: false
  public get clearDontFragment() {
    return this.getBooleanAttribute('clear_dont_fragment');
  }

  // clear_dont_fragment_variable - computed: true, optional: false, required: false
  public get clearDontFragmentVariable() {
    return this.getStringAttribute('clear_dont_fragment_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // ip_mtu - computed: true, optional: false, required: false
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }

  // ip_mtu_variable - computed: true, optional: false, required: false
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // ipv4_subnet_mask - computed: true, optional: false, required: false
  public get ipv4SubnetMask() {
    return this.getStringAttribute('ipv4_subnet_mask');
  }

  // ipv4_subnet_mask_variable - computed: true, optional: false, required: false
  public get ipv4SubnetMaskVariable() {
    return this.getStringAttribute('ipv4_subnet_mask_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }

  // tcp_mss_variable - computed: true, optional: false, required: false
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
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

  // tunnel_destination_ipv4_address - computed: true, optional: false, required: false
  public get tunnelDestinationIpv4Address() {
    return this.getStringAttribute('tunnel_destination_ipv4_address');
  }

  // tunnel_destination_ipv4_address_variable - computed: true, optional: false, required: false
  public get tunnelDestinationIpv4AddressVariable() {
    return this.getStringAttribute('tunnel_destination_ipv4_address_variable');
  }

  // tunnel_route_via_loopback - computed: true, optional: false, required: false
  public get tunnelRouteViaLoopback() {
    return this.getStringAttribute('tunnel_route_via_loopback');
  }

  // tunnel_route_via_loopback_variable - computed: true, optional: false, required: false
  public get tunnelRouteViaLoopbackVariable() {
    return this.getStringAttribute('tunnel_route_via_loopback_variable');
  }

  // tunnel_source_interface - computed: true, optional: false, required: false
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }

  // tunnel_source_interface_loopback - computed: true, optional: false, required: false
  public get tunnelSourceInterfaceLoopback() {
    return this.getStringAttribute('tunnel_source_interface_loopback');
  }

  // tunnel_source_interface_loopback_variable - computed: true, optional: false, required: false
  public get tunnelSourceInterfaceLoopbackVariable() {
    return this.getStringAttribute('tunnel_source_interface_loopback_variable');
  }

  // tunnel_source_interface_variable - computed: true, optional: false, required: false
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }

  // tunnel_source_ipv4_address - computed: true, optional: false, required: false
  public get tunnelSourceIpv4Address() {
    return this.getStringAttribute('tunnel_source_ipv4_address');
  }

  // tunnel_source_ipv4_address_variable - computed: true, optional: false, required: false
  public get tunnelSourceIpv4AddressVariable() {
    return this.getStringAttribute('tunnel_source_ipv4_address_variable');
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
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
