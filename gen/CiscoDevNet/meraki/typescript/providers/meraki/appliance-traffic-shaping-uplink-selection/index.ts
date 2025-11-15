// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceTrafficShapingUplinkSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Toggle for enabling or disabling active-active AutoVPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#active_active_auto_vpn_enabled ApplianceTrafficShapingUplinkSelection#active_active_auto_vpn_enabled}
  */
  readonly activeActiveAutoVpnEnabled?: boolean | cdktf.IResolvable;
  /**
  * The default uplink. Must be a WAN interface `wanX`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#default_uplink ApplianceTrafficShapingUplinkSelection#default_uplink}
  */
  readonly defaultUplink?: string;
  /**
  * Toggle for enabling or disabling immediate WAN failover and failback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#failover_and_failback_immediate_enabled ApplianceTrafficShapingUplinkSelection#failover_and_failback_immediate_enabled}
  */
  readonly failoverAndFailbackImmediateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Toggle for enabling or disabling load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#load_balancing_enabled ApplianceTrafficShapingUplinkSelection#load_balancing_enabled}
  */
  readonly loadBalancingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#network_id ApplianceTrafficShapingUplinkSelection#network_id}
  */
  readonly networkId: string;
  /**
  * Array of uplink preference rules for VPN traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#vpn_traffic_uplink_preferences ApplianceTrafficShapingUplinkSelection#vpn_traffic_uplink_preferences}
  */
  readonly vpnTrafficUplinkPreferences?: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences[] | cdktf.IResolvable;
  /**
  * Array of uplink preference rules for WAN traffic. Note: these preferences are shared (merged) with meraki_appliance_sdwan_internet_policies resource. It is recommended to only use one resource for these preferences, not both at the same time: Deleting this resource clears preferences created in meraki_appliance_sdwan_internet_policies, which isn't detected as a change by the provider. The same happens the other way around, but the change is detected in uplink_selection on a subsequent apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#wan_traffic_uplink_preferences ApplianceTrafficShapingUplinkSelection#wan_traffic_uplink_preferences}
  */
  readonly wanTrafficUplinkPreferences?: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences[] | cdktf.IResolvable;
}
export interface ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters {
  /**
  * CIDR format address, or 'any'. E.g.: '192.168.10.0/24', '192.168.10.1' (same as '192.168.10.1/32'), '0.0.0.0/0' (same as 'any')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_cidr ApplianceTrafficShapingUplinkSelection#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * FQDN format address. Currently only availabe in `destination` of `vpnTrafficUplinkPreference` object. E.g.: `www.google.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_fqdn ApplianceTrafficShapingUplinkSelection#destination_fqdn}
  */
  readonly destinationFqdn?: string;
  /**
  * Host ID in the VLAN, should be used along with `vlan`, and not exceed the vlan subnet capacity. Currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_host ApplianceTrafficShapingUplinkSelection#destination_host}
  */
  readonly destinationHost?: number;
  /**
  * Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: 'L_12345678'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_network ApplianceTrafficShapingUplinkSelection#destination_network}
  */
  readonly destinationNetwork?: string;
  /**
  * E.g.: 'any', '0' (also means 'any'), '8080', '1-1024'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_port ApplianceTrafficShapingUplinkSelection#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_vlan ApplianceTrafficShapingUplinkSelection#destination_vlan}
  */
  readonly destinationVlan?: number;
  /**
  * ID of this applicationCategory or application type traffic filter. E.g.: 'meraki:layer7/category/1', 'meraki:layer7/application/4'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#id ApplianceTrafficShapingUplinkSelection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol of this custom type traffic filter. Must be one of: `tcp`, `udp`, `icmp`, `icmp6` or `any`
  *   - Choices: `any`, `icmp`, `icmp6`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#protocol ApplianceTrafficShapingUplinkSelection#protocol}
  */
  readonly protocol?: string;
  /**
  * CIDR format address, or 'any'. E.g.: '192.168.10.0/24', '192.168.10.1' (same as '192.168.10.1/32'), '0.0.0.0/0' (same as 'any')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_cidr ApplianceTrafficShapingUplinkSelection#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Host ID in the VLAN, should be used along with `vlan`, and not exceed the vlan subnet capacity. Currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_host ApplianceTrafficShapingUplinkSelection#source_host}
  */
  readonly sourceHost?: number;
  /**
  * Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: 'L_12345678'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_network ApplianceTrafficShapingUplinkSelection#source_network}
  */
  readonly sourceNetwork?: string;
  /**
  * E.g.: 'any', '0' (also means 'any'), '8080', '1-1024'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_port ApplianceTrafficShapingUplinkSelection#source_port}
  */
  readonly sourcePort?: string;
  /**
  * VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_vlan ApplianceTrafficShapingUplinkSelection#source_vlan}
  */
  readonly sourceVlan?: number;
  /**
  * Type of this traffic filter. Must be one of: `applicationCategory`, `application` or `custom`
  *   - Choices: `application`, `applicationCategory`, `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#type ApplianceTrafficShapingUplinkSelection#type}
  */
  readonly type: string;
}

export function applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersToTerraform(struct?: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_fqdn: cdktf.stringToTerraform(struct!.destinationFqdn),
    destination_host: cdktf.numberToTerraform(struct!.destinationHost),
    destination_network: cdktf.stringToTerraform(struct!.destinationNetwork),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    destination_vlan: cdktf.numberToTerraform(struct!.destinationVlan),
    id: cdktf.stringToTerraform(struct!.id),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
    source_host: cdktf.numberToTerraform(struct!.sourceHost),
    source_network: cdktf.stringToTerraform(struct!.sourceNetwork),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    source_vlan: cdktf.numberToTerraform(struct!.sourceVlan),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersToHclTerraform(struct?: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.destinationFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_host: {
      value: cdktf.numberToHclTerraform(struct!.destinationHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_network: {
      value: cdktf.stringToHclTerraform(struct!.destinationNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_vlan: {
      value: cdktf.numberToHclTerraform(struct!.destinationVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_host: {
      value: cdktf.numberToHclTerraform(struct!.sourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_network: {
      value: cdktf.stringToHclTerraform(struct!.sourceNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vlan: {
      value: cdktf.numberToHclTerraform(struct!.sourceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._destinationFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFqdn = this._destinationFqdn;
    }
    if (this._destinationHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHost = this._destinationHost;
    }
    if (this._destinationNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNetwork = this._destinationNetwork;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._destinationVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVlan = this._destinationVlan;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    if (this._sourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHost = this._sourceHost;
    }
    if (this._sourceNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNetwork = this._sourceNetwork;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVlan = this._sourceVlan;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationCidr = undefined;
      this._destinationFqdn = undefined;
      this._destinationHost = undefined;
      this._destinationNetwork = undefined;
      this._destinationPort = undefined;
      this._destinationVlan = undefined;
      this._id = undefined;
      this._protocol = undefined;
      this._sourceCidr = undefined;
      this._sourceHost = undefined;
      this._sourceNetwork = undefined;
      this._sourcePort = undefined;
      this._sourceVlan = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationCidr = value.destinationCidr;
      this._destinationFqdn = value.destinationFqdn;
      this._destinationHost = value.destinationHost;
      this._destinationNetwork = value.destinationNetwork;
      this._destinationPort = value.destinationPort;
      this._destinationVlan = value.destinationVlan;
      this._id = value.id;
      this._protocol = value.protocol;
      this._sourceCidr = value.sourceCidr;
      this._sourceHost = value.sourceHost;
      this._sourceNetwork = value.sourceNetwork;
      this._sourcePort = value.sourcePort;
      this._sourceVlan = value.sourceVlan;
      this._type = value.type;
    }
  }

  // destination_cidr - computed: false, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // destination_fqdn - computed: false, optional: true, required: false
  private _destinationFqdn?: string; 
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }
  public set destinationFqdn(value: string) {
    this._destinationFqdn = value;
  }
  public resetDestinationFqdn() {
    this._destinationFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnInput() {
    return this._destinationFqdn;
  }

  // destination_host - computed: false, optional: true, required: false
  private _destinationHost?: number; 
  public get destinationHost() {
    return this.getNumberAttribute('destination_host');
  }
  public set destinationHost(value: number) {
    this._destinationHost = value;
  }
  public resetDestinationHost() {
    this._destinationHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHostInput() {
    return this._destinationHost;
  }

  // destination_network - computed: false, optional: true, required: false
  private _destinationNetwork?: string; 
  public get destinationNetwork() {
    return this.getStringAttribute('destination_network');
  }
  public set destinationNetwork(value: string) {
    this._destinationNetwork = value;
  }
  public resetDestinationNetwork() {
    this._destinationNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkInput() {
    return this._destinationNetwork;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_vlan - computed: false, optional: true, required: false
  private _destinationVlan?: number; 
  public get destinationVlan() {
    return this.getNumberAttribute('destination_vlan');
  }
  public set destinationVlan(value: number) {
    this._destinationVlan = value;
  }
  public resetDestinationVlan() {
    this._destinationVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVlanInput() {
    return this._destinationVlan;
  }

  // id - computed: false, optional: true, required: false
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

  // source_cidr - computed: false, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_host - computed: false, optional: true, required: false
  private _sourceHost?: number; 
  public get sourceHost() {
    return this.getNumberAttribute('source_host');
  }
  public set sourceHost(value: number) {
    this._sourceHost = value;
  }
  public resetSourceHost() {
    this._sourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostInput() {
    return this._sourceHost;
  }

  // source_network - computed: false, optional: true, required: false
  private _sourceNetwork?: string; 
  public get sourceNetwork() {
    return this.getStringAttribute('source_network');
  }
  public set sourceNetwork(value: string) {
    this._sourceNetwork = value;
  }
  public resetSourceNetwork() {
    this._sourceNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInput() {
    return this._sourceNetwork;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_vlan - computed: false, optional: true, required: false
  private _sourceVlan?: number; 
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }
  public set sourceVlan(value: number) {
    this._sourceVlan = value;
  }
  public resetSourceVlan() {
    this._sourceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVlanInput() {
    return this._sourceVlan;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersOutputReference {
    return new ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences {
  /**
  * Name of builtin performance class, must be present when performanceClass type is `builtin`, and value must be one of: `VoIP`
  *   - Choices: `VoIP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#builtin_performance_class_name ApplianceTrafficShapingUplinkSelection#builtin_performance_class_name}
  */
  readonly builtinPerformanceClassName?: string;
  /**
  * ID of created custom performance class, must be present when performanceClass type is `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#custom_performance_class_id ApplianceTrafficShapingUplinkSelection#custom_performance_class_id}
  */
  readonly customPerformanceClassId?: string;
  /**
  * Fail over criterion for this uplink preference rule. Must be one of: `poorPerformance` or `uplinkDown`
  *   - Choices: `poorPerformance`, `uplinkDown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#fail_over_criterion ApplianceTrafficShapingUplinkSelection#fail_over_criterion}
  */
  readonly failOverCriterion?: string;
  /**
  * Type of this performance class. Must be one of: `builtin` or `custom`
  *   - Choices: `builtin`, `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#performance_class_type ApplianceTrafficShapingUplinkSelection#performance_class_type}
  */
  readonly performanceClassType?: string;
  /**
  * Preferred uplink for uplink preference rule. Must be one of: `wan1`, `wan2`, `bestForVoIP`, `loadBalancing` or `defaultUplink`, or any other valid uplink(`wanX`) if it applies to the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#preferred_uplink ApplianceTrafficShapingUplinkSelection#preferred_uplink}
  */
  readonly preferredUplink: string;
  /**
  * Array of traffic filters for this uplink preference rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#traffic_filters ApplianceTrafficShapingUplinkSelection#traffic_filters}
  */
  readonly trafficFilters: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable;
}

export function applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesToTerraform(struct?: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builtin_performance_class_name: cdktf.stringToTerraform(struct!.builtinPerformanceClassName),
    custom_performance_class_id: cdktf.stringToTerraform(struct!.customPerformanceClassId),
    fail_over_criterion: cdktf.stringToTerraform(struct!.failOverCriterion),
    performance_class_type: cdktf.stringToTerraform(struct!.performanceClassType),
    preferred_uplink: cdktf.stringToTerraform(struct!.preferredUplink),
    traffic_filters: cdktf.listMapper(applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersToTerraform, false)(struct!.trafficFilters),
  }
}


export function applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesToHclTerraform(struct?: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builtin_performance_class_name: {
      value: cdktf.stringToHclTerraform(struct!.builtinPerformanceClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_performance_class_id: {
      value: cdktf.stringToHclTerraform(struct!.customPerformanceClassId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_criterion: {
      value: cdktf.stringToHclTerraform(struct!.failOverCriterion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_class_type: {
      value: cdktf.stringToHclTerraform(struct!.performanceClassType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_uplink: {
      value: cdktf.stringToHclTerraform(struct!.preferredUplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_filters: {
      value: cdktf.listMapperHcl(applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersToHclTerraform, false)(struct!.trafficFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtinPerformanceClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtinPerformanceClassName = this._builtinPerformanceClassName;
    }
    if (this._customPerformanceClassId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPerformanceClassId = this._customPerformanceClassId;
    }
    if (this._failOverCriterion !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverCriterion = this._failOverCriterion;
    }
    if (this._performanceClassType !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceClassType = this._performanceClassType;
    }
    if (this._preferredUplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUplink = this._preferredUplink;
    }
    if (this._trafficFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficFilters = this._trafficFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtinPerformanceClassName = undefined;
      this._customPerformanceClassId = undefined;
      this._failOverCriterion = undefined;
      this._performanceClassType = undefined;
      this._preferredUplink = undefined;
      this._trafficFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtinPerformanceClassName = value.builtinPerformanceClassName;
      this._customPerformanceClassId = value.customPerformanceClassId;
      this._failOverCriterion = value.failOverCriterion;
      this._performanceClassType = value.performanceClassType;
      this._preferredUplink = value.preferredUplink;
      this._trafficFilters.internalValue = value.trafficFilters;
    }
  }

  // builtin_performance_class_name - computed: false, optional: true, required: false
  private _builtinPerformanceClassName?: string; 
  public get builtinPerformanceClassName() {
    return this.getStringAttribute('builtin_performance_class_name');
  }
  public set builtinPerformanceClassName(value: string) {
    this._builtinPerformanceClassName = value;
  }
  public resetBuiltinPerformanceClassName() {
    this._builtinPerformanceClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinPerformanceClassNameInput() {
    return this._builtinPerformanceClassName;
  }

  // custom_performance_class_id - computed: false, optional: true, required: false
  private _customPerformanceClassId?: string; 
  public get customPerformanceClassId() {
    return this.getStringAttribute('custom_performance_class_id');
  }
  public set customPerformanceClassId(value: string) {
    this._customPerformanceClassId = value;
  }
  public resetCustomPerformanceClassId() {
    this._customPerformanceClassId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPerformanceClassIdInput() {
    return this._customPerformanceClassId;
  }

  // fail_over_criterion - computed: false, optional: true, required: false
  private _failOverCriterion?: string; 
  public get failOverCriterion() {
    return this.getStringAttribute('fail_over_criterion');
  }
  public set failOverCriterion(value: string) {
    this._failOverCriterion = value;
  }
  public resetFailOverCriterion() {
    this._failOverCriterion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverCriterionInput() {
    return this._failOverCriterion;
  }

  // performance_class_type - computed: false, optional: true, required: false
  private _performanceClassType?: string; 
  public get performanceClassType() {
    return this.getStringAttribute('performance_class_type');
  }
  public set performanceClassType(value: string) {
    this._performanceClassType = value;
  }
  public resetPerformanceClassType() {
    this._performanceClassType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassTypeInput() {
    return this._performanceClassType;
  }

  // preferred_uplink - computed: false, optional: false, required: true
  private _preferredUplink?: string; 
  public get preferredUplink() {
    return this.getStringAttribute('preferred_uplink');
  }
  public set preferredUplink(value: string) {
    this._preferredUplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUplinkInput() {
    return this._preferredUplink;
  }

  // traffic_filters - computed: false, optional: false, required: true
  private _trafficFilters = new ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersList(this, "traffic_filters", false);
  public get trafficFilters() {
    return this._trafficFilters;
  }
  public putTrafficFilters(value: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable) {
    this._trafficFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFiltersInput() {
    return this._trafficFilters.internalValue;
  }
}

export class ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesOutputReference {
    return new ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters {
  /**
  * CIDR format address, or 'any'. E.g.: '192.168.10.0/24', '192.168.10.1' (same as '192.168.10.1/32'), '0.0.0.0/0' (same as 'any')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_cidr ApplianceTrafficShapingUplinkSelection#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * E.g.: 'any', '0' (also means 'any'), '8080', '1-1024'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#destination_port ApplianceTrafficShapingUplinkSelection#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Protocol of this custom type traffic filter. Must be one of: `tcp`, `udp`, `icmp6` or `any`
  *   - Choices: `any`, `icmp6`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#protocol ApplianceTrafficShapingUplinkSelection#protocol}
  */
  readonly protocol?: string;
  /**
  * CIDR format address, or 'any'. E.g.: '192.168.10.0/24', '192.168.10.1' (same as '192.168.10.1/32'), '0.0.0.0/0' (same as 'any')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_cidr ApplianceTrafficShapingUplinkSelection#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Host ID in the VLAN, should be used along with `vlan`, and not exceed the vlan subnet capacity. Currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_host ApplianceTrafficShapingUplinkSelection#source_host}
  */
  readonly sourceHost?: number;
  /**
  * E.g.: 'any', '0' (also means 'any'), '8080', '1-1024'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_port ApplianceTrafficShapingUplinkSelection#source_port}
  */
  readonly sourcePort?: string;
  /**
  * VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#source_vlan ApplianceTrafficShapingUplinkSelection#source_vlan}
  */
  readonly sourceVlan?: number;
  /**
  * Type of this traffic filter. Must be one of: `custom`
  *   - Choices: `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#type ApplianceTrafficShapingUplinkSelection#type}
  */
  readonly type: string;
}

export function applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersToTerraform(struct?: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
    source_host: cdktf.numberToTerraform(struct!.sourceHost),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    source_vlan: cdktf.numberToTerraform(struct!.sourceVlan),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersToHclTerraform(struct?: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_host: {
      value: cdktf.numberToHclTerraform(struct!.sourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vlan: {
      value: cdktf.numberToHclTerraform(struct!.sourceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    if (this._sourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHost = this._sourceHost;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVlan = this._sourceVlan;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationCidr = undefined;
      this._destinationPort = undefined;
      this._protocol = undefined;
      this._sourceCidr = undefined;
      this._sourceHost = undefined;
      this._sourcePort = undefined;
      this._sourceVlan = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationCidr = value.destinationCidr;
      this._destinationPort = value.destinationPort;
      this._protocol = value.protocol;
      this._sourceCidr = value.sourceCidr;
      this._sourceHost = value.sourceHost;
      this._sourcePort = value.sourcePort;
      this._sourceVlan = value.sourceVlan;
      this._type = value.type;
    }
  }

  // destination_cidr - computed: false, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
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

  // source_cidr - computed: false, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_host - computed: false, optional: true, required: false
  private _sourceHost?: number; 
  public get sourceHost() {
    return this.getNumberAttribute('source_host');
  }
  public set sourceHost(value: number) {
    this._sourceHost = value;
  }
  public resetSourceHost() {
    this._sourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostInput() {
    return this._sourceHost;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_vlan - computed: false, optional: true, required: false
  private _sourceVlan?: number; 
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }
  public set sourceVlan(value: number) {
    this._sourceVlan = value;
  }
  public resetSourceVlan() {
    this._sourceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVlanInput() {
    return this._sourceVlan;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersOutputReference {
    return new ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences {
  /**
  * Preferred uplink for uplink preference rule. Must be one of: `wan1` or `wan2`, or any other valid uplink(`wanX`) if it applies to the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#preferred_uplink ApplianceTrafficShapingUplinkSelection#preferred_uplink}
  */
  readonly preferredUplink: string;
  /**
  * Array of traffic filters for this uplink preference rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#traffic_filters ApplianceTrafficShapingUplinkSelection#traffic_filters}
  */
  readonly trafficFilters: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable;
}

export function applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesToTerraform(struct?: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_uplink: cdktf.stringToTerraform(struct!.preferredUplink),
    traffic_filters: cdktf.listMapper(applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersToTerraform, false)(struct!.trafficFilters),
  }
}


export function applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesToHclTerraform(struct?: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_uplink: {
      value: cdktf.stringToHclTerraform(struct!.preferredUplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_filters: {
      value: cdktf.listMapperHcl(applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersToHclTerraform, false)(struct!.trafficFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredUplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUplink = this._preferredUplink;
    }
    if (this._trafficFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficFilters = this._trafficFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredUplink = undefined;
      this._trafficFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredUplink = value.preferredUplink;
      this._trafficFilters.internalValue = value.trafficFilters;
    }
  }

  // preferred_uplink - computed: false, optional: false, required: true
  private _preferredUplink?: string; 
  public get preferredUplink() {
    return this.getStringAttribute('preferred_uplink');
  }
  public set preferredUplink(value: string) {
    this._preferredUplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUplinkInput() {
    return this._preferredUplink;
  }

  // traffic_filters - computed: false, optional: false, required: true
  private _trafficFilters = new ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersList(this, "traffic_filters", false);
  public get trafficFilters() {
    return this._trafficFilters;
  }
  public putTrafficFilters(value: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable) {
    this._trafficFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFiltersInput() {
    return this._trafficFilters.internalValue;
  }
}

export class ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesOutputReference {
    return new ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection meraki_appliance_traffic_shaping_uplink_selection}
*/
export class ApplianceTrafficShapingUplinkSelection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_uplink_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceTrafficShapingUplinkSelection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceTrafficShapingUplinkSelection to import
  * @param importFromId The id of the existing ApplianceTrafficShapingUplinkSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceTrafficShapingUplinkSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_uplink_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_uplink_selection meraki_appliance_traffic_shaping_uplink_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceTrafficShapingUplinkSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceTrafficShapingUplinkSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_uplink_selection',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeActiveAutoVpnEnabled = config.activeActiveAutoVpnEnabled;
    this._defaultUplink = config.defaultUplink;
    this._failoverAndFailbackImmediateEnabled = config.failoverAndFailbackImmediateEnabled;
    this._loadBalancingEnabled = config.loadBalancingEnabled;
    this._networkId = config.networkId;
    this._vpnTrafficUplinkPreferences.internalValue = config.vpnTrafficUplinkPreferences;
    this._wanTrafficUplinkPreferences.internalValue = config.wanTrafficUplinkPreferences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active_auto_vpn_enabled - computed: false, optional: true, required: false
  private _activeActiveAutoVpnEnabled?: boolean | cdktf.IResolvable; 
  public get activeActiveAutoVpnEnabled() {
    return this.getBooleanAttribute('active_active_auto_vpn_enabled');
  }
  public set activeActiveAutoVpnEnabled(value: boolean | cdktf.IResolvable) {
    this._activeActiveAutoVpnEnabled = value;
  }
  public resetActiveActiveAutoVpnEnabled() {
    this._activeActiveAutoVpnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveAutoVpnEnabledInput() {
    return this._activeActiveAutoVpnEnabled;
  }

  // default_uplink - computed: false, optional: true, required: false
  private _defaultUplink?: string; 
  public get defaultUplink() {
    return this.getStringAttribute('default_uplink');
  }
  public set defaultUplink(value: string) {
    this._defaultUplink = value;
  }
  public resetDefaultUplink() {
    this._defaultUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUplinkInput() {
    return this._defaultUplink;
  }

  // failover_and_failback_immediate_enabled - computed: false, optional: true, required: false
  private _failoverAndFailbackImmediateEnabled?: boolean | cdktf.IResolvable; 
  public get failoverAndFailbackImmediateEnabled() {
    return this.getBooleanAttribute('failover_and_failback_immediate_enabled');
  }
  public set failoverAndFailbackImmediateEnabled(value: boolean | cdktf.IResolvable) {
    this._failoverAndFailbackImmediateEnabled = value;
  }
  public resetFailoverAndFailbackImmediateEnabled() {
    this._failoverAndFailbackImmediateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAndFailbackImmediateEnabledInput() {
    return this._failoverAndFailbackImmediateEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing_enabled - computed: false, optional: true, required: false
  private _loadBalancingEnabled?: boolean | cdktf.IResolvable; 
  public get loadBalancingEnabled() {
    return this.getBooleanAttribute('load_balancing_enabled');
  }
  public set loadBalancingEnabled(value: boolean | cdktf.IResolvable) {
    this._loadBalancingEnabled = value;
  }
  public resetLoadBalancingEnabled() {
    this._loadBalancingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingEnabledInput() {
    return this._loadBalancingEnabled;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // vpn_traffic_uplink_preferences - computed: false, optional: true, required: false
  private _vpnTrafficUplinkPreferences = new ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesList(this, "vpn_traffic_uplink_preferences", false);
  public get vpnTrafficUplinkPreferences() {
    return this._vpnTrafficUplinkPreferences;
  }
  public putVpnTrafficUplinkPreferences(value: ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences[] | cdktf.IResolvable) {
    this._vpnTrafficUplinkPreferences.internalValue = value;
  }
  public resetVpnTrafficUplinkPreferences() {
    this._vpnTrafficUplinkPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTrafficUplinkPreferencesInput() {
    return this._vpnTrafficUplinkPreferences.internalValue;
  }

  // wan_traffic_uplink_preferences - computed: false, optional: true, required: false
  private _wanTrafficUplinkPreferences = new ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesList(this, "wan_traffic_uplink_preferences", false);
  public get wanTrafficUplinkPreferences() {
    return this._wanTrafficUplinkPreferences;
  }
  public putWanTrafficUplinkPreferences(value: ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences[] | cdktf.IResolvable) {
    this._wanTrafficUplinkPreferences.internalValue = value;
  }
  public resetWanTrafficUplinkPreferences() {
    this._wanTrafficUplinkPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanTrafficUplinkPreferencesInput() {
    return this._wanTrafficUplinkPreferences.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active_auto_vpn_enabled: cdktf.booleanToTerraform(this._activeActiveAutoVpnEnabled),
      default_uplink: cdktf.stringToTerraform(this._defaultUplink),
      failover_and_failback_immediate_enabled: cdktf.booleanToTerraform(this._failoverAndFailbackImmediateEnabled),
      load_balancing_enabled: cdktf.booleanToTerraform(this._loadBalancingEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      vpn_traffic_uplink_preferences: cdktf.listMapper(applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesToTerraform, false)(this._vpnTrafficUplinkPreferences.internalValue),
      wan_traffic_uplink_preferences: cdktf.listMapper(applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesToTerraform, false)(this._wanTrafficUplinkPreferences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_active_auto_vpn_enabled: {
        value: cdktf.booleanToHclTerraform(this._activeActiveAutoVpnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_uplink: {
        value: cdktf.stringToHclTerraform(this._defaultUplink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_and_failback_immediate_enabled: {
        value: cdktf.booleanToHclTerraform(this._failoverAndFailbackImmediateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancing_enabled: {
        value: cdktf.booleanToHclTerraform(this._loadBalancingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_traffic_uplink_preferences: {
        value: cdktf.listMapperHcl(applianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesToHclTerraform, false)(this._vpnTrafficUplinkPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesList",
      },
      wan_traffic_uplink_preferences: {
        value: cdktf.listMapperHcl(applianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesToHclTerraform, false)(this._wanTrafficUplinkPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
