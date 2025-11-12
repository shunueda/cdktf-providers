// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightCapabilitySwitchCapabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#account_moid DataIntersightCapabilitySwitchCapability#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#create_time DataIntersightCapabilitySwitchCapability#create_time}
  */
  readonly createTime?: string;
  /**
  * Default Fcoe VLAN associated with this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#default_fcoe_vlan DataIntersightCapabilitySwitchCapability#default_fcoe_vlan}
  */
  readonly defaultFcoeVlan?: number;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#domain_group_moid DataIntersightCapabilitySwitchCapability#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Dynamic VIFs support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#dynamic_vifs_supported DataIntersightCapabilitySwitchCapability#dynamic_vifs_supported}
  */
  readonly dynamicVifsSupported?: boolean | cdktf.IResolvable;
  /**
  * Fan Modules support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#fan_modules_supported DataIntersightCapabilitySwitchCapability#fan_modules_supported}
  */
  readonly fanModulesSupported?: boolean | cdktf.IResolvable;
  /**
  * Fc Uplink ports auto negotiation speed support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#fc_uplink_ports_auto_negotiation_supported DataIntersightCapabilitySwitchCapability#fc_uplink_ports_auto_negotiation_supported}
  */
  readonly fcUplinkPortsAutoNegotiationSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#id DataIntersightCapabilitySwitchCapability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VlanPort Compression is controlled by IMM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#imm_controls_vpcompression DataIntersightCapabilitySwitchCapability#imm_controls_vpcompression}
  */
  readonly immControlsVpcompression?: boolean | cdktf.IResolvable;
  /**
  * Inter cluster link vlan support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#inter_cluster_link_vlan_supported DataIntersightCapabilitySwitchCapability#inter_cluster_link_vlan_supported}
  */
  readonly interClusterLinkVlanSupported?: boolean | cdktf.IResolvable;
  /**
  * Locator Beacon LED support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#locator_beacon_supported DataIntersightCapabilitySwitchCapability#locator_beacon_supported}
  */
  readonly locatorBeaconSupported?: boolean | cdktf.IResolvable;
  /**
  * Maximum allowed physical ports on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#max_ports DataIntersightCapabilitySwitchCapability#max_ports}
  */
  readonly maxPorts?: number;
  /**
  * Maximum allowed physical slots on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#max_slots DataIntersightCapabilitySwitchCapability#max_slots}
  */
  readonly maxSlots?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#mod_time DataIntersightCapabilitySwitchCapability#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * An unique identifer for a capability descriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#name DataIntersightCapabilitySwitchCapability#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#owners DataIntersightCapabilitySwitchCapability#owners}
  */
  readonly owners?: string[];
  /**
  * Product Identifier for a Switch/Fabric-Interconnect.
  * * `UCS-FI-6454` - The standard 4th generation UCS Fabric Interconnect with 54 ports.
  * * `UCS-FI-64108` - The expanded 4th generation UCS Fabric Interconnect with 108 ports.
  * * `UCS-FI-6536` - The standard 5th generation UCS Fabric Interconnect with 36 ports.
  * * `UCSX-S9108-100G` - Cisco UCS Fabric Interconnect 9108 100G with 8 ports.
  * * `UCS-FI-6664` - The standard 6th generation UCS Fabric Interconnect with 64 ports.
  * * `UCS-FI-6652` - The standard 6th generation UCS Fabric Interconnect.
  * * `UCSXE-ECMC-10G` - Cisco UCS XE ECMC 10G with 2 ports.
  * * `UCSXE-ECMC-G1` - Cisco UCS XE ECMC G1 with 2 ports.
  * * `unknown` - Unknown device type, usage is TBD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#pid DataIntersightCapabilitySwitchCapability#pid}
  */
  readonly pid?: string;
  /**
  * Sereno Adaptor with Netflow support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#sereno_netflow_supported DataIntersightCapabilitySwitchCapability#sereno_netflow_supported}
  */
  readonly serenoNetflowSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#server_role_supported_on_breakout DataIntersightCapabilitySwitchCapability#server_role_supported_on_breakout}
  */
  readonly serverRoleSupportedOnBreakout?: string[];
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#shared_scope DataIntersightCapabilitySwitchCapability#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * SKU information for Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#sku DataIntersightCapabilitySwitchCapability#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#un_supported_equipment_model DataIntersightCapabilitySwitchCapability#un_supported_equipment_model}
  */
  readonly unSupportedEquipmentModel?: string[];
  /**
  * The Slider rule for Unified ports on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#unified_rule DataIntersightCapabilitySwitchCapability#unified_rule}
  */
  readonly unifiedRule?: string;
  /**
  * 'Negotiate Auto 25000' admin speed support on this switch for port or port-channel
  * with Ethernet Uplink/Appliance/FCoE Uplink roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#uplink_admin_port_speed_neg_auto25_gbps_supported DataIntersightCapabilitySwitchCapability#uplink_admin_port_speed_neg_auto25_gbps_supported}
  */
  readonly uplinkAdminPortSpeedNegAuto25GbpsSupported?: boolean | cdktf.IResolvable;
  /**
  * VID information for Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#vid DataIntersightCapabilitySwitchCapability#vid}
  */
  readonly vid?: string;
  /**
  * allowed_uplink_pc_id_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#allowed_uplink_pc_id_range DataIntersightCapabilitySwitchCapability#allowed_uplink_pc_id_range}
  */
  readonly allowedUplinkPcIdRange?: DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRange;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ancestors DataIntersightCapabilitySwitchCapability#ancestors}
  */
  readonly ancestors?: DataIntersightCapabilitySwitchCapabilityAncestors[] | cdktf.IResolvable;
  /**
  * fc_end_host_mode_reserved_vsans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#fc_end_host_mode_reserved_vsans DataIntersightCapabilitySwitchCapability#fc_end_host_mode_reserved_vsans}
  */
  readonly fcEndHostModeReservedVsans?: DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans[] | cdktf.IResolvable;
  /**
  * macsec_supported_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#macsec_supported_ports DataIntersightCapabilitySwitchCapability#macsec_supported_ports}
  */
  readonly macsecSupportedPorts?: DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts[] | cdktf.IResolvable;
  /**
  * min_version_map_for_switch_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#min_version_map_for_switch_features DataIntersightCapabilitySwitchCapability#min_version_map_for_switch_features}
  */
  readonly minVersionMapForSwitchFeatures?: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures[] | cdktf.IResolvable;
  /**
  * min_version_map_with_breakout_support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#min_version_map_with_breakout_support DataIntersightCapabilitySwitchCapability#min_version_map_with_breakout_support}
  */
  readonly minVersionMapWithBreakoutSupport?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport;
  /**
  * min_version_map_with_locator_led_support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#min_version_map_with_locator_led_support DataIntersightCapabilitySwitchCapability#min_version_map_with_locator_led_support}
  */
  readonly minVersionMapWithLocatorLedSupport?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport;
  /**
  * min_version_map_with_neg_auto25g_support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#min_version_map_with_neg_auto25g_support DataIntersightCapabilitySwitchCapability#min_version_map_with_neg_auto25g_support}
  */
  readonly minVersionMapWithNegAuto25GSupport?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport;
  /**
  * network_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#network_limits DataIntersightCapabilitySwitchCapability#network_limits}
  */
  readonly networkLimits?: DataIntersightCapabilitySwitchCapabilityNetworkLimits;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#parent DataIntersightCapabilitySwitchCapability#parent}
  */
  readonly parent?: DataIntersightCapabilitySwitchCapabilityParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#permission_resources DataIntersightCapabilitySwitchCapability#permission_resources}
  */
  readonly permissionResources?: DataIntersightCapabilitySwitchCapabilityPermissionResources[] | cdktf.IResolvable;
  /**
  * ports_supporting100g_speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting100g_speed DataIntersightCapabilitySwitchCapability#ports_supporting100g_speed}
  */
  readonly portsSupporting100GSpeed?: DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed[] | cdktf.IResolvable;
  /**
  * ports_supporting10g_speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting10g_speed DataIntersightCapabilitySwitchCapability#ports_supporting10g_speed}
  */
  readonly portsSupporting10GSpeed?: DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed[] | cdktf.IResolvable;
  /**
  * ports_supporting1g_speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting1g_speed DataIntersightCapabilitySwitchCapability#ports_supporting1g_speed}
  */
  readonly portsSupporting1GSpeed?: DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed[] | cdktf.IResolvable;
  /**
  * ports_supporting25g_speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting25g_speed DataIntersightCapabilitySwitchCapability#ports_supporting25g_speed}
  */
  readonly portsSupporting25GSpeed?: DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed[] | cdktf.IResolvable;
  /**
  * ports_supporting40g_speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting40g_speed DataIntersightCapabilitySwitchCapability#ports_supporting40g_speed}
  */
  readonly portsSupporting40GSpeed?: DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed[] | cdktf.IResolvable;
  /**
  * ports_supporting_appliance_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting_appliance_role DataIntersightCapabilitySwitchCapability#ports_supporting_appliance_role}
  */
  readonly portsSupportingApplianceRole?: DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole[] | cdktf.IResolvable;
  /**
  * ports_supporting_breakout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting_breakout DataIntersightCapabilitySwitchCapability#ports_supporting_breakout}
  */
  readonly portsSupportingBreakout?: DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout[] | cdktf.IResolvable;
  /**
  * ports_supporting_fcoe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting_fcoe DataIntersightCapabilitySwitchCapability#ports_supporting_fcoe}
  */
  readonly portsSupportingFcoe?: DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe[] | cdktf.IResolvable;
  /**
  * ports_supporting_inter_cluster_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting_inter_cluster_link DataIntersightCapabilitySwitchCapability#ports_supporting_inter_cluster_link}
  */
  readonly portsSupportingInterClusterLink?: DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink[] | cdktf.IResolvable;
  /**
  * ports_supporting_server_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ports_supporting_server_role DataIntersightCapabilitySwitchCapability#ports_supporting_server_role}
  */
  readonly portsSupportingServerRole?: DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole[] | cdktf.IResolvable;
  /**
  * reserved_vsans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#reserved_vsans DataIntersightCapabilitySwitchCapability#reserved_vsans}
  */
  readonly reservedVsans?: DataIntersightCapabilitySwitchCapabilityReservedVsans[] | cdktf.IResolvable;
  /**
  * storage_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#storage_limits DataIntersightCapabilitySwitchCapability#storage_limits}
  */
  readonly storageLimits?: DataIntersightCapabilitySwitchCapabilityStorageLimits;
  /**
  * switching_mode_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#switching_mode_capabilities DataIntersightCapabilitySwitchCapability#switching_mode_capabilities}
  */
  readonly switchingModeCapabilities?: DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities[] | cdktf.IResolvable;
  /**
  * system_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#system_limits DataIntersightCapabilitySwitchCapability#system_limits}
  */
  readonly systemLimits?: DataIntersightCapabilitySwitchCapabilitySystemLimits;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#tags DataIntersightCapabilitySwitchCapability#tags}
  */
  readonly tags?: DataIntersightCapabilitySwitchCapabilityTags[] | cdktf.IResolvable;
  /**
  * unified_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#unified_ports DataIntersightCapabilitySwitchCapability#unified_ports}
  */
  readonly unifiedPorts?: DataIntersightCapabilitySwitchCapabilityUnifiedPorts[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#version_context DataIntersightCapabilitySwitchCapability#version_context}
  */
  readonly versionContext?: DataIntersightCapabilitySwitchCapabilityVersionContext;
}
export interface DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRange {
}

export function dataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRangeToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRangeToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_pc_id - computed: true, optional: false, required: false
  public get endPcId() {
    return this.getNumberAttribute('end_pc_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_pc_id - computed: true, optional: false, required: false
  public get startPcId() {
    return this.getNumberAttribute('start_pc_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRangeOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsAncestors {
}

export function dataIntersightCapabilitySwitchCapabilityResultsAncestorsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsAncestorsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsAncestorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsAncestorsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsans {
}

export function dataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsansToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsansToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsansList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsansOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPorts {
}

export function dataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPortsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPortsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPortsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMap {
}

export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMapToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMapToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // bundle_version - computed: true, optional: false, required: false
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // device_firmware_version - computed: true, optional: false, required: false
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMapList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMapOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeatures {
}

export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // version_map - computed: true, optional: false, required: false
  private _versionMap = new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesVersionMapList(this, "version_map", false);
  public get versionMap() {
    return this._versionMap;
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupport {
}

export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupportToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupportToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // bundle_version - computed: true, optional: false, required: false
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // device_firmware_version - computed: true, optional: false, required: false
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupportList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupportOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupport {
}

export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupportToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupportToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // bundle_version - computed: true, optional: false, required: false
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // device_firmware_version - computed: true, optional: false, required: false
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupportList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupportOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupport {
}

export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupportToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupportToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // bundle_version - computed: true, optional: false, required: false
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // device_firmware_version - computed: true, optional: false, required: false
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupportList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupportOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsNetworkLimits {
}

export function dataIntersightCapabilitySwitchCapabilityResultsNetworkLimitsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsNetworkLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsNetworkLimitsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsNetworkLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsNetworkLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsNetworkLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsNetworkLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // max_compressed_port_vlan_count - computed: true, optional: false, required: false
  public get maxCompressedPortVlanCount() {
    return this.getNumberAttribute('max_compressed_port_vlan_count');
  }

  // max_uncompressed_port_vlan_count - computed: true, optional: false, required: false
  public get maxUncompressedPortVlanCount() {
    return this.getNumberAttribute('max_uncompressed_port_vlan_count');
  }

  // maximum_active_traffic_monitoring_sessions - computed: true, optional: false, required: false
  public get maximumActiveTrafficMonitoringSessions() {
    return this.getNumberAttribute('maximum_active_traffic_monitoring_sessions');
  }

  // maximum_ethernet_port_channels - computed: true, optional: false, required: false
  public get maximumEthernetPortChannels() {
    return this.getNumberAttribute('maximum_ethernet_port_channels');
  }

  // maximum_ethernet_uplink_ports - computed: true, optional: false, required: false
  public get maximumEthernetUplinkPorts() {
    return this.getNumberAttribute('maximum_ethernet_uplink_ports');
  }

  // maximum_fc_port_channel_members - computed: true, optional: false, required: false
  public get maximumFcPortChannelMembers() {
    return this.getNumberAttribute('maximum_fc_port_channel_members');
  }

  // maximum_fc_port_channels - computed: true, optional: false, required: false
  public get maximumFcPortChannels() {
    return this.getNumberAttribute('maximum_fc_port_channels');
  }

  // maximum_igmp_groups - computed: true, optional: false, required: false
  public get maximumIgmpGroups() {
    return this.getNumberAttribute('maximum_igmp_groups');
  }

  // maximum_port_channel_members - computed: true, optional: false, required: false
  public get maximumPortChannelMembers() {
    return this.getNumberAttribute('maximum_port_channel_members');
  }

  // maximum_primary_vlan - computed: true, optional: false, required: false
  public get maximumPrimaryVlan() {
    return this.getNumberAttribute('maximum_primary_vlan');
  }

  // maximum_secondary_vlan - computed: true, optional: false, required: false
  public get maximumSecondaryVlan() {
    return this.getNumberAttribute('maximum_secondary_vlan');
  }

  // maximum_secondary_vlan_per_primary - computed: true, optional: false, required: false
  public get maximumSecondaryVlanPerPrimary() {
    return this.getNumberAttribute('maximum_secondary_vlan_per_primary');
  }

  // maximum_vifs - computed: true, optional: false, required: false
  public get maximumVifs() {
    return this.getNumberAttribute('maximum_vifs');
  }

  // maximum_vlans - computed: true, optional: false, required: false
  public get maximumVlans() {
    return this.getNumberAttribute('maximum_vlans');
  }

  // minimum_active_fans - computed: true, optional: false, required: false
  public get minimumActiveFans() {
    return this.getNumberAttribute('minimum_active_fans');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsNetworkLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsNetworkLimitsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsNetworkLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsParent {
}

export function dataIntersightCapabilitySwitchCapabilityResultsParentToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsParentToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsParentOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPermissionResources {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPermissionResourcesToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPermissionResourcesToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPermissionResourcesOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeed {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeedList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeed {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeedList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeed {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeedList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeed {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeedList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeed {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeedList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRole {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRoleToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRoleToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRoleList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRoleOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakout {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakoutToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakoutToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakoutList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakoutOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoe {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoeToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoeToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoeList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoeOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLink {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLinkToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLinkToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLinkOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRole {
}

export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRoleToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRoleToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRoleList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRoleOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsReservedVsans {
}

export function dataIntersightCapabilitySwitchCapabilityResultsReservedVsansToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsReservedVsans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsReservedVsansToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsReservedVsans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsReservedVsansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsReservedVsans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsReservedVsans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsReservedVsansList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsReservedVsansOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsReservedVsansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsStorageLimits {
}

export function dataIntersightCapabilitySwitchCapabilityResultsStorageLimitsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsStorageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsStorageLimitsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsStorageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsStorageLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsStorageLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsStorageLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // maximum_user_zone_count - computed: true, optional: false, required: false
  public get maximumUserZoneCount() {
    return this.getNumberAttribute('maximum_user_zone_count');
  }

  // maximum_virtual_fc_interfaces - computed: true, optional: false, required: false
  public get maximumVirtualFcInterfaces() {
    return this.getNumberAttribute('maximum_virtual_fc_interfaces');
  }

  // maximum_virtual_fc_interfaces_per_blade_server - computed: true, optional: false, required: false
  public get maximumVirtualFcInterfacesPerBladeServer() {
    return this.getNumberAttribute('maximum_virtual_fc_interfaces_per_blade_server');
  }

  // maximum_vsans - computed: true, optional: false, required: false
  public get maximumVsans() {
    return this.getNumberAttribute('maximum_vsans');
  }

  // maximum_zone_count - computed: true, optional: false, required: false
  public get maximumZoneCount() {
    return this.getNumberAttribute('maximum_zone_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsStorageLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsStorageLimitsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsStorageLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilities {
}

export function dataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilitiesToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilitiesToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // switching_mode - computed: true, optional: false, required: false
  public get switchingMode() {
    return this.getStringAttribute('switching_mode');
  }

  // vp_compression_supported - computed: true, optional: false, required: false
  public get vpCompressionSupported() {
    return this.getBooleanAttribute('vp_compression_supported');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilitiesOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsSystemLimits {
}

export function dataIntersightCapabilitySwitchCapabilityResultsSystemLimitsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsSystemLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsSystemLimitsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsSystemLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsSystemLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsSystemLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsSystemLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // maximum_chassis_count - computed: true, optional: false, required: false
  public get maximumChassisCount() {
    return this.getNumberAttribute('maximum_chassis_count');
  }

  // maximum_fex_per_domain - computed: true, optional: false, required: false
  public get maximumFexPerDomain() {
    return this.getNumberAttribute('maximum_fex_per_domain');
  }

  // maximum_servers_per_domain - computed: true, optional: false, required: false
  public get maximumServersPerDomain() {
    return this.getNumberAttribute('maximum_servers_per_domain');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsSystemLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsSystemLimitsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsSystemLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitions {
}

export function dataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsTagsDefinition {
}

export function dataIntersightCapabilitySwitchCapabilityResultsTagsDefinitionToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsTagsDefinitionToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsTagsDefinitionOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsTags {
}

export function dataIntersightCapabilitySwitchCapabilityResultsTagsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsTagsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightCapabilitySwitchCapabilityResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightCapabilitySwitchCapabilityResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsTagsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsUnifiedPorts {
}

export function dataIntersightCapabilitySwitchCapabilityResultsUnifiedPortsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsUnifiedPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsUnifiedPortsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsUnifiedPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsUnifiedPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsUnifiedPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsUnifiedPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }

  // end_slot_id - computed: true, optional: false, required: false
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }

  // start_slot_id - computed: true, optional: false, required: false
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsUnifiedPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsUnifiedPortsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsUnifiedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMos {
}

export function dataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMo {
}

export function dataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMoToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMoOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResultsVersionContext {
}

export function dataIntersightCapabilitySwitchCapabilityResultsVersionContextToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsVersionContextToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightCapabilitySwitchCapabilityResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightCapabilitySwitchCapabilityResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsVersionContextOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityResults {
}

export function dataIntersightCapabilitySwitchCapabilityResultsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilitySwitchCapabilityResultsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilitySwitchCapabilityResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // allowed_uplink_pc_id_range - computed: true, optional: false, required: false
  private _allowedUplinkPcIdRange = new DataIntersightCapabilitySwitchCapabilityResultsAllowedUplinkPcIdRangeList(this, "allowed_uplink_pc_id_range", false);
  public get allowedUplinkPcIdRange() {
    return this._allowedUplinkPcIdRange;
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightCapabilitySwitchCapabilityResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_fcoe_vlan - computed: true, optional: false, required: false
  public get defaultFcoeVlan() {
    return this.getNumberAttribute('default_fcoe_vlan');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // dynamic_vifs_supported - computed: true, optional: false, required: false
  public get dynamicVifsSupported() {
    return this.getBooleanAttribute('dynamic_vifs_supported');
  }

  // fan_modules_supported - computed: true, optional: false, required: false
  public get fanModulesSupported() {
    return this.getBooleanAttribute('fan_modules_supported');
  }

  // fc_end_host_mode_reserved_vsans - computed: true, optional: false, required: false
  private _fcEndHostModeReservedVsans = new DataIntersightCapabilitySwitchCapabilityResultsFcEndHostModeReservedVsansList(this, "fc_end_host_mode_reserved_vsans", false);
  public get fcEndHostModeReservedVsans() {
    return this._fcEndHostModeReservedVsans;
  }

  // fc_uplink_ports_auto_negotiation_supported - computed: true, optional: false, required: false
  public get fcUplinkPortsAutoNegotiationSupported() {
    return this.getBooleanAttribute('fc_uplink_ports_auto_negotiation_supported');
  }

  // imm_controls_vpcompression - computed: true, optional: false, required: false
  public get immControlsVpcompression() {
    return this.getBooleanAttribute('imm_controls_vpcompression');
  }

  // inter_cluster_link_vlan_supported - computed: true, optional: false, required: false
  public get interClusterLinkVlanSupported() {
    return this.getBooleanAttribute('inter_cluster_link_vlan_supported');
  }

  // locator_beacon_supported - computed: true, optional: false, required: false
  public get locatorBeaconSupported() {
    return this.getBooleanAttribute('locator_beacon_supported');
  }

  // macsec_supported_ports - computed: true, optional: false, required: false
  private _macsecSupportedPorts = new DataIntersightCapabilitySwitchCapabilityResultsMacsecSupportedPortsList(this, "macsec_supported_ports", false);
  public get macsecSupportedPorts() {
    return this._macsecSupportedPorts;
  }

  // max_ports - computed: true, optional: false, required: false
  public get maxPorts() {
    return this.getNumberAttribute('max_ports');
  }

  // max_slots - computed: true, optional: false, required: false
  public get maxSlots() {
    return this.getNumberAttribute('max_slots');
  }

  // min_version_map_for_switch_features - computed: true, optional: false, required: false
  private _minVersionMapForSwitchFeatures = new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapForSwitchFeaturesList(this, "min_version_map_for_switch_features", false);
  public get minVersionMapForSwitchFeatures() {
    return this._minVersionMapForSwitchFeatures;
  }

  // min_version_map_with_breakout_support - computed: true, optional: false, required: false
  private _minVersionMapWithBreakoutSupport = new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithBreakoutSupportList(this, "min_version_map_with_breakout_support", false);
  public get minVersionMapWithBreakoutSupport() {
    return this._minVersionMapWithBreakoutSupport;
  }

  // min_version_map_with_locator_led_support - computed: true, optional: false, required: false
  private _minVersionMapWithLocatorLedSupport = new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithLocatorLedSupportList(this, "min_version_map_with_locator_led_support", false);
  public get minVersionMapWithLocatorLedSupport() {
    return this._minVersionMapWithLocatorLedSupport;
  }

  // min_version_map_with_neg_auto25g_support - computed: true, optional: false, required: false
  private _minVersionMapWithNegAuto25GSupport = new DataIntersightCapabilitySwitchCapabilityResultsMinVersionMapWithNegAuto25GSupportList(this, "min_version_map_with_neg_auto25g_support", false);
  public get minVersionMapWithNegAuto25GSupport() {
    return this._minVersionMapWithNegAuto25GSupport;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_limits - computed: true, optional: false, required: false
  private _networkLimits = new DataIntersightCapabilitySwitchCapabilityResultsNetworkLimitsList(this, "network_limits", false);
  public get networkLimits() {
    return this._networkLimits;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightCapabilitySwitchCapabilityResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightCapabilitySwitchCapabilityResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getStringAttribute('pid');
  }

  // ports_supporting100g_speed - computed: true, optional: false, required: false
  private _portsSupporting100GSpeed = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting100GSpeedList(this, "ports_supporting100g_speed", false);
  public get portsSupporting100GSpeed() {
    return this._portsSupporting100GSpeed;
  }

  // ports_supporting10g_speed - computed: true, optional: false, required: false
  private _portsSupporting10GSpeed = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting10GSpeedList(this, "ports_supporting10g_speed", false);
  public get portsSupporting10GSpeed() {
    return this._portsSupporting10GSpeed;
  }

  // ports_supporting1g_speed - computed: true, optional: false, required: false
  private _portsSupporting1GSpeed = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting1GSpeedList(this, "ports_supporting1g_speed", false);
  public get portsSupporting1GSpeed() {
    return this._portsSupporting1GSpeed;
  }

  // ports_supporting25g_speed - computed: true, optional: false, required: false
  private _portsSupporting25GSpeed = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting25GSpeedList(this, "ports_supporting25g_speed", false);
  public get portsSupporting25GSpeed() {
    return this._portsSupporting25GSpeed;
  }

  // ports_supporting40g_speed - computed: true, optional: false, required: false
  private _portsSupporting40GSpeed = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupporting40GSpeedList(this, "ports_supporting40g_speed", false);
  public get portsSupporting40GSpeed() {
    return this._portsSupporting40GSpeed;
  }

  // ports_supporting_appliance_role - computed: true, optional: false, required: false
  private _portsSupportingApplianceRole = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingApplianceRoleList(this, "ports_supporting_appliance_role", false);
  public get portsSupportingApplianceRole() {
    return this._portsSupportingApplianceRole;
  }

  // ports_supporting_breakout - computed: true, optional: false, required: false
  private _portsSupportingBreakout = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingBreakoutList(this, "ports_supporting_breakout", false);
  public get portsSupportingBreakout() {
    return this._portsSupportingBreakout;
  }

  // ports_supporting_fcoe - computed: true, optional: false, required: false
  private _portsSupportingFcoe = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingFcoeList(this, "ports_supporting_fcoe", false);
  public get portsSupportingFcoe() {
    return this._portsSupportingFcoe;
  }

  // ports_supporting_inter_cluster_link - computed: true, optional: false, required: false
  private _portsSupportingInterClusterLink = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingInterClusterLinkList(this, "ports_supporting_inter_cluster_link", false);
  public get portsSupportingInterClusterLink() {
    return this._portsSupportingInterClusterLink;
  }

  // ports_supporting_server_role - computed: true, optional: false, required: false
  private _portsSupportingServerRole = new DataIntersightCapabilitySwitchCapabilityResultsPortsSupportingServerRoleList(this, "ports_supporting_server_role", false);
  public get portsSupportingServerRole() {
    return this._portsSupportingServerRole;
  }

  // reserved_vsans - computed: true, optional: false, required: false
  private _reservedVsans = new DataIntersightCapabilitySwitchCapabilityResultsReservedVsansList(this, "reserved_vsans", false);
  public get reservedVsans() {
    return this._reservedVsans;
  }

  // sereno_netflow_supported - computed: true, optional: false, required: false
  public get serenoNetflowSupported() {
    return this.getBooleanAttribute('sereno_netflow_supported');
  }

  // server_role_supported_on_breakout - computed: true, optional: false, required: false
  public get serverRoleSupportedOnBreakout() {
    return this.getListAttribute('server_role_supported_on_breakout');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // storage_limits - computed: true, optional: false, required: false
  private _storageLimits = new DataIntersightCapabilitySwitchCapabilityResultsStorageLimitsList(this, "storage_limits", false);
  public get storageLimits() {
    return this._storageLimits;
  }

  // switching_mode_capabilities - computed: true, optional: false, required: false
  private _switchingModeCapabilities = new DataIntersightCapabilitySwitchCapabilityResultsSwitchingModeCapabilitiesList(this, "switching_mode_capabilities", false);
  public get switchingModeCapabilities() {
    return this._switchingModeCapabilities;
  }

  // system_limits - computed: true, optional: false, required: false
  private _systemLimits = new DataIntersightCapabilitySwitchCapabilityResultsSystemLimitsList(this, "system_limits", false);
  public get systemLimits() {
    return this._systemLimits;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightCapabilitySwitchCapabilityResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // un_supported_equipment_model - computed: true, optional: false, required: false
  public get unSupportedEquipmentModel() {
    return this.getListAttribute('un_supported_equipment_model');
  }

  // unified_ports - computed: true, optional: false, required: false
  private _unifiedPorts = new DataIntersightCapabilitySwitchCapabilityResultsUnifiedPortsList(this, "unified_ports", false);
  public get unifiedPorts() {
    return this._unifiedPorts;
  }

  // unified_rule - computed: true, optional: false, required: false
  public get unifiedRule() {
    return this.getStringAttribute('unified_rule');
  }

  // uplink_admin_port_speed_neg_auto25_gbps_supported - computed: true, optional: false, required: false
  public get uplinkAdminPortSpeedNegAuto25GbpsSupported() {
    return this.getBooleanAttribute('uplink_admin_port_speed_neg_auto25_gbps_supported');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightCapabilitySwitchCapabilityResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vid - computed: true, optional: false, required: false
  public get vid() {
    return this.getStringAttribute('vid');
  }
}

export class DataIntersightCapabilitySwitchCapabilityResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityResultsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port-Channel ID in this range of port-channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_pc_id DataIntersightCapabilitySwitchCapability#end_pc_id}
  */
  readonly endPcId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port-Channel ID in this range of port-channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_pc_id DataIntersightCapabilitySwitchCapability#start_pc_id}
  */
  readonly startPcId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeOutputReference | DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_pc_id: cdktf.numberToTerraform(struct!.endPcId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_pc_id: cdktf.numberToTerraform(struct!.startPcId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeOutputReference | DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_pc_id: {
      value: cdktf.numberToHclTerraform(struct!.endPcId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_pc_id: {
      value: cdktf.numberToHclTerraform(struct!.startPcId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPcId = this._endPcId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPcId = this._startPcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPcId = undefined;
      this._objectType = undefined;
      this._startPcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPcId = value.endPcId;
      this._objectType = value.objectType;
      this._startPcId = value.startPcId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_pc_id - computed: false, optional: true, required: false
  private _endPcId?: number; 
  public get endPcId() {
    return this.getNumberAttribute('end_pc_id');
  }
  public set endPcId(value: number) {
    this._endPcId = value;
  }
  public resetEndPcId() {
    this._endPcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPcIdInput() {
    return this._endPcId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_pc_id - computed: false, optional: true, required: false
  private _startPcId?: number; 
  public get startPcId() {
    return this.getNumberAttribute('start_pc_id');
  }
  public set startPcId(value: number) {
    this._startPcId = value;
  }
  public resetStartPcId() {
    this._startPcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPcIdInput() {
    return this._startPcId;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#selector DataIntersightCapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilitySwitchCapabilityAncestorsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightCapabilitySwitchCapabilityAncestorsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightCapabilitySwitchCapabilityAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityAncestorsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Bundle version. Usually the first released bundle containing the specific device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#bundle_version DataIntersightCapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Bundled device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#device_firmware_version DataIntersightCapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bundle_version: cdktf.stringToTerraform(struct!.bundleVersion),
    class_id: cdktf.stringToTerraform(struct!.classId),
    device_firmware_version: cdktf.stringToTerraform(struct!.deviceFirmwareVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktf.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_firmware_version: {
      value: cdktf.stringToHclTerraform(struct!.deviceFirmwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._deviceFirmwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFirmwareVersion = this._deviceFirmwareVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bundle_version - computed: false, optional: true, required: false
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // device_firmware_version - computed: false, optional: true, required: false
  private _deviceFirmwareVersion?: string; 
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }
  public set deviceFirmwareVersion(value: string) {
    this._deviceFirmwareVersion = value;
  }
  public resetDeviceFirmwareVersion() {
    this._deviceFirmwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFirmwareVersionInput() {
    return this._deviceFirmwareVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Name of the feature for which the version map is applicable.
  * * `Unknown` - Unknown or Invalid feature in the equipment.
  * * `ServerRole` - Server Role support for Fabric Interconnect Direct Hardware.
  * * `FIAuditd` - AuditD feature for Fabric Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#feature_name DataIntersightCapabilitySwitchCapability#feature_name}
  */
  readonly featureName?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * version_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#version_map DataIntersightCapabilitySwitchCapability#version_map}
  */
  readonly versionMap?: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap;
}

export function dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    version_map: dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToTerraform(struct!.versionMap),
  }
}


export function dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_map: {
      value: dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToHclTerraform(struct!.versionMap),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._versionMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionMap = this._versionMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._featureName = undefined;
      this._objectType = undefined;
      this._versionMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._featureName = value.featureName;
      this._objectType = value.objectType;
      this._versionMap.internalValue = value.versionMap;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // version_map - computed: false, optional: true, required: false
  private _versionMap = new DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapOutputReference(this, "version_map");
  public get versionMap() {
    return this._versionMap;
  }
  public putVersionMap(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap) {
    this._versionMap.internalValue = value;
  }
  public resetVersionMap() {
    this._versionMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionMapInput() {
    return this._versionMap.internalValue;
  }
}

export class DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Bundle version. Usually the first released bundle containing the specific device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#bundle_version DataIntersightCapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Bundled device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#device_firmware_version DataIntersightCapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bundle_version: cdktf.stringToTerraform(struct!.bundleVersion),
    class_id: cdktf.stringToTerraform(struct!.classId),
    device_firmware_version: cdktf.stringToTerraform(struct!.deviceFirmwareVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktf.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_firmware_version: {
      value: cdktf.stringToHclTerraform(struct!.deviceFirmwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._deviceFirmwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFirmwareVersion = this._deviceFirmwareVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bundle_version - computed: false, optional: true, required: false
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // device_firmware_version - computed: false, optional: true, required: false
  private _deviceFirmwareVersion?: string; 
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }
  public set deviceFirmwareVersion(value: string) {
    this._deviceFirmwareVersion = value;
  }
  public resetDeviceFirmwareVersion() {
    this._deviceFirmwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFirmwareVersionInput() {
    return this._deviceFirmwareVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Bundle version. Usually the first released bundle containing the specific device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#bundle_version DataIntersightCapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Bundled device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#device_firmware_version DataIntersightCapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bundle_version: cdktf.stringToTerraform(struct!.bundleVersion),
    class_id: cdktf.stringToTerraform(struct!.classId),
    device_firmware_version: cdktf.stringToTerraform(struct!.deviceFirmwareVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktf.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_firmware_version: {
      value: cdktf.stringToHclTerraform(struct!.deviceFirmwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._deviceFirmwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFirmwareVersion = this._deviceFirmwareVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bundle_version - computed: false, optional: true, required: false
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // device_firmware_version - computed: false, optional: true, required: false
  private _deviceFirmwareVersion?: string; 
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }
  public set deviceFirmwareVersion(value: string) {
    this._deviceFirmwareVersion = value;
  }
  public resetDeviceFirmwareVersion() {
    this._deviceFirmwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFirmwareVersionInput() {
    return this._deviceFirmwareVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Bundle version. Usually the first released bundle containing the specific device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#bundle_version DataIntersightCapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Bundled device firmware version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#device_firmware_version DataIntersightCapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bundle_version: cdktf.stringToTerraform(struct!.bundleVersion),
    class_id: cdktf.stringToTerraform(struct!.classId),
    device_firmware_version: cdktf.stringToTerraform(struct!.deviceFirmwareVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportOutputReference | DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktf.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_firmware_version: {
      value: cdktf.stringToHclTerraform(struct!.deviceFirmwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._deviceFirmwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFirmwareVersion = this._deviceFirmwareVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bundle_version - computed: false, optional: true, required: false
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // device_firmware_version - computed: false, optional: true, required: false
  private _deviceFirmwareVersion?: string; 
  public get deviceFirmwareVersion() {
    return this.getStringAttribute('device_firmware_version');
  }
  public set deviceFirmwareVersion(value: string) {
    this._deviceFirmwareVersion = value;
  }
  public resetDeviceFirmwareVersion() {
    this._deviceFirmwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFirmwareVersionInput() {
    return this._deviceFirmwareVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityNetworkLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Maximum Compressed configurable VLANs on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#max_compressed_port_vlan_count DataIntersightCapabilitySwitchCapability#max_compressed_port_vlan_count}
  */
  readonly maxCompressedPortVlanCount?: number;
  /**
  * Maximum configurable VLANs on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#max_uncompressed_port_vlan_count DataIntersightCapabilitySwitchCapability#max_uncompressed_port_vlan_count}
  */
  readonly maxUncompressedPortVlanCount?: number;
  /**
  * Maximum configured and enabled Traffic Monitoring sessions on this Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_active_traffic_monitoring_sessions DataIntersightCapabilitySwitchCapability#maximum_active_traffic_monitoring_sessions}
  */
  readonly maximumActiveTrafficMonitoringSessions?: number;
  /**
  * Maximum configurable Ethernet port-channels on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_ethernet_port_channels DataIntersightCapabilitySwitchCapability#maximum_ethernet_port_channels}
  */
  readonly maximumEthernetPortChannels?: number;
  /**
  * Maximum configurable Ethernet Uplink ports on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_ethernet_uplink_ports DataIntersightCapabilitySwitchCapability#maximum_ethernet_uplink_ports}
  */
  readonly maximumEthernetUplinkPorts?: number;
  /**
  * Maximum configurable Fibre Channel port-channel member ports on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_fc_port_channel_members DataIntersightCapabilitySwitchCapability#maximum_fc_port_channel_members}
  */
  readonly maximumFcPortChannelMembers?: number;
  /**
  * Maximum configurable Fibre Channel port-channels on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_fc_port_channels DataIntersightCapabilitySwitchCapability#maximum_fc_port_channels}
  */
  readonly maximumFcPortChannels?: number;
  /**
  * Maximum configurable IGMP Groups on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_igmp_groups DataIntersightCapabilitySwitchCapability#maximum_igmp_groups}
  */
  readonly maximumIgmpGroups?: number;
  /**
  * Maximum configurable ports per each port-channel on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_port_channel_members DataIntersightCapabilitySwitchCapability#maximum_port_channel_members}
  */
  readonly maximumPortChannelMembers?: number;
  /**
  * Maximum configurable Primary Private VLANs on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_primary_vlan DataIntersightCapabilitySwitchCapability#maximum_primary_vlan}
  */
  readonly maximumPrimaryVlan?: number;
  /**
  * Maximum configurable Secondary Private VLANs on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_secondary_vlan DataIntersightCapabilitySwitchCapability#maximum_secondary_vlan}
  */
  readonly maximumSecondaryVlan?: number;
  /**
  * Maximum configurable Secondary VLANs per each Primary VLAN on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_secondary_vlan_per_primary DataIntersightCapabilitySwitchCapability#maximum_secondary_vlan_per_primary}
  */
  readonly maximumSecondaryVlanPerPrimary?: number;
  /**
  * Maximum allowes VIFs on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_vifs DataIntersightCapabilitySwitchCapability#maximum_vifs}
  */
  readonly maximumVifs?: number;
  /**
  * Maximum configurable VLANs on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_vlans DataIntersightCapabilitySwitchCapability#maximum_vlans}
  */
  readonly maximumVlans?: number;
  /**
  * Minimum required fans in 'active' state for this Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#minimum_active_fans DataIntersightCapabilitySwitchCapability#minimum_active_fans}
  */
  readonly minimumActiveFans?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightCapabilitySwitchCapabilityNetworkLimitsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityNetworkLimitsOutputReference | DataIntersightCapabilitySwitchCapabilityNetworkLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    max_compressed_port_vlan_count: cdktf.numberToTerraform(struct!.maxCompressedPortVlanCount),
    max_uncompressed_port_vlan_count: cdktf.numberToTerraform(struct!.maxUncompressedPortVlanCount),
    maximum_active_traffic_monitoring_sessions: cdktf.numberToTerraform(struct!.maximumActiveTrafficMonitoringSessions),
    maximum_ethernet_port_channels: cdktf.numberToTerraform(struct!.maximumEthernetPortChannels),
    maximum_ethernet_uplink_ports: cdktf.numberToTerraform(struct!.maximumEthernetUplinkPorts),
    maximum_fc_port_channel_members: cdktf.numberToTerraform(struct!.maximumFcPortChannelMembers),
    maximum_fc_port_channels: cdktf.numberToTerraform(struct!.maximumFcPortChannels),
    maximum_igmp_groups: cdktf.numberToTerraform(struct!.maximumIgmpGroups),
    maximum_port_channel_members: cdktf.numberToTerraform(struct!.maximumPortChannelMembers),
    maximum_primary_vlan: cdktf.numberToTerraform(struct!.maximumPrimaryVlan),
    maximum_secondary_vlan: cdktf.numberToTerraform(struct!.maximumSecondaryVlan),
    maximum_secondary_vlan_per_primary: cdktf.numberToTerraform(struct!.maximumSecondaryVlanPerPrimary),
    maximum_vifs: cdktf.numberToTerraform(struct!.maximumVifs),
    maximum_vlans: cdktf.numberToTerraform(struct!.maximumVlans),
    minimum_active_fans: cdktf.numberToTerraform(struct!.minimumActiveFans),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightCapabilitySwitchCapabilityNetworkLimitsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityNetworkLimitsOutputReference | DataIntersightCapabilitySwitchCapabilityNetworkLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_compressed_port_vlan_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCompressedPortVlanCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_uncompressed_port_vlan_count: {
      value: cdktf.numberToHclTerraform(struct!.maxUncompressedPortVlanCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_active_traffic_monitoring_sessions: {
      value: cdktf.numberToHclTerraform(struct!.maximumActiveTrafficMonitoringSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ethernet_port_channels: {
      value: cdktf.numberToHclTerraform(struct!.maximumEthernetPortChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ethernet_uplink_ports: {
      value: cdktf.numberToHclTerraform(struct!.maximumEthernetUplinkPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_fc_port_channel_members: {
      value: cdktf.numberToHclTerraform(struct!.maximumFcPortChannelMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_fc_port_channels: {
      value: cdktf.numberToHclTerraform(struct!.maximumFcPortChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_igmp_groups: {
      value: cdktf.numberToHclTerraform(struct!.maximumIgmpGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_port_channel_members: {
      value: cdktf.numberToHclTerraform(struct!.maximumPortChannelMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_primary_vlan: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrimaryVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_secondary_vlan: {
      value: cdktf.numberToHclTerraform(struct!.maximumSecondaryVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_secondary_vlan_per_primary: {
      value: cdktf.numberToHclTerraform(struct!.maximumSecondaryVlanPerPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_vifs: {
      value: cdktf.numberToHclTerraform(struct!.maximumVifs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_vlans: {
      value: cdktf.numberToHclTerraform(struct!.maximumVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_active_fans: {
      value: cdktf.numberToHclTerraform(struct!.minimumActiveFans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityNetworkLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityNetworkLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._maxCompressedPortVlanCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCompressedPortVlanCount = this._maxCompressedPortVlanCount;
    }
    if (this._maxUncompressedPortVlanCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUncompressedPortVlanCount = this._maxUncompressedPortVlanCount;
    }
    if (this._maximumActiveTrafficMonitoringSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumActiveTrafficMonitoringSessions = this._maximumActiveTrafficMonitoringSessions;
    }
    if (this._maximumEthernetPortChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEthernetPortChannels = this._maximumEthernetPortChannels;
    }
    if (this._maximumEthernetUplinkPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEthernetUplinkPorts = this._maximumEthernetUplinkPorts;
    }
    if (this._maximumFcPortChannelMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumFcPortChannelMembers = this._maximumFcPortChannelMembers;
    }
    if (this._maximumFcPortChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumFcPortChannels = this._maximumFcPortChannels;
    }
    if (this._maximumIgmpGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumIgmpGroups = this._maximumIgmpGroups;
    }
    if (this._maximumPortChannelMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPortChannelMembers = this._maximumPortChannelMembers;
    }
    if (this._maximumPrimaryVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrimaryVlan = this._maximumPrimaryVlan;
    }
    if (this._maximumSecondaryVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumSecondaryVlan = this._maximumSecondaryVlan;
    }
    if (this._maximumSecondaryVlanPerPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumSecondaryVlanPerPrimary = this._maximumSecondaryVlanPerPrimary;
    }
    if (this._maximumVifs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVifs = this._maximumVifs;
    }
    if (this._maximumVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVlans = this._maximumVlans;
    }
    if (this._minimumActiveFans !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumActiveFans = this._minimumActiveFans;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityNetworkLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._maxCompressedPortVlanCount = undefined;
      this._maxUncompressedPortVlanCount = undefined;
      this._maximumActiveTrafficMonitoringSessions = undefined;
      this._maximumEthernetPortChannels = undefined;
      this._maximumEthernetUplinkPorts = undefined;
      this._maximumFcPortChannelMembers = undefined;
      this._maximumFcPortChannels = undefined;
      this._maximumIgmpGroups = undefined;
      this._maximumPortChannelMembers = undefined;
      this._maximumPrimaryVlan = undefined;
      this._maximumSecondaryVlan = undefined;
      this._maximumSecondaryVlanPerPrimary = undefined;
      this._maximumVifs = undefined;
      this._maximumVlans = undefined;
      this._minimumActiveFans = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._maxCompressedPortVlanCount = value.maxCompressedPortVlanCount;
      this._maxUncompressedPortVlanCount = value.maxUncompressedPortVlanCount;
      this._maximumActiveTrafficMonitoringSessions = value.maximumActiveTrafficMonitoringSessions;
      this._maximumEthernetPortChannels = value.maximumEthernetPortChannels;
      this._maximumEthernetUplinkPorts = value.maximumEthernetUplinkPorts;
      this._maximumFcPortChannelMembers = value.maximumFcPortChannelMembers;
      this._maximumFcPortChannels = value.maximumFcPortChannels;
      this._maximumIgmpGroups = value.maximumIgmpGroups;
      this._maximumPortChannelMembers = value.maximumPortChannelMembers;
      this._maximumPrimaryVlan = value.maximumPrimaryVlan;
      this._maximumSecondaryVlan = value.maximumSecondaryVlan;
      this._maximumSecondaryVlanPerPrimary = value.maximumSecondaryVlanPerPrimary;
      this._maximumVifs = value.maximumVifs;
      this._maximumVlans = value.maximumVlans;
      this._minimumActiveFans = value.minimumActiveFans;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // max_compressed_port_vlan_count - computed: false, optional: true, required: false
  private _maxCompressedPortVlanCount?: number; 
  public get maxCompressedPortVlanCount() {
    return this.getNumberAttribute('max_compressed_port_vlan_count');
  }
  public set maxCompressedPortVlanCount(value: number) {
    this._maxCompressedPortVlanCount = value;
  }
  public resetMaxCompressedPortVlanCount() {
    this._maxCompressedPortVlanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCompressedPortVlanCountInput() {
    return this._maxCompressedPortVlanCount;
  }

  // max_uncompressed_port_vlan_count - computed: false, optional: true, required: false
  private _maxUncompressedPortVlanCount?: number; 
  public get maxUncompressedPortVlanCount() {
    return this.getNumberAttribute('max_uncompressed_port_vlan_count');
  }
  public set maxUncompressedPortVlanCount(value: number) {
    this._maxUncompressedPortVlanCount = value;
  }
  public resetMaxUncompressedPortVlanCount() {
    this._maxUncompressedPortVlanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUncompressedPortVlanCountInput() {
    return this._maxUncompressedPortVlanCount;
  }

  // maximum_active_traffic_monitoring_sessions - computed: false, optional: true, required: false
  private _maximumActiveTrafficMonitoringSessions?: number; 
  public get maximumActiveTrafficMonitoringSessions() {
    return this.getNumberAttribute('maximum_active_traffic_monitoring_sessions');
  }
  public set maximumActiveTrafficMonitoringSessions(value: number) {
    this._maximumActiveTrafficMonitoringSessions = value;
  }
  public resetMaximumActiveTrafficMonitoringSessions() {
    this._maximumActiveTrafficMonitoringSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumActiveTrafficMonitoringSessionsInput() {
    return this._maximumActiveTrafficMonitoringSessions;
  }

  // maximum_ethernet_port_channels - computed: false, optional: true, required: false
  private _maximumEthernetPortChannels?: number; 
  public get maximumEthernetPortChannels() {
    return this.getNumberAttribute('maximum_ethernet_port_channels');
  }
  public set maximumEthernetPortChannels(value: number) {
    this._maximumEthernetPortChannels = value;
  }
  public resetMaximumEthernetPortChannels() {
    this._maximumEthernetPortChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEthernetPortChannelsInput() {
    return this._maximumEthernetPortChannels;
  }

  // maximum_ethernet_uplink_ports - computed: false, optional: true, required: false
  private _maximumEthernetUplinkPorts?: number; 
  public get maximumEthernetUplinkPorts() {
    return this.getNumberAttribute('maximum_ethernet_uplink_ports');
  }
  public set maximumEthernetUplinkPorts(value: number) {
    this._maximumEthernetUplinkPorts = value;
  }
  public resetMaximumEthernetUplinkPorts() {
    this._maximumEthernetUplinkPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEthernetUplinkPortsInput() {
    return this._maximumEthernetUplinkPorts;
  }

  // maximum_fc_port_channel_members - computed: false, optional: true, required: false
  private _maximumFcPortChannelMembers?: number; 
  public get maximumFcPortChannelMembers() {
    return this.getNumberAttribute('maximum_fc_port_channel_members');
  }
  public set maximumFcPortChannelMembers(value: number) {
    this._maximumFcPortChannelMembers = value;
  }
  public resetMaximumFcPortChannelMembers() {
    this._maximumFcPortChannelMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumFcPortChannelMembersInput() {
    return this._maximumFcPortChannelMembers;
  }

  // maximum_fc_port_channels - computed: false, optional: true, required: false
  private _maximumFcPortChannels?: number; 
  public get maximumFcPortChannels() {
    return this.getNumberAttribute('maximum_fc_port_channels');
  }
  public set maximumFcPortChannels(value: number) {
    this._maximumFcPortChannels = value;
  }
  public resetMaximumFcPortChannels() {
    this._maximumFcPortChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumFcPortChannelsInput() {
    return this._maximumFcPortChannels;
  }

  // maximum_igmp_groups - computed: false, optional: true, required: false
  private _maximumIgmpGroups?: number; 
  public get maximumIgmpGroups() {
    return this.getNumberAttribute('maximum_igmp_groups');
  }
  public set maximumIgmpGroups(value: number) {
    this._maximumIgmpGroups = value;
  }
  public resetMaximumIgmpGroups() {
    this._maximumIgmpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumIgmpGroupsInput() {
    return this._maximumIgmpGroups;
  }

  // maximum_port_channel_members - computed: false, optional: true, required: false
  private _maximumPortChannelMembers?: number; 
  public get maximumPortChannelMembers() {
    return this.getNumberAttribute('maximum_port_channel_members');
  }
  public set maximumPortChannelMembers(value: number) {
    this._maximumPortChannelMembers = value;
  }
  public resetMaximumPortChannelMembers() {
    this._maximumPortChannelMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPortChannelMembersInput() {
    return this._maximumPortChannelMembers;
  }

  // maximum_primary_vlan - computed: false, optional: true, required: false
  private _maximumPrimaryVlan?: number; 
  public get maximumPrimaryVlan() {
    return this.getNumberAttribute('maximum_primary_vlan');
  }
  public set maximumPrimaryVlan(value: number) {
    this._maximumPrimaryVlan = value;
  }
  public resetMaximumPrimaryVlan() {
    this._maximumPrimaryVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrimaryVlanInput() {
    return this._maximumPrimaryVlan;
  }

  // maximum_secondary_vlan - computed: false, optional: true, required: false
  private _maximumSecondaryVlan?: number; 
  public get maximumSecondaryVlan() {
    return this.getNumberAttribute('maximum_secondary_vlan');
  }
  public set maximumSecondaryVlan(value: number) {
    this._maximumSecondaryVlan = value;
  }
  public resetMaximumSecondaryVlan() {
    this._maximumSecondaryVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSecondaryVlanInput() {
    return this._maximumSecondaryVlan;
  }

  // maximum_secondary_vlan_per_primary - computed: false, optional: true, required: false
  private _maximumSecondaryVlanPerPrimary?: number; 
  public get maximumSecondaryVlanPerPrimary() {
    return this.getNumberAttribute('maximum_secondary_vlan_per_primary');
  }
  public set maximumSecondaryVlanPerPrimary(value: number) {
    this._maximumSecondaryVlanPerPrimary = value;
  }
  public resetMaximumSecondaryVlanPerPrimary() {
    this._maximumSecondaryVlanPerPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSecondaryVlanPerPrimaryInput() {
    return this._maximumSecondaryVlanPerPrimary;
  }

  // maximum_vifs - computed: false, optional: true, required: false
  private _maximumVifs?: number; 
  public get maximumVifs() {
    return this.getNumberAttribute('maximum_vifs');
  }
  public set maximumVifs(value: number) {
    this._maximumVifs = value;
  }
  public resetMaximumVifs() {
    this._maximumVifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVifsInput() {
    return this._maximumVifs;
  }

  // maximum_vlans - computed: false, optional: true, required: false
  private _maximumVlans?: number; 
  public get maximumVlans() {
    return this.getNumberAttribute('maximum_vlans');
  }
  public set maximumVlans(value: number) {
    this._maximumVlans = value;
  }
  public resetMaximumVlans() {
    this._maximumVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVlansInput() {
    return this._maximumVlans;
  }

  // minimum_active_fans - computed: false, optional: true, required: false
  private _minimumActiveFans?: number; 
  public get minimumActiveFans() {
    return this.getNumberAttribute('minimum_active_fans');
  }
  public set minimumActiveFans(value: number) {
    this._minimumActiveFans = value;
  }
  public resetMinimumActiveFans() {
    this._minimumActiveFans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumActiveFansInput() {
    return this._minimumActiveFans;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#selector DataIntersightCapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilitySwitchCapabilityParentToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityParentOutputReference | DataIntersightCapabilitySwitchCapabilityParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightCapabilitySwitchCapabilityParentToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityParentOutputReference | DataIntersightCapabilitySwitchCapabilityParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#selector DataIntersightCapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilitySwitchCapabilityPermissionResourcesToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPermissionResourcesToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPermissionResourcesOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityReservedVsans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityReservedVsansToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityReservedVsansToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityReservedVsansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityReservedVsansList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityReservedVsans[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityReservedVsansOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityReservedVsansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityStorageLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Maximum user zones per Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_user_zone_count DataIntersightCapabilitySwitchCapability#maximum_user_zone_count}
  */
  readonly maximumUserZoneCount?: number;
  /**
  * Maximum configurable Virtual Fibre Channel interfaces on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_virtual_fc_interfaces DataIntersightCapabilitySwitchCapability#maximum_virtual_fc_interfaces}
  */
  readonly maximumVirtualFcInterfaces?: number;
  /**
  * Maximum configurable Virtual Fibre Channel interfaces per blade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_virtual_fc_interfaces_per_blade_server DataIntersightCapabilitySwitchCapability#maximum_virtual_fc_interfaces_per_blade_server}
  */
  readonly maximumVirtualFcInterfacesPerBladeServer?: number;
  /**
  * Maximum configurable VSANs on Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_vsans DataIntersightCapabilitySwitchCapability#maximum_vsans}
  */
  readonly maximumVsans?: number;
  /**
  * Zone limit per Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_zone_count DataIntersightCapabilitySwitchCapability#maximum_zone_count}
  */
  readonly maximumZoneCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightCapabilitySwitchCapabilityStorageLimitsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityStorageLimitsOutputReference | DataIntersightCapabilitySwitchCapabilityStorageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    maximum_user_zone_count: cdktf.numberToTerraform(struct!.maximumUserZoneCount),
    maximum_virtual_fc_interfaces: cdktf.numberToTerraform(struct!.maximumVirtualFcInterfaces),
    maximum_virtual_fc_interfaces_per_blade_server: cdktf.numberToTerraform(struct!.maximumVirtualFcInterfacesPerBladeServer),
    maximum_vsans: cdktf.numberToTerraform(struct!.maximumVsans),
    maximum_zone_count: cdktf.numberToTerraform(struct!.maximumZoneCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightCapabilitySwitchCapabilityStorageLimitsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityStorageLimitsOutputReference | DataIntersightCapabilitySwitchCapabilityStorageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_user_zone_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumUserZoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_virtual_fc_interfaces: {
      value: cdktf.numberToHclTerraform(struct!.maximumVirtualFcInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_virtual_fc_interfaces_per_blade_server: {
      value: cdktf.numberToHclTerraform(struct!.maximumVirtualFcInterfacesPerBladeServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_vsans: {
      value: cdktf.numberToHclTerraform(struct!.maximumVsans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_zone_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumZoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityStorageLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityStorageLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._maximumUserZoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumUserZoneCount = this._maximumUserZoneCount;
    }
    if (this._maximumVirtualFcInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVirtualFcInterfaces = this._maximumVirtualFcInterfaces;
    }
    if (this._maximumVirtualFcInterfacesPerBladeServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVirtualFcInterfacesPerBladeServer = this._maximumVirtualFcInterfacesPerBladeServer;
    }
    if (this._maximumVsans !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVsans = this._maximumVsans;
    }
    if (this._maximumZoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumZoneCount = this._maximumZoneCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityStorageLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._maximumUserZoneCount = undefined;
      this._maximumVirtualFcInterfaces = undefined;
      this._maximumVirtualFcInterfacesPerBladeServer = undefined;
      this._maximumVsans = undefined;
      this._maximumZoneCount = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._maximumUserZoneCount = value.maximumUserZoneCount;
      this._maximumVirtualFcInterfaces = value.maximumVirtualFcInterfaces;
      this._maximumVirtualFcInterfacesPerBladeServer = value.maximumVirtualFcInterfacesPerBladeServer;
      this._maximumVsans = value.maximumVsans;
      this._maximumZoneCount = value.maximumZoneCount;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // maximum_user_zone_count - computed: false, optional: true, required: false
  private _maximumUserZoneCount?: number; 
  public get maximumUserZoneCount() {
    return this.getNumberAttribute('maximum_user_zone_count');
  }
  public set maximumUserZoneCount(value: number) {
    this._maximumUserZoneCount = value;
  }
  public resetMaximumUserZoneCount() {
    this._maximumUserZoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumUserZoneCountInput() {
    return this._maximumUserZoneCount;
  }

  // maximum_virtual_fc_interfaces - computed: false, optional: true, required: false
  private _maximumVirtualFcInterfaces?: number; 
  public get maximumVirtualFcInterfaces() {
    return this.getNumberAttribute('maximum_virtual_fc_interfaces');
  }
  public set maximumVirtualFcInterfaces(value: number) {
    this._maximumVirtualFcInterfaces = value;
  }
  public resetMaximumVirtualFcInterfaces() {
    this._maximumVirtualFcInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVirtualFcInterfacesInput() {
    return this._maximumVirtualFcInterfaces;
  }

  // maximum_virtual_fc_interfaces_per_blade_server - computed: false, optional: true, required: false
  private _maximumVirtualFcInterfacesPerBladeServer?: number; 
  public get maximumVirtualFcInterfacesPerBladeServer() {
    return this.getNumberAttribute('maximum_virtual_fc_interfaces_per_blade_server');
  }
  public set maximumVirtualFcInterfacesPerBladeServer(value: number) {
    this._maximumVirtualFcInterfacesPerBladeServer = value;
  }
  public resetMaximumVirtualFcInterfacesPerBladeServer() {
    this._maximumVirtualFcInterfacesPerBladeServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVirtualFcInterfacesPerBladeServerInput() {
    return this._maximumVirtualFcInterfacesPerBladeServer;
  }

  // maximum_vsans - computed: false, optional: true, required: false
  private _maximumVsans?: number; 
  public get maximumVsans() {
    return this.getNumberAttribute('maximum_vsans');
  }
  public set maximumVsans(value: number) {
    this._maximumVsans = value;
  }
  public resetMaximumVsans() {
    this._maximumVsans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVsansInput() {
    return this._maximumVsans;
  }

  // maximum_zone_count - computed: false, optional: true, required: false
  private _maximumZoneCount?: number; 
  public get maximumZoneCount() {
    return this.getNumberAttribute('maximum_zone_count');
  }
  public set maximumZoneCount(value: number) {
    this._maximumZoneCount = value;
  }
  public resetMaximumZoneCount() {
    this._maximumZoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumZoneCountInput() {
    return this._maximumZoneCount;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Switching mode type (endhost, switch) of the switch.
  * * `end-host` - In end-host mode, the fabric interconnects appear to the upstream devices as end hosts with multiple links.In this mode, the switch does not run Spanning Tree Protocol and avoids loops by following a set of rules for traffic forwarding.In case of ethernet switching mode - Ethernet end-host mode is also known as Ethernet host virtualizer.
  * * `switch` - In switch mode, the switch runs Spanning Tree Protocol to avoid loops, and broadcast and multicast packets are handled in the traditional way.This is the traditional switch mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#switching_mode DataIntersightCapabilitySwitchCapability#switching_mode}
  */
  readonly switchingMode?: string;
  /**
  * VP Compression support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#vp_compression_supported DataIntersightCapabilitySwitchCapability#vp_compression_supported}
  */
  readonly vpCompressionSupported?: boolean | cdktf.IResolvable;
}

export function dataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesToTerraform(struct?: DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    switching_mode: cdktf.stringToTerraform(struct!.switchingMode),
    vp_compression_supported: cdktf.booleanToTerraform(struct!.vpCompressionSupported),
  }
}


export function dataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_mode: {
      value: cdktf.stringToHclTerraform(struct!.switchingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vp_compression_supported: {
      value: cdktf.booleanToHclTerraform(struct!.vpCompressionSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._switchingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingMode = this._switchingMode;
    }
    if (this._vpCompressionSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpCompressionSupported = this._vpCompressionSupported;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._switchingMode = undefined;
      this._vpCompressionSupported = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._switchingMode = value.switchingMode;
      this._vpCompressionSupported = value.vpCompressionSupported;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // switching_mode - computed: false, optional: true, required: false
  private _switchingMode?: string; 
  public get switchingMode() {
    return this.getStringAttribute('switching_mode');
  }
  public set switchingMode(value: string) {
    this._switchingMode = value;
  }
  public resetSwitchingMode() {
    this._switchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingModeInput() {
    return this._switchingMode;
  }

  // vp_compression_supported - computed: false, optional: true, required: false
  private _vpCompressionSupported?: boolean | cdktf.IResolvable; 
  public get vpCompressionSupported() {
    return this.getBooleanAttribute('vp_compression_supported');
  }
  public set vpCompressionSupported(value: boolean | cdktf.IResolvable) {
    this._vpCompressionSupported = value;
  }
  public resetVpCompressionSupported() {
    this._vpCompressionSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpCompressionSupportedInput() {
    return this._vpCompressionSupported;
  }
}

export class DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesOutputReference {
    return new DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilitySystemLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Maximum UCS chassis that can be connected to this Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_chassis_count DataIntersightCapabilitySwitchCapability#maximum_chassis_count}
  */
  readonly maximumChassisCount?: number;
  /**
  * Maximum UCS Fabric-extenders (FEX) per Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_fex_per_domain DataIntersightCapabilitySwitchCapability#maximum_fex_per_domain}
  */
  readonly maximumFexPerDomain?: number;
  /**
  * Maximum UCS servers per Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#maximum_servers_per_domain DataIntersightCapabilitySwitchCapability#maximum_servers_per_domain}
  */
  readonly maximumServersPerDomain?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightCapabilitySwitchCapabilitySystemLimitsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilitySystemLimitsOutputReference | DataIntersightCapabilitySwitchCapabilitySystemLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    maximum_chassis_count: cdktf.numberToTerraform(struct!.maximumChassisCount),
    maximum_fex_per_domain: cdktf.numberToTerraform(struct!.maximumFexPerDomain),
    maximum_servers_per_domain: cdktf.numberToTerraform(struct!.maximumServersPerDomain),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightCapabilitySwitchCapabilitySystemLimitsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilitySystemLimitsOutputReference | DataIntersightCapabilitySwitchCapabilitySystemLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_chassis_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumChassisCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_fex_per_domain: {
      value: cdktf.numberToHclTerraform(struct!.maximumFexPerDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_servers_per_domain: {
      value: cdktf.numberToHclTerraform(struct!.maximumServersPerDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilitySystemLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilitySystemLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._maximumChassisCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumChassisCount = this._maximumChassisCount;
    }
    if (this._maximumFexPerDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumFexPerDomain = this._maximumFexPerDomain;
    }
    if (this._maximumServersPerDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumServersPerDomain = this._maximumServersPerDomain;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilitySystemLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._maximumChassisCount = undefined;
      this._maximumFexPerDomain = undefined;
      this._maximumServersPerDomain = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._maximumChassisCount = value.maximumChassisCount;
      this._maximumFexPerDomain = value.maximumFexPerDomain;
      this._maximumServersPerDomain = value.maximumServersPerDomain;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // maximum_chassis_count - computed: false, optional: true, required: false
  private _maximumChassisCount?: number; 
  public get maximumChassisCount() {
    return this.getNumberAttribute('maximum_chassis_count');
  }
  public set maximumChassisCount(value: number) {
    this._maximumChassisCount = value;
  }
  public resetMaximumChassisCount() {
    this._maximumChassisCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumChassisCountInput() {
    return this._maximumChassisCount;
  }

  // maximum_fex_per_domain - computed: false, optional: true, required: false
  private _maximumFexPerDomain?: number; 
  public get maximumFexPerDomain() {
    return this.getNumberAttribute('maximum_fex_per_domain');
  }
  public set maximumFexPerDomain(value: number) {
    this._maximumFexPerDomain = value;
  }
  public resetMaximumFexPerDomain() {
    this._maximumFexPerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumFexPerDomainInput() {
    return this._maximumFexPerDomain;
  }

  // maximum_servers_per_domain - computed: false, optional: true, required: false
  private _maximumServersPerDomain?: number; 
  public get maximumServersPerDomain() {
    return this.getNumberAttribute('maximum_servers_per_domain');
  }
  public set maximumServersPerDomain(value: number) {
    this._maximumServersPerDomain = value;
  }
  public resetMaximumServersPerDomain() {
    this._maximumServersPerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumServersPerDomainInput() {
    return this._maximumServersPerDomain;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#selector DataIntersightCapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#selector DataIntersightCapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilitySwitchCapabilityTagsDefinitionToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityTagsDefinitionOutputReference | DataIntersightCapabilitySwitchCapabilityTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightCapabilitySwitchCapabilityTagsDefinitionToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityTagsDefinitionOutputReference | DataIntersightCapabilitySwitchCapabilityTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#key DataIntersightCapabilitySwitchCapability#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#propagated DataIntersightCapabilitySwitchCapability#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#type DataIntersightCapabilitySwitchCapability#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#value DataIntersightCapabilitySwitchCapability#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ancestor_definitions DataIntersightCapabilitySwitchCapability#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#definition DataIntersightCapabilitySwitchCapability#definition}
  */
  readonly definition?: DataIntersightCapabilitySwitchCapabilityTagsDefinition;
}

export function dataIntersightCapabilitySwitchCapabilityTagsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightCapabilitySwitchCapabilityTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightCapabilitySwitchCapabilityTagsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightCapabilitySwitchCapabilityTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilitySwitchCapabilityTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightCapabilitySwitchCapabilityTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightCapabilitySwitchCapabilityTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightCapabilitySwitchCapabilityTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightCapabilitySwitchCapabilityTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityTagsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityUnifiedPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Ending Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_port_id DataIntersightCapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Ending Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#end_slot_id DataIntersightCapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Starting Port ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_port_id DataIntersightCapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Starting Slot ID in this range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#start_slot_id DataIntersightCapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function dataIntersightCapabilitySwitchCapabilityUnifiedPortsToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    end_port_id: cdktf.numberToTerraform(struct!.endPortId),
    end_slot_id: cdktf.numberToTerraform(struct!.endSlotId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    start_port_id: cdktf.numberToTerraform(struct!.startPortId),
    start_slot_id: cdktf.numberToTerraform(struct!.startSlotId),
  }
}


export function dataIntersightCapabilitySwitchCapabilityUnifiedPortsToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port_id: {
      value: cdktf.numberToHclTerraform(struct!.endPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.endSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port_id: {
      value: cdktf.numberToHclTerraform(struct!.startPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_slot_id: {
      value: cdktf.numberToHclTerraform(struct!.startSlotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityUnifiedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._endPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortId = this._endPortId;
    }
    if (this._endSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSlotId = this._endSlotId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._startPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortId = this._startPortId;
    }
    if (this._startSlotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSlotId = this._startSlotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPortId = undefined;
      this._endSlotId = undefined;
      this._objectType = undefined;
      this._startPortId = undefined;
      this._startSlotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._endPortId = value.endPortId;
      this._endSlotId = value.endSlotId;
      this._objectType = value.objectType;
      this._startPortId = value.startPortId;
      this._startSlotId = value.startSlotId;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // end_port_id - computed: false, optional: true, required: false
  private _endPortId?: number; 
  public get endPortId() {
    return this.getNumberAttribute('end_port_id');
  }
  public set endPortId(value: number) {
    this._endPortId = value;
  }
  public resetEndPortId() {
    this._endPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortIdInput() {
    return this._endPortId;
  }

  // end_slot_id - computed: false, optional: true, required: false
  private _endSlotId?: number; 
  public get endSlotId() {
    return this.getNumberAttribute('end_slot_id');
  }
  public set endSlotId(value: number) {
    this._endSlotId = value;
  }
  public resetEndSlotId() {
    this._endSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSlotIdInput() {
    return this._endSlotId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // start_port_id - computed: false, optional: true, required: false
  private _startPortId?: number; 
  public get startPortId() {
    return this.getNumberAttribute('start_port_id');
  }
  public set startPortId(value: number) {
    this._startPortId = value;
  }
  public resetStartPortId() {
    this._startPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortIdInput() {
    return this._startPortId;
  }

  // start_slot_id - computed: false, optional: true, required: false
  private _startSlotId?: number; 
  public get startSlotId() {
    return this.getNumberAttribute('start_slot_id');
  }
  public set startSlotId(value: number) {
    this._startSlotId = value;
  }
  public resetStartSlotId() {
    this._startSlotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSlotIdInput() {
    return this._startSlotId;
  }
}

export class DataIntersightCapabilitySwitchCapabilityUnifiedPortsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityUnifiedPorts[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityUnifiedPortsOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityUnifiedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#selector DataIntersightCapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosOutputReference {
    return new DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilitySwitchCapabilityVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#moid DataIntersightCapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#selector DataIntersightCapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilitySwitchCapabilityVersionContextRefMoToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityVersionContextRefMoOutputReference | DataIntersightCapabilitySwitchCapabilityVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightCapabilitySwitchCapabilityVersionContextRefMoToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityVersionContextRefMoOutputReference | DataIntersightCapabilitySwitchCapabilityVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightCapabilitySwitchCapabilityVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#additional_properties DataIntersightCapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#class_id DataIntersightCapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#marked_for_deletion DataIntersightCapabilitySwitchCapability#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#nr_version DataIntersightCapabilitySwitchCapability#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#object_type DataIntersightCapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#timestamp DataIntersightCapabilitySwitchCapability#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#version_type DataIntersightCapabilitySwitchCapability#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#interested_mos DataIntersightCapabilitySwitchCapability#interested_mos}
  */
  readonly interestedMos?: DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#ref_mo DataIntersightCapabilitySwitchCapability#ref_mo}
  */
  readonly refMo?: DataIntersightCapabilitySwitchCapabilityVersionContextRefMo;
}

export function dataIntersightCapabilitySwitchCapabilityVersionContextToTerraform(struct?: DataIntersightCapabilitySwitchCapabilityVersionContextOutputReference | DataIntersightCapabilitySwitchCapabilityVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightCapabilitySwitchCapabilityVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightCapabilitySwitchCapabilityVersionContextToHclTerraform(struct?: DataIntersightCapabilitySwitchCapabilityVersionContextOutputReference | DataIntersightCapabilitySwitchCapabilityVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightCapabilitySwitchCapabilityVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilitySwitchCapabilityVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilitySwitchCapabilityVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilitySwitchCapabilityVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilitySwitchCapabilityVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightCapabilitySwitchCapabilityVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightCapabilitySwitchCapabilityVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightCapabilitySwitchCapabilityVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability intersight_capability_switch_capability}
*/
export class DataIntersightCapabilitySwitchCapability extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_capability_switch_capability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightCapabilitySwitchCapability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightCapabilitySwitchCapability to import
  * @param importFromId The id of the existing DataIntersightCapabilitySwitchCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightCapabilitySwitchCapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_capability_switch_capability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_switch_capability intersight_capability_switch_capability} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightCapabilitySwitchCapabilityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightCapabilitySwitchCapabilityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_capability_switch_capability',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72',
        providerVersionConstraint: '1.0.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._defaultFcoeVlan = config.defaultFcoeVlan;
    this._domainGroupMoid = config.domainGroupMoid;
    this._dynamicVifsSupported = config.dynamicVifsSupported;
    this._fanModulesSupported = config.fanModulesSupported;
    this._fcUplinkPortsAutoNegotiationSupported = config.fcUplinkPortsAutoNegotiationSupported;
    this._id = config.id;
    this._immControlsVpcompression = config.immControlsVpcompression;
    this._interClusterLinkVlanSupported = config.interClusterLinkVlanSupported;
    this._locatorBeaconSupported = config.locatorBeaconSupported;
    this._maxPorts = config.maxPorts;
    this._maxSlots = config.maxSlots;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._pid = config.pid;
    this._serenoNetflowSupported = config.serenoNetflowSupported;
    this._serverRoleSupportedOnBreakout = config.serverRoleSupportedOnBreakout;
    this._sharedScope = config.sharedScope;
    this._sku = config.sku;
    this._unSupportedEquipmentModel = config.unSupportedEquipmentModel;
    this._unifiedRule = config.unifiedRule;
    this._uplinkAdminPortSpeedNegAuto25GbpsSupported = config.uplinkAdminPortSpeedNegAuto25GbpsSupported;
    this._vid = config.vid;
    this._allowedUplinkPcIdRange.internalValue = config.allowedUplinkPcIdRange;
    this._ancestors.internalValue = config.ancestors;
    this._fcEndHostModeReservedVsans.internalValue = config.fcEndHostModeReservedVsans;
    this._macsecSupportedPorts.internalValue = config.macsecSupportedPorts;
    this._minVersionMapForSwitchFeatures.internalValue = config.minVersionMapForSwitchFeatures;
    this._minVersionMapWithBreakoutSupport.internalValue = config.minVersionMapWithBreakoutSupport;
    this._minVersionMapWithLocatorLedSupport.internalValue = config.minVersionMapWithLocatorLedSupport;
    this._minVersionMapWithNegAuto25GSupport.internalValue = config.minVersionMapWithNegAuto25GSupport;
    this._networkLimits.internalValue = config.networkLimits;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._portsSupporting100GSpeed.internalValue = config.portsSupporting100GSpeed;
    this._portsSupporting10GSpeed.internalValue = config.portsSupporting10GSpeed;
    this._portsSupporting1GSpeed.internalValue = config.portsSupporting1GSpeed;
    this._portsSupporting25GSpeed.internalValue = config.portsSupporting25GSpeed;
    this._portsSupporting40GSpeed.internalValue = config.portsSupporting40GSpeed;
    this._portsSupportingApplianceRole.internalValue = config.portsSupportingApplianceRole;
    this._portsSupportingBreakout.internalValue = config.portsSupportingBreakout;
    this._portsSupportingFcoe.internalValue = config.portsSupportingFcoe;
    this._portsSupportingInterClusterLink.internalValue = config.portsSupportingInterClusterLink;
    this._portsSupportingServerRole.internalValue = config.portsSupportingServerRole;
    this._reservedVsans.internalValue = config.reservedVsans;
    this._storageLimits.internalValue = config.storageLimits;
    this._switchingModeCapabilities.internalValue = config.switchingModeCapabilities;
    this._systemLimits.internalValue = config.systemLimits;
    this._tags.internalValue = config.tags;
    this._unifiedPorts.internalValue = config.unifiedPorts;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // default_fcoe_vlan - computed: false, optional: true, required: false
  private _defaultFcoeVlan?: number; 
  public get defaultFcoeVlan() {
    return this.getNumberAttribute('default_fcoe_vlan');
  }
  public set defaultFcoeVlan(value: number) {
    this._defaultFcoeVlan = value;
  }
  public resetDefaultFcoeVlan() {
    this._defaultFcoeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFcoeVlanInput() {
    return this._defaultFcoeVlan;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // dynamic_vifs_supported - computed: false, optional: true, required: false
  private _dynamicVifsSupported?: boolean | cdktf.IResolvable; 
  public get dynamicVifsSupported() {
    return this.getBooleanAttribute('dynamic_vifs_supported');
  }
  public set dynamicVifsSupported(value: boolean | cdktf.IResolvable) {
    this._dynamicVifsSupported = value;
  }
  public resetDynamicVifsSupported() {
    this._dynamicVifsSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVifsSupportedInput() {
    return this._dynamicVifsSupported;
  }

  // fan_modules_supported - computed: false, optional: true, required: false
  private _fanModulesSupported?: boolean | cdktf.IResolvable; 
  public get fanModulesSupported() {
    return this.getBooleanAttribute('fan_modules_supported');
  }
  public set fanModulesSupported(value: boolean | cdktf.IResolvable) {
    this._fanModulesSupported = value;
  }
  public resetFanModulesSupported() {
    this._fanModulesSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fanModulesSupportedInput() {
    return this._fanModulesSupported;
  }

  // fc_uplink_ports_auto_negotiation_supported - computed: false, optional: true, required: false
  private _fcUplinkPortsAutoNegotiationSupported?: boolean | cdktf.IResolvable; 
  public get fcUplinkPortsAutoNegotiationSupported() {
    return this.getBooleanAttribute('fc_uplink_ports_auto_negotiation_supported');
  }
  public set fcUplinkPortsAutoNegotiationSupported(value: boolean | cdktf.IResolvable) {
    this._fcUplinkPortsAutoNegotiationSupported = value;
  }
  public resetFcUplinkPortsAutoNegotiationSupported() {
    this._fcUplinkPortsAutoNegotiationSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcUplinkPortsAutoNegotiationSupportedInput() {
    return this._fcUplinkPortsAutoNegotiationSupported;
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

  // imm_controls_vpcompression - computed: false, optional: true, required: false
  private _immControlsVpcompression?: boolean | cdktf.IResolvable; 
  public get immControlsVpcompression() {
    return this.getBooleanAttribute('imm_controls_vpcompression');
  }
  public set immControlsVpcompression(value: boolean | cdktf.IResolvable) {
    this._immControlsVpcompression = value;
  }
  public resetImmControlsVpcompression() {
    this._immControlsVpcompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immControlsVpcompressionInput() {
    return this._immControlsVpcompression;
  }

  // inter_cluster_link_vlan_supported - computed: false, optional: true, required: false
  private _interClusterLinkVlanSupported?: boolean | cdktf.IResolvable; 
  public get interClusterLinkVlanSupported() {
    return this.getBooleanAttribute('inter_cluster_link_vlan_supported');
  }
  public set interClusterLinkVlanSupported(value: boolean | cdktf.IResolvable) {
    this._interClusterLinkVlanSupported = value;
  }
  public resetInterClusterLinkVlanSupported() {
    this._interClusterLinkVlanSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interClusterLinkVlanSupportedInput() {
    return this._interClusterLinkVlanSupported;
  }

  // locator_beacon_supported - computed: false, optional: true, required: false
  private _locatorBeaconSupported?: boolean | cdktf.IResolvable; 
  public get locatorBeaconSupported() {
    return this.getBooleanAttribute('locator_beacon_supported');
  }
  public set locatorBeaconSupported(value: boolean | cdktf.IResolvable) {
    this._locatorBeaconSupported = value;
  }
  public resetLocatorBeaconSupported() {
    this._locatorBeaconSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorBeaconSupportedInput() {
    return this._locatorBeaconSupported;
  }

  // max_ports - computed: false, optional: true, required: false
  private _maxPorts?: number; 
  public get maxPorts() {
    return this.getNumberAttribute('max_ports');
  }
  public set maxPorts(value: number) {
    this._maxPorts = value;
  }
  public resetMaxPorts() {
    this._maxPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortsInput() {
    return this._maxPorts;
  }

  // max_slots - computed: false, optional: true, required: false
  private _maxSlots?: number; 
  public get maxSlots() {
    return this.getNumberAttribute('max_slots');
  }
  public set maxSlots(value: number) {
    this._maxSlots = value;
  }
  public resetMaxSlots() {
    this._maxSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSlotsInput() {
    return this._maxSlots;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: string; 
  public get pid() {
    return this.getStringAttribute('pid');
  }
  public set pid(value: string) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightCapabilitySwitchCapabilityResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // sereno_netflow_supported - computed: false, optional: true, required: false
  private _serenoNetflowSupported?: boolean | cdktf.IResolvable; 
  public get serenoNetflowSupported() {
    return this.getBooleanAttribute('sereno_netflow_supported');
  }
  public set serenoNetflowSupported(value: boolean | cdktf.IResolvable) {
    this._serenoNetflowSupported = value;
  }
  public resetSerenoNetflowSupported() {
    this._serenoNetflowSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serenoNetflowSupportedInput() {
    return this._serenoNetflowSupported;
  }

  // server_role_supported_on_breakout - computed: false, optional: true, required: false
  private _serverRoleSupportedOnBreakout?: string[]; 
  public get serverRoleSupportedOnBreakout() {
    return this.getListAttribute('server_role_supported_on_breakout');
  }
  public set serverRoleSupportedOnBreakout(value: string[]) {
    this._serverRoleSupportedOnBreakout = value;
  }
  public resetServerRoleSupportedOnBreakout() {
    this._serverRoleSupportedOnBreakout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRoleSupportedOnBreakoutInput() {
    return this._serverRoleSupportedOnBreakout;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // un_supported_equipment_model - computed: false, optional: true, required: false
  private _unSupportedEquipmentModel?: string[]; 
  public get unSupportedEquipmentModel() {
    return this.getListAttribute('un_supported_equipment_model');
  }
  public set unSupportedEquipmentModel(value: string[]) {
    this._unSupportedEquipmentModel = value;
  }
  public resetUnSupportedEquipmentModel() {
    this._unSupportedEquipmentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unSupportedEquipmentModelInput() {
    return this._unSupportedEquipmentModel;
  }

  // unified_rule - computed: false, optional: true, required: false
  private _unifiedRule?: string; 
  public get unifiedRule() {
    return this.getStringAttribute('unified_rule');
  }
  public set unifiedRule(value: string) {
    this._unifiedRule = value;
  }
  public resetUnifiedRule() {
    this._unifiedRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedRuleInput() {
    return this._unifiedRule;
  }

  // uplink_admin_port_speed_neg_auto25_gbps_supported - computed: false, optional: true, required: false
  private _uplinkAdminPortSpeedNegAuto25GbpsSupported?: boolean | cdktf.IResolvable; 
  public get uplinkAdminPortSpeedNegAuto25GbpsSupported() {
    return this.getBooleanAttribute('uplink_admin_port_speed_neg_auto25_gbps_supported');
  }
  public set uplinkAdminPortSpeedNegAuto25GbpsSupported(value: boolean | cdktf.IResolvable) {
    this._uplinkAdminPortSpeedNegAuto25GbpsSupported = value;
  }
  public resetUplinkAdminPortSpeedNegAuto25GbpsSupported() {
    this._uplinkAdminPortSpeedNegAuto25GbpsSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkAdminPortSpeedNegAuto25GbpsSupportedInput() {
    return this._uplinkAdminPortSpeedNegAuto25GbpsSupported;
  }

  // vid - computed: false, optional: true, required: false
  private _vid?: string; 
  public get vid() {
    return this.getStringAttribute('vid');
  }
  public set vid(value: string) {
    this._vid = value;
  }
  public resetVid() {
    this._vid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vidInput() {
    return this._vid;
  }

  // allowed_uplink_pc_id_range - computed: false, optional: true, required: false
  private _allowedUplinkPcIdRange = new DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeOutputReference(this, "allowed_uplink_pc_id_range");
  public get allowedUplinkPcIdRange() {
    return this._allowedUplinkPcIdRange;
  }
  public putAllowedUplinkPcIdRange(value: DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRange) {
    this._allowedUplinkPcIdRange.internalValue = value;
  }
  public resetAllowedUplinkPcIdRange() {
    this._allowedUplinkPcIdRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUplinkPcIdRangeInput() {
    return this._allowedUplinkPcIdRange.internalValue;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightCapabilitySwitchCapabilityAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightCapabilitySwitchCapabilityAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // fc_end_host_mode_reserved_vsans - computed: false, optional: true, required: false
  private _fcEndHostModeReservedVsans = new DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansList(this, "fc_end_host_mode_reserved_vsans", false);
  public get fcEndHostModeReservedVsans() {
    return this._fcEndHostModeReservedVsans;
  }
  public putFcEndHostModeReservedVsans(value: DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsans[] | cdktf.IResolvable) {
    this._fcEndHostModeReservedVsans.internalValue = value;
  }
  public resetFcEndHostModeReservedVsans() {
    this._fcEndHostModeReservedVsans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcEndHostModeReservedVsansInput() {
    return this._fcEndHostModeReservedVsans.internalValue;
  }

  // macsec_supported_ports - computed: false, optional: true, required: false
  private _macsecSupportedPorts = new DataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsList(this, "macsec_supported_ports", false);
  public get macsecSupportedPorts() {
    return this._macsecSupportedPorts;
  }
  public putMacsecSupportedPorts(value: DataIntersightCapabilitySwitchCapabilityMacsecSupportedPorts[] | cdktf.IResolvable) {
    this._macsecSupportedPorts.internalValue = value;
  }
  public resetMacsecSupportedPorts() {
    this._macsecSupportedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecSupportedPortsInput() {
    return this._macsecSupportedPorts.internalValue;
  }

  // min_version_map_for_switch_features - computed: false, optional: true, required: false
  private _minVersionMapForSwitchFeatures = new DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesList(this, "min_version_map_for_switch_features", false);
  public get minVersionMapForSwitchFeatures() {
    return this._minVersionMapForSwitchFeatures;
  }
  public putMinVersionMapForSwitchFeatures(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeatures[] | cdktf.IResolvable) {
    this._minVersionMapForSwitchFeatures.internalValue = value;
  }
  public resetMinVersionMapForSwitchFeatures() {
    this._minVersionMapForSwitchFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapForSwitchFeaturesInput() {
    return this._minVersionMapForSwitchFeatures.internalValue;
  }

  // min_version_map_with_breakout_support - computed: false, optional: true, required: false
  private _minVersionMapWithBreakoutSupport = new DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportOutputReference(this, "min_version_map_with_breakout_support");
  public get minVersionMapWithBreakoutSupport() {
    return this._minVersionMapWithBreakoutSupport;
  }
  public putMinVersionMapWithBreakoutSupport(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport) {
    this._minVersionMapWithBreakoutSupport.internalValue = value;
  }
  public resetMinVersionMapWithBreakoutSupport() {
    this._minVersionMapWithBreakoutSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapWithBreakoutSupportInput() {
    return this._minVersionMapWithBreakoutSupport.internalValue;
  }

  // min_version_map_with_locator_led_support - computed: false, optional: true, required: false
  private _minVersionMapWithLocatorLedSupport = new DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportOutputReference(this, "min_version_map_with_locator_led_support");
  public get minVersionMapWithLocatorLedSupport() {
    return this._minVersionMapWithLocatorLedSupport;
  }
  public putMinVersionMapWithLocatorLedSupport(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport) {
    this._minVersionMapWithLocatorLedSupport.internalValue = value;
  }
  public resetMinVersionMapWithLocatorLedSupport() {
    this._minVersionMapWithLocatorLedSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapWithLocatorLedSupportInput() {
    return this._minVersionMapWithLocatorLedSupport.internalValue;
  }

  // min_version_map_with_neg_auto25g_support - computed: false, optional: true, required: false
  private _minVersionMapWithNegAuto25GSupport = new DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportOutputReference(this, "min_version_map_with_neg_auto25g_support");
  public get minVersionMapWithNegAuto25GSupport() {
    return this._minVersionMapWithNegAuto25GSupport;
  }
  public putMinVersionMapWithNegAuto25GSupport(value: DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport) {
    this._minVersionMapWithNegAuto25GSupport.internalValue = value;
  }
  public resetMinVersionMapWithNegAuto25GSupport() {
    this._minVersionMapWithNegAuto25GSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapWithNegAuto25GSupportInput() {
    return this._minVersionMapWithNegAuto25GSupport.internalValue;
  }

  // network_limits - computed: false, optional: true, required: false
  private _networkLimits = new DataIntersightCapabilitySwitchCapabilityNetworkLimitsOutputReference(this, "network_limits");
  public get networkLimits() {
    return this._networkLimits;
  }
  public putNetworkLimits(value: DataIntersightCapabilitySwitchCapabilityNetworkLimits) {
    this._networkLimits.internalValue = value;
  }
  public resetNetworkLimits() {
    this._networkLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLimitsInput() {
    return this._networkLimits.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightCapabilitySwitchCapabilityParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightCapabilitySwitchCapabilityParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightCapabilitySwitchCapabilityPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightCapabilitySwitchCapabilityPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // ports_supporting100g_speed - computed: false, optional: true, required: false
  private _portsSupporting100GSpeed = new DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedList(this, "ports_supporting100g_speed", false);
  public get portsSupporting100GSpeed() {
    return this._portsSupporting100GSpeed;
  }
  public putPortsSupporting100GSpeed(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting100GSpeed.internalValue = value;
  }
  public resetPortsSupporting100GSpeed() {
    this._portsSupporting100GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting100GSpeedInput() {
    return this._portsSupporting100GSpeed.internalValue;
  }

  // ports_supporting10g_speed - computed: false, optional: true, required: false
  private _portsSupporting10GSpeed = new DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedList(this, "ports_supporting10g_speed", false);
  public get portsSupporting10GSpeed() {
    return this._portsSupporting10GSpeed;
  }
  public putPortsSupporting10GSpeed(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting10GSpeed.internalValue = value;
  }
  public resetPortsSupporting10GSpeed() {
    this._portsSupporting10GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting10GSpeedInput() {
    return this._portsSupporting10GSpeed.internalValue;
  }

  // ports_supporting1g_speed - computed: false, optional: true, required: false
  private _portsSupporting1GSpeed = new DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedList(this, "ports_supporting1g_speed", false);
  public get portsSupporting1GSpeed() {
    return this._portsSupporting1GSpeed;
  }
  public putPortsSupporting1GSpeed(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting1GSpeed.internalValue = value;
  }
  public resetPortsSupporting1GSpeed() {
    this._portsSupporting1GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting1GSpeedInput() {
    return this._portsSupporting1GSpeed.internalValue;
  }

  // ports_supporting25g_speed - computed: false, optional: true, required: false
  private _portsSupporting25GSpeed = new DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedList(this, "ports_supporting25g_speed", false);
  public get portsSupporting25GSpeed() {
    return this._portsSupporting25GSpeed;
  }
  public putPortsSupporting25GSpeed(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting25GSpeed.internalValue = value;
  }
  public resetPortsSupporting25GSpeed() {
    this._portsSupporting25GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting25GSpeedInput() {
    return this._portsSupporting25GSpeed.internalValue;
  }

  // ports_supporting40g_speed - computed: false, optional: true, required: false
  private _portsSupporting40GSpeed = new DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedList(this, "ports_supporting40g_speed", false);
  public get portsSupporting40GSpeed() {
    return this._portsSupporting40GSpeed;
  }
  public putPortsSupporting40GSpeed(value: DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting40GSpeed.internalValue = value;
  }
  public resetPortsSupporting40GSpeed() {
    this._portsSupporting40GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting40GSpeedInput() {
    return this._portsSupporting40GSpeed.internalValue;
  }

  // ports_supporting_appliance_role - computed: false, optional: true, required: false
  private _portsSupportingApplianceRole = new DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleList(this, "ports_supporting_appliance_role", false);
  public get portsSupportingApplianceRole() {
    return this._portsSupportingApplianceRole;
  }
  public putPortsSupportingApplianceRole(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRole[] | cdktf.IResolvable) {
    this._portsSupportingApplianceRole.internalValue = value;
  }
  public resetPortsSupportingApplianceRole() {
    this._portsSupportingApplianceRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingApplianceRoleInput() {
    return this._portsSupportingApplianceRole.internalValue;
  }

  // ports_supporting_breakout - computed: false, optional: true, required: false
  private _portsSupportingBreakout = new DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutList(this, "ports_supporting_breakout", false);
  public get portsSupportingBreakout() {
    return this._portsSupportingBreakout;
  }
  public putPortsSupportingBreakout(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakout[] | cdktf.IResolvable) {
    this._portsSupportingBreakout.internalValue = value;
  }
  public resetPortsSupportingBreakout() {
    this._portsSupportingBreakout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingBreakoutInput() {
    return this._portsSupportingBreakout.internalValue;
  }

  // ports_supporting_fcoe - computed: false, optional: true, required: false
  private _portsSupportingFcoe = new DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeList(this, "ports_supporting_fcoe", false);
  public get portsSupportingFcoe() {
    return this._portsSupportingFcoe;
  }
  public putPortsSupportingFcoe(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoe[] | cdktf.IResolvable) {
    this._portsSupportingFcoe.internalValue = value;
  }
  public resetPortsSupportingFcoe() {
    this._portsSupportingFcoe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingFcoeInput() {
    return this._portsSupportingFcoe.internalValue;
  }

  // ports_supporting_inter_cluster_link - computed: false, optional: true, required: false
  private _portsSupportingInterClusterLink = new DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkList(this, "ports_supporting_inter_cluster_link", false);
  public get portsSupportingInterClusterLink() {
    return this._portsSupportingInterClusterLink;
  }
  public putPortsSupportingInterClusterLink(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLink[] | cdktf.IResolvable) {
    this._portsSupportingInterClusterLink.internalValue = value;
  }
  public resetPortsSupportingInterClusterLink() {
    this._portsSupportingInterClusterLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingInterClusterLinkInput() {
    return this._portsSupportingInterClusterLink.internalValue;
  }

  // ports_supporting_server_role - computed: false, optional: true, required: false
  private _portsSupportingServerRole = new DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleList(this, "ports_supporting_server_role", false);
  public get portsSupportingServerRole() {
    return this._portsSupportingServerRole;
  }
  public putPortsSupportingServerRole(value: DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRole[] | cdktf.IResolvable) {
    this._portsSupportingServerRole.internalValue = value;
  }
  public resetPortsSupportingServerRole() {
    this._portsSupportingServerRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingServerRoleInput() {
    return this._portsSupportingServerRole.internalValue;
  }

  // reserved_vsans - computed: false, optional: true, required: false
  private _reservedVsans = new DataIntersightCapabilitySwitchCapabilityReservedVsansList(this, "reserved_vsans", false);
  public get reservedVsans() {
    return this._reservedVsans;
  }
  public putReservedVsans(value: DataIntersightCapabilitySwitchCapabilityReservedVsans[] | cdktf.IResolvable) {
    this._reservedVsans.internalValue = value;
  }
  public resetReservedVsans() {
    this._reservedVsans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedVsansInput() {
    return this._reservedVsans.internalValue;
  }

  // storage_limits - computed: false, optional: true, required: false
  private _storageLimits = new DataIntersightCapabilitySwitchCapabilityStorageLimitsOutputReference(this, "storage_limits");
  public get storageLimits() {
    return this._storageLimits;
  }
  public putStorageLimits(value: DataIntersightCapabilitySwitchCapabilityStorageLimits) {
    this._storageLimits.internalValue = value;
  }
  public resetStorageLimits() {
    this._storageLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitsInput() {
    return this._storageLimits.internalValue;
  }

  // switching_mode_capabilities - computed: false, optional: true, required: false
  private _switchingModeCapabilities = new DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesList(this, "switching_mode_capabilities", false);
  public get switchingModeCapabilities() {
    return this._switchingModeCapabilities;
  }
  public putSwitchingModeCapabilities(value: DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilities[] | cdktf.IResolvable) {
    this._switchingModeCapabilities.internalValue = value;
  }
  public resetSwitchingModeCapabilities() {
    this._switchingModeCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingModeCapabilitiesInput() {
    return this._switchingModeCapabilities.internalValue;
  }

  // system_limits - computed: false, optional: true, required: false
  private _systemLimits = new DataIntersightCapabilitySwitchCapabilitySystemLimitsOutputReference(this, "system_limits");
  public get systemLimits() {
    return this._systemLimits;
  }
  public putSystemLimits(value: DataIntersightCapabilitySwitchCapabilitySystemLimits) {
    this._systemLimits.internalValue = value;
  }
  public resetSystemLimits() {
    this._systemLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLimitsInput() {
    return this._systemLimits.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightCapabilitySwitchCapabilityTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightCapabilitySwitchCapabilityTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // unified_ports - computed: false, optional: true, required: false
  private _unifiedPorts = new DataIntersightCapabilitySwitchCapabilityUnifiedPortsList(this, "unified_ports", false);
  public get unifiedPorts() {
    return this._unifiedPorts;
  }
  public putUnifiedPorts(value: DataIntersightCapabilitySwitchCapabilityUnifiedPorts[] | cdktf.IResolvable) {
    this._unifiedPorts.internalValue = value;
  }
  public resetUnifiedPorts() {
    this._unifiedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedPortsInput() {
    return this._unifiedPorts.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightCapabilitySwitchCapabilityVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightCapabilitySwitchCapabilityVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      default_fcoe_vlan: cdktf.numberToTerraform(this._defaultFcoeVlan),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      dynamic_vifs_supported: cdktf.booleanToTerraform(this._dynamicVifsSupported),
      fan_modules_supported: cdktf.booleanToTerraform(this._fanModulesSupported),
      fc_uplink_ports_auto_negotiation_supported: cdktf.booleanToTerraform(this._fcUplinkPortsAutoNegotiationSupported),
      id: cdktf.stringToTerraform(this._id),
      imm_controls_vpcompression: cdktf.booleanToTerraform(this._immControlsVpcompression),
      inter_cluster_link_vlan_supported: cdktf.booleanToTerraform(this._interClusterLinkVlanSupported),
      locator_beacon_supported: cdktf.booleanToTerraform(this._locatorBeaconSupported),
      max_ports: cdktf.numberToTerraform(this._maxPorts),
      max_slots: cdktf.numberToTerraform(this._maxSlots),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      pid: cdktf.stringToTerraform(this._pid),
      sereno_netflow_supported: cdktf.booleanToTerraform(this._serenoNetflowSupported),
      server_role_supported_on_breakout: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverRoleSupportedOnBreakout),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      sku: cdktf.stringToTerraform(this._sku),
      un_supported_equipment_model: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unSupportedEquipmentModel),
      unified_rule: cdktf.stringToTerraform(this._unifiedRule),
      uplink_admin_port_speed_neg_auto25_gbps_supported: cdktf.booleanToTerraform(this._uplinkAdminPortSpeedNegAuto25GbpsSupported),
      vid: cdktf.stringToTerraform(this._vid),
      allowed_uplink_pc_id_range: dataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeToTerraform(this._allowedUplinkPcIdRange.internalValue),
      ancestors: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityAncestorsToTerraform, true)(this._ancestors.internalValue),
      fc_end_host_mode_reserved_vsans: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansToTerraform, true)(this._fcEndHostModeReservedVsans.internalValue),
      macsec_supported_ports: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsToTerraform, true)(this._macsecSupportedPorts.internalValue),
      min_version_map_for_switch_features: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToTerraform, true)(this._minVersionMapForSwitchFeatures.internalValue),
      min_version_map_with_breakout_support: dataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToTerraform(this._minVersionMapWithBreakoutSupport.internalValue),
      min_version_map_with_locator_led_support: dataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToTerraform(this._minVersionMapWithLocatorLedSupport.internalValue),
      min_version_map_with_neg_auto25g_support: dataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToTerraform(this._minVersionMapWithNegAuto25GSupport.internalValue),
      network_limits: dataIntersightCapabilitySwitchCapabilityNetworkLimitsToTerraform(this._networkLimits.internalValue),
      parent: dataIntersightCapabilitySwitchCapabilityParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      ports_supporting100g_speed: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedToTerraform, true)(this._portsSupporting100GSpeed.internalValue),
      ports_supporting10g_speed: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedToTerraform, true)(this._portsSupporting10GSpeed.internalValue),
      ports_supporting1g_speed: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedToTerraform, true)(this._portsSupporting1GSpeed.internalValue),
      ports_supporting25g_speed: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedToTerraform, true)(this._portsSupporting25GSpeed.internalValue),
      ports_supporting40g_speed: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedToTerraform, true)(this._portsSupporting40GSpeed.internalValue),
      ports_supporting_appliance_role: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleToTerraform, true)(this._portsSupportingApplianceRole.internalValue),
      ports_supporting_breakout: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutToTerraform, true)(this._portsSupportingBreakout.internalValue),
      ports_supporting_fcoe: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeToTerraform, true)(this._portsSupportingFcoe.internalValue),
      ports_supporting_inter_cluster_link: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkToTerraform, true)(this._portsSupportingInterClusterLink.internalValue),
      ports_supporting_server_role: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleToTerraform, true)(this._portsSupportingServerRole.internalValue),
      reserved_vsans: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityReservedVsansToTerraform, true)(this._reservedVsans.internalValue),
      storage_limits: dataIntersightCapabilitySwitchCapabilityStorageLimitsToTerraform(this._storageLimits.internalValue),
      switching_mode_capabilities: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesToTerraform, true)(this._switchingModeCapabilities.internalValue),
      system_limits: dataIntersightCapabilitySwitchCapabilitySystemLimitsToTerraform(this._systemLimits.internalValue),
      tags: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityTagsToTerraform, true)(this._tags.internalValue),
      unified_ports: cdktf.listMapper(dataIntersightCapabilitySwitchCapabilityUnifiedPortsToTerraform, true)(this._unifiedPorts.internalValue),
      version_context: dataIntersightCapabilitySwitchCapabilityVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_fcoe_vlan: {
        value: cdktf.numberToHclTerraform(this._defaultFcoeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_vifs_supported: {
        value: cdktf.booleanToHclTerraform(this._dynamicVifsSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fan_modules_supported: {
        value: cdktf.booleanToHclTerraform(this._fanModulesSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fc_uplink_ports_auto_negotiation_supported: {
        value: cdktf.booleanToHclTerraform(this._fcUplinkPortsAutoNegotiationSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imm_controls_vpcompression: {
        value: cdktf.booleanToHclTerraform(this._immControlsVpcompression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inter_cluster_link_vlan_supported: {
        value: cdktf.booleanToHclTerraform(this._interClusterLinkVlanSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      locator_beacon_supported: {
        value: cdktf.booleanToHclTerraform(this._locatorBeaconSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_ports: {
        value: cdktf.numberToHclTerraform(this._maxPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_slots: {
        value: cdktf.numberToHclTerraform(this._maxSlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
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
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pid: {
        value: cdktf.stringToHclTerraform(this._pid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sereno_netflow_supported: {
        value: cdktf.booleanToHclTerraform(this._serenoNetflowSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_role_supported_on_breakout: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverRoleSupportedOnBreakout),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      un_supported_equipment_model: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unSupportedEquipmentModel),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unified_rule: {
        value: cdktf.stringToHclTerraform(this._unifiedRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_admin_port_speed_neg_auto25_gbps_supported: {
        value: cdktf.booleanToHclTerraform(this._uplinkAdminPortSpeedNegAuto25GbpsSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vid: {
        value: cdktf.stringToHclTerraform(this._vid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_uplink_pc_id_range: {
        value: dataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeToHclTerraform(this._allowedUplinkPcIdRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityAllowedUplinkPcIdRangeList",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityAncestorsList",
      },
      fc_end_host_mode_reserved_vsans: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansToHclTerraform, true)(this._fcEndHostModeReservedVsans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityFcEndHostModeReservedVsansList",
      },
      macsec_supported_ports: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsToHclTerraform, true)(this._macsecSupportedPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityMacsecSupportedPortsList",
      },
      min_version_map_for_switch_features: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToHclTerraform, true)(this._minVersionMapForSwitchFeatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesList",
      },
      min_version_map_with_breakout_support: {
        value: dataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToHclTerraform(this._minVersionMapWithBreakoutSupport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportList",
      },
      min_version_map_with_locator_led_support: {
        value: dataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToHclTerraform(this._minVersionMapWithLocatorLedSupport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportList",
      },
      min_version_map_with_neg_auto25g_support: {
        value: dataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToHclTerraform(this._minVersionMapWithNegAuto25GSupport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportList",
      },
      network_limits: {
        value: dataIntersightCapabilitySwitchCapabilityNetworkLimitsToHclTerraform(this._networkLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityNetworkLimitsList",
      },
      parent: {
        value: dataIntersightCapabilitySwitchCapabilityParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPermissionResourcesList",
      },
      ports_supporting100g_speed: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedToHclTerraform, true)(this._portsSupporting100GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupporting100GSpeedList",
      },
      ports_supporting10g_speed: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedToHclTerraform, true)(this._portsSupporting10GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupporting10GSpeedList",
      },
      ports_supporting1g_speed: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedToHclTerraform, true)(this._portsSupporting1GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupporting1GSpeedList",
      },
      ports_supporting25g_speed: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedToHclTerraform, true)(this._portsSupporting25GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupporting25GSpeedList",
      },
      ports_supporting40g_speed: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedToHclTerraform, true)(this._portsSupporting40GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupporting40GSpeedList",
      },
      ports_supporting_appliance_role: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleToHclTerraform, true)(this._portsSupportingApplianceRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupportingApplianceRoleList",
      },
      ports_supporting_breakout: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutToHclTerraform, true)(this._portsSupportingBreakout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupportingBreakoutList",
      },
      ports_supporting_fcoe: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeToHclTerraform, true)(this._portsSupportingFcoe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupportingFcoeList",
      },
      ports_supporting_inter_cluster_link: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkToHclTerraform, true)(this._portsSupportingInterClusterLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupportingInterClusterLinkList",
      },
      ports_supporting_server_role: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleToHclTerraform, true)(this._portsSupportingServerRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityPortsSupportingServerRoleList",
      },
      reserved_vsans: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityReservedVsansToHclTerraform, true)(this._reservedVsans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityReservedVsansList",
      },
      storage_limits: {
        value: dataIntersightCapabilitySwitchCapabilityStorageLimitsToHclTerraform(this._storageLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityStorageLimitsList",
      },
      switching_mode_capabilities: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesToHclTerraform, true)(this._switchingModeCapabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilitySwitchingModeCapabilitiesList",
      },
      system_limits: {
        value: dataIntersightCapabilitySwitchCapabilitySystemLimitsToHclTerraform(this._systemLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilitySystemLimitsList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityTagsList",
      },
      unified_ports: {
        value: cdktf.listMapperHcl(dataIntersightCapabilitySwitchCapabilityUnifiedPortsToHclTerraform, true)(this._unifiedPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityUnifiedPortsList",
      },
      version_context: {
        value: dataIntersightCapabilitySwitchCapabilityVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilitySwitchCapabilityVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
