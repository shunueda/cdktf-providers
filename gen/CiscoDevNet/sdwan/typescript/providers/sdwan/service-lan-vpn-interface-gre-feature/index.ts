// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLanVpnInterfaceGreFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Application Tunnel Type
  *   - Choices: `none`, `sig`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#application_tunnel_type ServiceLanVpnInterfaceGreFeature#application_tunnel_type}
  */
  readonly applicationTunnelType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#application_tunnel_type_variable ServiceLanVpnInterfaceGreFeature#application_tunnel_type_variable}
  */
  readonly applicationTunnelTypeVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#clear_dont_fragment ServiceLanVpnInterfaceGreFeature#clear_dont_fragment}
  */
  readonly clearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#clear_dont_fragment_variable ServiceLanVpnInterfaceGreFeature#clear_dont_fragment_variable}
  */
  readonly clearDontFragmentVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#description ServiceLanVpnInterfaceGreFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#feature_profile_id ServiceLanVpnInterfaceGreFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#interface_description ServiceLanVpnInterfaceGreFeature#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#interface_description_variable ServiceLanVpnInterfaceGreFeature#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface name (1..255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#interface_name ServiceLanVpnInterfaceGreFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#interface_name_variable ServiceLanVpnInterfaceGreFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Interface MTU <576..9976>, in bytes
  *   - Range: `576`-`9976`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#ip_mtu ServiceLanVpnInterfaceGreFeature#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#ip_mtu_variable ServiceLanVpnInterfaceGreFeature#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#ipv4_address ServiceLanVpnInterfaceGreFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#ipv4_address_variable ServiceLanVpnInterfaceGreFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#ipv4_subnet_mask ServiceLanVpnInterfaceGreFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#ipv4_subnet_mask_variable ServiceLanVpnInterfaceGreFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#name ServiceLanVpnInterfaceGreFeature#name}
  */
  readonly name: string;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#service_lan_vpn_feature_id ServiceLanVpnInterfaceGreFeature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
  /**
  * Administrative state
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#shutdown ServiceLanVpnInterfaceGreFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#shutdown_variable ServiceLanVpnInterfaceGreFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tcp_mss ServiceLanVpnInterfaceGreFeature#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tcp_mss_variable ServiceLanVpnInterfaceGreFeature#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Tunnel destination IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_destination_ipv4_address ServiceLanVpnInterfaceGreFeature#tunnel_destination_ipv4_address}
  */
  readonly tunnelDestinationIpv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_destination_ipv4_address_variable ServiceLanVpnInterfaceGreFeature#tunnel_destination_ipv4_address_variable}
  */
  readonly tunnelDestinationIpv4AddressVariable?: string;
  /**
  * <1..32 characters> Interface name, can't be Loopback interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_route_via_loopback ServiceLanVpnInterfaceGreFeature#tunnel_route_via_loopback}
  */
  readonly tunnelRouteViaLoopback?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_route_via_loopback_variable ServiceLanVpnInterfaceGreFeature#tunnel_route_via_loopback_variable}
  */
  readonly tunnelRouteViaLoopbackVariable?: string;
  /**
  * <1..32 characters> Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_source_interface ServiceLanVpnInterfaceGreFeature#tunnel_source_interface}
  */
  readonly tunnelSourceInterface?: string;
  /**
  * <1..32 characters> Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_source_interface_loopback ServiceLanVpnInterfaceGreFeature#tunnel_source_interface_loopback}
  */
  readonly tunnelSourceInterfaceLoopback?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_source_interface_loopback_variable ServiceLanVpnInterfaceGreFeature#tunnel_source_interface_loopback_variable}
  */
  readonly tunnelSourceInterfaceLoopbackVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_source_interface_variable ServiceLanVpnInterfaceGreFeature#tunnel_source_interface_variable}
  */
  readonly tunnelSourceInterfaceVariable?: string;
  /**
  * Tunnel source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_source_ipv4_address ServiceLanVpnInterfaceGreFeature#tunnel_source_ipv4_address}
  */
  readonly tunnelSourceIpv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#tunnel_source_ipv4_address_variable ServiceLanVpnInterfaceGreFeature#tunnel_source_ipv4_address_variable}
  */
  readonly tunnelSourceIpv4AddressVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature sdwan_service_lan_vpn_interface_gre_feature}
*/
export class ServiceLanVpnInterfaceGreFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_interface_gre_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLanVpnInterfaceGreFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLanVpnInterfaceGreFeature to import
  * @param importFromId The id of the existing ServiceLanVpnInterfaceGreFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLanVpnInterfaceGreFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_interface_gre_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_gre_feature sdwan_service_lan_vpn_interface_gre_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLanVpnInterfaceGreFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLanVpnInterfaceGreFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_interface_gre_feature',
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
    this._applicationTunnelType = config.applicationTunnelType;
    this._applicationTunnelTypeVariable = config.applicationTunnelTypeVariable;
    this._clearDontFragment = config.clearDontFragment;
    this._clearDontFragmentVariable = config.clearDontFragmentVariable;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv4SubnetMask = config.ipv4SubnetMask;
    this._ipv4SubnetMaskVariable = config.ipv4SubnetMaskVariable;
    this._name = config.name;
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._tunnelDestinationIpv4Address = config.tunnelDestinationIpv4Address;
    this._tunnelDestinationIpv4AddressVariable = config.tunnelDestinationIpv4AddressVariable;
    this._tunnelRouteViaLoopback = config.tunnelRouteViaLoopback;
    this._tunnelRouteViaLoopbackVariable = config.tunnelRouteViaLoopbackVariable;
    this._tunnelSourceInterface = config.tunnelSourceInterface;
    this._tunnelSourceInterfaceLoopback = config.tunnelSourceInterfaceLoopback;
    this._tunnelSourceInterfaceLoopbackVariable = config.tunnelSourceInterfaceLoopbackVariable;
    this._tunnelSourceInterfaceVariable = config.tunnelSourceInterfaceVariable;
    this._tunnelSourceIpv4Address = config.tunnelSourceIpv4Address;
    this._tunnelSourceIpv4AddressVariable = config.tunnelSourceIpv4AddressVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_tunnel_type - computed: false, optional: true, required: false
  private _applicationTunnelType?: string; 
  public get applicationTunnelType() {
    return this.getStringAttribute('application_tunnel_type');
  }
  public set applicationTunnelType(value: string) {
    this._applicationTunnelType = value;
  }
  public resetApplicationTunnelType() {
    this._applicationTunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTunnelTypeInput() {
    return this._applicationTunnelType;
  }

  // application_tunnel_type_variable - computed: false, optional: true, required: false
  private _applicationTunnelTypeVariable?: string; 
  public get applicationTunnelTypeVariable() {
    return this.getStringAttribute('application_tunnel_type_variable');
  }
  public set applicationTunnelTypeVariable(value: string) {
    this._applicationTunnelTypeVariable = value;
  }
  public resetApplicationTunnelTypeVariable() {
    this._applicationTunnelTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTunnelTypeVariableInput() {
    return this._applicationTunnelTypeVariable;
  }

  // clear_dont_fragment - computed: false, optional: true, required: false
  private _clearDontFragment?: boolean | cdktf.IResolvable; 
  public get clearDontFragment() {
    return this.getBooleanAttribute('clear_dont_fragment');
  }
  public set clearDontFragment(value: boolean | cdktf.IResolvable) {
    this._clearDontFragment = value;
  }
  public resetClearDontFragment() {
    this._clearDontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentInput() {
    return this._clearDontFragment;
  }

  // clear_dont_fragment_variable - computed: false, optional: true, required: false
  private _clearDontFragmentVariable?: string; 
  public get clearDontFragmentVariable() {
    return this.getStringAttribute('clear_dont_fragment_variable');
  }
  public set clearDontFragmentVariable(value: string) {
    this._clearDontFragmentVariable = value;
  }
  public resetClearDontFragmentVariable() {
    this._clearDontFragmentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentVariableInput() {
    return this._clearDontFragmentVariable;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_description_variable - computed: false, optional: true, required: false
  private _interfaceDescriptionVariable?: string; 
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }
  public set interfaceDescriptionVariable(value: string) {
    this._interfaceDescriptionVariable = value;
  }
  public resetInterfaceDescriptionVariable() {
    this._interfaceDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionVariableInput() {
    return this._interfaceDescriptionVariable;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // ip_mtu - computed: false, optional: true, required: false
  private _ipMtu?: number; 
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }
  public set ipMtu(value: number) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
  }

  // ip_mtu_variable - computed: false, optional: true, required: false
  private _ipMtuVariable?: string; 
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }
  public set ipMtuVariable(value: string) {
    this._ipMtuVariable = value;
  }
  public resetIpMtuVariable() {
    this._ipMtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuVariableInput() {
    return this._ipMtuVariable;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // ipv4_subnet_mask - computed: false, optional: true, required: false
  private _ipv4SubnetMask?: string; 
  public get ipv4SubnetMask() {
    return this.getStringAttribute('ipv4_subnet_mask');
  }
  public set ipv4SubnetMask(value: string) {
    this._ipv4SubnetMask = value;
  }
  public resetIpv4SubnetMask() {
    this._ipv4SubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskInput() {
    return this._ipv4SubnetMask;
  }

  // ipv4_subnet_mask_variable - computed: false, optional: true, required: false
  private _ipv4SubnetMaskVariable?: string; 
  public get ipv4SubnetMaskVariable() {
    return this.getStringAttribute('ipv4_subnet_mask_variable');
  }
  public set ipv4SubnetMaskVariable(value: string) {
    this._ipv4SubnetMaskVariable = value;
  }
  public resetIpv4SubnetMaskVariable() {
    this._ipv4SubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskVariableInput() {
    return this._ipv4SubnetMaskVariable;
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

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: number; 
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }
  public set tcpMss(value: number) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // tcp_mss_variable - computed: false, optional: true, required: false
  private _tcpMssVariable?: string; 
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }
  public set tcpMssVariable(value: string) {
    this._tcpMssVariable = value;
  }
  public resetTcpMssVariable() {
    this._tcpMssVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssVariableInput() {
    return this._tcpMssVariable;
  }

  // tunnel_destination_ipv4_address - computed: false, optional: true, required: false
  private _tunnelDestinationIpv4Address?: string; 
  public get tunnelDestinationIpv4Address() {
    return this.getStringAttribute('tunnel_destination_ipv4_address');
  }
  public set tunnelDestinationIpv4Address(value: string) {
    this._tunnelDestinationIpv4Address = value;
  }
  public resetTunnelDestinationIpv4Address() {
    this._tunnelDestinationIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationIpv4AddressInput() {
    return this._tunnelDestinationIpv4Address;
  }

  // tunnel_destination_ipv4_address_variable - computed: false, optional: true, required: false
  private _tunnelDestinationIpv4AddressVariable?: string; 
  public get tunnelDestinationIpv4AddressVariable() {
    return this.getStringAttribute('tunnel_destination_ipv4_address_variable');
  }
  public set tunnelDestinationIpv4AddressVariable(value: string) {
    this._tunnelDestinationIpv4AddressVariable = value;
  }
  public resetTunnelDestinationIpv4AddressVariable() {
    this._tunnelDestinationIpv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationIpv4AddressVariableInput() {
    return this._tunnelDestinationIpv4AddressVariable;
  }

  // tunnel_route_via_loopback - computed: false, optional: true, required: false
  private _tunnelRouteViaLoopback?: string; 
  public get tunnelRouteViaLoopback() {
    return this.getStringAttribute('tunnel_route_via_loopback');
  }
  public set tunnelRouteViaLoopback(value: string) {
    this._tunnelRouteViaLoopback = value;
  }
  public resetTunnelRouteViaLoopback() {
    this._tunnelRouteViaLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaLoopbackInput() {
    return this._tunnelRouteViaLoopback;
  }

  // tunnel_route_via_loopback_variable - computed: false, optional: true, required: false
  private _tunnelRouteViaLoopbackVariable?: string; 
  public get tunnelRouteViaLoopbackVariable() {
    return this.getStringAttribute('tunnel_route_via_loopback_variable');
  }
  public set tunnelRouteViaLoopbackVariable(value: string) {
    this._tunnelRouteViaLoopbackVariable = value;
  }
  public resetTunnelRouteViaLoopbackVariable() {
    this._tunnelRouteViaLoopbackVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaLoopbackVariableInput() {
    return this._tunnelRouteViaLoopbackVariable;
  }

  // tunnel_source_interface - computed: false, optional: true, required: false
  private _tunnelSourceInterface?: string; 
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }
  public set tunnelSourceInterface(value: string) {
    this._tunnelSourceInterface = value;
  }
  public resetTunnelSourceInterface() {
    this._tunnelSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceInput() {
    return this._tunnelSourceInterface;
  }

  // tunnel_source_interface_loopback - computed: false, optional: true, required: false
  private _tunnelSourceInterfaceLoopback?: string; 
  public get tunnelSourceInterfaceLoopback() {
    return this.getStringAttribute('tunnel_source_interface_loopback');
  }
  public set tunnelSourceInterfaceLoopback(value: string) {
    this._tunnelSourceInterfaceLoopback = value;
  }
  public resetTunnelSourceInterfaceLoopback() {
    this._tunnelSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceLoopbackInput() {
    return this._tunnelSourceInterfaceLoopback;
  }

  // tunnel_source_interface_loopback_variable - computed: false, optional: true, required: false
  private _tunnelSourceInterfaceLoopbackVariable?: string; 
  public get tunnelSourceInterfaceLoopbackVariable() {
    return this.getStringAttribute('tunnel_source_interface_loopback_variable');
  }
  public set tunnelSourceInterfaceLoopbackVariable(value: string) {
    this._tunnelSourceInterfaceLoopbackVariable = value;
  }
  public resetTunnelSourceInterfaceLoopbackVariable() {
    this._tunnelSourceInterfaceLoopbackVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceLoopbackVariableInput() {
    return this._tunnelSourceInterfaceLoopbackVariable;
  }

  // tunnel_source_interface_variable - computed: false, optional: true, required: false
  private _tunnelSourceInterfaceVariable?: string; 
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }
  public set tunnelSourceInterfaceVariable(value: string) {
    this._tunnelSourceInterfaceVariable = value;
  }
  public resetTunnelSourceInterfaceVariable() {
    this._tunnelSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceVariableInput() {
    return this._tunnelSourceInterfaceVariable;
  }

  // tunnel_source_ipv4_address - computed: false, optional: true, required: false
  private _tunnelSourceIpv4Address?: string; 
  public get tunnelSourceIpv4Address() {
    return this.getStringAttribute('tunnel_source_ipv4_address');
  }
  public set tunnelSourceIpv4Address(value: string) {
    this._tunnelSourceIpv4Address = value;
  }
  public resetTunnelSourceIpv4Address() {
    this._tunnelSourceIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceIpv4AddressInput() {
    return this._tunnelSourceIpv4Address;
  }

  // tunnel_source_ipv4_address_variable - computed: false, optional: true, required: false
  private _tunnelSourceIpv4AddressVariable?: string; 
  public get tunnelSourceIpv4AddressVariable() {
    return this.getStringAttribute('tunnel_source_ipv4_address_variable');
  }
  public set tunnelSourceIpv4AddressVariable(value: string) {
    this._tunnelSourceIpv4AddressVariable = value;
  }
  public resetTunnelSourceIpv4AddressVariable() {
    this._tunnelSourceIpv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceIpv4AddressVariableInput() {
    return this._tunnelSourceIpv4AddressVariable;
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
      application_tunnel_type: cdktf.stringToTerraform(this._applicationTunnelType),
      application_tunnel_type_variable: cdktf.stringToTerraform(this._applicationTunnelTypeVariable),
      clear_dont_fragment: cdktf.booleanToTerraform(this._clearDontFragment),
      clear_dont_fragment_variable: cdktf.stringToTerraform(this._clearDontFragmentVariable),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv4_subnet_mask: cdktf.stringToTerraform(this._ipv4SubnetMask),
      ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._ipv4SubnetMaskVariable),
      name: cdktf.stringToTerraform(this._name),
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      tunnel_destination_ipv4_address: cdktf.stringToTerraform(this._tunnelDestinationIpv4Address),
      tunnel_destination_ipv4_address_variable: cdktf.stringToTerraform(this._tunnelDestinationIpv4AddressVariable),
      tunnel_route_via_loopback: cdktf.stringToTerraform(this._tunnelRouteViaLoopback),
      tunnel_route_via_loopback_variable: cdktf.stringToTerraform(this._tunnelRouteViaLoopbackVariable),
      tunnel_source_interface: cdktf.stringToTerraform(this._tunnelSourceInterface),
      tunnel_source_interface_loopback: cdktf.stringToTerraform(this._tunnelSourceInterfaceLoopback),
      tunnel_source_interface_loopback_variable: cdktf.stringToTerraform(this._tunnelSourceInterfaceLoopbackVariable),
      tunnel_source_interface_variable: cdktf.stringToTerraform(this._tunnelSourceInterfaceVariable),
      tunnel_source_ipv4_address: cdktf.stringToTerraform(this._tunnelSourceIpv4Address),
      tunnel_source_ipv4_address_variable: cdktf.stringToTerraform(this._tunnelSourceIpv4AddressVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_tunnel_type: {
        value: cdktf.stringToHclTerraform(this._applicationTunnelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_tunnel_type_variable: {
        value: cdktf.stringToHclTerraform(this._applicationTunnelTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_dont_fragment: {
        value: cdktf.booleanToHclTerraform(this._clearDontFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clear_dont_fragment_variable: {
        value: cdktf.stringToHclTerraform(this._clearDontFragmentVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description: {
        value: cdktf.stringToHclTerraform(this._interfaceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mtu: {
        value: cdktf.numberToHclTerraform(this._ipMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_mtu_variable: {
        value: cdktf.stringToHclTerraform(this._ipMtuVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetMaskVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss: {
        value: cdktf.numberToHclTerraform(this._tcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_variable: {
        value: cdktf.stringToHclTerraform(this._tcpMssVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationIpv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via_loopback: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteViaLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via_loopback_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteViaLoopbackVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface_loopback: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface_loopback_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterfaceLoopbackVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceIpv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
